# Shared

### File: `package.json`
**Purpose**:  
This file contains metadata about the project, including dependencies, scripts, and project name. It helps manage the module’s dependencies and enables npm commands like `npm install` and `npm start`.

**Key Responsibilities**:
- Defines the module’s name, version, and description.
- Lists required npm packages like `express`, `winston`, and `dotenv`.
- Specifies the `start` script to launch the application.

---

### File: `.env`
**Purpose**:  
This file holds environment-specific variables like the service port and log level, allowing easy configuration without modifying the source code.

**Key Responsibilities**:
- Configures the service to run on a specific port (`SERVICE_PORT=5050`).
- Sets the logging level (`LOG_LEVEL=info`).

---

### File: `src/configs/index.js`
**Purpose**:  
Centralized configuration management to fetch environment variables and provide default values.

**Key Responsibilities**:
- Reads environment variables using `dotenv`.
- Exposes configuration values like `port` and `logLevel`.

---

### File: `src/middlewares/logger.js`
**Purpose**:  
Implements centralized logging using the Winston library. Logs messages to both the console and a log file (`shared.log`).

**Key Responsibilities**:
- Formats logs with timestamps and JSON format.
- Logs messages at various levels (e.g., `info`, `error`).
- Provides a logger instance for use throughout the module.

---

### File: `src/middlewares/errorHandler.js`
**Purpose**:  
Handles errors consistently across the application and logs them.

**Key Responsibilities**:
- Captures errors from the application and sends a generic response to clients.
- Logs error messages and stack traces using the logger.

---

### File: `src/utils/helper.js`
**Purpose**:  
Contains reusable utility functions for the shared module.

**Key Responsibilities**:
- Implements a `generateUUID` function to create unique identifiers.
- Provides helper methods for other common operations in the future.

---

### File: `src/app.js`
**Purpose**:  
The entry point of the `shared` module. Sets up the Express application, routes, and middleware.

**Key Responsibilities**:
- Configures Express with JSON parsing and logging middleware.
- Defines API endpoints like `/health` and `/generate-uuid`.
- Sets up error-handling middleware for consistent error responses.
- Starts the Express server on the configured port.

---

### File: `README.md`
**Purpose**:  
Provides an overview of the shared module, including setup instructions, features, and endpoint documentation.

**Key Responsibilities**:
- Explains the purpose and functionality of the shared module.
- Guides users on how to install, configure, and run the module.
- Documents the available API endpoints.

---

### Example Table for Quick Reference

| File/Folder              | Purpose                                                                                     |
|--------------------------|---------------------------------------------------------------------------------------------|
| `package.json`           | Manages module metadata and dependencies.                                                  |
| `.env`                   | Configures environment variables for the module.                                           |
| `src/configs/index.js`   | Handles centralized configuration management.                                              |
| `src/middlewares/logger.js` | Provides centralized logging for the application using Winston.                            |
| `src/middlewares/errorHandler.js` | Handles and logs errors consistently across the application.                             |
| `src/utils/helper.js`    | Implements reusable utility functions (e.g., UUID generation).                              |
| `src/app.js`             | Entry point of the module; configures routes, middleware, and starts the server.            |
| `README.md`              | Documentation for the shared module, including features and setup instructions.             |

---

