require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");

// Configure CORS middleware
// app.use(
//   cors({
//     origin: "http://localhost:3001", // Allow requests from this origin
//     methods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"], // Allow these HTTP methods
//     allowedHeaders: [
//       "Content-Type",
//       "X-auth-token",
//       "Origin",
//       "Authorization", // Allow these headers
//     ],
//   })
// );

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/Product2");

app.get("/", (req, res) => {
  res.send("hi, i am live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} yes i am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
