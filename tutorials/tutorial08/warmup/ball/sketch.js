const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;

function draw() {
    //frameRate(5);
    clear();


    //Wehn the ball hits the right wall, 
    //make it bounce 
    if( x>=500 -width/2){
        speed= (speed +1) *-1;
    }

    if( x<=150+ width/2 ){
        speed= -1 * speed +1;
    }
    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, width);
    x += speed;
    //console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}