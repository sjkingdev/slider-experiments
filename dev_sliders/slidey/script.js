
const location = [
    {
       id: '1',
       title: 'Oxford',
       image: '../assets/img/image_one.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '2',
       title: 'Hove',
       image: '../assets/img/image_two.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '3',
       title: 'London',
       image: '../assets/img/image_three.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '4',
       title: 'Crouch End',
       image: '../assets/img/image_four.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '5',
       title: 'Battersea',
       image: '../assets/img/image_five.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '6',
       title: 'Hackney',
       image: '../assets/img/image_six.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '7',
       title: 'Hammersmith',
       image: '../assets/img/image_seven.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '8',
       title: 'Putney',
       image: '../assets/img/image_eight.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '9',
       title: 'Archway',
       image: '../assets/img/image_nine.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '10',
       title: 'Nunhead',
       image: '../assets/img/image_ten.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }
   
   ];

   $(document).ready(function(){  
      for(var i=0 ; i< locations.image.length ; i++) {
        $('<div class="item"><img src="'+imageCollection[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    
      }
      $('.item').first().addClass('active');
      $('.carousel-indicators > li').first().addClass('active');
      $('#carousel-example-generic').carousel();
    });

   // var data='';
   // data='<div id="relatedItemCarousel"  class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3000"  >';
   //         data=data+'<div class="carousel-inner" id="relatedItemCraousel1">'; 
   // //caraousel content
   // data='</div>'
   // data=data+'<a class="left carousel-control" id="related-item-carousel-control-left" href="#relatedItemCarousel" role="button" data-slide="prev" >'+
   //         '<i class="ion-ios-arrow-back size-32" ></i></a>'+            
   //     '<a class="right carousel-control" id="related-item-carousel-control-right" href="#relatedItemCaraousel" role="button" data-slide="next" >'+
   //         '<i class="ion-ios-arrow-forward size-32" ></i>'+
   //     '</a></div>';
   //   $('#mycarousel').html(data);