## Backend server

การใช้งาน

1. npm install

2. npx sequelize-cli init:config เพื่อสร้างไฟล์ config
   ภายในไฟล์ config.json ให้ใส่ค่าตรง development
   "username": "your username",
   "password": "your password",
   "database": "exam"

3. สร้างไฟล์ .env ใส่ NODE_ENV = development และ PORT = 8000

4. เริ่มต้น server ด้วยคำสั่ง npm start หรือ yarn start

API

Chart

- Get chart data  
   Method GET
   Path http://localhost:8000/chart/

Data

- Get data
   Method GET
   Path http://localhost:8000/data/

- Add data  
   Method POST
   Path http://localhost:8000/data/
   Body
   {
      "value":"your value",
      "synonyms": "your value"
   }

- Delete data
   Method DELETE
   Path http://localhost:8000/data/id
