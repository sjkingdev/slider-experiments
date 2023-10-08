
const locations = [
    {
        id: '1',
        title: 'Oxford',
        image: '../assets/img/img_one.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        image: '../assets/img/img_two.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        image: '../assets/img/img_three.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=three',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        image: '../assets/img/img_four.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=four',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        image: '../assets/img/img_five.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=five',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        image: '../assets/img/img_six.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=six',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        image: '../assets/img/img_seven.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=seven',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        image: '../assets/img/img_eight.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=eight',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        image: '../assets/img/img_nine.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=nine',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        image: '../assets/img/img_ten.jpg',
        // image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=ten',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }

];



// get slider inner container
const sInner = document.querySelector(".slider_inner");

// create slide div
const main_slide = document.createElement("div");

// add class name
main_slide.setAttribute('class', 'slide');

// add slide div to slide inner container
sInner.appendChild(main_slide);

const mainSlide = document.querySelector(".slide");

const thumbSlide = document.querySelector(".slide");

const nextSlideHandle = document.createElement("button");
nextSlideHandle.setAttribute("class", "slider-handle");
nextSlideHandle.setAttribute("id", "next-slider-handle");


const prevSlideHandle = document.createElement("button");
prevSlideHandle.setAttribute("class", "slider-handle");
prevSlideHandle.setAttribute("id", "prev-slider-handle");


window.addEventListener("DOMContentLoaded", function () {

    const showMainSlide = locations.map((location, index) => {
        return `
              
                <div class="main_slide_wrapper" style="display: flex; width: 100%;">
                <div class="main_slide_item" key=${location.id}>
                    
                    <div class="slide-body-image" style="background: url(${location.image});">
                        <h5 class="card-title" style="background: lightblue; padding: 1rem; color: #fff; text-align: center;">${location.title}</h5>
                    </div>
                </div>
                </div>

                     
   
        `;
    });

    mainSlide.innerHTML = showMainSlide;

    const showThumbSlide = locations.map((location, index) => {
        return `
              
                <div class="thumb_slide_wrapper" style="display: flex; width: 100%;">
                <div class="thumb_slide_item" key=${location.id}>
                    
                    <div class="slide-body-image" style="background: url(${location.image});">
                        <h5 class="card-title" style="background: lightblue; padding: 1rem; color: #fff; text-align: center;">${location.title}</h5>
                        <a class="cta_link" href=${location.ctaLink}>Go</a>
                    </div>
                </div>
                </div>

                     
   
        `;
    });

    thumbSlide.innerHTML = showThumbSlide;




});
