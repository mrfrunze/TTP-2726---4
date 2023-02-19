window.onload = function () {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav");
  let body = document.querySelector("body");
  let links = document.querySelectorAll(".hero li a");
  let btnUp = document.querySelector(".arrow-btn-up");
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("hidden");
    if(window.pageYOffset < 300) btnUp.classList.remove("btn-visible");
    else if(window.pageYOffset > 300 && body.classList.contains("hidden")) btnUp.classList.remove("btn-visible")
    else btnUp.classList.add("btn-visible");
  })

  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    })
  }

  window.addEventListener("scroll", function () {
    let headerFx = this.document.querySelector(".header-fixed");
    let scrollTop = window.pageYOffset;
    if (scrollTop > 80) headerFx.classList.add("header-fixed__bg")
    else { headerFx.classList.remove("header-fixed__bg") }
  })

  const buttonUp = {
    el: document.querySelector('.arrow-btn-up'),
    show() {
      this.el.classList.add('btn-visible');
    },
    hide() {
      this.el.classList.remove('btn-visible');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 300 ? this.show() : this.hide();
      });
      document.querySelector('.arrow-btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  buttonUp.addEventListener();
}
