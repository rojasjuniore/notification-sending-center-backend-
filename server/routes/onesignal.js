const express = require('express')
const app = express()
const OneSignal = require('onesignal-node');


const client = new OneSignal.Client(process.env.APP_ID, process.env.API_KEY);


app.post('/createNotification', (req, res) => {

    let notification = req.body
    client.createNotification(notification)
        .then(response => {
            return res.status(202).json({
                status: true,
                response
            })
        })
        .catch(e => {
            return res.status(403).json({
                status: false,
                err: e
            })
        });
});

app.get('/viewDevices', (req, res) => {
    client.viewDevices({ limit: 200, offset: 0 })
        .then(response => {
            return res.status(202).json({
                status: true,
                response: response.body
            })
        }).catch(e => {
            return res.status(403).json({
                status: false,
                err: e
            })
        });
})




app.get('/viewNotifications', async (req, res) => {
    const response = await client.viewNotifications();
    //const response = await client.viewNotifications({ limit: 10, kind: 2, offset: 2 });

    return res.status(202).json({
        status: true,
        response: response.body
    })
})

// app.post('/cancelNotification', (req, res) => { })




// app.post('/addDevice', (req, res) => { })

// app.post('/editDevice', (req, res) => { })

// app.post('/createSegment', (req, res) => { })

// app.post('/deleteSegment', (req, res) => { })





app.get('/', function (req, res) {
    res.send('Hello World!');
});


module.exports = app;