import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import LoadTable from "../components/LoadTable";
import { fetchCompanies, fetchAccounts, fetchAccountData } from "../api/mockApi";
import axios from "axios";
import "./Loads.css";

export default function Loads() {
  const [companies, setCompanies] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  // Fetch Companies
  useEffect(() => {
    async function getCompanies() {
      const res = await axios.get("/data/companies.json"); // or API call
      setCompanies(res.data);
    }
    getCompanies();
  }, []);

  // Fetch Accounts based on selected company
  useEffect(() => {
    async function getAccounts() {
      if (!selectedCompany) return;
      const res = await axios.get(`/data/${selectedCompany}_accounts.json`);
      setAccounts(res.data);
    }
    getAccounts();
  }, [selectedCompany]);

  // Fetch Transactions based on selected account
  useEffect(() => {
    async function getTransactions() {
      if (!selectedAccount) return;
      const res = await axios.get(`/data/${selectedAccount}_transactions.json`);
      setTransactions(res.data.transactions);
      setBalance(res.data.balance);
    }
    getTransactions();
  }, [selectedAccount]);

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <div className="header">
          <select onChange={(e) => setSelectedCompany(e.target.value)}>
            <option>Select Company</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select onChange={(e) => setSelectedAccount(e.target.value)}>
            <option>Select Account</option>
            {accounts.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <BalanceCard balance={balance} />
        <LoadTable data={transactions} />
      </div>
    </div>
  );
}
