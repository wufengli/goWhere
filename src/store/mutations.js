export default {
		changge(state,city){
			this.state.city=city;
			try{
					localStorage.city=city

				}catch(e){
				console.log(e)
				}
		}
	}