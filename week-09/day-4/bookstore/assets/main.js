const xhr = new XMLHttpRequest();

xhr.open('GET', '/books');

const tableBody = document.querySelector('tbody');

const createRow = (book) => {
  const newRow = document.createElement('tr');
  const newTitle = document.createElement('td');
  newTitle.textContent = book.book_name;
  newRow.appendChild(newTitle);
  const newAuthor = document.createElement('td');
  newAuthor.textContent = book.aut_name;
  newRow.appendChild(newAuthor);
  const newCategory = document.createElement('td');
  newCategory.textContent = book.cate_descrip;
  newRow.appendChild(newCategory);
  const newPublisher = document.createElement('td');
  newPublisher.textContent = book.pub_name;
  newRow.appendChild(newPublisher);
  const newPrice = document.createElement('td');
  newPrice.textContent = book.book_price;
  newRow.appendChild(newPrice);
  tableBody.appendChild(newRow);
}

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    response.forEach(book => {
      console.log(book);
      createRow(book);
    });
  }
}
xhr.send();