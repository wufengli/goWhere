<template>
	<div class="letter">
		<ul class="letterWrap">
			<li class="let">A</li>
			<li class="let">A</li>
			<li class="let">A</li>
			<li class="let">A</li>
			<li class="let">A</li>
			<li class="let">A</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'cityLetter'
		
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
	background:red;
	justify-content:center;
}
</style>