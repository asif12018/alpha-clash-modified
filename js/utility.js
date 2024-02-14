
//audio function




function playSound(sound){
    
    
    
    if(sound === 'game'){
        let gameSelect = new Audio('./audio/red.mp3');
        gameSelect.play();
    }else if(sound === 'user'){
        let userSelect = new Audio('./audio/green.mp3');
        userSelect.play();
    }else{
        let wrong = new Audio('./audio/wrong.mp3');
        wrong.play();
    }
}



//game data generator
function hideElementById(element){
    document.getElementById(element).classList.add('hidden');
}

function showElementById(element){
    document.getElementById(element).classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'qwertyuiopasdfghjklzxcvbnm/';
    const alphabetArray = alphabetString.split('');
    
    const num = Math.round(Math.random() * 26);
    return alphabetArray[num];
}

