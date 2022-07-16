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
let timer1=10
let timer2=10
let currentScore=0

//game logic

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
      if(hole.id===hitHole){
        currentScore++
        score.innerText=currentScore
        console.log(currentScore)
        hole.classList.remove("mole")//if a mole got hit, remove img
        hitHole=null
      }
    }
  )
})
  //create timer function
  function countDown1(){
  timer--
  if(timer<=0){
    clearInterval(timeIDCountDown)
    clearInterval(timeIDMoveMole)
    alert("time is up")
    second.innerText="00"
    player1score.innerText="Final Score: "+currentScore
    arrow1.src="img/arrowplaceholder.png"
    arrow2.src="img/arrow.png"
    // arrow1.remove()
    // arrow2.src="img/arrow.png"
  }else
  if(timer>0 && timer<10){
    second.innerText="0"+timer
  }else{
    second.innerText=timer
  }
}
//start timer
  function startTimer1(){
  timeIDCountDown=setInterval(countDown1,1000)
  }
  //create timer function
  function countDown2(){
  timer--
  if(timer<=0){
    clearInterval(timeIDCountDown)
    clearInterval(timeIDMoveMole)
    alert("time is up")
    second.innerText="00"
    player2score.innerText="Final Score: "+currentScore
    arrow2.src="img/arrowplaceholder.png"
    arrow1.src="img/arrow.png"
    // arrow1.remove()
    // arrow2.src="img/arrow.png"
  }else
  if(timer>0 && timer<10){
    second.innerText="0"+timer
  }else{
    second.innerText=timer
  }
}
//start timer
  function startTimer2(){
  timeIDCountDown=setInterval(countDown2,1000)
  }
//event listerner
start1.addEventListener("click",()=>{
  moveMole()
  startTimer()

})
