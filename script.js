window.onload = function(){
    // get the canvas
    let canvas = document.getElementById("bgCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    let name="wawa";
    let input;
    let submitButton = document.getElementById("submitButton");
    let playButton = document.getElementById("playButton");
    let asciiMenuButton = document.getElementById("asciiMenuButton");


    // let asciiMenuButton = document.getElementById('asciiMenuButton');
    let asciiArray = [];
    let asciiIndex = 0;
    let currentAscii = ` ♥ `
    asciiArray.push(`✧`);
    asciiArray.push(`❀`);
    // asciiArray.push(`♡`);
    // asciiArray.push(`♫`);
        
    let text = name;
        let wordArray = text.split("");
        // let letters = [];
        let printName = wordArray.join(currentAscii);


    window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    });


    let nameObj = new Name(canvas.width/2,canvas.height/2, printName,context);

   //button stores user text input to name variable
    submitButton.addEventListener('click', function(event) {
            input = document.getElementById("userText").value;
        let text = input;
        let wordArray = text.split("");
        let printName = wordArray.join(" ♥ ");

            nameObj.string=printName;
        });

        playButton.addEventListener('click', function(event) {
           console.log("clicked")
            });

    asciiMenuButton.addEventListener('click', function(event){
        document.getElementById("asciiMenuOptions").classList.toggle("show");
    });



    requestAnimationFrame(animate);
 
function animate(){
//repaint with a black rect..
context.clearRect(0,0,canvas.width,canvas.height);
nameObj.display();
nameObj.update();
nameObj.checkBounds(canvas);
requestAnimationFrame(animate);
}

    }

    // dropdown menu + asciiArray rolling + demander pour le coté visuel + raining screensaver