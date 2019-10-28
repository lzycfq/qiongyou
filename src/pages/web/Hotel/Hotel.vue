<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="hotel_searchbg" v-bind:class="{ active: isActive }">
			<div class="hotel_search">
				<div class="hotel_link">
					<router-link to=''>特价酒店</router-link><span class="sep">|</span>
					<router-link to="">华人旅馆</router-link>
				</div>
				<div class="hotel_title" title="旅途可以多一种可能。">旅途可以多一种可能</div>
				<el-tabs v-model="activetabNamef" @tab-click="Hotelclick">
					<el-tab-pane label="酒店" name="first">
						<div class="hotel_searchcontent hotel">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
								<el-form-item prop="searchcity" class="el-form-itemfirst">
									<el-input v-model="ruleForm.searchcity" class="hotel_search_city" placeholder="想去哪里？"></el-input>
								</el-form-item>
								<el-form-item prop="searchhoteldata" class="el-form-itemtwo">
									<el-date-picker v-model="ruleForm.searchhoteldata" type="daterange" range-separator="-" start-placeholder="入住日期"
									 end-placeholder="结束日期">
									</el-date-picker>
								</el-form-item>
								<el-button class="hotel_searchbtn" @click="searchBtn('ruleForm')"><i class="el-icon-search"></i> 搜索酒店</el-button>

							</el-form>
							<div style="clear: both;"></div>
							<div class="quick_search">
								<ul>
									<li>
										<router-link to="">曼谷</router-link>
									</li>
									<li>
										<router-link to="">洛杉矶</router-link>
									</li>
									<li class="serve_tip"><img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/serve_icon.svg">服务承诺</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="民宿" name="second">
						<div class="hotel_searchcontent hotel">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
								<el-form-item prop="searchcity" class="el-form-itemfirst">
									<el-input v-model="ruleForm.searchcity" class="hotel_search_city" placeholder="想去哪里？"></el-input>
								</el-form-item>
								<el-form-item prop="searchhoteldata" class="el-form-itemtwo">
									<el-date-picker v-model="ruleForm.searchhoteldata" type="daterange" range-separator="-" start-placeholder="入住日期"
									 end-placeholder="结束日期">
									</el-date-picker>
								</el-form-item>
								<el-button class="hotel_searchbtns" @click="searchBtn('ruleForm')"><i class="el-icon-search"></i> 搜索名宿</el-button>
								<!-- <el-form-item prop="searchinfo">
								<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
								<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
							</el-form-item> -->
							</el-form>
							<div style="clear: both;"></div>
							<div class="quick_search">
								<ul>
									<li>
										<router-link to="">曼谷</router-link>
									</li>
									<li>
										<router-link to="">洛杉矶</router-link>
									</li>
								</ul>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<div class="Ho_searchjilu">
			<span align="left" class="hot_jinxuan">精选</span>
			<br />
			<el-tabs @tab-click="handleClick">
				<el-tab-pane v-for="(item, index) in Hosearchjilu" :label="item.title" key='index'>
					<div class="hotel_summary">
						<div class="hotel_summary_average summary_average">
							<div class="title">
								<img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/area.svg">&nbsp;<span>{{item.title}}平均数据</span></div>
							<div class="flex_cen_bet flex">
								<div class="item">
									<div class="num"><span>{{item.hotcityprice}}</span><small>元</small></div><small>价格</small>
								</div>
								<div class="item">
									<div class="num"><span>{{item.hotcitydengji}}</span></div><small>星级</small>
								</div>
								<div class="item">
									<div class="num"><span>{{item.hotcityorder}}</span></div><small>评分</small>
								</div>
							</div>
						</div>
						<div class="qyer_summary_average summary_average">
							<div class="title "><img src="//common3.qyerstatic.com/hotel/desktop/hotel_home/img/qyer.svg">
								穷游用户主流数据
							</div>
							<div class="flex_cen_bet flex">
								<div class="item">
									<div class="num"><span>{{item.hotcityQprice}}</span><small>元</small></div><small>价格</small>
								</div>
								<div class="item">
									<div class="num"><span>{{item.hotcityQdengji}}</span></div><small>星级</small>
								</div>
								<div class="item">
									<div class="num"><span>{{item.hotcityQorder}}</span></div><small>评分</small>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div style="clear: both;"></div>
		<div class="ho_list">
			<p>数据结论：在曼谷酒店选择上，穷游用户更偏爱星级高、评分高的住宿体验。</p>
			<div class="ho_list_content">
				<div class="ho_list_contentlist">
					<router-link to="" class="hotel_item">
						<img src="http://pic.qyer.com/partner/567960/18741569/1413392864" class="hote_item_img" />
						<p class="hotel_item_name">今日旅馆</p>
						<p class="hotel_item_rate">
							<el-rate v-model="hotelitemvalue" disabled show-score disabled-void-icon-class="disabledicon" text-color="#323232"
							 score-template="{value}"></el-rate>
						</p>
						<div class="hotel_item_price"><span class="left_price">89</span><span class="right_price">元起</span></div>
					</router-link>
				</div>

			</div>
			<div style="clear: both;">
			</div>
			<router-link to="" class="morehotel">查看更多曼谷酒店&nbsp;<i class="el-icon-arrow-right "></i></router-link>
		</div>
		<div class="ho_dsc">
			<div class="ho_dsccontent">
				<p>跟着电影去旅行</p>
				<p>电影镜头下的异国他乡，永远对旅人有着非凡的吸引力。多瑙河畔的忧郁星期天，罗马街头的阳光与微风，在午夜巴黎寻找黄金时代，到喧闹旺角体会平凡人的英雄梦想，或是干脆放空所有，迷失于东京的霓虹闪烁……</p>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="ho_decimg">

			<div class="ho_deccontent">
				<div class="ho_decimgitem">
					<router-link to="">
						<img src="http://pic.qyer.com/plan/day/note/5329956/1504599411166/9439" class="ho_decimgitem_img">
						<div class="ho_decimgitemcard">
							<div class="ho_decimgitemcardc">
								<p>布达佩斯之恋</p>
								<p>Budapest</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>

		</div>
		<div class="ho_doushi">
			<p>繁华都市</p>
			<div class="ho_doushicontent">
				<div class="ho_doushicontent_list">
					<div class="ho_doushicontent_lists">
						<img src="http://pic.qyer.com/plan/day/note/5329956/1504599561376/6272" class="ho_doushicontent_list_img" />
						<router-link to="" class="ho_doushicontent_lists_hover">
							<p>立即查看</p>
						</router-link>
					</div>
					<div class="hotel_introduces">
						<div><span class="hotel_name">三井花园饭店京都新町别邸</span>
							<div class="hotel_price" style="float: right">
								<span class="left_price">

									<span class="update_price">￥1296</span></span>
								<span class="right_price">元起</span>
							</div>
						</div>
						<p>独立房间</p>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div class="gn_hotel">
			<p>国外热门酒店预订</p>
			<ul>
				<li>
					<router-link to="">日本</router-link>
				</li>
			</ul>
		</div>
		<br />
		<br />
		<br />
		<div class="gn_hotel">
			<p>热门城市酒店预订</p>
			<ul>
				<li>
					<router-link to="">维也纳</router-link>
				</li>
			</ul>
		</div>
	</el-col>
