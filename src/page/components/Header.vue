<template>
	<div class="header">
		<div class="header-left ">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="header-middle">
			<i class="iconfont icon-sousuo"></i>
			请输入城市/景点/游玩主题
		</div>
		<div class="header-right ">武汉
			<span>
				<i class="iconfont icon-xiajiantou"></i>
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Header'
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
		flex:auto;
		border-radius: 0.04rem;
	}
	.header-right{
		line-height:0.44rem;
		width:0.64rem;
		text-align: center;
		margin-right:0.02rem;
	}
</style>