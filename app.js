const menu = document.querySelector('#nav i');
const cross = document.querySelector('#full i');

let tline = gsap.timeline();

tline.to('#full', {
    display: 'block',
    right: '0px',
    duration: 0.28,
    ease: 'power2.out',
});

tline.from("#full h4", {
    x : 150,
    ease: 'power2.out',
    stagger: 0.2,
    opacity: 0,
   
});

tline.to("#ani", {
    opacity: 1,
})


tline.pause();

menu.addEventListener('click', ()=>{
    tline.play(); 
})

cross.addEventListener('click', ()=>{
    tline.reverse();
})