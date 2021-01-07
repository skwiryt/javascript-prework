let yourScore = 0;
let computerScore = 0;

function playGame(argPlayerInput){
    let playerInput = argPlayerInput;
    clearMessages();
    clearScores();

   
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        else if (argMoveId == 2){
            return 'papier';
        }
        else if (argMoveId == 3){
            return 'nożyce';
        }  
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    function displayResult(argComputerMove, argPlayerMove){
        
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier' 
        || argComputerMove == 'papier' && argPlayerMove == 'nożyce'
        || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        yourScore++;        
        }
        else if(argComputerMove == argPlayerMove) {
            printMessage('Jest remis');
        }
        else{
            printMessage('Ja wygrałem!');
            computerScore++;
        }
        showScores(yourScore, computerScore);
    }

    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    //Cheating starts
    function cheatThisGame(){
        if(playerMove == "kamień"){ computerMove = "nożyce"; }
        if(playerMove == "nożyce"){ computerMove = "papier"; }
        if(playerMove == "papier"){ computerMove = "kamień"; }
    }
    let computerMove;
    let wishedWins = 0.75; //0.33 is fair game;
    let biasFactor = (wishedWins - 0.33)/0.66; 
    let biasWin = Math.random() < biasFactor;
    if (biasWin) {
        cheatThisGame();  
    }
    //Cheating ends    
    else{
        computerMove = getMoveName(randomNumber);     
    }    
    printMessage('Mój ruch to: ' + computerMove);
    displayResult(computerMove, playerMove); 
}

document.getElementById("play-rock").addEventListener('click', function(){ 
    playGame(1); 
});
document.getElementById("play-paper").addEventListener('click', function(){
    playGame(2);
});
document.getElementById("play-scissors").addEventListener('click', function(){
    playGame(3);
});


//testing loop

for (let i = 1; i < 1000; i++)
{
    playGame(1);
}


