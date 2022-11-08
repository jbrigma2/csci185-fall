function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

   //draw moon 
    drawCircle(700,300,600, 'beige');
    drawCircle(550,100,40, 'beige');
    drawCircle(600,450,112, 'beige');
   
   
    drawGrid(canvasWidth, canvasHeight);
}



// define your drawCreature function here:

function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}