
const price = document.querySelector(`.main-form__input--price`);

const deletePriceSpace = () => {
    price.value =  price.value.replace(/[^0-9\s]/g, ``);
    price.value =  price.value.replace( /\s/g, ``);
    price.value =  price.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);
}

price.addEventListener(`keyup`, ()=> {
    setTimeout(deletePriceSpace(), 1000);
});

const arrow = document.querySelector(`.main-select__arrow`);
const status = document.querySelector(`.main-select__element--active`);
const list = document.querySelector(`.main-select__list `);
const selectElements = Array.from(document.querySelectorAll(`.main-select__element--variant`));
const inputStatus = document.querySelector(`.main-select__input`)

const elemenChecked = () => {
    const selectElements = Array.from(document.querySelectorAll(`.main-select__element`));
    selectElements.forEach((element)=> {
    if (list.style.display === `block`) {
        element.style.display = `none`;
    } else {
        element.style.display = `block`;
    }
})};

const onClickArrow = () => {
    status.innerHTML = `Статус`;

    if (list.style.display === `block`) {
        list.style.display = `none`;
    } else {
        list.style.display = `block`;
    }
};

selectElements.forEach((element)=> {
    element.addEventListener(`click`, ()=>{
        list.style.display = `none`;
        const text = element.textContent.trim();
        inputStatus.value = text;
        status.innerHTML = text;
    })
});

arrow.addEventListener(`click`, onClickArrow);

