const xhr = new XMLHttpRequest();

xhr.open('GET', '/books');

const tableBody = document.querySelector('tbody');
const selectCategory = document.querySelector('#category');
const selectPublisher = document.querySelector('#publisher');
const selectPrice = document.querySelector('#price');

selectPrice.addEventListener('change', () => {
  selectCategory.setAttribute('disabled', 'true');
  selectPublisher.setAttribute('disabled', 'true');
});

selectPublisher.addEventListener('change', () => {
  selectPrice.setAttribute('disabled', 'true');
});

selectCategory.addEventListener('change', () => {
  selectPrice.setAttribute('disabled', 'true');
});

const categories = [];
const publishers = [];

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    createFilters(response);
    response.forEach(book => {
      createRow(book);
    });
  }
}
xhr.send();

const createFilters = (response) => {
  response.forEach(book => {
    chooseCategory(book);
    choosePublisher(book);
  });
  categories.forEach(category => {
    const newOption = document.createElement('option');
    newOption.innerText = category;
    newOption.setAttribute('value', category);
    selectCategory.appendChild(newOption);
  });
  publishers.forEach(publisher => {
    const newOption = document.createElement('option');
    newOption.innerText = publisher;
    newOption.setAttribute('value', publisher);
    selectPublisher.appendChild(newOption);
  });
}

const chooseCategory = (book) => {
  if (!categories.includes(book.cate_descrip)) {
    categories.push(book.cate_descrip);
  }
}

const choosePublisher = (book) => {
  if (!publishers.includes(book.pub_name)) {
    publishers.push(book.pub_name);
  }
}

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

const form = document.querySelector("#filters");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedCategory = selectCategory.value;
  const selectedPublisher = selectPublisher.value;
  const selectedPrice = selectPrice.value;

  const filterXhr = new XMLHttpRequest;
  if (selectedCategory !== '-' && selectedPrice === '-' && selectedPublisher === '-') {
    filterXhr.open('GET', `/books?category=${selectedCategory}`);
    filterXhr.onload = () => {
      if (filterXhr.status === 200) {
        tableBody.innerHTML = '';
        const response = JSON.parse(filterXhr.responseText);
        response.forEach(book => {
          createRow(book);
        });
      }
    }
    filterXhr.send();
  } else if (selectedCategory === '-' && selectedPrice === '-' && selectedPublisher !== '-') {
    filterXhr.open('GET', `/books?publisher=${selectedPublisher}`);
    filterXhr.onload = () => {
      if (filterXhr.status === 200) {
        tableBody.innerHTML = '';
        const response = JSON.parse(filterXhr.responseText);
        response.forEach(book => {
          createRow(book);
        });
      }
    }
    filterXhr.send();
  } else if (selectedCategory !== '-' && selectedPrice === '-' && selectedPublisher !== '-') {
    filterXhr.open('GET', `/books?publisher=${selectedPublisher}&category=${selectedCategory}`);
    filterXhr.onload = () => {
      if (filterXhr.status === 200) {
        tableBody.innerHTML = '';
        const response = JSON.parse(filterXhr.responseText);
        response.forEach(book => {
          createRow(book);
        });
      }
    }
    filterXhr.send();
  } else if (selectedCategory === '-' && selectedPrice !== '-' && selectedPublisher === '-') {
    let priceMin = '';
    let priceMax = '';
    if (selectedPrice === '0-99') {
      priceMin = 0;
      priceMax = 99;
    } else if (selectedPrice === '100-199') {
      priceMin = 100;
      priceMax = 199;
    } else {
      priceMin = 200;
      priceMax = 299;
    }
    filterXhr.open('GET', `/books?priceMin=${priceMin}&priceMax=${priceMax}`);
    filterXhr.onload = () => {
      if (filterXhr.status === 200) {
        tableBody.innerHTML = '';
        const response = JSON.parse(filterXhr.responseText);
        response.forEach(book => {
          createRow(book);
        });
      }
    }
    filterXhr.send();
  }
});
