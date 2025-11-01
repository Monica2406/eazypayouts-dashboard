import React from "react";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">EazyPayouts</h2>
      <ul>
        <li className="active">Loads</li>
        <li>Statements</li>
        <li>Transactions</li>
      </ul>
      <div className="logout">Logout</div>
    </div>
  );
}
