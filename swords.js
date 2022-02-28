async function cardInfo() {
  const response = await fetch(
    "https://rws-cards-api.herokuapp.com/api/v1/cards/suits/swords"
  );

  const data = await response.json();
  console.log(data);
  document.getElementById("1").innerHTML = data.cards[0].desc;
  document.getElementById("2").innerHTML = data.cards[1].desc;
  document.getElementById("3").innerHTML = data.cards[2].desc;
  document.getElementById("4").innerHTML = data.cards[3].desc;
  document.getElementById("5").innerHTML = data.cards[4].desc;
  document.getElementById("6").innerHTML = data.cards[5].desc;
  document.getElementById("7").innerHTML = data.cards[6].desc;
  document.getElementById("8").innerHTML = data.cards[7].desc;
  document.getElementById("9").innerHTML = data.cards[8].desc;
  document.getElementById("10").innerHTML = data.cards[9].desc;
  document.getElementById("11").innerHTML = data.cards[10].desc;
  document.getElementById("12").innerHTML = data.cards[11].desc;
  document.getElementById("13").innerHTML = data.cards[12].desc;
  document.getElementById("14").innerHTML = data.cards[13].desc;
}
cardInfo();
