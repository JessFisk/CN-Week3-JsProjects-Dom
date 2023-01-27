//*****Dom*****


//Activity 1

const catImg = document.getElementById(`Cat`)
const button = document.getElementById(`Button`)

button.addEventListener(`click`, () => {
    if (catImg.style.display === "none") {
        catImg.style.display = "block";
    }
    else {
        catImg.style.display = "none";
    }
}
)


//Activity 2
const catImg2 = document.getElementById(`cat2`)
const buttonchange = document.getElementById(`button2`)
const input = document.getElementById(`inputbar`)

buttonchange.addEventListener("click", () => {
    catImg2.src = input.value;
    input.value = "";
})


//Activity 3

const header = document.getElementById(`pageHeader`)
const button3 = document.getElementById(`colourChange`)
const inputbar2 = document.getElementById(`inputbar2`)

button3.addEventListener("click", () => {
    header.style.color = inputbar2.value;
    inputbar2.value = "";
})

//Activity 4

const XYtext = document.getElementById(`paracoordinates`)

document.addEventListener('click', (e) => {
    XYtext.textContent = `X=${e.clientX}, Y=${e.clientY}`
})

// Lecture Activity -adding list item.

const submitBtn = document.getElementById("submitBtn");
const toDoInput = document.getElementById("toDoInput");
const list = document.getElementById("list");

submitBtn.addEventListener(`click`, () => {
    let listItem = document.createElement("li");

    listItem.textContent = toDoInput.value
    list.appendChild(listItem)

})

// Lecture Activity- Removing child element.

const removeBtn = document.getElementById(`removeBtn`)

removeBtn.addEventListener(`click`, () => {
    const lastLiItem = document.querySelector("li:last-child")
    list.removeChild(lastLiItem)
})

//Lecture Activity- Targeting specific List Item and remove
//Elements added to the list do not have Event listeners applied therefore cannot be removed using this meathod.
//See event Bubbling?

const allListItems = document.querySelectorAll("li");

allListItems.forEach((listItem) => {
    listItem.addEventListener(`click`, (event) => {
        list.removeChild(event.target);
    })
})

//Using Event Bubbling
//uses event.target property to identify a child element we are cureently interacting with.


//(fount above)const list=document.getElementById (`list`);

list.addEventListener(`mouseover`, (event) => {
    event.target.textContent = event.target.textContent.toUpperCase()
})