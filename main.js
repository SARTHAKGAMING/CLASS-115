function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video =createCapture(VIDEO); 
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('Pose',gotPoses);
}

function draw() {
    image(video,0,0,300,300);
}

function take_snapshot() {
    save('myFilterImage.png');
}
function modelloaded(){
    console.log("PoseNet Has Inislised");
}
function gotPoses(resualt){
if(resualt.lenth>0){

console.log(resualt);

console.log("Nose x ="+resualt[0].pose.nose.x);
console.log("Nose y ="+resualt[0].pose.nose.y);

}
}