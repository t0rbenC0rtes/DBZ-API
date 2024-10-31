async function fetchInfo() {
  const info = await fetch(
    "https://dragonball-api.com/api/characters?limit=78"
  );
  const data = await info.json();

  const characterContainer = document.querySelector(".character-container");
  const characters = data.items;

  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterImage.alt = character.name;

    characterImage.addEventListener("click", () => {
      const charName = document.getElementById("char-name");
      if (charName.textContent === "") {
        document.getElementById("char-name").innerText = character.name;
        document.getElementById("char-image").src = character.image;
        document.getElementById("char-ki").innerText = `Ki: ${character.ki}`;
        document.getElementById(
          "char-maxki"
        ).innerText = `Max Ki: ${character.maxKi}`;
        document.getElementById(
          "char-race"
        ).innerText = `Race: ${character.race}`;
        document.getElementById(
          "char-affiliation"
        ).innerText = `Affiliation: ${character.affiliation}`;
      } else {
        document.getElementById("char2-name").innerText = character.name;
        document.getElementById("char2-image").src = character.image;
        document.getElementById("char2-ki").innerText = `Ki: ${character.ki}`;
        document.getElementById(
          "char2-maxki"
        ).innerText = `Max Ki: ${character.maxKi}`;
        document.getElementById(
          "char2-race"
        ).innerText = `Race: ${character.race}`;
        document.getElementById(
          "char2-affiliation"
        ).innerText = `Affiliation: ${character.affiliation}`;
      }
    });

    characterDiv.appendChild(characterImage);
    characterContainer.appendChild(characterDiv);
  });
}

fetchInfo();



// B T N   L I S T E N E R S
const fight = document.querySelector("#fightBtn");
fight.addEventListener("click", () => {
  let one = parseInt(document.getElementById("char-ki").innerText.replace(/Ki: /, "").replace(/\./g, ""));

  let nameOne = document.getElementById("char-name").innerText;
  let two = parseInt(document.getElementById("char2-ki").innerText.replace(/Ki: /, "").replace(/\./g, ""));
  let nameTwo = document.getElementById("char2-name").innerText;
  const winner = document.getElementById("winner");
  if ((one) > (two)) {
    winner.innerText = `${nameOne} wins`;
  } else {
    winner.innerText = `${nameTwo} wins`;
  }
});

const reset = document.querySelector("#resetBtn");
reset.addEventListener("click", () => {
  document.getElementById("char-name").innerText = "";
  document.getElementById("char2-name").innerText = "";
  document.getElementById("char-image").src = "";
  document.getElementById("char2-image").src = "";
  document.getElementById("char-ki").innerText = "";
  document.getElementById("char2-ki").innerText = "";
  document.getElementById("char-maxki").innerText = "";
  document.getElementById("char2-maxki").innerText = "";
  document.getElementById("char-race").innerText = "";
  document.getElementById("char2-race").innerText = "";
  document.getElementById("char-affiliation").innerText = "";
  document.getElementById("char2-affiliation").innerText = "";
  document.getElementById("winner").innerText = "";
});
