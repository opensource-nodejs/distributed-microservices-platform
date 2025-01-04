

# Payment Service

## Overview
The **Payment Service** is a core module of the Distributed Microservices Platform. It handles the processing of financial transactions, integration with payment gateways, and transaction data storage. Designed to be scalable and modular, the service supports various payment methods and integrates seamlessly with the rest of the microservices.

---

## Features
- **Payment Processing:** Handles transactions using different payment methods (e.g., credit cards, bank transfers).
- **Database Integration:** Saves transaction details in a MongoDB database.
- **Fault-Tolerant Design:** Implements basic error handling for payment failures.
- **Scalability:** Designed for horizontal scaling and seamless integration.

---

## Folder Structure

```
payment-service/
├── src/
│   ├── controllers/
│   │   └── paymentController.js
│   ├── models/
│   │   └── PaymentTransaction.js
│   ├── routes/
│   │   └── paymentRoutes.js
│   ├── services/
│   │   ├── dbService.js
│   │   └── paymentGatewayService.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

### Key Files
- **`src/app.js`:** Main entry point of the service.
- **`src/routes/paymentRoutes.js`:** Defines the routes for the payment API.
- **`src/controllers/paymentController.js`:** Contains the business logic for payment processing.
- **`src/services/dbService.js`:** Handles database connections and transaction persistence.
- **`src/services/paymentGatewayService.js`:** Simulates interaction with an external payment gateway.
- **`src/models/PaymentTransaction.js`:** Mongoose schema for transaction data.

---

## Setup Instructions

### Prerequisites
- Node.js (16.x or higher)
- MongoDB (Local or Cloud Instance)
- RabbitMQ or Kafka (for messaging if applicable)

### Steps to Run
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/opensource-nodejs/payment-service.git
   cd payment-service
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` File:**
   Add the following variables to a new `.env` file:
   ```env
   NODE_ENV=development
   SERVICE_PORT=5002
   DB_CONNECTION_STRING=mongodb://localhost:27017/payment-service
   MESSAGE_BROKER_URL=amqp://localhost
   PAYMENT_GATEWAY_API_KEY=your_payment_gateway_api_key
   ```

4. **Start the Service:**
   ```bash
   node src/app.js
   ```

5. **Access the API:**
   The service will be available at:
   - **Base URL:** `http://localhost:5002`
   - **Endpoint:** `/api/payments`

---

## API Endpoints

### 1. **Process Payment**
   **URL:** `/api/payments`  
   **Method:** `POST`  
   **Request Body:**
   ```json
   {
       "userId": "12345",
       "amount": 100.50,
       "method": "credit-card"
   }
   ```
   **Response:**
   ```json
   {
       "message": "Payment processed successfully",
       "paymentResult": {
           "transactionId": "abc123xyz",
           "status": "success",
           "amount": 100.50
       }
   }
   ```

---

## Environment Variables
The following environment variables are required for the service:
- `NODE_ENV`: The environment (e.g., `development` or `production`).
- `SERVICE_PORT`: The port where the service will run.
- `DB_CONNECTION_STRING`: MongoDB connection string.
- `MESSAGE_BROKER_URL`: URL for the message broker (e.g., RabbitMQ or Kafka).
- `PAYMENT_GATEWAY_API_KEY`: API key for the payment gateway.

---

## Technology Stack
- **Node.js:** Runtime environment.
- **Express.js:** Web framework.
- **MongoDB:** Database for transaction storage.
- **RabbitMQ/Kafka:** Message broker (optional for messaging).
- **dotenv:** Environment variable management.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and add tests where applicable.
4. Submit a pull request with a clear description.

---

## License
This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Maintainer
This service is maintained by [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan).

---
