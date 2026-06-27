document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const x=e.offsetX;
const y=e.offsetY;

btn.style.background=`radial-gradient(circle at ${x}px ${y}px,#d400ff,#6a00ff,#3a0066)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="linear-gradient(90deg,#7a00ff,#c000ff,#7a00ff)";

});

});
