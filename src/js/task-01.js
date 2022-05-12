const catRef = document.querySelectorAll('li.item');
console.log(catRef);
console.log(`Number of categories: ` + catRef.length);
catRef.forEach(ref => {
  console.log('Category:' + ref.querySelector('h2').textContent);
  console.log('Elements: ' + ref.querySelector('ul').querySelectorAll('li').length);
});
