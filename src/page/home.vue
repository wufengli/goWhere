<template>
	<div>
		<home-header></home-header>
		<home-swipe></home-swipe>
		<home-iconts></home-iconts>
		<home-bottom></home-bottom>
		<home-recommand></home-recommand>
		<home-weekend></home-weekend>
	</div>
</template>
<script>
	import Header from './components/Header'
	import Swiper from './components/swiper'
	import Iconts from './components/iconts'
	import Bottom from './components/Bottom'
	import recommand from './components/recommand'
	import weekend from './components/weekend'
	export default{
		name:'home',
		components:{
			HomeHeader:Header,
			HomeSwipe:Swiper,
			HomeIconts:Iconts,
			HomeBottom:Bottom,
			HomeRecommand:recommand,
			HomeWeekend: weekend
		}
	}
</script>