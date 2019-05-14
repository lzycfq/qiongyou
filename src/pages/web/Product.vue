<template>
	<el-col :span="24">
		<div class="productall">
			<headers></headers>
			<!-- 所有产品中心 -->
			<div style="clear: both;"></div>
			<p align="center" class="producttitle">产品中心</p>
			<el-row :gutter="36" class="procontent">
				<el-col :span="6" v-for="(item,index) in procontent.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
					<router-link :to="{ name:'detail', params: { id: item.productid}}"><div class="procontent_gridcontent">
						<img :src="item.procontentimg" />
						<p align="center" class="procontentdsc">{{item.procontentdsc}}</p>
					</div>
					</router-link>
				</el-col>
				<div style="clear: both;"></div>
	<el-pagination class="elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
					 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
					 layout="total, sizes, prev, pager, next, jumper,slot" background :total="procontent.length">
					</el-pagination>
			</el-row>
		</div>
	</el-col>
</template>
<style scoped lang="scss">
	.productall .producttitle {
		padding: 55px 0;
		text-align: center;
		color: #333;
		font-size: 30px;
		padding-bottom: 30px;
	}

	.productall .procontent {
		width: 86%;
		margin: 0 auto !important;
	}

	.productall .procontent .procontent_gridcontent {
		width: 100%;
		height: 289px;
	}

	.productall .procontent .procontent_gridcontent .procontentdsc {
		width: 100%;
		color: #333333;
		margin-top: 20px;
	}

	.productall .procontent .procontent_gridcontent .procontentdsc:hover {
		color: #005BAC;
	}
	.productall .elpaination{
		/deep/.el-pagination{
			margin-top: 55px;
	text-align: center !important;
	}
	}
</style>
<script>
	const headers = () => import('../web/compoents/header');
	export default {
		name: 'product',
		data() {
			return {
				// preview:this.$route.query.preview,
				// id: this.$route.params.id,
				currentPage: 1, //初始页
				pagesize:12, //每页的数据
				procontent: [],
			}
		},

		components: {
			headers

		},
		computed: {
			tagChoose() {
				return function(key) {
					if (key === 0) {
						return 'warning';
					} else if (key === 1) {
						return 'success';
					} else {
						return 'danger';
					}
				}
			},


		},
		//		定义请求函数
		created() {
			this.buildprocontent()
		},
		// 		mounted() {
		// 			this.$nextTick(function() {
		// 				window.addEventListener('scroll', this.handleScroll); // Dom树加载完毕
		// 			});
		// 
		// 		},
		// 		destroyed() {
		// 			window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
		// 		},

		methods: {
			buildprocontent() {
				this.axios.get('/api/buildprocontent').then(res => {
					this.procontent = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function(size) {
					this.pagesize = size;
					console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
					this.currentPage = currentPage;
					console.log(this.currentPage) //点击第几页
			},

		},




	}
</script>
