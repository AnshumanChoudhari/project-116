  

    mustachX = 0;
 mustachY = 0;

 function preload(){
 
 mustach = loadImage('https://i.postimg.cc/wTnBFznK/download.png')
 }

 function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
 console.log("poseNet is initialized");
}     
function gotPoses(results){
if(results.length>0){
    console.log(results);
   mustachX = results[0].pose.mustach.x-45;
   mustachY = results[0].pose.mustach.y-45;
}
}

function draw(){
    image(video,0,0,300,300);
    image(mustach,mustachX,mustachY,90,90);
}

function take_snapshot(){
    save('anshuman_funny_mustach_face.png');
}