'use strict';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const result = document.getElementById('result');
const sound = document.getElementById('sound');

const btn = document.getElementById('search-btn');

btn.addEventListener('click', () => {
    let inpWord = document.getElementById('input-word').value;
        // console.log(inpWord);

        fetch(`${url}${inpWord}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
                 <div class="word">
                <h3>${inpWord.toLowerCase()}</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}                
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}</br>
                ${data[0].meanings[0].definitions[1].example || ""}
            </p>
                `;

                sound.setAttribute("src", `${data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio || data[0].phonetics[3].audio || data[0].phonetics[4].audio || data[0].phonetics[5].audio}`);       
            });
});

// sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
function playSound(){
    sound.play();
}
// Additional tasks
// Add other prepositions
// Add examples for all prepostions
// number examples
// make the audio play be based on the preposition
// enter on input focus should trigger button
const input = document.getElementById('input-word');
input.addEventListener('keydown', function(event) {    
    if (event.key === 'Enter') {
        event.preventDefault();
        btn.click();
    }
});