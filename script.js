document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

const profile = document.querySelector(".profile-img");

profile.addEventListener("mousemove", () => {
    profile.style.transform = "scale(1.05)";
});

profile.addEventListener("mouseleave", () => {
    profile.style.transform = "scale(1)";
});

window.addEventListener("load", () => {
    document.querySelector(".profile-box").style.opacity = "1";
    document.querySelector(".profile-box").style.transform = "translateY(0)";
});
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide-loader");

},1800);

});
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("ar-IQ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const date = now.toLocaleDateString("ar-IQ", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
/* ===== Animated Stars ===== */

const starsContainer = document.getElementById("stars-container");

for(let i=0;i<80;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.animationDuration=(6+Math.random()*10)+"s";

    star.style.animationDelay=Math.random()*8+"s";

    star.style.width=(1+Math.random()*3)+"px";
    star.style.height=star.style.width;

    starsContainer.appendChild(star);

}
/* ===== Add Glow Automatically ===== */

const profileImage =
document.querySelector("#profile") ||
document.querySelector(".profile") ||
document.querySelector(".avatar") ||
document.querySelector("img");

if(profileImage){

    const wrapper=document.createElement("div");

    wrapper.className="profile-glow";

    profileImage.parentNode.insertBefore(wrapper,profileImage);

    wrapper.appendChild(profileImage);

}
/* ===== Welcome Message ===== */

const hour = new Date().getHours();

let message = "";

if(hour < 12){

    message = "☀️ صباح الخير";

}else if(hour < 18){

    message = "🌤️ مساء الخير";

}else{

    message = "🌙 مساء الخير";
}

console.log(message);
/* ===== 3D Card ===== */

const card =
document.querySelector(".card") ||
document.querySelector(".container") ||
document.querySelector(".main-card");

if(card){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/25;

const y=(window.innerHeight/2-e.clientY)/25;

card.style.transform=
`rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0deg) rotateX(0deg)";

});

}
/* ===== Theme Switch ===== */

const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.textContent="☀️";

}else{

themeBtn.textContent="🌙";

}

};
/* ===== Copy & Share ===== */

document.getElementById("copyLink")?.addEventListener("click",()=>{

navigator.clipboard.writeText(location.href);

alert("✅ تم نسخ الرابط");

});

document.getElementById("sharePage")?.addEventListener("click",()=>{

if(navigator.share){

navigator.share({

title:document.title,

text:"شوف صفحتي 👇",

url:location.href

});

}else{

alert("المتصفح لا يدعم المشاركة");

}

});
/* ===== Like Button ===== */

let likes = Number(localStorage.getItem("likes")) || 0;
let liked = localStorage.getItem("liked") === "true";

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

if(likeCount){
    likeCount.textContent = likes;
}

if(likeBtn){

    if(liked){
        likeBtn.textContent = "❤️ معجب";
    }

    likeBtn.onclick = ()=>{

        if(liked) return;

        likes++;

        liked = true;

        localStorage.setItem("likes",likes);

        localStorage.setItem("liked","true");

        likeCount.textContent = likes;

        likeBtn.textContent = "❤️ معجب";

    };

}
