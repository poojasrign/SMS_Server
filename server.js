const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management Backend is Running");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend API is working"
    });
});

app.use("/api/students", studentRoutes);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", async () => {
    console.log(`Server running on port ${PORT}`);
    await connectDB();
});