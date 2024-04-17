export default {
		N:50,
		seed_size:1,
		boundary:"dirichlet",
		infection_rate: {
			range:[0,1],
			default:0.69,
			label:"Infektionsrate"
		},
		recovery_rate: {
			range:[0,0.2],
			default:0.1,
			label:"Gesundungsrate"
		},
		waning_immunity_rate:{
			range : [0,.1],
			default : 0.01,
			label:"Immunitätsverlustrate"
		}
}

