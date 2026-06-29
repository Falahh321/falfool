
function updateDateTime() {
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

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
}

updateDateTime();
setInterval(updateDateTime, 1000);
let text = "اني اسمي فلاح اكل التفاح واعيش مرتاح 😂👍";
let i = 0;

function typing() {
  let bio = document.getElementById("bio");

  if (bio && i < text.length) {
    bio.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing();
