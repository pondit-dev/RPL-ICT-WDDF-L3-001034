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


        window.setInterval(runClock, 500);


        $(document).on('click', '#contact-submit-btn', function(){
            const modal = $('#contact-submit-response-modal').modal('show');
        });


        $(document).on('click', '.card-gallary img', function(){
            const html = `<img src="${this.src}" class="img-fluid">`;
            $('#galary-modal .modal-body').html(html);
            $('#galary-modal .modal-title').html(this.alt);
            $('#galary-modal').modal('show');
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

function runClock()
{
    const currentTimeObj = new Date();
    const myTime = `${currentTimeObj.getHours()}:${currentTimeObj.getMinutes()}:${currentTimeObj.getUTCSeconds()}`;
    $('#clock').val(myTime);

}