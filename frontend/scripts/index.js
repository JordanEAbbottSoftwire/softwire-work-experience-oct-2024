const addButtonListeners = () => {
    const playButton = document.getElementById('play-button');
    const tutorialButton = document.querySelector('#tutorial-button');
    const hiscoresButton = document.querySelector('#hiscores-button');
    
    playButton.addEventListener('click', () => {
        window.location.href = '/pages/game_page.html';
    });
    
    tutorialButton.addEventListener('click', () => {
        window.location.href = '/pages/how-to-play-page-tetris.html';
    });
    
    hiscoresButton.addEventListener('click', () => {
        window.location.href = '/pages/leaderboard.html?score=1000';
    });
}

window.onload = addButtonListeners;
