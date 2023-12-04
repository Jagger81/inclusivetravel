/**
* Template Name: Tempo
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*testimonials section*/
var testiomnialData = [
  
  {
    avatar: "https://i.ibb.co/7X90Bx7/amy-cropped.png",
    name: "Amy | UK",
    p1: "Amy works in the medical device industry, but travel is her main passion!  She has been part of the team since 2020 and has gained vast experience in that time, despite this being a side hustle.",
    p2:"Although the financial gains have massively benefited her, she equally believes that this opportunity has changed her life in so many other ways.  It has taken her on a personal development journey, resulting in a fresh mindset, increase self-confidence, and it has also helped her develop existing and new relationships."
},
{
    avatar: "https://i.ibb.co/K6ZBZjB/lucille.png",
    name: "Lucille | Ireland",
    p1: "Lucille is a mum of 2 boys and joined the team in February 2023 when the programme launched in Ireland.  She knew instantly that it was what she was looking for.",
    p2:"She has managed to use the programme to fulfil her and her family's desire for travel and has earned and saved money along the way - all by booking holidays and introducing other travel-enthusiasts to the programme"
},
  {
    avatar: "https://img.freepik.com/free-photo/half-profile-beautiful-redhead-girl-with-healthy-freckled-skin-hair-bun-smiling_273609-9363.jpg?w=1060&t=st=1701720291~exp=1701720891~hmac=1f5e75d156bfbff440cd8c3b976ff7b4c93e2a8fa77a2c2990d9e9a357128e91",
    name: "Elaine | Ireland",
    p1: "Elaine joined for personal travel reasons and to start a business that had flexibility.",
    p2:"She loves that she can put in as many or as little hours as she possibly can and yet still manage to save so much money on her and her family's travel costs, with access to all the best deals."
},
  {
    avatar: "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=1060&t=st=1701633753~exp=1701634353~hmac=a9e78fd40d8a2d1c163b8accddab5adad012eb82ea85f9c8fb9f978b3464d49f",
    name: "Adele | UK",
    p1: "Adele initially joined to team because of her passion for travel (she is a travel/lifestyle blogger).",
    p2:"She has not only saved a lot of money, but has helped others tailor and book some wonderful holidays/experiences; earning commission whilst doing so!  She's loves being part of the team as she feels it is a very friend and supportive environment and is great to speak the same language of 'Travel'."
},
{
    avatar: "https://i.ibb.co/X5WqTYX/zara-cropped.png",
    name: "Zara | UK",
    p1: "Zara is a busy Mom of 3 tiny humans and also works full-time, so this is a side hustle that neatly fits un around her busy lifestyle. She has built residual income as a result of the role, which will go towards her children's future",
    p2:"She believes that everyone deserves that have the life they dream of; and can promise you that this opportunity will 100% manifest as an increased love of travel, financial gains and self-development."
},
  {
      avatar: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?w=1060&t=st=1701720431~exp=1701721031~hmac=753d5f1cd8fb8d4c87aa289a55b1dbb641755086ab8f3f1f9e55d99a350c54bf",
      name: "Juanita | UK",
      p1: "Juanita was enticed to join the team as a travel advisor, due to her experience of working in the travel industry.",
      p2:"She enjoys the independance gained from working in a freelance role and has through her love of travel has helped to ehance the team performance."
},
  {
      avatar: "https://i.ibb.co/zJKFPp1/louise.jpg",
      name: "Louise | Ireland",
      p1: "Louise recently joined the team and is excited about the new adventure.  She was drawn to this opportunity by a huge passion for travel and exploring.",
      p2:"From Nepal to New York and Reno, she has seen so many wonderful places and shared such great experiences with everyone she met along the way.  She says the support and encouragement from the team has been incredible and is excited to adapt her project management skills to help build her new business!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/excited-beautiful-young-woman-smiling-hopeful-camera_176420-30192.jpg?w=1060&t=st=1701720501~exp=1701721101~hmac=d32d0b2ba9b26e470e7181cbda2f38b1891a3598ed4dd9d20d1f35a7e2be2507",
      name: "Orna | Ireland",
      p1: "Orna recently joined the team and will soon provide an update on her experience to date",
      p2:""
  }, {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "Rochelle | Ireland",
      p1: "Rochelle recently joined the team and will soon provide an update on her experience to date",
      p2:""
  }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.p1}</p><p>${i.p2}</p></div></div>`

const swiper = new Swiper('#carouselContainer', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
      rotate: 0,
      depth: 800,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  autoplay: { delay: 5000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1
  swiper.update()
}
/*testimonials section*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()