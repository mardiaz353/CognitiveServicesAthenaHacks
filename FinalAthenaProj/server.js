const request = require('request-promise-native')
const express = require('express')
const router = express.Router()

//Connect to the server with our key

var FACE_KEY = 'f32be374196d4295964eb6805d465e0a'
var FACE_URL = 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect[?returnFaceId][&returnFaceLandmarks][&returnFaceAttributes]
&subscription-key=' + FACE_KEY

//We need to next upload an image to test.

string imageUrl = "http://news.microsoft.com/ceo/assets/photos/06_web.jpg";
var faces = await faceServiceClient.DetectAsync(imageUrl, true, true);

var faces = await faceServiceClient.DetectAsync(imageUrl, returnFaceLandmarks:true);

//If there is no face we need to go into another calculation!


foreach (var face in faces)
{
    var rect = face.FaceRectangle;
    var landmarks = face.FaceLandmarks;

    //Left side of face
    double EyebrowLeftInnerX = landmarks.EyebrowLeftInner.X;
    double EyebrowLeftInnerY = landmarks.EyebrowLeftInner.Y;
    double EyebrowLeftOuterX = landmarks.EyebrowLeftOuter.X;
    double EyebrowLeftOuterY = landmarks.EyebrowLeftOuter.Y;

    double EyeLeftOuterX = landmarks.EyeLeftOuter.X;
    double EyeLeftOuterY = landmarks.EyeLeftOuter.Y;
    double EyeLeftInnerX = landmarks.EyeLeftInner.X;
    double EyeLeftInnerY = landmarks.EyeLeftInner.Y;
    double EyeLeftTopX = landmarks.EyeLeftTop.X;
    double EyeLeftTopY = landmarks.EyeLeftTop.Y;

    double NoseLeftAlarTopX = landmarks.NoseLeftAlarTop.X;
    double NoseLeftAlarTopY = landmarks.NoseLeftAlarTop.Y;

    //Middle of face
    double NoseTipX = landmarks.NoseTip.X;
    double NoseTipY = landmarks.NoseTip.Y;
    double UpperLipTopX = landmarks.UpperLipTop.X;
    double UpperLipTopY = landmarks.UpperLipTop.Y;
    double UnderLipTopX = landmarks.UnderLipTop.X;
    double UnderLipTopY = landmarks.UnderLipTop.Y;

    //Right side of face
    double EyebrowRightInnerX = landmarks.EyebrowRightInner.X;
    double EyebrowRightInnerY = landmarks.EyebrowRightInner.Y;
    double EyebrowRightOuterX = landmarks.EyebrowRightOuter.X;
    double EyebrowRightOuterY = landmarks.EyebrowRightOuter.Y;

    double EyeRightOuterX = landmarks.EyeRightOuter.X;
    double EyeRightOuterY = landmarks.EyeRightOuter.Y;
    double EyeRightInnerX = landmarks.EyeRightInner.X;
    double EyeRightInnerY = landmarks.EyeRightInner.Y;
    double EyeRightTopX = landmarks.EyeRightTop.X;
    double EyeRightTopY = landmarks.EyeLeftTop.Y;

    double NoseRightAlarTopX = landmarks.NoseRightAlarTop.X;
    double NoseRightAlarTopY = landmarks.NoseRightAlarTop.Y;
}

//Then we have to calculate some Vector junk
//We will draw from left to right.

//Vector V
double vx=EyebrowLeftInnerX - EyebrowLeftOuterX;
double vy=EyebrowLeftInnerY - EyebrowLeftOuterY;

//Vector Use this vector twice U once
double ux=EyeLeftOuterX - EyebrowLeftOuterX;
double uy=EyeLeftOuterY - EyebrowLeftOuterY;

double CHLstartX=EyebrowLeftOuterX;
double CHLstartY=NoseLeftAlarTopY - uy;
double CHLendX= EyebrowLeftOuterX+ux;
double CHLendY=NoseLeftAlarTopY;

//projection of u onto v
function(double ux, double uy, double vx, double vy, double &projx, double &projy)
{
    double dotuv=(ux*vx + uy*vy);
    double lengthv2=vx*vx + vy*vy;

    projx=ux*dotuv/lengthv2;
    projy=uy*dotuv/lengthv2;
}


double EBLHstartX=EyebrowLeftOuterX;
double EBLHstartY=EyebrowLeftOuterY;

double EBLHendX= EyebrowLeftOuterX+projx;
double EBLHendY= EyebrowLeftOuterY+projy;


//Vector V
double vx=EyebrowRightInnerX - EyebrowRightOuterX
double vy=EyebrowRightInnerY - EyebrowRightOuterY

//Vector Use this vector twice U once
double ux=EyeRightOuterX - EyebrowRightOuterX
double uy=EyeRightOutery - EyebrowRightOutery



double CHRstartX=EyebrowRightOuterX;
double CHRstartY=NoseRightAlarTopY - uy;
double CHRendX= EyebrowRightOuterX+ux;
double CHRendY=NoseRightAlarTopY;



double &projx, double &projy)
{
    double dotuv=(ux*vx + uy*vy);
    double lengthv2=vx*vx + vy*vy;

    projx=ux*dotuv/lengthv2;
    projy=uy*dotuv/lengthv2;
}


double EBRHstartX=EyebrowRightOuterX;
double EBRHstartY=EyebrowRightOuterY;

double EBRHendX= EyebrowRightOuterX+projx;
double EBRHendY= EyebrowRightOuterY+projy;

//we just will use the value for nosetip x and y no edit of data, same with uppertop lip and upper bottom lip

function(double startx, double starty)
{
//input into drawing function.
}


