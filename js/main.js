import { selectUnits } from "./handleUnits.js";
import { api_test } from "./api_test.js";

const header = document.querySelector("header");
// document.getElementById("select-units").append(unitsButton());
header.append(selectUnits());
const searchButton = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const forecastSection = document.getElementById("forecast");
const searchDropdown = document.getElementById("search-dropdown");
const hourlyForecastSection = document.getElementById("hourly-forecast");
// console.log(api_test);

const parameters = {};

// const api_test = {
//     latitude: -20.125,
//     longitude: -41.875,
//     generationtime_ms: 1.1001825332641602,
//     utc_offset_seconds: -10800,
//     timezone: "America/Sao_Paulo",
//     timezone_abbreviation: "GMT-3",
//     elevation: 635,
//     current_units: {
//         time: "iso8601",
//         interval: "seconds",
//         temperature_2m: "°C",
//         precipitation: "mm",
//         apparent_temperature: "°C",
//         relative_humidity_2m: "%",
//         wind_speed_10m: "km/h",
//         weather_code: "wmo code",
//         is_day: "",
//     },
//     current: {
//         time: "2025-09-24T18:00",
//         interval: 900,
//         temperature_2m: 20.8,
//         precipitation: 0,
//         apparent_temperature: 22,
//         relative_humidity_2m: 77,
//         wind_speed_10m: 7.9,
//         weather_code: 3,
//         is_day: 0,
//     },
//     hourly_units: {
//         time: "iso8601",
//         temperature_2m: "°C",
//         weather_code: "wmo code",
//     },
//     hourly: {
//         time: [
//             "2025-09-24T00:00",
//             "2025-09-24T01:00",
//             "2025-09-24T02:00",
//             "2025-09-24T03:00",
//             "2025-09-24T04:00",
//             "2025-09-24T05:00",
//             "2025-09-24T06:00",
//             "2025-09-24T07:00",
//             "2025-09-24T08:00",
//             "2025-09-24T09:00",
//             "2025-09-24T10:00",
//             "2025-09-24T11:00",
//             "2025-09-24T12:00",
//             "2025-09-24T13:00",
//             "2025-09-24T14:00",
//             "2025-09-24T15:00",
//             "2025-09-24T16:00",
//             "2025-09-24T17:00",
//             "2025-09-24T18:00",
//             "2025-09-24T19:00",
//             "2025-09-24T20:00",
//             "2025-09-24T21:00",
//             "2025-09-24T22:00",
//             "2025-09-24T23:00",
//             "2025-09-25T00:00",
//             "2025-09-25T01:00",
//             "2025-09-25T02:00",
//             "2025-09-25T03:00",
//             "2025-09-25T04:00",
//             "2025-09-25T05:00",
//             "2025-09-25T06:00",
//             "2025-09-25T07:00",
//             "2025-09-25T08:00",
//             "2025-09-25T09:00",
//             "2025-09-25T10:00",
//             "2025-09-25T11:00",
//             "2025-09-25T12:00",
//             "2025-09-25T13:00",
//             "2025-09-25T14:00",
//             "2025-09-25T15:00",
//             "2025-09-25T16:00",
//             "2025-09-25T17:00",
//             "2025-09-25T18:00",
//             "2025-09-25T19:00",
//             "2025-09-25T20:00",
//             "2025-09-25T21:00",
//             "2025-09-25T22:00",
//             "2025-09-25T23:00",
//             "2025-09-26T00:00",
//             "2025-09-26T01:00",
//             "2025-09-26T02:00",
//             "2025-09-26T03:00",
//             "2025-09-26T04:00",
//             "2025-09-26T05:00",
//             "2025-09-26T06:00",
//             "2025-09-26T07:00",
//             "2025-09-26T08:00",
//             "2025-09-26T09:00",
//             "2025-09-26T10:00",
//             "2025-09-26T11:00",
//             "2025-09-26T12:00",
//             "2025-09-26T13:00",
//             "2025-09-26T14:00",
//             "2025-09-26T15:00",
//             "2025-09-26T16:00",
//             "2025-09-26T17:00",
//             "2025-09-26T18:00",
//             "2025-09-26T19:00",
//             "2025-09-26T20:00",
//             "2025-09-26T21:00",
//             "2025-09-26T22:00",
//             "2025-09-26T23:00",
//             "2025-09-27T00:00",
//             "2025-09-27T01:00",
//             "2025-09-27T02:00",
//             "2025-09-27T03:00",
//             "2025-09-27T04:00",
//             "2025-09-27T05:00",
//             "2025-09-27T06:00",
//             "2025-09-27T07:00",
//             "2025-09-27T08:00",
//             "2025-09-27T09:00",
//             "2025-09-27T10:00",
//             "2025-09-27T11:00",
//             "2025-09-27T12:00",
//             "2025-09-27T13:00",
//             "2025-09-27T14:00",
//             "2025-09-27T15:00",
//             "2025-09-27T16:00",
//             "2025-09-27T17:00",
//             "2025-09-27T18:00",
//             "2025-09-27T19:00",
//             "2025-09-27T20:00",
//             "2025-09-27T21:00",
//             "2025-09-27T22:00",
//             "2025-09-27T23:00",
//             "2025-09-28T00:00",
//             "2025-09-28T01:00",
//             "2025-09-28T02:00",
//             "2025-09-28T03:00",
//             "2025-09-28T04:00",
//             "2025-09-28T05:00",
//             "2025-09-28T06:00",
//             "2025-09-28T07:00",
//             "2025-09-28T08:00",
//             "2025-09-28T09:00",
//             "2025-09-28T10:00",
//             "2025-09-28T11:00",
//             "2025-09-28T12:00",
//             "2025-09-28T13:00",
//             "2025-09-28T14:00",
//             "2025-09-28T15:00",
//             "2025-09-28T16:00",
//             "2025-09-28T17:00",
//             "2025-09-28T18:00",
//             "2025-09-28T19:00",
//             "2025-09-28T20:00",
//             "2025-09-28T21:00",
//             "2025-09-28T22:00",
//             "2025-09-28T23:00",
//             "2025-09-29T00:00",
//             "2025-09-29T01:00",
//             "2025-09-29T02:00",
//             "2025-09-29T03:00",
//             "2025-09-29T04:00",
//             "2025-09-29T05:00",
//             "2025-09-29T06:00",
//             "2025-09-29T07:00",
//             "2025-09-29T08:00",
//             "2025-09-29T09:00",
//             "2025-09-29T10:00",
//             "2025-09-29T11:00",
//             "2025-09-29T12:00",
//             "2025-09-29T13:00",
//             "2025-09-29T14:00",
//             "2025-09-29T15:00",
//             "2025-09-29T16:00",
//             "2025-09-29T17:00",
//             "2025-09-29T18:00",
//             "2025-09-29T19:00",
//             "2025-09-29T20:00",
//             "2025-09-29T21:00",
//             "2025-09-29T22:00",
//             "2025-09-29T23:00",
//             "2025-09-30T00:00",
//             "2025-09-30T01:00",
//             "2025-09-30T02:00",
//             "2025-09-30T03:00",
//             "2025-09-30T04:00",
//             "2025-09-30T05:00",
//             "2025-09-30T06:00",
//             "2025-09-30T07:00",
//             "2025-09-30T08:00",
//             "2025-09-30T09:00",
//             "2025-09-30T10:00",
//             "2025-09-30T11:00",
//             "2025-09-30T12:00",
//             "2025-09-30T13:00",
//             "2025-09-30T14:00",
//             "2025-09-30T15:00",
//             "2025-09-30T16:00",
//             "2025-09-30T17:00",
//             "2025-09-30T18:00",
//             "2025-09-30T19:00",
//             "2025-09-30T20:00",
//             "2025-09-30T21:00",
//             "2025-09-30T22:00",
//             "2025-09-30T23:00",
//         ],
//         temperature_2m: [
//             17.9, 17.5, 17.2, 17.3, 17.3, 17.3, 17.3, 17.8, 19.2, 20.9, 22.3,
//             23.4, 24, 24.2, 23.8, 23.8, 23.4, 22.2, 20.8, 20, 19.5, 19.1, 18.6,
//             18.2, 17.9, 17.7, 17.6, 17.5, 17.5, 17.4, 17.3, 17.8, 18.7, 19.7,
//             20.4, 21, 21.7, 21.4, 19.8, 19.1, 18.8, 18, 17.5, 17.2, 17, 16.7,
//             16.4, 15.9, 15.5, 15, 14.6, 14.5, 14.5, 14.4, 14.3, 15.2, 16.3,
//             17.4, 18.3, 19, 19, 18.7, 17.6, 17.4, 17.9, 17.6, 16.9, 16.1, 15.4,
//             14.6, 13.8, 12.8, 12.2, 11.8, 11.4, 11.1, 10.8, 10.6, 10.5, 12.3,
//             14.3, 15.8, 17.7, 19.4, 21.1, 22, 22.5, 22.4, 21.8, 20.7, 19.5,
//             18.4, 17.2, 16, 14.7, 13.4, 12.4, 11.7, 11.3, 11, 10.7, 10.4, 10.9,
//             12.4, 14.6, 16.6, 18.4, 20, 21.2, 22.2, 22.8, 22.9, 22.1, 20.6,
//             19.2, 17.7, 16.2, 15, 14.4, 14.2, 13.9, 13.2, 12.5, 12, 11.6, 11.5,
//             12, 13.5, 15.7, 17.8, 19.7, 21.6, 23.1, 24.1, 24.7, 24.6, 23.7,
//             22.2, 20.7, 19.6, 18.6, 17.7, 16.7, 15.8, 15.1, 14.7, 14.5, 14.4,
//             14, 13.7, 13.9, 15.2, 17, 18.8, 20.2, 21.5, 22.6, 23.6, 24.3, 24.4,
//             23.7, 22.4, 21.1, 19.9, 18.6, 17.4, 16.5, 15.8,
//         ],
//         weather_code: [
//             3, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 80, 3, 3, 3, 3,
//             3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
//             3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
//             3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 3, 2, 3, 1, 1, 1,
//             2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,
//             1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1,
//             1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2,
//             3, 3, 3, 3, 3, 3, 2, 2,
//         ],
//     },
//     daily_units: {
//         time: "iso8601",
//         weather_code: "wmo code",
//         temperature_2m_max: "°C",
//         temperature_2m_min: "°C",
//     },
//     daily: {
//         time: [
//             "2025-09-24",
//             "2025-09-25",
//             "2025-09-26",
//             "2025-09-27",
//             "2025-09-28",
//             "2025-09-29",
//             "2025-09-30",
//         ],
//         weather_code: [80, 3, 3, 3, 2, 3, 3],
//         temperature_2m_max: [24.2, 21.7, 19, 22.5, 22.9, 24.7, 24.4],
//         temperature_2m_min: [17.2, 15.9, 12.8, 10.5, 10.4, 11.5, 13.7],
//     },
// };
// False == metric

