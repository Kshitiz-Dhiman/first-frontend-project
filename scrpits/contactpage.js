function scrollAnimation() {
    gsap.from('nav', {
        opacity: 0,
        y: 100,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('.right', {
        opacity:0,
        y:100,
        delay:0.9,
        duration:0.5,
        stagger:0.2
    })
    gsap.from('.left', {
        opacity:0,
        y:100,
        delay:0.9,
        duration:0.5,
        stagger:0.2
    })
}
scrollAnimation();
