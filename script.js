const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let contactInfo = document.querySelector(".contact-info-conatiner");
document.querySelector("#contact-btn").onclick = () => {
  contactInfo.classList.toggle("active");
};

document.querySelector("#close-contact-btn").onclick = () => {
  contactInfo.classList.remove("active");
};

// gsap animation

const cards = gsap.utils.toArray(".card");

cards.forEach((card) => {
  const anim = gsap.fromTo(
    card,
    {
      autoAlpha: 0,
      y: 20,
      x: -20,
      rotate: -6,
    },
    {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      x: 0,
      rotate: 0,
      delay: 0.3,
    }
  );

  ScrollTrigger.create({
    trigger: card,
    animation: anim,
  });
});

let imgChange1 = document.getElementById("img1");
let imgChange2 = document.getElementById("img2");
let imgChange3 = document.getElementById("img3");
let imgChange4 = document.getElementById("img4");
let imgChange5 = document.getElementById("img5");
let imgChange6 = document.getElementById("img6");
let imgChange7 = document.getElementById("img7");
let imgChange8 = document.getElementById("img8");
let imgChange9 = document.getElementById("img9");

let itemBox1 = document.getElementById("item1");
let itemBox2 = document.getElementById("item2");
let itemBox3 = document.getElementById("item3");
let itemBox4 = document.getElementById("item4");
let itemBox5 = document.getElementById("item5");
let itemBox6 = document.getElementById("item6");
let itemBox7 = document.getElementById("item7");
let itemBox8 = document.getElementById("item8");
let itemBox9 = document.getElementById("item9");

// first img
itemBox1.addEventListener("mouseover", () => {
  imgChange1.src = "skill-img/html.png";
});

itemBox1.addEventListener("mouseout", () => {
  imgChange1.src = "skill-img/html2.png";
});

// 2nd image
itemBox2.addEventListener("mouseover", () => {
  imgChange2.src = "skill-img/css.png";
});

itemBox2.addEventListener("mouseout", () => {
  imgChange2.src = "skill-img/css2.png";
});

// 3rd image
itemBox3.addEventListener("mouseover", () => {
  imgChange3.src = "skill-img/js.png";
});

itemBox3.addEventListener("mouseout", () => {
  imgChange3.src = "skill-img/js2.png";
});

// 4th image
itemBox4.addEventListener("mouseover", () => {
  imgChange4.src = "skill-img/boot.png";
});

itemBox4.addEventListener("mouseout", () => {
  imgChange4.src = "skill-img/boot2.svg";
});

// 5th image
itemBox5.addEventListener("mouseover", () => {
  imgChange5.src = "skill-img/tailwind.png";
});

itemBox5.addEventListener("mouseout", () => {
  imgChange5.src = "skill-img/tailwind2.png";
});

// 6th image

itemBox6.addEventListener("mouseover", () => {
  imgChange6.src = "skill-img/react.png";
});

itemBox6.addEventListener("mouseout", () => {
  imgChange6.src = "skill-img/react2.png";
});

// 7th image
itemBox7.addEventListener("mouseover", () => {
  imgChange7.src = "skill-img/python.png";
});

itemBox7.addEventListener("mouseout", () => {
  imgChange7.src = "skill-img/python2.png";
});

// 8th image

itemBox8.addEventListener("mouseover", () => {
  imgChange8.src = "skill-img/database.png";
});

itemBox8.addEventListener("mouseout", () => {
  imgChange8.src = "skill-img/database2.png";
});

// 9th image
itemBox9.addEventListener("mouseover", () => {
  imgChange9.src = "skill-img/git.png";
});

itemBox9.addEventListener("mouseout", () => {
  imgChange9.src = "skill-img/git2.png";
});

// github and live demo images changes

function changeImg(item, img) {
  document.getElementById(item).src = img;
}

function changeBackImg(item, img) {
  document.getElementById(item).src = img;
}

// go to top button

let topButton = document.getElementById("scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
