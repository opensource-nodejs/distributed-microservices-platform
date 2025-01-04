

# Notification Service

## Overview
The **Notification Service** is a microservice designed to send notifications to users via various channels such as email, SMS, or push notifications. It is part of a distributed microservices platform and serves as a modular, reusable component for handling notification-related tasks.

---

## Features
- **Multi-Channel Notifications:** Supports email, SMS, and push notifications.
- **Scalable Architecture:** Designed to be easily integrated with message brokers like RabbitMQ or Kafka.
- **Modular Design:** Separation of concerns for routes, controllers, and services.
- **Environment-Based Configuration:** Configurable via `.env` file for different environments.

---

## Folder Structure

```
notification-service/
├── src/
│   ├── controllers/
│   │   └── notificationController.js    # Handles HTTP requests
│   ├── routes/
│   │   └── notificationRoutes.js        # Defines API endpoints
│   ├── services/
│   │   └── notificationService.js       # Contains core business logic
│   └── app.js                           # Entry point of the application
├── package.json                         # Node.js project metadata and dependencies
├── .env                                 # Environment variables
└── README.md                            # Documentation for the service
```

---

## API Endpoints
### Base URL
```
http://localhost:5003
```

### Endpoints
1. **Send Notification**
   - **URL:** `/api/notifications/send`
   - **Method:** `POST`
   - **Description:** Sends a notification to a specified recipient via a chosen channel (email, SMS, push).
   - **Request Body:**
     ```json
     {
       "recipient": "user@example.com",
       "message": "Hello, User!",
       "type": "email"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Notification sent successfully!",
       "result": {
         "recipient": "user@example.com",
         "message": "Hello, User!",
         "type": "email",
         "status": "sent"
       }
     }
     ```

---

## Setup Instructions

### Prerequisites
- Node.js (v16.x or higher)
- Docker (optional for message broker integration)

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/opensource-nodejs/notification-service.git
   cd notification-service
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory:
     ```env
     PORT=5003
     SERVICE_NAME=notification-service
     MESSAGE_BROKER_URL=amqp://localhost
     ```
   - Adjust the values based on your environment.

4. **Run the Service**
   ```bash
   npm start
   ```

5. **Test the API**
   Use a tool like Postman or `curl` to test the `/api/notifications/send` endpoint:
   ```bash
   curl -X POST http://localhost:5003/api/notifications/send \
   -H "Content-Type: application/json" \
   -d '{"recipient": "user@example.com", "message": "Hello!", "type": "email"}'
   ```

---

## Environment Variables
| Variable            | Description                               | Default Value      |
|---------------------|-------------------------------------------|--------------------|
| `PORT`              | Port number on which the service runs     | `5003`            |
| `SERVICE_NAME`      | Name of the service                      | `notification-service` |
| `MESSAGE_BROKER_URL`| URL of the message broker (RabbitMQ, etc.)| `amqp://localhost` |

---

## Technology Stack
- **Node.js:** Backend runtime for the service.
- **Express.js:** Framework for building APIs.
- **dotenv:** Manages environment variables.
- **body-parser:** Middleware for parsing JSON payloads.

---

## Future Enhancements
1. **Integration with Real Providers:**
   - Add support for services like SendGrid (email), Twilio (SMS), and Firebase (push notifications).

2. **Asynchronous Processing:**
   - Implement a message broker (e.g., RabbitMQ or Kafka) to process notifications asynchronously.

3. **Advanced Features:**
   - Notification templates.
   - Scheduling notifications for future delivery.
   - Retry mechanisms for failed notifications.

---

## Contributing
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with clear descriptions of the changes.

---

## License
This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Maintainer
This project is maintained by [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan).

---

