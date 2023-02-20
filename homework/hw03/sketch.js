function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

    drawCircle(550,100, 50, 'red');
    drawCircle(650,100,50, 'red');
    drawCircle(550,100,10,'white');
    drawCircle(650,100,10,'white');

    drawCircle(100,300,50, 'blue');
    drawCircle(200,300,50, 'blue');
    drawCircle(100,300,10, 'green');
    drawCircle(200,300,10, 'green');


    //side of pants 
    stroke('red');
    strokeWeight(5);
    line(550, 100, 450, 300);
     
    stroke('red');
    strokeWeight(5);
    line(100,300,50,400);

    stroke('red');
    strokeWeight(5);
    line(200, 300, 250,400)

    stroke('red');
    strokeWeight(5);
    line(650, 100, 750, 300);

    //bottom of pants 
    strokeWeight(5);
    stroke('black');
    noFill();
    beginShape();
    vertex(450, 300);
    vertex(550, 350);
    vertex(600, 300);
    vertex(650, 350);
    vertex(750, 300);
    endShape();

    strokeWeight(5);
    stroke('black');
    noFill();
    beginShape();
    vertex(50, 300);
    vertex(550, 350);
    vertex(600, 300);
    vertex(650, 350);
    vertex(750, 300);
    endShape();


    //legs
    stroke('black');
    strokeWeight(5);
    line(470, 310, 320, 550);

    stroke('black');
    strokeWeight(5);
    line(504, 330, 368, 550);

    stroke('black');
    strokeWeight(5);
    line(696, 330, 820, 550);

    stroke('black');
    strokeWeight(5);
    line(730, 310, 868, 550);

    //feet
    rect(295, 552, 100, 40);

    rect(805, 552, 100, 40);





    drawGrid(canvasWidth, canvasHeight);
}



// define your drawCreature function here:

function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}