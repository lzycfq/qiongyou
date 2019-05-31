<template>
	<!-- 旅行专栏 -->
	<el-col :span="24">
		<headers id="topPart"></headers>
		<div style="clear: both;"></div>
		<!-- zhuanlanheader 导航栏以及订阅分享等数据 -->
		<div v-for="(item,index) in zhuanlanheader" :key='index'>
			<div class="zhuanlan_header" :class="{isFixed:istabBar}">
				<h1 class="zhuanlan_logo">
					<router-link to="/"><img src="../../../assets/images/qiongyou/zhuanlan_logo.svg" /></router-link>
				</h1>
				<div class="zhuanlan_center">
					<transition name="el-fade-in">
						<div class="zhuanlan_title index_title">
							<div class="origin_2UYtg">
								<div class="head_portrait_3Unoe">
									<router-link to="">
										<img :src="item.zhuanlanheaderavter" alt="item.zhuanlanheadername">
									</router-link>
								</div>
								<div class="origin_desc_2MNh6">
									<p class="from_m5rXB">来自专栏</p>
									<router-link to="">
										<p class="channel_3au6I">{{item.zhuanlanheadername}}</p>
									</router-link>
								</div>
							</div>
							<div class="subscribe">
								<div class="zhuanlan-menu-zhuanlan-subsactive" v-show="dingyue" v-if='item.type===1' @click="dyclick">订阅</div>
								<div style="position: relative;" class="ydingyue" v-else="item.type===2">
									<span v-show="ydingyue" class="zhuanlan-menu-zhuanlan-subs">已订阅</span>
									<div class="zhuanlan-menu-zhuanlan-subsquxiao" @click="qxclick">取消订阅</div>
								</div>
							</div>
						</div>

					</transition>



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
							<el-dropdown-item>
								<router-link to="" style="color: #606266;">我收藏的文章</router-link>
							</el-dropdown-item>
							<el-dropdown-item>
								<router-link to="" style="color: #606266;">我订阅的文章</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div style="clear: both;"></div>
			<!-- 个人信息 -->
			<div class="Zhuanlan_gerenwrap">
				<div class="column_header_PmfVr">
					<img class="column_icon_tprYq" src="http://pic.lvmama.com/uploads/pc/place2/2019-03-08/53488768-809c-425f-93cb-793599211845_300_200.jpg" />
					<p class="column_tit_2-hhC">{{item.zhuanlanheadername}} </p>
					<p class="column_desc_vxB89">{{item.zhuanlanheaderdsc}}</p>
					<div class="subscribes">
						<div class="zhuanlan-menu-zhuanlan-subsactive" v-show="dingyue" v-if='item.type===1' @click="dyclick">订阅</div>
						<div style="position: relative;" class="ydingyue" v-else="item.type===2">
							<span v-show="ydingyue" class="zhuanlan-menu-zhuanlan-subs">已订阅</span>
							<div class="zhuanlan-menu-zhuanlan-subsquxiao" @click="qxclick">取消订阅</div>
						</div>
					</div>
					<p class="column_follow_2Wqbk">{{item.zhuanlanheadershu}}订阅</p>
				</div>
			</div>
		</div><!-- zhuanlanheader 导航栏以及订阅分享等数据数据 -->
		<!-- 展开收起 -->
		<div class="zhuanlan_zhankai">
			<a v-for="(item,index) in Personalbiaoqiao" class="zhankaia" :class="type_index===index?'active':''" @click="typeIndex(index)"
			 :key='index'>#{{item.Personalbiaoqiaoname}}<span class="zhankaisapn">{{item.Personalbiaoqiaoshu}}</span></a>
		</div>
		<!-- 推荐文章 -->
		<div class="Zhuanlan_wenzhang">
			<p align="left" style="font-size: 18px;line-height: 25px;color: rgba(0, 0, 0, .8);font-weight: bold;margin-bottom: 20px">全部</p>
			<ul class="Zhuanlan_wenzhangul">
				<li class="Zhuanlan_wenzhangli" v-for="(item,index) in wenzhang" :key="index">
					<div class="image_3wY22">
						<router-link :to="{path:'/',params:{wenzhangid:item.wenzhangid}}"><img :src="item.wenzhangimg" /></router-link>
					</div>
					<div class="Zhuanlan_wenzhang_right">
						<div style="height:126px;">
							<p class="Zhuanlan_wenzhang_righttit">
								<router-link :to="{path:'/',params:{wenzhangid:item.wenzhangid}}">{{item.wenzhangtitle}}</router-link>
							</p>
							<p class="Zhuanlan_wenzhang_rightdesc">{{item.wenzhandsc}}</p>
						</div>
						<div class="part_bottom_z_8HK">
							<div class="left_2F88G">
								<router-link :to="{path:'/',params:{wenzhangid:item.wenzhangid}}" class="col_JHMNa">{{item.wenzhangzuozhe}}</router-link>
								<a class="date_2Wk3g"> · {{item.wenzhangtime}}前</a>
								<a class="from_2QmrV"> · 来自专栏 </a>
								<router-link :to="{path:'/',params:{wenzhangid:item.wenzhangid}}" class="col_JHMNa">{{item.wenzhangfromname}}</router-link>
							</div>
							<div class="right_bnk-a"><img src="../../../assets/images/qiongyou/dianzan.png" style="vertical-align: top;margin-right: 5px;">{{item.wenzhangdianzan}}</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread_Zhuanlan_PersonalDetail',
		data() {
			return {
				Zhuanlanbannerid: this.$route.params.Zhuanlanbannerid,
				wenzhang: [],
				istabBar: false,
				dingyue: true,
				ydingyue: false,
				zhuanlanheader: [],
				Personalbiaoqiao: [],
				type_index: 0,


			}
		},


		mounted() { //页面初次加载后调用begin()开始动画

			this.buildzhuanlanheader();
			this.buildwenzhang();
			this.buildPersonalbiaoqiao();
			window.addEventListener('scroll', this.handleScroll); // Dom树加载完毕

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
		},

		methods: {
			buildwenzhang() {
				this.axios.get('/api/buildwenzhang'
				// ,{
				// 	params:{
				// 		'search_params':this.search_params
				// 	}
				// }
				).then(res => {
					this.wenzhang = res.data.data
				}).catch(function(orror) {
					console.log(orror)
				})
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
			dyclick() {

				this.axios.get('/api/builddingyuefirst' // ,{
					// 	params:{
					// 		dingyue:1,
					// 	}
					// }
				).then(res => {
					this.zhuanlanheader = res.data.data
					this.dingyue = false;
					this.ydingyue = true;
				})
			},
			qxclick() {

				this.axios.get('/api/builddingyuetwo' // ,{
					// 	params:{
					// 		quxiaodingyu:2,
					// 	}
					// }
				).then(res => {
					this.zhuanlanheader = res.data.data
					this.ydingyue = false;
					this.dingyue = true;
				})
			},
			// 初次未登录，未选定订阅进入界面判断 返回type=1
			buildzhuanlanheader() {
				this.axios.get('/api/buildzhuanlanheader').then(res => {
					this.zhuanlanheader = res.data.data
					console.log(res)
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			buildPersonalbiaoqiao() {
				this.axios.get('/api/buildPersonalbiaoqiao').then(res => {
					this.Personalbiaoqiao = res.data.data
					console.log(res)
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			typeIndex(index) {
				this.type_index = index
				this.search_params['type']=this.Personalbiaoqiao['index']
				this.buildwenzhang()
			}
		},
		components: {
			headers,

		},
	}
</script>

<style lang="scss">
	.zhuanlan_zhankai {
		width: 680px;
		margin: 0 auto;
		height: auto;
		text-align: center;

		.zhankaia {
			padding: 0 15px;
			color: rgba(0, 0, 0, 0.6);
			background: rgba(0, 0, 0, 0.05);
			border-radius: 2px;
			font-size: 13px;
			line-height: 30px;
			height: 30px;
			display: inline-block;
			list-style: none;
			margin: 0 15px 15px 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: calc(100% - 30px);
			vertical-align: top;
			cursor: pointer;

			.zhankaisapn {
				margin-left: 5px;
				color: #999999;
				font-size: 12px;
			}
		}

		.zhankaia.active {
			background: #28B76B;
			color: #fff !important;
			transition: 0.1s;

			.zhankaisapn {
				color: #fff;
			}
		}

		.zhankaia:hover {
			background: #28B76B;
			color: #fff;
			transition: 0.1s;
		}
	}

	.isFixed {
		width: 100%;
		position: fixed;
		top: 0px;
		z-index: 1000;
		transition: ease-in 1s;
	}



	.zhuanlan_header {
		display: table;
		width: 100%;
		min-width: 1160px;
		height: 59px;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
		box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.04);
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

			font-size: 18px;
			width: 680px;
			height: 59px;
			margin: 0 auto;
		}

		.zhuanlan_center {
			.origin_2UYtg {
				float: left;

				.head_portrait_3Unoe {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					margin: 9px 10px 0 0;
					overflow: hidden;
					position: relative;

					img {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}

				.head_portrait_3Unoe,
				.origin_desc_2MNh6 {
					display: inline-block;
				}

				.origin_desc_2MNh6 {
					margin-top: 12px;
					vertical-align: top;
				}

				.from_m5rXB {
					color: rgba(0, 0, 0, .35);
				}

				.from_m5rXB,
				.channel_3au6I {
					font-size: 14px;
					line-height: 14px;
				}

				.channel_3au6I {
					font-weight: bold;
					color: rgba(0, 0, 0, .8);
					margin-top: 6px;
					max-width: 500px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.subscribe {
				float: right;
				width: 78px;
				margin-top: 12px;

				.zhuanlan-menu-zhuanlan-subsactive {
					border: 1px solid #28B76B;
					border-radius: 4px;
					color: #28B76B;
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					cursor: pointer;
					position: relative;
					box-sizing: border-box;
				}

				.zhuanlan-menu-zhuanlan-subs {
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					cursor: pointer;
					position: relative;
					box-sizing: border-box;
					border: none;
					color: rgba(0, 0, 0, .6);
					pointer-events: none;
					border: 1px solid rgba(0, 0, 0, 0.6);

				}

				.zhuanlan-menu-zhuanlan-subsquxiao {
					display: none !important;
					position: absolute;
					top: 0px;
					left: 0px;
					background: #fff;
					border: 1px solid rgba(0, 0, 0, 0.6);
					border-radius: 4px;
					color: rgba(0, 0, 0, 0.6);
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					z-index: 100;
					cursor: pointer;
					box-sizing: border-box
				}

				.ydingyue:hover .zhuanlan-menu-zhuanlan-subsquxiao {
					display: block !important;
				}

			}
		}

		.zhuanlan_right {
			width: 106px;

			.zhuanlan_up {
				position: relative;

				font-size: 30px;
			}
		}
	}

	.Zhuanlan_gerenwrap {
		width: 680px;
		margin: 0 auto;

		.column_header_PmfVr {
			margin: 130px 0 60px;
			text-align: center;

			.column_icon_tprYq {
				width: 100px;
				height: 100px;
				border-radius: 50px;
				overflow: hidden;
				margin: 0 auto 25px;
			}

			.column_tit_2-hhC {
				font-size: 20px;
				line-height: 28px;
				color: rgba(0, 0, 0, .8);
			}

			.column_desc_vxB89 {
				width: 470px;
				margin: 10px auto 20px;
				font-size: 16px;
				line-height: 24px;
				color: rgba(0, 0, 0, .6);
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				word-break: break-all;
			}

			.column_follow_2Wqbk {
				margin-top: 15px;
				line-height: 20px;
				font-size: 14px;
				color: rgba(0, 0, 0, .6);
				font-weight: bold;
			}

			.subscribes {
				margin: 0 auto;
				width: 78px;
				margin-top: 12px;

				.zhuanlan-menu-zhuanlan-subsactive {
					border: 1px solid #28B76B;
					border-radius: 4px;
					color: #28B76B;
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					cursor: pointer;
					position: relative;
					box-sizing: border-box;
				}

				.zhuanlan-menu-zhuanlan-subs {
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					cursor: pointer;
					position: relative;
					box-sizing: border-box;
					border: none;
					color: rgba(0, 0, 0, .6);
					pointer-events: none;
					border: 1px solid rgba(0, 0, 0, 0.6);

				}

				.zhuanlan-menu-zhuanlan-subsquxiao {
					display: none !important;
					position: absolute;
					top: 0px;
					left: 0px;
					background: #fff;
					border: 1px solid rgba(0, 0, 0, 0.6);
					border-radius: 4px;
					color: rgba(0, 0, 0, 0.6);
					display: inline-block;
					width: 78px;
					height: 34px;
					vertical-align: top;
					line-height: 34px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					z-index: 100;
					cursor: pointer;
					box-sizing: border-box
				}

				.ydingyue:hover .zhuanlan-menu-zhuanlan-subsquxiao {
					display: block !important;
				}

			}
		}
	}

	.Zhuanlan_wenzhang {
		width: 680px;
		margin: 0 auto;

		.Zhuanlan_wenzhang_title {
			width: 100%;
			text-align: center;
			font-size: 34px;
			font-weight: 300;
			line-height: 48px;
			color: rgba(0, 0, 0, .8);
			padding-top: 50px;
			margin-bottom: 7px;
		}

		.Zhuanlan_wenzhangul {
			list-style: none;

			.Zhuanlan_wenzhangli {
				width: 680px;
				height: 145px;
				padding-bottom: 40px;
				overflow: hidden;
				position: relative;

				.image_3wY22 {
					width: 218px;
					height: 145px;
					overflow: hidden;
					float: left;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.Zhuanlan_wenzhang_right {
					float: right;
					width: 442px;

					.Zhuanlan_wenzhang_righttit {
						font-size: 20px;
						line-height: 28px;
						color: rgba(0, 0, 0, .8);
						font-weight: bold;
						margin-bottom: 10px;
						/* width: 465px; */
						/* height: 28px; */
						overflow: hidden;
						/* white-space: nowrap; */
						text-overflow: ellipsis;
						-moz-box-orient: vertical;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						display: -webkit-box;
						word-break: break-all;

						a {
							color: rgba(0, 0, 0, .8);
							font-weight: bold;
							font-size: 20px;
						}
					}

					.Zhuanlan_wenzhang_rightdesc {
						font-size: 14px;
						color: rgba(0, 0, 0, .6);
						line-height: 22px;
						/* margin-bottom: 43px; */
						height: 44px;
						/* margin-bottom: 41px; */
						overflow: hidden;
						text-overflow: ellipsis;
						-moz-box-orient: vertical;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						display: -webkit-box;
						word-break: break-all;
					}

					.part_bottom_z_8HK {
						height: 20px;
						line-height: 20px;
						font-size: 14px;
						color: rgba(0, 0, 0, 0.6);

						.left_2F88G {
							float: left;

							.col_JHMNa {
								color: rgba(0, 0, 0, .6);
								display: inline-block;
								max-width: 120px;
								height: 20px;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								vertical-align: bottom;
							}

							.date_2Wk3g {
								color: rgba(0, 0, 0, 0.35);
							}

							.from_2QmrV {
								color: rgba(0, 0, 0, 0.35);
								margin-right: 6px;
							}
						}

						.right_bnk-a {
							float: right;

							.praise_num_OH_Jc {
								display: inline-block;
								box-sizing: border-box;
								height: 20px;
								line-height: 20px;
								padding-left: 20px;
								font-size: 14px;
								color: rgba(0, 0, 0, .35);
							}
						}
					}

				}
			}



		}
	}
</style>
