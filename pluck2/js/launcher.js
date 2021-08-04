class launcher{
	constructor(body,anchor)
	{
		
		this.options={ 
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:0.001
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.launcher=Constraint.create(this.options);
		World.add(world,this.launcher);
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly(){
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}

		incSpeed.mousePressed(()=>{
			this.options = {
			bodyA:body,			 
			pointB:anchor, 
			stiffness:4,
			length:1
			}
		})
	}
}