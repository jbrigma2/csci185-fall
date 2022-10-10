// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

//make a counter:
let counter =0;

function check() {

    //tally up there guesses
    counter++;

    // your code here.
    // step 1: get what the user types into the input and 
    //         store it in a variable
    let userGuess= document.querySelector('#guess').value;
    console.log(userGuess);

    // step 2: convert the value stored in the variable 
    //         to a number
    userGuess = Number(userGuess);
    // step 3: Lates check if the user guessed right 
    //         guess === secret: You win!

    //         guess < secret: Too low 
    //         guess > secret: Too high 

    if(userGuess=== secret){
        console.log('You win!');
        document.querySelector('#message').innerHTML= 'You win!';
        document.querySelector('#celebrate').className='';
     } else if (userGuess <secret)   {
        console.log("Too low");
        document.querySelector('#message').innerHTML= 'too low';
    }else{
        console.log('Too high');
        document.querySelector('#message').innerHTML= 'too high';
    }

    document.querySelector('#num-guesses').innerHTML='You have guessed '+ counter + ' time(s).';
}