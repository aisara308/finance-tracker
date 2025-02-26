// components/TransactionForm.js
import React, { useState } from "react";
import Button from "../components/Button";


const TransactionForm = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = () => {
    if (!amount) return;
    onAdd({ amount: parseFloat(amount), type, date: new Date().toLocaleDateString() });
    setAmount("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Сомма"
        className="p-2 border rounded w-full"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
        <option value="income">Кіріс</option>
        <option value="expense">Шығыс</option>
      </select>
      <Button onClick={handleSubmit}>Қосу</Button>
    </div>
  );
};

export default TransactionForm;