function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
//   var typed = new Typed(".typing", {
//     strings: ["Full Stack Developer", "Front-End Developer", "Coder", "Python Developer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

// var typed1 = new Typed(".name", {
//     strings: ["Prathamesh Magar"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

// var typed2 = new Typed("#full", {
//     strings: ["👋 Hey I'm Prathamesh and"],
//     typeSpeed: 80,
//     backSpeed: 60,
//     loop: true
// });


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    
    let body = "Name :" + name + "</br> E-mail :" + email + "</br> Subject :" + subject + "</br> Message :"+ message

    Email.send({
        SecureToken :"ce895eed-26fd-4fd3-a7b3-20036bf7197f",
        Password : "482AE971BE4C9D61FEC11A563AA97A75326F",
        To : 'prathameshma1@gmail.com',
        From : "prathameshma1@gmail.com",
        Subject : "Message From Contact From",
        Body : body
    }).then(
      message => alert(message)
    );
  }