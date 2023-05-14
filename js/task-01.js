let categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const categories = categoriesEl.querySelectorAll('li.item');

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryEl = category.querySelectorAll('li').length - 1;

  console.log('Category:', categoryName);
  console.log('Elements:', categoryEl);
});