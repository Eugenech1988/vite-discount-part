import sticpayIcon from '@/assets/sticpay-logo.svg';
import mastercardIcon from '@/assets/mastercard-logo.svg';

export const transactions = [
  {
    transactionId: '1',
    paymentImg: sticpayIcon,
    statusType: 'processing',
    transactionPayment: 'by SticPay, USD',
    transactionNumber: '12345',
    transactionDate: '05.05.2005 - 16:00',
    transactionPayed: '255.20 $'
  },
  {
    transactionId: '2',
    paymentImg: sticpayIcon,
    statusType: 'active',
    transactionPayment: 'by SticPay, USD',
    transactionNumber: '12345',
    transactionDate: '05.05.2005 - 16:00',
    transactionPayed: '28.03 $'
  },
  {
    transactionId: '3',
    paymentImg: mastercardIcon,
    statusType: 'performed',
    transactionPayment: 'by Mastercard, USD',
    transactionNumber: '12345',
    transactionDate: '05.05.2005 - 16:00',
    transactionPayed: '89.30 $'
  },
];
