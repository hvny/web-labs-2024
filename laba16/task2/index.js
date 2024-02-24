
const listsContainer = document.querySelector(".lists");
const form = document.querySelector(".form");
const nameInput = form.elements.nameInput;
const listTemplate = document.querySelector("#list");
const listItemTemplate = document.querySelector("#list-item");

function generateElem(elem) {
    return elem.content.cloneNode(true);
}

function removeElem(evt, elem) {
    evt.target.closest(elem).remove();
}

function resetInputValue(input) {
    input.value = "";
}

function addList(name) {
    const list = listTemplate.content.cloneNode(true);
    const container = list.querySelector(".list-container__list");
    const listTitle = list.querySelector(".list-container__title");
    const removeButton = list.querySelector(".list-container__button_remove")
    const addButton = list.querySelector(".list-container__button_add");
    const addInput = list.querySelector(".list-container__input_add ");

    listTitle.textContent = name;
    listsContainer.append(list);

    removeButton.addEventListener("click", (evt) => {
        evt.target.closest("article").remove();
    }, false);

    addButton.addEventListener("click", () => {
        addListItem(container, addInput.value);
    }, false); 

    resetInputValue(nameInput);
}

function addListItem(container, text) {
    const item = listItemTemplate.content.cloneNode(true);
    const itemInput = item.querySelector(".list-container__input");
    const itemSpan = item.querySelector(".list-container__span");
    const removeButton = item.querySelector(".list-container__button_remove"); 

    removeButton.addEventListener("click", (evt) => {
        evt.target.closest("li").remove();
    }, false)

    itemSpan.textContent = text;
    container.append(item);
    resetInputValue(itemInput);
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    addList(nameInput.value);
});