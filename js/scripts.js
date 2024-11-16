function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});

function loadHead(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML += data;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHead('head.html');
});

function playAudio() {
    var audio = document.getElementById('audio-frame');
    audio.play();
}