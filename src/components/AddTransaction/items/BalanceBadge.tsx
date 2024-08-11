import React from 'react';

interface BalanceBadgeProps {
    currency: string;
    amount: string;
}

const BalanceBadge: React.FC<BalanceBadgeProps> = ({currency, amount}) => {
  return (
    <div className="addTransactionsBalanceBadge">
      Current Balance:{'\u00A0'}
      <div className="addTransactionBalanceCount">
        <p className="currency">
          {currency}
        </p>
        {'\u00A0'}
        <p className="currentAmount">
          {amount}
        </p>
      </div>
    </div>
  )
}

export default BalanceBadge;
