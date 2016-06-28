console.log('external script test');
console.log('?');

var canvas = document.getElementsByTagName("canvas")[0];
console.log(canvas);
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);