const express = require('express');
const app = express();
const PORT = 3001;
const connectToDataBase = require('./db');
const bodyParser = require('body-parser');

// Database Connection function
connectToDataBase();

app.use(bodyParser.json());

// citizen router
app.use('/person', require('./routes/citizen'));

app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
});