const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];

const today = new Date();

const date = (days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear());

const currentDate = date

document.getElementById('date').innerHTML = currentDate;


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}