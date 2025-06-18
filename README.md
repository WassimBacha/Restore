# 🛒 E-Commerce Store with .NET & React

An end-to-end e-commerce web application built using **ASP.NET Core Web API**, **React**, **Redux Toolkit**, **Stripe**, and **Entity Framework Core**.

---

## 🔧 Tech Stack

### Frontend:
- React 
- TypeScript
- Redux Toolkit
- React Router 
- Material UI
- React Hook Form
- Axios

### Backend:
- ASP.NET Core Web API
- Entity Framework Core
- AutoMapper
- ASP.NET Identity
- Stripe Payments API

### Database:
- SQLite (development)
- SQL Server or PostgreSQL (production)

### Dev Tools:
- Visual Studio Code
- .NET CLI
- Postman
- Swagger UI

---

## ✨ Features

- 🔐 User authentication with JWT (register/login)
- 🛍️ Product catalog with filters, sorting, and pagination
- 🛒 Shopping basket with persistent storage
- 💳 Stripe checkout with 3D Secure
- 📦 Order management and history
- 🛠️ Admin area for product management
- 🧑‍💻 Role-based authorization
- 📱 Responsive design using Material UI
- ⚠️ Robust error handling and loading indicators

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/Restore.git
cd Restore
```
2. Backend Setup
```bash
cd API
dotnet restore
dotnet ef database update
dotnet run
```
📌 Make sure .NET 7 SDK is installed.
3. Frontend Setup
```bash
cd client
npm install
npm run dev
```
---
🧪 Testing

- Unit and integration testing to be added soon

- Use Swagger at https://localhost:3000/swagger/index.html for API exploration

- Postman can be used for manual API testing

---

🌐 Deployment

Deploy using:

- Frontend: Vercel / Netlify / Static files via API

- Backend: Render / Heroku / Azure / Railway

Stripe requires HTTPS and live keys in production mode.

---

📁 Project Structure
```bash

ecommerce-store/
├── API/                 # .NET Backend
│   ├── Controllers/
│   ├── Data/
│   ├── Entities/
│   ├── Extensions/
│   └── Program.cs
├── client/              # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── .gitignore
```
---

🙋‍♂️ Author
Wassim Bacha

GitHub: @WassimBacha

LinkedIn: Mohamed Wassim Bacha

---



