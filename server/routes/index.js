const express = require('express')
const app = express()


app.use(require('./onesignal'))

module.exports = app
