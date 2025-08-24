const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const examRoutes = require("./routes/exam");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/exam", examRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
