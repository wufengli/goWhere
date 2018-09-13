<template>
  <div id="app">
  	<keep-alive exclude="detail">
   		 <router-view/><!-- 展示当前路由地址对应的内容 -->
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
  