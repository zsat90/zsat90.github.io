const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';


fetch(requestURL)
  .then(response => response.json())
  .then(function (jsonObject) {
    
  const prophets = jsonObject['prophets'];
  console.log(jsonObject);

  const cards = document.querySelector('div.cards');

  prophets.forEach(prophet => {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let pimg = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h5.textContent = ` Date of Birth: ${prophet.birthdate}`;
    p.textContent = ` Place of Birth: ${prophet.birthplace}`;
    pimg.setAttribute('src', prophet.imageurl);
    
    
    card.append(h2);
    card.append(h5);
    card.append(p);
    card.append(pimg);
    cards.append(card);

    

  });
  
  });
