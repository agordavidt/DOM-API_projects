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
                <h3>${inpWord}</h3>
                <button>
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, exercitationem?
            </p>
            <p class="word-example">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ex!
            </p>
                `
            });
})