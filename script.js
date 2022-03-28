const intro__dropdown = document.querySelector('.intro__dropdown');
const intro__burger = document.querySelector('.intro__burger');

const intro__dropdownSelectionOne = document.querySelector('.intro__dropdown--selection-one');
const intro__dropdownSelectionTwo = document.querySelector('.intro__dropdown--selection-two');
const intro__dropdownSelectionThree = document.querySelector('.intro__dropdown--selection-three');
const intro__dropdownListOne = document.querySelector('.intro__dropdown--list-one');
const intro__dropdownListTwo = document.querySelector('.intro__dropdown--list-two');
const intro__dropdownListThree = document.querySelector('.intro__dropdown--list-three');

intro__burger.addEventListener('click', () => {
    intro__dropdown.classList.toggle('show');
})

intro__dropdownSelectionOne.addEventListener('click', () => {
    intro__dropdownListOne.classList.toggle('show');
})

intro__dropdownSelectionTwo.addEventListener('click', () => {
    intro__dropdownListTwo.classList.toggle('show');
})

intro__dropdownSelectionThree.addEventListener('click', () => {
    intro__dropdownListThree.classList.toggle('show');
})