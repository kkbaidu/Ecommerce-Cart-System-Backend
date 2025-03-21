# 🛒 E-Commerce Cart System (Backend)

This is the **backend** of an e-commerce cart system built with **NestJS** and **MongoDB** (using Mongoose for database management). It provides APIs to manage products, handle cart operations, and maintain user cart data.

---

## 🚀 Features
- 🛍 **Cart Management**: Endpoints to Get, create, update, and delete cart.  
- 📦 **Product Management**: Endpoints to get, create, update, and delete products.    
- 📡 **REST API**: Can be configured to use either REST.  
- 💾 **MongoDB with Mongoose**: Stores cart and product data efficiently.  

---

## 🛠 Tech Stack
- **NestJS (Node.js Framework)**
- **MongoDB (Mongoose ORM)**
- **TypeScript** 

---

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/kkbaidu/Ecommerce-Cart-System-Backend
cd Ecommerce-Cart-System-Backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a **`.env`** file in the root directory and configure the following:
```sh
MONGODB_URI=mongodb://localhost/nest
PORT=3000
```

### 4️⃣ Run the Server
```sh
npm run start:dev
# The nestjs app will start on **`http://localhost:3000`**.
```

