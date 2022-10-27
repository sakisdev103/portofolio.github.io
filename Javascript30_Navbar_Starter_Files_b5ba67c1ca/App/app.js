const dropDownButton = document.querySelector(".dropbtn");
const dropDown = document.querySelector(".dropdown");
const dropDownContent = document.querySelector(".dropdown-content");
const logo = document.querySelector(".logo");
const closeButton = document.getElementById("close-button");


if(window.innerWidth <= 900){
    dropDownButton.innerHTML= `<button class="nav-toggle"><img src="../Javascript30 Navbar Starter Files/Assets/Menu.svg" alt=""></button>`;
}


dropDownButton.addEventListener("click", function () {
    if(dropDownButton){
        dropDownButton.style.display = "none";
        dropDownContent.style.display = "block";
        logo.style.display = "none";
    }
});

closeButton.addEventListener("click", function() {
    dropDownContent.style.display = "none";
    dropDownButton.style.display = "block";
    logo.style.display = "flex";
})