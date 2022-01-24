let buttonfb = document.getElementById('buttonfb');
let sidebar=document.querySelector('.sidebar');
let ilogo=document.querySelector('.ilogo');
let el1 = document.querySelector('.h1d')
let el2 = document.querySelector('.h2d')
let el3 = document.querySelector('.h3d')
let el4 = document.querySelector('.h4d')
let open=0;
cove=document.querySelector('.cove');


song1=document.querySelector('.song11');
song2=document.querySelector('.song12');
song3=document.querySelector('.song13');
song4=document.querySelector('.song14');
song5=document.querySelector('.song15');
song6=document.querySelector('.song21');
song7=document.querySelector('.song22');
song8=document.querySelector('.song23');
song9=document.querySelector('.song24');
song10=document.querySelector('.song25');

let songIndex = 0;
let audioElement = new Audio('1.mp3');
audioElement.src = `${songIndex+1}.mp3`;
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('musicseekbar');
let songItems = Array.from(document.getElementsByClassName('song'));

song1.addEventListener('click', ()=>{
        songIndex=0;
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.src="pause.png";
        cove.style.opacity=1;
})
song2.addEventListener('click', ()=>{
    songIndex=1;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    
    cove.style.opacity=1;
})
song3.addEventListener('click', ()=>{
    songIndex=2;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song4.addEventListener('click', ()=>{
    songIndex=3;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song5.addEventListener('click', ()=>{
    songIndex=4;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song6.addEventListener('click', ()=>{
    songIndex=5;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song7.addEventListener('click', ()=>{
    songIndex=6;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song8.addEventListener('click', ()=>{
    songIndex=7;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song9.addEventListener('click', ()=>{
    songIndex=8;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})
song10.addEventListener('click', ()=>{
    songIndex=9;
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.src="pause.png";
    cove.style.opacity=1;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.removeAttribute('src');
        masterPlay.src="pause.png"
        cove.style.opacity=1;
    }
    else{
        audioElement.pause();
        cove.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 1000); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/1000;
})




document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
})



let songname=[
    "Udd Gaye","Brown Munde","Doja Cat","Drake","Rap-God","Excuses","Sterio","Dekh LE","Lige goes on","Stay",
]
names=document.querySelector('.name');
names.innerHTML= songname[songIndex];
setInterval(()=>{
    names.innerHTML= songname[songIndex];
},200)



buttonfb.addEventListener('click', ()=>{
    if(open==0){
        sidebar.style.width="10vw";
        buttonfb.style.left="9vw";
        ilogo.style.display="flex";
        ilogo.style.justifyContent="space-around";
        el1.innerHTML="Home";
        el2.innerHTML="Podcast";
        el3.innerHTML="Playlist";
        el4.innerHTML="Buy Pro";
        open=1;
    }
    else{
       sidebar.style.width="4vw";
       buttonfb.style.left="3vw";
       ilogo.style.display="block";
        el1.innerHTML="";
        el2.innerHTML="";
        el3.innerHTML="";
        el4.innerHTML="";
        el1.style.backgroundImage = "url('home.png')";
       open=0;
    }
})
