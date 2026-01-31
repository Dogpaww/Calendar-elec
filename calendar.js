function Makecalendar(){

    const date=new Date();
    const month=date.getMonth();
    const year=date.getFullYear();
    const day=date.getUTCDay();
    const actualdate=date.getDate();
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    document.querySelector("#Year").textContent=year
    document.querySelector("#Date").textContent=months[month]+" "+actualdate;
    document.querySelector("#Day").textContent=days[day];

    const hour=date.getHours();
    const minute=date.getMinutes();
    const formattedHour = String(hour).padStart(2, '0'); //so i can get 12:05 and not 12:5
    const formattedMinute = String(minute).padStart(2, '0');

    document.querySelector("#Clock").textContent=formattedHour+":"+formattedMinute;

    if(hour>6 && hour<18){
        document.getElementById("cat").src="./assets/sleepingcat.gif";
        document.querySelector(".Cat").style.right="9px"
        document.querySelector(".Cat").style.top="52px"
        document.querySelector(".Cat").style.display="inline-block";
    }
    else if(hour>18 || hour<6){
        document.getElementById("cat").src="./assets/cat-roll.gif";
    }




}

Makecalendar();