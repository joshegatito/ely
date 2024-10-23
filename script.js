document.getElementById("revealMessage").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hiddenContent");
    hiddenContent.classList.toggle("hidden");

    // Reproducir música aleatoria
    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");
    var randomAudio = Math.random() < 0.5 ? audio1 : audio2;
    randomAudio.play();
});
