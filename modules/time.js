import { DateTime } from './luxon.js';

const clock = document.querySelector('#clock');
const timeNow = () => {
  const now = DateTime.now();
  clock.innerHTML = now.toFormat('ccc HH:mm:ss');
};

setInterval(() => {
  timeNow();
}, 1000);

export default { timeNow };