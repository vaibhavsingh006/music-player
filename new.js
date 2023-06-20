// console.log('newone')



// -------------- all variable is here ------------------------

let songIndex = 0;
let audioElement = new Audio('./3.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let songitem = Array.from(document.getElementsByClassName('first-song'));
// console.log(songitem)
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let masterpause = document.getElementById('pause');
let gif = document.getElementById('gif');
let masterimg = document.getElementsByClassName('masterimg');
let masterchild = document.getElementsByClassName('master-title-child');
let master = document.getElementsByClassName('master-title');
let mastertitle = document.getElementsByClassName('song-title');

// -------------------- all songs is here -------------------------

let songs = [
    { songsName: "Joker", filePath: "./0.mp3", coverPath: "thumb-joker-hardy-sandhu-2014-mp3-songs-300.jpg", songBy: "Hardy Sandhu", index: 0 },
    { songsName: "Le Le Ram Ram", filePath: "./1.mp3", coverPath: "le-le-ram-ram-mp3-song-300.jpg", songBy: "Hashal" },
    { songsName: "Safar", filePath: "./2.mp3", coverPath: "safar-juss-mp3-song-300.jpg", songBy: "Juss" },
    { songsName: "Tum mere", filePath: "./3.mp3", coverPath: "images (6).jpeg", songBy: "Darshan Ravel" },
    { songsName: "Kyun Dhunde", filePath: "./4.mp3", coverPath: "kyun-dhunde-vilen-mp3-song-300.jpg", songBy: "Vilen" },
    { songsName: "Jai Shri Ram", filePath: "./5.mp3", coverPath: "jai-shri-ram-adipurush-mp3-song-300.jpg", songBy: "Adipurush" },
    { songsName: "295", filePath: "./6.mp3", coverPath: "295-sidhu-moose-wala-mp3-song-2-300.jpg", songBy: "Sidhu Moose Wala" },
    { songsName: "Jay Dev Jay Dev", filePath: "./7.mp3", coverPath: "thumb-collection-1-39-300.jpg", songBy: "Vaastav" },
    { songsName: "Jai Shri Ram", filePath: "./8.mp3", coverPath: "jai-shri-ram-adipurush-mp3-song-300.jpg", songBy: "Adipurush" },
    { songsName: "Jai Shri Ram", filePath: "./9.mp3", coverPath: "jai-shri-ram-adipurush-mp3-song-300.jpg", songBy: "Adipurush" },
    { songsName: "Jay Dev Jay Dev", filePath: "./10.mp3", coverPath: "thumb-collection-1-39-300.jpg", songBy: "Vaastav" },
    { songsName: "Jay Dev Jay Dev", filePath: "./11.mp3", coverPath: "thumb-collection-1-39-300.jpg", songBy: "Vaastav" },
]


// ----------------------- master element handel ---------------------

//  ------------ pause button handel ------------------------

masterplay.addEventListener('click', () => {
    // console.log('done')
    if (audioElement.pause || audioElement.currentTime <= 0) {
        // console.log(' play ')
        audioElement.play();
        gif.style.opacity = 1;

        masterplay.classList.add('hide');
        masterplay.classList.remove('show');

        masterpause.classList.add('show');
        masterpause.classList.remove('hide');
    }
})

//  ------------ play button handel ------------------------

masterpause.addEventListener('click', () => {
    // console.log('done')
    if (audioElement.play || audioElement.currentTime > 0) {
        // console.log('hora hai')
        audioElement.pause();
        gif.style.opacity = 0;
        masterplay.classList.add('show');
        masterplay.classList.remove('hide');

        masterpause.classList.add('hide');
        masterpause.classList.remove('show');
    }
})


// ----------------  image or songName is here jo ki ui me dikh rhe hai  ---------------------

songitem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songsName;
    element.getElementsByClassName('songBy')[0].innerHTML = songs[i].songBy;
    // mastertitle.getElementsByClassName('master-title')[0].innerHTML = songs[i].songsName;
});

// ------------ master section me image and title changes -----------------------

for (let i = 0; i < songitem.length; i++) {
    songitem[i].addEventListener('click', () => {
        // console.log(songitem[i])
        songIndex = i;
        console.log(songIndex)
        masterimg[0].src = songitem[i].getElementsByTagName('img')[0].src;
        master[0].innerHTML = songitem[i].getElementsByTagName('h3')[0].innerHTML;
        masterchild[0].innerHTML = songitem[i].getElementsByTagName('p')[0].innerHTML;
        // console.log(mastertitle.src)
        // console.log(i.img.src)
    })
}

let imgplaysec = document.getElementsByClassName('imgplay-sec');
let imgplayone = document.getElementsByClassName('imgplay-one');

