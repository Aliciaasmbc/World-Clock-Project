function updateTime() {
  //tahiti
  let tahitiElement = document.querySelector("#tahiti");
  if (tahitiElement) {
    let tahitiDateElement = tahitiElement.querySelector(".date");
    let tahitiTimeElement = tahitiElement.querySelector(".time");
    let tahitiTime = moment().tz("Pacific/Tahiti");

    tahitiDateElement.innerHTML = tahitiTime.format("MMMM Do YYYY");
    tahitiTimeElement.innerHTML = tahitiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //New York
  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

let cityInterval = null;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  clearInterval(cityInterval);

  setCityInterval(cityTimeZone, cityName);
  cityInterval = setInterval(setCityInterval, 1000, cityTimeZone, cityName);
}

function setCityInterval(cityTimeZone, cityName) {
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")} </small></div>
        </div> 
        <a href="/" style="margin: 10px;padding: 15px;display: block;text-align: center;"> Back to all cities</a>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
