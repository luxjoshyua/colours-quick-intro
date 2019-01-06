// const tag = document.querySelector("h2")
// // changes the h2 text to "this is a test"
// tag.innerHTML = "this is a test"
// // changes the h2 font-color to red
// tag.style.color = "red"


// remember computers always start from 0
// this is the data for holding which page we're on
let pageNumber = 0



// have the content for these pages
const pages = [

  // going to be organised in an array of strings

  // if not special characters, needs to be contained in ""
  // this is the array

  {copy: 'a Sydney-based amateur creative coder', background: '#edc7a9', circle: '#3e78ed'},
  
  // do "" if using an apostrophe 
  {copy: "John Maus's biggest fan", background: '#a1fffe', circle: '#e34a47'},

  {copy: 'looking for a cool creative coding internship now!', background: '#d3c7f3', circle: '#f7fe00'},

  {copy: `encouraging you to <a href="https://drive.google.com/open?id=1qRDfufT8CwV4cR-VgM9NEwmzG5z4TVnE">download his PDF</a>`, background: '#faffb8', circle: '#b472e6' },

  {copy: `his portfolio is at <a target="blank" href="http://luxjoshyua.superhi.com/">luxjoshyua</a> (check out the <a target="blank" href="https://effects-luxjoshyua.superhi.com/">effects</a> and <a target="blank" href="https://projects-luxjoshyua-new.superhi.com/">projects)</a> and his
  github at <a target="blank" href="https://github.com/luxjoshyua">luxjoshyua</a> again`, background: '#b7eee2', circle: '#b7ee' },

]

// FIRST SECTION = PICK THE RELEVANT TAGS

// What we're doing
// 1.find in the html the footer img with a class of next
// note: nextTag is a name we makeup, doesn't have to be that, it's just logical
const nextTag = document.querySelector('footer img.next')

const previousTag = document.querySelector("footer img.prev")

const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector('h2')


// change the circle color
const circleTag = document.querySelector("section div.circle")

// change the background-color
const bodyTag = document.querySelector("body")


// SECOND SECTION = FUNCTIONS

// make a next function to increase the pageNumber
const next = function () {
  pageNumber = pageNumber + 1

  // () does the check, and then if it true, run in the {}
  if (pageNumber > pages.length - 1) {

    pageNumber = 0

  }
  updateSection()
}


// pick a random slide

const random = function () {

  pageNumber = Math.floor( Math.random() * pages.length )

  updateSection()
}


// make a previous function to decrease the pageNumber 
const previous = function () {
  // instead of adding 1 like for next, we take 1 away
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {

    pageNumber = pages.length - 1

  }

  updateSection()

}
// this will update the section's content and style
const updateSection = function () {
  // outputTag.innerHTML = pageNumber
  // .copy adds in the different text for each slide

  outputTag.innerHTML = pages[pageNumber].copy 

  circleTag.style.backgroundColor = pages[pageNumber].circle

  bodyTag.style.backgroundColor = pages[pageNumber].background
}


// THIRD SECTION = EVENTS


// on click of nextTag, run this

// when we click the next tag, change something
// needs to match the above
// need to run this part straightaway on load, listen for a click, then when we do click, we want to run a function
nextTag.addEventListener('click', function () {
  // 	this tests that when you click the next arrow, the function works
  //   outputTag.innerHTML = "it worked!"
  next()
  //   increases the page number by 1 everytime is clicked
  //   outputTag.innerHTML = pageNumber
})


// on click of previousTag, run this

previousTag.addEventListener("click", function () {
  previous()
})


// on click of randomTag, run this

randomTag.addEventListener('click', function () {

  // run the random function 
  random()

})

// when a user presses a key, check for arrow left or right and do next or prev correctly

// document because we want to select the entire page
document.addEventListener("keyup", function (event) {

  console.log(event)

  // if the key being pressed is ArrowRight
  // one = assigns something, == is doing a check
  if (event.key == "ArrowRight") {
    next()
  }

  // if the key being pressed is ArrowLeft

  if (event.key == "ArrowLeft") {
    previous()
  }
})