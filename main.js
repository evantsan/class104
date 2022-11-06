Webcam.set({
    width:400, height:300, img_quality:'jpg', jpg_quality: 90
});
camera = document.getElementById('camera')
Webcam.attach(camera)
function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='pic' src="+data_uri+">"
    });
}
console.log("ml5 version is ",ml5.version)
classifyd = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y_jVZjBkW/model.json",modelLoaded)
function modelLoaded()
{
    console.log("Model has been loaded successfully")
}