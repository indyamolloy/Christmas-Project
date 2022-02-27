const cardOne = document.querySelector(".card-img-1");
cardOne.addEventListener("click", cardOneReveal, { once: true });

async function cardOneReveal() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
  );

  const data = await response.json();

  const tarotName = data.cards[0].name;
  const cardDescription = data.cards[0].meaning_up;

  const cardOne = document.querySelector(".card-img-1");
  cardOne.src = `./images/${tarotName}.png`;
  const pastDesc = document.querySelector(".card-1");
  pastDesc.innerHTML = cardDescription;
}

const cardTwo = document.querySelector(".card-img-2");
cardTwo.addEventListener("click", cardTwoReveal, { once: true });

async function cardTwoReveal() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
  );

  const data = await response.json();

  const tarotName = data.cards[0].name;
  const cardDescription = data.cards[0].meaning_up;

  const cardTwo = document.querySelector(".card-img-2");
  cardTwo.src = `./images/${tarotName}.png`;
  const presentDesc = document.querySelector(".card-2");
  presentDesc.innerHTML = cardDescription;
}

const cardThree = document.querySelector(".card-img-3");
cardThree.addEventListener("click", cardThreeReveal, { once: true });

async function cardThreeReveal() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
  );

  const data = await response.json();

  const tarotName = data.cards[0].name;
  const cardDescription = data.cards[0].meaning_up;

  const cardThree = document.querySelector(".card-img-3");
  cardThree.src = `./images/${tarotName}.png`;
  const futureDesc = document.querySelector(".card-3");
  futureDesc.innerHTML = cardDescription;
}
