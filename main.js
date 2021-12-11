//teachablemachine.withgoogle.com/models/3EVdaHyjQ/


function startClassify(){

    navigator.mediaDevices.getUserMedia({audio:true});
    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3EVdaHyjQ/model.json" , modelReady);
    
    }
    
    function modelReady(){
    
    classifier.classify(gotResults);
    
    }
    
    function gotResults(error , results){
    
    console.log("got result, have party");
    
    if(error){

        console.error(error);
        
        }
        else{
        
        console.log(results);
        
        r_inthergb = Math.floor(Math.random() * 255) + 1;
        g_inthergb = Math.floor(Math.random() * 255) + 1;
        b_inthergb = Math.floor(Math.random() * 255) + 1;
        
        
        document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
        
        document.getElementById("result_label").style.color = "rgb(" + r_inthergb + " , " + g_inthergb + " , " + b_inthergb + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + r_inthergb + " , " + g_inthergb + " , " + b_inthergb + ")";
        
        img = document.getElementById("placeholderear");
     
        
        if( results[0].label == "Barking"){
       img.src= "dog.jpg";
        } 
        else if( results[0].label == "Meowing"){
       img.src = "Cat.png";
        }
        else if( results[0].label == "Roaring"){
            img.src = "lion.jpg";
        }
        else if(results[0].label == "Mooing"){
            img.src = "cow.jpg";
        }
        else{
       img.src = "ear.png";
        }
        
        }
        
        
        }
    