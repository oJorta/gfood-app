const lastTestimonial = document.querySelector(".last-card")
const nextTestimonial = document.querySelector(".next-card")
let testimonialIndex = 1

lastTestimonial.addEventListener('click', ()=>{
    changeTestimonial(-1)
})
nextTestimonial.addEventListener('click', ()=>{
    changeTestimonial(1)
})

showTestimonial(testimonialIndex)

function changeTestimonial(n){
    showTestimonial(testimonialIndex += n)
}

function showTestimonial(n){
    let testimonials = document.querySelectorAll(".testimonial-card")
    if(n > testimonials.length){
        testimonialIndex = 1
    }
    if(n < 1){
        testimonialIndex = testimonials.length
    }
    for(let i = 0; i<testimonials.length; i++){
        testimonials[i].style.display = "none"
    }
    testimonials[testimonialIndex-1].style.display = "flex"
}