
//starting home code:


function continueGame(){
    gameData = getARandomAlphabet();
    document.getElementById('target').innerText = gameData;
    playSound('game');
    return gameData;
}

function startGame(){
    let sum = 0;
    let gameData = continueGame();
    document.addEventListener('keyup',function(event){
        console.log('this is game data', gameData);
        console.log('this is key',event.key);
        if(event.key === gameData){
            document.getElementById(event.key).style.background = 'white';
            playSound('user');
            gameData = continueGame();
            sum++;
            document.getElementById('life-board').innerText = sum;
            setTimeout(function(){
                document.getElementById(event.key).style.background = '#191e24';
            }, 100);
        }else if(event.key !== gameData){
            score();
            playSound('wrong');
            document.getElementById('result').innerText = sum;
        }
    })
}

function score(){
    hideElementById('play-ground');
    showElementById('score');
}


function play(){
    hideElementById('home')
    showElementById('play-ground');
    startGame();

}



function playSound(sound){
    
    
    
    if(sound === 'game'){
        let gameSelect = new Audio('../audio/red.mp3');
        gameSelect.play();
    }else if(sound === 'user'){
        let userSelect = new Audio('../audio/green.mp3');
        userSelect.play();
    }else{
        let wrong = new Audio('../audio/wrong.mp3');
        wrong.play();
    }
}