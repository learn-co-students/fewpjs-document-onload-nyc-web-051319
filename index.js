document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelector("#text")
    words.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);