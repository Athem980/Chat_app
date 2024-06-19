import path from "path";
import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js";
import connectToMongoDB from "../db/connectTomongodb.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/fronte/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "fronte", "dist", "index.html"));
});
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running at ${PORT}`);
});
