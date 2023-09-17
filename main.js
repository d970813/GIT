img = "";
objects = [];
status ="";

function preload(){
    img = loadImage('dog_cat cute.png');
}



function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function draw(){
    image(img, 0, 0, 640, 420);

    if(status !=""){
       for (i = 0; i < objects.length; i++)
        document.getElementById("status").innerHTML = "Blue is Lauchend";

        fill("#FF0000")
        percent = Math.floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x+ 15, objects[i].y+ 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, object[i].width, objects[i].height);
       }
}
    
  


function modelLoaded(){
    console.log("Blue is Lauchened! c(*^*)C ")
    status = true;
    objectDetector.detect(img, gotResult);
}  

function gotResult(error, results){
    if (error){
        console.log(error);
    }
  
    console.log(results);
objects= results;
}