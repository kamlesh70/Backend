# 🧠 Backend

This is the **Backend** repository for the **My Account** project. Built using **NestJS**, this service handles the business logic and API endpoints for user account and settings management. It integrates with a shared ORM library and connects to a **PostgreSQL** database.

## 🚀 Tech Stack

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM (via shared ORM library)
- **Architecture:** Modular, Scalable, and Testable

---

## 📄 Prerequisites
  -  Node.js >= 22.x
  - PostgreSQL database configured

---

## 🗃️ Database Structure ( These are managed via the shared ORM library and PostgreSQL database )
- Users
- Settings

---

## 🚀 Setup and installation
  - npm install ( to install the dependencies )

  ### .env
  - DATABASE_TYPE
  - DATABASE_HOST
  - DATABASE_PORT
  - DATABASE_PASSWORD
  - DATABASE_USER
  - DATABASE_NAME
  - DATABASE_SYNCHRONIZE
  - PORT

---

## 📦 Run and Build
  - npm run start:dev ( start application in watch mode )
  - npm run build ( build the application )
  - npm run start:prod ( to run the build in production )

---

## API end points
- user/list  ( return list of users, can add pagination and sorting as well )
