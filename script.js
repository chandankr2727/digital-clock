var arr=[];
function set(){
    arr[0]=document.getElementById("wakeup").value
    arr[1]=document.getElementById("lunch").value
    arr[2]=document.getElementById("nap").value

    var sel = document.getElementById("wakeup").options[wakeup.selectedIndex].innerText

    var sel2 = document.getElementById("lunch").options[lunch.selectedIndex].innerText

    var sel3 = document.getElementById("nap").options[nap.selectedIndex].innerText
    var array=[]
    document.getElementById("setdisplay").style.display="block"
    document.getElementById("wakeuptime").innerText="Wake up Time is : - "+ sel
    document.getElementById("lunchtime").innerText="Lunch Time is :  -  "+ sel2
    document.getElementById("naptime").innerText="Nap Time is : - "  + sel3
    }
    document.getElementById("btn").addEventListener("click",set);
function clock(){
    // 12 hours clock
    var a= new Date;
    var hours=a.getHours();
    var mins=a.getMinutes();
    var secs=a.getSeconds();
    var ampm
    if (hours>=12) {
        ampm="PM"
    } else {
        ampm="AM"
    }
    hrs=hours%12;
    if(hrs==0){
        hrs=12
    }
    if (hrs<10) {
        hrs='0'+hrs
    }
    if (mins<10) {
        mins='0'+mins
    }
    if (secs<10) {
        secs='0'+secs
    }
    document.getElementById("hrs").innerText=hrs;
    document.getElementById("mins").innerText=mins;
    document.getElementById("secs").innerText=secs;
    document.getElementById("ampm").innerText=ampm;
    setTimeout(clock,1000);

    // display text
    var display= document.getElementById("display")
    if (hrs>=4 && hrs<12 && ampm=="AM") {
       display.style.display="block"
       display.innerText="Good Morning !!"
    }
    else if (hrs==12 || hrs<4 ) {
        display.style.display="block"
        if (ampm=="PM") {
            display.innerText="Good Afternoon !!"  
        }else if (ampm=="AM") {
            display.innerText="Good Night !!"  
        }
    }
    else if(hrs>=8 && ampm=="PM")  {
        display.style.display="block"
        display.innerText="Good Night !!"
    }
    else{
        display.style.display="block"
        display.innerText="Good Evening !!" 
    }
    document.getElementById("image").style.backgroundRepeat="no-repeat"
    // display image
    if (arr[0]==hrs+ampm) {
        document.getElementById("image").style.backgroundImage ="url(./images/wake-up-img.png) "
    }else{
        document.getElementById("image").style.backgroundImage ="url(./images/default.png) "
        
    }
    if (arr[1]==hrs+ampm) {
        document.getElementById("image").style.backgroundImage ="url(./images/lunch-time-img.png)"
    }
    if (arr[2]==hrs+ampm) {
        document.getElementById("image").style.backgroundImage="url(./images/good-night-img.png)"
    }
}
clock()



