<template>
	<div>
		<div class="recommand-title">热销推荐</div>
		<ul>
			<!-- <router-link to="/detail"> -->
			<router-link class="item border-bottom" 
			v-for="item in recommandList" 
			:key="item.id" 
			:to="'/detail/'+item.id" 
			tag="li">
				<div class="img-box">
					<img  class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-more">查看详情</button>
				</div>
			</router-link>
		<!-- </router-link> -->
		</ul>
	</div>
</template>
<script>
export default{
	name:"HomeRecommand" ,
	props:{
		recommandList:Array
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
	display:flex;
	height:1rem;
	background:#ffffff ;
	overflow:hidden;
	padding:0.1rem 0.05rem;
	font-size:0.16rem;
}	
.item-img{
	width:1rem;
	height:1rem; 
	display:block;
}
.item-info{
	flex:1; 
	min-width:0px; 
	padding:0.05rem; 
}
.item-title{
	line-height:0.22rem;
	margin-top:0.13rem; 
}
.item-desc{
	margin-top:0.07rem;
	line-height:0.17rem;
	font-size:0.14rem;
	color:#cccccc;
	ellis();
}
.item-more{
	background:#ff9300;
	padding:0 0.01rem;
	border-radious:0.05rem;
	color:#ffffff;
	margin-top:0.1rem;
	border:0rem;
}
</style>										
