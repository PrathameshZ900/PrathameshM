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
let currentIndex = 0;
    const container = document.querySelector('.about-containers');
    const totalProjects = document.querySelectorAll('.details-container').length;

    function showProject(index) {
        const itemWidth = document.querySelector('.details-container').offsetWidth;
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % totalProjects;
        showProject(currentIndex);
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
        showProject(currentIndex);
    }

    // Add event listeners for next and previous buttons
    document.addEventListener('DOMContentLoaded', showProject(currentIndex));
    document.querySelector('.arrow').addEventListener('click', nextProject);