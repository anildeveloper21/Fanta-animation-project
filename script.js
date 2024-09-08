let tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end:"70% 50%",
    scrub: true,
    // markers: true
}})

tl.to("#fanta", {
    top: "124%",
    left: "8%",
},'orange')

tl.to("#orange-cut", {
    top: "155%",
    left: "24%",
},'orange')

tl.to("#orange", {
    top: "150%",
    right: "10%",
},'orange')
tl.to("#leaf", {
    top: "100%",
    left: "80%"
},'orange')
tl.to("#leat", {
    top: "100%",
    left: "5%",
    rotate:"150deg",
},'orange')

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end:"70% 50%",
    scrub: true,
    // markers: true
}})




