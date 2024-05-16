const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDatabase = require("./config/mongodb.js");
require("dotenv").config();

//including mongoDb
connectDatabase();

//routes Import
const songRoutes = require('./routes/songRoutes');
const userRoutes = require('./routes/userRoutes');


// Middleware
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// Add the cors middleware and specify the allowed origin
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//api route
app.use('/api', songRoutes);
app.use('/api', userRoutes);


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});