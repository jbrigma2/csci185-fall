function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(200,100, 50, 'navy');
    drawCircle(100 ,100, 100, 'hotpink');
    drawCircle(300 ,100, 100, 'teal');
    drawCircle(400,100, 50,'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 90, 60, 'teal');
    drawOval(200, 200, 60, 90, 'hotpink');
    drawOval(300, 200, 90, 60, 'navy');
    drawOval(400, 200, 60, 90, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50,);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, teal, navy) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY,size * .75); //convert to an expression 
    fill('teal');
    circle(centerX, centerY, size *.5); //convert to an expression
    fill('navy');
    circle(centerX, centerY, size *.25); //convert to an expression
}``

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY,size) {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
    

    fill('white')
    circle(200,400,50)
    fill('black');
    circle(192, 392, 8);
    circle(208, 392, 8);

    fill('white')
    circle(300,400,50)
    fill('black');
    circle(292, 392, 8);
    circle(308, 392, 8);

    fill('white')
    circle(400,400,50)
    fill('black');
    circle(392, 392, 8);
    circle(408, 392, 8);

}
