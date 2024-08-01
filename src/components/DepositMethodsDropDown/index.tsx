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
        physicalCards.map(card => <DepositMethodItem {...card}/>)
      }
      <p className="depositMethodDDCategoryHeading">
        Cryptocurrency
      </p>
      {cryptoCurrency &&
        cryptoCurrency.map(card => <DepositMethodItem {...card}/>)
      }
    </div>
  );
};

export default DepositMethodsDropDown;
