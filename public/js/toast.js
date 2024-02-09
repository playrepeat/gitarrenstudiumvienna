document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        Toastify({
            text: data.message,
            duration: 5000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: data.success ? "green" : "red",
        }).showToast();
    })
    .catch(error => {
        Toastify({
            text: "Error sending message",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    });
});