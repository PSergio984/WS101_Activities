document.addEventListener("DOMContentLoaded", () => {
    let loadingText = document.getElementById("loading-text");
    let loadingScreen = document.querySelector(".loading-screen");
    let loadingArticle = document.querySelector(".loading-screen article");
   

    document.body.classList.add("loading"); // Hide scrollbar

    let text = loadingArticle.textContent;
    let words = text.split(" ");
    loadingArticle.innerHTML = ""; // Clear text to animate word by word

    let percent = 80;
    let interval = setInterval(() => {
        percent++;
        loadingText.textContent = percent + "%";

        // Gradually add words back in solid color
        if (words.length > 0) {
            let nextWord = words.shift();
            let span = document.createElement("span");
            span.textContent = nextWord + " ";
            span.style.color = "#ddd"; // Slowly turns lighter gray
            span.style.transition = "color 0.5s ease-in-out";
            loadingArticle.appendChild(span);
        }

        // Once we reach 100%, remove loading screen
        if (percent >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add("fade-out");
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    document.body.classList.remove("loading"); // Restore scrollbar
                }, 1000);
            }, 500);
        }
    }, 100);
});
