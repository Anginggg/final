 
// var matrix = [
//     [4, 0, 1, 0, 0],
//     [1, 5, 4, 0, 0],
//     [0, 1, 6, 4, 6],
//     [0, 5, 1, 5, 0],
//     [1, 1, 3, 4, 6],
//     [1, 1, 0, 2, 0],
//     [1, 1, 5, 4, 0]
//  ];

function setup() {


    frameRate(2);

    for (let y = 0; y < a; y++) {
        matrix[y] = [];
        for (let x = 0; x < a; x++) {
            matrix[y][x] = Math.round(random(6));
        }
    }
    createCanvas(30* side, 30* side);


}
function main() {
    var socket = io();
    var chatDiv = document.getElementById('image');


    function lightning(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleImage(msg) {
        var img = document.createElement('image');
        image.onclick
        chatDiv.appendChild(Image);
        input.value = "";
    }

    socket.on('change image', handleImage);
}


function drawserver() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("silver");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("turquoise");
                rect(x * side, y * side, side, side);


            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }

    }




    

}
setInterval(drawserver,3000)

