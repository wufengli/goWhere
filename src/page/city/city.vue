<template>
	<div>
		<home-header></home-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-letter></city-letter>
	</div>
</template>
<script>
	import Header from './components/cityHeader'
	import citySearch from './components/search'
	import cityList from './components/cityList'
	import cityLetter from './components/Letter'
	export default{
		name:'City',
		components:{
			HomeHeader:Header,
			citySearch:citySearch,
			cityList:cityList,
			cityLetter:cityLetter

		}

	} 
</script>