<template>
	<div class="letter">
		<ul class="letterWrap">
			<li class="let"  v-for="item in letters"  @click="handleLeterClick" @touchstart="handleTouch" @touchmove="handlemove" @touchend="handleEnd"
			:ref="item"
			 >{{item}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'cityLetter',
		props:{
			cities:Object	
		},
		data(){
			return{
				touchStatus:false,
				startY:0,
				timmer:null
			}
		},
		updated(){
			this.startY=this.$refs['A'][0].offsetTop;
		},
		computed:{
			letters(){
				const letters=[]
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		methods:{
			handleLeterClick(e){
				console.log(e.target.innerHTML)
				this.$emit("give",e.target.innerHTML);
			},
			handleTouch(){
				this.touchStatus=true
			},
			handlemove(e){
				if(this.touchStatus){
					if(this.timmer){
						clearTimeout(this.timmer);
					}
					this.timmer=setTimeout(()=>{
						const touchY=e.touches[0].clientY;
					const index=Math.floor((touchY-this.startY)/19);
					console.log(index)
					if(index>=0&&index<this.letters.length){
						this.$emit("give",this.letters[index])
					}
					},16)
				}
			},
			handleEnd(){
				this.touchStatus=false 
			}
		}
		
	} 
</script>
<style lang="stylus" scoped>
.letter{
	display:flex;
	flex-direction:column;
	position:absolute;
	top:0;
	right:0;
	bottom:0;
	overflow:hidden;
	font-size:0.14rem;
	justify-content:center;
	color:#00bcd4;
	font-weight:bold;
}
</style>