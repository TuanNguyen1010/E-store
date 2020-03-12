const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');

// app
const app = express()

//db
mongoose.connect(
  process.env.DATABASE,
  {useNewUrlParser: true,
    useCreateIndex: true
  }
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

// route 
app.get('/', (req, res) => {
  res.send("hello from Node");

});

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server is runing on port ${port}`)

})