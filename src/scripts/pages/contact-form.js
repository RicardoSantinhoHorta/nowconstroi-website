
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
        'button[type="submit"]'
    );

    const originalButtonText = submitButton.innerHTML;

    const projectTypes = {
        construction: "CONSTRUCAO",
        rehabilitation: "REABILITACAO",
        remodeling: "REMODELACAO",
        other: "OUTRO"
    };

    const formData = {
        nome: document.querySelector("#name").value.trim(),
        email: document.querySelector("#email").value.trim(),
        telefone: document.querySelector("#phone").value.trim(),
        projectType: projectTypes[
            document.querySelector("#project-type").value
        ],
        localizacao: document.querySelector("#location").value.trim(),
        descricao: document.querySelector("#message").value.trim()
    };

    try {
        submitButton.disabled = true;
        submitButton.textContent = "A enviar...";

        const response = await fetch(
            "https://now-constroi-website-backend.onrender.com/api/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(
                `Erro ${response.status}: ${errorMessage}`
            );
        }

        alert("O seu pedido foi enviado com sucesso!");

        contactForm.reset();

    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);

        alert(
            "Não foi possível enviar o pedido. Por favor, tente novamente mais tarde."
        );

    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});