</template>
<script>
	import headers from '../../../pages/web/Hotel/header.vue'
	export default {
		name: 'Hotel',
		data() {
			return {
				activetabNamef: "first",

				hotelitemvalue: 4,
				ruleForm: {
					searchinfo: '',

					searchMingsu: '',
					searchMingsudata: ''
				},
				rules: {
					searchinfo: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ],

					searchMingsu: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ],
					searchMingsudata: [{
						required: true,
						message: '请输入住日期',
						trigger: 'blur'
					}, ],

				},
				toutiaoID: 'ID2563696585',

				isActive: true,
				Hosearchjilu: [{
					title: '曼谷',

					hotcityprice: '1536',
					hotcitydengji: '2.8',
					hotcityorder: '7.8',
					hotcityQprice: '1116',
					hotcityQdengji: '2.9',
					hotcityQorder: '8'


				}, {
					title: '洛杉矶',
					hotcityprice: '936',
					hotcitydengji: '2.8',
					hotcityorder: '6.8',
					hotcityQprice: '1006',
					hotcityQdengji: '3.3',
					hotcityQorder: '7'


				}]
			}
		},
		created() {},

		methods: {
			// // 拼装头条接口
			// //测试条用接口是否返回数据？自行匹配相关数据源
			// toutiaomessage(){
			// 	this.axios("/api/toutiaoID+this.toutiaoID"
			// 	,params:{
			// 		
			// 	}
			// 	).then(res=>{
			// 		
			// 	})
			// },
			Hotelclick() {
				this.isActive = !this.isActive
			},
			//搜索提交
			searchBtn(formName) {
				alert(this.ruleForm.searchcity)
				alert(this.ruleForm.searchhoteldata)

				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchcity': this.ruleForm.searchcity,
								'searchhoteldata': this.ruleForm.searchhoteldata,

							},
						}).then(res => {

						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},

		},

		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.ho_doushi {
		width: 980px;
		margin: 0 auto;
		height: 450px;

		p {
			padding: 0;
			color: #323232;
			cursor: default;
			font-size: 18px;
			font-weight: 400;
			margin: 80px 0 20px;
		}

		.ho_doushicontent {
			display: flex;

			.ho_doushicontent_list {
				width: 478px;

				.hotel_introduces {
					margin-top: 15px;

					p {
						margin-top: 10px;
						color: #323232;
						font-size: 12px;
					}

					.hotel_name {
						font-size: 16px;
						font-weight: 400;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						color: #323232;
					}

					.update_price {
						font-size: 18px;
						font-weight: 800;
						color: #323232;
					}

					.right_price {
						font-size: 12px;
						margin-left: 5px;
					}
				}

				.ho_doushicontent_lists {
					width: 478px;
					height: 310px;
					position: relative;
					cursor: pointer;


				}

				.ho_doushicontent_lists:hover .ho_doushicontent_lists_hover {
					opacity: 1;
					cursor: pointer;
				}

				.ho_doushicontent_lists P {
					line-height: 160px;
					text-align: center;
					color: white;
					font-size: 18px;
					cursor: pointer;
				}

				.ho_doushicontent_list_img {
					width: 100%;
					height: 100%;
				}

				.ho_doushicontent_lists_hover {
					background: linear-gradient(124deg, rgba(72, 198, 238, .85), rgba(111, 134, 214, .85));
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 1;

					top: 0;
					transition: all .4s;
					opacity: 0;
				}
			}
		}
	}

	.gn_hotel {
		width: 980px;
		margin: 0 auto;
		height: auto;

		p:first-child {
			font-size: 18px;
			height: 55px;
			padding: 0;
			border-bottom: 1px solid #e5e5e5;
			font-weight: 400;
			cursor: default;
			color: #323232;


		}

		ul {
			padding: 46px 0;
			list-style: none;

			li {
				line-height: 44px;
				font-size: 14px;
				width: 11.1%;
				height: 44px;
				overflow: hidden;

				a {
					color: #323232;
				}
			}
		}
	}

	.ho_decimg {


		width: 980px;
		margin: 50px auto;
		height: auto;

		.ho_deccontent {

			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;

			.ho_decimgitem {
				width: 190px;
				position: relative;
				cursor: pointer;

				height: 300px;
				color: #fff;
				background: linear-gradient(180deg, transparent 0, transparent 66%, #000 94%, #000);

				.ho_decimgitem_img {
					width: 190px;
					height: 300px;
				}

				.ho_decimgitemcard {
					width: 190px;
					position: relative;
					cursor: pointer;
					margin-top: -300px;
					height: 300px;
					color: #fff;
					background: linear-gradient(180deg, transparent 0, transparent 66%, #000 94%, #000);

					.ho_decimgitemcardc {
						position: absolute;
						bottom: 20px;
						left: 15px;

						p {
							line-height: 23px;
						}

						p:first-child {
							font-size: 18px;

						}
					}
				}
			}
		}
	}

	.ho_dsc {
		width: 972px;
		height: auto;
		margin: 0 auto;
		margin-top: 80px;

		border-left: 7px solid rgba(72, 197, 239, .5);
		box-shadow: -1px 0 0 #a3e2f7, 1px 0 0 #a3e2f7, 0 -1px 0 #a3e2f7, 0 1px 0 #a3e2f7;

		.ho_dsccontent {
			padding: 40px;
		}
	}

	.ho_dsc p:first-child {
		font-size: 20px;
		font-weight: 500;
		line-height: 14px;
	}

	.ho_dsc p:last-child {
		font-size: 16px;
		opacity: 0.6;
		line-height: 29px;
		margin-top: 25px;
	}

	.ho_list {
		margin-top: 40px;
		width: 980px;
		height: auto;
		margin: 0 auto;
		text-align: center;

		p {
			color: #525252;
			text-align: left;
		}

		.morehotel {
			display: inline-block;
			margin: 0 auto;
			color: #000;
			padding: 16px 20px;
			border: 1px solid #e5e5e5;
			font-size: 18px;
			font-weight: 400;
			cursor: pointer;
		}

		.ho_list_content {
			display: grid;
			grid-template-columns: repeat(4, 234px); // 网格列
			grid-column-gap: 15px; //个字简写
			margin-top: 40px;

			.hotel_item {
				width: 234px;
				height: 285px;
				display: block;

				.hotel_item_name {
					font-size: 16px;
					font-weight: 400;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					margin-top: 12px;
					margin-bottom: 5px;
				}

				.hote_item_img {
					width: 234px;
					height: 156px;
				}

				.hotel_item_price {
					text-align: left;
				}

				.hotel_item_price .left_price {
					font-size: 18px;
					font-weight: 800;
					color: #323232;
				}

				.hotel_item_price .right_price {
					font-size: 12px;
					margin-left: 5px;
					color: #666666;
				}

			}

			.hotel_item>>>.disabledicon {
				display: none;
			}
		}
	}

	.Ho_searchjilu {
		margin: 0 auto;
		width: 980px;
		height: 320px;


		.hot_jinxuan {
			font-size: 18px;
			line-height: 14px;
			padding: 0;
			font-weight: 400;
			cursor: default;
			color: #323232;
			display: block;
			margin-top: 50px;
		}

		.hotel_summary {

			margin-top: 30px;
		}


		.hotel_summary .summary_average {
			width: 482px;
			height: 163px;
			box-sizing: border-box;
			float: left;
			border: 1px solid #eaeaea;
		}

		.hotel_summary .qyer_summary_average {
			float: right;
		}

		.hotel_summary .summary_average .title {
			height: 40px;
			line-height: 40px;
			text-align: center;
		}

		.hotel_summary .hotel_summary_average .title {
			color: #4b96de;
			font-weight: 700;
			background-image: linear-gradient(-90deg, rgba(208, 243, 252, .4), rgba(164, 226, 247, .4) 97%, rgba(163, 226, 247, .4) 0);
		}

		.hotel_summary .qyer_summary_average .title {
			color: #41c074;
			font-weight: 700;
			background-image: linear-gradient(-90deg, rgba(240, 248, 227, .3), rgba(65, 192, 116, .072));
		}

		.hotel_summary .qyer_summary_average .title {
			height: 40px;
			line-height: 40px;
			text-align: center;
		}

		.hotel_summary .summary_average .title img {

			position: relative;
			top: 2px;
		}

		.hotel_summary .summary_average .flex {
			display: flex;

		}

		.hotel_summary .summary_average .item {
			-webkit-flex: 1;
			flex: 1;

			text-align: center;
		}

		.hotel_summary .summary_average .item .num {
			font-size: 34px;
			line-height: 48px;
			font-weight: 100;
			margin: 27px 0 0;

			span {
				font-size: 34px;
				color: #323232;
			}
		}
	}

	.hotel_searchbg.active {
		background-image: linear-gradient(-90deg, transparent, hsla(0, 0%, 100%, .4));
		-webkit-transition: background .4s ease;
		transition: background .4s ease;
		background-color: #50b8ea;
	}

	.hotel_searchbg {
		width: 100%;
		height: 550px;
		overflow: hidden;
		background-image: linear-gradient(-90deg, transparent, hsla(0, 0%, 100%, .4));
		-webkit-transition: background .4s ease;
		transition: background .4s ease;
		background-color: #ffa7b6;

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

					/deep/ span {
						font-size: 18px;
					}

					/deep/ .el-icon-search {
						font-size: 18px;

					}
				}

				.hotel_searchbtns {
					background: linear-gradient(to right, #fe965f 0, #fd7c77 100%);
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

					/deep/ span {
						font-size: 18px;
					}

					/deep/ .el-icon-search {
						font-size: 18px;

					}
				}
			}

			.quick_search {

				ul {
					list-style: none;

					li {
						display: inline;
						margin-right: 25px;
						font-size: 14px;
						color: #fff;

						a {
							color: #fff;
						}
					}

					.serve_tip {
						float: right;
						display: flex;
						display: -webkit-flex;
						margin-right: 0;
						-webkit-align-items: center;
						align-items: center;
						cursor: pointer;

						img {
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
