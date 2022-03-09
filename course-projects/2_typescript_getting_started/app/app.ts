//staring a new game
function startGame() {

    const playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScores(100, playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'; 
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if(inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScores(score: number, playerName: string = 'MultiMath Player'): void {
    const scoreElement: HTMLInputElement = <HTMLInputElement>document.getElementById('postedScore');
    scoreElement!.innerText = `${playerName} - ${score}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);