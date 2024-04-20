// for loading 
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    const content = document.getElementById('content');

    // Hide loader when the page is fully loaded
    loader.style.display = 'none';
    content.style.display = 'block';
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}


// for carousel
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();


//chat bot
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;
const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}
const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");
    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        })
    }
    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}
const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;
    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}
chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});
sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
//nav



// for online offline status

const onlineStatusDiv = document.getElementById('state');
const onlineDiv = document.getElementById('online');
const offlineDiv = document.getElementById('offline');
let isOnline = navigator.onLine;
let wasOnline = isOnline;
const displayDuration = 3000; // in milliseconds (3 seconds)

function showOnlineMessage() {
    onlineDiv.classList.remove('hide');
    setTimeout(() => {
        onlineDiv.classList.add('hide');
    }, displayDuration);
}

function updateOnlineStatus(event) {
    isOnline = navigator.onLine;

    if (isOnline && !wasOnline) {
        showOnlineMessage();
    }

    if (!isOnline) {
        offlineDiv.classList.remove('hide');
    } else {
        offlineDiv.classList.add('hide');
    }

    wasOnline = isOnline;
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

updateOnlineStatus(); // Initial check


// for email js 
// Initialize EmailJS with your public key
emailjs.init("NK6QP-GbG6gGC05Oz"); // Replace YOUR_PUBLIC_KEY with your actual EmailJS public key

// Handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Prepare email parameters
  var params = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  
  // Send email using EmailJS
  emailjs.send("service_vpxkrku", "template_50miuds", params)
    .then(function(response) {
      document.getElementById("successMessage").style.display = "block";
      document.getElementById("feedbackForm").reset();
    }, function(error) {
      alert("There was an error. Please try again later.");
    });
});


// JavaScript for dynamic navbar

     // Function to handle logout
     function logout() {
        // Remove the logged-in status from localStorage
        localStorage.removeItem("isLoggedIn");
        // Update the navigation bar
        updateNavbar(false);
      }
      
      // Function to update the navbar based on the login status
      function updateNavbar(isLoggedIn) {
        const loginSignupLink = document.getElementById("loginSignup");
        const logoutLink = document.getElementById("logout");
      
        if (isLoggedIn) {
          loginSignupLink.style.display = "none"; // Hide the login/signup link
          logoutLink.style.display = "block"; // Show the logout link
        } else {
          loginSignupLink.style.display = "block"; // Show the login/signup link
          logoutLink.style.display = "none"; // Hide the logout link
        }
      }
      
      // Check if the user is logged in when the page loads
      window.addEventListener("DOMContentLoaded", () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
          updateNavbar(true);
        } else {
          updateNavbar(false);
        }
      });
      
      
      const signUpButton = document.getElementById("signUp");
      const signInButton = document.getElementById("login");
      const container = document.getElementById("container");
      const registrationForm = document.getElementById("registrationForm");
      const loginForm = document.getElementById("loginForm");
      
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
      
      registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
      
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
      
        const user = {
          username: username,
          email: email,
          password: password,
        };
      
        localStorage.setItem("user", JSON.stringify(user));
      
        // Show a confirmation message after successful registration
        alert("Registration successful! You can now sign in.");
      
        // Reset the form after submission
        registrationForm.reset();
      });
      
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
      
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
      
        const storedUser = JSON.parse(localStorage.getItem("user"));
      
        if (
          storedUser &&
          email === storedUser.email &&
          password === storedUser.password
        ) {
          // Set the logged-in status in localStorage
          localStorage.setItem("isLoggedIn", true);
          // Redirect to the index page after successful login
          window.location.href = "index.html";
          // Show a popup message
          alert("Login successful!");
        } else {
          alert("Invalid email or password. Please try again.");
        }
      });
