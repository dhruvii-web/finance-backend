const db = require("../config/db");

exports.createUser = (req, res) => {
  const { name, email, role, status } = req.body;

  const query = "INSERT INTO users (name, email, role, status) VALUES (?, ?, ?, ?)";
  if (!name || !email || !role || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }
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