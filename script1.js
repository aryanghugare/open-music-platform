// let songs = [
//     { id: 1, songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg" },
//     { id: 2, songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg" },
//     { id: 3, songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg" },
//     { id: 4, songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "4.jpg" },
//     { id: 5, songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "5.jpg" },
//     { id: 6, songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg" },
//     { id: 7, songName: "Sakhiyaan - Salam-e-Ishq", filePath: "7.mp3", coverPath: "7.jpg" },
//     { id: 8, songName: "Bhula Dena - Salam-e-Ishq", filePath: "8.mp3", coverPath: "8.jpg" },
//     { id: 9, songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "9.mp3", coverPath: "9.jpg" },
//     { id: 10, songName: "Na Jaana - Salam-e-Ishq", filePath: "10.mp3", coverPath: "10.jpg" },
// ]
// let progress = 0;
// let newIndex = 0;

// let MasterSongName = document.getElementById("masterSongName");
// let songContainer = document.querySelector(".songItemContainer")
// let songGif = document.querySelector("#gif");
// const myProgressBar = document.querySelector("#myProgressBar")
// const play = document.querySelector("#masterPlay");
// let audioElement = new Audio("1.mp3")

// myProgressBar.value = 0;
// let songToBePlayed = []

// let songIndex = 0;



// songs.forEach((song, index) => {

//     const songItem = document.createElement("div");

//     songItem.classList.add("songItem")

//     audioElement.src = song.filePath;
//     audioElement.addEventListener("loadedmetadata", () => {
//         const min = (audioElement.duration / 60).toFixed(2);

//     })

//     //  console.log(min);
//     songItem.innerHTML = `<img src=${song.coverPath}> ${song.songName}  <span class="songlistplay"><span class="timestamp"> <i id="${song.id} " class="far songItemPlay fa-play-circle"></i> </span></span>  `
//     songContainer.appendChild(songItem)
// })








// play.addEventListener("click", () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         play.classList.remove('fa-play-circle')
//         play.classList.add("fa-pause-circle")
//         songGif.style.opacity = "1"
//     } else {
//         audioElement.pause()
//         play.classList.remove("fa-pause-circle")
//         play.classList.add('fa-play-circle')
//         songGif.style.opacity = "0"
//     }
// })




// audioElement.addEventListener("timeupdate", (e) => {
//     progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
//     myProgressBar.value = progress;
// })



// myProgressBar.addEventListener("change", () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100

// })







// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// const songItem = document.getElementsByClassName("songItem");
// // console.log(songItem.length);

// // const songItem = document.querySelectorAll(".songItem")
// Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
//     element.addEventListener("click", (e) => {
//         // console.log(e.target);
//         e.preventDefault()


//         // One way to make song play
//         //  makeAllPlays()
//         // songIndex = parseInt(e.target.id);
//         // e.target.classList.remove('fa-play-circle');
//         // e.target.classList.add('fa-pause-circle');
//         // audioElement.src = `${songIndex}.mp3`;
//         // audioElement.play()
//         // MasterSongName.innerHTML = `${songs[songIndex-1].songName}`
//         // songGif.style.opacity = "1"
//         // play.classList.remove('fa-play-circle');
//         // play.classList.add('fa-pause-circle');




//         // Second Way to make song play 
//         if (e.target.tagName === 'I') {

//             songToBePlayed = songs.filter((song) => song.id == e.target.id)
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             //       console.log(songToBePlayed);
//             audioElement.src = songToBePlayed[0].filePath;
//             audioElement.play()
//             MasterSongName.innerHTML = `${songToBePlayed[0].songName}`
//             songGif.style.opacity = "1"
//             play.classList.remove('fa-play-circle');
//             play.classList.add('fa-pause-circle');
//             songIndex = parseInt(e.target.id) - 1;
//         }

//     })
// })

// const next = document.getElementById("next")
//     // console.log(next);
// next.addEventListener("click", () => {
//     if (songIndex >= 9) {
//         songIndex = 0;

//     } else {
//         songIndex += 1
//     }
//     audioElement.src = `${songs[songIndex].filePath}`;
//     MasterSongName.innerHTML = `${songs[songIndex].songName}`;
//     audioElement.play();
//     play.classList.remove('fa-play-circle')
//     play.classList.add('fa-pause-circle')
//     console.log(songIndex);


// })




// const previous = document.getElementById("previous");

// previous.addEventListener("click", (e) => {
//     e.preventDefault()
//     if (songIndex <= 0) {
//         songIndex = 9;

//     } else {
//         songIndex -= 1
//     }


//     audioElement.src = `${songs[songIndex].filePath}`;
//     MasterSongName.innerHTML = `${songs[songIndex].songName}`;
//     audioElement.play();
//     play.classList.remove('fa-play-circle')
//     play.classList.add('fa-pause-circle')
//     console.log(songIndex);
// })









