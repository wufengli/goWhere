<template>
	<div>
		<div class="recommand-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommandList" :key="item.id">
				<div class="img-box">
					<img  class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-more">查看详情</button>
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
			imgUrl:"http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg",
			title:"武汉海昌极地海洋世界",
			desc:"武汉海昌极地海洋世界,武汉的第一站武汉海昌极地海洋世界,武汉的第一站武汉海昌极地海洋世界,武汉的第一站"
		},
		{
			id:"0002",
			imgUrl:"http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg",
			title:"知音号游船",
			desc:"武汉海昌极地海洋世界,武汉的第一站武汉海昌极地海洋世界,武汉的第一站武汉海昌极地海洋世界,武汉的第一站"
		},
		{
			id:"0003",
			imgUrl:"http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg",
			title:"武汉欢乐谷",
			desc:"孩子们的欢乐世界"
		},
		{
			id:"0004",
			imgUrl:"http://img1.qunarzz.com/sight/p0/1705/3a/3aaa2e3a21f47659a3.img.png_200x200_eeb5aec3.png",
			title:"武汉维佳童话镇",
			desc:"孩子们的欢乐世界"
		},
		{
			id:"0005",
			imgUrl:"http://img1.qunarzz.com/sight/p0/1802/ae/ae78cf6bc5aa1aea3.img.jpg_200x200_3ea2bad5.jpg",
			title:"袋鼠玩趣城",
			desc:"孩子们的欢乐世界"
		},
		{
			id:"0006",
			imgUrl:"http://img1.qunarzz.com/sight/p0/1509/ca/2c5c95c035a9f99ad613fad782798aea.water.jpg_200x200_fd92205b.jpg",
			title:"武汉欢乐谷",
			desc:"梁子湖龙湾度假村"
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
