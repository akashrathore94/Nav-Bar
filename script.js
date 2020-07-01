const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");

const options = {
  threshold: 0.4,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      const className = entry.target.className;
      links.forEach((link) => {
        if (link.getAttribute("data-page") == className) {
          links.forEach((link) => {
            link.classList.remove("active");
          });
          link.classList.add("active");
        }
      });
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

//animation for portfolio
let t0 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "center bottom", //bottom of the scrollbar and center of the viewport
  },
});
t0.from(".text0", { x: 200, opacity: 0, duration: 1 }).from(
  ".zero",
  { x: -300, opacity: 0, duration: 1 },
  "0.5"
);

//animation for portfolio
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio",
    start: "center bottom",
  },
});
t1.from(".text1", { x: -200, opacity: 0, duration: 1 }).from(
  ".even",
  { x: 300, opacity: 0, duration: 1 },
  "0.5"
);

//animation for portfolio
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "center bottom", //bottom of the scrollbar and center of the viewport
  },
});
t2.from(".text2", { x: 200, opacity: 0, duration: 1 }).from(
  ".odd",
  { x: -300, opacity: 0, duration: 1 },
  "0.5"
);
