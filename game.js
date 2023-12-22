let namespace = document.getElementById("namespace");

namespace.innerHTML = "Hello World";

var lastTimestamp = 0;

let canvas = document.getElementById("gamecanvas");
let context = canvas.getContext("2d");



function gameLoop(timestamp) {
    
    let duration = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    let fps = 1000 / duration; // Calculate FPS
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "30px Arial";
    context.fillText("FPS: "+Math.round(fps),50,50); // Show FPS on screen

    /// ---- Add More Code Here

    /// ---- End

    if (lastTimestamp > 0) // Game Stop Criteria
        return;

    requestAnimationFrame(gameLoop); // Ask for next frame
}

requestAnimationFrame(gameLoop); // Ask for first frame