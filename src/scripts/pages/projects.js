let firstClick = true;

function showImage(district) {
    const img = document.getElementById("district-image");
    const pinsContainer = document.getElementById("pins-container");
    const pinInfo = document.getElementById("pin-info");
    const pinTitle = document.getElementById("pin-title");
    const pinDescription = document.getElementById("pin-description");


    //botão ativo
    document.querySelectorAll(".districts-list button")
        .forEach(btn => btn.classList.remove("active"));

    const clickedButton = document.querySelector(
        `.districts-list button[onclick="showImage('${district}')"]`
    );
    if (clickedButton) clickedButton.classList.add("active");





    const images = {
        lisboa: "../assets/images/projects/lisbon_map.png",
        porto: "../assets/images/projects/porto_map.png",
        portimao: "../assets/images/projects/portimao_map.png"
    };

    // FADE-OUT da imagem atual (incluindo a default)
    img.style.opacity = "0";

    setTimeout(() => {
        // Só substitui a imagem inicial uma vez
        if (firstClick) {
            firstClick = false;
        }

        // Trocar imagem
        img.src = images[district];
        img.style.display = "block";

        // Fade-in simples
        setTimeout(() => {
            img.style.opacity = "1";
        }, 10);

    }, 200); // tempo do fade-out


    // ----------- PINS -----------
    const pins = {
        lisboa: [
            { x: 30, y: 40, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 40, y: 55, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 20, y: 15, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 50, y: 25, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 35, y: 35, icon: "../assets/images/projects/pin.png", title: "Construção A", description: "Edifício renovado em 2022." },
            { x: 60, y: 70, icon: "../assets/images/projects/pin.png", title: "Ponte Histórica", description: "Ponte restaurada em Lisboa." }
        ],
        porto: [
            { x: 50, y: 20, icon: "../assets/images/projects/pin.png", title: "Torre do Porto", description: "Nova torre empresarial construída em 2023." },
            { x: 40, y: 55, icon: "../assets/images/projects/pin.png", title: "Torre do Porto", description: "Nova torre empresarial construída em 2023." },
            { x: 30, y: 15, icon: "../assets/images/projects/pin.png", title: "Torre do Porto", description: "Nova torre empresarial construída em 2023." },
            { x: 23, y: 42, icon: "../assets/images/projects/pin.png", title: "Torre do Porto", description: "Nova torre empresarial construída em 2023." }
        ],
        portimao: [
            { x: 35, y: 40.5, icon: "../assets/images/projects/pin.png", title: "Marina de Portimão", description: "Projeto de modernização da zona ribeirinha." },
            { x: 55, y: 55.5, icon: "../assets/images/projects/pin.png", title: "Marina de Portimão", description: "Projeto de modernização da zona ribeirinha." },
            { x: 20, y: 15.5, icon: "../assets/images/projects/pin.png", title: "Marina de Portimão", description: "Projeto de modernização da zona ribeirinha." }
        ]
    };

    pinsContainer.innerHTML = "";
    pinInfo.classList.add("hidden");

    pins[district].forEach(pin => {
        const el = document.createElement("img");
        el.src = pin.icon;
        el.classList.add("pin");

        el.style.left = pin.x + "%";
        el.style.top  = pin.y + "%";

        el.addEventListener("click", () => {
            pinTitle.textContent = pin.title;
            pinDescription.textContent = pin.description;
            pinInfo.classList.remove("hidden");
        });

        pinsContainer.appendChild(el);
        setTimeout(() => {
            el.style.opacity = "1";
        }, 100);
    });
}
