console.log("Welcome to Spotify")

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('oonchi1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Oonci Oonchi " , filePath: "song/oonchi1.mp3", coverPath: "oonchi.jpeg"},
    {songName: "Heeriye Heeriye " , filePath: "song/oonchi1.mp3", coverPath: "cover2.jpeg"},
    {songName: "Falak tu garaj tu " , filePath: "song/oonchi1.mp3", coverPath: "cover3.jpeg"},
    {songName: "kalaastar" , filePath: "song/oonchi1.mp3", coverPath: "cover4.jpeg"},
    {songName: " Desh mere " , filePath: "song/oonchi1.mp3", coverPath: "cover5.jpeg"},
    {songName: "Don't let me down " , filePath: "song/oonchi1.mp3", coverPath: "cover6.jpeg"},
    
]

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
         
         //update Seekbar
         progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
         

         myProgressbar.value = progess;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})
