function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('imagePreview').src = event.target.result;
      document.getElementById('imagePreview').style.display = 'block';
      document.getElementById('imageUrl').value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
  
  function submitPost() {
    var postInput = document.getElementById("postInput");
    var imageUrlInput = document.getElementById("imageUrl");
    var postText = postInput.value.trim();
    var imageUrl = imageUrlInput.value.trim();
  
    if (postText !== "" || imageUrl !== "") {
      var listItem = document.createElement("li");
      listItem.className = "post-item";
      
      if (imageUrl !== "") {
        var image = document.createElement("img");
        image.src = imageUrl;
        listItem.appendChild(image);
      }
  
      var text = document.createElement("p");
      text.textContent = postText;
      listItem.appendChild(text);
  
      var userInfo = document.createElement("div");
      userInfo.className = "user-info";
      userInfo.textContent = "Posted by: User123"; // Replace with actual user info
      listItem.appendChild(userInfo);
  
      var actions = document.createElement("div");
      actions.className = "actions";
      var likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      likeButton.onclick = function() {
        likePost(likeButton);
      };
      actions.appendChild(likeButton);
      listItem.appendChild(actions);
  
      var likes = document.createElement("div");
      likes.className = "likes";
      likes.textContent = "0 likes";
      listItem.appendChild(likes);
  
      var commentForm = document.createElement("div");
      commentForm.className = "comment";
      commentForm.innerHTML = `
        <input type="text" placeholder="Write a comment...">
        <textarea placeholder="Write a comment..."></textarea>
        <button onclick="submitComment(this)">Comment</button>
        <ul class="comment-list"></ul>
      `;
      listItem.appendChild(commentForm);
  
      document.getElementById("postList").appendChild(listItem);
  
      postInput.value = "";
      imageUrlInput.value = "";
      document.getElementById('imagePreview').style.display = 'none';
    }
  }
  
  function submitQuery() {
    var queryInput = document.getElementById("queryInput");
    var queryText = queryInput.value.trim();
  
    if (queryText !== "") {
      var listItem = document.createElement("li");
      listItem.className = "post-item";
  
      var text = document.createElement("p");
      text.textContent = queryText;
      listItem.appendChild(text);
  
      var userInfo = document.createElement("div");
      userInfo.className = "user-info";
      userInfo.textContent = "Posted by: User123"; // Replace with actual user info
      listItem.appendChild(userInfo);
  
      var actions = document.createElement("div");
      actions.className = "actions";
      var likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      likeButton.onclick = function() {
        likePost(likeButton);
      };
      actions.appendChild(likeButton);
      listItem.appendChild(actions);
  
      var likes = document.createElement("div");
      likes.className = "likes";
      likes.textContent = "0 likes";
      listItem.appendChild(likes);
  
      var commentForm = document.createElement("div");
      commentForm.className = "comment";
      commentForm.innerHTML = `
        <input type="text" placeholder="Write a comment...">
        <textarea placeholder="Write a comment..."></textarea>
        <button onclick="submitComment(this)">Comment</button>
        <ul class="comment-list"></ul>
      `;
      listItem.appendChild(commentForm);
  
      document.getElementById("queryList").appendChild(listItem);
  
      queryInput.value = "";
    }
  }
  
  function likePost(button) {
    var likes = button.parentNode.parentNode.querySelector(".likes");
    var likeCount = parseInt(likes.textContent);
    if (!button.classList.contains("liked")) {
      likeCount++;
      likes.textContent = likeCount + (likeCount === 1 ? " like" : " likes");
      button.classList.add("liked");
    } else {
      likeCount--;
      likes.textContent = likeCount + (likeCount === 1 ? " like" : " likes");
      button.classList.remove("liked");
    }
  }
  
  function submitComment(button) {
    var commentInput = button.previousElementSibling.previousElementSibling;
    var commentText = commentInput.value.trim();
    if (commentText !== "") {
      var listItem = document.createElement("li");
      listItem.textContent = commentText;
      button.parentNode.querySelector(".comment-list").appendChild(listItem);
      commentInput.value = "";
    }
  }
  
  function showPostSection() {
    document.getElementById('postSection').style.display = 'block';
    document.getElementById('querySection').style.display = 'none';
  }
  
  function showQuerySection() {
    document.getElementById('postSection').style.display = 'none';
    document.getElementById('querySection').style.display = 'block';
  }
  
  // Preload some sample posts
  window.addEventListener('DOMContentLoaded', function() {
    var postList = document.getElementById('postList');
    var queryList = document.getElementById('queryList');
  
    // Sample posts
    var samplePosts = [
      { text: 'This is the first sample post.', image: 'https://via.placeholder.com/150' },
      { text: 'Another sample post with an image.', image: 'https://via.placeholder.com/200' },
      { text: 'Sample post without an image.' }
    ];
  
    // Add sample posts to postList
    samplePosts.forEach(function(post) {
      var listItem = document.createElement('li');
      listItem.className = 'post-item';
  
      if (post.image) {
        var image = document.createElement('img');
        image.src = post.image;
        listItem.appendChild(image);
      }
  
      var text = document.createElement('p');
      text.textContent = post.text;
      listItem.appendChild(text);
  
      var userInfo = document.createElement('div');
      userInfo.className = 'user-info';
      userInfo.textContent = 'Posted by: User123'; // Replace with actual user info
      listItem.appendChild(userInfo);
  
      var actions = document.createElement('div');
      actions.className = 'actions';
      var likeButton = document.createElement('button');
      likeButton.textContent = 'Like';
      likeButton.onclick = function() {
        likePost(likeButton);
      };
      actions.appendChild(likeButton);
      listItem.appendChild(actions);
  
      var likes = document.createElement('div');
      likes.className = 'likes';
      likes.textContent = '0 likes';
      listItem.appendChild(likes);
  
      var commentForm = document.createElement('div');
      commentForm.className = 'comment';
      commentForm.innerHTML = `
        <input type="text" placeholder="Write a comment...">
        <textarea placeholder="Write a comment..."></textarea>
        <button onclick="submitComment(this)">Comment</button>
        <ul class="comment-list"></ul>
      `;
      listItem.appendChild(commentForm);
  
      postList.appendChild(listItem);
    });
  });

  // Preload some sample queries
