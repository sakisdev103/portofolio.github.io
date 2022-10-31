//Navbar

const navBar = document.querySelector(".nav-toggle");
const navBarContent = document.querySelector(".links");

navBar.addEventListener("click", function(){
    navBarContent.classList.toggle("show-links");
})


//My Projects

const projectsContainer = document.querySelector(".projects");

const apps = [
    {
        name: "Tesla clone",
        description: "some random text",
        link: "clone-site/index.html",
        img: "images/clone_site.jpg"
    },
    {
        name: "BlackJack",
        description: "some random text",
        link: "BlackJack/index.html",
        img: "images/blackjack.png"
    },
    {
        name: "BMI Calculator",
        description: "some random text",
        link: "BMI Calculator App/index.html",
        img: "images/bmi.png"
    },
    {
        name: "Expense Tracker",
        description: "some random text",
        link: "Expense Tracker App/index.html",
        img: "images/expense tracker app.png"
    },
    {
        name: "Gym",
        description: "some random text",
        link: "Gym-Project/index.html",
        img: "images/gym-project.png"
    },
    {
        name: "To Do Application",
        description: "some random text",
        link: "to-do-app/index.html",
        img: "images/my-to-do-app.png"
    },
    {
        name: "Bussiness Site",
        description: "some random text",
        link: "My_Site/Avilon/index.html",
        img: "images/my-company.png"
    },
    {
        name: "Calculator",
        description: "some random text",
        link: "calculator/index.html",
        img: "images/Calculator App.png"
    },
    {
        name: "Carousel",
        description: "some random text",
        link: "Carousel/index.html",
        img: "images/Carousel.png"
    },
    {
        name: "Countdown",
        description: "some random text",
        link: "Countdown/index.html",
        img: "images/Countdown.png"
    },
    {
        name: "Ecommerce Landing Page",
        description: "some random text",
        link: "ecommerce landing page/ecommerce-product-page-main/app/index.html",
        img: "images/E-commerce product page.png"
    },
    {
        name: "Grocery",
        description: "some random text",
        link: "Grocery App/index.html",
        img: "images/Grocery Bud.png"
    },
    {
        name: "Menu",
        description: "some random text",
        link: "Menu/index.html",
        img: "images/Menu.png"
    },
    {
        name: "Modal",
        description: "some random text",
        link: "Modal/index.html",
        img: "images/Modal.png"
    },
    {
        name: "Questions",
        description: "some random text",
        link: "Questions/index.html",
        img: "images/Q & A.png"
    },
    {
        name: "Scroll",
        description: "some random text",
        link: "Scroll/index.html",
        img: "images/Scroll.png"
    },
    {
        name: "Navbar",
        description: "some random text",
        link: "Navbar/index.html",
        img: "images/Navbar.png"
    },
    {
        name: "Sidebar",
        description: "some random text",
        link: "Sidebar/index.html",
        img: "images/Sidebar.png"
    },
    {
        name: "Tabs",
        description: "some random text",
        link: "Tabs/index.html",
        img: "images/Tabs.png"
    },
    {
        name: "Video",
        description: "some random text",
        link: "Video/index.html",
        img: "images/Video.png"
    },
    {
        name: "Multiple page site",
        description: "some random text",
        link: "Yelp_Camp_Starter_Files_90fefc073f/YelpCamp Starter Files/App/index.html",
        img: "images/App-multiple.png"
    },
    {
        name: "Simple one page design",
        description: "some random text",
        link: "Javascript30_Navbar_Starter_Files_b5ba67c1ca/App/index.html",
        img: "images/App.png"
    },
    {
        name: "Job Listing",
        description: "some random text",
        link: "Job-Listing/App/index.html",
        img: "images/job-listing.png"
    }
]

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(apps);
  });
  
  function diplayMenuItems(camps) {
    let displayMenu = camps.map(function (item) {
      // console.log(item);
  
      return `
        <div class="project-card">
            <h5>${item.name}</h5>
            <img src="${item.img}" alt="">
            <p>${item.description}</p>
            <a href="${item.link}">View Project</a>
        </div>
      `
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    projectsContainer.innerHTML = displayMenu;
  }

//Reveal Projects

const revealProjects = document.querySelector(".expand-projects");
const revealProjectsContainer = document.querySelector(".projects");

revealProjects.addEventListener("click", function(){
    revealProjectsContainer.classList.toggle("projects-true");
    if(revealProjectsContainer.classList.contains("projects-true")){
        revealProjects.innerHTML = `<i class="fa-solid fa-minus">`;
    }else{
        revealProjects.innerHTML = `<i class="fa-solid fa-plus">`;
    }
});
