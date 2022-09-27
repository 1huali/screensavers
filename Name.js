class Name {
    constructor(x,y,string,context,originalText){
      this.string = string;
      this.x = x;
      this.y=y;
      
      this.localCanvasContext = context;

      this.speedX  =2-1;
      this.speedY =4-1;
      this.originalText= originalText;

      this.onEdge = false;
    }

    //method to display the triangle using the HTML 5 canvas API
    display()
    {
      this.localCanvasContext.font = "30px Arial";
      this.localCanvasContext.fillStyle = "hotpink";
      // this.localCanvasContext.strokeStyle = "hotpink";
      // this.localCanvasContext.strokeWeight = "2 px";

      this.localCanvasContext.textAlign = "center";
      this.localCanvasContext.fillText(this.string, this.x, this.y);
      // this.localCanvasContext.strokeText(this.string, this.x, this.y);

    }

    update(){
      this.x = this.x+this.speedX;
      this.y = this.y+this.speedY;
    }
 
    checkBounds(localCanvas){
      if(this.x>localCanvas.width || this.x<0){
        this.speedX = this.speedX*-1;
        this.onEdge = true;


      }
 
      if(this.y>localCanvas.height || this.y<0 ){
      this.speedY=this.speedY*-1;
      this.onEdge = true;  

      }
    
    }




 
  }
