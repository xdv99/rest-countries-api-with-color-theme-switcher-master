const countryName = new URLSearchParams(window.location.search).get("country");

document.title = `Countries | ${countryName}`;

document.addEventListener("DOMContentLoaded", () => {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((res) => {
      const country = res[0];
      const details = document.createElement("div");
      details.className =
        "container p-6 m-auto flex flex-col md:flex-row md:items-center md:gap-x-10";
      details.innerHTML = `
        <img class="md:w-2/5" src="${country.flags.png}" />
        <div class="space-y-6 mt-6 md:mt-0">
            <h2 class="font-extrabold text-2xl">${country.name.official}</h2>
            <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:gap-x-4">
                <div class="space-y-3">
                    <p class="font-bold">Native Name: <span class="font-medium">${
                      country.name.nativeName[Object.keys(country.languages)[0]]
                        .common
                    }</span></p>
                    <p class="font-bold">Population: <span class="font-medium">${country.population.toLocaleString()}</span></p>
                    <p class="font-bold">Region: <span class="font-medium">${
                      country.region
                    }</span></p>
                    <p class="font-bold">Sub Region: <span class="font-medium">${
                      country.subregion
                    }</span></p>
                    <p class="font-bold">Capital: <span class="font-medium">${
                      country.capital
                    }</span></p>
                </div>
                <div class="space-y-3">
                    <p class="font-bold">Top Level Domain: <span class="font-medium">${
                      country.tld
                    }</span></p>
                    <p class="font-bold">Currencies: <span class="font-medium">${Object.values(
                      country.currencies
                    )
                      .map((item) => item.name)
                      .join(", ")}</span></p>
                    <p class="font-bold">Languages: <span class="font-medium">${Object.values(
                      country.languages
                    ).join(", ")}</span></p>
                </div>
            </div>
            <p class="font-bold">Border Countries: <span id="borders" class="ml-4"></span></p> 
        </div>
      `;

      if (typeof country.borders !== "undefined") {
        country.borders.forEach((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then((res) => {
              const borderItem = document.createElement("a");
              borderItem.href = `details.html?country=${res[0].name.official}`;
              borderItem.className =
                "inline-block max-w-60 bg-white shadow-md rounded-sm py-1 px-6 cursor-pointer mr-2 mb-2";
              borderItem.textContent = res[0].name.common;
              document.getElementById("borders").appendChild(borderItem);
            });
        });
      }

      document.getElementsByTagName("main")[0].appendChild(details);
    });
});

// Back Button
document.getElementById("back").addEventListener("click", () => history.back());

// Toggle Dark Mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("bg-veryLightGray");
  document.body.classList.toggle("bg-veryDarkBlueDark");
  document.body.classList.toggle("text-white");
  document.getElementsByTagName("header")[0].classList.toggle("bg-white");
  document.getElementsByTagName("header")[0].classList.toggle("bg-darkBlue");
  document.getElementById("back").classList.toggle("bg-white");
  document.getElementById("back").classList.toggle("bg-darkBlue");
});
