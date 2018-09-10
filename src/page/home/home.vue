<template>
	<div>
		<home-header :City="city"></home-header>
		<home-swipe  :swiperList="swipers"></home-swipe>
		<home-iconts :icons="icons"></home-iconts>
		<home-bottom></home-bottom>
		<home-recommand :recommandList="recommands"></home-recommand>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>
<script>
	import Header from './components/Header'
	import Swiper from './components/swiper'
	import Iconts from './components/iconts'
	import Bottom from './components/Bottom'
	import recommand from './components/recommand'
	import weekend from './components/weekend'
	import axios from 'axios'
	export default{
		name:'home',
		components:{
			HomeHeader:Header,
			HomeSwipe:Swiper,
			HomeIconts:Iconts,
			HomeBottom:Bottom,
			HomeRecommand:recommand,
			HomeWeekend: weekend
		},
		data(){
			return {
				city:'',
				swipers:[],
				recommands:[],
				weekendList:[],
				icons:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
                     .then(this.getHomeInfoSuss)
                     .catch(function(error){
                     	console.log(error)
                     })
                },
             getHomeInfoSuss(res){
             	var res=res.data;
	            if(res.data&&res.ret){
	            	this.city=res.data.city;
	            	this.swipers=res.data.swiperList;
	            	this.recommands=res.data.recommendList;
	            	this.weekendList=res.data.weekendList;
	            	this.icons=res.data.iconList;
	            }
	            console.log(res)
                }

		},
		mounted(){
			this.getHomeInfo()
		}

	} 
</script>