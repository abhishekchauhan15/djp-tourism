// window.onload=scrollTo(0, 0);     


//set height to twiiter, partner, governance item
jQuery(window).on('load', function() {
    new WOW().init();
    // new Lightbox();
})

// jQuery(document).ready(function($){
//     $('[data-toggle="tooltip"]').tooltip();   
// });




jQuery(document).ready(function() {
    jQuery('.events-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 700,
        autoplaySpeed: 700,
        smartSpeed: 700,
        responsiveRefreshRate: 100
    });

    jQuery('.events-slider-container .open-icon').click(function(e) {
        const eventsSliderContainer = document.querySelector('.events-slider-container');
        eventsSliderContainer.classList.toggle('active');
    })

    jQuery('.events-slider-container .close-icon').click(function(e) {
        const eventsSliderContainer = document.querySelector('.events-slider-container');
        eventsSliderContainer.classList.toggle('active');
    })

    jQuery('.homepage-banner-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 800,
        autoplaySpeed: 800,
        navSpeed: 800,
        smartSpeed: 800,
        // navText: ['<svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 2L2 19L19 36" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 36L19 19L2 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
        navText: ['<i class="fas fa-chevron-left fa-3x"></i>', '<i class="fas fa-chevron-right fa-3x"></i>'],
        responsiveRefreshRate: 100
    });

    jQuery('.chardham-status-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        fluidSpeed: 700,
        autoplaySpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        responsiveRefreshRate: 100
    });
});
jQuery(document).ready(function() {
    jQuery('.hotspot-to-explore-carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 700,
        autoplaySpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
            }
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.what-s-happening-carousel').owlCarousel({
        loop: true,
        items: 4,
        dots: false,
        fluidSpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            764: {
                items: 3
            },
            1000: {
                items: 4,
            }
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.what-s-trending-carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 9,
        dots: false,
        nav: true,
        fluidSpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
            }
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.near-by-attraction-carousel').owlCarousel({
        loop: true,
        items: 4,
        margin: 10,
        dots: false,
        fluidSpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            800: {
                items: 3
            },
            1100: {
                items: 4,

            }
        }
    });

    jQuery('.what-to-do-carousel').owlCarousel({
        loop: true,
        items: 3,
        margin: 9,
        dots: false,
        fluidSpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
            }
        }
    });

    // const hotelFeatureImageCarousel = jQuery('.hotel-feature-image-carousel').owlCarousel({
    //     loop: true,
    //     items: 1,
    //     dots: false,
    //     nav: true,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     fluidSpeed: 700,
    //     autoplaySpeed: 700,
    //     navSpeed: 700,
    //     smartSpeed: 700,
    //     navText: ['<i class="fas fa-chevron-left fa-2x"></i>','<i class="fas fa-chevron-right fa-2x"></i>'],
    //     responsiveRefreshRate: 100
    // });

    // Dark Mode/ Blind Mode

    let dark_mode = document.createElement("style");
    dark_mode.append(document.createTextNode(`body{ color: #fff !important; background: #000 !important;}`));

    const lightbtn = document.querySelector('.light-mode');
    const darkbtn = document.querySelector('.dark-mode');

    if (darkbtn) {
        darkbtn.addEventListener('click', () => {
            document.head.appendChild(dark_mode)
        });
    }
    if (lightbtn) {
        lightbtn.addEventListener('click', () => {
            document.head.removeChild(dark_mode)
        });
    }

    // Dark Mode/ Blind Mode


    // Screen Reading Font Options

    let textSize = document.createElement("style");

    const textControl = (e) => {
        textSize.append(document.createTextNode(`:root{font-size: ${e}px}`))
    }

    const aPlus = document.querySelector('.a-plus');
    const aNormal = document.querySelector('.a-normal');
    const aMinus = document.querySelector('.a-minus');

    if (aPlus) {
        aPlus.addEventListener('click', () => {
            textControl(18)
            document.head.appendChild(textSize)
        })
    }
    if (aNormal) {
        aNormal.addEventListener('click', () => {
            textControl(16)
            document.head.appendChild(textSize)
        })
    }
    if (aMinus) {
        aMinus.addEventListener('click', () => {
            textControl(14)
            document.head.appendChild(textSize)
        })
    }


    // Screen Reading Font Options


    // 13 Districts Map Javascript

    const aboutLocation = document.querySelectorAll('.aboutLocation');
    const icons = document.querySelectorAll('.icons');
    const regions = document.querySelectorAll('.region');
    const closeBtn = document.querySelectorAll('.close-btn');
    if (regions == ![]) {
        regions.forEach((e, index) => {
            e.addEventListener('mouseover', () => {
                aboutLocation.forEach((element) => element.style.display = "none");
                aboutLocation[index].style.display = "block";
            })
        })
        closeBtn.forEach((e, index) => {
            e.addEventListener('click', () => {
                aboutLocation[index].style.display = "none";
            })
        })
    }


    // 13 Districts Map Javascript


    // Hotel page LightBox

    const currentItem = document.querySelectorAll('.hotel .slide-item img');
    const hotelLightBox = document.querySelector('.hotel.custom-lightbox');
    const hotelLightBoxClose = document.querySelector('.hotel.custom-lightbox .close-lightbox');
    const hotelLightBoxBody = document.querySelector('.hotel.custom-lightbox .lightbox-body');

    if (currentItem == ![]) {
        currentItem.forEach((element) => {
            element.addEventListener('click', (event) => {
                hotelFeatureImageCarousel.trigger('stop.owl.autoplay');
                hotelLightBoxBody.innerHTML = `<div class="container overflow-auto text-center"><img src="${event.target.src}" class="img-fluid" style="min-width: 700px"/></div>`;
                hotelLightBox.classList.add('active')
            })
        })

        hotelLightBoxClose.addEventListener('click', (element) => {
            hotelLightBox.classList.remove('active');
            hotelFeatureImageCarousel.trigger('play.owl.autoplay');
        })
    }

    // Hotel page LightBox

    // $('#exampleModal').on('show', function (event) {
    //     console.log('dfghjkl')
    //     var button = $(event.relatedTarget)
    //     var recipient = button.data('whatever')
    //     var modal = $(this)
    //     modal.find('.modal-title').text('New message to ' + recipient)
    //     modal.find('.modal-body input').val(recipient)
    // })



});

