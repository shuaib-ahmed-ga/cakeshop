// Testimonial

let currentIndex = 1;
const totalTestimonials = 4;

function show() {
    document.getElementById(`testimonial${currentIndex}`).classList.add('hidden');

    if (currentIndex === totalTestimonials)
    {
        currentIndex = 1;
    }
    else{
        currentIndex++
    }
    document.getElementById(`testimonial${currentIndex}`).classList.remove('hidden')
}

setInterval(show, 3000);