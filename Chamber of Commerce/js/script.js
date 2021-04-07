
function toggleMenu(){
    document.getElementById("nav").classList.toggle("hide");
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=84660&appid=a4f0ea336956690bd94ef664d470fc9e&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
    

        document.getElementById('temp').innerHTML = weatherInfo.main.temp.toFixed();
        document.getElementById('current-description').innerHTML = weatherInfo.weather[0].description;
        document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;


        
            // alert(weatherInfo.weather[0].description);

        
    });


const d = new Date();

const todayDayNumber = d.getDay();


const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

    const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?zip=84660&appid=a4f0ea336956690bd94ef664d470fc9e&units=imperial";

fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    

   

    let forecastDayNumber = todayDayNumber;
    let dayCheck = 0;

   
    let theDay = document.createElement("table");
    let tr_1 = document.createElement("tr");
    let tr_2 = document.createElement("tr");
    let tr_3 = document.createElement("tr");

        for (i = 0; i < weatherInfo.list.length; i++) {
            
            var time = weatherInfo.list[i].dt_txt;
            
            if (dayCheck == 3)break;

            
            if (time.includes('18:00:00')){
                
                forecastDayNumber += 1;
                dayCheck += 1;
        
                
                if (forecastDayNumber == 7){
                    forecastDayNumber = 0;
                }

                
                let theDayName = document.createElement("th");
                theDayName.textContent = weekday[forecastDayNumber];
                tr_1.appendChild(theDayName);

                
                let iconbox = document.createElement("td");
                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                iconbox.appendChild(theIcon);
                tr_2.appendChild(iconbox);

                
                let theTemp = document.createElement("td");
                theTemp.textContent = Math.round(weatherInfo.list[i].main.temp) + "\xB0";
                tr_3.appendChild(theTemp);

                theDay.appendChild(tr_1);
                theDay.appendChild(tr_2);
                theDay.appendChild(tr_3);

                document.getElementById('three-day-forcast').appendChild(theDay);

            }
        }
    });


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000); 
}






