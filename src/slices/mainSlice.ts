import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCard } from '@/components/Card'
import { TTransaction } from '@/components/Transaction';

type TUiState = {
  menuOpened: boolean,
  addTransactionOpened: boolean,
  transactions: TTransaction[],
  currentCurrency: string,
  currentAmount: string,
  paymentMethod: TCard | null
}

const initialState: TUiState = {
  menuOpened: false,
  addTransactionOpened: false,
  transactions: [],
  currentCurrency: '$',
  currentAmount: '125.02',
  paymentMethod: null
};

const mainSlice = createSlice({
  name: 'mainParameters',
  initialState,
  reducers: {
    setMenuOpened: (state) => {
      state.menuOpened = true
    },
    setMenuClosed: (state) => {
      state.menuOpened = false
    },
    setAddTransactionMenu: (state) => {
      state.addTransactionOpened = true
    },
    setRemoveTransactionMenu: (state) => {
      state.addTransactionOpened = false
    },
    setTransactions: (state, action: PayloadAction<TTransaction[]>) => {
      state.transactions = action.payload;
    },
    setMoreTransactions: (state, action: PayloadAction<TTransaction[]>) => {
      state.transactions.push(...action.payload);
    },
    setCurrentBalance: (state, action: PayloadAction<{currency: string; amount: string}>) => {
      state.currentCurrency = action.payload.currency;
      state.currentAmount = action.payload.amount;
    },
    setPaymentMethod: (state, action: PayloadAction<TCard>) => {
      state.paymentMethod = action.payload
    },
  }
});

export const { setMenuOpened, setMenuClosed, setTransactions, setMoreTransactions, setCurrentBalance, setAddTransactionMenu, setRemoveTransactionMenu } = mainSlice.actions;
export default mainSlice.reducer;
