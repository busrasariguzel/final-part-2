document.querySelector("#remove-all-button").addEventListener('click', function(){
    list = document.querySelector('#symptoms')
    
    list.style.visibility = "hidden";
}
)




document.querySelector("#add-button").addEventListener('click', function(){
list = document.querySelector('#symptoms')
// list.style.visibility = "initial";
newLi = document.createElement('li')
symptomsList = document.querySelector('#input').value
document.querySelector('#symptoms').appendChild(newLi).innerText = symptomsList 
})

// document.querySelector("#remove-button").addEventListener('click', function(event){
//     document.querySelector('li')
//     if (event.target.style.textDecoration === 'line-through'){
//         target.style.visibility = "hidden";
//     }
//         }
// )

document.querySelector('#symptoms').addEventListener('click', function(event) {
// event.target.style.textDecoration = 'line-through'
event.target.classList.toggle('yes')
})



document.querySelector('#remove-button').addEventListener('click', function(event) {
const theWholeList = document.querySelectorAll(".yes")
for (const item of theWholeList) {
item.addEventListener('click', function(event) {
    event.target.classList.add('remove')
})
}
})
//  SECOND LIST FUNCTIONS #####

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