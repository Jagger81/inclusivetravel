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
    avatar: "https://i.ibb.co/9tBRY9j/icons8-female-profile-100.png",
    name: "Slava | UK",
    p1: "My name is Slava, I joined this business to try to build something outside of my busy accounting role in professional banking and to save money on my own travels.  ",
    p2:"I’ve found that with hard work & dedication you can achieve a lot with this business, even if just part time. I am learning to save on my own travel which is great. I look forward to building this business in time."
},
{
    avatar: "https://i.ibb.co/GpHN8pp/Julia.jpg",
    name: "Julia | Ireland",
    p1: "My name is Julia, travel has always been a big part of my life. From a young age, I asked people to send me postcards from all their travels and I would put them up on my walls and dream about all these amazing places out there. I still have them all and believe my postcard dream collection is extensive. All this dreaming and family traveling eventually led me to study in the field of Tourism. I strongly believe the best investment you can make in life is to travel and learn from the beautiful world that is out there.",
    p2:"And here I am now, 2 kids later and living in a different country myself, this amazing opportunity brings me back to the start of my childhood dreams. I can now bring the world to others in the most relaxing way. I love taking care of people and giving them the best opportunities and experiences to enjoy this beautiful world out there. This opportunity has given me a chance to bring back the high value of the travel agent service...a service that a lot of people underestimate!"
},
  {
    avatar: "https://i.ibb.co/d5D98Zn/Veronica.jpg",
    name: "Veronica | Ireland",
    p1: "I’m Veronica, I’m Lucille’s sister. I joined this just to try save some money on my own trips, which I have been able to do.",
    p2:"This has made a huge difference to me, as I love to travel but with the cost of living going up, it was getting harder to do so. But this has allowed me to travel smarter & save over €2k in the past year on trips I’ve taken."
},
  {
    avatar: "https://i.ibb.co/xsNTQ7m/Ellie.jpg",
    name: "Ellie | Ireland",
    p1: "Hi I’m Ellie, I’m an Operations Director for a busy company. I joined this opportunity to save on corporate & personal travel. Since joining in March 2023, I’ve saved on every trip I’ve taken, which more than covers the monthly cost. ",
    p2:"Lucille has been a very supportive & knowledgeable mentor, who leads from the front. She is always on the end of the phone, ready to answer any questions. What would I say to someone thinking of joining? Do it, it’s low risk with high reward. The community is so supportive, being surrounded by like minded supportive people gives you motivation & support. "
},
{
    avatar: "https://i.ibb.co/1Zz4SB5/Clare.jpg",
    name: "Clare | UK",
    p1: "I love travelling!  Who doesn’t?  Becoming an Independent Travel Agent has given me the opportunity to support my current lifestyle around work, my 2 children & a busy tennis schedule",
    p2:"In my previous employment I booked the company’s travel and realised it was what I was most passionate about.  I hope with this new business venture I can provide fantastic and memorable holidays for all.  I mean, we are only on Earth for a short period of time - let’s explore it while we can!"
},]
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