<template>
	<el-col :span="24">
		<app-header></app-header>

		<div><img src="http://www.airmate-china.com/uploadfiles/2018/10/201810091829512951.jpg" width="100%" /></div>
		<div style="clear: both;"></div>
		<div v-for="(item,index) in productname">
			<div class="Location">
				<router-link to="/product">产品中心</router-link>
				<img style="vertical-align: bottom;" src="../../assets/images/aimeite/arrow_right.png" />
				<span>{{item.productname}}</span>
			</div>
			<div style="clear: both;"></div>
			<section class="product_content">
				<div class="N_title">
					{{item.productname}}
				</div>
				<div class="Pro_list">
					<ul class="ul">
						<li v-for="(item,index) in prolist.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
							<router-link :to="{ name:'Detail', params: { id: item.id }}">
								<figure><img :src="item.prolistimg"></figure>
								<p class="dot">{{item.prolisttitle}}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div style="clear: both;"></div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 prev-text="上一页" next-text="下一页" background :page-sizes="[5, 8, 10, 12]" :page-size="pagesize" background layout="prev, pager, next"
				 :total="prolist.length">
				</el-pagination>
			</section>
		</div>

	</el-col>
</template>
<script>
	import Header from "../../pages/mobile/components/header.vue"
	export default {
		name: 'Product',
		data() {
			// 			// 此处自定义校验手机号码js逻辑
			// 			var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			// 			var validatePhone = (rule, value, callback) => {
			// 				if (!value) {
			// 					return callback(new Error('请输入手机号码'))
			// 				}
			// 				setTimeout(() => {
			// 					if (!phoneReg.test(value)) {
			// 						callback(new Error('格式有误'))
			// 					} else {
			// 						callback()
			// 					}
			// 				}, 1000)
			// 			};
			const self = this

			return {
				// 				source: this.$route.query.source,
				// 				keyword: this.$route.query.keyword,
				id: this.$route.params.id,
				currentPage: 1, //初始页
				pagesize: 6, //每页的数据
				prolist: [],
				productname: []

			}
		},

		created() {
			this.buildprolist();
			this.buildproductname();
		},


		methods: {
			buildprolist() {
				this.axios.get('/api/buildprolist').then(res => {  //+this.id
					this.prolist = res.data.data 			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildproductname() {
				this.axios.get('/api/buildproductname').then(res => {  //+this.id
// 				 {
// 					params: {
// 						'id': this.id
// 					},
// 				}
					this.productname = res.data.data			
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


		components: {
			'app-header': Header,
		},
		computed: {

		},

	}
</script>
<style lang="scss" scoped>
	.Location {
		margin: 0 2%;
		border-bottom: 1px solid #e5e5e5;
		padding: 3% 0;
		text-align: left;
		height: 30px;
		line-height: 30px;

		a {
			font-size: 18px;
			color: #666666;
		}

		span {
			font-size: 18px;
			color: #666666;

		}
	}

	@media screen and (max-width: 480px) {
		.Location {
			height: 30px;
			line-height: 30px;
			text-align: left;

			a {
				font-size: 18px;
				color: #666666;
			}

			span {
				color: #666666;
				font-size: 18px;
			}

		}
	}

	.product_content {
		padding: 0 0 8%;


		.N_title {
			text-align: center;
			font-size: 34px;
			padding: 10% 0;
			color: #333333;
		}

		@media screen and (max-width: 480px) {
			.N_title {
				font-size: 26px;
			}
		}
	}

	.product_content .Pro_list li {
		float: left;
		width: 49%;
		text-align: center;
		margin-bottom: 3%;
		margin-right: 2%;
	}

	.Pro_list li:nth-child(2n) {
		margin-right: 0;
	}

	.Pro_list li figure {
		width: 100%;
		margin: 0 auto;
		position: relative;
		padding-top: 74.3%;
		overflow: hidden;
	}

	.Pro_list li figure img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		max-height: 100%;
		max-width: 100%;
	}

	.Pro_list li p {
		margin: 3% 2%;
		color: #333333;
	}

	.Pro_list li .dot {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
	}
</style>
