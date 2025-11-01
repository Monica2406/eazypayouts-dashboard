import React from "react";
import "../styles/table.css";

export default function LoadTable({ data }) {
  return (
    <div className="table-container">
      <p className="table-title">Latest Loads are displayed here</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No / UPI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.date}</td>
              <td className="credit">₹ {txn.credit}</td>
              <td>₹ {txn.balance}</td>
              <td>{txn.utr}</td>
              <td>{txn.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
