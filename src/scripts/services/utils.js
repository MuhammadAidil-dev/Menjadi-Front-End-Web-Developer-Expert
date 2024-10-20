const getData = async () => {
  try {
    const response = await fetch(`data/DATA.json`);
    if (!response.ok) {
      throw new Error('http status is : ' + response.status);
    }
    const result = await response.json();
    console.log(result);
    renderElement(result.restaurants);
  } catch (error) {
    console.log(error);
  }
};

const renderElement = (restaurants) => {
  const restauranList = document.querySelector('.restaurant-list');
  restauranList.innerHTML = '';

  restaurants.forEach((item) => {
    // Membuat elemen card-item
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');
    cardItem.setAttribute('data-id', item.id);

    // Membuat template card-item
    cardItem.innerHTML = /*html*/ `
        <div class="card-header">
          <img
            src="${item.pictureId}"
            alt="restaurant image"
            class="card-image"
          />
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-description">
            ${item.description}
          </p>
          <div class="card-information">
            <p class="city">${item.city},</p>
            <p class="rating">${item.rating}<span>⭐</span></p>
          </div>
        </div>
      `;

    // Menambahkan elemen ke restaurant-list
    restauranList.appendChild(cardItem);
  });
};

export { getData };
