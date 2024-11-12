const time =document.getElementById("time");
const timeFormate =document.getElementById("timeformat");

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showTime ,1000);
});

const showTime =()=>{
    let date =new Date();
    // date.setDate(date.getDate() - 12);
    // console.log(date);
    
     
    let hr =date.getHours();
    let mins =date.getMinutes();
    let secs =date.getSeconds();

    // console.log(hr, mins, secs);
    
     
    timeFormate.innerHTML = hr >= 12 && hr != 24 ? "PM" : "AM";

    hr = hr <10? ` 0 ${hr}` :hr;
    mins = mins <10? ` 0${mins}` :mins;
    secs = secs <10? ` 0${secs}` :secs;
    time.innerHTML =`${hr > 12 ? hr-12 : hr} : ${mins} : ${secs}`;
}