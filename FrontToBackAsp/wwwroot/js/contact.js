// import Swiper from 'swiper';
// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     slidesPerView: 6,
//     loop: true,
//     direction: 'vertical',
//     loop: true,
//     breakpoints: {
//         1200: {
//             slidesPerView: 5
//         },
//         991: {
//             slidesPerView: 3
//         },
//         768: {
//             slidesPerView: 2
//         }
//     },

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true
//     },

//     // // Navigation arrows
//     // navigation: {
//     //     nextEl: '.swiper-button-next',
//     //     prevEl: '.swiper-button-prev',
//     // },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    loop: true,
    parallax: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5
        },
        991: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        }
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '#homeNext',
        prevEl: '#homePrev',
    },
});