import React from 'react';
import useWindowWidth from '@/helpers/useWindowWidth';
import cx from 'classnames';
import './style.scss';

export type TTransaction = {
  // transactionId?: string,
  paymentImg: string,
  statusType: string,
  transactionPayment: string,
  transactionNumber: string,
  transactionDate: string,
  transactionPayed: string
}

const Transaction: React.FC<TTransaction> = ({
                                               // transactionId,
                                               paymentImg,
                                               statusType,
                                               transactionPayment,
                                               transactionNumber,
                                               transactionDate,
                                               transactionPayed
                                             }) => {
  const windowWidth = useWindowWidth();
  return (
    <div className="transactionWrapper">
      <div className="transactionCard flex-s-b">
        <div className="transactionsPaymentWrapper flex-s-b">
          <div className="transactionPaymentLogoWrapper">
            <img src={paymentImg}/>
          </div>
          {windowWidth > 859 &&
            <div className="transactionFeature">
              <div className="transactionFeatureHead">
                {transactionPayment}
              </div>
              <div className="transactionFeatureText">
                Withdraw
              </div>
            </div>
          }
        </div>
        {windowWidth > 859 &&
          <>
            <div className="transactionFeature">
              <div className="transactionFeatureHead">
                {transactionNumber}
              </div>
              <div className="transactionFeatureText">
                Transactions Number
              </div>
            </div>
            <div className="transactionFeature">
              <div className="transactionFeatureHead">
                {transactionDate}
              </div>
              <div className="transactionFeatureText">
                Payment Date
              </div>
            </div>
            <div className="transactionFeature">
              <div className="transactionFeatureHead">
                {transactionPayed}
              </div>
              <div className="transactionFeatureText">
                Payment Payed
              </div>
            </div>
          </>
        }
        <div className="transactionStatus">
          <p className={cx('transactionStatusMessage', {
            'processing': statusType === 'processing',
            'active': statusType === 'active',
            'performed': statusType === 'performed'
          })}>
            {statusType}
          </p>
          <p className="statusMessage">
            Operation Status
          </p>
        </div>
      </div>
      {windowWidth < 860 &&
        <div className="transactionInternals">
          <div className="transactionFeature">
            <div className="transactionFeatureHead">
              {transactionPayment}
            </div>
            <div className="transactionFeatureText">
              Withdraw
            </div>
          </div>
          <div className="transactionFeature">
            <div className="transactionFeatureHead">
              {transactionNumber}
            </div>
            <div className="transactionFeatureText">
              Transactions Number
            </div>
          </div>
          <div className="transactionFeature">
            <div className="transactionFeatureHead">
              {transactionDate}
            </div>
            <div className="transactionFeatureText">
              Payment Date
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Transaction;
