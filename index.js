const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();



let day = weekday[d.getDay()];
let utcm =d.getTime();

document.getElementById("weekday").innerHTML = day;
document.getElementById("utc").innerHTML = utcm;




