
document.getElementById("learnMoreBtn").addEventListener("click", function () {
    const nosotrosSection = document.getElementById("nosotros");
    nosotrosSection.scrollIntoView({ behavior: "smooth" });
    nosotrosSection.style.backgroundColor = "#e0f7fa";
    
    setTimeout(() => {
        nosotrosSection.style.backgroundColor = "var(--bg-color)";
    }, 2000);
});


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('li a'); 


menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show'); 
    });
});
