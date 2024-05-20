const toggler = document.getElementById("toggler-circle");
const togglerbg = document.getElementById("toggler");
const body = document.body;

togglerbg.addEventListener("click" , function() {
    console.log("clicked");
    if(body.classList.contains("dark")) {
        console.log("click dark");
        body.classList.replace("dark","light");
        toggler.style.transform = "translateX(20px)";
    } else {
        console.log("click light");
        body.classList.replace("light","dark");
        toggler.style.transform = "translateX(0)";
    }
});