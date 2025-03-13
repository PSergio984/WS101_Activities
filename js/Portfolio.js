document.addEventListener("DOMContentLoaded", () => {
    let loadingText = document.getElementById("loading-text");
    let loadingScreen = document.querySelector(".loading-screen");
    let loadingArticle = document.querySelector(".loading-screen article");
   

    document.body.classList.add("loading"); 

    let text = loadingArticle.textContent;
    let words = text.split(" ");
    loadingArticle.innerHTML = ""; 

    let percent = 80;
    let interval = setInterval(() => {
        percent++;
        loadingText.textContent = percent + "%";

   
        if (words.length > 0) {
            let nextWord = words.shift();
            let span = document.createElement("span");
            span.textContent = nextWord + " ";
            span.style.transition = "color 0.5s ease-in-out";
            loadingArticle.appendChild(span);
        }

    
        if (percent >= 100) {
                clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add("fade-out");
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    document.body.classList.remove("loading");
                }, 1000);
            }, 500);
        }
    }, 100);
});

document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Submitted successfully,See you soon');
    this.reset();
});
