prediction_1 = "";
prediction_2 = "";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function Take_Snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>'
});
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9OCEpc2ds/modelLoaded', modelLoaded);
function modelLoaded(){
console.log("model is loaded and ready to strike")
}

function speak(){
var synth = window.speechSynthesis;
speak_data1 = "The First Prediction Is-"+ prediction_1;
speak_data1 = "The Second Prediction Is-"+ prediction_2;
var UtterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(UtterThis);
}