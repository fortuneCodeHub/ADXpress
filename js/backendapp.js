/**
 * offcanvas navbar
 */
if (document.querySelectorAll('.nav-btn')) {
    const navbarBtns = document.querySelectorAll('.nav-btn');
    const navBg = document.querySelector('.side-nav-bg');
    const toggle = (function () {
        return function toggle() {
            navbarBtns.forEach(navbarBtn => { 
                navbarBtn.addEventListener("click", function () {
                    navBg.classList.toggle("open");
                });
            });
        };
    })();
    toggle();
}

if (document.querySelector("#drop-toggle-btn")) {
    // Drop Down Btn
    const dropToggleBtn = document.querySelector("#drop-toggle-btn")
    const dropToggleMenu = document.querySelector(".drop-toggle-menu")
    // Down Chevron
    const chevron = document.querySelector("#drop-toggle-btn .bi-chevron-down")
    
    // Set dropToggleBtn action
    dropToggleBtn.addEventListener("click", () => {
         if (!itIsInArray("show", dropToggleMenu.classList)) {
            dropToggleMenu.classList.remove("hide")
            dropToggleMenu.classList.add("show")
    
            chevron.style.transform = "rotate(" + 0 + "deg)"
            chevron.style.transition = "all "+0.2+"s ease-in-out"
        } else {
            dropToggleMenu.classList.add("hide")
            dropToggleMenu.classList.remove("show")
    
            chevron.style.transform = "rotate(" + 180 + "deg)"
            chevron.style.transition = "all "+0.2+"s ease-in-out"
        }
    })
}

// console.log(dropToggleMenu.classList);
    // Functions
function itIsInArray(char, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == char) {
        return true
      }
    }
    return false
}