// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".card, .sobre, .galeria, .cta"
);

const aparecer = () => {

    elementos.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        const alturaTela = window.innerHeight;

        if(topo < alturaTela - 100){

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};


window.addEventListener("scroll", aparecer);


// CONFIGURAÇÃO INICIAL DA ANIMAÇÃO

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "0.8s ease";

});


// BOTÕES DO WHATSAPP

const numeroWhatsApp = "5567999999999"; 
// Troque pelo número real do Comcafri

const mensagem = 
"Olá! Gostaria de saber mais sobre o Restaurante e Churrascaria Comcafri.";

const linksWhats = document.querySelectorAll(".btn, .btn-topo");


linksWhats.forEach(botao => {

    if(botao.innerText.includes("WhatsApp") || botao.innerText.includes("Reservar")){

        botao.href =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        botao.target="_blank";

    }

});


// ANO AUTOMÁTICO NO FOOTER

const ano = new Date().getFullYear();

const footer = document.querySelector("footer");

footer.innerHTML += `<p>© ${ano} - Comcafri</p>`;
