

const buttonA = document.getElementById(`a`)
const buttonS = document.getElementById(`s`)
const buttonD = document.getElementById(`d`)
const buttonF = document.getElementById(`f`)
const buttonG = document.getElementById(`g`)
const buttonH = document.getElementById(`h`)
const buttonJ = document.getElementById(`j`)
const buttonK = document.getElementById(`k`)
const buttonL = document.getElementById(`l`)

const boom = new Audio(`./sounds/boom.wav`)
const clap = new Audio(`./sounds/clap.wav`)
const hihat = new Audio(`./sounds/hihat.wav`)
const kick = new Audio(`./sounds/kick.wav`)
const openhat = new Audio(`./sounds/openhat.wav`)
const ride = new Audio(`./sounds/ride.wav`)
const tink = new Audio(`./sounds/tink.wav`)
const snare = new Audio(`./sounds/snare.wav`)
const tom = new Audio(`./sounds/tom.wav`)

const button = document.querySelectorAll(`button`);

// button.forEach(button => button.addEventListener(`transitionend`, (event) => { event.target.classList.remove(`playing`) }));

// function removeClass(event) {
//    event.target.classList.remove('playing');
// }

const removeClass = (event) => {
   event.target.classList.remove('playing');
}

button.forEach((button) => {
   button.addEventListener('transitionend', removeClass);
})

document.addEventListener(`keypress`, (e) => {
   // console.log (e.key)
   switch (e.key) {
      case 'a':
         boom.currentTime = 0
         boom.play()
         buttonA.classList.add(`playing`)
         break;
      case 's':
         clap.currentTime = 0
         clap.play()
         buttonS.classList.add(`playing`)
         break;
      case 'd':
         hihat.currentTime = 0
         hihat.play()
         buttonD.classList.add(`playing`)
         break;
      case 'f':
         kick.currentTime = 0
         kick.play()
         buttonF.classList.add(`playing`)
         break;
      case 'g':
         openhat.currentTime = 0
         openhat.play()
         buttonG.classList.add(`playing`)
         break;
      case 'h':
         ride.currentTime = 0
         ride.play()
         buttonH.classList.add(`playing`)
         break;
      case 'j':
         snare.currentTime = 0
         snare.play()
         buttonJ.classList.add(`playing`)
         break;
      case 'k':
         tink.currentTime = 0
         tink.play()
         buttonK.classList.add(`playing`)
         break;
      case 'l':
         tom.currentTime = 0
         tom.play()
         buttonL.classList.add(`playing`)
         break;
   }
})



buttonA.addEventListener(`click`, () => {
   boom.currentTime = 0
   boom.play()
   buttonA.classList.add(`playing`)
})
buttonS.addEventListener(`click`, () => {
   clap.currentTime = 0
   clap.play()
   buttonS.classList.add(`playing`)
})
buttonD.addEventListener(`click`, () => {
   hihat.currentTime = 0
   hihat.play()
   buttonD.classList.add(`playing`)
})
buttonF.addEventListener(`click`, () => {
   kick.currentTime = 0
   kick.play()
   buttonF.classList.add(`playing`)
})
buttonG.addEventListener(`click`, () => {
   openhat.currentTime = 0
   openhat.play()
   buttonG.classList.add(`playing`)
})
buttonH.addEventListener(`click`, () => {
   ride.currentTime = 0
   ride.play()
   buttonH.classList.add(`playing`)
})
buttonJ.addEventListener(`click`, () => {
   snare.currentTime = 0
   snare.play()
   buttonJ.classList.add(`playing`)
})
buttonK.addEventListener(`click`, () => {
   tink.currentTime = 0
   tink.play()
   buttonK.classList.add(`playing`)
})
buttonL.addEventListener(`click`, () => {
   tom.currentTime = 0
   tom.play()
   buttonL.classList.add(`playing`)
})


// // //https://www.youtube.com/watch?v=VuN8qwZoego