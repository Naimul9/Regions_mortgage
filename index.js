document.getElementById('login-btn').addEventListener('click', function () {
    const loginBtn = document.getElementById('login-btn');
    const spinner = document.getElementById('spinner');
    const body = document.getElementById('remove-bg');
    const logo = document.getElementById('logo');
    const img = document.getElementById('sign-img');
    const custom = document.getElementById('customer');
    const house = document.getElementById('house');

    // Show spinner and hide button text
    loginBtn.innerHTML = '<span  id="spinner" class="spinner"></span>';
    spinner.style.display = 'inline-block';
   
    // Add class to transition page and image to white
    body.classList.add('full-white');
    img.classList.add('full-white');
    custom.classList.add('full-white');
    
    // Simulate login delay
    setTimeout(function () {
        spinner.style.display = 'none';
        loginBtn.innerHTML = 'Login';
    }, 3000);

    // Show logo after page turns white
    setTimeout(function () {
        logo.classList.add('centered', 'visible'); // Show logo after page transition
        logo.innerHTML = '<img src="/Images/logo-pyramid.svg" alt="New Logo" />';
    }, 3000); // Delay matches the white transition time

    // Display a new image after the transition
    setTimeout(function() {
        house.innerHTML = '<img src="/Images/pexels-curtis-adams-1694007-3571200.jpg" alt="House Image" />';
        house.style.position = 'relative'; // Ensure the house container is relative
    }, 4000); // Shows the image after everything is done

    
});


document.getElementById('password').addEventListener('input', function () {
    const passwordInput = document.getElementById('password').value;
    const loginBtn = document.getElementById('login-btn');

    // Check if the password field has any value
    if (passwordInput.trim() !== "") {
        // Enable the login button
        loginBtn.disabled = false;
        loginBtn.classList.add('hover')
    } else {
        // Disable the login button if the input is empty
        loginBtn.disabled = true;
        loginBtn.classList.remove('hover')
    }
});