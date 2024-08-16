
# Chat Application
   
   A full-stack chat application that enables real-time communication     between users. This project was developed using MongoDB, Express, Node.js, and React, with Socket.IO integrated for instant messaging.


## Features

- Real-Time Communication: Instant messaging between users using Socket.IO.
- User Authentication & Authorization: Secure handling of user data with  JWT (JSON Web Tokens).
- State Management: Utilized Zustand for lightweight state management and React's Context API for a seamless user experience.
- Error Handling: Robust error handling on both the client and server sides, with Express middleware for centralized error management and React error boundaries for UI stability


## Live Demo

https://chat-app-pbvl.onrender.com


## Installation

1. Clone the Repository:-

   ```bash
    git clone https://github.com/Athem980/Chat_app.git
    cd Chat_app
   ```
2. Install dependencies:-
   
   ```bash
     npm install 
   ```

   or if you are using yarn

   ```bash
    yarn install
   ```

3. Set up environment variables:

Create a .env file in the root directory and add the following:

   ```bash
     PORT=8000
     MONGO_DB_URI=mongodb+srv://rahulmehta2001:cdocKf7ILFCXzV7D@cluster0.ar3kcre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     JWT_SECRET=6bakZ/DmmfcwniFRdsIboLE0zmPYcth6MkmiMrowoiQ=
   ```

4. Run the server:
    ```bash
     npm run server
    ```
     
5. Run the client:
    ```bash
     npm run client
    ```
6. Access the application at port at your configured port
