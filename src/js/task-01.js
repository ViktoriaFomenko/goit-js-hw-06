const catRef = document.querySelectorAll('#categories>li');
console.log(catRef);
console.log(`Number of categories: ` + catRef.length);
catRef.forEach(ref => {
  console.log('Category:' + ref.firstElementChild.textContent);
  console.log('Elements: ' + ref.lastElementChild.children.length);
});
