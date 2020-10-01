window.onload=function(){
    //navbar animation
    const navIcon = document.querySelector(".nav-icon");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    navIcon.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        document.body.classList.toggle('lock-scroll');
        links.forEach(link => {
            link.classList.toggle("fade-in");
        })
    })
}