import React from 'react';
import DepositMethodItem from '@/components/DepositMethodItem';
import { physicalCards, cryptoCurrency } from '@/mocks/cards';
import './style.scss';

const DepositMethodsDropDown: React.FC = () => {
  return (
    <div className="depositMethodsDDWrapper">
      <p className="depositMethodDDCategoryHeading">
        Cards, E-Money, PIN
      </p>
      {physicalCards &&
        physicalCards.map((card, index) => <DepositMethodItem key={index} {...card}/>)
      }
      <p className="depositMethodDDCategoryHeading">
        Cryptocurrency
      </p>
      {cryptoCurrency &&
        cryptoCurrency.map((card, index) => <DepositMethodItem  key={index}{...card}/>)
      }
    </div>
  );
};

export default DepositMethodsDropDown;
