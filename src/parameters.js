export default {
		N:70,
		seed_size:1,
		boundary:"dirichlet",
		infection_rate: {
			range:[0,1],
			default:0.69
		},
		recovery_rate: {
			range:[0,0.2],
			default:0.1
		},
		waning_immunity_rate:{
			range : [0,.1],
			default : 0.01
		}
}

