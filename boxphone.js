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
    img = loadImage('boxphone.jpg');
}
function draw() {
    image(img, 0, 0, 700, 500)
    fill('red');
    text('Box', 110, 50);
    textSize(20)
    noFill();
    stroke('red');
    rect(100, 30, 550, 350)

    fill('blue');
    text('Phone', 60, 280);
    textSize(20)
    noFill();
    stroke('blue');
    rect(50, 250, 370, 200)
}
function back() {
    window.location = "index.html";
}