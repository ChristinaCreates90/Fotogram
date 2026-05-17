

let myImags = [
    'Canyon.webp',
    'City.webp',
    'CityLife.webp',
    'CityNight.webp',
    'Nature.webp',
    'Stone.webp',
    'Street.webp',
    'Tree.webp',
];


let myDiscrip = [
    'Canyon',
    'Hochhaus',
    'Stadtleben',
    'Stadt bei Nacht',
    'Steine',
    'Schlucht',
    'Stadt bei Dämmerung',
    'Baum im Herbst',
]


document.querySelector(".foto-div").innerHTML =
    myImags.map((img, index) =>
        `<img 
            src="img/${img}" 
            alt="${myDiscrip[index]}"
            tabindex="0"
            onclick="openPreview(${index})"
        >`
    ).join("");


    document.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && document.activeElement.tagName === "IMG") {
        document.activeElement.click();
    }

});


const dialog = document.getElementById('dia-dialog');
const overlay = document.getElementById('body-overlay');


function dialogOpen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}


function dialogClose(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");
}


overlay.addEventListener('click', () => {
    dialogClose('dia-dialog');
});


function openPreview(index) {
    currentIndex = index;
    let preview = document.querySelector(".img-preview");
    let description = document.querySelector(".pic-description");
    let picCounter = document.querySelector(".pic-numbers");


    // Bild einsetzen
    preview.innerHTML = `<img class="preview_img" src="img/${myImags[index]}">`;

    // Text setzen
    description.innerText = myDiscrip[index];

    // Dialog öffnen
    dialogOpen('dia-dialog');

    //zeigt die Zahl vom Bild an und wie viele Bilder insgesamt
    picCounter.innerText = `${index + 1} / ${myImags.length}`;


}


let prev = document.querySelector(".preview-div");
let skip = document.querySelector(".next-div");
let currentIndex = 0;

prev.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = myImags.length - 1;
    }

    openPreview(currentIndex);
    
});


skip.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= myImags.length) {
        currentIndex = 0;
    }

    openPreview(currentIndex);
    
});


// Keydown Events in eins packen, sonst gibt es Probleme:
document.addEventListener("keydown", (event) => {

    // ESC → Dialog schließen
    if (event.key === "Escape") {
        dialogClose('dia-dialog');
    }


    // Pfeil links → vorheriges Bild
    else if (event.key === "ArrowLeft") {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = myImags.length - 1;
        }

        openPreview(currentIndex);
    }


    // Pfeil rechts → nächstes Bild
    else if (event.key === "ArrowRight") {
        currentIndex++;

        if (currentIndex >= myImags.length) {
            currentIndex = 0;
        }

        openPreview(currentIndex);
    }
});