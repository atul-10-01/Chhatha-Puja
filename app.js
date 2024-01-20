const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function vidcontAnimation() {
    var vidcont = document.querySelector("#video-container");
     playbtn = document.querySelector("#play");
    vidcont.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    vidcont.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    vidcont.addEventListener("mousemove", function (events) {
        gsap.to(playbtn, {
            left:events.x-25,
            top:events.y-25
        })
    })
}
vidcontAnimation();

function loadingAnimation() {
    let loadingTimeline = gsap.timeline();

    loadingTimeline.from("#first h1", {
        y: 80,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
        stagger: 0.3
    });

    loadingTimeline.from("#first video", {
        scale: 0.7,
        opacity: 0,
        delay: 0.7,
        duration: 0.9
    }, 0); 
}

loadingAnimation();
