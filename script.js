document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if ( dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})





const slidesContainer = document.getElementById("slideshow");
const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });



let i=1;
let noofSlides=3;
setInterval(function() {
   const slideWidth = slide.clientWidth;

slidesContainer.scrollLeft += slideWidth;
   i++;
   console.log("after",i);
  if(i===noofSlides+1){
    i=1;
    // const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth*noofSlides;
    
    console.log("slide");
  } 
}, 5000);




  
  
