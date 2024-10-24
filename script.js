const correctHashedPassword = "4cf049493a9acf31ef696f3ac1a04d4cb3f3fb22abeaadf1d65beef900d6892f";

const phrases = [
    "Eres el hechizo que me hace soñar.",
    "Nuestro amor es más dulce que las calabazas.",
    "Bajo esta luna, mi corazón solo tiene ojos para ti.",
    "Eres mi dulce terror en esta noche de Halloween."
];

const audioHalloween = new Audio('Halloween.mp3'); // Cargar el audio de Halloween

// Reproducir el sonido de Halloween al cargar la página
window.onload = function() {
    audioHalloween.play();
};

document.getElementById("revealMessage").addEventListener("click", async function() {
    const passwordInput = prompt("Ingresa la contraseña:");

    if (passwordInput === null) {
        return;
    }

    const encoder = new TextEncoder();
    const inputData = encoder.encode(passwordInput);
    const inputHashBuffer = await crypto.subtle.digest("SHA-256", inputData);
    const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
    const hashedInput = inputHashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashedInput === correctHashedPassword) {
        document.getElementById("hiddenContent").classList.remove("hidden");
        playRandomAudio();
    } else {
        alert("Contraseña incorrecta.");
    }
});

document.querySelector('.decorada').addEventListener('click', function() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.querySelector('.text').innerText = randomPhrase;
});

function playRandomAudio() {
    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");

    // Detener el audio de Halloween si está reproduciéndose
    if (!audioHalloween.paused) {
        audioHalloween.pause();
        audioHalloween.currentTime = 0; // Reiniciar el tiempo
    }

    // Elegir un audio aleatorio
    var randomAudio = Math.random() < 0.5 ? audio1 : audio2;
    randomAudio.play();
}

function showDecorativeImages(event) {
    const heart = document.createElement("img");
    heart.src = "heart.png";
    heart.style.position = "absolute";
    heart.style.width = "50px";
    heart.style.top = `${event.clientY}px`;
    heart.style.left = `${event.clientX}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

document.addEventListener("click", showDecorativeImages);
