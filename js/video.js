// Add js here.


var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;

vid.load();


const playButton = document.getElementById("play");
function playVid() {
    vid.play();
}
playButton.addEventListener('click', playVid);

const pauseButton = document.getElementById("pause");
function pauseVid() {
    vid.pause();
}
pauseButton.addEventListener('click', pauseVid);

const slowerButton = document.getElementById("slower");
function slowerVid() {
    if(vid.playbackRate==0.5){
        vid.playbackRate==0.5
        alert( "Video is at slowest speed!")
    } else  {
        vid.playbackRate=vid.playbackRate*0.5
    }
        
}
slowerButton.addEventListener('click',slowerVid);

const fasterButton = document.getElementById("faster");
function fasterVid() {
    if(vid.playbackRate==2){
        vid.playbackRate==2
        alert( "Video is at fastest speed!")
    } else  {
        vid.playbackRate=vid.playbackRate*2
    }
}
fasterButton.addEventListener('click',fasterVid);

const skipButton = document.getElementById("skip");
function skipVid(){
    if (vid.duration-vid.currentTime<15){
        vid.currentTime=0
    }else{
        vid.currentTime=vid.currentTime+15
    }
    
}
skipButton.addEventListener('click',skipVid);

const muteButton = document.getElementById("mute");
function muteVid(){
    if (vid.muted == false){
        vid.muted=true
        muteButton.innerHTML="Unmute"
    } else{
        vid.muted=false
        muteButton.innerHTML="Mute"
    }
    
}
muteButton.addEventListener('click',muteVid);

const volume = document.getElementById("volume");
const slider = document.getElementById("slider");
function sliderVid(){
    vid.volume=slider.value/100
    volume.innerHTML=vid.volume*100
}
slider.addEventListener('input',sliderVid);

