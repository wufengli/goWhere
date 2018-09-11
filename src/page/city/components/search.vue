 <template>
 	<div>
		<div class="search">
			<input type="text" class="searchInput" name="city" placeholder="输入城市名或拼音"
			v-model="keyWord"/>
		</div>
		<div class="search-content" ref="serch" v-show="keyWord">
			<ul>
				<li class="searchBox border-bottom" v-for="item in list">{{item.name}}</li>
				<li v-show="cannot">并未找到与它匹配的结果</li>
			</ul>
		</div>
   </div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default{
		name:'citySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keyWord:'',
				list:[],
				timmer:null
			}
		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.serch)
		},
		computed:{
			cannot(){
				return !this.list.length
			}
		},
		watch:{
			keyWord(){
				console.log(this.keyWord)
				if(this.timmer){
					clearTimeout(this.timmer)
				}
				this.timmer=setTimeout(()=>{
					const result=[];
					if(!this.keyWord){
						return this.list=[];
					}
					for(let i in this.cities ){
						this.cities[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyWord)>-1||value.name.indexOf(this.keyWord)>-1){
								result.push(value)
							}
						})
					}
					this.list=result
					
				},)
			}
		}
		
	} 
</script>
<style lang="stylus" scoped>
.search{
	font-size:0.12rem;
	height:0.33rem;
	width:100%;
	padding:5px 10px;
	background:rgb(0, 188, 212);
	box-sizing:border-box;
}
.searchInput{
	width:100%;
	border-radius:0.05rem
	height:100%;
	border:none;
	color:#666666;
	box-sizing:border-box;
	outline:0;
	padding-left:10px;
}
.searchInput:-moz-placeholder{
	text-align:center;
	color:#cccccc;
}  
.searchInput::-webkit-input-placeholder{
	text-align:center;
	color:#cccccc;
}
.searchInput:-ms-input-placeholder{
	text-align:center;
	color:#cccccc;
} 
.search-content{
	overflow:hidden;
	position:absolute;
	top:0.77rem;
	left:0;
	right:0;
	bottom:0;
	background:#eee;
	z-index:1;
	font-size:0.14rem;
}
.searchBox{
	background:#ffffff;
	line-height:0.3rem;
	padding:0.05rem 0.1rem;
}
</style>