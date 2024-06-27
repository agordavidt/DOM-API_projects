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

                // sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`);            
            });
});

sound.setAttribute("src", "https://api.dictionaryapi.dev/media/pronunciations/en/home-us.mp3");
function playSound(){
    sound.play();
}