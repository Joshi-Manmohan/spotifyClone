document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const songList = document.getElementById('songList');

    songList.addEventListener('click', (event) => {
        const li = event.target;

        if (li.tagName === 'LI') {
            const src = li.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
            playBtn.disabled = true;
            pauseBtn.disabled = false;
            stopBtn.disabled = false;
        }
    });

    playBtn.addEventListener('click', () => {
        if (audioPlayer.src) {
            audioPlayer.play();
            playBtn.disabled = true;
            pauseBtn.disabled = false;
            stopBtn.disabled = false;
        }
    });

    pauseBtn.addEventListener('click', () => {
        audioPlayer.pause();
        playBtn.disabled = false;
        pauseBtn.disabled = true;
    });

    stopBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playBtn.disabled = false;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
    });

    audioPlayer.addEventListener('ended', () => {
        playBtn.disabled = false;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
    });

    // Initially disable pause and stop buttons
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
});
