<template>

		<div class="navfirst" id="topPart">
			<div class="navcontent">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">
						<router-link to="/" >官网首页</router-link>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/">会员专区</router-link>
					</el-menu-item>
					<el-menu-item index="3">
						<router-link to="/list">推荐楼盘</router-link>
					</el-menu-item>
					<el-menu-item index="4">
						<router-link to="/preferential-list">优选房源</router-link>
					</el-menu-item>
					<el-menu-item index="5">
						<router-link to="/about">关于我们</router-link>
					</el-menu-item>
				</el-menu>

			</div>
		</div>
</template>
<style scoped>
	.el-header {
		height: 0px !important;
		margin-bottom: 0 !important;
	}
	
	.navfirst {
		background: #302f35;
		height: 45px;
	}
	
	.navfirst .navcontent {
		width: 1180px;
		height: 45px;
		line-height: 45px;
		font-size: 17px;
		margin: 0 auto;
	}
	.el-menu--horizontal>.el-menu-item.is-active {
    cursor: hand;
    color:white !important;
		background:none !important;
}
.el-menu--horizontal>.el-menu-item {
		float: left;
		height: 45px;
		line-height: 45px;
		margin: 0;
		font-size: 17px;
		border-bottom: none !important;
		color: white;
	}
	
	.el-menu-demo {
		float: left !important;
		background: none;
		color: white !important;
	}
	
	
</style>
<script>
	export default {
		name: 'app',
		data() {
			return {
        activeIndex: '1',
			}
		},
		//控制头尾部分是否显示
		created: function() {
		
			this.$emit('public_footer', false);

		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},

		}
	}
</script>