import React from 'react';
import Card from '@/components/Card';
import { TCard } from '@/components/Card';

type TCardsList = {
  cardsList: TCard[]
}

const CardsList: React.FC<TCardsList> = ({cardsList}) => {
  return (
    <div className='cardsWrapper clearfix'>
      {cardsList &&
        cardsList.map(card =>
          <Card key={card.cardId} {...card}/>
        )
      }
    </div>
  )
}

export default CardsList;
