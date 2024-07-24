window.onload = function() {
    const passwordInput = document.getElementById('password');

    // Get the parent element of the icon
    const passwordEyeIconParent = document.querySelector('.icon');

    passwordEyeIconParent.addEventListener('click', function() {
        const currentType = passwordInput.getAttribute('type');
        const newType = (currentType === 'password') ? 'text' : 'password';
        passwordInput.setAttribute('type', newType);
    });
};