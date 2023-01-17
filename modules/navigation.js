// Navigation links
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const aboutBtn = document.querySelector('.contact-btn');

const listContainer = document.getElementById('list-container');
const addNewContainer = document.getElementById('add-new-container');
const contactContainer = document.getElementById('contact-container');

export default
listBtn.addEventListener('click', () => {
  listContainer.style.display = 'block';
  contactContainer.style.display = 'none';
  addNewContainer.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  addNewContainer.style.display = 'block';
});
aboutBtn.addEventListener('click', () => {
  listContainer.style.display = 'none';
  addNewContainer.style.display = 'none';
  contactContainer.style.display = 'block';
});
