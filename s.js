// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => { // Select links within the <nav>
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('add-files-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function() {
    const files = this.files;
    if (files.length > 0) {
        console.log('Selected files:', files);
    }
});

document.getElementById('about-us-btn').addEventListener('click', function() {
    alert('من نحن');
});