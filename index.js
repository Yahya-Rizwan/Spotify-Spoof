let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgress= document.getElementById('bar');
let gif = document.getElementById('gif');
let mastersonginfo = document.getElementById('mastersonginfo');
let nasheeds = [{
    songName:"ana maradun",filePath:"songs/1.mp3"},
    {songName:"Chal deen ki tabligh",filePath:"songs/2.mp3"},
    {songName:"Dil badal de by junaid jamshed",filePath:"songs/3.mp3"},
    {songName:"hasbi rabbi by sami yusuf",filePath:"songs/4.mp3"},
    {songName:"Maula ya salli wasallim ",filePath:"songs/5.mp3"},
    {songName:"Soldiers of Allah",filePath:"songs/6.mp3"},
    {songName:"way of tears",filePath:"songs/7.mp3"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove("fa-circle-play");
         masterPlay.classList.add("fa-circle-pause");
         gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',function(){
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value= progress;
})
myProgress.addEventListener("change",()=>{
    audioElement.currentTime = ((myProgress.value*audioElement.duration)/100);
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=> {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
       
})
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=> {
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeallplays();
        
        songindex = parseInt(e.target.id);
        mastersonginfo.innerText = nasheeds[songindex].songName;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
});
document.getElementById("next").addEventListener("click",()=>{
    if(songindex>=7){
        songindex= 1;
    }else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersonginfo.innerText = nasheeds[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=1){
        songindex= 1;
    }else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersonginfo.innerText = nasheeds[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})