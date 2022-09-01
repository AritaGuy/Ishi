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
let but = document.querySelectorAll('#sidebar .select')
  //getting the room's details
    for (let i of but) {
        hello =room1.textContent
      i.addEventListener("click", (e) => {
        document.querySelector('#booking-details').style.display = "block"
        fetch(`http://localhost:3000/rooms/${i.name}`)
        .then(resp=>resp.json())
        .then(room=>{
            // document.querySelector('h6').innerHTML = room.id
            document.querySelector('h4').textContent = room.name
            document.querySelector('#room-pic').src = room.image
            document.querySelector('#desc').textContent = room.description
            
            //updating the payment token on the server
            document.querySelector('#bookform').addEventListener('submit', (e)=>{
                e.preventDefault()
               
                let token = { 
                  paymenttoken : document.querySelector('#hostel').value
              }
              
              console.log(token)
              fetch(`http://localhost:3000/rooms/${room.id}`, {
                  method: 'PATCH',
                  headers : {'Content-Type':'application/json'},
                  body : JSON.stringify(token)
              }).then(res => res.json())
              .then(hostelroom=>{
                  //confirmation message
                  document.querySelector('#booking-details').style.display = "none"
                  document.querySelector('#confirm-form').style.display = "block"
                  document.querySelector('#confirmation_message').textContent = `
                  You have booked ${hostelroom.name}, Your payment token is 
                  ${hostelroom.paymenttoken}`

              } ).catch(error=>{
                  console.log(error.message)
              })
            }
            )

        })
      });
    }

//displaying the payemnt token form
document.querySelector('#book-Button').addEventListener('click', (()=>{
    document.querySelector('#booking-form').style.display = "block"
}))

