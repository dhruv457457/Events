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
  