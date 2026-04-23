document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        // Set a timeout to remove the preloader after 5 seconds
        setTimeout(() => {
            preloader.classList.add("fade-out");
            document.body.classList.remove("preloader-active");
            
            // Optional: Completely remove from DOM after fade animation
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 5000); // 5 seconds
    }
});
