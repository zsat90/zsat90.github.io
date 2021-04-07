fetch("js/businesses.json")
.then(response => response.json())
.then(function (jsonObject){
    

    const data = jsonObject['businesses'];
    
    const cards = document.querySelector('div.cards');


    data.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let pimg = document.createElement('img');

        h2.textContent = `${business.name}`;
        p1.textContent = ` Address: ${business.address}`;
        p2.textContent = `Phone: ${business.phone}`;
        p3.textContent = `Website: ${business.weblink}`;
        pimg.setAttribute('src', business.logo);

        card.append(h2);
        card.append(p1);
        card.append(p2);
        card.append(p3);
        card.append(pimg);
        cards.append(card);


    });

   
});






