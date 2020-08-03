//navigator.geolocation
const   temperature     = document.querySelector('.temperature'),
        descriptionMain = document.querySelector('.description-div'),
        place           = document.querySelector('.zone');



window.addEventListener('load', () => {
    let long; 
    let lat; 

    if (navigator.geolocation)
    { 
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
        
        // const proxy = `https://cors-anywhere.herokuapp.com/`
        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=51a6c5b8623bd4187d823fc33473bbe1&units=metric`

    fetch(api)
        .then(response => {
            return response.json();
        }).then(data =>  {
            console.log(data);
            const {temp} = data.main
            const {name} = data
            const {main} = data.weather[0]
            // console.log(main)
            //Set DOM element
            temperature.textContent = temp;
            descriptionMain.textContent = main;
            place.textContent = name;
            setIcons(document.querySelector(".icon"))
            });
        });
    }

    function setIcons(iconID){
        let skycons = new Skycons({"color": "white"});
        skycons.play();
        return skycons.set(iconID, Skycons.PARTLY_CLOUDY_DAY);
    }
});

