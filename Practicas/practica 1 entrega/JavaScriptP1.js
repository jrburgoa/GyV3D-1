// Get canvas object from the DOM
var canvas = document.getElementById("myCanvas");
// Init WebGL context
var gl = canvas.getContext("webgl");
// Register event handler
canvas.onmousedown = function(ev) {
click(ev, gl, canvas);
};
function click(ev, gl, canvas) {
// Coordinates of canvas origin
var rect = ev.target.getBoundingClientRect();
// relative x coordinate of click in canvas
var clickX = ev.clientX - rect.left;
// relative y coordinate of click in canvas
var clickY = ev.clientY - rect.top;
// WebGL coordinates (3D)
var halfCanvasWidth = canvas.width / 2;
var halfCanvasHeight = canvas.height / 2;
var x = (clickX - halfCanvasWidth) / halfCanvasWidth;
var y = (halfCanvasHeight - clickY) / halfCanvasHeight;
var xyz = [x, y, 0];
// ...
console.log(xyz)

let n = 0;
coords = [xyz];
while (n < 3){
    coords.concat(coords)
    n = n + 1
} 
console.log(coords)
}
