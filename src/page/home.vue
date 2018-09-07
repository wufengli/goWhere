<template>
	<div>
		<home-header></home-header>
		<home-swipe></home-swipe>
		<home-iconts></home-iconts>
	</div>
</template>
<script>
	import Header from './components/Header'
	import Swiper from './components/swiper'
	import Iconts from './components/iconts'
	export default{
		name:'home',
		components:{
			HomeHeader:Header,
			HomeSwipe:Swiper,
			HomeIconts:Iconts
		}
	}
</script>