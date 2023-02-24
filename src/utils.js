import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs } from "lodash-es"

// const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," "); return d[1]} );

const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," ")} );

const toArray = (x) => map(toPairs(x),d=>d[1]);

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	

const get_variables = (p) => pickBy(p, v =>  has(v, "range"))  
const get_booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const get_choices = (p) => pickBy(p, v =>  has(v, "choices"))  


const dist = (a,b) => {
	var dx = Math.abs(a.x-b.x);
	var dy = Math.abs(a.y-b.y);
	return Math.sqrt(dx**2+dy**2)
}

export {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,dist}