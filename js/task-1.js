// const categories = document.querySelector('#categories');
const categories = document.getElementById('categories')
const categoryItems = categories.querySelectorAll('.item');

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach(item => {
    console.log("Category:", item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});

