const button = document.getElementById("loveButton");
const tulipContainer = document.getElementById("tulipContainer");
let rainingTulips = false; // Variável para controlar a chuva infinita

button.addEventListener("mouseover", () => {
    const maxOffset = 200; // Distância maior para o botão se mover
    let newX = Math.random() * maxOffset * 2 - maxOffset;
    let newY = Math.random() * maxOffset * 2 - maxOffset;

    button.style.transform = `translate(${newX}px, ${newY}px)`;
});

button.addEventListener("click", () => {
    if (!rainingTulips) { 
        rainingTulips = true; // Inicia a chuva infinita
        setInterval(() => {
            for (let i = 0; i < 5; i++) { // Agora cai 5 tulipas de uma vez!
                createTulip();
            }
        }, 200); // Reduzi o tempo para cair mais rápido
    }
});

function createTulip() {
    const tulip = document.createElement("div");
    tulip.className = "tulip";
    tulip.innerHTML = "🌷";
    tulipContainer.appendChild(tulip);

    // Posicionamento aleatório na tela
    tulip.style.left = `${Math.random() * window.innerWidth}px`;

    // Ajusta o tamanho e a velocidade da queda aleatoriamente
    let size = Math.random() * 20 + 20; // Tamanhos entre 20px e 40px
    tulip.style.fontSize = `${size}px`;

    let duration = Math.random() * 3 + 2; // Velocidade entre 2s e 5s
    tulip.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        tulip.remove();
    }, duration * 1000);
}