<template>
	<el-col :span='24'>
		<app-header></app-header>
		<div><img src="http://www.airmate-china.com/uploadfiles/2018/10/20181009182906296.jpg" width="100%" /></div>
		<div class="breadcrumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '' }">服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">售后服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">金卡服务</el-breadcrumb-item>

			</el-breadcrumb>
			
		</div>
		<hr style="width: 96%;margin: 0 auto;border:0.5px solid #E5E4E4;margin-top: 5px;"></hr>
		<div class="jinka">
			<div class="jinka_title">
				[金卡]服务介绍
			</div>
			<div class="jinka_c">
				
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
	.jinka{
		text-align: left;
		width: 99%;
		margin: 0 auto;
		}
	.jinka .jinka_title {
		text-align: center;
		font-size: 34px;
		padding: 10% 0;
		color: #333333;
	}

	@media screen and (max-width: 480px) {
		.jinka .jinka_title {
			font-size: 26px;
		}
	}

</style>
