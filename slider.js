const slider = document.getElementById('slider');
const sliderImages = Array.from(slider.children);
const prevBtn = document.getElementById('left-arrow');
const nextBtn = document.getElementById('right-arrow');
let currentIdx = 0;

prevBtn.addEventListener('click', (e) => handleClick(e.target));
nextBtn.addEventListener('click', (e) => handleClick(e.target));
sliderImages.forEach((el, idx) => el.addEventListener('click', (e) => handleImgClick(e.target, idx)));

sliderImages[currentIdx].classList.add('big');

function handleClick(el){
    sliderImages[currentIdx].classList.remove('big');
    switch(el){
        case prevBtn:
            currentIdx === 0
            ? currentIdx = (sliderImages.length -1)
            : currentIdx--;
        break;
        case nextBtn:
            currentIdx === (sliderImages.length -1) 
            ? currentIdx = 0
            : currentIdx++;
        break;
    };
    sliderImages[currentIdx].classList.add('big');
};

function handleImgClick(target, idx){
    sliderImages[currentIdx].classList.remove('big');
    currentIdx = idx;
    target.classList.add('big');
};