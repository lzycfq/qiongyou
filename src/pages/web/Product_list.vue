<template>
	<el-col :span="24">
	
		<div class="productall">
			<headers></headers>
			<!-- 所有产品中心 -->
			<div style="clear: both;"></div>
			<div v-for="(item,index) in producttitleall" class="producttitleall">
				<p align="center" class="producttitle" v-for="(item,index) in item.producttitle" :key="index">{{item.producttitles}}</p>
				<ul class="producttitlelist">
					<li v-for="(item,index) in item.producttitleli" :key="index" :class="type_index===index?'active':''" @click="typeIndex(index)">{{item.productli}}</li>
				</ul>
			</div>
			<div style="clear: both;"></div>

			<el-row :gutter="36" class="procontent">
				<el-col :span="6" v-for="(item,index) in procontentlist.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
					<div class="procontent_gridcontent">
						<img :src="item.procontentimg" />
						<p align="center" class="procontentdsc">{{item.procontentdsc}}</p>
					</div>

				</el-col>
				<div style="clear: both;"></div>
				<el-pagination class="elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
				 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
				 layout="total, sizes, prev, pager, next, jumper,slot" background :total="procontentlist.length">
				</el-pagination>
			</el-row>
		</div>


	</el-col>
</template>
<style scoped lang="scss">
	.productall .producttitleall {
		width: 85%;
		margin: 0 auto;
		.producttitlelist li {
			float: left;
			width: 100px;
			text-align: center;
			color: #666;
			border-right: 1px solid #d4d4d4;
			display: block;
			line-height: 20px;
			font-size:17px;
			margin-bottom: 30px;
		}
	}

	.productall .producttitle {
		padding: 55px 0;
		text-align: center;
		color: #333;
		font-size: 30px;
		padding-bottom: 30px;
	}

	.productall .producttitlelist li.active {
		color: #005BAC;
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
		margin-top: 20px;
	}

	.productall .procontent .procontent_gridcontent .procontentdsc:hover {
		color: #005BAC;
	}

	.productall .elpaination {
		/deep/.el-pagination {
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
				type_index: 0,
				currentPage: 1, //初始页
				pagesize: 12, //每页的数据
				procontentlist: [],
				producttitleall: []
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
			this.buildprocontentlist();
			this.buildproducttitleall()
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
			buildprocontentlist() {
				this.axios.get('/api/buildprocontentlist').then(res => {

					this.procontentlist = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildproducttitleall() {
				this.axios.get('/api/buildproducttitleall').then(res => {
					console.log(res.data.data)
					this.producttitleall = res.data.data //请求出来的标签数据			
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
			typeIndex(index) {
				this.type_index = index;
				if (index > 0) {
					this.search_params['type'] = this.type_search[index];
				} else {
					this.search_params['type'] = '';
				}
				this.buildprocontentlist();
			},
		},




	}
</script>
