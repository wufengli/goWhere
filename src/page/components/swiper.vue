<template>
	<div class="home-swipe">
	<swiper :options="swiperOption" class="wraps">
			<swiper-slide v-for="item in swiperList " :key="item.id">
				<img  class="swiper-img" :src="item.imgUrl"/>
			</swiper-slide>
			<!-- <swiper-slide>
				<img  class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/78/0f57f90bedbc4102.jpg_750x200_f0d1ad2c.jpg" />
			</swiper-slide>
			<swiper-slide>
				<img  class="swiper-img" src="https://img1.qunarzz.com/piao/fusion/1808/fd/fddc5309111a0402.jpg_750x200_e7b93551.jpg" />
			</swiper-slide>
			<swiper-slide>
				<img  class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg" />
			</swiper-slide>
			<swiper-slide>
				<img  class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1808/74/cad6bf966300902.jpg_750x200_7641ba93.jpg"
			</swiper-slide> -->
			<div class="swiper-pagination  pagination"  slot="pagination"></div>
		</swiper>
		
	</div>
</template>
<script>
export default{
	name:'HomeSwiper',
	data(){
		return {
			swiperOption:{
				autoplay: 3000,
				pagination: '.swiper-pagination'
			},
			swiperList:[{
				id:"0001",
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"
			},{
				id:"0002",
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1807/78/0f57f90bedbc4102.jpg_750x200_f0d1ad2c.jpg"
			},
			{
				id:"0003",
				imgUrl:"https://img1.qunarzz.com/piao/fusion/1808/fd/fddc5309111a0402.jpg_750x200_e7b93551.jpg" 
			},
			{
				id:"0004",
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/74/cad6bf966300902.jpg_750x200_7641ba93.jpg" 
			},
			{
				id:"0005",
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg" 
			}
			  ]
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
		width:100%;
		height:0;
		padding-bottom:100px;
	}
	.swiper-img{
		display: block;
		width:100%;
		height:100%;
	}
	 .swiper-pagination-bullets{
		bottom:0px;
	}
</style>