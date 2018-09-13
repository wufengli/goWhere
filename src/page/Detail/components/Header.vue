<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showBanner">
			<i class="iconfont icon-fanhui header-goback"></i>
		</router-link>
		<div class="header-fixed" v-show="!showBanner" :style="opacityStyle">
			 <router-link tag="i" to="/" class="iconfont icon-fanhui head-back"></router-link>
			 <span class="head-title">景点详情</span>
		</div>
	</div>
</template>
<script>
	import galary from '@common/gallary'
	export default{
		name:'Header',
		data(){
			return{
				showBanner:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		activated(){
			window.addEventListener('scroll',this.handleScroll);
			//此处事件绑定在全局变量window中，因此如果不解绑事件将在每一个页面上触发，所以需要全局事件解绑。
		},
		deactivated(){
			window.removeEventListener('scroll',this.handleScroll);
		},
		methods:{
			handleScroll(){
				console.log("a");
				var scrollTop=document.documentElement.scrollTop;
				if(scrollTop > 40){
					let opacity=scrollTop / 200;
					opacity=opacity > 1 ? 1 : opacity;
					this.opacityStyle={opacity};
					this.showBanner=false;
				}
				else{
					this.showBanner=true;
				}
				console.log(this.showBanner)
			}
		}
	} 
</script>
<style lang="stylus" scoped>
	.header-abs{
		position:absolute;
		left:0.1rem;
		top:0.1rem;
		width:0.4rem;
		height:0.4rem;
		border-radius:0.2rem;
		background:#000;
		text-align:center;
		line-height:.4rem;
	}
	.header-goback{
		display:block;
		color:#fff;
		font-size:.15rem;
		
	}
	.header-fixed{
		position:fixed;
		top:0;
		width:100%;
		height:0;
		padding-bottom:0.44rem;
		background:rgb(0, 175, 199);
		font-size:0.16rem;
		line-height:0.44rem;
		display:flex;
		color:#fff;
	}
	.head-back{
		margin-left:0.1rem;
		display:block;
	}
	.head-title{
		flex:1;
		text-align:center;
		
	}
</style>