<template>
	<div>
		<home-header :City="City"></home-header>
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
	import {mapState} from 'vuex'
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
				lastCity:'',
				City:'',
				swipers:[],
				recommands:[],
				weekendList:[],
				icons:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json?city=' + this.city)
                     .then(this.getHomeInfoSuss)
                     .catch(function(error){
                     	console.log(error)
                     })
                },
             getHomeInfoSuss(res){
             	var res=res.data;
	            if(res.data&&res.ret){
	            	this.City=res.data.city;
	            	this.swipers=res.data.swiperList;
	            	this.recommands=res.data.recommendList;
	            	this.weekendList=res.data.weekendList;
	            	this.icons=res.data.iconList;
	            }
	            console.log(res)
                }

		},
		computed:{
			...mapState(['city'])
		},
		mounted(){
			this.lastCity=this.city;
			this.getHomeInfo()
			console.log("mounted")
		},
		activated(){
			console.log("activated")
			if(this.lastCity!=this.city){
				this.getHomeInfo()
			}
		}//activated在每次加载都发生
	} 
</script>