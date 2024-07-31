import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { physicalCards } from '@/mocks/cards';
import { TCard } from '@/components/Card';
import { TTransaction } from '@/components/Transaction';

type TUiState = {
  menuOpened: boolean,
  addTransactionOpened: boolean,
  transactions: TTransaction[],
  currentCurrency: string,
  currentAmount: string,
  paymentCategory: string,
  paymentMethodsInCategory: TCard[]
}

const initialState: TUiState = {
  menuOpened: false,
  addTransactionOpened: false,
  transactions: [],
  currentCurrency: '$',
  currentAmount: '125.02',
  paymentCategory: 'Cards, E-Money, PIN',
  paymentMethodsInCategory: physicalCards
};

const mainSlice = createSlice({
  name: 'mainParameters',
  initialState,
  reducers: {
    setMenuOpened: (state) => {
      state.menuOpened = !state.menuOpened;
    },
    setTransactionMenu: (state) => {
      state.addTransactionOpened = !state.addTransactionOpened;
    },
    setTransactions: (state, action: PayloadAction<TTransaction[]>) => {
      state.transactions = action.payload;
    },
    setMoreTransactions: (state, action: PayloadAction<TTransaction[]>) => {
      state.transactions.push(...action.payload);
    },
    setCurrentBalance: (state, action: PayloadAction<{ currency: string; amount: string }>) => {
      state.currentCurrency = action.payload.currency;
      state.currentAmount = action.payload.amount;
    },
    setPaymentCategory: (state, action: PayloadAction<string>) => {
      state.paymentCategory = action.payload;
    }
  }
});

export const {
  setMenuOpened,
  setTransactions,
  setMoreTransactions,
  setCurrentBalance,
  setTransactionMenu,
} = mainSlice.actions;
export default mainSlice.reducer;
