document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Mobile
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("ativo");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("ativo");
            });
        });
    }

    // 2. Modo Escuro / Modo Claro
    const botaoTema = document.getElementById("botaoTema");
    const iconeTema = document.getElementById("iconeTema");
    const textoBotao = document.getElementById("textoBotao");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("escuro");
            const estaEscuro = document.body.classList.contains("escuro");

            if (iconeTema) iconeTema.textContent = estaEscuro ? "☀" : "☾";
            if (textoBotao) textoBotao.textContent = estaEscuro ? "Modo claro" : "Modo escuro";
        });
    }

    // 3. Mostrar / Ocultar E-mail
    const btnMensagem = document.getElementById("btn-mensagem");
    const emailExibido = document.getElementById("email-exibido");

    if (btnMensagem && emailExibido) {
        btnMensagem.addEventListener("click", () => {
            emailExibido.classList.toggle("oculto");
            btnMensagem.textContent = emailExibido.classList.contains("oculto") 
                ? "Mostrar E-mail" 
                : "Ocultar E-mail";
        });
    }

    // 4. Ampliar Imagens ao Clicar (Lightbox)
    const modal = document.getElementById("modal-imagem");
    const imgAmpliada = document.getElementById("img-ampliada");
    const fecharModal = document.getElementById("fechar-modal");
    const imagensClicaveis = document.querySelectorAll(".hobby-img-jogo, .hobby-img-poema");

    if (modal && imgAmpliada) {
        imagensClicaveis.forEach(img => {
            img.addEventListener("click", () => {
                imgAmpliada.src = img.src;
                imgAmpliada.alt = img.alt;
                modal.classList.add("aberto");
            });
        });

        // Fecha ao clicar no X
        if (fecharModal) {
            fecharModal.addEventListener("click", () => {
                modal.classList.remove("aberto");
            });
        }

        // Fecha ao clicar no fundo escuro fora da imagem
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("aberto");
            }
        });

        // Fecha ao apertar a tecla ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("aberto")) {
                modal.classList.remove("aberto");
            }
        });
    }
});
