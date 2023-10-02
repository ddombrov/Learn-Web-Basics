const getJokeBtn = document.getElementById("getJokeBtn"); // add id
const jokeText = document.getElementById("jokeText"); // add id

getJokeBtn.addEventListener("click", () => { // add event listener type
    jokeText.textContent = "Fetching a joke...";

    fetch("https://api.api-ninjas.com/v1/jokes?limit=1", { // add event request url
        headers: { 'X-Api-Key': '6VY8ptrsVvHVHmDwgZIk2g==MJRkl1yFv6SgLrx9' } // add api key
    })
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {

            jokeText.textContent = data[0].joke;

        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        });
});

/*Step 17: obtain DOM objects */

/*Step 18: Create event listener for button click */

/*Step 19: Create account with api-ninjas (https://api-ninjas.com/) */

/*Step 20: Get API url and API Key */

/*Step 21: Create API Call */



