let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');

let cards = slider.getElementsByTagName('li');

let sliderContainerWidth = sliderContainer.clientWidth;
let elementsToShow = 5;
if(document.body.clientWidth<1000){
  elementsToShow =1;
}


let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth+'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth+'px';
  
}

function next(){
  if(+slider.style.marginLeft.slice(0,-2) != -cardWidth*(cards.length - elementsToShow)){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
  }
  
 
    
}
function prev(){
  if(+slider.style.marginLeft.slice(0,-2) != 0){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';
  }
}

const music = new Audio('1.mp3');

//Array
const songs = [
    {
        id:'1',
        songName:` On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Blinding Lights <br><div class="subtitle">The Weekend</div>`,
        poster: "img/2.png"
    },
    {
        id:"3",
        songName: `Cartoon <br><div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Varriko <br><div class="subtitle">Ortaln</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Hello <br><div class="subtitle">Adele</div>`,
        poster: "img/5.png",
    },
    {
        id:"6",
        songName: `Makasm <br><div class="subtitle">KRSNA</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Tamasha <br><div class="subtitle">Pritam</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Sanak <br><div class="subtitle">Sajid</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Mika</div>`,
        poster: "img/9.jpg",
    },
]

Array.from(document.getElementsByClassName('img_play')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
} )

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('fa-play');
            element.classList.remove('fa-pause');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})

