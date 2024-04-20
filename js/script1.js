function updateClock(){
    const now= new Date();
    let hour=now.getHours().toString().padStart(2,0);
    const meridian=hour>=12 ? "PM" : "AM";
    hour=(hour % 12 || 12).toString().padStart(2,0);
    const minute=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);

    const time=`${hour}:${minute}:${second} ${meridian}`;

    document.getElementById("clock").textContent=time;
}

updateClock();
setInterval(updateClock,1000);