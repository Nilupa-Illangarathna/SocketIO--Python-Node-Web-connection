const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('stateChange', (state) => {
    io.emit('stateChange', state);
  });

  socket.on('textInput', (inputText) => {
    console.log('Received input:', inputText);
    // Emit an event to Python code to print the input text
    io.emit('pythonTextInput', inputText);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
