async function cardInfo() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/"
  );

  const data = await response.json();

  const tarotName = data.cards[0].name;
  const cardDescription = data.cards[0].desc;

  const cardInfo = document.getElementById("fool");
  cardInfo.innerText = hi;
}
