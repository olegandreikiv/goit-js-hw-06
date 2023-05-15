let categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const categories = categoriesEl.querySelectorAll('li.item');

categories.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryEl = category.lastElementChild.children.length;

  console.log('Category:', categoryName);
  console.log('Elements:', categoryEl);
});