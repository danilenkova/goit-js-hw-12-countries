const BASE_URL = 'https://restcountries.com/v2/';

export default function fetchCountries(countryName) {
  const countryData = new URLSearchParams({
    fields: 'name,flag,capital,population,languages',
  });
  return fetch(`${BASE_URL}/name/${countryName}?${countryData}`).then(response => {
    return response.json();
  });
}
