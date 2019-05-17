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


grassArr = [];
grasseaterArr = [];
monsterArr = [];
waterArr = [];
personArr = [];
factoryArr = [];
Grass = require('./modul/Grass.js');
Greater = require('./modul/Greater.js');
Monster = require('./modul/Monster.js');
water = require('./modul/water.js');
person = require('./modul/person.js');
Factory = require('./modul/Factory.js');









function getMatrix() {
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


}
matrix = getMatrix();


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var eater = new Grasseater(x, y, 2);
            grasseaterArr.push(eater);
        }
        else if (matrix[y][x] == 3) {
            var mon = new Monster(x, y, 3);
            monsterArr.push(mon);
        }

        else if (matrix[y][x] == 4) {
            var wat = new Water(x, y, 4);
            waterArr.push(wat);
        }
        else if (matrix[y][x] == 5) {
            var per = new Person(x, y, 5);
            personArr.push(per);

        }
        else if (matrix[y][x] == 6) {
            var fact = new Factory(x, y, 6);
            factoryArr.push(fact);
        }

    }
    function drawserver() {
        for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in grasseaterArr) {
            grasseaterArr[i].mul();
            grasseaterArr[i].move();
            grasseaterArr[i].eat();
            grasseaterArr[i].die();

        }

        for (var i in monsterArr) {
            monsterArr[i].mul();
            monsterArr[i].move();
            monsterArr[i].eat();
            monsterArr[i].die();

        }


        for (var i in waterArr) {
            waterArr[i].mul();
            waterArr[i].move();
            waterArr[i].eat();
            waterArr[i].die();

        }
        for (var i in personArr) {
            personArr[i].mul();
            personArr[i].move();
            personArr[i].makeFactory();
            personArr[i].eat();
            personArr[i].die();

        }
        for (var i in factoryArr) {
            factoryArr[i].mul();
            factoryArr[i].move();
            factoryArr[i].eat();
            factoryArr[i].die();

        }

    }
}

io.sockets.emit('matrix', matrix);
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




// //Task

// for (var i in messages) {
//     var mymessages = messages[i];
//     var packageJson = JSON.stringify(mymessages);
//     window.location = "packageJson" + packageJson;
// }

//create event
var img = new Image();
img.src = "https://e3.365dm.com/18/03/768x432/skynews-lightning-istock-image_4253284.jpg";


image.onclick(function (event) {
for (const i in object) {
    
}
});



