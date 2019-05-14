<template>
    <div id="app">
        <el-container>
       
            <el-main>
             <router-view/>
            </el-main>
            <el-footer><app-footer></app-footer></el-footer>
        </el-container>
    </div>
</template>
<script>

  
    import Footer from './pages/web/compoents/Footer';
    export default {
        name: 'App',
        data(){
        	return{
        
         

        	}
        },
        components:{
        
       
            'app-footer':Footer,
        },
       
    }

</script>

<style lang="scss" scoped>
    #app {
        //font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-family: YouYuan,'Tahoma',Helvetica,'Hiragino Sans GB','Microsoft Yahei', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $text-color-main;
 
    }
		.el-main{
			width: 100%;
			overflow: hidden;
		 min-height: 780px;
			padding: 0;
		}
	
	.el-footer {
    padding: 0 !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;

	}
		 
</style>
