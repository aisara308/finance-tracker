// components/TransactionsList.js
import React from "react";

const TransactionsList = ({ transactions }) => (
  <ul>
    {transactions.map((t, index) => (
      <li key={index}>{`${t.date} - ${t.type} - ${t.amount}`}</li>
    ))}
  </ul>
);

export default TransactionsList;