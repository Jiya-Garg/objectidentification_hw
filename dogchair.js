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
    img = loadImage('dogchair.jpg');
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('Dog', 470, 90);
    textSize(20)
    noFill();
    stroke('red');
    rect(455, 60, 200, 350)

    fill('blue');
    text('Chair', 390, 60);
    textSize(20)
    noFill();
    stroke('blue');
    rect(380, 30, 300,460)
}
function back() {
    window.location = "index.html";
}