import React, { useEffect, useState } from 'react';
import Transaction from '@/components/Transaction';
import { TTransaction } from '@/components/Transaction';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import { setTransactions, setMoreTransactions } from '@/slices/mainSlice';
import './style.scss';

type TTransactionList = {
  transactionList: TTransaction[]
}

const TransactionsList: React.FC<TTransactionList> = ({transactionList}) => {
  const [showMoreClicked, setShowMoreClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(state => state.main.transactions);
  useEffect(() => {
    dispatch(setTransactions(transactionList));
  }, []);
  const showMoreClick = () => {
    setShowMoreClicked(true);
    dispatch(setMoreTransactions(transactionList));
  };
  return (
    <>
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
