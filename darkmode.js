const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchBox");

    // Toggle dark and light mode   
    modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    });

    // Code to toggle search box   
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
    });