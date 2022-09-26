window.onload = function(){
    // get the canvas
    let canvas = document.getElementById("bgCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    let name="wawa";
    let input;
    let submitButton = document.getElementById("submitButton");
    let rainButton = document.getElementById('rainButton');

        let text = name;
        let wordArray = text.split("");
        // let letters = [];
        let printName = wordArray.join(" ♥ ");

//    //no need but keeping for educational purposes
//    //shows a different way to do something at each index of the array until it jumps to the next one
    // for (let i=0; i<wordArray.length; i++){
    //   letters.push(wordArray[i]);
      // letters.push("*");
//for every index of the array, this happens until the next index object of the array
    // }

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

        function strop(cleft, ctop, d) {
            var drop = document.createElement('div');
            drop.className = 'punct';
            drop.style.left = cleft + 'px';
            drop.style.top = ctop + 'px';
            drop.id = d;
            document.getElementById('content').appendChild(drop);
        }
        
        function randomFromInterval(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }
        var n, interval;
        
        function newDrop() {
            var x = randomFromInterval(20, 480),
                y = randomFromInterval(10, 50);
            strop(x, y, n);
            n--;
            if (n > 0) {
                setTimeout(newDrop, 500);
            }
        }
        
        submitButton.addEventListener('click', function(event) {
            n = 30;
            newDrop();
            interval = setInterval(function() {
                var drops = document.getElementsByClassName('punct'),
                    newY;
                if (drops.length == 0) {
                    clearInterval(interval);
                    return;
                }
                for (var i = 0; i < drops.length; i++) {
                    newY = drops[i].offsetTop + 2;
                    if (newY > drops[i].parentNode.offsetHeight) {
                        drops[i].parentNode.removeChild(drops[i]);
                    }
                    else {
                        drops[i].style.top = newY + 'px';
                    }
                }
            }, 30);
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