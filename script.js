fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) => displayCountries(data));

/* const displayCountries = (countries) => {
    
  const countriesDiv = document.getElementById("countries");

   for (let i = 0; i < countries.length; i++) {
    const countryInfo = countries[i];

    const name = countryInfo.name;
    const capital = countryInfo.capital;

    const countryDiv = document.createElement("div");
    // --create a class--//
    countryDiv.className = 'country';
    // const h1 = document.createElement("h1");
    // h1.innerText = "Country Name : " + name;
    // const h2 = document.createElement("h2");
    // h2.innerText = "Country Capital : " + capital;
    // countryDiv.appendChild(h1);
    // countryDiv.appendChild(h2);

    // --using template string --//
    const displayCountryInfo = `
    <h1 class = "country-name"> ${name}</h1>
    <h3 class = "country-capital"> ${capital}</h3>
    `;
    countryDiv.innerHTML = displayCountryInfo;
    countriesDiv.appendChild(countryDiv);
  }
}; 
*/

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");

  // --Using forEach--//
  countries.forEach((country) => {
    const countryInfo = country;

    const name = countryInfo.name;
    const capital = countryInfo.capital;

    const countryDiv = document.createElement("div");
    countryDiv.className = "country";

    const displayCountryInfo = `
      <h1 class = "country-name"> ${name}</h1>
      <h3 class = "country-capital"> ${capital}</h3>
      <button onclick = "displayCountryDetails('${name}')" >Show Details</button>
      `;
    countryDiv.innerHTML = displayCountryInfo;
    countriesDiv.appendChild(countryDiv);
  });
};

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => randomCountryInfo(data[0]));
};
const randomCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML = `
    <h1> ${country.name}</h1>
    <p>${country.capital} </p>
    <p>Population : ${country.population} </p>
    <p>Area :${country.area} </p>
    <img src = "${country.flag}">

    `
}

