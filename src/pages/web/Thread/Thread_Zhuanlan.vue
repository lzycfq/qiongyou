<template>
	<!-- 旅行专栏 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="zhuanlan_header">
			<h1 class="zhuanlan_logo">
				<router-link to="/"><img src="../../../assets/images/qiongyou/zhuanlan_logo.svg" /></router-link>
			</h1>
			<div class="zhuanlan_center">
				<div class="zhuanlan_title index_title">
					<span class="rmd_tab cur_tab">推荐</span>
					<span class="sub_tab">我的订阅</span></div><!-- //zhuanlan_center -->
			</div>
			<div class="zhuanlan_right">
				<el-dropdown placement="bottom">
					<span style="margin-left: -10px;" class="el-dropdown-link">
						<i class="el-icon-upload2 zhuanlan_up"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><img src="../../../assets/images/qiongyou/weibo_2.png" style="vertical-align: middle;margin-right: 5px;"
							 width="20px" height="20px"> 分享到微博</el-dropdown-item>
						<el-dropdown-item>
							<img src="../../../assets/images/qiongyou/weixin_3.png" style="vertical-align: middle;margin-right: 5px;" width="20px"
							 height="20px"> 微信扫一扫
							<br />
							<img src="../../../assets/images/erweima.png" width="100px" height="100px" />
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown placement="bottom">
					<span style="margin-left: 11px;" class="el-dropdown-link">
						<i class="el-icon-more zhuanlan_up"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><router-link to="" style="color: #606266;">我收藏的文章</router-link></el-dropdown-item>
						<el-dropdown-item><router-link to="" style="color: #606266;">我订阅的文章</router-link></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread_Zhuanlan',
		data() {

			return {}
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.zhuanlan_header {
		display: table;
		width: 100%;
		min-width: 1160px;
		height: 59px;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
		box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.04);
		position: absolute;
		z-index: 9;

		.zhuanlan_logo {
			width: 134px;
			text-align: right;
			font-size: 0;
			display: table-cell;
			vertical-align: middle;
		}

		.zhuanlan_logo,
		.zhuanlan_center,
		.zhuanlan_right {
			display: table-cell;
			vertical-align: middle;
		}

		.zhuanlan_title {
			line-height: 59px;
			font-size: 18px;
			width: 680px;
			height: 59px;
			margin: 0 auto;
		}

		.cur_tab {
			font-weight: bold;
			color: #28B76B;
			font-size: 18px;
			padding-bottom: 17px;
			border-bottom: 3px #28B76B solid;
		}

		.sub_tab {
			color: rgba(0, 0, 0, 0.4);
			cursor: pointer;
			font-size: 18px;
			margin-left: 50px;
		}

		.zhuanlan_right {
			width: 106px;

			.zhuanlan_up {
				position: relative;

				font-size: 30px;
			}
		}
	}
</style>
