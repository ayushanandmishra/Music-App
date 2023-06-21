const mplay=document.querySelector("#mplay");
const audio=new Audio('duaLipa.mp3');

const pbar=document.querySelector("#progressBar");
const currentSong=document.querySelector("#currentSong");
pbar.value=0;
let currSong=0;
var playing=false;

const forw=document.querySelector("#forward");
const back=document.querySelector("#backward");

const moving=document.querySelector("#moving");
moving.style.opacity=0;

const array=[

    {songName:"Levitating - Dua Lipa", url:"duaLipa.mp3" , coverPath:"dua.jpg"},
    {
        songName:" Sunflower - Post Malone",url:"postMalone.mp3",coverPath:"post.jpg"
    },
    {
        songName:" Cold heart - Dua Lipa",url:"eltonJohn.mp3",coverPath:"elton.png"
    },
    {
        songName:" Thunder - Imagine Dragons",url:"thunder.mp3",coverPath:"igd.jpg"
    },
    {
        songName:" Fix you - Cold Play",url:"fixyou.mp3",coverPath:"fixuou.jpg"
    },
    {
        songName:"Stiutk - Gotye",url:"gotye.mp3",coverPath:"got.jpg"
    }
   
]

document.querySelector("#one").addEventListener("click", function myInd(){
    currSong=0;
    setMusic(currSong);
    this.classList.remove("fa-regular", "fa-2x", "fa-circle-play");
    this.classList.add("fa-regular", "fa-2x", "fa-circle-pause");
    
})
document.querySelector("#two").addEventListener("click", function myInd(){
    currSong=1;
   
    setMusic(currSong);

})
document.querySelector("#three").addEventListener("click", function myInd(){
    currSong=2;
   
    setMusic(currSong);
    
})
document.querySelector("#four").addEventListener("click", function myInd(){
    currSong=3;
    setMusic(currSong);
   
    
})
document.querySelector("#five").addEventListener("click", function myInd(){
    currSong=4;
    setMusic(currSong);
  
   
})
document.querySelector("#six").addEventListener("click", function myInd(){
    currSong=5;
    setMusic(currSong);
    
})




mplay.addEventListener("click", function myFun(){
   
   
        if(audio.paused || audio.currentTime<=0)
        {
            audio.play();
            playing=true;
            moving.style.opacity=1;
            mplay.classList.remove("fa-solid", "fa-2x", "fa-play");
            mplay.classList.add("fa-solid" ,"fa-2x" ,"fa-pause");

        }
    
        else{
            audio.pause();
            playing=false;
            moving.style.opacity=0;
            mplay.classList.remove("fa-solid" ,"fa-2x", "fa-pause");
            mplay.classList.add("fa-solid","fa-2x" ,"fa-play");
        }
        
    
  
   
})



audio.addEventListener("timeupdate",function myUpdate(){

    
    const currentTime=audio.currentTime;
    const totalTime=audio.duration;
    const update=((currentTime/totalTime)*2000).toString();
    pbar.value=update;
    
    if(audio.ended)
    {
        forward();
    }

})

pbar.addEventListener("change",function myUpdate2(){

   
    const currentValue=pbar.value;
    const totalTime=audio.duration;
    audio.currentTime=(currentValue/2000)*totalTime;

})


function setMusic(currSong)
{


    pbar.value=0;   
    audio.src=array[currSong].url;
    audio.play();
    playing=true;
    moving.style.opacity=1;
    mplay.classList.remove("fa-solid", "fa-2x", "fa-play");
    mplay.classList.add("fa-solid" ,"fa-2x" ,"fa-pause");
    console.log(audio.volume);
    currentSong.innerText=array[currSong].songName;

}

forw.addEventListener("click",function forward()
{
    if(currSong!=5)
    {
        currSong++;
    }
    else
    {
        currSong=0;
    }

    setMusic(currSong);
})

back.addEventListener("click",function backward()
{
    if(currSong!=0)
    {
        currSong--;
    }
    else
    {
        currSong=5;
    }

    setMusic(currSong);
})

function forward()
{
    if(currSong!=5)
    {
        currSong++;
    }
    else
    {
        currSong=0;
    }

    setMusic(currSong);
}