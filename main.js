
let BusMallImageArray = [];

let elImageRandom = document.getElementById("random-image");

let Image = function(name, filePath, id) {
    this.name = name;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClicks;
}

if(localStorage.length > 0){
    let getData = localStorage.getItem("storageBusMallImgArray");
    BusMallImageArray = JSON.parse(getData);
} else {

let Bag = new Image ("Bag", "./assets/bag.jpg", "bag");
let Banana = new Image ("Banana", "./assets/banana.jpg", "banana");
let Bathroom = new Image ("Bathroom", "./assets/bathroom.jpg", "bathroom");
let Boots = new Image ("Boots", "./assets/boots.jpg", "boots");
let Breakfast = new Image ("Breakfast", "./assets/breakfast.jpg", "breakfast");
let Bubblegum = new Image ("Bubblegum", "./assets/bubblegum.jpg", "bubblegum");
let Chair = new Image ("Chair", "./assets/chair.jpg", "chair");
let Cthulhu = new Image ("Cthulhu", "./assets/cthulhu.jpg", "cthulhu");
let Dragon = new Image ("Dragon", "./assets/dragon.jpg", "dragon");

BusMallImageArray.push(Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, Cthulhu, Dragon);
  
}



// let create a function that will select a random image from BusMallImageArray

let randomImage = function () {
    let randomIndex = Math.floor(Math.random() * BusMallImageArray.length);
    let imageIndex = BusMallImageArray[randomIndex];
    
    return imageIndex;
}

// let create an event handler to track the number of clicks

function imageClicked(e) {
    if (e.target.id === firstImage.id) {
        firstImage.clicked += 1;
    } else if (e.target.id === secondImage.id) {
        secondImage.clicked += 1;
    } else if (e.target.id === thirdImage.id) {
        thirdImage.clicked += 1;
    }

    displayImages();

    totalImageClicked += 1
  
   localStorage.setItem("storageBusMallImgArray", JSON.stringify(BusMallImageArray));

   if(totalImageClicked > 25){
    elImageRandom.innerHTML = "";
    displayChart();
   }
   
}

let firstImage;
let secondImage;
let thirdImage;
let totalImageClicked = 0;

// define function that will display random images

function displayImages() {

    elImageRandom.innerHTML = "";
    
    for(let i = 0; i < 3; i++) {
        let imageObject = randomImage();

        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            while(imageObject.id === firstImage.id){
                imageObject = randomImage();
                console.log("second while", imageObject.id);
            }
            secondImage = imageObject;
        } else {
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id){
                imageObject = randomImage();
                console.log("third while", imageObject.id);
            }
            thirdImage = imageObject;
        }
        let elImage = document.createElement("img");
        elImageRandom.appendChild(elImage).setAttribute("id", imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener("click", imageClicked);
        imageObject.shown += 1;
    }
}

displayImages();

