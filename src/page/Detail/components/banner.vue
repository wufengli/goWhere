<template>
	<div>
		<div class="detailBanner" @click="handleBannerClick">
			<img  class="bannerImg" :src="bannerImg"/>
			<div class="bannerInfo">
				<div class="bannerTitle">{{sightName}}</div>
				<div class="bannerNum">
					<i class="iconfont icon-tupian"></i>
					<i v-html="getNum"></i>
				</div>
			</div>
		</div>
		<detail-animate>
		<detail-gallary :imgUrl="gallaryImgs" v-show="showGallary" @close="closeGallary"></detail-gallary>
		</detail-animate>
	</div>
</template>
<script>
	import galary from '@common/gallary'
	import animate from '@/common/Animate/animate'
	export default{
		name:'banner',
		props:{
			bannerImg:String,
			sightName:String,
			gallaryImgs:Array,
		},
		data(){
				return{
					showGallary:false
				}
		},
		components:{
			DetailGallary:galary,
			DetailAnimate:animate
		},
		methods:{
		handleBannerClick(){
				this.showGallary=true;
		},
		closeGallary(){
			this.showGallary=false;
		}
		},
		computed:{
			getNum(){
				return this.gallaryImgs.length
			}
		}
		
	} 
</script>
<style lang="stylus" scoped>
	.detailBanner{
		overflow:hidden;
		height:0;
		padding-bottom:66%;
		position:relative;
		
	}
	.bannerImg{
		width:100%;
	}
	.bannerInfo{
		position:absolute;
		left:0;
		right:0;
		bottom:0;
		line-height:0.2rem;
		font-size:0.14rem;
		display:flex;
		padding:0.05rem;
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
		
	}
	.bannerTitle{
		flex:1;
		padding:0.05rem 0.2rem;
		color:#ffffff;
	}
	.bannerNum{
		padding:0.05rem 0.05rem; 
		border-radius:0.1rem;
		background:rgba(0,0,0,0.5);
	}
</style>