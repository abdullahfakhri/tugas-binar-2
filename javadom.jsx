var bgcolor = document.getElementById("background-color");
var txtcolor = document.getElementById("text-color")

bgcolor.addEventListener("change", event => {
    document.body.style.background = bgcolor.value;
});

txtcolor.addEventListener("change", event => {
    document.body.style.color = txtcolor.value;
});