<template>
	<el-col :span='24'>
		<app-header></app-header>

		<div><img src="http://www.airmate-china.com/uploadfiles/2018/10/20181009182906296.jpg" width="100%" /></div>
		<div class="breadcrumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '' }">服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">售后服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">服务理念</el-breadcrumb-item>

			</el-breadcrumb>
			
		</div>
		<hr style="width: 96%;margin: 0 auto;border:0.5px solid #E5E4E4;margin-top: 5px;"></hr>
		<div class="linian_chengnuo">
			<div class="linian_title">服务理念</div>
			<div class="linian_Content">
				<!--栏目内容-->
				<dl class="linian_info_201711201512">
					<dd>
						<img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/service_iocn1.png">爱心服务<br>兑现承诺
					</dd>
					<dd style="margin-right:0px;">
						<img src="http://www.airmate-china.com/amtdqj201708217221/uploadfiles/image/service_iocn2.png">迅速反应<br>立即行动
					</dd>
				</dl>
			</div>	
		</div>
		
	</el-col>
</template>

<script>
	import Header from '../../../pages/mobile/components/header.vue';

	export default {
		name: 'linian',
		data() {
			return {
				}
				},
				 components:{
					
					    'app-header':Header,
				
					  
					},
				}
</script>

<style>
	.linian_chengnuo{
		  width: 96%;
		  margin: 0 auto;
		  
		 
		 
	}
	.linian_info_201711201512 dd {
	    width: 49%;
	    float: left;
	    margin-right: 2%;
	    font-size: 24px;
	    line-height: 34px;
	    text-align: center;
	    background: #f9f9f9;
	    padding: 10% 0;
		}
	@media screen and (max-width: 480px){
.linian_info_201711201512 dd .txt, .linian_info_201711201512 dd .txt h2, .linian_info_201711201512 dd .txt, .linian_info_201711201512 dd .txt h2, .linian_info_201711201512 dd {
    font-size: 18px;
}
}
.linian_info_201711201512 dd img {
    display: block;
    margin: 0 auto 10%;
}
.linian_info_201711201512 img {
    height: auto !important;
}


	.breadcrumbs {
		width: 96%;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.el-breadcrumb__inner a,
	.el-breadcrumb__inner.is-link {
		font-weight: 400 !important;
		text-decoration: none !important;
		-webkit-transition: color .2s cubic-bezier(.645, .045, .355, 1);
		transition: color .2s cubic-bezier(.645, .045, .355, 1);
		color: #303133 !important;
		font-size: 16px !important;

	}

	.linian_chengnuo .linian_title {
		text-align: center;
		font-size: 34px;
		padding: 10% 0;
		color: #333333;
	}

	@media screen and (max-width: 480px) {
		.linian_chengnuo .linian_title {
			font-size: 26px;
		}
	}
</style>
