<template>
	<div id="app">
	
		<el-container>
		<router-view />
		</el-container>
	<app-footer></app-footer> 
	</div>
</template>
<script>
	// import Footer from './pages/mobile/components/footer.vue';
	// import Header from './pages/mobile/components/header.vue';


	export default {
		name: 'App',
		data() {
 			return {
			}
		},
// 		
// 		computed: {
// 			fontsize() {
// 				let screenWidth=document.body.clientWidth;
// 				if (screenWidth<= '414') {
// 					document.write('<body style="zoom:1">');
// 				} else if (screenWidth <='540') {
// 						document.write('<body style="zoom:1">');
// 				} else if (screenWidth <='767') {
// 					document.write('<body style="zoom:1.05">');
// 				} else if(screenWidth >= '768') {
// 					document.write('<body style="zoom:1.4">');
// 				}
// 			}
// 		
// 		},


 components:{
	
	 

	    // 'app-footer':Footer
	},
	}
</script>

<style lang="scss" scoped>
	#app {
		//font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-family: YouYuan, 'Tahoma', Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: $text-color-main;
		max-width: 640px;
		margin: 0 auto;
		width: 100%;
	}
	.el-header{
		height: 0 !important;
	}
.el-footer {
	height: 0 !important;
    padding: 0 !important;
  
	}
	
</style>
