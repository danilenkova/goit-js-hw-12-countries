import './sass/main.scss';
import { debounce } from 'lodash';
import getRefs from './js/data/references';
import onSearch from './js/events/events';

const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearch, 500));
