import React, { useState } from 'react';
import chevronIcon from '@/assets/chevron.svg';
import plusIcon from '@/assets/plus.svg';
import { setCurrentBalance } from '@/slices/mainSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import './style.scss';

const AddDeposit: React.FC = () => {
  const [depositListOpen, setDepositListOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentAmount = useAppSelector(state => state.main.currentAmount);
  const currentCurrency = useAppSelector(state => state.main.currentCurrency);
  const handleListClick = () => {
    setDepositListOpen(!depositListOpen);
  };
  const handleSetDeposit = (e: any) => {
    const splitValue = e.target.innerHTML.split(' ')
    dispatch(setCurrentBalance({amount: splitValue[0], currency: splitValue[1]}))
    setDepositListOpen(false);
  };
  return (
    <div className="depositWrapper flex-s-b">
      <div className="leftSide flex-s-b">
        <span className="depositNumber">
          {`${currentAmount} ${currentCurrency}`}
        </span>
        <span className="depositDiscount">
          13%
        </span>
        <span className="depositChevron" onClick={handleListClick}>
          <img src={chevronIcon} alt="chevron" className={depositListOpen ? 'up' : ''}/>
        </span>
        {depositListOpen &&
          <div className="depositNumbers">
            {/*for the future it will be calc for current balance*/}
            <span onClick={handleSetDeposit}>125.02 $</span>
            <span onClick={handleSetDeposit}>100.20 €</span>
            {/*<span onClick={handleSetDeposit}>180.80 £</span>*/}
          </div>
        }
      </div>
      <div className="rightSide">
        <button className="addDepositButton">
          <img src={plusIcon} alt="plus"/>
        </button>
      </div>
    </div>
  );
};

export default AddDeposit;
