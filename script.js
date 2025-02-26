document.addEventListener("DOMContentLoaded", function () {
    const detailsElement = document.getElementById("quote-section");
    const quoteText = document.getElementById("kanye-quote");

    detailsElement.addEventListener("toggle", function () {
        if (detailsElement.open) {
            // Fetch Kanye quote only when details is opened
            fetch("https://api.kanye.rest/")
                .then(response => response.json())
                .then(data => {
                    quoteText.textContent = `"${data.quote}" - Kanye West`;
                })
                .catch(error => {
                    console.error("Error fetching Kanye quote:", error);
                    quoteText.textContent = "Sorry, failed to load the quote.";
                });
        }
    });
});
