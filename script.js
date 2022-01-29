let buttonfb = document.getElementById('buttonfb');
let sidebar=document.querySelector('.sidebar');
let ilogo=document.querySelector('.ilogo');
let el1 = document.querySelector('.h1d')
let el2 = document.querySelector('.h2d')
let el3 = document.querySelector('.h3d')
let el4 = document.querySelector('.h4d')
let open=0;
cove=document.querySelector('.cove');
let play1=1;
let play2=0;


let cpic11=document.querySelector('.cpic11');
let cpic12=document.querySelector('.cpic12');
let cpic13=document.querySelector('.cpic13');
let cpic14=document.querySelector('.cpic14');
let cpic15=document.querySelector('.cpic15');
let sname11=document.querySelector('.sname11');
let sname12=document.querySelector('.sname12');
let sname13=document.querySelector('.sname13');
let sname14=document.querySelector('.sname14');
let sname15=document.querySelector('.sname15');


let cpic21=document.querySelector('.cpic21');
let cpic22=document.querySelector('.cpic22');
let cpic23=document.querySelector('.cpic23');
let cpic24=document.querySelector('.cpic24');
let cpic25=document.querySelector('.cpic25');
let sname21=document.querySelector('.sname21');
let sname22=document.querySelector('.sname22');
let sname23=document.querySelector('.sname23');
let sname24=document.querySelector('.sname24');
let sname25=document.querySelector('.sname25');

//cpic11.style.backgroundImage= `url('${5}.jpg')`;


let songname=[
    "Udd Gaye","Brown Munde","Doja Cat","Drake","Rap-God","Excuses","Sterio","Dekh LE","Life goes on","Stay",
]

let songname2=[
    "Bekhayali","Butterfly Effect","Closer","Jalebi Baby","Kasoor","Ranjha","The Nights","Tum Sath Rehna","Watermelon Sugar","What makes you Beautiful",
]
names=document.querySelector('.name');
names.innerHTML= songname[0];
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

let songIndex1 = 1;
let songIndex2 = 1;
let audioElement = new Audio('1.mp3');
audioElement.src = `${songIndex1}.mp3`;
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('musicseekbar');
let songItems = Array.from(document.getElementsByClassName('song'));
let nexplay=document.querySelector('.mastplay');

let nextpage=document.getElementById('nextpage');
let prevpage=document.getElementById('prevpage');
let t1=1,t2=2,t3=3,t4=4,t5=5;
nextpage.addEventListener('click', ()=>{
     songIndex1=songIndex1+1;
    t1=t1+1;t2=t2+1;t3=t3+1;t4=t4+1;t5=t5+1;
    if(t1==11) t1=1;
    if(t2==11) t2=1;
    if(t3==11) t3=1;
    if(t4==11) t4=1;
    if(t5==11) t5=1;
    
     cpic11.style.backgroundImage= `url('${t1}.jpg')`;
     cpic12.style.backgroundImage= `url('${t2}.jpg')`;
     cpic13.style.backgroundImage= `url('${t3}.jpg')`;
     cpic14.style.backgroundImage= `url('${t4}.jpg')`;
     cpic15.style.backgroundImage= `url('${t5}.jpg')`;
     
     sname11.innerHTML=songname[t1-1];
     sname12.innerHTML=songname[t2-1];
     sname13.innerHTML=songname[t3-1];
     sname14.innerHTML=songname[t4-1];
     sname15.innerHTML=songname[t5-1];
})

prevpage.addEventListener('click', ()=>{
    songIndex1=songIndex1-1;
   t1=t1-1;t2=t2-1;t3=t3-1;t4=t4-1;t5=t5-1;
   if(t1==0) t1=10;
   if(t2==0) t2=10;
   if(t3==0) t3=10;
   if(t4==0) t4=10;
   if(t5==0) t5=10;
   
    cpic11.style.backgroundImage= `url('${t1}.jpg')`;
    cpic12.style.backgroundImage= `url('${t2}.jpg')`;
    cpic13.style.backgroundImage= `url('${t3}.jpg')`;
    cpic14.style.backgroundImage= `url('${t4}.jpg')`;
    cpic15.style.backgroundImage= `url('${t5}.jpg')`;
    
    sname11.innerHTML=songname[t1-1];
    sname12.innerHTML=songname[t2-1];
    sname13.innerHTML=songname[t3-1];
    sname14.innerHTML=songname[t4-1];
    sname15.innerHTML=songname[t5-1];
})




song1.addEventListener('click', ()=>{
        songIndex1=t1;
        audioElement.src = `${t1}.mp3`;
        audioElement.play();
        nexplay.style.backgroundImage = "url('pause.png')";
        cove.style.opacity=1;
        names.innerHTML= songname[t1-1];
        play1=1;play2=0;
})
song2.addEventListener('click', ()=>{
    songIndex1=t2;
    audioElement.src = `${t2}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname[t2-1];
    play1=1;play2=0;
})
song3.addEventListener('click', ()=>{
    songIndex1=t3;
    audioElement.src = `${t3}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname[t3-1];
    play1=1;play2=0;
})
song4.addEventListener('click', ()=>{
    songIndex1=t4;
    audioElement.src = `${t4}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname[t4-1];
    play1=1;play2=0;
})
song5.addEventListener('click', ()=>{
    songIndex1=t5;
    audioElement.src = `${t5}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname[t5-1];
    play1=1;play2=0;
})

