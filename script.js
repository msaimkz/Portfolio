function ShowServices() {
  const serveces = [
    {
      sno: 1,
      title: "Custom Web Development",
      description:
        "I build responsive, high-performance websites from scratch, ensuring a seamless user experience across all devices.",
    },
    {
      sno: 2,
      title: "Front-End Development",
      description:
        "I create interactive, visually appealing user interfaces using modern frameworks like React  for smooth user engagement.",
    },
    {
      sno: 3,
      title: "Back-End Development",
      description:
        "I develop secure and scalable server-side applications using technologies like Laravel.",
    },
    {
      sno: 4,
      title: "E-Commerce Solutions",
      description:
        "I design and develop e-commerce platforms with secure payment integration, product management, and seamless checkout experiences.",
    },
  ];

  var clutter = "";

  var container = document.querySelector(".services-list-container");

  serveces.forEach((service) => {
    clutter += ` <div class="service-list-item">
                    <div class="service-item-first-child">
                        <h2>0${service.sno}</h2>
                        <h1>${service.title}</h1>
                    </div>
                    <div class="service-item-second-child">
                        <p>${service.description}</p>
                    </div>
                </div>`;
  });

  container.innerHTML = `
                <div class="service-overlay" ></div>
                ${clutter}
    `;
}

function HeadGsapAnimation(element, trigger) {
  gsap.from(element, {
    opacity: 0,
    y: 300,
    duration: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      trigger: trigger,
      scroller: "body",
      start: "top 80%",
      end: "top 45%",
      scrub: 1,
    },
  });
}

function BodyGsapAnimation(element, trigger) {
  gsap.from(element, {
    opacity: 0,
    y: 300,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: trigger,
      scroller: "body",
      start: "top 50%",
      end: "top 45%",
      scrub: 2,
    },
  });
}

function services() {
  const ServiceLists = document.querySelectorAll(".service-list-item");
  const ServiceOverlay = document.querySelector(".service-overlay");

  ServiceLists.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      ServiceOverlay.style.top = item.offsetTop + "px";
      ServiceOverlay.style.height = item.offsetHeight + "px";

      ServiceLists.forEach((service) => service.classList.remove("active"));
      item.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      item.classList.remove("active");

      ServiceOverlay.style.top = ServiceLists[0].offsetTop + "px";
      ServiceOverlay.style.height = ServiceLists[0].offsetHeight + "px";
      ServiceLists[0].classList.add("active");
    });
  });

  ServiceOverlay.style.top = ServiceLists[0].offsetTop + "px";
  ServiceOverlay.style.height = ServiceLists[0].offsetHeight + "px";
  ServiceLists[0].classList.add("active");
}
function project() {
  const ProjectNav = document.querySelectorAll(".project-nav-link");
  const ProjectOverlay = document.querySelector(".project-nav-overlay");

  ProjectNav.forEach((item) => {
    item.addEventListener("click", function () {
      ProjectOverlay.style.left = item.offsetLeft + "px";
      ProjectOverlay.style.width = item.offsetWidth + "px";

      ProjectNav.forEach((service) => service.classList.remove("active"));
      item.classList.add("active");
    });
  });

  ProjectOverlay.style.left = "12px";
  ProjectOverlay.style.offsetWidth = ProjectNav[0].width + "px";
  ProjectNav[0].classList.add("active");
}

function ShowSkills() {
  const skills = [
    {
      img: "./images/html.png",
      name: "HTML",
    },
    {
      img: "./images/js.png",
      name: "CSS",
    },

    {
      img: "./images/css.png",
      name: "JavaScript",
    },
    {
      img: "./images/bootstrap.png",
      name: "Bootstrap",
    },
    {
      img: "./images/jquery.png",
      name: "Jquery",
    },
    {
      img: "./images/tailwind.png",
      name: "Tailwind",
    },
    {
      img: "./images/gsap.png",
      name: "GSAP",
    },
    {
      img: "./images/laravel.png",
      name: "Laravel",
    },
    {
      img: "./images/react.png",
      name: "React",
    },
    {
      img: "./images/redux.png",
      name: "Redux",
    },
    {
      img: "./images/mysql.png",
      name: "MySql",
    },
    {
      img: "./images/github.png",
      name: "Git & Github",
    },
  ];

  var container = document.querySelector(".skill-card-container");
  var clutter = "";

  skills.forEach((skill) => {
    clutter += `
         <div class="skill-card">
                    <div class="skill-card-icon">
                        <img src="${skill.img}" alt="">
                    </div>
                    <h4>${skill.name}</h4>
                </div>
        `;
  });

  container.innerHTML = clutter;
}

