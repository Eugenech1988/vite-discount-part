import React, { useState } from 'react';
import PaymentHeading from '@/components/AddTransaction/items/PaymentHeading';
import AmountInput from '@/components/AddTransaction/items/AmountInput';
import PromoCodeInput from '@/components/AddTransaction/items/PromoCodeInput';
import PaymentMethod from '@/components/AddTransaction/items/PaymentMethod';
import BalanceBadge from '@/components/AddTransaction/items/BalanceBadge';
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
    let result;
    if ((amountThatWas + amountToAdd) < Number(amount)) {
      result = amountThatWas + amountToAdd;
    } else {
      result = amountThatWas;
    }
    setCurrentAmount(result.toString());
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const numericValue = value.replace(/[^\d]/g, '');

    setCurrentAmount(numericValue.toString());
  };
  return (
    <>
      {windowWidth < 860 &&
        <div className="addTransactionWrapper">
          <div className="container">
            <PaymentHeading
              onBackClick={handleBackClick}
              oncloseClick={handleCloseClick}
            />
            <BalanceBadge
              currency={currency}
              amount={amount}
            />
            <PaymentMethod
              paymentMethod={paymentMethod}
              onClick={() => {
              }}
              showDropdown={false}
            />
            <AmountInput
              currentAmount={currentAmount}
              onAmountChange={handleAmountChange}
              onKeyPress={() => {}}
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
      }
    </>
  );
};

export default AddTransaction;
