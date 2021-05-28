window.onload = function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const header = document.querySelector('.header');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        header.classList.toggle('active');
    });

    const prices = Array.from(document.getElementsByClassName('main-flexBox__card'))
        .map((it => it.children))
        .map(it => it[3].innerHTML).sort();
    console.log(prices);

    const btn = Array.from(document.querySelectorAll('.main-flexBox__btn'));
        btn.map(it => it.addEventListener('click', () => {

            it.classList.add('active');
            it.textContent = 'Продан'

        }))
    const svg = Array.from(document.querySelectorAll('path'));
        svg.map(it => it.addEventListener('click', () => {
            it.setAttribute('fill', 'red')
            alert('Добавлено в избранное')
        }))

    $(window).scroll(function () {
        if($(this).scrollTop() > 800){
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    })
};






