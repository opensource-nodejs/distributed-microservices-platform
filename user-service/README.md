

# User Service

## Overview
The **User Service** is a microservice responsible for managing user-related operations, such as creating and retrieving user information. It is part of the **Distributed Microservices Platform**.

---

## Features
- User CRUD operations.
- MongoDB integration for data persistence.
- RESTful API endpoints.

---

### Folder Structure
```
user-service/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   ├── app.js
├── package.json
├── README.md
```

---

## Prerequisites
- Node.js (16.x or higher)
- MongoDB (local or cloud instance)

---

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone https://github.com/opensource-nodejs/distributed-microservices-platform.git
   cd distributed-microservices-platform/user-service
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/user-service
   ```

4. **Run the Service**
   ```
   npm start
   ```

5. **API Endpoints**
   - `GET /api/users`: Retrieve all users.
   - `POST /api/users`: Create a new user.

---

## Contributing
We welcome contributions to improve this service! Follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

---

## License
This service is part of the **Distributed Microservices Platform**, licensed under the GNU GPL v3.0.

---

## Maintainer
This service is maintained by [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan).

---



