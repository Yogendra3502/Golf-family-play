var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-70+"px"
    blur.style.top = dets.y-70+"px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2.4,
    crsr.style.border = "1px solid #ffff"
    crsr.style.backgroundColor = "transparent"
   })
   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1,
    crsr.style.border = "0px solid #ffff"
    crsr.style.backgroundColor = "#95c11E"
   })
})
gsap.to("#nav",{
    backgroundColor: "#000",
    hight: "6vh",
    duration:.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:"1"
    }
})
gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        // markers:true,
        start:"top -50%",
        end: "top -100%",
        scrub:2
    }
})
gsap.from(".about-us img .about-us1",{
    y:50,
    opacity: 0,
    stagger: 0.4,
    duration:1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:2

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    stagger: 0.4,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 70%",
        markers:false,
        end: "top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
        
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
        
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
        
    }
})