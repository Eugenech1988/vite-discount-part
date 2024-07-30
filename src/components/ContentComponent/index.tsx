import React from 'react';
import CardsList from '@/components/CadsList';
import { cryptoCurrency, physicalCards } from '@/mocks/cards';
import Promo from '@/components/Promo';
import TransactionsList from '@/components/TransactionsList';
import { useAppSelector } from '@/store/storeHook';
import { transactions } from '@/mocks/transactions';
import './style.scss';

const ContentComponent: React.FC = () => {
  const showModal = useAppSelector(state => state.main.addTransactionOpened)
  return (
    <div className={'content' + (showModal ? ' modal' : '')}>
      <div className='container'>
        <h1 className='heading'>
          Make A Deposit
        </h1>
        <h2 className='subHeading'>
          Choose Payment Method
        </h2>
        {/*here will be logics to choose payment method*/}
        <section className='paymentSection cardsSection'>
          <h3 className='paymentHeading'>
            Cards, E-Money, PIN
          </h3>
          <CardsList
            cardsList={physicalCards}
          />
        </section>
        <section className='paymentSection cardsSection'>
          <h3 className='paymentHeading'>
            Cryptocurrency
          </h3>
          <CardsList
            cardsList={cryptoCurrency}
          />
        </section>
        <section className='paymentSection promoSection'>
          <h3 className='promoHeading subHeading'>
            Have a Promo Code?
          </h3>
          <p className='promoHelper'>
            Enter promo code here. It will activate a special bonus!
          </p>
          <Promo/>
        </section>
        <section className='paymentSection transactionsSection'>
          <TransactionsList
            transactionList={transactions}
          />
        </section>
      </div>
    </div>
  )
}

export default ContentComponent;
