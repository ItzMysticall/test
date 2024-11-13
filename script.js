// Smooth scroll-triggered animations for each section
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < window.innerHeight - revealPoint) {
                section.classList.add("active");
            }
        });
    };

    // Event listener to trigger section reveal on scroll
    window.addEventListener("scroll", revealSection);
    revealSection(); // Initial check for elements in view
});
