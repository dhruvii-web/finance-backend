const db = require("../config/db");

exports.createUser = (req, res) => {
  const { name, email, role, status } = req.body;

  const query = "INSERT INTO users (name, email, role, status) VALUES (?, ?, ?, ?)";

  db.query(query, [name, email, role, status], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "User created successfully" });
  });
};

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};