import React from 'react';
import DepositMethodsDropDown from '@/components/DepositMethodsDropDown';
import chevronIcon from '@/assets/chevron.svg';

interface PaymentMethodProps {
  paymentMethod: any;
  onClick: () => void;
  showDropdown: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ paymentMethod, onClick, showDropdown }) => (
  <div onClick={onClick} className={`addTransactionPaymentMethodWrapper flex-s-b${showDropdown ? ' active' : ''}`}>
    <div className="firstPart flex-s-b">
      <img src={paymentMethod.image} className="addTransactionPaymentMethodLogo" />
      <div className="secondPart">
        <span className="addTransactionPaymentTitle">
          {paymentMethod.heading}{'\u00A0\u00B7\u00A0'}{paymentMethod.text}
        </span>
        <span className="addTransactionPaymentSubTitle">
          {'Please notice that you will send money in the' + (paymentMethod.currency === '$' ? ' USD' : ' EUR')}
        </span>
      </div>
    </div>
    <div className="addTransactionChevron">
      <img src={chevronIcon} className={`chevron${showDropdown ? ' up' : ''}`} />
    </div>
    {showDropdown && <DepositMethodsDropDown />}
  </div>
);

export default PaymentMethod;
