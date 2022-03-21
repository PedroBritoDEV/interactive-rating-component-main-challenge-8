var btn_1 = document.querySelector('.bottom-1');
var btn_2 = document.querySelector('.bottom-2');
var btn_3 = document.querySelector('.bottom-3');
var btn_4 = document.querySelector('.bottom-4');
var btn_5 = document.querySelector('.bottom-5');
var btn_input = document.querySelector('.submit');

var mainContent = document.querySelector('.main-content');
var thanksContent = document.querySelector('.thanks')

var parent_ = document.querySelectorAll('.buttons > *');

function vote(rate) {
   for (i = 0; i < parent_.length; i++) {
       parent_[i].classList.remove('active');
   };
    if (rate === 1){
        btn_1.classList.add('active');
    }else if (rate === 2) {
        btn_2.classList.add('active');
    }else if (rate === 3) {
        btn_3.classList.add('active');
    }else if (rate === 4) {
        btn_4.classList.add('active');
    }else{
        btn_5.classList.add('active');
    }
};

btn_input.addEventListener('click', () => {

    let paragraph = document.querySelector('.text-result')
    
    if (btn_1.classList.contains('active')){
        mainContent.style.display = 'none';
        thanksContent.style.display = 'flex';
        paragraph.innerText = 'You select 1 out of 5';
    }else if (btn_2.classList.contains('active')){
        mainContent.style.display = 'none';
        thanksContent.style.display = 'flex';
        paragraph.innerText = 'You select 2 out of 5';
    }else if (btn_3.classList.contains('active')){
        mainContent.style.display = 'none';
        thanksContent.style.display = 'flex';
        paragraph.innerText = 'You select 3 out of 5';
    }else if (btn_4.classList.contains('active')){
        mainContent.style.display = 'none';
        thanksContent.style.display = 'flex';
        paragraph.innerText = 'You select 4 out of 5';
    }else if (btn_5.classList.contains('active')){
        mainContent.style.display = 'none';
        thanksContent.style.display = 'flex';
        paragraph.innerText = 'You select 5 out of 5';
    }else {
        alert('select anyone')
    }
});