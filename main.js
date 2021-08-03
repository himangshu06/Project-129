scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song = "";
function preload(){
  song = loadSound("music.mp3");
}
function setup(){
   canvas = createCanvas(720,400);
   canvas.center();
   video  = createCapture(VIDEO);
   video.hide();
   canvas.position(350,350)
}
function modelLoaded(){
    console.log("poseNet is initilized!");
  }
  function gotPoses(results){
    if (results.length > 0){
      console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX  = results[0].pose.rightWrist.x;
    rightWristY  = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    console.log("leftWristX = " + lefttWristX +" leftWristY = "+ leftWristY);
  }
}
function draw(){
    image(video,0,0,500,500);
    if (scoreLeftWrist > 0.2){
    fill("#0000FF");
    stroke("#0000FF");
      circle(leftWristX,leftWristY);
      inNumberLeftWristY = Number(leftWristY);
      removeDecimal = floor(inNumberLeftWristY);
      volume = removeDecimal/500;
      document.getElementById("volume").innerHTML="volume= "+volume;
      song.setVolume(volume);
    }
  }
function play(){
    song.play();
}

function Pro(){
    window.location.replace="Pro.html";
    window.location="Pro.html";
}

