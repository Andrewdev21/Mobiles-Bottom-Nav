
function activeNavMobile() {
    const menu = document.querySelector(".nav-expanded");
    const botonNav = document.querySelector(".nav-expanded-button");

    botonNav.addEventListener("click", function(){
        if(getComputedStyle(menu).display === "none")  {
                menu.style.display = "block";

        }
        else {
                menu.style.display = "none";

        }
    });

}

activeNavMobile();