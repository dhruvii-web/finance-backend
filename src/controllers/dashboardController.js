const db = require("../config/db");

exports.getSummary = (req, res) => {
  const incomeQuery = "SELECT SUM(amount) AS totalIncome FROM records WHERE type='income'";
  const expenseQuery = "SELECT SUM(amount) AS totalExpense FROM records WHERE type='expense'";

  db.query(incomeQuery, (err, incomeResult) => {
    if (err) return res.status(500).json(err);

    db.query(expenseQuery, (err, expenseResult) => {
      if (err) return res.status(500).json(err);

      const income = incomeResult[0].totalIncome || 0;
      const expense = expenseResult[0].totalExpense || 0;

      res.json({
        totalIncome: income,
        totalExpense: expense,
        netBalance: income - expense
      });
    });
  });
};