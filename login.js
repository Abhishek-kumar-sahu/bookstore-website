document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    try {
        const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Send JSON data
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            // Redirect or update UI
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});


  