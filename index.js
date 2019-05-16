// console.log(`Hello Node`);
// var os = require("os");
// var message = "The platform is";

// function main() {
//     console.log(message + os.platform());
// }
// main();

var express = require("express");
var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });
app.get("/name/:google", function(req,res){
    // var name = req.params.google;
    res.redirect('http://google.com');
    // res.send(name);
});

app.use(express.static("Angin"));

app.get("/", function(req,res){
res.redirect("Angin");

})
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});



function main() {
    var file ="Hello.txt";
    fs.appendFileSync(file,"Hello world\n");
}
main();

var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();

var fs = require('fs');

function main() {
  var file = "Hello.txt" 
  fs.appendFilkeSync(file, "Hello World\n"); 
}
 main();

 var clickCount =0;
 function clickHandler(event) {
clickCount++;
console.log(event);
     var string = "thanks for clicking" + clickCount;
     this.innertEXT = string;
 }

 var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);

