import React from 'react';
import checkIcon from '@/assets/check.svg';

interface PromoCodeInputProps {
  promoValue: string;
  isPromoRight: boolean;
  onPromoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPromoSubmit: () => void;
}

const PromoCodeInput: React.FC<PromoCodeInputProps> = ({ promoValue, isPromoRight, onPromoChange, onPromoSubmit }) => (
  <div className="addTransactionDiscountWrapper">
    <p className="addAddTransactionDiscount">
      Promo Code
    </p>
    <div className="addTransactionDiscountInputWrapper">
      {isPromoRight && <img src={checkIcon} className="addTransactionDiscountInputCheck" />}
      <input
        placeholder="Promo Code"
        onChange={onPromoChange}
        value={promoValue}
        type="text"
        className="addTransactionDiscountInput"
      />
    </div>
    <button
      onClick={onPromoSubmit}
      disabled={!isPromoRight}
      className="addTransactionDiscountBtn submitBtn"
    >
      <span className="addTransactionDiscountBtnText">
        Add
      </span>
    </button>
  </div>
);

export default PromoCodeInput;
