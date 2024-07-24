// fetch api method

document.querySelector(".getData").addEventListener("click", getData);

async function getData() {
  try {
    const res = await fetch(
      "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it",
      {
        mode: "no-cors",
      }
    );
    if (!res.ok) {
      console.log(`Response Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err)
  };
}


getData();


// url object

const details = new URL("https://username:password@URL");

console.log(details.protocol);
console.log(`userame: ${details.username}`);
console.log(`password: ${details.password}`);
console.log(`hostname: ${details.hostname}`);



async function nameFunction(){
    try{
        const res = await fetch(url, settings);
        if(!res.ok){
            console.log(res.status);
        }
        const resData = await res.json();
    }
    catch (err){
        console.log(err);
    }
}


function nameF(){
    fetch('url')
    .then((res)=>res.json())  
    .then((data)=>{
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
    }