songIndex2=1;
let nextpagec=document.getElementById('nextpagec');
let prevpagec=document.getElementById('prevpagec');
let f1=1,f2=2,f3=3,f4=4,f5=5;
nextpagec.addEventListener('click', ()=>{
     songIndex2=songIndex2+1;
    f1=f1+1;f2=f2+1;f3=f3+1;f4=f4+1;f5=f5+1;
    if(f1==11) f1=1;
    if(f2==11) f2=1;
    if(f3==11) f3=1;
    if(f4==11) f4=1;
    if(f5==11) f5=1;
    
     cpic21.style.backgroundImage= `url('s${f1}.jpg')`;
     cpic22.style.backgroundImage= `url('s${f2}.jpg')`;
     cpic23.style.backgroundImage= `url('s${f3}.jpg')`;
     cpic24.style.backgroundImage= `url('s${f4}.jpg')`;
     cpic25.style.backgroundImage= `url('s${f5}.jpg')`;
     
     sname21.innerHTML=songname2[f1-1];
     sname22.innerHTML=songname2[f2-1];
     sname23.innerHTML=songname2[f3-1];
     sname24.innerHTML=songname2[f4-1];
     sname25.innerHTML=songname2[f5-1];
})

prevpagec.addEventListener('click', ()=>{
    songIndex2=songIndex2-1;
   f1=f1-1;f2=f2-1;f3=f3-1;f4=f4-1;f5=f5-1;
   if(f1==0) f1=10;
   if(f2==0) f2=10;
   if(f3==0) f3=10;
   if(f4==0) f4=10;
   if(f5==0) f5=10;
   
    cpic21.style.backgroundImage= `url('s${f1}.jpg')`;
    cpic22.style.backgroundImage= `url('s${f2}.jpg')`;
    cpic23.style.backgroundImage= `url('s${f3}.jpg')`;
    cpic24.style.backgroundImage= `url('s${f4}.jpg')`;
    cpic25.style.backgroundImage= `url('s${f5}.jpg')`;
    
    sname21.innerHTML=songname2[f1-1];
    sname22.innerHTML=songname2[f2-1];
    sname23.innerHTML=songname2[f3-1];
    sname24.innerHTML=songname2[f4-1];
    sname25.innerHTML=songname2[f5-1];
})



song6.addEventListener('click', ()=>{
    songIndex2=f1;
    audioElement.src = `s${f1}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname2[f1-1];
    play1=0;play2=1;
})
song7.addEventListener('click', ()=>{
    songIndex2=f2;
    audioElement.src = `s${f2}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname2[f2-1];
    play1=0;play2=1;
})
song8.addEventListener('click', ()=>{
    songIndex2=f3;
    audioElement.src = `s${f3}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname2[f3-1];
    play1=0;play2=1;
})
song9.addEventListener('click', ()=>{
    songIndex2=f4;
    audioElement.src = `s${f4}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname2[f4-1];
    play1=0;play2=1;
})
song10.addEventListener('click', ()=>{
    songIndex2=f5;
    audioElement.src = `s${f5}.mp3`;
    audioElement.play();
    nexplay.style.backgroundImage = "url('pause.png')";
    cove.style.opacity=1;
    names.innerHTML= songname2[f5-1];
    play1=0;play2=1;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        nexplay.style.backgroundImage = "url('pause.png')";
        cove.style.opacity=1;
    }
    else{
        audioElement.pause();
        nexplay.style.backgroundImage = "url('newforward2.png')";
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


let temps;

document.getElementById('next').addEventListener('click', ()=>{
   if(play1==1){

    if(songIndex1>=10){
        songIndex1 = 1;
    }
    else{
        songIndex1 += 1;
    }
    audioElement.src = `${songIndex1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname[songIndex1-1];
  }
  else{
    if(songIndex2>=10){
        songIndex2 = 1;
    }
    else{
        songIndex2 += 1;
    }
    audioElement.src = `s${songIndex2}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname2[songIndex2-1];
  }
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(play1==1){
    songIndex1-=1;
    if(songIndex1==0){
        songIndex1=10;
    }
    audioElement.src = `${songIndex1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname[songIndex1-1];
  }
  else{
    songIndex2-=1;
    if(songIndex2==0){
        songIndex2=10;
    }
    audioElement.src = `s${songIndex2}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname2[songIndex2-1];
  }
})

setInterval(()=>{
    console.log(play1,play2);
},1000);

/*if(play2==1){
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex2>=10){
        songIndex2 = 1;
    }
    else{
        songIndex2 += 1;
    }
    audioElement.src = `s${songIndex2}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname2[songIndex2-1];
})


document.getElementById('previous').addEventListener('click', ()=>{
    songIndex2-=1;
    if(songIndex2==0){
        songIndex2=10;
    }
    audioElement.src = `s${songIndex2}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    cove.style.opacity=1;
    names.innerHTML= songname2[songIndex2-1];
})
}*/



buttonfb.addEventListener('click', ()=>{
    if(open==0){
        sidebar.style.width="10vw";
        buttonfb.style.left="9vw";
        ilogo.style.display="flex";
        ilogo.style.justifyContent="space-around";
        ilogo.style.paddingTop="5vh";
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
       ilogo.style.paddingTop="8vh";
        el1.innerHTML="";
        el2.innerHTML="";
        el3.innerHTML="";
        el4.innerHTML="";
       open=0;
    }
})
