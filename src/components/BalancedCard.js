import React from "react";
import "../styles/balanceCard.css";

export default function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <div className="balance-icon">💳</div>
      <div>
        <p className="title">Available Balance</p>
        <h2 className="amount">₹ {balance?.toLocaleString()}</h2>
      </div>
    </div>
  );
}
