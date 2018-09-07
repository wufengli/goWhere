<template>
<div class="iconList">
<swiper :options="swiperOption" class="wraps">
<swiper-slide v-for="(page,index) of pages" :key="index">
<div class="icon" v-for="item in page" :key="item.id">
<img class="imgIcon" :src="item.imgurl" />
<p class="iconP">{{item.pName}}</p>
</div>
</swiper-slide>
<div class="swiper-pagination  pagination"  slot="pagination"></div>
</swiper>
</div>
</template>
<script>
export default{
	name:"HomeIconts",
	data(){
		return{
			swiperOption:{
				autoplay:false,
				pagination: '.swiper-pagination'
				},
				imgList:[
				{
					id:"001",
					imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					pName:"景点门票"
					},
					{
						id:"002",
						imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
						pName:"武汉旅游"
						},
						{
							id:"003",
							imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
							pName:"游乐场"
							},
							{
								id:"004",
								imgurl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
								pName:"夏日玩水"
								},
								{
									id:"005",
									imgurl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
									pName:"海洋馆"
									},
									{
										id:"006",
										imgurl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
										pName:"一日游"
										},
										{
											id:"007",
											imgurl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
											pName:"名胜古迹"
											},
											{
												id:"008",
												imgurl:"http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
												pName:"汽车票"
												},
												{
													id:"009",
													imgurl:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
													pName:"水上乐园"
													},
													{
														id:"010",
														imgurl:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
														pName:"全部玩乐"
													}
													]
												}
												},
												computed:{
													pages(){
														const pages=[];
														this.imgList.forEach((item,index)=>{
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
												padding-top:5px;
												color:#212121;
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
											}

											</style>