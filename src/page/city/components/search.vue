 <template>
	<div class="search">
		<input type="text" class="searchInput" name="city" placeholder="输入城市名或拼音">
	</div>
</template>
<script>
	export default{
		name:'citySearch'
		
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
</style>