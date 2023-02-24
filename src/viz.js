import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"
import {each} from "lodash-es"


var ctx,dL,W,H;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

const C = d3.scaleOrdinal().domain(["S","I","R"])
	.range([cfg.simulation.S_color,cfg.simulation.I_color,cfg.simulation.R_color])


function draw_path(a){
	a.forEach(d=>{
		const c = d.cell();
		const l = c.length;
		
		const color = C(d.state);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();
		//ctx.stroke()
		ctx.closePath();
	})
}

// function draw_path(a){
// 	a.forEach(d=>{
// 		const c = d.cell();
// 		const l = c.length;
//
//
// 		ctx.fillStyle=C(d.state);
// 		//ctx.strokeStyle=C(d.state);
//
// 		//ctx.lineWidth = 0;
// 		//ctx.imageSmoothingEnabled = true;
// 		ctx.beginPath();
// 		ctx.moveTo(X(c[0].x),Y(c[0].y))
// 		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
// 		//ctx.stroke();
// 		ctx.fill();
// 		ctx.closePath();
// 	})
// }


const update = (display,config) => {

	
}

const go = (display,config) => {
	
	 
	draw_path(agents.filter(a=>a.change==true))
	
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.translate(0.5, 0.5);
	ctx.clearRect(0, 0, W, H);
	
	draw_path(agents)
	
};



export {initialize,go,update}
