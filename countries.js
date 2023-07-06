const countries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const section = document.getElementById('countries');
    //console.log(countries);
    for (const country of countries){
        const details = document.createElement('div');
        details.innerHTML = `
        <h4> ${country.name.common} </h4>
        <p> ${country.capital}</p>
        <button onClick = "getDetails('${country.name.common}')"> Check Details </button>`;
        details.classList.add('single-country');
        section.appendChild(details);
    }
}

const getDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getCountryDetails(data[0]));
}

const getCountryDetails = country => {
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h3> Country Name: ${country.name.common} </h3>
    <h4> Region: ${country.region} </h4>
    <h4> Capital: ${country.capital[0]} </h4>

    <img src = ${country.flags.png}>`
    
}

countries();