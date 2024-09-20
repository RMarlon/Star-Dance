let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSilide = 0

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSilide--;
    if(currentSilide < 0){
        currentSilide = totalSlides -1;
    }
    updateMargin();
}

function goNext(){
    currentSilide++;
    if(currentSilide > (totalSlides -1)){
        currentSilide = 0;
    }
    updateMargin()
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSilide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);