const plusbtn = document.querySelector("#plusBtn");
const select = document.querySelector("#vogelSelect");
let lijstvogels = [];
const counttext = document.getElementById("count");
fetch("https://apivogelspotten.onrender.com/vogelspotten/")
  .then((info) => info.json())
  // maak geen gebruik van data hier! 
  .then((data) => {
    const aantalkeergespot = 0;

    data.forEach((vogel) => {
      let niewvogel = {
        id: vogel.id,
        soort: vogel.soort,
        gespot: aantalkeergespot,
      };
      lijstvogels.push(niewvogel);
    });
    console.log(lijstvogels);

    // data bevat de lijst met vogels, waarom dan lijstvogels?
    lijstvogels.forEach((vogel) => {
      const option = document.createElement("option");
      option.value = vogel.id;
      option.innerHTML = vogel.soort;
      select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
      const id = event.target.value;
      const gevondenVogel = lijstvogels.find((vogel) => vogel.id == id);
      console.log(gevondenVogel);
      counttext.innerText = gevondenVogel.gespot;
      plusbtn.addEventListener("click", () => {
        gevondenVogel.gespot++;
        counttext.innerText = gevondenVogel.gespot;
      });
    });
  });