window.onload = () => {
    const hotelFeatureImageCarousel = jQuery('.hotel-feature-image-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 10,
        dots: false,
        nav: true,
        // autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 700,
        autoplaySpeed: 700,
        navSpeed: 700,
        smartSpeed: 700,
        navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
        responsiveRefreshRate: 100
    });

    let imgsrc = '';

    jQuery(".myBtn").click(function(event) {
        imgsrc = event.currentTarget.src
        // console.log(imgsrc)
        jQuery("#exampleModal").modal("show");
    });
    jQuery("#exampleModal").on('show.bs.modal', function(event) {
        var modal = jQuery(this)
        console.log(imgsrc)
        modal.find('.modal-body img')[0].src = imgsrc;
        modal.find('.modal-body img')[0].onload = () => {
            modal.find('.modal-body')[0].style.height = modal.find('.modal-body img')[0].height;
        }
        hotelFeatureImageCarousel.trigger('stop.owl.autoplay');
    });
    jQuery("#exampleModal").on('hide.bs.modal', function() {
        hotelFeatureImageCarousel.trigger('play.owl.autoplay');
    });
}


var lastLevelParent = document.querySelectorAll('.last-level');
lastLevelParent.forEach((e) => {
    e.parentNode.classList.add('d-block')
})

jQuery(document).ready(function($) {
    $('.dest-nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
});


jQuery(document).ready(function($) {
    let type, src;
    $(".repoModal").click(function(event) {
        type = event.currentTarget.dataset.type;
        src = event.currentTarget.dataset.src;

        $("#repoModal").modal("show");
    });
    $("#repoModal").on('show.bs.modal', function(event) {
        const body = document.querySelector('#repoModal .modal-body');
        if (type === 'video') {
            body.innerHTML = `<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4"></video>`
        } else {
            body.innerHTML = `<img src="${src}" class="img-fluid w-100" />`
        }
    });
});

jQuery(document).ready(function($) {

    let imgsrc = '';
    let header = '';
    let desc = '';
    $(".attractionModal").click(function(event) {
        imgsrc = event.currentTarget.getElementsByTagName('img')[0].getAttribute('src');
        header = event.currentTarget.querySelector('figcaption h4').innerText;
        desc = event.currentTarget.dataset.description;
        jQuery("#attractionModal").modal("show");
    });
    $("#attractionModal").on('show.bs.modal', function(event) {
        var modal = jQuery(this)
        modal.find('#attractionModalLabel')[0].innerText = header;
        modal.find('.modal-body img')[0].src = imgsrc;
        modal.find('.modal-body p')[0].innerText = desc;
    });
});


jQuery(".blink").click(function(event) {
    var left = (screen.width - 1200) / 2;
    var top = (screen.height - 650) / 4;
    window.open('https://apigw.jio.ril.com/jioplayer/?url=https://cdndp.cdn.jio.com/packagerx/Chardham_Darshan/Chardham_Darshan.m3u8', '_top', 'left=' + left + ',top=' + top + ',width=1200,height=650,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');
});