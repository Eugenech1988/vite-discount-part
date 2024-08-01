import mastercardLogo from '@/assets/mastercard-logo.svg';
import mastercardDesktopLogo from '@/assets/mastercard-logo.svg';
import visaLogo from '@/assets/visa-logo.svg';
import viseDesktopLogo from '@/assets/visa-logo.svg';
import skrillLogo from '@/assets/skrill-logo.svg';
import slrillDesktopLogo from '@/assets/skrill-desktop-logo.svg';
import privateMoneyLogo from '@/assets/private-money-logo.svg';
import privateMoneyDesktopLogo from '@/assets/privat-money-desktop-logo.svg';
import piastrixLogo from '@/assets/piastrix-logo.svg';
import piastrixDesktopLogo from '@/assets/piastrix-desktop-logo.svg';
import sticpayLogo from '@/assets/sticpay-logo.svg';
import sticpayDesktopLogo from '@/assets/sticpay-desktop-logo.svg';
import pinLogo from '@/assets/pin-logo.svg';
import pinDesktopLogo from '@/assets/pin-desktop-logo.svg';
import bitcoinLogo from '@/assets/bitcoin-logo.svg';
import bitcoinDesktopLogo from '@/assets/bitcoin-desktop-logo.svg';
import etherumLogo from '@/assets/ethereum-logo.svg';
import etherumDesktopLogo from '@/assets/ethereum-desktop-logo.svg';
import tetherLogo from '@/assets/tether-logo.svg';
import tetherDesktopLogo from '@/assets/tether-desktop-logo.svg';

export const physicalCards = [
  {
    cardId: '1',
    logoImg: mastercardLogo,
    logoDesktopImg: mastercardDesktopLogo,
    withBadge: true,
    badgeType: 'regular',
    badgeText: 'popular',
    cardHeading: 'MasterCard',
    cardText: 'Commission: 3%',
    cardCurrency: '$'
  },
  {
    cardId: '2',
    logoImg: visaLogo,
    logoDesktopImg: viseDesktopLogo,
    withBadge: true,
    badgeType: 'hot',
    badgeText: 'trusted',
    cardHeading: 'Visa',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  },
  {
    cardId: '3',
    logoImg: skrillLogo,
    logoDesktopImg: slrillDesktopLogo,
    withBadge: false,
    badgeType: '',
    badgeText: '',
    cardHeading: 'Skrill',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  },
  {
    cardId: '4',
    logoImg: privateMoneyLogo,
    logoDesktopImg: privateMoneyDesktopLogo,
    withBadge: false,
    badgeType: '',
    badgeText: '',
    cardHeading: 'Private Money',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  },
  {
    cardId: '5',
    logoImg: piastrixLogo,
    logoDesktopImg: piastrixDesktopLogo,
    withBadge: false,
    badgeType: '',
    badgeText: '',
    cardHeading: 'Piastrix, EUR',
    cardText: 'Commission: 0%',
    cardCurrency: '€'
  },
  {
    cardId: '6',
    logoImg: sticpayLogo,
    logoDesktopImg: sticpayDesktopLogo,
    withBadge: false,
    badgeType: '',
    badgeText: '',
    cardHeading: 'Sticpay, EUR',
    cardText: 'Commission: 0%',
    cardCurrency:'€'
  },
  {
    cardId: '8',
    logoImg: pinLogo,
    logoDesktopImg: pinDesktopLogo,
    withBadge: false,
    badgeType: '',
    badgeText: '',
    cardHeading: 'PIN',
    cardText: 'Commission: 1%',
    cardCurrency: '$'
  }
];

export const cryptoCurrency = [
  {
    cardId: '1',
    logoImg: bitcoinLogo,
    logoDesktopImg: bitcoinDesktopLogo,
    withBadge: false,
    badgeType: 'regular',
    badgeText: 'popular',
    cardHeading: 'BTC',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  },
  {
    cardId: '2',
    logoImg: etherumLogo,
    logoDesktopImg: etherumDesktopLogo,
    withBadge: false,
    badgeType: 'regular',
    badgeText: 'popular',
    cardHeading: 'Etherum',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  },
  {
    cardId: '3',
    logoImg: tetherLogo,
    logoDesktopImg: tetherDesktopLogo,
    withBadge: false,
    badgeType: 'regular',
    badgeText: 'popular',
    cardHeading: 'USDT',
    cardText: 'Commission: 0%',
    cardCurrency: '$'
  }
];
