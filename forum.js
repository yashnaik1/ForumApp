// Check if user is signed in
document.addEventListener('DOMContentLoaded', function () {
    var userName = localStorage.getItem('userName');
    var userEmail = localStorage.getItem('userEmail');

    if (!userName || !userEmail) {
        // If no user info, redirect to sign-in page
        window.location.href = 'index.html';
    } else {
        // Display a welcome message (optional)
        console.log('Welcome, ' + userName);
    }
});

// Sign out button logic
document.getElementById('signOutBtn').addEventListener('click', function () {
    localStorage.clear();
    window.location.href = 'index.html';
});

// Forum post submission logic
document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var content = document.getElementById('postContent').value;

    // Example of sending post data to a server (could be done with AJAX or Fetch API)
    console.log('User posted:', content);

    // Add the post to the page for demonstration purposes
    var newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = '<h3>New Post</h3><p>' + content + '</p>';
    document.getElementById('forumPosts').appendChild(newPost);
});
