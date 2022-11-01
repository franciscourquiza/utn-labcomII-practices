

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
    cities = JSON.parse(cities);
    } else {
    cities = [];
    }
    return cities;
}

const addCityToLocalStorage= async () => {
    var datos
    var mycity
    var res

    try {
        mycity = document.getElementById("text-city-input").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=30a3b52d6f151ea6020d3ecd15361735&units=metric&lang=es`
        res = await fetch(url);

        if (res.ok) {
            datos = await res.json();
            console.log(datos);
        } else {
            console.log(res.status);
        }
    } catch (err) {
        console.log(err)
    }

    let newCity = document.getElementById("text-city-input").value;
    let cities = getCitiesFromLocalStorage();
    if (cities.indexOf(newCity)>=0){
        document.getElementById("error").style.display = "none";
        document.getElementById("exito").style.display = "none";
        document.getElementById("repetida").style.display = "block";
    }
    else if(res.status == "404"){
        document.getElementById("exito").style.display = "none";
        document.getElementById("repetida").style.display = "none";
        document.getElementById("error").style.display = "block";
    } 
    else {
        cities.push(newCity);
        document.getElementById("error").style.display = "none";
        document.getElementById("repetida").style.display = "none";
        document.getElementById("exito").style.display = "block";
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));
}