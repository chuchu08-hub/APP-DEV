
var playButton = document.getElementById('playButton');
var playIcon = playButton.querySelector('.play-icon');
var pauseIcon = playButton.querySelector('.pause-icon');

var isPlaying = false; 

playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
       
        playButton.classList.add('playing');
        console.log("Playback started");
    } else {
        
        playButton.classList.remove('playing');
        console.log("Playback paused");
    }
});