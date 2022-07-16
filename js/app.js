console.log("hi")
//grab html elements
const start1=document.querySelector("#start1")
const start2=document.querySelector("#start2")
const holes=document.querySelectorAll(".hole")
const mole=document.querySelector(".mole")
const second=document.querySelector("#second")
const score=document.querySelector("#score")
const player1score=document.querySelector("#player1score")
const player2score=document.querySelector("#player2score")
const arrow1=document.querySelector("#arrow1")
const arrow2=document.querySelector("#arrow2")

//declare global variables
let hitHole=null
let timeIDMoveMole=null
let timeIDCountDown=null

class player{
  constructor(timer,currentScore){
    this.timer=timer
    this.currentScore=currentScore
  }
  hitMole(){
    holes.forEach(hole=> {
        hole.addEventListener("click",
        ()=>{
          if(hole.id===hitHole){
            this.currentScore++
            score.innerText=this.currentScore
            hole.classList.remove("mole")//if a mole got hit, remove img
            hitHole=null
          }
        }
      )
    }
  )
  }
}
const player1= new player(10,0)
const player2= new player(10,0)
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

  //create timer function
  function countDown(newPlayer){
  newPlayer.timer--
  console.log(newPlayer.timer)
  if(newPlayer.timer<=0){
    clearInterval(timeIDCountDown)
    clearInterval(timeIDMoveMole)
    alert("time is up")
    second.innerText="00"
    player1score.innerText="Final Score: "+newPlayer.currentScore//how to add newplayer in this

  }else
  if(timer>0 && timer<10){
    second.innerText="0"+newPlayer.timer
  }else{
    second.innerText=newPlayer.timer
  }
}
//start timer
  function startTimer(){
  timeIDCountDown=setInterval(countDown,1000)
  }

//event listerner
start1.addEventListener("click",()=>{
  moveMole()
  startTimer()
  player1.hitMole()
})
start2.addEventListener("click",()=>{
  moveMole()
})
