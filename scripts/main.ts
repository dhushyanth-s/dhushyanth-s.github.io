// Button styling
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", (_) => {
        button.classList.add("hover");
    });

    button.addEventListener("mouseleave", (_) => {
        button.classList.remove("hover");
    });
});

function onClick() {
    console.log("hello world");
}

// Cursor styling

let cursor = document.getElementById("cursor") as HTMLElement;
document.addEventListener("mousemove", (e) => {
    cursor.style.left = (e.pageX - cursor.offsetWidth/2).toString() + "px";
    cursor.style.top = (e.pageY - cursor.offsetHeight/2).toString() + "px";
});