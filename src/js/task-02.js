const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(element => {
  const listItemEl = document.createElement(`li`);
  listItemEl.classList.add(`item`);
  listItemEl.textContent = element;
  return listItemEl;
});
const listEl = document.querySelector(`ul`);
listEl.append(...elements);
console.log(elements);
