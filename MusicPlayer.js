// For changing the background body from light to dark mode


var inner=document.getElementById("innerdiv");
document.body.style.background="white"; 
inner.addEventListener('click',function(){
    if(document.body.style.background=="white"){
        document.body.style.background=" #21242E";
        inner.style.backgroundImage="url('Moon.jpg')"
    }
    else{
        document.body.style.background="white";
        inner.style.backgroundImage="url('Sun (2).jpg')";
    }
});


// For the playlist icon in Weekly top song on cliking ellipsis icons 

var box=document.getElementById('btn');
var check=document.getElementsByClassName('playlist-box')[0];
// window.onload=function(){
function showhide(element){
    var div=document.getElementById(element)
    if(div.style.display=="none"){
        div.style.display="inline-block";
    }
    else{
        div.style.display="none";
    }
}


// For the play-pause icon in music player


var play=document.getElementsByClassName('fas fa-play-circle')[0];
var pause=document.getElementsByClassName('fas fa-pause-circle')[0];
var audio=document.getElementById('music-playing');
play.addEventListener('click',function(){
    if(play.style.visibility=="visible"){
    audio.play();
    pause.style.visibility="visible";
    play.style.visibility="hidden";
    }
});
pause.addEventListener('click',function(){
     if(pause.style.visibility=="visible"){
        audio.pause();
        play.style.visibility="visible";
        pause.style.visibility="hidden";
    }
})


// For the single-playlist-screen

var arijit=document.getElementById('Arijit-singh');
var single_playlist=document.getElementById('single-playlist');
var album_name=document.getElementsByClassName('album-name')[0];
arijit.addEventListener('click',function(){
    single_playlist.style.visibility="visible";
    album_name.style.visibility="hidden";
})


//For moving back on Home-Screen

var go_back=document.getElementById('Go-Back');
go_back.addEventListener('click',function(){
    single_playlist.style.visibility="hidden";
    album_name.style.visibility="visible";
});