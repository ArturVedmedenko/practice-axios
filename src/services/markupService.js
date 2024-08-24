export const createMarkUpProducts = arr => {
  return arr
    .map(
      ({ title, price, thumbnail, brand }) => `<li>
  <h3>Title: ${title}</h3>
  <p>Price: ${price} </p>
  <img src="${thumbnail}" alt="${brand}">
</li>`
    )
    .join('');
};

export const createMarkUpProduct = ({
  title,
  price,
  thumbnail,
  brand,
}) => `  <div>
  <h3>Title: ${title}</h3>
  <p>Price: ${price} </p>
  <img src="${thumbnail}" alt="${brand}">
</div>`;
