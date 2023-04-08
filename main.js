function preload(){

}
function setup(){
canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.hide();
video.size(300,300);
posenet= ml5.poseNet(video,modelloaded);
posenet.on("pose",)
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
save("myPic.png");
}
function modelloaded(){
    console.log("model is loaded");
}