window.addEventListener('DOMContentLoaded', function() {
  var queryList = document.getElementById('queryList');

  // Sample queries
  var sampleQueries = [
    'How can I improve my coding skills?',
    'What are the best online resources for learning JavaScript?',
    'Can someone recommend a good book on algorithms?',
    'How do I set up a development environment for web development?',
    'What are the career prospects in data science?'
  ];

  // Add sample queries to queryList
  sampleQueries.forEach(function(queryText) {
    var listItem = document.createElement('li');
    listItem.className = 'post-item';

    var text = document.createElement('p');
    text.textContent = queryText;
    listItem.appendChild(text);

    var userInfo = document.createElement('div');
    userInfo.className = 'user-info';
    userInfo.textContent = 'Posted by: user123'; // Replace with actual user info
    listItem.appendChild(userInfo);

    var actions = document.createElement('div');
    actions.className = 'actions';
    var likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.onclick = function() {
      likePost(likeButton);
    };
    actions.appendChild(likeButton);
    listItem.appendChild(actions);

    var likes = document.createElement('div');
    likes.className = 'likes';
    likes.textContent = '0 likes';
    listItem.appendChild(likes);

    var commentForm = document.createElement('div');
    commentForm.className = 'comment';
    commentForm.innerHTML = `
      <input type="text" placeholder="Write a comment...">
      <textarea placeholder="Write a comment..."></textarea>
      <button onclick="submitComment(this)">Comment</button>
      <ul class="comment-list"></ul>
    `;
    listItem.appendChild(commentForm);

    queryList.appendChild(listItem);
  });
});


// Global variables to store user profile information
var username = "";
var email = "";

// Function to update user profile
function updateProfile(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var usernameInput = document.querySelector('#usernameInput');
  var emailInput = document.querySelector('#emailInput');
  
  // Update global variables with new values
  username = usernameInput.value;
  email = emailInput.value;
  
  // Display updated profile information
  var profileSection = document.querySelector('.profile-section');
  profileSection.innerHTML = `
    <h3>Manage Profile</h3>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
    <button onclick="updateProfile(event)">Update Profile</button>
  `;
}

// Function to submit a new post
function submitPost() {
  var postInput = document.getElementById("postInput");
  var imageUrlInput = document.getElementById("imageUrl");
  var postText = postInput.value.trim();
  var imageUrl = imageUrlInput.value.trim();

  if (postText !== "" || imageUrl !== "") {
    // Create new post item
    var listItem = document.createElement("li");
    listItem.className = "post-item";

    // Create post content
    var content = "";
    if (imageUrl !== "") {
      content += `<img src="${imageUrl}" alt="Post Image">`;
    }
    content += `<p>${postText}</p>`;
    listItem.innerHTML = content;

    // Add user information to the post
    var userInfo = document.createElement("div");
    userInfo.className = "user-info";
    userInfo.textContent = `Posted by: ${username} (${email})`;
    listItem.appendChild(userInfo);

    // Add post item to the post list
    var postList = document.getElementById("postList");
    postList.appendChild(listItem);

    // Reset input fields
    postInput.value = "";
    imageUrlInput.value = "";
    document.getElementById('imagePreview').style.display = 'none';
  }
}

