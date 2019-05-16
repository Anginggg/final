grassA



var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var io = require('socket.io')(server);
var fs = require('fs');
app.use(express.static('.'));
app.get('/', function (req, res) {
    res.redirect('index.html')
});
server.listen(3000);

    let matrix = []; // Մատրիցի ստեղծում
let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        if (a >= 20 && a < 40) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a >= 40 && a < 50) {
            matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        }
        else if (a >= 50 && a < 70) {
            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        }
        else if (a >= 70 && a < 90) {
            matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        }
        else if (a >= 90 && a < 100) {
            matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        }
    }
}

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}


setInterval(drawserver, 3000);

io.on('connection', function (socket) {
    for (var i in messages) {
        io.socket.emit("Display message", messages[i]);

    }
    socket.on("send messages", function (data) {
        messages.push(data);
        io.sockets.emit("display messages", data);

    });


});

function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
}


window.onload = main;

//Task

for (var i in messages) {
    var mymessages = messages[i];
    var packageJson = JSON.stringify(mymessages);
    window.location = "packageJson" + packageJson;
}