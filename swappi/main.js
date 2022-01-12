const btn = document.querySelector("button");

function buttonHandler() {
  console.log("button clicked");
  document.querySelector("body").style.backgroundColor = 'green';
  axios.get("https://swapi.dev/api/planets/?search=alderaan")
    .then(function(res) {
      let residentsArray = res.data.results[0].residents;
      for (let i = 0; i < residentsArray.length; i++) {
        axios.get(residentsArray[i])
          .then(function(re) {
            //console.log(re.data.name);
            let personElement = document.createElement("h2");
            personElement.innerHTML += re.data.name;
            document.querySelector("body").appendChild(personElement);
          })
      }
    });
};

btn.addEventListener('click', buttonHandler);
