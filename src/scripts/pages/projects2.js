function showImage(district) {
    const img = document.getElementById("district-image");
    const pinsContainer = document.getElementById("pins-container");
    const pinInfo = document.getElementById("pin-info");
    const pinTitle = document.getElementById("pin-title");
    const pinDescription = document.getElementById("pin-description");

    // imagens
    const images = {
        lisboa: "../assets/images/projects/lisbon_map.png",
        porto: "../assets/images/projects/porto_map.png",
        portimao: "../assets/images/projects/portimao_map.png"
    };

    // pins e info
    const pins = {
        lisboa: [
            { x: 30, y: 40, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 60, y: 70, icon: "../assets/images/projects/pin.png", title: "Ponte Histórica", description: "Ponte restaurada em Lisboa." }
        ],
        porto: [
            { x: 50, y: 20, icon: "../assets/images/projects/pin.png", title: "Torre do Porto", description: "Nova torre empresarial construída em 2023." }
        ],
        portimao: [
            { x: 40, y: 50, icon: "../assets/images/projects/pin.png", title: "Marina de Portimão", description: "Projeto de modernização da zona ribeirinha." }
        ]
    };

    /* ===================== */
    /* FADE-IN SIMPLES */
    /* ===================== */
    img.style.opacity = "0";

    // Usa minúsculas para aceder às chaves
    const districtKey = district; // NÃO converte


    setTimeout(() => {
        img.src = images[district];
        img.style.opacity = "1";
    }, 10);

    /* ===================== */
    /* GERAR PINS */
    /* ===================== */
    pinsContainer.innerHTML = "";
    pinInfo.classList.add("hidden");

    pins[districtKey].forEach(pin => {
        const el = document.createElement("img");
        el.src = pin.icon;
        el.classList.add("pin");

        el.style.left = pin.x + "%";
        el.style.top = pin.y + "%";

        el.addEventListener("click", () => {
            pinTitle.textContent = pin.title;
            pinDescription.textContent = pin.description;
            pinInfo.classList.remove("hidden");
        });

        pinsContainer.appendChild(el);
    });
}
