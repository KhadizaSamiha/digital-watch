document.getElementById('start-btn').addEventListener('click', function (){
  stopwatch();
})
let intervalId;
const stopwatch=() =>{
    intervalId= setInterval(()=> {
      document.getElementById('time').innerText = parseInt(document.getElementById('time').innerText)+1
    }, 1000)
}
document.getElementById('btn-stop').addEventListener('click', function(){
    clearInterval(intervalId);
})
document.getElementById('btn-reset').addEventListener('click', function(){
    document.getElementById('time').innerText = 0; 
})
