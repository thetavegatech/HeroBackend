const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const inputAddressRoutes = require('./Router/InputRouter');
const AI1CH1Route = require('./Router/AI1CH1Route');
const AI1CH2Route = require('./Router/AI1CH2Route');
const AI1CH3Route = require('./Router/AI1CH3Route');
const AI1CH4Route = require('./Router/AI1CH4Route');
const AI1CH5Route = require('./Router/AI1CH5Route');



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use('/api', inputAddressRoutes);
app.use('/ch1',AI1CH1Route);
app.use('/ch2',AI1CH2Route);
app.use('/ch3',AI1CH3Route);
app.use('/ch4',AI1CH4Route);
app.use('/ch5',AI1CH5Route);



// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Hero", {
    //  .connect( "mongodb+srv://vaibhavdevkar101:Vaibhav123@cluster0.518nyqj.mongodb.net/OshiyaMetals?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

  app.listen(5002, () => {
    console.log("Server is running on Port 5002");
  });