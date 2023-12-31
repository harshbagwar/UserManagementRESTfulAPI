Description : 
This Node.js project is a User Management REST API built with the Express framework and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user records stored in a MongoDB database. The API follows RESTful conventions, providing endpoints for retrieving all users, getting a user by ID, updating a user, deleting a user, and creating a new user.

Key Features:
Express Framework: Utilizes the Express framework for building the web application and handling HTTP requests.
MongoDB Database: Stores user data in a MongoDB database, providing a scalable and flexible data storage solution.
Mongoose ODM: Uses Mongoose as the Object Data Modeling library to simplify interactions with MongoDB and define the structure of user data through a schema.
RESTful Endpoints:
/user (GET): Retrieves all users from the database.
/user/:id (GET): Retrieves a user by their ID.
/user/:id (PUT): Updates a user by their ID.
/user/:id (DELETE): Deletes a user by their ID.
/user (POST): Creates a new user with the provided details.
Data Validation: Implements basic data validation to ensure required fields are provided when creating or updating user records.

Usage:
Clone the repository.
Install dependencies using npm install.
Start the server with npm start.
Access the API endpoints as described in the documentation.
This project serves as a foundation for building a scalable and maintainable user management system with a focus on simplicity and adherence to RESTful principles.