/// A little Enchanced Version of the code or program 

let songs = [
    { id: 1, songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg" },
    { id: 2, songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg" },
    { id: 3, songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg" },
    { id: 4, songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "4.jpg" },
    { id: 5, songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "5.jpg" },
    { id: 6, songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg" },
    { id: 7, songName: "Sakhiyaan - Salam-e-Ishq", filePath: "7.mp3", coverPath: "7.jpg" },
    { id: 8, songName: "Bhula Dena - Salam-e-Ishq", filePath: "8.mp3", coverPath: "8.jpg" },
    { id: 9, songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "9.mp3", coverPath: "9.jpg" },
    { id: 10, songName: "Na Jaana - Salam-e-Ishq", filePath: "10.mp3", coverPath: "10.jpg" },
]
let progress = 0;
let newIndex = 0;

let MasterSongName = document.getElementById("masterSongName");
let songContainer = document.querySelector(".songItemContainer")
let songGif = document.querySelector("#gif");
const myProgressBar = document.querySelector("#myProgressBar")
const play = document.querySelector("#masterPlay");
let audioElement = new Audio("songs/1.mp3")

myProgressBar.value = 0;
let songToBePlayed = []

let songIndex = 0;



songs.forEach((song, index) => {

    const songItem = document.createElement("div");

    songItem.classList.add("songItem")

    audioElement.src = song.filePath;
    audioElement.addEventListener("loadedmetadata", () => {
        const min = (audioElement.duration / 60).toFixed(2);

    })

    //  console.log(min);
    songItem.innerHTML = `<img src=${song.coverPath}> ${song.songName}  <span class="songlistplay"><span class="timestamp"> <i id="${song.id} " class="far songItemPlay fa-play-circle"></i> </span></span>  `
    songContainer.appendChild(songItem)
})

const songItem = document.getElementsByClassName("songItem");






play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play.classList.remove('fa-play-circle')
        play.classList.add("fa-pause-circle")
        songGif.style.opacity = "1"
            // songItem.classList.add("fa-play-circle")

        // Array.from(songItem).forEach((arr) => {
        //     arr.classList.add("fa-play-circle")
        // });



    } else {
        audioElement.pause()
        play.classList.remove("fa-pause-circle")
        play.classList.add('fa-play-circle')
        songGif.style.opacity = "0"
            // songItem.classList.add("fa-pause-circle")


        // Array.from(songItem).forEach((arr) => {
        //     arr.classList.add("fa-pause-circle")
        // });


    }
})




audioElement.addEventListener("timeupdate", (e) => {
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    myProgressBar.value = progress;
    //   console.log(myProgressBar.value);
    if (myProgressBar.value == 100) {

        myProgressBar.value = 0;
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
        audioElement.play()

    }
})



myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
        // console.log(myProgressBar.value);

})







const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// const songItem = document.getElementsByClassName("songItem");
// console.log(songItem.length);

// const songItem = document.querySelectorAll(".songItem")
Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e.target.classList.contains("fa-play-circle"));
        e.preventDefault()
        if (e.target.classList.contains("fa-play-circle")) {
            if (e.target.tagName === 'I') {

                songToBePlayed = songs.filter((song) => song.id == e.target.id)
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                //       console.log(songToBePlayed);
                audioElement.src = songToBePlayed[0].filePath;
                audioElement.play()
                MasterSongName.innerHTML = `${songToBePlayed[0].songName}`
                songGif.style.opacity = "1"
                play.classList.remove('fa-play-circle');
                play.classList.add('fa-pause-circle');
                songIndex = parseInt(e.target.id) - 1;
            }
        } else {


            if (e.target.tagName === 'I') {
                audioElement.pause()
                e.target.classList.add('fa-play-circle');
                e.target.classList.remove('fa-pause-circle');

                play.classList.remove("fa-pause-circle")
                play.classList.add('fa-play-circle')
                songGif.style.opacity = "0"
            }
        }


    })
})

const next = document.getElementById("next")
    // console.log(next);
next.addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;

    } else {
        songIndex += 1
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    MasterSongName.innerHTML = `${songs[songIndex].songName}`;
    audioElement.play();
    play.classList.remove('fa-play-circle')
    play.classList.add('fa-pause-circle')
    console.log(songIndex);


})




const previous = document.getElementById("previous");

previous.addEventListener("click", (e) => {
    e.preventDefault()
    if (songIndex <= 0) {
        songIndex = 9;

    } else {
        songIndex -= 1
    }


    audioElement.src = `${songs[songIndex].filePath}`;
    MasterSongName.innerHTML = `${songs[songIndex].songName}`;
    audioElement.play();
    play.classList.remove('fa-play-circle')
    play.classList.add('fa-pause-circle')
    console.log(songIndex);
})