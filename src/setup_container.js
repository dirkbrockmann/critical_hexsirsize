import * as d3 from "d3"
import * as widgets from "d3-widgets"
import styles from "./styles.module.css"

export default (container_id,config)=>{

	const grid = widgets.grid(
			config.controls_size.width,
			config.controls_size.height,
			config.controls_grid.nx,
			config.controls_grid.ny
		);
console.log(container_id)
	const container = d3.select("#"+container_id).classed(container_id+" "+config.container_class,true)

	const displayId = container_id + "_display";
	const controlsId = container_id + "_controls";

	const display = container.append("div")
		.attr("id", displayId)
		.attr("class", styles.displayPanel)
		.classed(config.display_class,true)
		.classed(config.debug_lattice,config.debug)
		.append(config.display_type)
		.attr("width",config.display_type=="canvas" ? config.display_size.width : null)
		.attr("height",config.display_type=="canvas" ? config.display_size.height : null)
		.attr("viewBox",config.display_type=="canvas" ? null: "0 0 "+config.display_size.width+" "+config.display_size.height)	
		.style("width","100%")


	const controls = container.append("div")
		.attr("id", controlsId)
		.attr("class", "d3-widgets "+styles.controlPanel)
		.classed(config.controls_class,true)
		.classed(config.debug_lattice,config.debug)
		.append("svg")
		.attr("viewBox", "0 0 "+config.controls_size.width+" "+config.controls_size.height)
		.style("width","100%")
		.style("height","100%")		

	if (typeof config.controls_border === "string" && config.controls_border.length > 0){
		controls.style("border",config.controls_border)
	}
	
	if (typeof config.display_border === "string" && config.display_border.length > 0){
		display.style("border",config.display_border)
	}

	if (config.debug){		
		controls.selectAll(null).data(grid.points).enter().append("circle").attr("r",2)
			.attr("transform",d=>"translate("+d.x+","+d.y+")")
			.style("fill","black")	
	}
	
return { display:display, controls:controls, grid: grid }
}




