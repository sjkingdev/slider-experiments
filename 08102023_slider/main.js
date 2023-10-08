
const locations = [
    {
        id: '1',
        title: 'Oxford',
        image2: './assets/img/image_one.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        image2: './assets/img/image_two.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        image2: './assets/img/image_three.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=three',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        image2: './assets/img/image_four.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=four',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        image2: './assets/img/image_five.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=five',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        image2: './assets/img/image_six.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=six',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        image2: './assets/img/image_seven.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=seven',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        image2: './assets/img/image_eight.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=eight',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        image2: './assets/img/image_nine.jpg',
        image: 'https://picsum.photos/300',
        // image: 'https://placehold.co/600x400?text=nine',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        image2: './assets/img/image_ten.jpg',
        image: 'https://picsum.photos/300',
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

// const slideTitle = locations.title;
// const slideImage = locations.image;
// const slideCTA = locations.ctaLink;

// // create title div
// let slide_title = document.createElement("div");
// slide_title.setAttribute('class', 'location_title');
// slide_title.setAttribute('title', locations.title);
// main_slide.appendChild(slide_title);

// // create title image
// let slide_image = document.createElement("img");
// slide_image.setAttribute('class', 'location_image');
// slide_image.setAttribute('src', slideImage);
// main_slide.appendChild(slide_image);

// // create title div
// let slide_cta = document.createElement("div");
// slide_cta.setAttribute('class', 'location_cta');
// slide_cta.setAttribute('title', slideCTA);
// main_slide.appendChild(slide_cta);




const mainSlide = document.querySelector(".slide");

const thumbSlide = document.querySelector(".slide");

window.addEventListener("DOMContentLoaded", function () {

    const showMainSlide = locations.map((location, index) => {
        return `
                <row>
                <div class="main_slide_wrapper">
                <div class="main_slide_item" key=${location.id}>
                    
                    <div class="card-body">
                    <img src=${location.image} class="card-img-top" alt="${location.title} image">
                        <h5 class="card-title">${location.title}</h5>
                    </div>
                </div>
                </div>
                <hr>
                <div class="thumbnail_slide_wrapper">
                <div class="thumbnail_slide_item" key=${location.id}>
                        <h5 class="card-title">${location.title}</h5>
                        <img src=${location.image} class="card-img-top" alt="${location.title} image">
                        <a target="blank" href=${location.ctaLink} class="btn btn-primary">Go</a>
                </div>
                </div>       
                
                <hr>
       ÷
                </row>
        `;
    });

    mainSlide.innerHTML = showMainSlide;

    // const showThumbnailSlide = locations.map((location, index) => {
    //     return `
    //             <div class="thumbnail_slide_wrapper">
    //             <div class="thumbnail_slide_item" key=${location.id}>
    //                     <h5 class="card-title">${location.title}</h5>
    //                     <img src=${location.image} class="card-img-top" alt="${location.title} image">
    //                     <a target="blank" href=${location.ctaLink} class="btn btn-primary">Go</a>
    //             </div>
    //             </div>          
    //     `;
    // });


    // thumbSlide.innerHTML = showThumbnailSlide;
});
