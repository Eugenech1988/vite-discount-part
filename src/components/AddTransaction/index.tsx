import React, { useState } from 'react';
import backIcon from '@/assets/back.svg';
import closeIcon from '@/assets/close.svg';
import AmountInput from '@/components/AddTransaction/components/AmountInput';
import PromoCodeInput from '@/components/AddTransaction/components/PromoCodeInput';
import PaymentMethod from '@/components/AddTransaction/components/PaymentMethod';
import { useNavigate } from 'react-router-dom';
import { setRemoveTransactionMenu } from '@/slices/mainSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import useWindowWidth from '@/helpers/useWindowWidth';
import './style.scss';

const AddTransaction: React.FC = () => {
  const [isPromoRight, setPromoRight] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<string>('');
  const [currentAmount, setCurrentAmount] = useState<string>('21');
  const currency = useAppSelector(state => state.main.currentCurrency);
  const amount = useAppSelector(state => state.main.currentAmount);
  const paymentMethod = useAppSelector(state => state.main.paymentMethod);
  const dispatch = useAppDispatch();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  const handleBackClick = () => {
    dispatch(setRemoveTransactionMenu());
    navigate('/');
  };
  const handleCloseClick = () => {
    dispatch(setRemoveTransactionMenu());
  };
  const handleDiscountChange = (e: any) => {
    setPromoValue(e.target.value);
    if (e.target.value.length > 3) {
      setPromoRight(true);
    } else {
      setPromoRight(false);
    }
  };
  const handleDiscountSubmit = () => {
    setPromoRight(false);
    setPromoValue('');
  };
  const addSomeAmount = (e: any) => {
    const amountToAdd = Number(e.target.innerHTML.split(' ')[1].slice(1));
    const amountThatWas = Number(currentAmount);
    let result;
    if ((amountThatWas + amountToAdd) < Number(amount)) {
      result = amountThatWas + amountToAdd;
    } else {
      result = amountThatWas;
    }
    setCurrentAmount(result.toString());
  };
  const handleAmountChange = (e: any) => {
    const {value} = e.target;
    const numericValue = value.replace(/[^\d]/g, '');

    setCurrentAmount(numericValue.toString());
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };
  return (
    <>
      {windowWidth < 860 &&
        <div className="addTransactionWrapper">
          <div className="container">
            <div className="addTransactionHeading flex-s-b">
              <div className="addTransactionBack flex-s-b" onClick={handleBackClick}>
                <img className="addTransactionBackIcon" src={backIcon}/>
                <p>Back to Payment Methods</p>
              </div>
              <button className="addTransactionClose" onClick={handleCloseClick}>
                <img src={closeIcon}/>
              </button>
            </div>
            <div className="addTransactionContent">
              <div className="addTransactionsBalanceBadge">
                Current Balance:{'\u00A0'}
                <div className="addTransactionBalanceCount">
                  <p className="currency">
                    {currency}
                  </p>
                  {'\u00A0'}
                  <p className="currentAmount">
                    {amount}
                  </p>
                </div>
              </div>
              <PaymentMethod
                paymentMethod={paymentMethod}
                onClick={() => {}}
                showDropdown={false}
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
              <button className="addTransactionSubmitBtn submitBtn">
              <span onClick={handleCloseClick} className="addTransactionSubmitBtnText">
                Deposit
              </span>
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AddTransaction;
