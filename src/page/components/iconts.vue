<template>
<div class="iconList">
<swiper :options="swiperOption" class="wraps">
<swiper-slide v-for="(page,index) of pages" :key="index">
<div class="icon" v-for="item in page" :key="item.id">
<img class="imgIcon" :src="item.imgUrl" />
<p class="iconP">{{item.desc}}</p>
</div>
</swiper-slide>
<div class="swiper-pagination  pagination"  slot="pagination"></div>
</swiper>
</div>
</template>
<script>
export default{
	name:"HomeIconts",
	props:{
		icons:Array
	},
	data(){
		return{
			swiperOption:{
				autoplay:false,
				pagination: '.swiper-pagination'
				}
			}
			},
			computed:{
									pages(){
										const pages=[];
											this.icons.forEach((item,index)=>{
											const page=Math.floor(index/8);
											if(!pages[page]){
																pages[page]=[]
															}
															pages[page].push(item); 
															})
														return pages
													}
												}
											}
											</script>
											<style lang="stylus" scoped>
											@import '~@style/function.styl'
											
											.iconList{
												width:100%;
												height:0;
												padding-bottom: 50%;
												overflow: hidden;
												font-size:0.14rem;
												text-align:center;
												padding-top:10px;
												color:#212121;
												background:#ffffff;
											}
											.icon{
												position: relative;
												float:left;
												width:25%;
												height:0px;
												padding-bottom:21.3%;
												overflow:hidden;
											}
											.iconP{
												margin-top:0.05rem;
												height:0.2rem;
												ellis()
											}
											.imgIcon{
												display:block;
												width:58%;
												padding:0px 21%;
												border-radious:10px;
											}
										.swiper-pagination{
										position:relative;
										bottom:0px;
										}
										.iconList >>> .swiper-pagination-bullet{
										width:0.06rem;
										height:0.06rem;
										}
											</style>										}
										}
