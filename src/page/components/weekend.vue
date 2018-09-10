<template>
	<div>
		<div class="recommand-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommandList" :key="item.id">
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
	data(){
		return {
			recommandList:[{
			id:"0001",
			imgUrl:"http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
			title:"武汉必游TOP10",
			desc:"到武汉感受神奇的热干面之都"
		},
		{
			id:"0002",
			imgUrl:"http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg",
			title:"开启亲子时光",
			desc:"这些地方都是宝贝的最爱"
		},
		{
			id:"0003",
			imgUrl:"http://img1.qunarzz.com/sight/source/1505/3a/f96e254541abb.jpg_r_640x214_6b1fc9f0.jpg",
			title:"鄂西旅游圈",
			desc:"感受鄂西旖旎风光，土苗民族风情"
		}
		]
		}
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
