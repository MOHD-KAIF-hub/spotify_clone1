console.log("Welcome to Spotify");
let song_index=0;
audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('left'));
let songs=[{songName:"Ohh desh Mere  ",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Evergreen Nice",filepath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName:"Humnava jubin",filepath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName:"keshariya Roop",filepath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName:"Tum jaise dosto",filepath:"songs/5.mp3",coverPath:"covers/5.jpg"}]

songitem.forEach((element,i) => {
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;    
});



masterplay.addEventListener('click',()=>{
if(audioelement.paused||audioelement.currentTime<=0)
{
    audioelement.play();
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif.style.opacity=1;
}
else{
    audioelement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
    gif.style.opacity=0;
}
})
audioelement.addEventListener('timeupdate',()=>
{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressBar.value = progress; 
}

)
 myprogressBar.addEventListener('change',()=>{
         audioelement.currentTime=(myprogressBar.value*audioelement.duration)/100;
 })
 const makeAllplays=()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
     

    
})
 }
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllplays();
 index=parseInt(e.target.id);
 song_index=index;
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause');

audioelement.src = songs[index-1].filepath;
audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');

})
 })
 document.getElementById('next').addEventListener('click',()=>{
if(song_index>=5)
{
document.getElementsByClassName("songitemplay")[song_index].classList.remove('fa-pause');
document.getElementsByClassName("songitemplay")[song_index].classList.add('fa-play');
    song_index=1;
}
else{
   
    song_index++;
}
if(song_index>1)
{
 document.getElementsByClassName("songitemplay")[song_index-1].classList.remove('fa-pause');
document.getElementsByClassName("songitemplay")[song_index-1].classList.add('fa-play');
}
document.getElementsByClassName("songitemplay")[song_index].classList.remove('fa-play');
document.getElementsByClassName("songitemplay")[song_index].classList.add('fa-pause');

audioelement.src = songs[song_index-1].filepath;
audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');

 })

document.getElementById('prev').addEventListener('click',()=>{
    if(song_index<=0)
    {
        song_index=5;
    }
    else{
        song_index--;
    }
    audioelement.src = songs[song_index-1].filepath;
audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
})