var http = require('http');
var httpServer = http.createServer(function (res, req) {
  console.log('Salut a tous ! ');
});
httpServer.listen(1337);
var io = require('socket.io').listen(httpServer);
io.sockets.on('connection', function (socket) {
  console.log("un Nouvel Utilisateur");
})
