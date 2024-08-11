import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import { useNavigate } from 'react-router-dom';
import backIcon from '@/assets/back.svg';
import closeIcon from '@/assets/close.svg';
import useWindowWidth from '@/helpers/useWindowWidth';
import { setRemoveTransactionMenu } from '@/slices/mainSlice';
import PromoCodeInput from '@/components/AddTransaction/components/PromoCodeInput';
import AmountInput from '@/components/AddTransaction/components/AmountInput';
import PaymentMethod from '@/components/AddTransaction/components/PaymentMethod';
import './style.scss';

const AddTransactionModal: React.FC = () => {
  const [isPromoRight, setPromoRight] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<string>('');
  const [currentAmount, setCurrentAmount] = useState<string>('21');
  const [showMethodsDD, setMethodsDD] = useState<boolean>(false);
  const currency = useAppSelector(state => state.main.currentCurrency);
  const amount = useAppSelector(state => state.main.currentAmount);
  const paymentMethod = useAppSelector(state => state.main.paymentMethod);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  const handleBackClick = () => {
    dispatch(setRemoveTransactionMenu());
    navigate('/');
  };

  const handleCloseClick = () => {
    dispatch(setRemoveTransactionMenu());
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value);
    setPromoRight(e.target.value.length > 3);
  };

  const handleDiscountSubmit = () => {
    setPromoRight(false);
    setPromoValue('');
  };

  const addSomeAmount = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const amountToAdd = Number(e.currentTarget.innerHTML.split(' ')[1].slice(1));
    const amountThatWas = Number(currentAmount);
    let result = amountThatWas + amountToAdd;
    if (result > Number(amount)) {
      result = amountThatWas;
    }
    setCurrentAmount(result.toString());
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^\d]/g, '');
    setCurrentAmount(numericValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  const handlePaymentMethodClick = () => {
    setMethodsDD(!showMethodsDD);
  };

  return (
    <div className="addTransactionModalWrapper">
      {windowWidth > 859 && (
        <>
          <div className="addTransactionOverlay" onClick={handleCloseClick} />
          <div className="addTransactionWrapper modal">
            <div className="addTransactionHeading flex-s-b">
              <div className="addTransactionBack flex-s-b" onClick={handleBackClick}>
                <img className="addTransactionBackIcon" src={backIcon} />
                <p>Back to Payment Methods</p>
              </div>
              <button className="addTransactionClose" onClick={handleCloseClick}>
                <img src={closeIcon} />
              </button>
            </div>
            <div className="addTransactionsBalanceBadge">
              Current Balance:{'\u00A0'}
              <div className="addTransactionBalanceCount">
                <p className="currency">{currency}</p>
                {'\u00A0'}
                <p className="currentAmount">{amount}</p>
              </div>
            </div>
            <PaymentMethod
              paymentMethod={paymentMethod}
              onClick={handlePaymentMethodClick}
              showDropdown={showMethodsDD}
            />

            <AmountInput
              currentAmount={currentAmount}
              onAmountChange={handleAmountChange}
              onKeyPress={handleKeyPress}
              onAddAmount={addSomeAmount}
            />
            <PromoCodeInput
              promoValue={promoValue}
              isPromoRight={isPromoRight}
              onPromoChange={handleDiscountChange}
              onPromoSubmit={handleDiscountSubmit}
            />
            <button onClick={handleCloseClick} className="addTransactionSubmitBtn submitBtn">
              <span className="addTransactionSubmitBtnText">Deposit</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddTransactionModal;
