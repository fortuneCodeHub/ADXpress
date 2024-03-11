$(document).ready(function () {
    // Top sale section 
    // $('#top-sale .owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     dots:true,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         600:{
    //             items:3
    //         },
    //         991: {
    //             items:5
    //         }
    //     }
    // });

    // $('#dep-ad-carousel-section .owl-carousel').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:true,
    //     margin:10,
    //     responsive: {
    //         0: {
    //             items:2
    //         },
    //         600:{
    //             items:4
    //         }
    //     }
    // });
    // $('#dep-ad-carousel-section .owl-carousel').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:false,
    //     margin:10,
    //     responsive: {
    //         0: {
    //             items:2
    //         },
    //         600:{
    //             items:4
    //         }
    //     }
    // });


    // Department AD Scroller
    let depScrollObj = {
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items: 3,
                nav:false
            },
            700:{
                items: 5
                // nav: true
            },
            1050:{
                items: 8
                // nav: true
            }
        }
    }
    $('#dep-ad-scroller .owl-carousel').owlCarousel(depScrollObj)

    // Change items count for top sale products section
    let newObj = {
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items: 2,
                nav:false
            },
            700:{
                items: 4
                // nav: true
            },
            1100:{
                items: 6
                // nav: true
            }
        }
    }
    $('#top-sale-products .owl-carousel').owlCarousel(newObj)
    $('#limited-products .owl-carousel').owlCarousel(newObj)
    $('#pg-products .owl-carousel').owlCarousel(newObj)
    $('#recent-view-products .owl-carousel').owlCarousel(newObj)
    $('#deals-incart-products .owl-carousel').owlCarousel(newObj)
    $('#related-products .owl-carousel').owlCarousel(newObj)

})

/**
 * Offcanvas
 */
if (document.querySelector(".offcanvas-bg")) {
    // The black background
    const offcanvasBg = document.querySelector(".offcanvas-bg")
    // The main sidebar
    const offcanvasMainBg = document.querySelector(".offcanvas-main-bg")
    // The offcanvas open/close button
    const offcanvasBtns = document.querySelectorAll(".offcanvas-btn")
    // The offcanvas transparent side
    const offcanvasTrans = document.querySelector(".offcanvas-trans-side")
    
    // Drop Down Btn
    const dropToggleBtns = document.querySelectorAll("#drop-toggle-btn")
    const dropToggleMenus = document.querySelectorAll(".drop-toggle-menu")
    // Down Chevron
    const chevrons =document.querySelectorAll("#drop-toggle-btn .bi-chevron-down")

    for (let i = 0; i < offcanvasBtns.length; i++) {
        offcanvasBtns[i].addEventListener("click", () => {
            if (!itIsInArray("toggle", offcanvasBg.classList) && !itIsInArray("toggle", offcanvasMainBg.classList)) {
                offcanvasBg.classList.add("toggle")
                offcanvasMainBg.classList.add("toggle")
                offcanvasTrans.classList.add("toggle")
            } else {
                offcanvasBg.classList.remove("toggle")
                offcanvasTrans.classList.remove("toggle")
                offcanvasMainBg.classList.remove("toggle")
            }
        })
    }

    // Set dropToggleBtn action
    for (let i = 0; i < dropToggleBtns.length; i++) {
        dropToggleBtns[i].addEventListener("click", () => {
            if (!itIsInArray("show", dropToggleMenus[i].classList)) {
                dropToggleMenus[i].classList.remove("hide")
                dropToggleMenus[i].classList.add("show")

                chevrons[i].style.transform = "rotate(" + 0 + "deg)"
                chevrons[i].style.transition = "all "+1+"s ease-in-out"
            } else {
                dropToggleMenus[i].classList.add("hide")
                dropToggleMenus[i].classList.remove("show")

                chevrons[i].style.transform = "rotate(" + 180 + "deg)"
                chevrons[i].style.transition = "all "+1+"s ease-in-out"
            }
        })
    }
}

// Functions
function itIsInArray(char, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == char) {
        return true
      }
    }
    return false
}


/** Toggle filter sidebar */
if (document.querySelector(".toggle-btn")) {
    const toggleBtn = document.querySelector(".toggle-btn")
    const filterBg = document.querySelector(".department-filter-bg")
    
    toggleBtn.addEventListener("click", () => {
        if (itIsInArray("hide", filterBg.classList)) {
            filterBg.classList.remove("hide")
        } else {
            filterBg.classList.add("hide")
        }
    })
}

// like tag switch function 
if (document.querySelector(".like-tag")) {
    const likeTags = document.querySelectorAll(".like-tag")
    const likeHearts = document.querySelectorAll(".like-heart")
    const unlikeHearts = document.querySelectorAll(".unlike-heart")

    for (let i = 0; i < likeTags.length; i++) {
        likeTags[i].addEventListener("click", () => {
            likeHearts[i].classList.toggle("d-none")
            unlikeHearts[i].classList.toggle("d-none")
        })
    }
}

// toggle window and grid display
if (document.querySelector(".grid-box")) {
    const gridBtn = document.querySelector(".grid-box")
    const windowBtn = document.querySelector(".window-box")

    const windowDisplay = document.querySelector(".window-product")
    const gridDisplay = document.querySelector(".grid-product")

    windowBtn.addEventListener("click", () => {
        windowDisplay.classList.remove("d-none")
        gridDisplay.classList.add("d-none")
    })

    gridBtn.addEventListener("click", () => {
        windowDisplay.classList.add("d-none")
        gridDisplay.classList.remove("d-none")
    })
}

// Quantity up and quantity down
if (document.querySelector(".qty__input")) {
    const qtyInputs = document.querySelectorAll(".qty__input")
    const qtyUpBtns = document.querySelectorAll(".qty-up")
    const qtyDownBtns = document.querySelectorAll(".qty-down")

    for (let i = 0; i < qtyUpBtns.length; i++) {
        qtyUpBtns[i].addEventListener("click", () => {
            let numInput = qtyInputs[i].value
            numInput = parseInt(numInput) + 1
            console.log(numInput);
        })
    }
}

// Product Image Carousel
if (document.querySelector(".gallery-container")) {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`
    })

    let counter = 0;
    nextBtn.addEventListener('click', function () {
        counter++;
        carousel();
    });

    prevBtn.addEventListener('click', function () {
        counter--;
        carousel();
    });

    function carousel() {
        // working with slides

        if (counter === slides.length) {
            counter = 0;
        }

        if (counter < 0) {
            counter = slides.length - 1;
        }

        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }
}


