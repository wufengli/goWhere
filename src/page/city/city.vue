<template>
	<div>
		<home-header></home-header>
		<city-search :cities="cities"></city-search>
		<city-list :city="hotCities" :cities="cities" :Letter="Letter"></city-list>
		<city-letter :cities="cities" @give="getLetter"></city-letter>
	</div>
</template>
<script>
	import Header from './components/cityHeader'
	import citySearch from './components/search'
	import cityList from './components/cityList'
	import cityLetter from './components/Letter'
	import axios from 'axios'
	export default{
		name:'City',
		components:{
			HomeHeader:Header,
			citySearch:citySearch,
			cityList:cityList,
			cityLetter:cityLetter

		},
		data(){
			return{
				cities:[],
				hotCities:[],
				Letter:''
			}
		},
		methods:{
			getCityInfo(){
				axios.get("/api/city.json")
				.then(this.handleSuss)
			},
			handleSuss(res){
				console.log(res)
				var res=res.data;
				if(res.ret&&res){
					this.cities=res.data.cities;
					this.hotCities=res.data.hotCities;
				}
			},
			getLetter(e){
				this.Letter=e;
			}
		},
		mounted(){
			this.getCityInfo()
		}

	} 
</script>