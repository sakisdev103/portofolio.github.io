const jobs = [
    {
        company: "Photosnap",
        new: true,
        featured: true,
        description: "Senior Frontend Developer",
        published: "1d ago",
        contract: "Full Time",
        location: "USA only",
        role: "Frontend",
        level: "Senior",
        languages: ["HTML", "CSS", "JavaScript"],
        tool: "",
        img: "./images/photosnap.svg"
    },
    {
        company: "Manage",
        new: true,
        featured: true,
        description: "Fullstack Developer",
        published: "1d ago",
        contract: "Part Time",
        location: "Remote",
        role: "Fullstack",
        level: "Midweight",
        languages: "Python",
        tool: "",
        img: "./images/manage.svg"
    },
    {
        company: "Account",
        new: true,
        featured: false,
        description: "Junior Frontend Developer",
        published: "2d ago",
        contract: "Part Time",
        location: "USA only",
        role: "Frontend",
        level: "Junior",
        languages: "JavaScript",
        tool: "React Sass",
        img: "./images/account.svg"
    },
    {
        company: "MyHome",
        new: false,
        featured: false,
        description: "Junior Frontend Developer",
        published: "5d ago",
        contract: "Contract",
        location: "USA only",
        role: "Frontend",
        level: "Junior",
        languages: "CSS Javascript",
        tool: "",
        img: "./images/myhome.svg"
    },
    {
        company: "Loop Studios",
        new: false,
        featured: false,
        description: "Software Engineeer",
        published: "1d ago",
        contract: "Full Time",
        location: "Worldwide",
        role: "Fullstack",
        level: "Midweight",
        languages: "Javascript Ruby",
        tool: "Sass",
        img: "./images/loop-studios.svg"
    },
    {
        company: "FaceIt",
        new: false,
        featured: false,
        description: "Junior Backend Developer",
        published: "2w ago",
        contract: "Full Time",
        location: "UK only",
        role: "Backend",
        level: "Junior",
        languages: "Ruby",
        tool: "RoR",
        img: "./images/faceit.svg"
    },
    {
        company: "Shortly",
        new: false,
        featured: false,
        description: "Junior Developer",
        published: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        role: "Frontend",
        level: "Junior",
        languages: "HTML Javascript",
        tool: "Sass",
        img: "./images/shortly.svg"
    },
    {
        company: "Insure",
        new: false,
        featured: false,
        description: "Junior Frontend Developer",
        published: "2w ago",
        contract: "Full Time",
        location: "USA only",
        role: "Frontend",
        level: "Junior",
        languages: "Javascript",
        tool: "Vue Sass",
        img: "./images/insure.svg"
    },
    {
        company: "Eyecam Co",
        new: false,
        featured: false,
        description: "Full Stack Engineer",
        published: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        role: "Fullstack",
        level: "Midweight",
        languages: "Javascript Python",
        tool: "Django",
        img: "./images/etecam-co.svg"
    },
    {
        company: "The Air Filter Company",
        new: false,
        featured: false,
        description: "Front-end Dev",
        published: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        role: "Frontend",
        level: "Junior",
        languages: "Javascript",
        tool: "React Sass",
        img: "./images/the-air-filter-company.svg"
    }
]

const requiredJobs = document.querySelector(".job-container");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(jobs);
  });

  function displayMenuItems(camps) {
    let displayMenu = camps.map(function (item) {
      // console.log(item);
  
      return `
      <div class="job-container-card">
        <div class="job-left-side">
            <div class="job-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="job-description">
                <div class="job-tittle">
                    <div>
                        <h5>${item.company}</h5> 
                    </div>
                    ${item.new && item.featured? `
                    <div class="job-label">
                        <label>New!</label>
                        <label>Featured</label>
                    </div>`: ""}
                </div>
                <div class="">
                    <h4>${item.description}</h4>
                    <div class="specs">
                        <p>${item.published}</p> <p>${item.contract}</p> <p>${item.location}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="job-qualifications">
            <p>${item.role}</p>
            <p>${item.level}</p>
            <p>${item.languages}</p>
            ${item.tool!== ""? `<p>${item.tool}</p>`: ""}
        </div>
      </div>`
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    requiredJobs.innerHTML = displayMenu;
    
  }

  //Filter Categories
    
  const jobRole = document.getElementById("role");
  const jobLevel = document.getElementById("level");
  const jobContact = document.getElementById("contract");
  const jobLocation = document.getElementById("location");

  const jobRoleContent = document.querySelector(".role-content");
  const jobLevelContent = document.querySelector(".level-content");
  const jobContractContent = document.querySelector(".contract-content");
  const jobLocationContent = document.querySelector(".location-content");
  
  jobRole.addEventListener("click", function(){
    jobRoleContent.classList.toggle("role-content");
    jobLevelContent.classList.add("level-content");
    jobContractContent.classList.add("contract-content");
    jobLocationContent.classList.add("location-content");
    setTimeout(function(){
        jobRoleContent.classList.add("slow-reveal");

    },10);
    

    
  });

  jobLevel.addEventListener("click", function(){
    jobLevelContent.classList.toggle("level-content");
    jobRoleContent.classList.add("role-content");
    jobContractContent.classList.add("contract-content");
    jobLocationContent.classList.add("location-content");
    setTimeout(function(){
        jobLevelContent.classList.add("slow-reveal");

    },10);
  });

  jobContact.addEventListener("click", function(){
    jobContractContent.classList.toggle("contract-content");
    jobRoleContent.classList.add("role-content");
    jobLevelContent.classList.add("level-content");
    jobLocationContent.classList.add("location-content");   
    setTimeout(function(){
        jobContractContent.classList.add("slow-reveal");

    },10);
  });

  jobLocation.addEventListener("click", function(){
    jobLocationContent.classList.toggle("location-content");
    jobContractContent.classList.add("contract-content");
    jobRoleContent.classList.add("role-content");
    jobLevelContent.classList.add("level-content");   
    setTimeout(function(){
        jobLocationContent.classList.add("slow-reveal");

    },10);
  });
    
  //Filter Role

    const filterRole = document.querySelectorAll("#role-filter");
    // console.log(filterBtns);

    filterRole.forEach(function(btn) {
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const jobCategory = jobs.filter(function(jobItem){
                if(jobItem.role === category){
                    console.log(jobItem);
                    return jobItem;
                }
            });
            if(category === "All"){
                displayMenuItems(jobs);
            }else{
                displayMenuItems(jobCategory);        
            }
        });
    });

    //Filter Level

    const filterLevel = document.querySelectorAll("#lvl-filter");


    filterLevel.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const jobCategory = jobs.filter(function(jobItem){
                if(jobItem.level === category){
                    return jobItem;
                }
            });
            if(category === "All"){
                displayMenuItems(jobs);
            }else{
                displayMenuItems(jobCategory);
            }
        });
    });


    //Filter Contact

    const filterContract = document.querySelectorAll("#contract-filter");


    filterContract.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const jobCategory = jobs.filter(function(jobItem){
                if(jobItem.contract === category){
                    return jobItem;
                }
            });
            if(category === "All"){
                displayMenuItems(jobs);
            }else{
                displayMenuItems(jobCategory);
            }
        });
    });

    //Filter Location 

    const filterLocation = document.querySelectorAll("#location-filter");


    filterLocation.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const jobCategory = jobs.filter(function(jobItem){
                if(jobItem.location === category){
                    return jobItem;
                }
            });
            if(category === "All"){
                displayMenuItems(jobs);
            }else{
                displayMenuItems(jobCategory);
            }
        });
    });


   