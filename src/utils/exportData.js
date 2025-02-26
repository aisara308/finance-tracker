// utils/exportData.js
import { saveAs } from "file-saver";

export const exportData = (transactions, format) => {
  let dataString = "";
  if (format === "csv") {
    dataString = "Date,Type,Amount\n" + transactions.map(t => `${t.date},${t.type},${t.amount}`).join("\n");
    const blob = new Blob([dataString], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "transactions.csv");
  } else if (format === "json") {
    const blob = new Blob([JSON.stringify(transactions, null, 2)], { type: "application/json" });
    saveAs(blob, "transactions.json");
  }
};