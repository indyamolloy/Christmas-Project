async function cardInfo() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/"
  );

  const data = await response.json();

  document.getElementById("fool").innerHTML = data.cards[0].desc;
  document.getElementById("the-magician").innerHTML = data.cards[1].desc;
  document.getElementById("the-high-priestess").innerHTML = data.cards[2].desc;
  document.getElementById("the-empress").innerHTML = data.cards[3].desc;
  document.getElementById("the-emperor").innerHTML = data.cards[4].desc;
  document.getElementById("the-hierophant").innerHTML = data.cards[5].desc;
  document.getElementById("the-lovers").innerHTML = data.cards[6].desc;
  document.getElementById("the-chariot").innerHTML = data.cards[7].desc;
  document.getElementById("strength").innerHTML = data.cards[8].desc;
  document.getElementById("the-hermit").innerHTML = data.cards[9].desc;
  document.getElementById("wheel-of-fortune").innerHTML = data.cards[10].desc;
  document.getElementById("justice").innerHTML = data.cards[11].desc;
  document.getElementById("the-hanged-man").innerHTML = data.cards[12].desc;
  document.getElementById("death").innerHTML = data.cards[13].desc;
  document.getElementById("temperance").innerHTML = data.cards[14].desc;
  document.getElementById("the-devil").innerHTML = data.cards[15].desc;
  document.getElementById("the-tower").innerHTML = data.cards[16].desc;
  document.getElementById("the-star").innerHTML = data.cards[17].desc;
  document.getElementById("the-moon").innerHTML = data.cards[18].desc;
  document.getElementById("the-sun").innerHTML = data.cards[19].desc;
  document.getElementById("judgement").innerHTML = data.cards[20].desc;
  document.getElementById("the-world").innerHTML = data.cards[21].desc;
}

cardInfo();

//Loop through card array
//pull the description of each card out
//find the element with the same id of the card name
//assign the element with the same card name the description that matches the name
