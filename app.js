const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
require('dotenv').config()

// import routes
const authourisationRoutes = require('./routes/authourisation')
const userRoutes = require('./routes/user')


// app
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());

// routes middleware
app.use("/api", userRoutes);
app.use("/api", authourisationRoutes)

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

module.exports = app;