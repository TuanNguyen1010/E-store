const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// import routes
const userRoutes = require('./routes/user')


// app
const app = express()


// routes middleware
app.use("/api", userRoutes);

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

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server is runing on port ${port}`)

})