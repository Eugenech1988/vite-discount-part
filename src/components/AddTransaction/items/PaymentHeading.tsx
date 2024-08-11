import React from 'react';
import backIcon from '@/assets/back.svg';
import closeIcon from '@/assets/close.svg';

interface PaymentHeadingProps {
  onBackClick: () => void;
  oncloseClick: () => void
}

const PaymentHeading: React.FC<PaymentHeadingProps> = ({onBackClick, oncloseClick}) => {
  return (
    <div className="addTransactionHeading flex-s-b">
      <div className="addTransactionBack flex-s-b" onClick={onBackClick}>
        <img className="addTransactionBackIcon" src={backIcon}/>
        <p>Back to Payment Methods</p>
      </div>
      <button className="addTransactionClose" onClick={oncloseClick}>
        <img src={closeIcon}/>
      </button>
    </div>
  )
}

export default PaymentHeading;
