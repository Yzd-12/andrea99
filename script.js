const playButton = document.getElementById('play-btn');
const music = document.getElementById('background-music');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playButton.textContent = '⏸ Pause';
    } else {
        music.pause();
        playButton.textContent = '🎵 Play';
    }
});

const loveButtons = document.querySelectorAll('.love-button');
loveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        const allContents = document.querySelectorAll('.love-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`content-${index}`).style.display = 'block';
    });
});
