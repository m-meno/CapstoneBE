## Capstone Backend

## Description
This backend features user authentication, file uploads, and CRUD capabilities for posts. Users can register, login, create, read, update, and delete posts with uploaded images.

---

## Technologies Used
- **cors** - Cross-Origin Resource Sharing middleware
- **multer** - Middleware for file uploads
- **Express.js** - Framework for Node.js
- **Mongoose** - Object Data Modeling library
- **JSON Web Token (JWT)** - Authentication
- **bcrypt** - Used for  Password Hashing
- **MongoDB** - Database

---

## API Routes Overview

### Posts Routes (`/api/post`)
- **POST /**: Create a new post (Private, requires auth and allows file upload)
- **GET /**: Get all posts or posts from a specific user (Public)
- **GET /:id**: Get a single post by ID (Public)
- **PUT /:id**: Update a post by ID (Private, requires auth and allows file upload)
- **DELETE /:id**: Delete a post by ID (Private, requires auth)
- **GET /seed**: Seed the database with post data (Public)

### User Routes (`/api/user`)
- **POST /register**: Register a new user (Public)
- **POST /login**: User login (Public)
- **GET /**: Get user data (Private, requires auth)

---

## Resources & Acknowledgements
- StackOverflow
- W3 Schools
- Free Code Camp: [Simplify your file upload process in Express.js](https://www.freecodecamp.org/news/simplify-your-file-upload-process-in-express-js/)
- Some photos by Negative Space

---

## Link to My Frontend Repository
[Capstone Frontend Repo] (https://github.com/m-meno/CapstoneFE.git)
