<template>
	<!-- 旅行问答 -->
	<el-col :span="24">
		<headers id="topPart"></headers>
		<div style="clear: both;"></div>
		<!-- 搜索问答 -->

		<div class="Ask_search_bg" :class="{askisFixed:istabBar}">
			<transition name="el-fade-in-linear">
				<div class="Ask_search">
					<div class="ask_search_content">
						<router-link to="" class="index_link">
							<img src="../../../assets/images/qiongyou/Ask_logo.png" />
						</router-link>
						<div class="ask_search_text">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
								<el-form-item prop="searchinfo">
									<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="ask_search_Com_input" placeholder="提问前请先搜索,看看你的问题其他穷游or是否已经问过"></el-input>
									<span class="el-icon-search askiconss" @click="searchBtn('ruleForm')"></span>
								</el-form-item>
							</el-form>
						</div>
						<router-link to="" class="ask_search_add-question" rel="nofollow"><span>＋</span>我要提问</router-link>
					</div>
				</div>
			</transition>
		</div>
		<div class="Ask_banner">
			<el-carousel :interval="5000" height="295" arrow="always">
				<el-carousel-item v-for="(item,index) in Askbanner" :key="index">
					<router-link :to="{path:item.Askbannerlink,params:{Askbannerid:item.Askbannerid}}" <img :src="item.Askbannerimg"
					 width="100%" height="100%" />
					<div class="Ask_banner_title" v-if="item.type===1">
						<h3>{{item.Askbannertitle}}</h3>
						<router-link to="">问题合集</router-link>
					</div>
					</router-link>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="ask_questionbg">
			<div class="ask_question">
				<br />
				<br />
				<div class="ask_question_left">
					<el-tabs>
						<el-tab-pane label="精选回答">
							<ul class="ask_jingxuan">
								<li v-for="(item,index) in askjingxuan" :key="index" class="ask_jingxuanli">
									<p class="askp">
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_avatar askfonts">
											<img width="48" height="48" :src="item.askavatarimg">
										</router-link>
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_huida askfonts">{{item.askavatarzuozhe}}</router-link>回答了问题
									</p>
									<div class="ask_index_list_content">
										<router-link :to="{path:'/',params:{askjingxuanid:item.askjingxuanid}}">
											<h4>{{item.askjingxuantitle}}</h4>
											<div class="clearfix">
												<div class="list_img" v-if="item.type===1">
													<img :src="item.askjingxuanimg">
												</div>
												<p class="truncation_5">{{item.askjingxuandsc}}</p>
											</div>
										</router-link>
									</div>
									<div class="index_list_bot">
										<div class="index_list_bot_right">
											<router-link :to="{path:'/',params:{askjingxuanid:item.askjingxuanid}}">
												<span><span class="el-icon-view"></span> {{item.askjingxuanliulan}} 个浏览</span>
												<span class="line">|</span>
												<span><img src="../../../assets/images/qiongyou/dianzan.png" style="vertical-align: top;">
													{{item.askjingxuandianzan}} 个点赞</span>
											</router-link>
										</div>
										<router-link :to="{path:'/',params:{askjingxuantagid:item.askjingxuantagid}}" class="ask_tag_addsb" v-for="(item,index) in item.askjingxuantag"
										 :key="index">{{item.askjingxuantuijian}}</router-link>
									</div>
								</li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="最新问题">
							<ul class="ask_jingxuan">
								<li v-for="(item,index) in askzuxin" :key="index" class="ask_jingxuanli">

									<div class="ask_index_list_content">
										<router-link :to="{path:'/',params:{askzuxinid:item.askzuxinid}}">
											<h4>{{item.askzuxintitle}}</h4>
											<div class="clearfix">

												<p class="truncation_5">{{item.askzuxindsc}}</p>
											</div>
										</router-link>
									</div>
									<p class="askp">
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_avatar askfonts">
											<img width="48" height="48" :src="item.askavatarimg">
										</router-link>
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_huida askfonts">{{item.askavatarzuozhe}}</router-link>提了一个问题
										. {{item.askzuxintime}}前
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" style="float: right; color: #959595;margin-top: 10px;font-size: 12px;">
											<i class="el-icon-edit-outline"></i> {{item.askzuxinhuidashu}}个回答</router-link>
									</p>
								</li>
							</ul>
						</el-tab-pane>
						<el-tab-pane><span slot="label">待回答问题<img src="https://static.qyer.com/static/ask/common/img/sos@2x.gif" class="ask_sos"></span>
							<ul class="ask_jingxuan">
								<li v-for="(item,index) in askdaihuida" :key="index" class="ask_jingxuanli">

									<div class="ask_index_list_content">
										<router-link :to="{path:'/',params:{askdaihuidaid:item.askdaihuidaid}}">
											<h4>{{item.askdaihuidatitle}}</h4>
											<div class="clearfix">

												<p class="truncation_5">{{item.askdaihuidadsc}}</p>
											</div>
										</router-link>
									</div>
									<p class="askp">
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_avatar askfonts">
											<img width="48" height="48" :src="item.askavatarimg">
										</router-link>
										<router-link :to="{path:'',parame:{askavatarid:item.askavatarid}}" class="ask_huida askfonts">{{item.askavatarzuozhe}}</router-link>提了一个问题
										. {{item.askdaihuidatime}}前
										<router-link to="" style="float: right; color: #959595;margin-top: 10px;font-size: 12px;"><i class="el-icon-edit-outline"></i>
											{{item.askdaihuidashu}}个回答</router-link>
									</p>
								</li>
							</ul>
						</el-tab-pane>

					</el-tabs>
				</div><!-- ask_question_left -->
				<div class="ask_question_right">
					<div class="ask_question_hotbiaoqiao">
						<h4 class="hotbiaoqiaotitle">热门标签<router-link to="">全部标签 <i class="el-icon-arrow-right ask_hotarrow"></i></router-link>
						</h4>
					</div>
				</div>
			</div><!-- ask_question -->
		</div>
	</el-col>
