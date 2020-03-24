const path = require('path')
const express = require('express')
const app = express()
const sequelize = require('./db/index.js')
const PORT = process.env.PORT || 8000

//--------------------->Body parser <---------------------//
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//--------------------->Loggin middleware morgan https://github.com/expressjs/morgan  <---------------------//
const morgan = require('morgan')
app.use(morgan('dev'))

//--------------------->Serving javascript files, css files, and images from public folder<---------------------//
//https://expressjs.com/en/starter/static-files.html

// static file-serving middleware
app.use(express.static(path.join(__dirname, '.', 'public')))

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// API routes are prefixed with /api/ -
// this is purely done to namespace them away from your "front-end routes" (such as those created by react-router).
app.use('/api', require('./apiRoutes')) // matches all requests to /api

app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

//--------------------->Starting server<--------------------- //

const startServer = () => {
  const server = app.listen(process.env.PORT || PORT, () =>
    console.log(`Listening on ${PORT}`)
  )
}

;(async () => {
  await sequelize.sync()

  console.log('db sync')
})(startServer())
