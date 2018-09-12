<template>
	<div class="header">
		<div class="header-left ">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="header-middle">
			<i class="iconfont icon-sousuo"></i>
			请输入城市/景点/游玩主题
		</div>
		<router-link  to="/city">
			<div class="header-right ">{{this.city}}
			<span>
				<i class="iconfont icon-xiajiantou"></i>
			</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	import {mapState,mapGetters} from 'vuex'
	export default{
		name:'Header',
		props:{
			City:String
		},
		computed:{
			...mapGetters(['doubleCity']),//相当于vue中的计算属性
			...mapState(['city'])
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@style/style.styl'
	.header{
		display: flex;
		/*position: relative;*/
		font-size:0.14rem;
		height:0.44rem;
		background:$bgcolor;
		color:#ffffff;
		line-height: 0.44rem;
	}
	.header-left{
		padding:0rem 0.1rem;
		width:0.4rem;
		box-sizing: border-box;
		font-size: 0.18rem;
	}
	.header-middle{
		padding-left:0.05rem;
		position: relative;
		margin-top: 0.07rem;
		color:#e4e7ea;
		height:0.3rem;
		line-height: 0.3rem;
		background:#ffffff;
		/*width:2.69rem;*/
		flex:1;
		border-radius: 0.04rem;
	}
	.header-right{
		line-height:0.44rem;
		margin-left:0.05rem;
		text-align: center;
		margin-right:0.02rem;
		color:#ffffff; 
	}
</style>