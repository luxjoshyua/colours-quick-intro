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
  "amateur creative coder", 
  "John Maus",
  "March",
  "download my pdf",
  "another page here if ich mägst",
  "ditto to the above innit'"

]


// FIRST SECTION = PICK THE RELEVANT TAGS

// What we're doing
// 1.find in the html the footer img with a class of next
// note: nextTag is a name we makeup, doesn't have to be that, it's just logical
const nextTag = document.querySelector('footer img.next')

const previousTag = document.querySelector("footer img.prev")

const outputTag = document.querySelector('h2')


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
  
  outputTag.innerHTML = pages[pageNumber]
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