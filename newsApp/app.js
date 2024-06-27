let apiKey = "";

// https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=e4d0e9921d4348feb7848f7ad7df803d
// API Used: http://newsapi.org/s/india-news-api
const container = document.getElementsByClassName("container");
const optionsContainer = document.getElementsByClassName("options-container");

// "in" stands for India
const country = "in";
const options = ["general", "entertainment", "health", "science", "sports", "technology"];

// 100 requests per day
let requestURL;

// Create cards from data
const generateUI = (articles) => {
    for(let item  of articles){
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `<div class="news-image-container">
        <img src="${item.urlToImage || "./newspapaer.jpg" }" alt="" />
>        </div>

        <div class="news-content">
            <div class="news-title">
            ${item.title}
            </div>
            <div class="news-description">
            ${item.description || item.content || ""}
            </div>
            <a href="${item.url}" target="_blank" class="view-button">Read More</a>
            
        </div> 
`
        container.appendChild(card);

           }
};

// News API Call
const getNews = async () = {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if(!response.ok){
        alert
    }
}

const init=()=>{
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
};

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
    
    // `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    init();

}