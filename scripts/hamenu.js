// const hamButton = document.querySelector('.menu');
// const navigation = document.querySelector('.nav');

// hamButton.addEventListener('click', () => {
//     hamButton.classList.toggle('open');
//     navigation.classList.toggle('open');
// });

const btn = document.querySelector('.menu');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
});
