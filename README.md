# Finance Data Processing Backend

A backend system built using Node.js, Express, and MySQL to manage financial records with role-based access control and dashboard analytics.

## 🚀 Features

- User Management (Admin, Analyst, Viewer)
- Financial Records (Income & Expense tracking)
- Role-Based Access Control (RBAC)
- Dashboard Summary API (Income, Expense, Net Balance)

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Postman (Testing)

## 📂 Project Structure

src/
  config/
  controllers/
  routes/
  middleware/
  models/
  services/
  app.js

## ⚙️ Setup Instructions

1. Clone repo
2. Run:
   npm install
3. Setup `.env` file:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=finance_db  

4. Start server:
   node src/app.js

## 📡 API Endpoints

### Users
- POST /users
- GET /users

### Records
- POST /records (admin only)
- GET /records (all roles)

### Dashboard
- GET /dashboard (admin, analyst)

## 🔐 RBAC Roles

- Admin → Full access  
- Analyst → View + Dashboard  
- Viewer → View only  

## 📊 Sample Response

{
  "totalIncome": 5000,
  "totalExpense": 200,
  "netBalance": 4800
}