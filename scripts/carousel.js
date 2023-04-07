const lastCard = document.querySelectorAll(".last-card")
const nextCard = document.querySelectorAll(".next-card")

let indexes = {
    'testimonial': 1,
    'product': 1
}
let windowWidthMobile = window.matchMedia('(max-width: 800px)')


if(windowWidthMobile.matches){
    showCard(indexes["product"], "product")
}
window.addEventListener('resize', () =>{
    if(windowWidthMobile.matches){
        showCard(indexes["product"], "product")
    }
    else{
        restoreProductsGrid()
    }
})

showCard(indexes["testimonial"], "testimonial")

lastCard.forEach(lastCardBtn => {
    lastCardBtn.addEventListener('click', (e)=>{
        changeCard(-1, e.target.id)
    });
    
});

nextCard.forEach(nextCardBtn => {
    nextCardBtn.addEventListener('click', (e)=>{
        changeCard(1, e.target.id)
    });
})


function changeCard(n, carouselName){
    showCard(indexes[carouselName] += n, carouselName)
}

function showCard(n, carouselName){
    let testimonials = document.querySelectorAll(".testimonial-card")
    let products = document.querySelectorAll(".item")

    if(carouselName === "testimonial"){
        if(n > testimonials.length){
            indexes[carouselName] = 1
        }
        if(n < 1){
            indexes[carouselName] = testimonials.length
        }
        for(let i = 0; i<testimonials.length; i++){
            testimonials[i].style.display = "none"
        }
        testimonials[indexes[carouselName]-1].style.display = "flex"
    }
    else{
        if(n > products.length){
            indexes[carouselName] = 1
        }
        if(n < 1){
            indexes[carouselName] = products.length
        }
        for(let i = 0; i<products.length; i++){
            products[i].style.display = "none"
        }
        products[indexes[carouselName]-1].style.display = "flex"
    }
}

function restoreProductsGrid(){
    let products = document.querySelectorAll(".item")

    for(let i = 0; i<products.length; i++){
        products[i].style.display = "block"
    }
}