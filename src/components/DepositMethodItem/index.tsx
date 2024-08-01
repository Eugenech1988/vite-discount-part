import React from 'react';
import { useAppDispatch } from '@/store/storeHook';
import { setPaymentMethod } from '@/slices/mainSlice';
import './style.scss';

export type TPaymentItem = {
  logoImg: string,
  cardHeading: string,
  cardText: string,
  cardCurrency: string
}

const DepositMethodItem: React.FC<TPaymentItem> = ({
                                                    logoImg,
                                                    cardHeading,
                                                    cardText,
                                                    cardCurrency
                                                  }) => {
  const dispatch = useAppDispatch();
  const handlePaymentClick = () => {
    dispatch(setPaymentMethod({
      image: logoImg,
      heading: cardHeading,
      text: cardText,
      currency: cardCurrency
    }))
  };
  return (
    <div className='depositMethodItemWrapper' onClick={handlePaymentClick}>
      <img className='depositMethodItemImg' src={logoImg}/>
      <p className='depositMethodItemText'>{cardHeading}{'\u00A0'}{'\u00B7'}{'\u00A0'}{cardText},{'\u00A0'}{cardCurrency}</p>
    </div>
  );
};

export default DepositMethodItem;