function processHourlyForecast({ time, temperature_2m, weather_code }) {
    return Array.from({ length: time.length }, (_, i) => [
        time[i],
        temperature_2m[i],
        weather_code[i],
    ])
        .filter((c) => new Date(c[0]) > Date.now())
        .slice(0, 10);
}

(function hourlyForecastButton() {
    const params = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };
    for (const [key, value] of Object.entries(params)) {
        document
            .getElementById("select-day")
            .appendChild(hourlyForecastOptions(key, value));
    }
})();

function hourlyForecastOptions(value, str) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = str;
    return option;
}

// const toggleImperial = {};

// const unitC = document.getElementById("unit-c");

// document.getElementById("imperial-switch").addEventListener("click", () => {
//     for (key in units) {
//         units[key].metric = false;
//     }
// });

const api_url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code,precipitation,apparent_temperature,relative_humidity_2m,wind_speed_80m&bounding_box=-90,-180,90,180";

const debounce = (callback, delay = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), delay);
    };
};

const processGeoCoding = debounce(async () => {
    const { results } = await geoCoding(searchBar.value);
    searchDropdown.innerHTML = "";
    searchDropdown.classList.remove("hidden");
    results.forEach((res) => {
        searchDropdown.appendChild(createDropdownElement(res));
    });
    // forecastSection.innerHTML = JSON.stringify(data);
}, 300);

function createDropdownElement(res) {
    const li = document.createElement("li");
    const str = `${res.name}, ${res.admin1} - ${res.country_code}`;
    li.setAttribute("data-item-id", res.id);
    li.textContent = str;
    li.classList.add("dropdown-item");
    li.addEventListener("click", () => {
        Object.assign(parameters, res);
        searchDropdown.classList.add("hidden");
        searchBar.value = str;
        console.log(parameters);
    });
    return li;
}

test.textContent = "This is an attempt??";

searchButton.addEventListener("click", async () => fetchData());

searchBar.addEventListener("input", () => {
    if (searchBar.value.length > 4) {
        processGeoCoding();
    }
});

function test() {
    console.log(searchBar.value);
}

async function geoCoding(searchTerm) {
    try {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=en&format=json`
        );
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Request failed:", error);
    }
}

async function fetchData() {
    try {
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${parameters.latitude}&longitude=${parameters.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,precipitation,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&timezone=auto`
        );
        if (!res.ok) throw new Error(response.status);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Request failed:", error);
    }
}

// updateUnits();
// document
//     .getElementById("units-dropdown")
//     .appendChild(unitsFieldSet("Bocanegra", "botao1", "botao2"));
