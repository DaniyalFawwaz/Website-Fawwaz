const buttons = document.querySelectorAll('.messageButton');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        const image = this.getAttribute('data-image');
        document.getElementById("messageDisplay").innerText = message;
        document.getElementById("imageDisplay").src = image;
    });
});
