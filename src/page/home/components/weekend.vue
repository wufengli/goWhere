<template>
	<div>
		<div class="recommand-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in weekendList" :key="item.id">
				<div class="img-box">
					<img  class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"HomeRecommand" ,
	props:{
		weekendList:Array
	}
}
	
</script>
<style lang="stylus" scoped>	
@import '~@style/function.styl'
.recommand-title{
	margin-top:0.05rem;
	 line-height:.22rem;
	 background:#ffffff;
	 font-size:0.16rem	;
	 padding:0.12rem 0 0.13rem 0.1rem;
}
.item{
	background:#ffffff;
}
.img-box{
 height:0;
 padding-bottom:37%;
 overflow:hidden;
}	
.item-img{
	width:100%;
}
.item-info{
	padding:0.05rem;
	font-size:0.14rem;
}
.item-title{
	line-height:0.22rem;
	margin-top:0.13rem; 
	color:#212121;
}
.item-desc{
	margin-top:0.07rem;
	line-height:0.17rem;
	font-size:0.12rem;
	color:#616161;
	ellis();
}

</style>										
