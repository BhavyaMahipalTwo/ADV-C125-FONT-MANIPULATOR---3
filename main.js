leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.position(100, 150);

    canvas = createCanvas(600, 500);
    canvas.position(800, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#FFA500");
    textSize(difference);
    fill("#800080");
    text("Bhavya", noseX, noseY);
}

function modelLoaded() {
    console.log("PoseNet Model Is loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        difference = floor(leftWristX - rightWristX);
    }
}
