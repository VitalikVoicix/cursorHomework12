const heroes =["https://swapi.dev/api/people/1/",
              "https://swapi.dev/api/people/2/", 
              "https://swapi.dev/api/people/3/",
              "https://swapi.dev/api/people/4/",
              "https://swapi.dev/api/people/5/",
              "https://swapi.dev/api/people/10/",
              "https://swapi.dev/api/people/12/",
              "https://swapi.dev/api/people/13/",
              "https://swapi.dev/api/people/14/",
              "https://swapi.dev/api/people/18/",
              "https://swapi.dev/api/people/20/",
              "https://swapi.dev/api/people/21/",
              "https://swapi.dev/api/people/22/",
              "https://swapi.dev/api/people/23/",
              "https://swapi.dev/api/people/24/",
              "https://swapi.dev/api/people/25/",
              "https://swapi.dev/api/people/26/",
              "https://swapi.dev/api/people/27/"]

  function show(){   
for(let i = 0;i<heroes.length;i++){
  fetch(heroes[i])
.then((response) =>{
   return response.json()

})
.then((data) => { 
    let box = document.querySelector(".box");
    let pers =  document.createElement("div");
    pers.innerText =`Hero:${data.name} 
    Gender: ${data.gender}
    Year: ${data.birth_year}`
    pers.classList.add("container")
    box.appendChild(pers);

  });    

}
 btn.disabled = true;
 }
   const btn = document.querySelector(".btn");
        btn.addEventListener("click",show);
     

const showPlanet = document.querySelector(".planets");
const squarePlanets = document.getElementById("showPlanet");

const prevBtn = document.getElementById("prev");
prevBtn.disabled=true;
const nextBtn = document.getElementById("next");
nextBtn.disabled=true;

const baseURL = "http://swapi.dev/api/"
const root = (url) =>
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);
const sendRequest = (url) => {
  const URL = root(url);
  return fetch(URL)
    .then((res) => res.json())
    
}

let page = 1;
function planetRoot(page) {
  return `${baseURL}planets/?page=${page}`;
}
showPlanet.addEventListener("click", () => {
  sendRequest(planetRoot(page)).then((data) => {
    let newPlanet = "";
    data.results.forEach((el) => {
      newPlanet += `<h2>Name: ${el.name}</h2>`
      squarePlanets .innerHTML = newPlanet;
    });
  });
 
  prevBtn.disabled=false;
  nextBtn.disabled=false;

});
nextBtn.addEventListener("click", () => {
  if (page >5) {
    return;
  } else {
    sendRequest(planetRoot((++page))).then((data) => {
      let newPlanet = "";
      data.results.forEach((el) => {
        newPlanet += `<h2>Name: ${el.name}</h2>`;           
                  squarePlanets.innerHTML = newPlanet;
      });
     
    });
  }
});


prevBtn.addEventListener("click", () => {
     if (page <= 1) {
     return;
    } else {
    sendRequest(planetRoot((--page))).then((data) => {
        let newPlanet = "";
        data.results.forEach((el) => {
        newPlanet += `<h2> Name: ${el.name}</h2>`;           
        squarePlanets.innerHTML = newPlanet;
      });
    });
  }
}); 


