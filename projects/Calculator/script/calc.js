let calculation = '';
        function calc(n) {
            return(calculation += n);
        }

function scroll() {
    gsap.from('.conatiner', {
        opacity: 0,
        y: -100,
        delay: 0.3,
        duration: 0.9,
        stagger: 0.2
    })
}
scroll();