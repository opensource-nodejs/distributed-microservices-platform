

# Shared Module

## Overview
The **Shared Module** provides reusable components for the Distributed Microservices Platform. It includes features like configuration management, logging, error handling, and utility functions, making it a central piece of the microservices ecosystem.

---

## Features
1. Centralized logging using Winston.
2. Error-handling middleware for consistent error responses.
3. Utility functions like UUID generation.
4. Easy configuration using environment variables.

---

## Folder Structure
```
shared/
├── src/
│   ├── configs/             # Configuration management
│   │   └── index.js
│   ├── middlewares/         # Middleware for logging and error handling
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── utils/               # Utility functions
│   │   └── helper.js
│   └── app.js               # Main application file
├── .env                     # Environment configuration file
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation file
```

---

## Setup Instructions

### Prerequisites
1. Node.js (16.x or higher)
2. npm (Node Package Manager)

### Steps
1. **Clone the Repository**  
   ```
   git clone https://github.com/opensource-nodejs/distributed-microservices-platform.git
   cd shared
   ```

2. **Install Dependencies**  
   ```
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory with the following content:
   ```
   NODE_ENV=development
   SERVICE_PORT=5050
   LOG_LEVEL=info
   ```

4. **Run the Application**  
   ```
   npm start
   ```

---

## API Endpoints

### Health Check
- **Endpoint:** `/health`
- **Method:** `GET`
- **Description:** Returns the health status of the module.
- **Response:**
  ```json
  {
    "status": "Shared module is running!"
  }
  ```

### UUID Generator
- **Endpoint:** `/generate-uuid`
- **Method:** `GET`
- **Description:** Generates and returns a unique identifier.
- **Response:**
  ```json
  {
    "uuid": "1633029567-123456"
  }
  ```

---

## Technology Stack
1. **Node.js** - Core runtime for building the module.
2. **Express.js** - Framework for API development.
3. **Winston** - Logging library for centralized logging.
4. **dotenv** - For environment variable management.

---

## Contributing
We welcome contributions to improve this module! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a clear description of your changes.

---

## License
This project is licensed under the GNU General Public License v3.0. You can read more about it [here](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Maintainer
This project is maintained by Aditya Pratap Bhuyan.  
Connect on LinkedIn: [https://linkedin.com/in/adityabhuyan](https://linkedin.com/in/adityabhuyan)

---
