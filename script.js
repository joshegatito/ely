//const correctHashedPassword = "4cf049493a9acf31ef696f3ac1a04d4cb3f3fb22abeaadf1d65beef900d6892f";

let isMessageRevealed = false;

const phrases = [
    "Eres el hechizo que me hace soñar.",
    "Nuestro amor es más dulce que las calabazas.",
    "Bajo esta luna, mi corazón solo tiene ojos para ti.",
    "Eres mi dulce terror en esta noche de Halloween."
];

const images = [
    "ely.jpg",
    "bb.jpeg",
    "niña.jpeg",
    "preciosa.jpg" 
];

/*const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg" 
];*/

function changeImageAndPhrase() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    const imageElement = document.querySelector('.decorada');
    imageElement.src = randomImage;
    document.querySelector('.text').innerText = randomPhrase;
}

setInterval(changeImageAndPhrase, 3000);

document.getElementById("revealMessage").addEventListener("click", async function() {
    /*const passwordInput = prompt("Ingresa la contraseña:");

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
    }*/

    document.getElementById("hiddenContent").classList.remove("hidden");
    playRandomAudio();
    isMessageRevealed = true;
});


function playRandomAudio() {
    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");
    var audio3 = document.getElementById("audio3");

    if (!audio3.paused) {
        audio3.pause();
        audio3.currentTime = 0;
    }

    var randomAudio = Math.random() < 0.5 ? audio1 : audio2;
    randomAudio.play();
}

function playBruja() {
    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");
    var audio3 = document.getElementById("audio3");

    if (!audio1.paused) {
        audio1.pause();
        audio1.currentTime = 0;
    }
    if (!audio2.paused) {
        audio2.pause();
        audio2.currentTime = 0;
    }

    audio3.play();
}

function showDecorativeImages(event) {
    // Solo reproducir sonido si el mensaje aún no ha sido revelado
    if (!isMessageRevealed) {
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

        playBruja();
    }
}

document.addEventListener("click", showDecorativeImages);
