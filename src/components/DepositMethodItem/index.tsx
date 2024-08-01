import React from 'react';
import { useAppDispatch } from '@/store/storeHook';
import { setPaymentMethod } from '@/slices/mainSlice';
import './style.scss';

type TMethodItem = {
  logoImg: string,
  cardHeading: string,
  cardText: string
}

const DepositMethodItem: React.FC<TMethodItem> = ({
                                                    logoImg,
                                                    cardHeading,
                                                    cardText
                                                  }) => {
  const dispatch = useAppDispatch();
  const handlePaymentClick = () => {
    dispatch(setPaymentMethod({
      image: logoImg,
      heading: cardHeading,
      text: cardText
    }))
  };
  return (
    <div className='depositMethodItemWrapper' onClick={handlePaymentClick}>
      <img className='depositMethodItemImg' src={logoImg}/>
      <p className='depositMethodItemText'>{cardHeading}{'\u00A0'}{cardText}</p>
    </div>
  );
};

export default DepositMethodItem;
