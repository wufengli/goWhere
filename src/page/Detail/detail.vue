<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>
<script>
	import banner from './components/banner'
	import header from './components/Header'
	export default{
		name:'detail',
		components:{
			DetailBanner:banner,
			DetailHeader:header,
		}
	} 
</script>
<style lang="stylus" scoped>
	.content{
		height:10rem;
	}
</style>