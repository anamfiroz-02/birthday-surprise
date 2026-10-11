
const surpriseBtn = document.getElementById("surpriseBtn");
const secret = document.getElementById("secret");
const hearts = document.getElementById("hearts");

// Change this to your partner's name
document.getElementById("name").textContent = "My Love";

surpriseBtn.addEventListener("click", function () {
    secret.classList.toggle("hidden");

    if (secret.classList.contains("hidden")) {
        surpriseBtn.textContent = "Open Your Surprise 🎁";
    } else {
        surpriseBtn.textContent = "I Love You ❤️";
        secret.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
});

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent = ["❤️", "💗", "💕", "💖"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);
