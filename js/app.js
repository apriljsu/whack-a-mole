console.log("hi")
const secondEle=document.getElementById("second")
let timer=60
function countDown(){
timer--
if(timer<=0){
  secondEle.innerText="00"
  clearInterval(timeInterval)
  alert("time is up")
}else{
  secondEle.innerText=timer
}
}
// let timeInterval=setInterval(countDown,1000)
