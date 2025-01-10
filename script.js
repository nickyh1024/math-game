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

//function to update scores on the screen
function updateScores() {
    document.getElementById('score1').textContent = score1; 
    document.getElementById('score2').textContent = score2; 
}

//function to handle player input
function handlePlayerInput(player, selectedOption){
    if (parseFloat(selectedOption) === correctAnswer) {
        if (player === 1) {
            score1++; 
        }
        else if (player === 2) {
            score2++; 
        }

        //check if game over
        if (score1 === 10 || score2 === 10) {
            const winner = score1 === 10 ? 'Player 1' : 'Player 2';
            alert(`${winner} wins!`);
            resetGame(); 
        }
        else {
            //generate a new question 
            correctAnswer = generateQuestion(); 
        }
    }
    else {
        alert(`Wrong answer! Try again.`);
    }

    updateScores();
}

//Function to reset the game
function resetGame() {
    score1 = 0; 
    score2 = 0; 
    updateScores(); 
    correctAnswer = generateQuestion(); 
}

//add keyboard controls for players
document.addEventListener('keydown', (event) => {
    //for player 1
    if (event.key === 'a') handlePlayerInput(1, document.getElementById('option1').textContent);
    if (event.key === 's') handlePlayerInput(1, document.getElementById('option2').textContent);
    if (event.key === 'd') handlePlayerInput(1, document.getElementById('option3').textContent);

    //for player 2
    if (event.key === 'j') handlePlayerInput(2, document.getElementById('option1').textContent);
    if (event.key === 'k') handlePlayerInput(2, document.getElementById('option2').textContent);
    if (event.key === 'l') handlePlayerInput(2, document.getElementById('option3').textContent);
});

//start the game
let correctAnswer = generateQuestion(); 