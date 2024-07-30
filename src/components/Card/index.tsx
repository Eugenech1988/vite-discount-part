import React from 'react';
import useWindowWidth from '@/helpers/useWindowWidth';
import { useAppDispatch } from '@/store/storeHook';
import { setAddTransactionMenu } from '@/slices/mainSlice';
import cx from 'classnames';
import './style.scss';

export type TCard = {
  cardId: string
  logoImg: string,
  logoDesktopImg: string,
  withBadge?: boolean,
  badgeType?: string,
  badgeText?: string,
  cardHeading?: string
  cardText?: string,
}

const Card: React.FC<TCard> = ({
                                 // cardId,
                                 logoImg,
                                 logoDesktopImg,
                                 withBadge,
                                 badgeType,
                                 badgeText,
                                 cardHeading,
                                 cardText,
                               }) => {
  const windowWidth = useWindowWidth();
  const dispatch = useAppDispatch();
  const handleCardClick = () => {
    dispatch(setAddTransactionMenu());
  }
  return (
    <div className="cardWrapper" onClick={handleCardClick}>
      {withBadge &&
        <div className={cx('cardBadge', {'regular': badgeType === 'regular', 'hot': badgeType === 'hot'})}>
          <span className="cardBadgeText">
            {badgeText}
          </span>
        </div>
      }
      <div className={'cardLogoWrapper'}>
        <img src={windowWidth > 860 ? logoDesktopImg : logoImg}/>
      </div>
      <div className="cardBottomTextWrapper">
        <h4 className="cardHeading">
          {cardHeading}
        </h4>
        <p className="cardText">
          {cardText}
        </p>
      </div>
    </div>
  );
};

export default Card;
