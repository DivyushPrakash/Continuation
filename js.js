nosex = "";
nosey = "";

function preload() {
    moustache = loadImage("https://i.postimg.cc/QC7KrksH/6921143-preview.png");
}

function setup() {
    canvas = createCanvas(620, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", getresults);
}

function modelloaded() {
    console.log("model loaded");
}

function draw() {
    image(video, 0, 0, 620, 450);
    image(moustache, nosex, nosey, 100, 30);
}

function clickphoto() {
    save("moustache.png");

}

function getresults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        nosex = resultsarray[0].pose.nose.x - 61;
        nosey = resultsarray[0].pose.nose.y - 16;
    }

}