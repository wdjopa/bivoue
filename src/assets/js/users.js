$(function () {
    var socket = io.connect('http://localhost:3000');
    $('#login_form').submit(function( event ){
        event.preventDefault();
        socket.emit('login', {
            id: 'test';
            username : $('#loginUsername').val();
        });
        alert('ok !');
    });
})