function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome th MultiMath! Starting new game...'; 
}
document.getElementById('startGame')!.addEventListener('click', startGame);