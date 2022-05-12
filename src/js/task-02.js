const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(option => {
  const listItemEl = document.createElement(`li`);
  listItemEl.classList.add(`item`);
  listItemEl.textContent = option;
  return listItemEl;
});
const listEl = document.querySelector(`ul`);
listEl.append(...elements);
console.log(elements);
