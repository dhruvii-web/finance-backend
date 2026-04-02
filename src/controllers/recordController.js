const db = require("../config/db");

exports.createRecord = (req, res) => {
  const { user_id, amount, type, category, date, notes } = req.body;

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
  db.query("SELECT * FROM records", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};