import React from 'react';
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
  return (
    <div className='depositMethodItemWrapper'>
      <img className='depositMethodItemImg' src={logoImg}/>
      <p className='depositMethodItemText'>{cardHeading}{'\u00A0'}{cardText}</p>
    </div>
  );
};

export default DepositMethodItem;
