import React, { useState } from 'react';
import checkImg from '@/assets/check.svg';
import './style.scss';

const Promo: React.FC = () => {
  const [isPromoRight, setPromoRight] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<string>('');
  const handlePromoChange = (e: any) => {
    setPromoValue(e.target.value);
    if (e.target.value.length > 3) {
      setPromoRight(true);
    } else {
      setPromoRight(false);
    }
  };
  const handlePromoSubmit = () => {
    setPromoRight(false);
    setPromoValue('');
  };
  return (
    <div className="promoWrapper">
      <div className="promoInputWrapper">
        {isPromoRight &&
          <img src={checkImg} className="promoCheck"/>
        }
        <input value={promoValue} type="text" onChange={handlePromoChange} placeholder="please write your promo here"
               className="promoInput"/>
      </div>
      <button disabled={!isPromoRight} onClick={handlePromoSubmit} className="promoSubmit">
        Apply
      </button>
    </div>
  );
};

export default Promo;
