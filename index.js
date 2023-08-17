const express = require('express');
const app = express();

app.use(express.json())

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
    console.log(`Server Listening on port: 3000`)
})

io.on('connection', (client) => {
    console.log(`Connected to ${client.id}`)
    client.on('message', data => {
        io.emit('message', data);
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
})





