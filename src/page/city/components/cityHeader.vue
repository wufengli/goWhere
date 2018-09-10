<template>
	<div class="header">
		<router-link to="/">
			<i class="iconfont icon-fanhui  goback"></i>
		</router-link>
		<span class="title">城市选择</span>
		<i class="goback"></i>
	</div>
</template>
<script>
	export default{
		name:'cityHeader'
		
	} 
</script>
<style lang="stylus" scoped>
	.header{
		display:flex;
		overflow:hidden;
		height:0.44rem;
		line-height:0.44rem;
		color:#fff;
		text-align:center;
		background:rgb(0, 188, 212);
		font-size:0.16rem;
	}
	.title{
		flex:1;
	}
	.goback{
		width:0.5rem;
		padding-left:0.01rem;
		box-sizing:border-box;
		color:#ffffff;
		display:block;
	}
</style>