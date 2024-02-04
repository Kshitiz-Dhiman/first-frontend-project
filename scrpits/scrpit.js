const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function scrollAnimation() {
    gsap.from('nav', {
        opacity: 0,
        y: 100,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('.hamburger', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('.firstsection', {
        opacity: 0,
        y: 100,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('.subtext', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.9,
        stagger: 0.2
    })

    gsap.from('.leftsection', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from('.python', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from('.right', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('.left', {
        opacity: 0,
        y: 100,
        delay: 0.9,
        duration: 0.5,
        stagger: 0.2
    })
}
scrollAnimation();


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


// ScrollReveal().reveal('div');
// new scrollReveal()
// // Customizing a reveal set
// sr.reveal('div', {opacity: 0,duration:3000});
// const splitTypes = document.querySelectorAll('.reveal-type');

// splitTypes.forEach((char,i) => {
//     const text = new SplitType(char, {types: 'chars ,words'})

//     gsap.from(text.char, {
//         scrollTrigger: {
//             trigger: char,
//             start: 'top 80%',
//             end: 'yop 20%',
//             scrub: true,
//             markers: false
//         },
//         opacity: 0.2,
//         stagger: 0.1
//     })
    
// })