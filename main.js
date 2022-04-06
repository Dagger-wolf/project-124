function setup(){

    canvas = createCanvas(600, 600,);
    video = createCapture(VIDEO);
    video.size(700,750);
    canvas.position(750, 150);
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', gotPoses);

}

function model_loaded(){

    console.log("POSENET IS IIIIIIIIIIIINITIALISED :)");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

    }

}

function draw(){

    

}