
function renderBooks(books) {
  console.log(books, 'books')
  
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    
    h2.innerHTML = book.name;
    p1.innerHTML = book.numberOfPages

    main.appendChild(h2);
    main.appendChild(p1);
  });
}

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch('https://anapioficeandfire.com/api/books')
            .then(res => res.json())
            // .then(json => console.log(json, 'It worked'))
            .then(json => renderBooks(json))
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
