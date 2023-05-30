window.onload = main;

function main() {
    loadStatesInfo();
}

function loadStatesInfo() {
    const selectElement = document.querySelector("#state-selection");
    selectElement.onchange = stateChange;

    for (const state of locationsArray) {
        const option = document.createElement("option");
        option.value = state;
        option.innerText = state;
        selectElement.append(option);
    }
}

function stateChange() {
    const selectElement = document.querySelector("#mountain");
    const mountainInfo = document.querySelector("main");
    const currentMountain = selectElement.value;

    for (const mountain of mountainsArray) {
        if (currentMountain === mountain.name) {
            mountainInfo.innerHTML = `
                <div class="card transparent-card" >
                    <img src="../images/${mountain.img}" class="card-img-top" alt="Mountain Image">
                    <div class="card-body">
                        <h5 class="card-title">${mountain.name}</h5>
                        <p class="card-text">${mountain.desc}</p>
                        <p class="card-text">Hike difficulty: <strong>${mountain.effort}</strong></p>
                        <p class="card-text">Latitude: ${mountain.coords.lat}</p>
                        <p class="card-text">Longitude: ${mountain.coords.lng}</p>
                    </div>
                </div>
            `;
        }
    }

}
