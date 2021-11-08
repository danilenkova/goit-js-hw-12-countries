import fetchCountries from '../app/fetchCountries';
import renderCountries from '../app/render';
import { NOT_ALERTS, showError } from '../vendors/alert';
import getRefs from '../data/references';
const refs = getRefs();

export default function onSearch(e) {
  e.preventDefault();
  const serchQuery = e.target.value;
  refs.section.innerHTML = '';
  if (!e.target.value.match(/^[a-zA-Z,() ']*$/)) {
    return showError(NOT_ALERTS.NO_VALID);
  }
  fetchCountries(serchQuery)
    .then(renderCountries)
    .catch(error => console.log(error));
}
