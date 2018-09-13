<template>
	<div>
		<detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="categoryList" ></detail-list>
		</div>
	</div>
</template>
<script>
	import banner from './components/banner'
	import header from './components/Header'
	import list from './components/List'
	import axios from 'axios'
	export default{
		name:'detail',
		components:{
			DetailBanner:banner,
			DetailHeader:header,
			DetailList:list,

		},
		data(){
			return{
				bannerImg:'',
				categoryList:[],
				gallaryImgs:[],
				sightName:''
			}
		},
		mounted(){
			this.getdata()
		},
		methods:{
			getdata(){
				axios.get('/api/detail.json',{
					params: {
						id:this.$route.params.id
					}
				})
                     .then(this.getHomeInfoSuss)
                     .catch(function(error){
                     	console.log(error)
                     })
			},
			getHomeInfoSuss(res){
				var res=res.data;
				console.log(res);
				if(res.ret&&res){
					this.bannerImg=res.data.bannerImg;
					this.categoryList=res.data.categoryList;
					this.gallaryImgs=res.data.gallaryImgs;
					this.sightName=res.data.sightName;
				}
			}
		}
	} 
</script>
<style lang="stylus" scoped>
	.content{
		height:10rem;
	}
</style>