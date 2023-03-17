window.onload = ()=>
{
    var button_start = document.getElementById("button-start");
    var button_stop = document.getElementById("button-stop");
    var button_reset = document.getElementById("button-reset");
    var appendTens= document.getElementById("tens");
    var appendseconds= document.getElementById("seconds");
    var Interval;

    var seconds =00;
    var tens = 00;

    button_start.onclick = () =>
    {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);//if you does'nt  give  settimer 10s ,it take default 10s

    }

    startTimer = ()=>//actually it is function which mean startimer(),but we can also write startimer=() =>
    {

    {
        tens++;
        console.log(tens);
    }

    
    if(tens<=9){
         
        appendTens.innerHTML="0"+tens;
         
    }
    if(tens>9)
    {
        appendTens.innerHTML=tens;
    }
     
    if(tens>99)
    {
        seconds++;
        console.log(seconds);
        appendseconds.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+tens;
    }
    if(seconds>9)
    {
               appendseconds.innerHTML = seconds;
    }
    
    button_stop.onclick = ()=>{
         clearInterval(Interval);
    }

    button_reset.onclick = ()=>
    {
        seconds=00;
        tens=00;
        appendTens.innerHTML= "0"+tens;
        appendseconds.innerHTML= "0"+seconds;
        clearInterval(Interval);


    }



}

}
