const songs = [
    { name: "Aasa Kooda  ('Sai Abhyankkar')", src: "song1.mp3" },
    { name: "Kiliye (From 'ARM')", src: "song2.mp3" },
    { name: "Chuttamalle  ('From DEVARA Part 1')", src: "song3.mp3" },
    { name: "Ed Sheeran - Shape of You ", src: "song4.mp3" },
    { name: "Vennilavu Saaral ('From Amaran')", src: "song5.mp3" },
];

let currentIndex = 0;
let isPlaying = false;
const audio = new Audio(songs[currentIndex].src);

const playPauseButton = document.getElementById("play-pause-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const currentMusicText = document.getElementById("current-music");

function updateMusicInfo() {
    currentMusicText.textContent = `Song: ${songs[currentIndex].name}`;
}

function playMusic() {
    audio.src = songs[currentIndex].src;
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "❚❚ Stop";
    updateMusicInfo();
}

function pauseMusic() {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = "▶ Start";
    currentMusicText.textContent = "No Music Playing";
}

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playMusic();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    playMusic();
});