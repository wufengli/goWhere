<template>
	<div class="home-swipe">
	<swiper :options="swiperOption"  v-if="showSwiper">
			<swiper-slide v-for="item in swiperList " :key="item.id">
				<img  class="swiper-img" :src="item.imgUrl"/>
			</swiper-slide>
			<div class="swiper-pagination  pagination"  slot="pagination"></div>
		</swiper>
		
	</div>
</template>
<script>
export default{
	name:'HomeSwiper',
	props:{
		swiperList:Array
	},
	data(){
		return {
			swiperOption:{
				autoplay: 3000,
				pagination: '.swiper-pagination'
			}
		}
	},
	computed:{
		showSwiper(){
			return this.swiperList.length
		}
	}
}
</script>
<style lang="stylus" scoped>
.home-swipe >>> .swiper-pagination-bullet{
		background:rgba(144,144,144,0.8)!important;
		opacity:0.5;
		width:6px;
		height:6px;
	}
	.home-swipe >>> .swiper-pagination-bullet-active{
		background:#ffffff !important;
	}
	.home-swipe{
		overflow:hidden;
		width:100%;
		height:0;
		padding-bottom:118px;
	}
	.swiper-img{
		display: block;
		width:100%;
	}
	 .swiper-pagination-bullets{
		bottom:0px;
	}
</style>