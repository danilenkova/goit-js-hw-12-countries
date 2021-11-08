import { info, error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import getRefs from '../data/references';

const refs = getRefs();

const NOT_ALERTS = {
  NO_VALID: 'Use Latin letters in your request!',
  MUCH_RESULTS: 'Many matches found. Please enter a more specific request',
  NOT_FOUND: 'No countries found',
};

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 50,
  firstpos2: 50,
  push: 'top',
  maxOpen: 1,
  maxStrategy: 'close',
  context: document.body,
});

const myAlert = message =>
  info({
    text: message,
    delay: 1000,
    stack: myStack,
    maxTextHeight: null,
    shadow: true,
  });

const myError = message =>
  error({
    text: message,
    delay: 1000,
    stack: myStack,
    maxTextHeight: null,
    shadow: true,
  });

const showError = error => {
  refs.section.innerHTML = '';
  myError(error);
};

export { NOT_ALERTS, myAlert, showError };
