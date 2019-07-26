
//tip calculator
function calTip(){
    let bill = document.getElementById("bill");
    const percent20 = Number(document.getElementById("percent20").innerHTML);
    const percent15 = Number(document.getElementById("percent15").innerHTML);
    const percent10 = Number(document.getElementById("percent10").innerHTML);

    
  setTimeout(display, 750);
  function display(){
    if(bill.value === "" || bill.value <= 0 || isNaN(bill.value)){
      return alert("Enter a vaild amount please!");
    }else{
      let tip20 = (bill.value * percent20) /100;
        document.getElementById("amount20").innerHTML = "$ " + tip20.toFixed(2);
      let tip15 = (bill.value * percent15) /100;
        document.getElementById("amount15").innerHTML = "$ " + tip15.toFixed(2);
      let tip10 = (bill.value * percent10) /100;
        document.getElementById("amount10").innerHTML ="$ " + tip10.toFixed(2);
        bill.value = '';
    }
  }
  count();
  progressBar();
}
   
  
  function count(){
    let countPercent = document.getElementById("progress-bar-count");
    let count =0;
    let id = setInterval(frame,5);
    function frame() {
      if(count>=100){
         clearInterval(id);
      }else{
        count++;
        countPercent.innerHTML = "Loading " + count + " %";
      }
    }
  }
  

  function progressBar(){ 
    let elem = document.getElementById("fill"); 
    let width = 1;
    let id = setInterval(frame, 5);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + "%"; 
      }
    }
  }
  
  const calc = document.getElementById("btn");
  calc.addEventListener("click", calTip);