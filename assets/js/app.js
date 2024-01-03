// Navbar
let nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY

    if (scrollY > 50) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
})  


let productNav = document.querySelector(".product-nav")
let productNavCon = document.querySelector(".product-nav-con")

productNav.addEventListener("mouseover", () => {
    productNavCon.classList.add("active")
})
productNav.addEventListener("mouseout", () => {
    productNavCon.classList.remove("active")
})


let navPhone = document.querySelector(".nav-phone")
let hamburger = navPhone.querySelector(".hamburger")
let isClick = false
hamburger.addEventListener("click", () => {
    if (!isClick) {
        navPhone.classList.add("active")
        isClick = true
    } else {
        navPhone.classList.remove("active")
        isClick = false
    }
})
// Navbar end



// Kripik Flavour
let kCount = document.querySelectorAll(".kripik")
let windowSize = window.matchMedia("(max-width: 700px)")

kCount.forEach(k => {
    let rowCount = k.querySelectorAll(".row")
    
    let x = 0
    k.querySelector(".header").addEventListener("click", () => {
        let hiddenActive = k.querySelector(".hidden")
        if (x === 0) {
            k.classList.add("active")
            if (windowSize.matches) {
                let calc = rowCount.length * 158
                hiddenActive.style.height = `${calc}px`
            }
            x++
        } else {
            k.classList.remove("active")
            if (windowSize.matches) {
                hiddenActive.removeAttribute('style')
            }
            x = 0
        }
    })
})
// Kripik Flavour end



