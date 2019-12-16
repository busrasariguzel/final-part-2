## `Motivation`

* This project is very special to me because it is a gift to my mother!!! My biggest motivation in life and also in this project is my mother. She has been one of the most successful pharmacists in Turkey for about 30 years. She loves her job and loves to help people. That's why she is very good at her job. In this project, I tried to combine my coding knowledge and love of my mother. I created a website for her pharmacy! The website is able to have a user interaction and very cute css tools. I am proud of the pink theme I have on the website:)

## `Challenges`
* I had a hard time making my website responsive. When I added tablet version, my regular desktop version was getting affected. The media query I have for the tablet had something wrong and it took me awhile to understand why.
* I also struggled with removing the selected items from the list.
* after spending lots of time on this project I was able to fix some of my mistakes.


## `Goals`
* My first goal on this project was to create  website to my mother!
* My second goal is to practice everything I learned in coding. I tried to add new stuff by using css. 
* I used new tools that I have never used before and I was more comfortable trying new things. 
* I tried to have a theme in the website. Making the website work is also very important and that was one of my biggest goals in this project.
* I also tried to have 3 different layouts and that helped me to understand the grids better.

## `Code`
* I mainly used CSS in this project. 
* I also used javascript to make adding and removing to the already existing list.
* The code I used for grid areas :

```  css
#app {
display: grid;
flex-direction: row;
align-items:stretch;
font-size: 20px;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(11, 1fr); 
grid-template-areas: 
    "hdr"
    "mn1"
    "mn1"
    "mn1"
    "mn1" 
    "mn1"
    "mn1"
    "mn1"
    "mn1"
    "nav"
    "ftr"
;
height: 200vh;
}

````


* part of the code I have to add and remove items from the list:

```Javascript
document.querySelector("#add-button").addEventListener('click', function(){
list = document.querySelector('#symptoms')
newLi = document.createElement('li')
symptomsList = document.querySelector('#input').value
document.querySelector('#symptoms').appendChild(newLi).innerText = symptomsList 
})

document.querySelector('#symptoms').addEventListener('click', function(event) {
event.target.classList.toggle('yes')
})

document.querySelector('#remove-button').addEventListener('click', function(event) {
const theWholeList = document.querySelectorAll(".yes")
for (const item of theWholeList) {
item.classList.add('remove')
}
})
````

```` Javascript

document.querySelector('#symptoms-2').addEventListener('click', function(event) {
    // event.target.style.textDecoration = 'line-through'
    event.target.classList.toggle('yes')
    })
document.querySelector("#add-button-2").addEventListener('click', function(){
list = document.querySelector('#symptoms-2')
newLi = document.createElement('li')
symptomsList2 = document.querySelector('#input-2').value
document.querySelector('#symptoms-2').appendChild(newLi).innerText = symptomsList2
})

````

## `Theme`

* For the theme, I decided to have a pinky colors. I tried to have similar colors in each part of the website. I added glows to some of the text including the title. I added 2 gifs next to the title. 



