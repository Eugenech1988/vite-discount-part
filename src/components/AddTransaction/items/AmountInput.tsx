import React from 'react';

interface AmountInputProps {
  currentAmount: string;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddAmount: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const addAmountButtonsSteps = ['10', '20', '30', '50', '100'];

const AmountInput: React.FC<AmountInputProps> = ({ currentAmount, onAmountChange, onKeyPress, onAddAmount }) => (
  <div className="addTransactionAmountWrapper">
    <p className="addTransactionAmountHeading">Amount</p>
    <div className="addTransactionAmount">
      <input
        onChange={onAmountChange}
        onKeyPress={onKeyPress}
        className="addTransactionInput"
        value={`$ ${currentAmount}`}
        type="text"
      />
    </div>
    <div className="addTransactionAddAmountWrapper clearfix">
      {addAmountButtonsSteps.map((amountBtn) => (
        <span key={amountBtn} onClick={onAddAmount} className="addTransactionAddAmount">
          + ${amountBtn}
        </span>
      ))}
    </div>
    <div className="addTransactionClarification">
      From 21.00 to 906.00 USD at a time
    </div>
  </div>
);

export default AmountInput;
