
import param from "./parameters.js"
import {each,shuffle} from "lodash-es"
import {dist} from "./utils"
import {hex} from "lattices"


var agents = [];

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	
	const s = hex(param.N).boundary(param.boundary)
	
	agents = s.nodes;
	
	agents.forEach(a=>{a.state="S";a.change=true})
	agents.filter(a=>dist(a,{x:0,y:0})<param.seed_size/param.N).forEach(a=>{a.state="I";a.change=true})
	
};

const go  = () => {
	
	param.tick++;
	
	each(agents,a=>{a.change=false})
	
	let infected = agents.filter(d=>d.state=="I");
	let recovered = agents.filter(d=>d.state=="R");
	
	each(infected,a=>{
		if(Math.random()<param.recovery_rate.widget.value()){ 
			a.state="R"
			a.change=true
		}
	})

	each(recovered,a=>{
		if(Math.random()<param.waning_immunity_rate.widget.value()){ 
			a.state="S"
			a.change=true
		}
	})

	infected = agents.filter(d=>d.state=="I");
	
		
	each(shuffle(infected),a=>{
		const sn = a.neighbors.filter(x=>x.state=="S");
		each(sn,s=>{
			if(Math.random()<param.infection_rate.widget.value()){
				s.state="I"
				s.change=true
			}
		})
	})
		
}

const update = () => {
	
	

}

export {agents,initialize,go,update}
