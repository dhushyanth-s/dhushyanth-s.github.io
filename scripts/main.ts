// Cursor styling

let cursor = document.getElementById("cursor") as HTMLElement;
document.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.pageX - cursor.offsetWidth/2).toString() + "px";
    cursor.style.top = (e.pageY - cursor.offsetHeight/2).toString() + "px";
});

// Button styling
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", (_) => {
        button.classList.add("hover");
        cursor.style.border = "none";
    });

    button.addEventListener("mouseleave", (_) => {
        button.classList.remove("hover");
        cursor.style.border = "2px solid #000";
    });
});

// buttons onclick

const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    console.log("rtgt");
});