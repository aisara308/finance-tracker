// FinanceTracker.js
import React, { useState } from "react";
import Chart from "./components/Chart";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";
import { exportData } from "./utils/exportData";
import Button from "./components/Button";


const FinanceTracker = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Қаржы бақылау жүйесі</h2>
      <TransactionForm onAdd={addTransaction} />
      <Chart transactions={transactions} />
      <TransactionsList transactions={transactions} />
      <Button onClick={() => exportData(transactions, "csv")} className="mt-2 mr-2">CSV экспорт</Button>
      <Button onClick={() => exportData(transactions, "json")} className="mt-2">JSON экспорт</Button>
    </div>
  );
};

export default FinanceTracker;