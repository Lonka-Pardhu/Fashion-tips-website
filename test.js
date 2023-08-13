document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        container.addEventListener('click', () => {
            alert('Clicked');
        });
    });
});
