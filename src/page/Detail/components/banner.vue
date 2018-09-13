<template>
	<div>
		<div class="detailBanner" @click="handleBannerClick">
			<img  class="bannerImg" src="http://img1.qunarzz.com/sight/p0/1805/14/14fa1498de97e60fa3.water.jpg_r_800x800_312574cc.jpg"/>
			<div class="bannerInfo">
				<div class="bannerTitle">知音号游船</div>
				<div class="bannerNum">
					<i class="iconfont icon-tupian"></i>
					<i>39</i>
				</div>
			</div>
		</div>
		<detail-gallary :imgUrl="imgs" v-show="showGallary" @close="closeGallary"></detail-gallary>
	</div>
</template>
<script>
	import galary from '@common/gallary'
	export default{
		name:'banner',
		data(){
				return{
					imgs:['http://img1.qunarzz.com/sight/p0/1805/d7/d71a0e1728e5220aa3.water.jpg_r_800x800_39331e12.jpg','http://img1.qunarzz.com/sight/p0/1805/e7/e7a3dd2b6bef784ca3.water.jpg_r_800x800_7e9235d6.jpg'],
					showGallary:false
				}
		},
		components:{
			DetailGallary:galary
		},
		methods:{
		handleBannerClick(){
				this.showGallary=true;
		},
		closeGallary(){
			this.showGallary=false;
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