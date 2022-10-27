const campGrounds = [
    {
        name: "Mount Ulap",
        img: "../Assets/Camp Images/High Quality Images/Mount Ulap.png",
        description: "One of the most famous hikes in Benguet is Mt Ulap in itogon."
    },
    {
        name: "Calaguas Islands",
        img: "../Assets/Camp Images/High Quality Images/Calagus Islands.jpg",
        description: "A paradise of island that can rival the white sand beauty of Boracay."
    },
    {
        name: "Seven Sisters Waterfall",
        img: "../Assets/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg",
        description: "The Seven Sisters is the 39th tallest waterfall in Nowrway."
    },
    {
        name: "Latik Riverside",
        img: "../Assets/Camp Images/High Quality Images/Latik Riverside.jpg",
        description: "Philippines is on of the most dazzling countries in all of Asia."
    },
    {
        name: "Buloy Springs",
        img: "../Assets/Camp Images/High Quality Images/Buloy Springs.jpg",
        description: "This is one of the best beach camping sites, beautiful and pristine."
    }

]

const displayContent = document.getElementById("show-content");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(campGrounds);
    displayMenuButtons();
  });
  
  function diplayMenuItems(camps) {
    let displayMenu = camps.map(function (item) {
      // console.log(item);
  
      return `
    <article class="camp-item">
    <div class="camp-item-img">
        <img src="${item.img}" alt="">
    </div>
    <h5>${item.name}</h5>
    <p>${item.description}</p>
    <div class="view-camp">
        <a href="">View Campground</a>
    </div>
</article>`
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    displayContent.innerHTML = displayMenu;
  }


  //Hamburger Menu Icon

  const mobileIcon = document.querySelector(".mobile");
  const linksTab = document.getElementById("mobile");

  mobileIcon.addEventListener("click", function(){
    if(linksTab.classList.contains("hide-content")){
        linksTab.classList.remove("hide-content");
        linksTab.classList.add("display-content");
    } else{
        linksTab.classList.add("hide-content");
        linksTab.classList.remove("display-content");
    }
    
    
  })