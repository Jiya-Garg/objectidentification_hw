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
img ="";
function preload() {
    img = loadImage('lampbook.jpg');
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('Lamp', 380, 100);
    textSize(20)
    noFill();
    stroke('red');
    rect(360, 70, 250, 400)

    fill('blue');
    text('Book', 130, 400);
    textSize(20)
    noFill();
    stroke('blue');
    rect(120,380, 400, 70)
}
function back() {
    window.location = "index.html";
}