//LEFT AND RIGHT ARROWS OF BOTH POPULAR ITEMS AND TESTIMONIALS CAROUSEL's
const lastCard = document.querySelectorAll(".last-card")
const nextCard = document.querySelectorAll(".next-card")

//STORES THE CURRENT INDEXES OF THE CAROUSEL'S
let indexes = {
    'testimonial': 1,
    'product': 1
}

let windowWidthMobile = window.matchMedia('(max-width: 800px)')

//CHECK IF THE WINDOW HAS A MAX-WIDTH OF 800px
//IF TRUE, THE POPULAR PRODUCTS CAROUSEL VIEW IS ACTIVATED
//OTHERWISE, THE POPULAR PRODUCTS ARE SHOWN AS A NORMAL GRID
if(windowWidthMobile.matches){
    showCard(indexes["product"], "product")
}

//DINAMIC CHECKS THE SCREEN WIDTH TO TOGGLE THE CAROUSEL VIEW
window.addEventListener('resize', () =>{
    //IF SCREEN WIDTH <= 800px: turn on carousel view
    if(windowWidthMobile.matches){
        showCard(indexes["product"], "product")
    }
    //IF SCREEN WIDTH > 800px: restores the grid view
    else{
        restoreProductsGrid()
    }
})

//THE TESTIMONIALS ARE SHOWN AS A CAROUSEL BY DEFAULT SO THE showCard() FUNCTION NEEDS TO BE CALLED
//BY DEFAULT
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

//CHANGE CARDS BASED ON THE BUTTON PRESSED + CAROUSEL ID
function changeCard(n, carouselName){
    showCard(indexes[carouselName] += n, carouselName)
}

//MANAGE THE CAROUSEL CURRENT CARD INDEX AND ACTIVATE THE DISPLAY OF THAT CARD
function showCard(n, carouselName){
    let testimonials = document.querySelectorAll(".testimonial-card")
    let products = document.querySelectorAll(".item")

    if(carouselName === "testimonial"){
        //RESETS THE CAROUSEL INDEX IF THE LAST CARD IS REACHED
        if(n > testimonials.length){
            indexes[carouselName] = 1
        }
        //CHANGE TO THE LAST CARD INDEX IF LEFT ARROW IS PRESSED FROM THE FIRST CARD 
        if(n < 1){
            indexes[carouselName] = testimonials.length
        }
        //TURN OFF THE CARDS DISPLAY
        for(let i = 0; i<testimonials.length; i++){
            testimonials[i].style.display = "none"
        }
        //TURN ON THE CURRENT CARD DISPLAY
        testimonials[indexes[carouselName]-1].style.display = "flex"
    }
    else{
        //RESETS THE CAROUSEL INDEX IF THE LAST CARD IS REACHED
        if(n > products.length){
            indexes[carouselName] = 1
        }
        //CHANGE TO THE LAST CARD INDEX IF LEFT ARROW IS PRESSED FROM THE FIRST CARD 
        if(n < 1){
            indexes[carouselName] = products.length
        }
        //TURN OFF THE CARDS DISPLAY
        for(let i = 0; i<products.length; i++){
            products[i].style.display = "none"
        }
        //TURN ON THE CURRENT CARD DISPLAY
        products[indexes[carouselName]-1].style.display = "flex"
    }
}

//RESTORES THE POPULAR PRODUCTS GRID WHEN SCREEN WIDTH > 800px
function restoreProductsGrid(){
    let products = document.querySelectorAll(".item")

    for(let i = 0; i<products.length; i++){
        products[i].style.display = "block"
    }
}