const OUR_CLIENTS = [
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/hm-logo.png',
        altText : ''
    },
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/aisd-logo.png',
        altText : ''
    },
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/adb-logo.png',
        altText : ''
    },
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/icddrb-logo.png',
        altText : ''
    },
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/hsbc-logo.png',
        altText : ''
    },
    {
        imgSrc  : 'https://www.deshcatering.com/wp-content/uploads/2020/05/bsmmu-logo.png',
        altText : ''
    }
];


(function($){
    $(document).ready(function(){

        renderBrandSlider();

        lightGallery(document.getElementById('lightgallery'), {
            speed: 500,
            // ... other settings
        });
    
    });
})(jQuery)


function renderBrandSlider()
{
    let lis = '';
    OUR_CLIENTS.forEach((brand)=>{
        lis += `<li><img src="${brand.imgSrc}" alt="${brand.altText}" draggable="false"/></li>`
    });
    $('#custom-brand-slider').html(lis);
    $("#custom-brand-slider").rcbrand({
        // options here
        autoPlay: {
            enable: true,
            interval: 2000,
        },        
        infinite:true,
        animationSpeed: 1000

      });
}