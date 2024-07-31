import React from 'react';

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
      <img src={logoImg}/>
      <p>{cardHeading}</p>
      <p>{cardText}</p>
    </div>
  );
};

export default DepositMethodItem;
