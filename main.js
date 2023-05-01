//https://teachablemachine.withgoogle.com/models/F9sDQRFZ2/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

webcam = document.getElementById("webcam");

Webcam.attach( '#webcam' );

function capture()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'"/>';
    });
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F9sDQRFZ2/model.json',modelLoaded);
function modelLoaded() {
    console.log("Model Loaded")
}
function capture() {
 img=document.getElementById('captured_image');
 classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="one")
        {
            document.getElementById("update_emoji").innerHTML="&#9757;";
        }
        if(results[0].label=="two")
        {
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="three")
        {
            document.getElementById("update_emoji").innerHTML="&#9995;";
        }
        if(results[0].label=="four")
        {
            document.getElementById("update_emoji").innerHTML="&#128400;";
        }

        if(results[1].label=="one")
        {
            document.getElementById("update_emoji2").innerHTML="&#9757;";
        }
        if(results[1].label=="two")
        {
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }
        if(results[1].label=="three")
        {
            document.getElementById("update_emoji2").innerHTML="&#9995;";
        }
        if(results[1].label=="four")
        {
            document.getElementById("update_emoji2").innerHTML="&#128400;";
        }
    }
}