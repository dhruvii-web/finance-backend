const db = require("../config/db");

exports.createRecord = (req, res) => {
  const { user_id, amount, type, category, date, notes } = req.body;

  
  if (!user_id || !amount || !type || !category || !date) {
    return res.status(400).json({ message: "All required fields must be provided" });
  }

  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({ message: "Invalid type (income/expense only)" });
  }

  const query = `
    INSERT INTO records (user_id, amount, type, category, date, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [user_id, amount, type, category, date, notes], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Record created successfully" });
  });
};

exports.getRecords = (req, res) => {
  const { type, category } = req.query;

  let query = "SELECT * FROM records WHERE 1=1";
  let values = [];

  if (type) {
    query += " AND type = ?";
    values.push(type);
  }

  if (category) {
    query += " AND category = ?";
    values.push(category);
  }

  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};