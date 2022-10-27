object_status = "";
function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status - Detecting Objects';
}
function modelLoaded() {
    console.log('Model is loaded!');
    object_status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(result);
}
img = "";
function preload() {
    img = loadImage('studylaptop.jpg');
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('Laptop', 360, 120);
    textSize(20)
    noFill();
    stroke('red');
    rect(345, 100, 150, 100)

    fill('blue');
    text('Study Table', 90, 80);
    textSize(20)
    noFill();
    stroke('blue');
    rect(60, 30, 600, 400)
}
function back() {
    window.location = "index.html";
}