prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function click1(){
    Webcam.snap(function(a){
    document.getElementById("result").innerHTML='<img id="done" src="'+a+'"/>';
    });
}
console.log("ml5 version is loaded",ml5.version);
x= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7Hyb-7YJa/model.json',succesful);
function succesful(){
    console.log("model is loaded");
}
function answer(){
    final= document.getElementById("done");
x.classify(final,complete);
}
function complete(error,result){
if (error) {
    console.log(error);
}
else{
console.log(result);
document.getElementById("pic").innerHTML=result[0].label;
document.getElementById("pic2").innerHTML=result[1].label;
prediction1=result[0].label;
prediction2=result[1].label;
speak();
if(result[0].label=="happy"){
    document.getElementById("pic").innerHTML="&#128513;";
    }
    if(result[0].label=="sad"){
        document.getElementById("pic").innerHTML="&#128532;";
        }
     if(result[0].label=="sleepy"){
        document.getElementById("pic").innerHTML="&#128564;";
        }
       
            if(result[1].label=="happy"){
                document.getElementById("pic2").innerHTML="&#128513;";
                }
                if(result[1].label=="sad"){
                    document.getElementById("pic2").innerHTML="&#128532;";
                    }
                 if(result[1].label=="sleepy"){
                    document.getElementById("pic2").innerHTML="&#128564;";
                    }
                   
}
}
function speak(){
    y= window.speechSynthesis;
    r="the first prediction is"+prediction1;
    t="the second prediction is"+prediction2;
    p= new SpeechSynthesisUtterance(r+t);
    y.speak(p);
}