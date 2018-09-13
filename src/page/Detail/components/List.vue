<template>
	<div>
		<div v-for="(item,index) of list" :key="index">
			<div class="detailTile border-bottom">
				<span class="icon"></span>
				<span>{{item.title}}</span>
			</div>
			<div  class="children"v-if="item.children">
				<List :list="item.children"></List>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'List',
		props:{
			list:Array
		}
		
	} 
</script>
<style lang="stylus" scoped>
.detailTile{
	position:relative;
	display:flex;
	font-size:.16rem;
	line-height:.3rem;
	padding:0.1rem 0.1rem;
}
.icon{
	position:relative;
	top:.03rem;
    width: .18rem;
    height: .18rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.23rem no-repeat;
    background-size: .2rem 1.5rem;
    background-position: center center;
}
.children{
	margin-left:0.5rem;
}
</style>