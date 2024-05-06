// for navbar 
const studyMaterials = [
    { title: "Engineering mathematics 1", url: "NotesSM.html#math" },
    { title: "Engineering mathematics 2", url: "study.html" },
    { title: "Engineering physics", url: "NotesSM.html#Phy" },
    { title: "Basic Electrical Engineering", url: "chemistry.html" },
    { title: "Basic Civil Engineering", url: "chemistry.html" },
    { title: "Basic Mechanical Engineering", url: "chemistry.html" },
    { title: "Programming for Problem Solving", url: "chemistry.html" },
    { title: "Human Values", url: "chemistry.html" },
    { title: "Communication Skils", url: "chemistry.html" },
    { title: "Computer-aided design", url: "chemistry.html" },
    { title: "Computer-aided Manufacturing", url: "chemistry.html" },
    { title: "Events", url: "event.html"},
    { title: "Study Material", url: "study.html"},
    { title: "Roadmaps", url: "roadmap.html"},
    { title: "About", url: "about.html"},
    { title: "Community", url: "community.html"},
    { title: "AI tools", url: "AI tools.html"},
];

const searchInput = document.getElementById("search-input");
const suggestionsContainer = document.getElementById("suggestions");
const searchResultsContainer = document.getElementById("search-results");

searchInput.addEventListener("input", displaySuggestions);
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

function displaySuggestions() {
    const inputValue = searchInput.value.trim().toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (inputValue.length < 2) {
        return; // Clear the suggestions container and return if input length is less than 3 characters
    }

    const suggestions = studyMaterials.filter(material => material.title.toLowerCase().includes(inputValue));

    suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.textContent = suggestion.title;
        suggestionDiv.classList.add("suggestion");
        suggestionDiv.addEventListener("click", function() {
            window.location.href = suggestion.url; // Directly navigate to the suggestion's URL
        });
        suggestionsContainer.appendChild(suggestionDiv);
    });
}


function search() {
    const inputValue = searchInput.value.toLowerCase();
    const searchResults = studyMaterials.find(material => material.title.toLowerCase() === inputValue);
    if (searchResults) {
        window.location.href = searchResults.url; // Redirect if search term matches
    } else {
        alert("Sorry, no such item found on this website."); // Show alert if no match found
    }
}