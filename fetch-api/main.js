// fetch api method

document.querySelector(".getData").addEventListener("click", getData);

async function getData() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", {
      mode: "no-cors",
    });
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
