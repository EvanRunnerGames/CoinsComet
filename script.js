document.getElementById('fullscreen-control').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const gameContainer = document.getElementById('game-container'); // Use game-container

    if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) { // Safari compatibility
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) { // IE11 compatibility
        gameContainer.msRequestFullscreen();
    } else {
        alert('Your browser does not support fullscreen mode.');
    }
});
