let images = [
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image1.jpg"
];

let currentIndex = 0;

function showImage() {
    document.getElementById("courosel").getElementsByTagName("img")[0].src = images[currentIndex];
}

function Next_Image() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function Previous_Image() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}