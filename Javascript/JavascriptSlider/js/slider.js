// User defined data
data=[
    {
        id: 1,
        img: 'img/slider/1.png',
    }
    ,
    {
       id: 2,
        img: 'img/slider/2.jpg',
    }
    ,
    {
        id: 3,
        img: 'img/slider/3.png',
    }
    ,
    {
        id: 4,
        img: 'img/slider/4.jpg',
    }
   
]

let sliderSettings={
    slidePosition: 0,
    slideWidth: 400,
    sliderHeight: 800,
    slideAmount: 400,
    slideCount:2,
    direction: 'vertical'
}


// Select elements
let slides=document.querySelector('.slides');
let slider=document.querySelector('#slider');
let sliderDots=document.querySelector('.slider-dots');

// Set styles
slides.style.width=`${data.length*sliderSettings.slideWidth}px`;
slider.style.width=`${sliderSettings.slideWidth}px`;
slider.style.height=`${sliderSettings.sliderHeight}px`;
// Generate slides
function generateSlides(data){
    slides.innerHTML='';
    sliderDots.innerHTML='';
    for (let i=0; i<data.length; i++){
        let dot=`<span></span>`;
        let template=`
        <div class="slide" style='width:${sliderSettings.slideAmount}px;'>
            <img src="${data[i].img}" alt="">
        </div>
        `
        slides.innerHTML+=template;
        sliderDots.innerHTML+=dot;
    }
}
// Slide Left
function slideLeft(e){
    e.preventDefault();
    if(sliderSettings.slidePosition<=0){
        sliderSettings.slidePosition=data.length*sliderSettings.slideAmount;
    }
    sliderSettings.slidePosition-=sliderSettings.slideAmount;
    slides.style.transform=`translateX(-${sliderSettings.slidePosition}px)`;
    console.log(sliderSettings.slidePosition)
    
    
}
// Slide Right
function slideRight(e){
    e.preventDefault();
    if(sliderSettings.slidePosition>data.length*(sliderSettings.slideAmount-1)){
        slidePosition=0;
    }
    sliderSettings.slidePosition+=sliderSettings.slideAmount;
    slides.style.transform=`translateX(-${sliderSettings.slidePosition}px)`;
    console.log(sliderSettings.slidePosition)
    
    
}


// Start app
generateSlides(data);