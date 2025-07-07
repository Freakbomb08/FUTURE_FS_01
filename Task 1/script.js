var text = new Typed('.text', {
    strings: ['Web Developer', 'Designer', 'App Developer', 'Data Analyst'],
    typedSpeed: 120,
    backSpeed: 120,
    loop: true,
})

const showEducationBtn = document.getElementById("showEducation");
const showExperienceBtn = document.getElementById("showExperience");
const educationContent = document.getElementById("educationContent");
const experienceContent = document.getElementById("experienceContent");

showEducationBtn.addEventListener("click", () => {
    educationContent.style.display = "flex";
    experienceContent.style.display = "none";
    showEducationBtn.classList.add("active");
    showExperienceBtn.classList.remove("active");
});

showExperienceBtn.addEventListener("click", () => {
    educationContent.style.display = "none";
    experienceContent.style.display = "flex";
    showEducationBtn.classList.remove("active");
    showExperienceBtn.classList.add("active");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% visible
});

document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
});