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
