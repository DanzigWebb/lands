const slider = () => {
    const slideWrapper = document.querySelector('.slider__items');
    const btns = document.querySelectorAll('.slider__btn');
    const setCss = index => `webkit-transform: translateX(-${index * 100}%); transform: translateX(-${index * 100}%)`;
    const slideThis = index => slideWrapper.setAttribute('style', setCss(index));

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            slideThis(index);
        });
    });
}
slider();