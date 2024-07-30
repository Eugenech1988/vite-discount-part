import React, { useEffect, useState } from 'react';
import Transaction from '@/components/Transaction';
import { TTransaction } from '@/components/Transaction';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import { setTransactions, setMoreTransactions } from '@/slices/mainSlice';
import './style.scss';
import transactionsTrigger from '@/assets/transactions-icon.svg';

type TTransactionList = {
  transactionList: TTransaction[],
}

const TransactionsList: React.FC<TTransactionList> = ({transactionList}) => {
  const [showMoreClicked, setShowMoreClicked] = useState<boolean>(false);
  const [originalTransactions, setOriginalTransactions] = useState<TTransaction[]>([]);
  const [openSoringPopup, setSortingPopupOpened] = useState<boolean>(false);
  //@ts-ignore
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DSC' | 'NONE'>('NONE');
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(state => state.main.transactions);
  useEffect(() => {
    setOriginalTransactions(transactionList);
    dispatch(setTransactions(transactionList));
  }, []);
  const showMoreClick = () => {
    setShowMoreClicked(true);
    setOriginalTransactions([...transactionList, ...transactionList]);
    dispatch(setMoreTransactions(transactionList));
    sortTransactions('NONE');
  };
  const statusOrder: any = {
    'active': 1,
    'processing': 2,
    'performed': 3
  };
  const sortTransactions = (order: 'ASC' | 'DSC' | 'NONE') => () => {
    let sortedTransactions;
    if (order === 'ASC') {
      sortedTransactions = [...transactions].sort((a, b) => statusOrder[a.statusType] - statusOrder[b.statusType]);
    } else if (order === 'DSC') {
      sortedTransactions = [...transactions].sort((a, b) => statusOrder[b.statusType] - statusOrder[a.statusType]);
    } else {
      sortedTransactions = [...originalTransactions];
    }
    setSortOrder(order);
    dispatch(setTransactions(sortedTransactions));
    setSortingPopupOpened(false);
  };
  const openTransactionsSortingPopup = () => {
    setSortingPopupOpened(true);
  };
  return (
    <>
      <h3 className="transactionsHeading subHeading">
        Transactions
        {openSoringPopup &&
          <div className="transactionsSortingPopup">
            <button onClick={sortTransactions('ASC')} className="transactionsSortingBtn">
            <span className="buttonTransactionsSortingText">
              ASC Sorting
            </span>
            </button>
            <button onClick={sortTransactions('DSC')} className="transactionsSortingBtn">
            <span className="buttonTransactionsSortingText">
              DSC Sorting
            </span>
            </button>
            <button onClick={sortTransactions('NONE')} className="transactionsSortingBtn">
            <span className="buttonTransactionsSortingText">
              Reset Sorting
            </span>
            </button>
          </div>
        }
        <button onClick={openTransactionsSortingPopup} className="transactionsTrigger">
          <img src={transactionsTrigger}/>
        </button>
      </h3>
      <div className="transactionsWrapper">
        {transactions &&
          transactions.map((transaction, index) =>
            <Transaction
              key={index}
              {...transaction}
            />
          )
        }
      </div>
      <div className="moreTransactionsWrapper">
        <button disabled={showMoreClicked} onClick={showMoreClick} className="moreTransactions submitBtn">
          Show More
        </button>
      </div>
    </>
  );
};

export default TransactionsList;