for (let i = 0; i < imgplayone.length; i++) {
    imgplayone[i].addEventListener('click', () => {
        imgplaysec[i].classList.add('blox');
        audioElement.play();

        for (let p = 0; p < imgplayone.length; p++) {
            if (i != p) {
                imgplaysec[p].classList.remove('blox');
            }
        }
    })
}

for (let i = 0; i < imgplaysec.length; i++) {
    imgplaysec[i].addEventListener('click', () => {
        imgplaysec[i].classList.remove('blox');
        audioElement.pause();

        gif.style.opacity = 0;
        masterplay.classList.add('show');
        masterplay.classList.remove('hide');

        masterpause.classList.add('hide');
        masterpause.classList.remove('show');


        // for (let p = 0; p < imgplaysec.length; p++) {
        //     if (i != p) {
        //         // imgplaysec[p].classList.add('blox');
        //     }
        // }
    })
}







// --------------------- handel play a song on click ------------------------------

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        gif.style.opacity = 0;
        masterplay.classList.add('show');
        masterplay.classList.remove('hide');

        masterpause.classList.add('hide');
        masterpause.classList.remove('show');
        audioElement.currentTime = 0;

        songIndex = e.target.id;
        console.log(e.target.id);

        setTimeout(() => {

            // index = parseInt(e.target);


            // index = imgplaysec.classList.add('blox');
            audioElement.src = `./${songIndex}.mp3`;
            // console.log(audioElement.src);



            audioElement.currentTime = 0;
            audioElement.play();


            gif.style.opacity = 1;

            masterplay.classList.add('hide');
            masterplay.classList.remove('show');

            masterpause.classList.add('show');
            masterpause.classList.remove('hide');
        }, 400);

    })
})

// -------------------- Next button -----------------

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 11) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    masterplay.classList.add('show');
    masterpause.classList.remove('show');
    audioElement.currentTime = 0;
    gif.style.opacity = 0;

    setTimeout(() => {

        audioElement.src = `./${songIndex}.mp3`;
        audioElement.play();


        gif.style.opacity = 1;

        masterplay.classList.add('hide');
        masterplay.classList.remove('show');

        masterpause.classList.add('show');
        masterpause.classList.remove('hide');

        imgplaysec[songIndex].classList.add('blox');

        for (let i = 0; i < imgplaysec.length; i++) {
            // console.log('remove ho rhi hai')
            if (i != songIndex) {
                // console.log('remove ho rhi hai')
                imgplaysec[i].classList.remove('blox')

            }

        }
    }, 700);


    masterimg[0].src = songitem[songIndex].getElementsByTagName('img')[0].src;
    master[0].innerHTML = songitem[songIndex].getElementsByTagName('h3')[0].innerHTML;
    masterchild[0].innerHTML = songitem[songIndex].getElementsByTagName('p')[0].innerHTML;
})

// ------------pre button -------------

document.getElementById('Previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 11;
    } else {
        songIndex -= 1;
    }

    masterplay.classList.add('show');
    masterpause.classList.remove('show');
    audioElement.currentTime = 0;
    gif.style.opacity = 0;


    setTimeout(() => {


        audioElement.src = `./${songIndex}.mp3`;
        audioElement.play();


        gif.style.opacity = 1;

        masterplay.classList.add('hide');
        masterplay.classList.remove('show');

        masterpause.classList.add('show');
        masterpause.classList.remove('hide');

        imgplaysec[songIndex].classList.add('blox');

        for (let i = 0; i < imgplaysec.length; i++) {
            // console.log('remove ho rhi hai')
            if (i != songIndex) {
                // console.log('remove ho rhi hai')
                imgplaysec[i].classList.remove('blox')

            }

        }
    }, 700);

    masterimg[0].src = songitem[songIndex].getElementsByTagName('img')[0].src;
    master[0].innerHTML = songitem[songIndex].getElementsByTagName('h3')[0].innerHTML;
    masterchild[0].innerHTML = songitem[songIndex].getElementsByTagName('p')[0].innerHTML;
})


// ------------------ ProgressBar handel  ----------------------

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
    // console.log(progress);
    if (progress == 100) {
        audioElement.pause();
        gif.style.opacity = 0;
        audioElement.currentTime = 0;
        masterplay.classList.add('show');
        masterplay.classList.remove('hide');

        masterpause.classList.add('hide');
        masterpause.classList.remove('show');
    }
})


myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
    // console.log(audioElement.currentTime);
})







let togglephone = document.getElementsByClassName('main-station');

masterimg[0].addEventListener('click', () => {
    togglephone[0].classList.toggle('main-station-toggle')
    console.log('ho gyi toggle')
})
