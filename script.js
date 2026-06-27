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
