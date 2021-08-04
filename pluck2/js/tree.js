class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=450;
		this.Height=600;
		this.Thickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.Thickness, {isStatic:true})
		this.leftBody=Bodies.rectangle(0, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:false})
		this.rightBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push();
			translate(posBottom.x, posBottom.y+10);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.Height/2,this.Width, this.Height-90)
			pop();
			
	}

}