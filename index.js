const SERVER_PORT = process.env.SERVER_PORT || 5000; 

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const ejs = require('ejs');
const { v4: uuidV4 } = require('uuid');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});


app.get("/:room", (req, res)=>{
  res.render('room', {
    roomID: req.params.room
  })
});

app.listen(3000, () => {
  console.log('server started');
});

server.listen(SERVER_PORT);