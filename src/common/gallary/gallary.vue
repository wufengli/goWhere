<template>
	<div class="gallary" @click="handleGalaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in imgUrl" :key="index"  >
					<img  class="swiper-img" :src="item"/>
				</swiper-slide>
				<div class="swiper-pagination  pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:'CommonGallary',
		props:{
			imgUrl:Array,
			default(){
				return ['http://img1.qunarzz.com/sight/p0/1805/d7/d71a0e1728e5220aa3.water.jpg_r_800x800_39331e12.jpg']
			}
		},
		methods:{
			handleGalaryClick(){
				this.$emit('close');
			}
		},
		data(){
		return {
			swiperOption:{
				autoplay: 3000,
				pagination: '.swiper-pagination',
				paginationType:'fraction',
				observer:true,
				observeParents:true,
			}
		}
		
	}
}
	
</script>
<style lang="stylus" scoped>
	.gallary{
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background:#000;
		display:flex;
		flex-direction: column;
		justify-content:center;
		z-index:1;
	}
	.wrapper{
		width:100%;
		height:0;
		padding-bottom:100%;
		font-size:0.14rem;
		color:#fff;
	}
	.swiper-img{
		width:100%;
	}
	.gallary >>> .swiper-container{
		overflow:visible;
	}
	.pagination{
		bottom:-1rem;
	}
</style>