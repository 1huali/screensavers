window.onload = function(){
    // get the canvas
    let canvas = document.getElementById("bgCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    let name="doruk";
    let input;
    let submitButton = document.getElementById("submitButton");
    let trailButton = document.getElementById("trailButton");
    let playButton = document.getElementById("playButton")
    let asciiMenu = document.getElementById("asciiMenu");

    let asciiArray = [];
    // let asciiIndex = 0;
    let currentAscii = ` ♥ `;
    asciiArray.push(` ♥ `);
    asciiArray.push(` ✧ `);
    asciiArray.push(` ❀ `);
    asciiArray.push(` ♡ `);
    asciiArray.push(` ♫ `);
        
    let text = name;
    let wordArray = text.split("");
    let printName = wordArray.join(currentAscii);
    let trailMode = false;
    let dustSound = document.getElementById(`dustSound`);
    let soundOn = false;

    window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    });

    let nameObj = new Name(canvas.width/2,canvas.height/2, printName,context, text);

   //button stores user text input to name variable
    submitButton.addEventListener('click', function(event) {
            input = document.getElementById("userText").value;
        let text = input;
        let wordArray = text.split("");
        // let printName = wordArray.join(" ♥ ");
        let printName = wordArray.join(currentAscii);


            nameObj.string=printName;
            nameObj.originalText=text;
        });

    asciiMenu.addEventListener('change', function(event){
        let userSelection = document.getElementById("asciiMenu").value;

        currentAscii = asciiArray[userSelection]
        console.log(currentAscii);
        console.log(userSelection);

       let originalName = nameObj.originalText;
        let wordArray = originalName.split("");
        let printName = wordArray.join(currentAscii);
        nameObj.string=printName;
    });


    playButton.addEventListener('click', function(event){
        if (soundOn === false){
            soundOn = true;
            console.log("sound is on")
        } else{
            soundOn = false;
            dustSound.pause();
            nameObj.onEdge = false;
            console.log("sound is off")
        }
    });

    function bouncingSound(){
        if (soundOn){
            console.log("into")
            if (nameObj.onEdge){
                dustSound.play();
                nameObj.onEdge = false;
            } 
        }
       }


    requestAnimationFrame(animate);
 
    trailButton.addEventListener('click', function(event) {
      
        if (trailMode){
            trailMode = false;
        } else{
            trailMode = true;
        };
         });


function animate(){

    if (trailMode === false){
context.clearRect(0,0,canvas.width,canvas.height);
} else {
    context.fillStyle = 'rgba(0, 0, 0, .05)';
    context.fillRect(0,0,canvas.width,canvas.height);
}

nameObj.display();
nameObj.update();
nameObj.checkBounds(canvas);
bouncingSound();
requestAnimationFrame(animate);
}

    }