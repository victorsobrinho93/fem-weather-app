const parameters = {
    city: null,
    country: null,
    latitude: null,
    longitude: null,
};
const searchButton = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const forecastSection = document.getElementById("forecast");
const searchDropdown = document.getElementById("search-dropdown");

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

searchButton.addEventListener("click", async () => {
    const coordinates = await geoCoding(searchBar.value);
    forecastSection.innerHTML = JSON.stringify(coordinates);
    alert(Date.now());
});

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

// function debounce(func, timeout=1000) {
//     let timer;
//     return (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => console.log(test), timeout);
//     }
// }

// const debounce = (callback, delay) => {
//     let timeoutId = null;
//     return (...args) => {
//         window.clearTimeout(timeoutId);
//         timeoutId = window.setTimeout(() => {
//             callback(...args);
//         }, delay);
//     };
// };

// const debouncedTest = debounce(() => console.log(searchBar.value), 1000);

// function debounce(callback, delay = 2000) {
//     let timer;
//     return () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => callback, delay);
//     };
// }
