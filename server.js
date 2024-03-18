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
const AI1CH6Route = require('./Router/AI1CH6Route');
const AI1CH7Route = require('./Router/AI1CH7Route');
const AI1CH8Route = require('./Router/AI1CH8Route');
const AI2CH1Route = require('./Router/AI2CH1Route');
const AI2CH2Route = require('./Router/AI2CH2Route');
const AI2CH3Route = require('./Router/AI2CH3Route');
const AI2CH4Route = require('./Router/AI2CH4Route');
const AI2CH5Route = require('./Router/AI2CH5Route');
const AI2CH6Route = require('./Router/AI2CH6Route');
const AI2CH7Route = require('./Router/AI2CH7Route');
const AI2CH8Route = require('./Router/AI2CH8Route');
const AI3CH1Route = require('./Router/AI3CH1Route');
const AI3CH2Route = require('./Router/AI3CH2Route');
const AI3CH3Route = require('./Router/AI3CH3Route');
const AI3CH4Route = require('./Router/AI3CH4Route');
const AI3CH5Route = require('./Router/AI3CH5Route');
const AI3CH6Route = require('./Router/AI3CH6Route');
const AI3CH7Route = require('./Router/AI3CH7Route');
const AI3CH8Route = require('./Router/AI3CH8Route');





const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use('/api', inputAddressRoutes);
app.use('/ai1ch1',AI1CH1Route);
app.use('/ai1ch2',AI1CH2Route);
app.use('/ai1ch3',AI1CH3Route);
app.use('/ai1ch4',AI1CH4Route);
app.use('/ai1ch5',AI1CH5Route);
app.use('/ai1ch6',AI1CH6Route);
app.use('/ai1ch7',AI1CH7Route);
app.use('/ai1ch8',AI1CH8Route);
app.use('/ai2ch1',AI2CH1Route);
app.use('/ai2ch2',AI2CH2Route);
app.use('/ai2ch3',AI2CH3Route);
app.use('/ai2ch4',AI2CH4Route);
app.use('/ai2ch5',AI2CH5Route);
app.use('/ai2ch6',AI2CH6Route);
app.use('/ai2ch7',AI2CH7Route);
app.use('/ai2ch8',AI2CH8Route);
app.use('/ai3ch1',AI3CH1Route);
app.use('/ai3ch2',AI3CH2Route);
app.use('/ai3ch3',AI3CH3Route);
app.use('/ai3ch4',AI3CH4Route);
app.use('/ai3ch5',AI3CH5Route);
app.use('/ai3ch6',AI3CH6Route);
app.use('/ai3ch7',AI3CH7Route);
app.use('/ai3ch8',AI3CH8Route);








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