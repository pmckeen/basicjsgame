let namespace = document.getElementById("namespace");

namespace.innerHTML = "Hello World";

var lastTimestamp = 0;

let canvas = document.getElementById("gamecanvas");
let context = canvas.getContext("2d");

var barlength = 0;

function gameLoop(timestamp) {
    
    let duration = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    let fps = 1000 / duration; // Calculate FPS
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "30px Arial";
    context.fillText("FPS: "+Math.round(fps),50,50); // Show FPS on screen

    /// ---- Add More Code Here

    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(0,100);
    context.lineTo(1+barlength,100);
    context.stroke();
    barlength++;
    /// ---- End

    if (barlength > canvas.width) // Game Stop Criteria
        return;

    requestAnimationFrame(gameLoop); // Ask for next frame
}

requestAnimationFrame(gameLoop); // Ask for first frame