const express = require("express");
const app = express();
require('dotenv').config();
const tasks = require('./routes/tasksRoutes')
const errorHandler = require("./middlewares/errorHandler");
// Database Connection
const connectDB = require('./database/connect')

// Middlewares
app.use(errorHandler)
app.use(express.json());

// Routes
app.use('/tasks', tasks);

// Not Found
app.use('*', (req,res) => {
    res.status(404).send('Route does not exist')
})

const port = process.env.PORT || 5000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
};
  
start();