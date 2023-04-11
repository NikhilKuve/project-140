song1 = "";
song2 = "";

function preload()
{
    song = loadSound("Shreksophone.mp3");
    song = loadSound("Pigstep.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}