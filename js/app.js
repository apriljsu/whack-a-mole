console.log("hi")
//grab html elements
const holes=document.querySelectorAll(".hole")
const mole=document.querySelector(".mole")
const second=document.querySelector("#second")
const score=document.querySelector("#score")
//game objects
//declare global variables
let timer=11
//create function to select random hole for mole to appear
function randomHole(){
  //make sure no mole class was added to any hole
  holes.forEach(
    hole => {hole.classList.remove("mole")}
  )
  //select random hole and then add class Mole
let randomHole=holes[Math.floor(Math.random()*9)]
randomHole.classList.add("mole")
}
//move Mole
function moveMole(){
  timeIDMoveMole=setInterval(randomHole,500)
}
//create timer function
function countDown(){
timer--
if(timer<=0){
  second.innerText="00"
  clearInterval(timeInterval)
  alert("time is up")
}else
if(timer>0 && timer<10){
  second.innerText="0"+timer
}else{
  second.innerText=timer
}
}
// let timeInterval=setInterval(countDown,1000)
