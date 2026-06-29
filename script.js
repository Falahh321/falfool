
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
