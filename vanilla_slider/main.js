
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

const mainSlide = document.querySelector(".slide");

const showMainSlide = locations.map((location, index) => {
    return `       
            <div class="main_slide_item" key=${location.id}>
                <div class="slide-body">
                <img src=${location.image} class="card-img-top" alt="${location.title} image">
                    <h5 class="card-title">${location.title}</h5>
                </div>
            </div> 
        `;
});

mainSlide.innerHTML = showMainSlide;
