require('./config/config')
const express = require('express')
const path = require('path')

const app = express()
const bodyParser = require('body-parser')


// Add headers
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Habilitar Carpeta Public
app.use(express.static(path.resolve(__dirname, '../public')))




// Configuracion Global de ruta
app.use(require('./routes/index'))



app.listen(process.env.PORT, function () {
    console.log(`app listening on port ${process.env.PORT}`);
});
