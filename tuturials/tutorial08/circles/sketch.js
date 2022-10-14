function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 800) {
        if(counter % 3==0){ 
            fill('hotpink');
        }  else {
            fill('teal');
            fill('red')
        }  
        
    circle(400, 0+ counter *10, counter* 10, counter*10);

    counter += 1;

    
}
    //circle(100, 0+50, 50);
    //circle(100, 1+50, 50);
    //circle(100, 2+50, 50);
    //circle(100, 3+50, 50);
    //circle(100, 4+50, 50);

    drawGrid(canvasWidth, canvasHeight);
}
