

# Inventory Service

## Overview
The Inventory Service is a module of the Distributed Microservices Platform. It is responsible for managing product inventory, including functionalities to fetch all items and add new items.

## Features
- Fetch all items in the inventory.
- Add a new item to the inventory.

## Technology Stack
- **Node.js:** Backend runtime.
- **Express.js:** Web framework for building RESTful APIs.
- **MongoDB:** Database for storing inventory data.
- **Mongoose:** ODM library for MongoDB.

## API Endpoints

### 1. GET `/api/inventory/items`
- **Description:** Fetch all inventory items.
- **Response:** JSON array of items.
- **Example Response:**
```
[
    {
        "name": "Laptop",
        "quantity": 10,
        "price": 1000,
        "_id": "64b8f83512f3d2c3a1234567",
        "createdAt": "2023-11-11T12:34:56Z",
        "updatedAt": "2023-11-11T12:34:56Z"
    }
]
```

### 2. POST `/api/inventory/items`
- **Description:** Add a new item to the inventory.
- **Request Body:**
```
{
    "name": "string",
    "quantity": "number",
    "price": "number"
}
```
- **Response:** Newly created item object.
- **Example Response:**
```
{
    "name": "Laptop",
    "quantity": 10,
    "price": 1000,
    "_id": "64b8f83512f3d2c3a1234567",
    "createdAt": "2023-11-11T12:34:56Z",
    "updatedAt": "2023-11-11T12:34:56Z"
}
```

## Prerequisites
- Node.js (16.x or higher)
- MongoDB (locally or on a server)

## Setup Instructions

1. **Clone the repository:**
```
git clone https://github.com/opensource-nodejs/inventory-service.git
cd inventory-service
```

2. **Install dependencies:**
```
npm install
```

3. **Configure the environment variables:**
Create a `.env` file in the root directory and add:
```
PORT=5000
DB_CONNECTION_STRING=mongodb://localhost:27017/inventory-service
```

4. **Start the service:**
```
npm start
```

5. **Access the API:**
- Open a browser or use a tool like Postman to test the endpoints.
- The service runs by default on `http://localhost:5000`.

## Folder Structure
```
inventory-service/
├── src/
│   ├── controllers/        # Handles HTTP requests
│   ├── models/             # Defines MongoDB schema and models
│   ├── routes/             # Defines API routes
│   ├── services/           # Handles business logic and database interactions
│   └── app.js              # Main application entry point
├── package.json            # Project metadata and dependencies
├── .env                    # Environment variables
├── README.md               # Documentation
```

## License
This project is open-source and licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

## Maintainer
This project is maintained by [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan).

--- 

