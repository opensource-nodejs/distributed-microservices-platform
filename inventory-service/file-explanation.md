
---

# File Explanation for Inventory Service

## `src/controllers/inventoryController.js`
- **Purpose:** Handles incoming HTTP requests for the inventory module.
- **Responsibilities:**
  - Defines business logic for handling API endpoints.
  - Calls the service layer to fetch or add data.
  - Sends appropriate HTTP responses to the client.

---

## `src/models/inventoryModel.js`
- **Purpose:** Defines the structure of the `Inventory` collection in MongoDB.
- **Responsibilities:**
  - Uses Mongoose to define a schema for inventory items.
  - Represents each inventory item with fields like `name`, `quantity`, and `price`.

---

## `src/routes/inventoryRoutes.js`
- **Purpose:** Maps HTTP routes to their corresponding controller functions.
- **Responsibilities:**
  - Defines RESTful routes for the inventory service.
  - Connects endpoints like `/api/inventory/items` to the controller layer.

---

## `src/services/inventoryService.js`
- **Purpose:** Acts as the business logic layer for database operations.
- **Responsibilities:**
  - Handles interactions with the database (MongoDB) using Mongoose.
  - Provides reusable functions like `getAllItems` and `addItem`.

---

## `src/app.js`
- **Purpose:** Main entry point of the inventory service.
- **Responsibilities:**
  - Sets up Express.js server.
  - Configures middleware (e.g., `express.json()`).
  - Connects to the MongoDB database using Mongoose.
  - Registers API routes.
  - Starts the server on the specified port.

---

## `package.json`
- **Purpose:** Defines metadata and dependencies for the inventory service.
- **Responsibilities:**
  - Lists all dependencies (e.g., Express, Mongoose, dotenv).
  - Specifies the main script (`src/app.js`) and start commands.

---

## `.env`
- **Purpose:** Stores environment-specific configuration variables.
- **Responsibilities:**
  - Contains sensitive information like database connection strings and port numbers.
  - Example:
    ```
    PORT=5000
    DB_CONNECTION_STRING=mongodb://localhost:27017/inventory-service
    ```

---

## `README.md`
- **Purpose:** Provides documentation for the inventory service.
- **Responsibilities:**
  - Explains the purpose, features, and setup process of the service.
  - Details the available API endpoints with examples.
  - Serves as a quick reference for developers and contributors.

---

## Summary
Each file in the `inventory-service` module plays a specific role in the architecture:
- **Controller:** Handles requests and responses.
- **Model:** Defines database schema.
- **Route:** Maps endpoints to controller functions.
- **Service:** Encapsulates database logic.
- **App.js:** Bootstraps the service.
- **Package.json:** Manages dependencies.
- **.env:** Configures environment variables.
- **README.md:** Provides project documentation.

---

