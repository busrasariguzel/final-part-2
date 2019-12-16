document.querySelector("#remove-all-button").addEventListener('click', function(){
const theWholeList = document.querySelectorAll("#symptoms li")
for (const item of theWholeList) {
item.style.display='none'
}
})

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
//  SECOND LIST FUNCTIONS #####

document.querySelector('#symptoms-2').addEventListener('click', function(event) {
    event.target.style.textDecoration = 'line-through'
    event.target.classList.toggle('yes')
    })
document.querySelector("#add-button-2").addEventListener('click', function(){
list = document.querySelector('#symptoms-2')
newLi = document.createElement('li')
symptomsList2 = document.querySelector('#input-2').value
document.querySelector('#symptoms-2').appendChild(newLi).innerText = symptomsList2
})

document.querySelector('#remove-button-2').addEventListener('click', function(event) {
const theWholeList = document.querySelectorAll(".yes")
for (const item of theWholeList) {
item.classList.add('remove')
}
})      
document.querySelector("#remove-all-button-2").addEventListener('click', function(){
const theWholeList = document.querySelectorAll("#symptoms-2 li")
for (const item of theWholeList) {
item.style.display='none'
}
})