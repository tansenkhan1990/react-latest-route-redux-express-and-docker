/backend_express
│
├── /src
│   ├── /config             # Configuration files (e.g., JWT secret)
│   ├── /controllers        # Controllers to handle the API logic
│   ├── /middlewares        # Middleware (e.g., JWT authentication)
│   ├── /routes             # Route definitions (public and protected)
│   ├── /types              # TypeScript custom types
│   └── /utils              # Utility functions (e.g., token generation)
│
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── README.md               # Project documentation
└── .env                    # Environment variables (JWT secret)



# Express API with JWT Authentication (TypeScript)

This project is a basic REST API built with **Express** and **TypeScript** that supports user authentication via **JWT (JSON Web Token)**. The API includes protected routes that are only accessible when authenticated.

## Features

- **JWT Authentication**: Login with a username and password, receive a JWT token, and use the token to access protected routes.
- **TypeScript**: Entire codebase written in TypeScript for improved developer experience and safety.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Middleware**: Secure routes using middleware to validate JWT tokens.
- **Modular Architecture**: Code is structured into logical modules for scalability and maintainability.

## Project Structure

/backend_express │ ├── /src │ ├── /config # Configuration files (e.g., JWT secret) │ ├── /controllers # Controllers to handle the API logic │ ├── /middlewares # Middleware (e.g., JWT authentication) │ ├── /routes # Route definitions (public and protected) │ ├── /types # TypeScript custom types │ └── /utils # Utility functions (e.g., token generation) │ ├── package.json # Project dependencies and scripts ├── tsconfig.json # TypeScript configuration ├── README.md # Project documentation └── .env # Environment variables (JWT secret)



## Prerequisites

To run this project, you will need:

- **Node.js** (v14 or higher)
- **npm** or **yarn** for package management
- **Postman** (for testing the API)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd backend_express


npm install
JWT_SECRET=your_jwt_secret
npm run build
npm run dev


API Endpoints
1. Login - /api/auth/login
Method: POST
Description: Logs in the user with username and password and returns a JWT token.
Request Body:
json
Copy code
{
  "username": "tansen",
  "password": "tansen"
}
Response:
json
Copy code
{
  "token": "your_jwt_token"
}
2. Protected Route - /api/protected/dashboard
Method: GET
Description: Access a protected route using a valid JWT token.
Headers:
makefile
Copy code
Authorization: Bearer <your_jwt_token>
3. Logout - /api/auth/logout
Method: GET
Description: Simulates a logout.
Testing the API
Use Postman or any API client to test the endpoints.
First, make a POST request to the /api/auth/login endpoint to get a JWT token.
Use the token in the Authorization header to access protected routes.
Example Protected Route Access (Postman):
After logging in, copy the token from the response.
In Postman, for protected routes like /api/protected/dashboard, set the header:
makefile
Copy code
Authorization: Bearer your_jwt_token
Scripts
npm run dev: Runs the development server with hot-reloading (using ts-node-dev).
npm run build: Compiles TypeScript to JavaScript (outputs in /dist).
npm start: Starts the compiled app from the /dist folder.
Technologies Used
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
TypeScript: Strongly typed JavaScript.
JWT: Token-based authentication.
ts-node-dev: Development tool for running TypeScript directly.
dotenv: Environment variable management.
