import React, { useState } from 'react';
import backIcon from '@/assets/back.svg';
import closeIcon from '@/assets/close.svg';
import mastercardLogo from '@/assets/mastercard-logo.svg';
import chevronIcon from '@/assets/chevron.svg';
import checkIcon from '@/assets/check.svg';
import { useNavigate } from 'react-router-dom';
import { setRemoveTransactionMenu } from '@/slices/mainSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHook';
import useWindowWidth from '@/helpers/useWindowWidth';
import './style.scss';

const AddTransaction: React.FC = () => {
  const [isPromoRight, setPromoRight] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<string>('');
  const [currentAmount, setCurrentAmount] = useState<string>('$ 21');
  const dispatch = useAppDispatch();
  const currency = useAppSelector(state => state.main.currentCurrency);
  const amount = useAppSelector(state => state.main.currentAmount);
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
    const amountThatWas = Number(currentAmount.split(' ')[1]);
    let result;
    if ((amountThatWas + amountToAdd) < Number(amount)) {
      result = amountThatWas + amountToAdd;
    } else {
      result = amountThatWas;
    }
    setCurrentAmount(`$ ${result.toString()}`);
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
              {/*here will be logic to choose payment method*/}
              <div className="addTransactionPaymentMethodWrapper flex-s-b">
                <div className="firstPart">
                  <img src={mastercardLogo} className="addTransactionPaymentMethodLogo"/>
                </div>
                <div className="secondPart">
              <span className="addTransactionPaymentTitle">
                Mastercard{'\u00A0\u00B7\u00A0'}Commission 3%
              </span>
                  <span className="addTransactionPaymentSubTitle">
                Please notice that you will send money in the USD
              </span>
                </div>
                <div className="thirdPart">
                  <img src={chevronIcon} className="chevron"/>
                </div>
              </div>
              {/*here will be addTransaction logic*/}
              <div className="addTransactionAmountWrapper">
                <p className="addTransactionAmountHeading">
                  Amount
                </p>
                <div className="addTransactionAmount">
                  {currentAmount}
                </div>
                <div className="addTransactionAddAmountWrapper clearfix">
              <span onClick={addSomeAmount} className="addTransactionAddAmount">
                + $10
              </span>
                  <span onClick={addSomeAmount} className="addTransactionAddAmount">
                + $20
              </span>
                  <span onClick={addSomeAmount} className="addTransactionAddAmount">
                + $30
              </span>
                  <span onClick={addSomeAmount} className="addTransactionAddAmount">
                + $50
              </span>
                  <span onClick={addSomeAmount} className="addTransactionAddAmount">
                + $100
              </span>
                </div>
                <div className="addTransactionClarification">
                  From 21.00 to 906.00 USD at a time
                </div>
                <div className="addTransactionDiscountWrapper">
                  <p className="addAddTransactionDiscount">
                    Promo Code
                  </p>
                  <div className="addTransactionDiscountInputWrapper">
                    {isPromoRight &&
                      <img src={checkIcon} className="addTransactionDiscountInputCheck"/>
                    }
                    <input placeholder="Promo Code" onChange={handleDiscountChange} value={promoValue} type="text"
                           className="addTransactionDiscountInput"/>
                  </div>
                  <button onClick={handleDiscountSubmit} disabled={!isPromoRight}
                          className="addTransactionDiscountBtn submitBtn">
                <span className="addTransactionDiscountBtnText">
                  Add
                </span>
                  </button>
                </div>
                <button className="addTransactionSubmitBtn submitBtn">
              <span onClick={handleCloseClick} className="addTransactionSubmitBtnText">
                Deposit
              </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AddTransaction;
