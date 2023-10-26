const music = document.querySelector('audio')

const play = document.getElementById("play");

const img = document.querySelector('img')

const artist=document.getElementById("artist");

const title=document.getElementById("title")

const next=document.getElementById("next")

const prev=document.getElementById("prev")

const songs=[{
    name:"prafool-1",
    title:"drive-breakbeat",
    artist:'ross taylor'
},
{
    name:"prafool-2",
    title:"good night",
    artist:'praful'
},
{
    name:"prafool-3",
    title:"inside you",
    artist:'kamal'
}]

let isPlaying = false;




// for playing the music

const playMusic = () => {

    isPlaying = true
    music.play();

    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime')

}
// for pause the music

const pauseMusic = () => {

    isPlaying = false;
    music.pause();

    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime')

}


play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic()
    }
    else {
        playMusic()
    }
})


// changing the music data

const loadSongs=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src='music/'+ songs.name+'.mp3'
    img.src='images/'+songs.name+'.webp'

}

// loadSongs(songs[2]);
songIndex=0;

const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length
    loadSongs(songs[songIndex])
    playMusic()
}
const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length
    loadSongs(songs[songIndex])
    playMusic()
}

next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)
