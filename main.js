nose_x = 0;
nose_y = 0;
function preload()
{
img= loadImage("beyblad.jpg");
}
function setup()
{
canvas = createCanvas(550, 500);
canvas.position(550,150);

video = createCapture(VIDEO);
video.size(550, 500);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}

function modelLoaded()
    {
console.log('PoseNet Is Initialized!');
    }

    function gotPoses(results)
    {
if (results.length> 0)
{
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    lwx = results[0].pose.leftWrist.x;
    rwx = results[0].pose.rightWrist.x;
    diffrence = floor(lwx - rwx);
            
}
    }
function draw()
{
background('red');
document.getElementById("square-size").innerHTML="width and height will be "+diffrence+"px";
/*fill("black");
stroke("white");
square(nose_x, nose_y,diffrence);*/
image(img, nose_x, nose_y, diffrence, diffrence);
}
diffrence=0;
rwx=0;
lwx=0;