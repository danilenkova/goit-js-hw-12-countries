import countryCardTpl from '../../templates/country-card.hbs';
import countriesListTpl from '../../templates/countries.hbs';
import { NOT_ALERTS, myAlert, showError } from '../vendors/alert';
import getRefs from '../data/references';

const refs = getRefs();

export default function renderCountries(country) {
  if (country.length === 1) {
    renderCountryCard(country);
  } else if (country.length >= 2 && country.length <= 10) {
    renderCountriesList(country);
  } else if (country.length > 10) {
    myAlert(NOT_ALERTS.MUCH_RESULTS);
  } else {
    showError(NOT_ALERTS.NOT_FOUND);
  }
}

function renderCountryCard(country) {
  const cardMarkup = countryCardTpl(country[0]);
  refs.section.insertAdjacentHTML('beforeend', cardMarkup);
}
function renderCountriesList(country) {
  const listMarkup = countriesListTpl(country);
  refs.section.insertAdjacentHTML('beforeend', listMarkup);
}
