console.log("hi")
//grab html elements
const start1=document.querySelector("#start1")
const start2=document.querySelector("#start2")
const holes=document.querySelectorAll(".hole")
const mole=document.querySelector(".mole")
const second=document.querySelector("#second")
const score1=document.querySelector("#score1")
const score2=document.querySelector("#score2")
const arrow1=document.querySelector("#arrow1")
const arrow2=document.querySelector("#arrow2")
const restart=document.querySelector("#restart")
//declare global variables
let hitHole=null
let timeIDMoveMole=null
let timeIDCountDown=null
let currentPlayer;

class player{
  constructor(timer,currentScore,playerNum){
    this.timer=timer
    this.currentScore=currentScore
    this.playerNum=playerNum
  }
  hitMole(){
    console.log("hitmole")
    this.currentScore=this.currentScore+10
    console.log(this.currentScore)
    console.log(this.playerNum)
    if(this.playerNum===1){
      console.log("player1")
      score1.innerText=this.currentScore

    }else{
      console.log("player2")
      score2.innerText=this.currentScore

    }
  }
}

const player1= new player(10,0,1)
const player2= new player(10,0,2)

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
  if(newPlayer.timer<0){
    holes.forEach(
      hole => {hole.classList.remove("mole")}
    )
    clearInterval(timeIDCountDown)
    clearInterval(timeIDMoveMole)
    alert(`Time is up! Your final score is ${newPlayer.currentScore}`)
    console.log(newPlayer.playerNum)
    if(newPlayer.playerNum===2 && player1.currentScore>player2.currentScore){
      alert("Player1 is the winner for this round!")
    }else
    if(newPlayer.playerNum===2  && player1.currentScore<player2.currentScore) {
      alert("Player2 is the winner for this round!")
    }else
    if(newPlayer.playerNum===2  && player1.currentScore===player2.currentScore) {
      alert("it's a draw for this round!")
    }
    console.log(player1.currentScore)
    console.log(player2.currentScore)
    second.innerText="00"
    arrow1.src="img/arrowplaceholder.png"
    arrow2.src="img/arrow.png"

  }else
  if(timer>0 && timer<10){
    second.innerText="0"+newPlayer.timer
  }else{
    second.innerText=newPlayer.timer
  }
}
//start timer
  function startTimer(newPlayer){
  timeIDCountDown=setInterval(countDown,1000,newPlayer)//doesnt apply to a player
  }
//hit moles
holes.forEach(hole=> {
hole.addEventListener("click",
()=>{
if(hole.id==hitHole){
hole.classList.add("plus10")
currentPlayer.hitMole()
  }
  setTimeout(()=>{hole.classList.remove("plus10")},200)//remove score img after showing
  hole.classList.remove("mole")//if a mole got hit, remove img
  hitHole=null
}
)
}
)
//event listerner
start1.addEventListener("click",()=>{
  moveMole()
  startTimer(player1)
  currentPlayer=player1
  })

start2.addEventListener("click",()=>{
  moveMole()
  startTimer(player2)
  currentPlayer=player2
    })
restart.addEventListener("click",()=>{
  player1.currentScore=0
  player2.currentScore=0
  score1.innerText=player1.currentScore
  score2.innerText=player2.currentScore
  player1.timer=10
  player2.timer=10
  arrow2.src="img/arrowplaceholder.png"
  arrow1.src="img/arrow.png"
})
