//     find
const body = document.querySelector("body")
const heartIcon = document.querySelector('.svg1')
const playBtn = document.querySelector('#button3')

//-----------------------------------------------------------
heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('active')
});

let isPlaying = false;

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playBtn.classList.toggle('playing', isPlaying);


  if (isPlaying) {
    console.log('در حال پخش 🎵');
    // audio.play()
  } else {
    console.log('متوقف شد ⏹️');
    // audio.pause()
  }
});