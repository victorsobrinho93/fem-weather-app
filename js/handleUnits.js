const units = {
    Temperature: {
        units: ["Celsius (°C)", "Fahrenheit (°F)"],
        metric: true,
    },
    "Wind Speed": {
        units: ["km/h", "mph"],
        metric: true,
    },
    Precipitation: {
        units: ["Millimeters (mm)", "Inches (in)"],
        metric: true,
    },
};

/**
 <div id="units-menu">
                <button type="button" id="units-button"><img src="assets/images/icon-units.svg" alt="" class="icon"><span>Units</span><img src="assets/images/icon-dropdown.svg" alt="" class="icon"></button>
                <div id="units-dropdown">
                    <button type="button" id="imperial-switch" class="units-btn">Switch to Imperial</button>
                    <div id="fields"></div>
                </div>
  </div>
 * 
 * 
 */

export function selectUnits() {
    let isOpen = false;
    const div = Object.assign(document.createElement("div"), {
        id: "select-units",
    });
    const button = Object.assign(document.createElement("button"), {
        id: "units-button",
        innerHTML: `
        <img src="assets/images/icon-units.svg" alt="" class="icon">
        <span>Units</span>
        <img src="assets/images/icon-dropdown.svg" alt="" class="icon">
        `,
    });
    // const menu = render();

    button.addEventListener("click", () => {
        document.getElementById("units-dropdown").classList.toggle("hidden");
        button.classList.toggle("active");
        // console.log("This works??");
    });
    div.append(button, render(true));
    return div;
    // div.id = "select-units";
}

function refresh() {
    document.getElementById("units-dropdown").replaceWith(render());
}

function render(init = false) {
    const div = Object.assign(document.createElement("div"), {
        id: "units-dropdown",
        className: init ? "hidden" : "",
    });
    div.append(imperialButton());
    for (const unit in units) {
        div.append(buttonsFieldset(unit, ...units[unit].units));
    }
    return div;
}

function imperialButton() {
    const button = document.createElement("button");
    button.type = "button";
    // btn.id = "imperial-switch";
    button.classList.add("units-btn");
    button.textContent = "Switch to Imperial";
    button.addEventListener("click", () => {
        for (const unit in units) {
            units[unit].metric = false;
        }
        refresh();
    });
    return button;
}

function buttonsFieldset(header, option1, option2) {
    const fs = document.createElement("fieldset");
    const legend = document.createElement("legend");
    fs.classList.add("menu-partition");
    legend.innerText = header;
    legend.classList.add("menu-header");
    const button1 = document.createElement("button");
    button1.innerText = option1;
    const button2 = document.createElement("button");
    button2.innerText = option2;
    units[header].metric
        ? button1.classList.add("selected")
        : button2.classList.add("selected");
    [button1, button2].forEach((b) => b.classList.add("units-btn"));

    button1.addEventListener("click", function () {
        units[header].metric = true;
        refresh();
    });
    button2.addEventListener("click", function () {
        units[header].metric = false;
        refresh();
    });

    fs.appendChild(legend);
    fs.appendChild(button1);
    fs.appendChild(button2);
    return fs;
}
