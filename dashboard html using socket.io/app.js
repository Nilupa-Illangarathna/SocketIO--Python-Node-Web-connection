const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require("body-parser");

const ejs = require("ejs");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

// app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('stateChange', (state) => {
    io.emit('stateChange', state);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.get("/",function(req,res){
    
  //"index" means the corresponding EJS tmplatge file name
  res.render("index", /*{key: "value"}*/); // Here we can pass variables to EJS template
})



const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
