const productsList = document.querySelector("#products");
const form = document.querySelector(".form");
const nameInput = form.elements.nameInput;
const priceInput = form.elements.priceInput;
const listItemTemplate = document.querySelector('#product');

function addItem(name, price) {
    listItem = listItemTemplate.content.cloneNode(true);
    listItem.querySelector(".products-list__product-name").textContent = name;
    listItem.querySelector(".products-list__product-price").textContent = price;
    listItem.querySelector(".products-list__button").addEventListener("click", (evt) => {
        evt.target.closest("li").remove();
    });
    productsList.append(listItem);
}


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(nameInput.value, priceInput.value);
    addItem(nameInput.value, priceInput.value);
});