// Your code goes here


document.addEventListener("DOMContentLoaded", function () {
    const pTag = document.getElementById('text')
    pTag.innerHTML = 'This is really cool!'
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
