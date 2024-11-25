// WHY DO WE USE DOM?
// Read and change content.
// Change how elements are styled.
// Modify element attributes.
// Create or remove elements.
// Respond to events.

console.log('test')
// querySelector(): fetches an element based on the CSS selector
// console.log(document.querySelector("#main-title"))
const mainTitleElement = document.querySelector("#main-title")
console.log(mainTitleElement)

const paragraphElement = document.querySelector(".cool")
console.log(paragraphElement)
// .textContent: changes the content of an element
paragraphElement.textContent = 'New value given in JS file'

const imageElement = document.querySelector('#cat-image')
console.log(imageElement)
imageElement.src = 'https://media.istockphoto.com/id/1256834741/photo/the-blue-eyes-of-a-himalayan-angora-cat.jpg?s=612x612&w=0&k=20&c=6AFk9_OdGMPNZgjAYpCBr4EvqaiEOIViH_-V7KOKWcs='

paragraphElement.style.textAlign = 'center'
// all css properties are camelCased in JS
paragraphElement.style.backgroundColor = 'red'

const bodyElement = document.querySelector('body')
console.log(bodyElement)
// .createElement(): creates new element
const h2Element = document.createElement('h2')

h2Element.textContent = "Comment Section"

bodyElement.appendChild(h2Element)

const h3Element = document.querySelector("h3")
console.log(h3Element)

// getting many elements
// querySelectorAll(): returns all instances of elements
const h3Elements = document.querySelectorAll("h3")
console.log(h3Elements)

h3Elements.forEach(function(oneH3Element){
    console.log(oneH3Element)
    // oneH3Element.textContent = "Changed text"
    if(oneH3Element.textContent === 'first h3'){
        oneH3Element.textContent = 'Changed for Hasan'
    }
    else{
        oneH3Element.textContent = 'Also changed for Hasan'
    }
})

const liElements = document.querySelectorAll("li")
console.log(liElements)
liElements.forEach(function(oneLi){
    oneLi.style.fontSize = '30px'
})