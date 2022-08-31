document.addEventListener('DOMContentLoaded', e =>{
    getRooms()
    console.log('It is working')
})
let room1 = document.querySelector('#room_1')
let room2 = document.querySelector('#room_2')
let room3 = document.querySelector('#room_3')
let room4 = document.querySelector('#room_4')
let room5 = document.querySelector('#room_5')
let roomid = document.querySelector('#room_Id')
function getRooms(){
    fetch("http://localhost:3000/rooms")
    .then(resp => resp.json())
    .then(vacant =>{
        // let num = vacant.map(house => `${house.name}`)
        
        room1.textContent = vacant[0].name 
        room2.textContent = vacant[1].name
        room3.textContent = vacant[2].name
        room4.textContent = vacant[3].name
        room5.textContent = vacant[4].name
    
    }
    )
}
