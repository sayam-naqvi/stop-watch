var min = 0;
var sec = 0;
var milli = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milliHeading = document.getElementById("milli");
var value = document.getElementById("v1");
var arr = [];

var interval = 0;

function timer (){
    milli++
    milliHeading.innerHTML = milli;
    if (milli >= 100){
     sec++
     secHeading.innerHTML = sec;
     milli = 0;        
    }
    else if ( sec >= 60 ){
        min++
       minHeading.innerHTML = min;
       sec = 0;
    }
}

function start (){
    interval = setInterval(timer,10);
    document.getElementById("myBtn").disabled = true;
}
function pause (){
    clearInterval(interval);
    document.getElementById("myBtn").disabled = false;
}
function reset(){
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    milliHeading.innerHTML = milli;
    arr += min + ":" + sec + ":" + milli + "<br>";
    value.innerHTML = arr ;
    min = 0;
    sec = 0;
    milli = 0;
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    milliHeading.innerHTML = 0;
    pause();
    document.getElementById("myBtn").disabled = false;
}

// function disable (){
//     document.getElementById("myBtn").disabled = true;
// }