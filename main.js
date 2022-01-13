async function fetchTarotCard() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
  );

  const data = await response.json();

  const tarotName = data.cards[0].name;
  const cardDescription = data.cards[0].desc;
  const uprightMeaning = data.cards[0].meaning_up;
  const reversedMeaning = data.cards[0].meaning_rev;

  const nameSection = document.getElementById("card-name");
  nameSection.innerText = tarotName;

  document.querySelector(".description").innerText = cardDescription;
  document.querySelector(".upright-meaing").innerText = uprightMeaning;
  document.querySelector(".reversed").innerText = reversedMeaning;

  document.querySelector(".card-image").src = `./images/${tarotName}.png`;
}
fetchTarotCard();

const cardButton = document.querySelector(".btn");
cardButton.addEventListener("click", fetchTarotCard);