// Function to submit a new post
function submitPost() {
  var postInput = document.getElementById("postInput");
  var imageUrlInput = document.getElementById("imageUrl");
  var postText = postInput.value.trim();
  var imageUrl = imageUrlInput.value.trim();

  if (postText !== "" || imageUrl !== "") {
    // Create new post item
    var listItem = document.createElement("li");
    listItem.className = "post-item";

    // Create post content
    var content = "";
    if (imageUrl !== "") {
      content += `<img src="${imageUrl}" alt="Post Image">`;
    }
    content += `<p>${postText}</p>`;
    listItem.innerHTML = content;

    // Add user information to the post
    var userInfo = document.createElement("div");
    userInfo.className = "user-info";
    userInfo.textContent = `Posted by: ${username} (${email})`;
    listItem.appendChild(userInfo);

    // Add actions to the post
    var actions = document.createElement("div");
    actions.className = "actions";
    var likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.onclick = function() {
      likePost(likeButton);
    };
    actions.appendChild(likeButton);
    var commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.onclick = function() {
      toggleComments(listItem);
    };
    actions.appendChild(commentButton);
    listItem.appendChild(actions);

    // Add likes section
    var likes = document.createElement("div");
    likes.className = "likes";
    likes.textContent = "0 likes";
    listItem.appendChild(likes);

    // Add comment section
    var commentForm = document.createElement("div");
    commentForm.className = "comment";
    commentForm.innerHTML = `
      <input type="text" placeholder="Write a comment...">
      <textarea placeholder="Write a comment..."></textarea>
      <button onclick="submitComment(this)">Comment</button>
      <ul class="comment-list"></ul>
    `;
    listItem.appendChild(commentForm);

    // Add post item to the post list
    var postList = document.getElementById("postList");
    postList.appendChild(listItem);

    // Reset input fields
    postInput.value = "";
    imageUrlInput.value = "";
    document.getElementById('imagePreview').style.display = 'none';
  }
}

// Function to toggle comments on a post
function toggleComments(postItem) {
  var commentSection = postItem.querySelector(".comment");
  commentSection.classList.toggle("show");
}

// Function to submit a new comment
function submitComment(button) {
  var commentInput = button.previousElementSibling.previousElementSibling;
  var commentText = commentInput.value.trim();
  if (commentText !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = commentText;
    button.parentNode.querySelector(".comment-list").appendChild(listItem);
    commentInput.value = "";
  }
}


// Function to submit a new post
function submitPost() {
  var postInput = document.getElementById("postInput");
  var imageUrlInput = document.getElementById("imageUrl");
  var postText = postInput.value.trim();
  var imageUrl = imageUrlInput.value.trim();

  if (postText !== "" || imageUrl !== "") {
    // Create new post item
    var listItem = document.createElement("li");
    listItem.className = "post-item";

    // Create post content
    var content = "";
    if (imageUrl !== "") {
      content += `<img src="${imageUrl}" alt="Post Image">`;
    }
    content += `<p>${postText}</p>`;
    listItem.innerHTML = content;

    // Add user information to the post
    var userInfo = document.createElement("div");
    userInfo.className = "user-info";
    userInfo.textContent = `Posted by: ${username} (${email})`;
    listItem.appendChild(userInfo);

    // Add timestamp to the post
    var timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = getTimeSince(new Date());
    listItem.appendChild(timestamp);

    // Add actions to the post
    var actions = document.createElement("div");
    actions.className = "actions";
    var likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.onclick = function() {
      likePost(likeButton);
    };
    actions.appendChild(likeButton);
    var commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.onclick = function() {
      toggleComments(listItem);
    };
    actions.appendChild(commentButton);
    listItem.appendChild(actions);

    // Add likes section
    var likes = document.createElement("div");
    likes.className = "likes";
    likes.textContent = "0 likes";
    listItem.appendChild(likes);

    // Add comment section
    var commentForm = document.createElement("div");
    commentForm.className = "comment";
    commentForm.innerHTML = `
      <input type="text" placeholder="Write a comment...">
      <textarea placeholder="Write a comment..."></textarea>
      <button onclick="submitComment(this)">Comment</button>
      <ul class="comment-list"></ul>
    `;
    listItem.appendChild(commentForm);

    // Add post item to the top of the post list
    var postList = document.getElementById("postList");
    postList.insertBefore(listItem, postList.firstChild);

    // Reset input fields
    postInput.value = "";
    imageUrlInput.value = "";
    document.getElementById('imagePreview').style.display = 'none';
  }
}

// Function to get time since a given date
function getTimeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

// Function to update user information in the community section
function updateUserInfo() {
  // Retrieve user information from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Check if user information exists
  if (storedUser) {
    // Update HTML elements with user information
    const usernameElement = document.getElementById("usernameDisplay");
    const emailElement = document.getElementById("emailDisplay");

    if (usernameElement && emailElement) {
      usernameElement.textContent = storedUser.username;
      emailElement.textContent = storedUser.email;
    }
  }
}

// Call the function to update user information when the page loads
window.addEventListener("DOMContentLoaded", updateUserInfo);
