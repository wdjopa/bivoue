/*const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const port = process.env.PORT || 3000;
app.use( express.static(path.join(__dirname, 'dist/Bivoues2')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Bivoues2/index.html'));
});


const server = http.createServer(app);
const io = socketIO(server);
let numberOnlieUsers = 0;
var me;
io.on('connection', (socket) => {
  numberOnlieUsers ++;
  //user.id = numberOnlieUsers;
  //user.name = 'Nom test ! ';
  //user.surname = 'Prenom test !';
  io.emit('numberOnlieUsers', numberOnlieUsers);
  
  socket.on('login', function (user) {
    console.log(user);

  });
  console.log("Nouvel utilisateur connecté ");

  socket.on('disconnect', () => {
      numberOnlieUsers --;
      io.emit('numberOnlieUsers', numberOnlieUsers);
      console.log('Un utilisateur deconnecte ! ');
  });
});
server.listen(port, () =>  {
    console.log('Serveur running on port ${port }');
});

*/

var http = require('http');
var httpServer = http.createServer(function(req, res){
  console.log('Un utilisateur a affiche la page ! ');
});

httpServer.listen(3000);
var io = require('socket.io').listen(httpServer);

var numberOnlieUsers = 0;

io.on('connection', (socket) => {
  numberOnlieUsers ++;
  io.emit('numberOnlieUsers', numberOnlieUsers);
  var me;
  socket.on('login', function (user) {
    me = user;
    me.id = numberOnlieUsers; 
    console.log(user);
    socket.broadcast.emit('newuser', me);
    console.log("Nouvel Users ! ");
  });
});