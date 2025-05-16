document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Project link clicked!');
        });
    });
});
