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
    img = loadImage('sofapainting.jpg');
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('Sofa', 25, 350);
    textSize(20)
    noFill();
    stroke('red');
    rect(20, 330, 650, 150)

    fill('blue');
    text('Painting', 25, 40);
    textSize(20)
    noFill();
    stroke('blue');
    rect(20, 20, 650, 260)
}
function back() {
    window.location = "index.html";
}