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
let foot = document.querySelector(".footer")
foot.addEventListener('mouseenter',()=>{
    gsap.to("#cursor",{
        scale:0,
        duration:0.4
    })
})
foot.addEventListener('mouseleave',()=>{
    gsap.to("#cursor",{
        scale:1,
        duration:0.4
    })
})
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
        x:e.clientX-20,
        y:e.clientY-20,
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
        start: "top top",  
        end: "bottom top",
        scrub:1
    }
})
tl.to(".right",{
    opacity:-1,
    duration:2,
    scrollTrigger:{
        trigger:".page1",
        start: "top top",  
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
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    }
})
tl.to(".mid", {
    x: "-30vw",  
    duration: 1.5,
    y:"57vh",
    scale:2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page1",  
      start: "top top 15%",
      end: "bottom 25%",  
      scrub: 1,          
    }
});
tl.to(".page3 h1",{
    transform : "translateX(-220%)",
    scrollTrigger:{
        start:"top 10%",
        trigger:".page3",
        scroller:'body',
        end:"top -60%",
        scrub: 2,
        pin:true
    }
})
tl.from(".one",{
    x:400,
    opacity:0,
    transform: "rotate(-2deg)",
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
    x:-400,
    opacity:0,
    stagger:1,
    transform: "rotate(2deg)",
    scrollTrigger:{
        start:"top 30%",
        end:"top 10%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".three",{
    x:400,
    opacity:0,
    transform: "rotate(-2deg)",
    stagger:1,
    scrollTrigger:{
        start:"top -10%",
        end:"top -30%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".four",{
    x:-400,
    opacity:0,
    stagger:1,
    transform: "rotate(2deg)",
    scrollTrigger:{
        start:"top -70%",
        end:"top -85%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})
tl.from(".five",{
    x:400,
    opacity:0,
    stagger:1,
    transform: "rotate(-2deg)",
    scrollTrigger:{
        start:"top -125%",
        end:"top -140%",
        trigger:".page4",
        scroller:'body',
        scrub:2,
    }
})