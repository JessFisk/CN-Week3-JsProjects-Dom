

const eventKey = document.getElementById(`eventKey`)
const eventLocation = document.getElementById(`eventLocation`)
const eventCode = document.getElementById(`eventCode`)
const charCode1 = document.getElementById(`charCode1`)
const charWhich = document.getElementById(`charWhich`)
const pageWelcome = document.getElementById(`pageWelcome`)
const pageContent = document.getElementById(`pageContent`)


document.addEventListener(`keypress`, () => {
    pageWelcome.style.display = `none`
    pageContent.style.display = `block`
})
document.addEventListener(`keydown`, (e) => {
    eventKey.textContent = e.key
})
document.addEventListener(`keydown`, (e) => {
    eventLocation.textContent = e.location
})
document.addEventListener(`keydown`, (e) => {
    eventCode.textContent = e.code
})
document.addEventListener(`keydown`, (e) => {
    eventWhich.textContent = e.which
})
document.addEventListener(`keypress`, (e) => {
    charCode1.textContent = e.charCode
})





// //Event listeners can be condensed to look like below

// document.addEventListener(`keypress`, (e) =>{
//     charCode1.textContent = e.charCode
//     eventWhich.textContent = e.which
//     eventCode.textContent = e.code
//     eventLocation.textContent = e.location
//     eventKey.textContent = e.key
//     pageWelcome.style.display = `none`
//     pageContent.style.display = `block`
// })