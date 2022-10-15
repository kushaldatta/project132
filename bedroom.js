var status = "";

function preload() {
    img = loadImage("Bedroom.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    object_detection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("CoCoSSD Model Is Loaded.")
    status = true;
    object_detection.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results)
}

function back() {
    window.location = "index.html";
}