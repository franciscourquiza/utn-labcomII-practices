function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

var x = document.getElementById("selectciudad");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var select = document.getElementById("selectciudad");
    console.log(a)
    for (let i = 0; i < a.length; i++){
        select.innerHTML += `<option value="${a[i]}">${a[i]}</option>`;
    }

    var datos

    const llamarDatos= async () => {
        var mycity
        var datos
        var res
        try {
            mycity = document.getElementById("selectciudad").value;
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
        if (res.status == "404"){
            console.log("error")
        }
        else{
            carta.innerHTML = `
            <h3>${mycity}</h3>
            <h3><img src="http://openweathermap.org/img/wn/01d@2x.png"></h3>
            <p>Temperatura: ${datos.main.temp}°</p>
            <p>Sensación térmica: ${datos.main.feels_like}°</p>
            <p>Humedad: ${datos.main.humidity}%</p>
            <p>Velocidad del viento: ${datos.wind.speed}km/h</p>
            <p>Presión: ${datos.main.pressure} p</p>`
            document.getElementById("carta").style.display = "block";
        }
    };


    

 
 
    