</template>

<script>
	export default {
		name: 'Thread_Ask',
		data() {
			return {
				ruleForm: {
					searchinfo: '',

				},
				rules: {
					searchinfo: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ]
				},
				Askbanner: [],
				askjingxuan: [],
				askzuxin: [],
				askdaihuida: [],
				istabBar: false,


			}
		},
		created() {
			this.buildAskbanner();
			this.buildaskjingxuan();
			this.buildaskzuxin();
			this.buildaskdaihuida();
		},
		mounted() {

			window.addEventListener('scroll', this.handleScroll); // Dom树加载完毕

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
		},
		methods: {
			buildAskbanner() {
				this.axios.get("/api/buildAskbanner").then(res => {
					this.Askbanner = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			buildaskzuxin() {
				this.axios.get("/api/buildaskzuxin").then(res => {
					this.askzuxin = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			buildaskdaihuida() {
				this.axios.get("/api/buildaskdaihuida").then(res => {
					this.askdaihuida = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			buildaskjingxuan() {
				this.axios.get("/api/buildaskjingxuan").then(res => {
					this.askjingxuan = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			searchBtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.ruleForm.searchinfo
							},
						}).then(res => {}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//下拉导航栏浮动吸顶
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				// 固定导航栏
				let topBar = document.querySelector("#topPart");
				if (scrollTop > topBar.offsetHeight) {
					this.istabBar = true;
				} else {
					this.istabBar = false;
				}
			},
		},
		components: {
			headers,
		},

	}
</script>

<style lang="scss">
	.ask_questionbg {
		width: 100%;
		height: auto;
		background: #f9f9f9;
		overflow: hidden;

		.ask_question {
			max-width: 1160px;
			margin: 0 auto;
			position: relative;
			overflow: hidden;
			height: auto;
			zoom: 1;

			.ask_question_left {
				width: 800px;
				float: left;

				.ask_sos {
					color: #fc7161;
					width: 28px;
					height: 15px;
					overflow: hidden;
					margin-left: 2px;
					vertical-align: sub;
				}
			}

			.ask_question_left {
				/deep/ .el-tabs__item.is-active {
					color: #41C074;

				}
			}

			.ask_question_left {
				/deep/ .el-tabs__active-bar {
					display: none;
				}
			}

			.ask_question_left {
				/deep/ .el-tabs__nav-wrap::after {
					display: none;

				}
			}

			.ask_jingxuan {
				list-style: none;

				li {
					border: 1px solid #ECECEC;
					background: #fff;
					padding: 30px;
					margin-bottom: 20px;

					.askp {
						font-size: 12px;
					}

					.ask_avatar {
						color: #959595;
						border-radius: 24px;
						overflow: hidden;
						width: 30px;
						height: 30px;
						display: inline-block;
						vertical-align: middle;
						margin-right: 5px;
					}

					.ask_huida {
						color: #323232;
						margin-right: 5px;
					}

					.askfonts {
						font-size: 12px;
					}
				}

				.ask_index_list_content {
					color: #323232;

					a {
						color: #323232;

						h4 {
							padding: 20px 0 15px;
							font-size: 17px;
						}

						.clearfix {
							zoom: 1
						}

						.list_img {
							overflow: hidden;
							float: left;
							width: 160px;
							padding-right: 20px;

							img {
								width: 100%;
								height: 100%
							}
						}

						.truncation_5 {
							height: 97px;
							overflow: hidden;
							text-overflow: ellipsis;

						}

					}

				}

				.index_list_bot {
					padding-top: 30px;

					.index_list_bot_right {
						float: right;
						font-size: 12px;
						color: #959595;
						margin-top: 5px;

						a {
							color: #959595 !important;
							font-size: 12px;
							font-weight: 500;

							span {
								font-size: 12px;

							}

							.line {
								color: #E1E1E1;
								margin: 0 3px;
							}
						}
					}

					.ask_tag_addsb {
						background: #F0F0F0;
						color: #323232;
						border-radius: 15px;
						height: 30px;
						line-height: 30px;
						padding: 0 10px;
						font-size: 12px;
						display: inline-block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.ask_tag_addsb+.ask_tag_addsb {
						margin-left: 15px;
					}
				}

				//ask_index_list_content
			}

			.ask_jingxuanli:hover h4 {
				color: #41C074;
			}

			.ask_jingxuanli:hover {
				box-shadow: 0 0 8px #ccc;
			}

			//ask_jingxuan
			.ask_question_right {
				float: right;
				width: 320px;

				.ask_question_hotbiaoqiao {
					width: 100%;
					margin-top: 55px;

					.hotbiaoqiaotitle {
						font-size: 16px;
						color: #636363;

						a {
							float: right;
							font-size: 12px;
							font-weight: 400;
							color: #323232;

							.ask_hotarrow {
								vertical-align: bottom;
							}
						}
					}
				}
			}

			//ask_question_hotbiaoqiao
		}
	}

	.askisFixed {
		width: 100%;
		position: fixed;
		top: 0px;
		z-index: 1000;
		transition: ease-in 1s;

		.ask_search_content {
			margin-top: 10px !important;
			height: 60px !important;
		}

		.ask_search_add-question {
			bottom: 13px !important;
		}
	}

	.Ask_search_bg {
		width: 100%;
		background: #fff;
		box-shadow: 0 3px 9px 0 rgba(223, 223, 223, .77);


		.Ask_search {
			width: 1160px;
			margin: 0 auto;

			.ask_search_content {
				margin-top: 25px;
				position: relative;
				padding-left: 168px;
				height: 80px;

				.index_link {
					width: 124px;
					position: absolute;
					left: 0;
					top: 0;
					height: 40px;
				}

				.ask_search_text {
					width: 628px;
					border-radius: 0;
					box-shadow: none;
					top: 7px;
					background: #FAFAFA;
					position: relative;

					height: 40px;

					.askiconss {
						display: inline-block;
						position: absolute;
						top: 8px;
						font-size: 23px;
						right: 15px;
						color: #999999;
						font-weight: bold;
					}
				}

				.ask_search_add-question {
					background: #41C074;
					color: #fff;
					border-radius: 0;
					box-shadow: none;
					height: 39px;
					position: absolute;
					right: 180px;
					bottom: 33px;
					line-height: 39px;
					text-align: center;
					font-size: 14px;
					width: 148px;
					font-weight: 700;
					display: inline-block;
				}
			}
		}
	}

	.ask_search_Com_input {
		/deep/ .el-input__inner:focus {
			border: 1px #41C074 solid;
		}
	}

	.askiconss.focus {
		width: 40px;
		height: 40px;
		color: white;
		background: #41C074;

	}

	.ask_search_Com_input {
		/deep/ .is-error.el-input__inner:focus {
			border: 1px #41C074 solid;
		}
	}

	.Ask_banner {
		width: 100%;
		height: 295px;
		overflow: hidden;
		position: relative;

		.Ask_banner_title {
			position: absolute;
			top: 122px;
			left: 50%;
			text-align: center;

			color: #fff;
			font-size: 14px;
			-webkit-transform: translate(-50%, 0);
			-moz-transform: translate(-50%, 0);
			transform: translate(-50%, 0);
			letter-spacing: 5px;
			text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

			h3 {
				font-size: 36px;
				padding-bottom: 10px;
				font-weight: 700;
				letter-spacing: 2px;
				font-family: 'Hiragino Sans GB', "\5FAE\8F6F\96C5\9ED1";
				text-shadow: 0 0 2px rgba(0, 0, 0, .3);
			}

			a {
				text-align: center;
				font-size: 12px;
				display: inline-block;
				margin-top: 10px;
				font-weight: 500;
			}
		}
	}
</style>
