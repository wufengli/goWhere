<template>
	<transition name="fadeIn">
		<slot></slot>
	</transition>
</template>
<script>
	export default{
		name:"fade"
	}
</script>
<style lang="stylus" scoped>
	.fadeIn-enter,.fadeIn-leave-to{
		opacity:0
	}
	.fadeIn-leave-active,.fadeIn-enter-active{
		transition:opacity 10s ease;
		}
</style>