// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     parallax: true,
//     centeredSlides: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '#homeNext',
//         prevEl: '#homePrev',
//     },
// });

//Countdown
// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//         var t = getTimeRemaining(endtime);

//         daysSpan.innerHTML = t.days;
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }

//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('countdown', deadline);
// AOS.init();


////////////

// $(function() {
//     $('[data-toggle="tooltip"]').tooltip()
// });
// ////
// $('.parallax-window').parallax({ imageSrc: '/assets/img/blog-2.jpg' });
// /////
// $('.btn-colour').on('click', function(e) {
//     var button = $(this);

//     if (button.attr('data-allow-multiple') === undefined) {
//         button.parents('.colours-wrapper').find('.btn-colour').removeClass('active');
//     }

//     button.toggleClass('active');
// });


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





/////////
let carts = document.querySelectorAll('.add-cart');


let products = [{
        id: 1,
        name: 'Norwegg Chair',
        tag: 'chair',
        price: 40,
        inCart: 0
    },
    {
        id: 2,
        name: 'Book',
        price: 17,
        tag: 'book',
        inCart: 0
    },
    {
        id: 3,
        name: 'Another chair',
        price: 35,
        tag: 'chair-2',
        inCart: 0
    },
    {
        id: 4,
        name: 'Your new chair',
        price: 45,
        tag: 'watch',
        inCart: 0
    },
    {
        id: 5,
        name: 'Clock',
        price: 52,
        tag: 'clock3',
        inCart: 0
    },
    {
        id: 6,
        name: 'Beige',
        price: 74,
        tag: 'chair-2',
        inCart: 0
    },

]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    });
};

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}



function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    // console.log(displayCart);
    if (productContainer && cartItems) {
        productContainer.innerHTML = '';
        console.log("hello");
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <i class="fas fa-times"></i>
            <img src=".assets/img/${item.tag}.jpg">
            <span>${item.name}</span>
            <div class="price">${item.price},00$</div>
            <div class="quantity">
            <i class="fas fa-plus"></i>
            <span>${item.inCart}</span>
            <i class="fas fa-minus"></i>
            </div>
            <div class="total">
            ${item.inCart * item.price},00
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        ${cartCost},00
        </h4>
        `
    }
}




displayCart();

onloadCartNumbers();