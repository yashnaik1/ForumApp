// Function to handle Google Sign-in
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // User ID
    console.log('Name: ' + profile.getName()); // Full Name
    console.log('Email: ' + profile.getEmail()); // Email

    // Save user info in localStorage (for simplicity)
    localStorage.setItem('userName', profile.getName());
    localStorage.setItem('userEmail', profile.getEmail());

    // Redirect to the forum page
    window.location.href = 'forum.html';
}
