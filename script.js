const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning,";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon,";
    } else {
        greeting = "Good Evening,";
    }

    greetingElement.textContent = greeting;
});
