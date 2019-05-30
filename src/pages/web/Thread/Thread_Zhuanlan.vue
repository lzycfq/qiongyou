<template>
	<!-- 旅行专栏 -->
	<el-col :span="24">
		<headers id="topPart"></headers>
		<div style="clear: both;"></div>
		<div class="zhuanlan_header" :class="{isFixed:istabBar}">
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

		<div class="zhuanlan_greeting">
			<p class="typer-dynamic">
				<span class="cut">
					<span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
					<i class="cursor_2ktlD"></i>
				</span>

			</p>
			<br />
			<br />
			<br />
			<br />
			<p class="link_Kxl3f">
				<router-link to="">如何成为专栏作者<i class="el-icon-arrow-right" style="vertical-align: middle;"></i></router-link>
			</p>
		</div>
		<zhuanlanbanner></zhuanlanbanner>
		<!-- 推荐文章 -->
		<div class="Zhuanlan_wenzhang">
			<p class="Zhuanlan_wenzhang_title">推荐文章</p>
			<ul class="Zhuanlan_wenzhangul">
				<li class="Zhuanlan_wenzhangli" v-for="(item,index) in wenzhang" :key="index">
					<div class="image_3wY22">
						<router-link :to="{path:'/Thread_ZhuanlanDetail',params:{wenzhangid:item.wenzhangid}}"><img :src="item.wenzhangimg" /></router-link>
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
								<router-link :to="{path:'/Thread_ZhuanlanDetail',params:{wenzhangid:item.wenzhangid}}" class="col_JHMNa">{{item.wenzhangzuozhe}}</router-link>
								<a class="date_2Wk3g"> · {{item.wenzhangtime}}前</a>
								<a class="from_2QmrV"> · 来自专栏 </a>
								<router-link :to="{path:'/Thread_ZhuanlanDetail',params:{wenzhangid:item.wenzhangid}}" class="col_JHMNa">{{item.wenzhangfromname}}</router-link>
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
	import zhuanlanbanner from '../../../pages/web/Thread/compoents/Thread_ZhuanlanBanner.vue'

	export default {
		name: 'Thread_Zhuanlan',
		data() {

			return {
				words: [], //字母数组push，pop的载体
				str: "欢迎 开启穷游专栏之旅", //str初始化
				letters: [], //str分解后的字母数组
				order: 1, //表示当前是第几句话
				wenzhang: [],
				istabBar: false,
				timer: null // 定时器名称          

			}
		},
		watch: { //监听order值的变化，改变str的内容
			order(old, newV) {
				if (this.order % 4 == 1) {
					this.str = "欢迎 开启穷游专栏之旅"
				} else if (this.order % 4 == 2) {
					this.str = "探索 更独特的世界"
				} else {
					this.str = '分享 用创造定义旅行'
				}
			}
		},

		
		
		mounted() { //页面初次加载后调用begin()开始动画
			this.buildbegin();
			this.buildwenzhang();
			window.addEventListener('scroll', this.handleScroll); // Dom树加载完毕

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
		},
		
		methods: {

			//开始输入的效果动画
			buildbegin() {
				this.letters = this.str.split("")
				for (var i = 0; i < this.letters.length; i++) {
					setTimeout(this.write(i), i * 100);
				}
			},
			buildwenzhang() {
				this.axios.get('/api/buildwenzhang').then(res => {
					this.wenzhang = res.data.data
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			//开始删除的效果动画
			back() {
				let L = this.letters.length;
				for (var i = 0; i < L; i++) {
					setTimeout(this.wipe(i), i * 50);
				}
			},
			//输入字母
			write(i) {
				return () => {
					let L = this.letters.length;
					this.words.push(this.letters[i]);
					let that = this;
					/*如果输入完毕，在2s后开始删除*/
					if (i == L - 1) {
						setTimeout(function() {
							that.back();
						}, 3000);

					}
				}
			},
			//擦掉(删除)字母
			wipe(i) {
				return () => {
					this.words.pop(this.letters[i]);
					/*如果删除完毕，在300ms后开始输入*/
					if (this.words.length == 0) {
						this.order++;
						let that = this;
						setTimeout(function() {
							that.buildbegin();
						}, 700);

					}
				}
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
			zhuanlanbanner
		},
	}
</script>

<style lang="scss">
	
	.isFixed {
		width: 100%;
		position: fixed ;
		top:0px;
		z-index: 1000;
		transition: ease-in 1s;
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

	.zhuanlan_greeting {
		width: 980px;
		margin: 0 auto;
		margin-top: 150px;
		margin-bottom: 60px;
		position: relative;
		height: 170px;

		.link_Kxl3f {
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: -55px;
			text-align: center;

			a {
				color: #222222;
			}
		}

		.typer {
			margin-top: 2%;
			box-sizing: border-box;
		}

		.typer-dynamic {
			position: relative;
			text-align: center;
		}

		.cut {
			color: #222222;


			.word {
				text-align: center;
				font-size: 60px;
				color: rgba(0, 0, 0, 1);
				font-weight: 300;

			}

			.cursor_2ktlD {
				display: inline-block;
				width: 2px;
				height: 55px;
				background: #28B76B;
				position: relative;
				top: 9px;
				animation: bling_1889Z 1s infinite;
			}
		}
	}
</style>
