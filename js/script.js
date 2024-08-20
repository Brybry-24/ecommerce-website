let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#search-btn').onclick = () =>{
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
      loginForm.classList.remove('active');
};

//  document.querySelector('#login-btn').onclick = () =>{
//      loginForm.classList.toggle('active');
//       navbar.classList.remove('active');
//       searchForm.classList.remove('active'); 
//  };

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}


 window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
 }


 var swiper = new Swiper(".home-slider", {
   loop: true,
   grapCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

 var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grapCursor: true,
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grapCursor: true,
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
}); 


var swiper = new Swiper(".logo-slider", {
  loop: true,
  grapCursor: true,
  
  breakpoints: {
   450: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    
    640: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      // spaceBetween: 40,
    },
    1000: {
      slidesPerView: 5,
      // spaceBetween: 50,
    },
  },
}); 
// window.onscroll = () =>{
//    navbar.classList.remove('active');
//    searchForm.classList.remove('active');
//    loginForm.classList.remove('active');
//    contactInfo.classList.remove('active');
// }

// var swiper = new Swiper(".home-slider", {
//    loop:true,
//    grabCursor:true,
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
// });

// var swiper = new Swiper(".reviews-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".blogs-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".logo-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       450: {
//          slidesPerView: 2,
//        },
//       640: {
//         slidesPerView: 3,
//       },
//       768: {
//         slidesPerView: 4,
//       },
//       1000: {
//         slidesPerView: 5,
//       },
//    },
// });

function sendMail() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_b14je8k","template_jqfam1c",templateParams)
    .then(function(response) {
      console.log("Email sent successfully!");
    }, function(error) {
      console.log("Error sending email:", error);
    });
}