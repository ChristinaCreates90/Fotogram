let myImags = [
    'Canyon.webp',
    'City.webp',
    'CityLife.webp',
    'CityNight.webp',
    'Nature.webp',
    'Stone.webp',
    'Street.webp',
    'Tree.webp'
];

let myDiscrip = [
    'Canyon',
    'Hochhaus',
    'Stadtleben',
    'Stadt bei Nacht',
    'Steine',
    'Schlucht',
    'Stadt bei Dämmerung',
    'Baum im Herbst'
];

let currentIndex = 0;


function getGalleryContent(index) {
    return `
        <img
            src="./img/${myImags[index]}"
            alt="${myDiscrip[index]}"
            tabindex="0"
            onclick="openPreview(${index})"
        >
    `;
}

function init() {
    const galleryRef = document.getElementById("imageGallery");

    galleryRef.innerHTML = "";

    for (let index = 0; index < myImags.length; index++) {
        galleryRef.innerHTML += getGalleryContent(index);
    }
}


function dialogOpen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");

    const closeBtn = document.getElementById("close-button");

    if (closeBtn) {
        closeBtn.focus();
    }
}

function dialogClose(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");
}


function openPreview(index) {
    currentIndex = index;

    const preview = document.querySelector(".img-preview");
    const description = document.querySelector(".pic-description");
    const picCounter = document.querySelector(".pic-numbers");

    preview.innerHTML = `
        <img
            class="preview_img"
            src="./img/${myImags[index]}"
            alt="${myDiscrip[index]}"
        >
    `;

    description.textContent = myDiscrip[index];
    picCounter.textContent = `${index + 1} / ${myImags.length}`;

    dialogOpen("dia-dialog");
}


function prevPic() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = myImags.length - 1;
    }

    openPreview(currentIndex);
}

function nextPic() {
    currentIndex++;

    if (currentIndex >= myImags.length) {
        currentIndex = 0;
    }

    openPreview(currentIndex);
}


document.addEventListener("DOMContentLoaded", () => {

    init();

    const overlay = document.getElementById("body-overlay");

    overlay.addEventListener("click", () => {
        dialogClose("dia-dialog");
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            dialogClose("dia-dialog");
        }

        if (event.key === "ArrowLeft") {
            prevPic();
        }

        if (event.key === "ArrowRight") {
            nextPic();
        }

        if (
            event.key === "Enter" &&
            document.activeElement.tagName === "IMG"
        ) {
            document.activeElement.click();
        }
    });
});