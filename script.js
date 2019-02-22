

function calTip(){
    const bill = Number(document.getElementById("bill").value);
    const percent20 = Number(document.getElementById("percent20").innerHTML);
    const percent15 = Number(document.getElementById("percent15").innerHTML);
    const percent10 = Number(document.getElementById("percent10").innerHTML);
    
    
    
    function display1(){
      if(bill === "" || bill <= 0){
        return alert("Enter a vaild amount please!");
      }else if(isNaN(bill)){
        return alert("Enter a vaild amount please!");
      }
     }
     setTimeout(display1, 750);
    
    setTimeout(display, 750);
      function display(){
        if(isNaN(bill)){
          document.getElementById("amount20").innerHTML = "$ " + "0.00";
          document.getElementById("amount15").innerHTML = "$ " + "0.00";
          document.getElementById("amount10").innerHTML = "$ " + "0.00";
        }else{
          let tip20 = (bill * percent20) /100;
            document.getElementById("amount20").innerHTML = "$ " + tip20.toFixed(2);
          let tip15 = (bill * percent15) /100;
            document.getElementById("amount15").innerHTML = "$ " + tip15.toFixed(2);
          let tip10 = (bill * percent10) /100;
            document.getElementById("amount10").innerHTML ="$ " + tip10.toFixed(2);
        }
     }
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
  calc.addEventListener("click", function (){calTip();});
  calc.addEventListener("click", function (){progressBar();});
  calc.addEventListener("click", function (){count();});