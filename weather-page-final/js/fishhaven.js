const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=a4f0ea336956690bd94ef664d470fc9e&units=imperial";

fetch(apiUrl)
    .then((response) => response.json())
    .then ((weatherInfo) => {
        console.log(weatherInfo);


        document.getElementById('current').innerHTML = weatherInfo.weather[0].description;
        document.getElementById('temp').innerHTML = weatherInfo.main.temp;
        document.getElementById('currentHumidity').innerHTML = weatherInfo.main.humidity;
        document.getElementById('speed').innerHTML = weatherInfo.wind.speed;

        const tempNumber = parseFloat(document.getElementById('temp').innerHTML);


const speedNumber = parseFloat(document.getElementById('speed').innerHTML);


let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16))
+ (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

windchill = Math.round(windchill);


if (tempNumber <= 50 && speedNumber > 3) {
    document.getElementById('chill').textContent = "Wind Chill is " + windchill + "-F";
}
else {
    document.getElementById('chill').textContent = "No Wind Chill Today"
}


    });




const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";



const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=a4f0ea336956690bd94ef664d470fc9e&units=imperial";

fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    console.log(weatherInfo);

   

    let forecastDayNumber = todayDayNumber;
    

   
    let theDay = document.createElement("table");
    let tr_1 = document.createElement("tr");
    let tr_2 = document.createElement("tr");
    let tr_3 = document.createElement("tr");

        for (i = 0; i < weatherInfo.list.length; i++) {
            var time = weatherInfo.list[i].dt_txt;

            if (time.includes('18:00:00')){
                
                forecastDayNumber += 1;
                if (forecastDayNumber === 7){
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

                document.getElementById('five-day').appendChild(theDay);

            }
        }
    });