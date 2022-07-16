console.log("hi")
//grab html elements
const start=document.querySelector("#start")
const holes=document.querySelectorAll(".hole")
const mole=document.querySelector(".mole")
const second=document.querySelector("#second")
const score=document.querySelector("#score")
const player1score=document.querySelector("#player1score")
const player2score=document.querySelector("#player2score")

//game objects
//declare global variables
let timer=10
let currentScore=0
let hitHole=null
let timeIDMoveMole=null
let timerInterval=null
//create function to select random hole for mole to appear
function randomHole(){
  //make sure no mole class was added to any hole
  holes.forEach(
    hole => {hole.classList.remove("mole")}
  )
  //select random hole and then add class Mole
let randomHole=holes[Math.floor(Math.random()*9)]
randomHole.classList.add("mole")
hitHole=randomHole.id
}
//move Mole
function moveMole(){
  timeIDMoveMole=setInterval(randomHole,2000)
}

//hit the Mole (randomHole ID=the hole where user clicked)
  holes.forEach(hole=> {
  hole.addEventListener("click",
  ()=>{
    console.log(hitHole)
    if(hole.id===hitHole){
      currentScore++
      score.innerText=currentScore
      hole.classList.remove("mole")//if a mole got hit, remove img
      hitHole=null
    }
  }
)
  })

//create timer function
function countDown(){
timer--
if(timer<=0){
  player1score.innerText="Final Score: "+currentScore
  player2score.innerText="Final Score: "+currentScore
  second.innerText="00"
  alert("time is up")
  clearInterval(timeIDCountDown)
  clearInterval(timeIDMoveMole)
}else
if(timer>0 && timer<10){
  second.innerText="0"+timer
}else{
  second.innerText=timer
}
}
function startTimer(){
timeIDCountDown=setInterval(countDown,1000)
}
//event listerner to start the game
start.addEventListener("click",moveMole)
start.addEventListener("click",startTimer)
