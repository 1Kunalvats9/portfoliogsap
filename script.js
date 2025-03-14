const cursor = document.querySelector('#cursor')
const listele = document.querySelectorAll(".listele")
const connectBtn = document.querySelector("#connect")
let p1mid = document.querySelector(".robo-container")
let left = document.querySelector(".left")
let mid = document.querySelector('.mid')
let right = document.querySelector('.right')
let aboutme = document.querySelector('.aboutme')
let nav = document.querySelector('.navbar')
let mywork = document.querySelector('.mywork')
p1mid.addEventListener('mouseenter',()=>{
    gsap.to("#cursor",{
        scale:0,
        duration:0.4
    })
})
p1mid.addEventListener('mouseleave',()=>{
    gsap.to("#cursor",{
        scale:1,
        duration:0.4
    })
})
window.addEventListener("mousemove",(e)=>{
    gsap.to("#cursor",{
        x:e.clientX,
        y:e.clientY-30,
        duration:0.4,
    })
})

connectBtn.addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
        scale: 1.7,
        duration: 0.3,
    });
    gsap.to(connectBtn,{
        scale:1.1,
        duration:0.2
    })
});

connectBtn.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
        scale: 1,
        duration: 0.1,
    });
    gsap.to(connectBtn,{
        scale:1,
        duration:0.1
    })
});
listele.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
            scale: 1.7,
            duration: 0.3,
        });
        gsap.to(item,{
            scale:1.1,
            duration:0.1
        })
    });

    item.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            scale: 1,
            duration: 0.3,
        });
        gsap.to(item,{
            scale:1,
            duration:0.1
        })
    });
});
let tl = gsap.timeline()
tl.to(".left",{
    opacity:-1,
    duration:2,
    scrollTrigger:{
        trigger:".page1",
        start: "top top",   // Begin when the top of page1 reaches the top of the viewport
        end: "bottom top",
        scrub:1
    }
})
tl.to(".right",{
    opacity:-1,
    duration:2,
    scrollTrigger:{
        trigger:".page1",
        start: "top top",   // Begin when the top of page1 reaches the top of the viewport
        end: "bottom top",
        scrub:1
    }
})
tl.from(aboutme,{
    y:100,
    opacity:0,
    scale:0.7,
    duration:2,
    scrollTrigger:{
        trigger:'.page2',
        start:"top 70%",
        end:"top 45%",
        scrub:1
    }
})
tl.to(".mid", {
    x: "-30vw",  // Moves robo-container to the left
    duration: 1.5,
    y:"57vh",
    scale:2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page1",  // Start animation when scrolling starts
      start: "top top",   // Begin when the top of page1 reaches the top of the viewport
      end: "bottom top",  // End animation when page1 fully scrolls out
      scrub: 1,           // Smooth transition while scrolling
    }
});
tl.to(".page3 h1",{
    transform : "translateX(-220%)",
    scrollTrigger:{
        start:"top 20%",
        trigger:".page3",
        scroller:'body',
        end:"top -80%",
        scrub: 2,
        pin:true
    }
})
tl.from(".one",{
    x:200,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top 50%",
        end:"top 30%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".two",{
    x:-200,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top 30%",
        end:"top 10%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".three",{
    x:200,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top 0%",
        end:"top -30%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".four",{
    x:-200,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top -50%",
        end:"top -70%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".five",{
    x:200,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        start:"top -95%",
        end:"top -120%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})