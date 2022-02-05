// Variables
let productTemplate;

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price.innerText * quantity.value;
  return +(price.innerText * quantity.value);
}

function calculateAll() {
  // ITERATION 1
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // ITERATION 2 AND ITERATION 3
  const products = document.getElementsByClassName('product');
  let totalPrice = document.querySelector('#total-value span');

  let sum = 0;
  [...products].forEach((product) => (sum += updateSubtotal(product)));

  totalPrice.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.closest('tbody');

  parent.removeChild(target.closest('.product'));

  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Getting the inputs.
  const productElements = document.querySelectorAll('.create-product input');
  const productName = productElements[0].value;
  const productPrice = productElements[1].value;
  const parent = document.querySelector('tbody');

  // Creating a clone of the template.
  let templateClone = productTemplate.cloneNode(true);

  // Creating the new product using the template, and modifying the values.
  const newProduct = parent.appendChild(templateClone);
  const name = newProduct.querySelector('.name span');
  const price = newProduct.querySelector('.price span');
  const quantity = newProduct.querySelector('.quantity input');
  const subtotal = newProduct.querySelector('.subtotal span');
  const removeBtn = newProduct.querySelector('.action .btn-remove');

  name.innerText = productName;
  price.innerText = productPrice;
  quantity.value = 0;
  subtotal.innerText = 0;
  removeBtn.addEventListener('click', removeProduct);

  parent.appendChild(newProduct);
}

window.addEventListener('load', () => {
  // Getting a template for the new product.
  productTemplate = document.querySelector('.product').cloneNode(true);

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const products = document.getElementsByClassName('product');
  [...products].forEach((product) =>
    product
      .querySelector('.action .btn-remove')
      .addEventListener('click', removeProduct)
  );
});
