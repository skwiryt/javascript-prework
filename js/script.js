{
    let yourScore = 0;
    let computerScore = 0;

    const playGame = function(argPlayerInput){
        const playerInput = argPlayerInput;
        clearMessages();
        clearScores();

    
        const getMoveName = function(argMoveId){
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
        const displayResult = function(argComputerMove, argPlayerMove){
            
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
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        //Cheating starts
        const cheatThisGame = function(){
            if(playerMove == "kamień"){ computerMove = "nożyce"; }
            if(playerMove == "nożyce"){ computerMove = "papier"; }
            if(playerMove == "papier"){ computerMove = "kamień"; }
        }
        let computerMove;
        const wishedWins = 0.75; //0.33 is fair game;
        const biasFactor = (wishedWins - 0.33)/0.66; 
        const biasWin = Math.random() < biasFactor;
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


    //testing loop - needs commenting out for simulation of normal game

    for (let i = 1; i < 1000; i++)
    {
        playGame(1);
    }

}
