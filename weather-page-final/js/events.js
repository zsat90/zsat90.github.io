const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function dataCall(townName){


fetch(URL)

.then(response => response.json())
.then(function (jsonObject){

    const townData = jsonObject['towns'];

    const eventsCard = document.querySelector('div.events');


    const [townFilter] = townData.filter(town => town.name == townName)
    
        
        let card = document.createElement('ul');
        


        townFilter.events.map(events => {
            let li = document.createElement('li');
        li.textContent = `${events}`;
        card.append(li);
        });
       
        
        
        

        
        eventsCard.append(card);
        
        
   



});
}