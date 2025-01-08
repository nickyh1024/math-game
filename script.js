//variables to store scores
let score1 = 0;
let score2 = 0; 

//function to generate random math questions
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; //random numbers 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; //random numbers 1-10
    const operators = ['+', '-', '*', '/']; //possible operators
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer; 
    if (operator === '+') correctAnswer = num1 + num2; 
    if (operator === '-') correctAnswer = num1 - num2; 
    if (operator === '*') correctAnswer = num1 * num2; 
    if (operator === '/') correctAnswer = Math.round((num1/num2) * 10) / 10;

    //update the question on the page
    document.getElementById('question').textContent = `${num1} ${operator} ${num2}`;

    //generate random options
    const options = [
        correctAnswer,
        correctAnswer + Math.floor(Math.random() * 10) + 1,
        correctAnswer - Math.floor(Math.random() * 10) - 1,
    ].sort(() => Math.random() - 0.5);

    //update buttons with options
    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('option3').textContent = options[2];

    //return the correct answer
    return correctAnswer;
}

//start the game
let correctAnswer = generateQuestion(); 