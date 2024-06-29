const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// routes
const userRoutes = require('./routes/user')

// Load environment variables from.env file
env.config();

// mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ljfxt5x.mongodb.net/${process.env.MONGO_DATABASE}`).then(() => {
    console.log("Database connected to mongoDB");
});

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
