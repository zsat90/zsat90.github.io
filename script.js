

const today = new Date();

const date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

const time = today.getHours() + ':' + today.getMinutes();

const currentDateTime = date + ' ' + time;

document.getElementById('date').innerHTML = currentDateTime;