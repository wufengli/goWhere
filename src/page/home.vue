<template>
	<div>
		<home-header></home-header>
		<home-swipe></home-swipe>
		<home-iconts></home-iconts>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
	import Header from './components/Header'
	import Swiper from './components/swiper'
	import Iconts from './components/iconts'
	import Bottom from './components/Bottom'
	export default{
		name:'home',
		components:{
			HomeHeader:Header,
			HomeSwipe:Swiper,
			HomeIconts:Iconts,
			HomeBottom:Bottom
		}
	}
</script>