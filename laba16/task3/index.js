const form = document.querySelector(".page__form");
const buttonsArr = Array.from(document.querySelectorAll(".page__button"));
const cleanButton = document.querySelector(".page__item_clean");
const equalButton = document.querySelector(".page__item_equal");
const backButton = document.querySelector(".page__item_back")

function insert(num) {
    form.textview.value = form.textview.value + num;
}

function clean() {
    form.textview.value = "";
}
 
function back() {
    const exp = form.textview.value;
    form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
    const exp = form.textview.value;
    console.log(exp);
    if(exp) {
       form.textview.value = eval(exp);
    }
}

buttonsArr.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("page__button_multiply")) {
            insert("*");
        }
        else if (button.classList.contains("page__button_divide")) {
            insert("/")
        }
        else {
            insert(button.textContent);
        }
    });
});

cleanButton.addEventListener("click", () => {
    clean();
})

equalButton.addEventListener("click", () => {
    equal()
});

backButton.addEventListener("click", () => {
    back();
});