<template>
	<div class="list" ref="getDom">
		<div>
			<div class="area">
				<div class="title border-topbottom">你的位置</div>
				<div class="button-list clearfix">
					<div class="butwrap fl">
						<div class="button ">北京</div>
					</div>

				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list clearfix">
					<div class="butwrap fl">
						<div class="button ">北京</div>
					</div>
					<div class="butwrap fl">
						<div class="button ">北京</div>
					</div><div class="butwrap fl">
						<div class="button ">北京</div>
					</div><div class="butwrap fl">
						<div class="button ">北京</div>
					</div><div class="butwrap fl">
						<div class="button ">北京</div>
					</div><div class="butwrap fl">
						<div class="button ">北京</div>
					</div><div class="butwrap fl">
						<div class="button ">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="">
					<ul class="itemList">
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
					</ul>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="">
					<ul class="itemList">
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
					</ul>
				</div>
				<div class="title border-topbottom">A</div>
				<div class="">
					<ul class="itemList">
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
						<li class="item border-bottom">阿贝加</li>
					</ul>
				</div>
			</div>
	   </div>
	</div>
</template> 
<script>
	import Bscroll from 'better-scroll'
	export default{
		name:'cityList',
		mounted(){
			this.scroll=new Bscroll(this.$refs.getDom)
		}
		
	} 
</script>
<style lang="stylus" scoped>
.title{
	line-height:0.24rem;
	backgroung:#eee;
	font-size:0.12rem;
	padding-left:0.1 rem;
	color:#212121;	
}
.border-topbottom  &:before,&:after{
	border-color:#ccc;
}
.border-bottom::before{
	border-color:#ccc;
}
.button-list{
	overflow:hidden;
	background:#ffffff;
	font-size:0.14rem;
	padding:0.05rem 0.3rem 0.05rem 0.05rem;
}
.butwrap{
	width:33.33%;
}
.button{
	text-align:center;
	border:1px solid #cccccc;
	margin:.05rem;
	padding:0.02rem;
	border-radius:0.05rem;
}
.itemList{
	font-size:0.14rem;
	background:#ffffff;
}
.item{
	line-height:0.27rem; 
	color:#666;
	padding:0.05rem 0rem 0.05rem 0.1rem;
}
.list{
	position:absolute;
	top:0.77rem;
	left:0;
	bottom:0;
	right:0;
	overflow:hidden;
}
</style>