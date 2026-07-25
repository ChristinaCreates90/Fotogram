let myImages = [
    'img/Canyon.webp',
    'img/City.webp',
    'img/CityLife.webp',
    'img/CityNight.webp',
    'img/Nature.webp',
    'img/Stone.webp',
    'img/Street.webp',
    'img/Tree.webp'
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


function init() {
    let gallery = document.getElementById("imageGallery");

    for (let index = 0; index < myImages.length; index++) {
        const element = myImages[index];
        let imageHTML = `<button onclick="openDialog(${index})"><img src="${element}"></button>`;

        gallery.innerHTML += imageHTML;
    }
}


function openDialog(index) {
    const dialog = document.getElementById("dia-dialog");
    const overlay = document.getElementById("body-overlay");
    const picDialog = document.getElementById("pic-dialog");
    const picDescription = document.getElementById("img-discription");
    const imgNumbers = document.getElementById("img-number");

    const picPreview = myImages[index];
    let description = myDiscrip[index];
    imgNumbers.textContent = `${index + 1}/${myImages.length}`;
    imgNumbers.dataset.index = index;

    dialog.classList.add("sichtbar");
    overlay.classList.add("sichtbar");

    let picHTML = `<img src="${picPreview}">`;

    picDialog.innerHTML = picHTML;
    picDescription.innerHTML = description;

    document.body.classList.add("no-scroll");

    changeGalleryTabIndex(-1);
}


function closeDialog() {
    const dialog = document.getElementById("dia-dialog");
    const overlay = document.getElementById("body-overlay");

    dialog.classList.remove("sichtbar");
    overlay.classList.remove("sichtbar");

    document.body.classList.remove("no-scroll");

    changeGalleryTabIndex(0);
}


function nextPic() {
    const imgNumbers = document.getElementById("img-number");
    const picDialog = document.getElementById("pic-dialog");
    const picDescription = document.getElementById("img-discription");

    let index = Number(imgNumbers.dataset.index) + 1;
    if (index > myImages.length - 1) {
        index = 0;
    }
    const picPreview = myImages[index];
    let picHTML = `<img src="${picPreview}">`;
    imgNumbers.textContent = `${index + 1}/${myImages.length}`;
    picDialog.innerHTML = picHTML;
    imgNumbers.dataset.index = index;

    let description = myDiscrip[index];
    picDescription.innerHTML = description;
}


function prevPic() {
    const imgNumbers = document.getElementById("img-number");
    const picDialog = document.getElementById("pic-dialog");
    const picDescription = document.getElementById("img-discription");

    let index = Number(imgNumbers.dataset.index) - 1;
    if (index < 0) {
        index = myImages.length - 1;
    }
    const picPreview = myImages[index];
    let picHTML = `<img src="${picPreview}">`;
    imgNumbers.textContent = `${index + 1}/${myImages.length}`;
    picDialog.innerHTML = picHTML;
    imgNumbers.dataset.index = index;

    let description = myDiscrip[index];
    picDescription.innerHTML = description;
}


function changeGalleryTabIndex(tabIndex) {
    let buttons = document.querySelectorAll("main button");

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].tabIndex = tabIndex;
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeDialog();
    }
    if (event.key === "ArrowRight") {
        nextPic();
    }
    if (event.key === "ArrowLeft") {
        prevPic();
    }
});


