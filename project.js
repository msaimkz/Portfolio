function Project() {
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
  const countryName = new URLSearchParams(location.search).get("name");

  var [project] = projects.filter((project) => project.title == countryName);

  document
    .querySelectorAll(".projectName")
    .forEach((item) => (item.textContent = project.title));
  document
    .querySelector(".image-container>img")
    .setAttribute("src", project.img);
  document.querySelector("#ProjectDes").textContent = project.description;

  if (project.url) {
    const html = `<a href="${project.url}" target="_blank">
              <span>Live Preview</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>`;
    document.querySelector("#AnchorCon").innerHTML = html;
  } else {
    document.querySelector("#AnchorCon").innerHTML = "";
  }
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

  console.log(loaderPara);
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
Project();
ScrollHeader();
