<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="hotel_searchbg">
			<div class="hotel_search">
				<div class="hotel_link">
					<router-link to=''>特价酒店</router-link><span class="sep">|</span>
					<router-link to="">华人旅馆</router-link>
				</div>
				<div class="hotel_title" title="旅途可以多一种可能。">旅途可以多一种可能</div>
				<el-tabs v-model="activeName">
					<el-tab-pane label="酒店" name="first">
						<div class="hotel_searchcontent hotel">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
								<el-form-item prop="searchcity" class="el-form-itemfirst">
									<el-input v-model="ruleForm.searchcity" class="hotel_search_city" placeholder="想去哪里？"></el-input>
								</el-form-item>
								<el-form-item prop="searchhoteldata" class="el-form-itemtwo">
									<el-date-picker v-model="ruleForm.searchhoteldata" type="daterange" range-separator="-" start-placeholder="开始日期"
									 end-placeholder="结束日期">
									</el-date-picker>
								</el-form-item>
								<el-button class="hotel_searchbtn"><i class="el-icon-search"></i> 搜索</el-button>
								<!-- <el-form-item prop="searchinfo">
								<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
								<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
							</el-form-item> -->
							</el-form>
						</div>
					</el-tab-pane>
					<el-tab-pane label="民宿" name="second">酒店</el-tab-pane>
				</el-tabs>
				<div class="quick_search">
					<ul><li><router-link to="">曼谷</router-link></li><li><router-link to="">洛杉矶</router-link></li>
					<li class="serve_tip"><img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/serve_icon.svg">服务承诺</li></ul>
				</div>
			</div>

		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Hotel/header.vue'
	export default {
		name: 'Hotel',
		data() {
			return {
				activeName: 'first',
				ruleForm: {
					searchinfo: '',
					searchcity: ''
				},
				rules: {
					searchinfo: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ],
					searchcity: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ],
				},
			}
		},
		created() {

		},
		methods: {

		},

		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.hotel_searchbg {
		width: 100%;
		height: 550px;
		overflow: hidden;
		background: #000066;

		.hotel_search {
			width: 980px;
			margin: 0 auto;
			height: 550px;
			overflow: hidden;
			position: relative;

			.hotel_link {
				position: absolute;
				right: 0;
				top: 20px;
				height: 20px;
				font-size: 0;

				.sep {
					margin-left: 15px;
					margin-right: 15px;
				}
			}

			.hotel_link .sep,
			.hotel_link a,
			.hotel_link a:hover {
				font-size: 14px;
				color: #fff;
				line-height: 20px;
			}

			.hotel_title {
				text-align: left;
				font-size: 42px;
				line-height: 60px;
				padding-top: 105px;
				padding-bottom: 75px;
				color: #fff;
			}

			.hotel_searchcontent {
				/deep/ .el-form-itemfirst {
					width: 175px;
					float: left;
					margin-right: 3px;

					/deep/ .el-input__inner {
						font-size: 17px;
						height: 70px;
						color: #1467B6;
						padding: 0 40px;
						border-radius: 2px 0 0 2px
					}

				}

				/deep/ .el-form-itemtwo {
					width: 630px;
					height: 70px;
					float: left;

					/deep/ .el-range-editor.el-input__inner {
						width: 630px;
						height: 70px;
					}

					/deep/ .el-date-editor .el-range-separator {
						line-height: 60px;
						font-size: 18px;
					}

					/deep/ .el-range-input {
						font-size: 18px;

					}

					/deep/ .el-input__icon {
						font-size: 18px;
					}
				}

				.hotel_searchbtn {
					background: linear-gradient(to right, #ffb732 0, #ff9e09 100%);
					width: 175px;
					color: #fff;
					cursor: pointer;
					position: absolute;
					float: left;
					
					height: 70px;
					margin-left: -2px;
					z-index: 10;
					border-radius: 0 2px 2px 0;
					border: 1px solid rgba(253, 127, 116, 0.1);
					/deep/ span{
						font-size: 18px;
					}
					/deep/ .el-icon-search{
						font-size: 18px;

					}
				}
			}

.quick_search{
	    
		ul{
			list-style: none;
			li{
				display: inline;
    margin-right: 25px;
    font-size: 14px;
    color: #fff;
	a{
		color: #fff;
	}
			}
			.serve_tip{
				float: right;
    display: flex;
    display: -webkit-flex;
    margin-right: 0;
    -webkit-align-items: center;
    align-items: center;
    cursor: pointer;
	img{
		margin-right: 5px;
	}
			}
		}
	}
		}

		.hotel_search {
			/deep/ .el-tabs__item.is-active {
				color: white;
			}

			/deep/ .el-tabs__item {
				font-size: 20px;
				color: #fff;
				padding-bottom: 5px;
				cursor: pointer;
			}

			/deep/.el-tabs__nav-wrap::after {
				display: none;
			}

			/deep/ .el-tabs__active-bar {
				background: #fff;
			}
		}

	}
</style>
