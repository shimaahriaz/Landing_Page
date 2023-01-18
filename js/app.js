

// Navigation global var
let navigation = document.getElementById("navbar__list");//section Id

// Calld The Sections With(querySelectorAll),And Turend Them Into Array
let sections = [...(document.querySelectorAll("section"))].length; 


//  End Global Variables
 

// build the nav
// Looping Over All Sections
for(let i= 0; i<sections; i++){
  let section = document.querySelectorAll("section");
    let lis = document.createElement("li");
    sectionName = section[i].getAttribute("data-nav");
    sectionLink = section[i].getAttribute("id");
    //Add the Lis (innerHtml) 
    lis.innerHTML= `<a class= menu__link href= "#${sectionLink}">${sectionName}</a>`;
    
    // Append All Elements To The Navigation      
    navigation.appendChild(lis);
};

// Add Smooth Scroll to Anchors
let section = document.querySelectorAll("section");
let list = document.querySelectorAll("li");
function scrolling () {
  for(let i= 0; i<list.length; i++) {
    list[i].addEventListener("click", ev=>{
      //Prevent the default action of a list
      ev.preventDefault();
      //method scrolls an element into the visible area of the browser window
      section[i].scrollIntoView({
        behavior: "smooth"
      });
    });
  };
};
scrolling();

//scroll To Section on click
let Arraysection = [...(document.querySelectorAll("section"))];
let links = [...(document.querySelectorAll(".menu__link"))];
function createActive(){
  // Looping Over All Sections
for (const sec of Arraysection) {
  //Add highlights section in viewport upon scrolling, and That By
  //(getBoundingClientRect) That returns the size of an element and its position relative to the viewport.
  let viewport= sec.getBoundingClientRect();
//If Secction Is In Viewport,Add to himself class his name("your-active-class") 
  if (viewport.top <= 150 && viewport.top >= -400) {
        sec.classList.add("your-active-class");
// Looping At Links To Add Highlight By Adding The ("active__link") When Section In Viewport
      links.forEach((active)=>{
        if(sec.getAttribute("data-nav")=== active.innerText){
             active.classList.add("active__link");
       }else {
             active.classList.remove("active__link");
      }
   }) //If the section is not in the viewport, Remove to himself class his name("your-active-class") 
  } else {
    sec.classList.remove("your-active-class");
  }}
};
// Add class 'active' to section when near top of viewport
     window.addEventListener("scroll",createActive );


