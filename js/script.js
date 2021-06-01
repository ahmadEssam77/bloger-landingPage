const myProducts = document.getElementById('product');
const myCompany = document.getElementById('company');
const myConnect = document.getElementById('connect');

const selectionOne = document.getElementById('selection-1');
const selectionTwo = document.getElementById('selection-2');
const selectionThree = document.getElementById('selection-3');

const myArrowOne = document.getElementById('arrow-1');
const myArrowTwo = document.getElementById('arrow-2');
const myArrowThree = document.getElementById('arrow-3');

myProducts.addEventListener('click', function () {
    if(selectionOne.style.display === 'none') {
        selectionOne.style.display = 'block';
        myArrowOne.style.transform = 'rotate(180deg)';
    } else {
        selectionOne.style.display = 'none';
        myArrowOne.style.transform = 'rotate(0deg)';
    }
});

myCompany.addEventListener('click', function () {
    if(selectionTwo.style.display === 'none') {
        selectionTwo.style.display = 'block';
        myArrowTwo.style.transform = 'rotate(180deg)';
    } else {
        selectionTwo.style.display = 'none';
        myArrowTwo.style.transform = 'rotate(0deg)';
    }
});

myConnect.addEventListener('click', function () {
    if(selectionThree.style.display === 'none') {
        selectionThree.style.display = 'block';
        myArrowThree.style.transform = 'rotate(180deg)';
    } else {
        selectionThree.style.display = 'none';
        myArrowThree.style.transform = 'rotate(0deg)';
    }
});
