class roof{
    constructor(x,y,w,h)
    {		
    var options=
      {			
      isStatic:true,
      }		
      this.x=x;
      this.y=y;		
      this.w=w;
      this.h=h;
      this.body=Bodies.rectangle(x, y, w, h , options); 		
      World.add(world, this.body); 	
    }
    display()
    {
      var groundPos=this.body.position;
      push();
      translate(groundPos.x, groundPos.y);
      rectMode(CENTER);
      strokeWeight(4);
      fill(128,128,128);

     line(roofbar.x, roofbar.y, bob1.x+70 , bob1.y+125);
	line(roofbar.x+80, roofbar.y, bob2.x+90 , bob2.y+165);
	line(roofbar.x+125, roofbar.y, bob3.x+150 , bob3.y+175);
	line(roofbar.x, roofbar.y, bob4.x+-70, bob4.y+-125);

      //fill("red");
      rect(this.x,this.y,this.w, this.h);
      pop();
    }
}