function ShowProjects() {
  const projects = [
    {
      title: "Ephemeral Equilibrium",
      short_description:
        "Ephemeral Equilibrium is an animated static website built using Shery.js",
      description:
        "Ephemeral Equilibrium is a visually captivating animated static website crafted with the Shery.js library. It features dynamic motion effects, smooth transitions, and engaging visual storytelling to enhance user interaction. ",
      url: "https://ephemeral-equlibrium.netlify.app/",
      img: "./images/project3.PNG",
      category: "frontEnd",
    },
    {
      title: "Harvel Electric",
      short_description:
        "Harvel Electric is an animated e-commerce static website for an electric shop",
      description:
        "Harvel Electric is a dynamic and engaging e-commerce website designed for an electric shop. Developed using HTML, CSS, and JavaScript, it features smooth animations for an interactive user experience. The site utilizes JSON to implement a category filter, allowing users to browse products efficiently. Additionally, a product detail modal enhances the shopping experience by displaying key product information in a user-friendly manner.",
      url: "https://harvel-elctric.netlify.app/",
      img: "./images/project2.PNG",
      category: "frontEnd",
    },
    {
      title: "Rest Countries API",
      short_description:
        "Rest Countries API is a React app that fetches and displays country details with search and filter options.",
      description:
        "Rest Countries API is a React-based web app that dynamically fetches country data, displaying details like population, region, and currency. It features a clean UI with search and filter options for easy exploration. Built with React and Redux, it ensures smooth performance and a user-friendly experience.",
      url: "https://country-api-hub.netlify.app/",
      img: "./images/country.PNG",
      category: "frontEnd",
    },
    {
      title: "Creto Bicycle Shop",
      short_description:
        "A feature-rich e-commerce bicycle shop built with Laravel",
      description:
        "This e-commerce bicycle selling website is developed using the Laravel framework, providing a seamless shopping experience. It features Laravel Breeze for multi-authentication, ensuring secure access for customers and admins. The platform includes product, category, and brand management, along with a smooth add-to-cart and checkout process. Additionally, it supports discount coupons and shipping management, making online shopping efficient and user-friendly.",
      img: "./images/project5.PNG",
      category: "backEnd",
    },

    {
      title: "Ortho Dental Clinic",
      short_description:
        "Ortho Dental Clinic is a Laravel-based management system ",
      description:
        "Ortho Dental Clinic is a comprehensive dental management system built with Laravel, featuring Laravel Jetstream for secure multi-authentication (Patient, Doctor, Admin). It includes email verification, doctor registration requests, appointment booking, blog and course management, allowing patients to purchase courses and subscribe to services. The system also implements automated notification alerts, ensuring users receive important updates via email for every key action.",
      img: "./images/project6.PNG",
      category: "backEnd",
    },
  ];

  const container = document.querySelector(".project-card-container");
  const ProjectNavLinks = document.querySelectorAll(".project-nav-link");

  const renderProjects = (filter = "all") => {
    let filteredProjects =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    container.innerHTML = filteredProjects
      .map(
        (project) => `
            <div class="project-card">
                <img src="${project.img}" alt="">
                <a href="./project.html?name=${project.title}" class="project-card-detail">
                    <div>
                        <h1>${project.title}</h1>
                        <p>${project.short_description}.</p>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `
      )
      .join("");
  };

  renderProjects();

  ProjectNavLinks.forEach((item) => {
    item.addEventListener("click", () => {
      renderProjects(item.getAttribute("data-filter"));
      BodyGsapAnimation(".project-card-container", "#projects");
    });
  });
}

function ScrollHeader() {
  const header = document.querySelector(".scroll-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 220) {
      header.classList.add("active");
    } else if (this.window.scrollY == 0) {
      header.classList.remove("active");
    }
  });
}

function LoadingGsapAnimation() {
  var clutter = "";

  var loaderPara = document.querySelector(".loader>p");

  loaderPara.textContent.split("").forEach(function (dets) {
    clutter += `<span>${dets}</span>`;
  });
  loaderPara.innerHTML = clutter;

  gsap.to(".loader>p>span", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    repeat: -1,
  });

  setTimeout(() => {
    gsap.to(".loader", {
      y: "-100%",
      ease: "bounce.in",
      duration: 2,
    });
  }, 2000);
}

LoadingGsapAnimation();
ScrollHeader();
ShowProjects();
ShowSkills();
ShowServices();
services();
project();

// Service Animation

HeadGsapAnimation(".service-head-text", ".service-head");
BodyGsapAnimation(".services-list-container", "#services");

// Project Animation

HeadGsapAnimation(".project-head-text,.project-nav", ".project-head");
BodyGsapAnimation(".project-card-container", "#projects");

// Skill Animation

HeadGsapAnimation(".skill-head-text", ".skill-head");
BodyGsapAnimation(".skill-card-container", "#skills");
