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
		<div class="Zhuanlan_banner">
			<p class="title_ptsmV">推荐专栏</p>
			<el-carousel :interval="5000" arrow="always" indicator-position="outside" height="630px">
				<el-carousel-item v-for="(val,index) in Zhuanlanbanner" :key='index'>
					<ul class="partUL">
						<li v-for="(val,index) in val.Zhuanlanbannercontet" :key='index' :style="checkbackground(index)">
							<router-link :to="{path:'/',params:{Zhuanlanbannerid:val.Zhuanlanbannerid}}">
								<img class="zl_img" :src="val.Zhuanlanbannerimg" lazy="loaded">
								<p class="zl_title">{{val.Zhuanlanbannertitle}}</p>
								<p class="zl_desc">{{val.Zhuanlanbannerdesc}}</p>
								<p class="num_3ym5g">{{val.Zhuanlanbannerdingyue}}&nbsp;订阅<i></i>{{val.Zhuanlanbannerwenzhang}}篇文章
								</p>
							</router-link>
						</li>
					</ul>
				</el-carousel-item>
			</el-carousel>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread_Zhuanlan',
		data() {

			return {
				words: [], //字母数组push，pop的载体
				str: "欢迎 开启穷游专栏之旅", //str初始化
				letters: [], //str分解后的字母数组
				order: 1, //表示当前是第几句话
				Zhuanlanbanner: [],
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
		created() {
			this.buildZhuanlanbanner();
		},
		mounted() { //页面初次加载后调用begin()开始动画
			this.begin()

		},
		
		//定时器
		mounted() {
			this.timer = setInterval(() => {
				this.checkbackground();
			}, 1000)
		},
		computed: {
			checkbackground() {
				return function(index) {
					let r, g, b;
					r = Math.floor(Math.random() * 255);
					g = Math.floor(Math.random() * 255);
					b = Math.floor(Math.random() * 255);
					// return "rgb("+r+","+g+","+b+")"
					let str = "background:" + "rgb(" + r + "," + g + "," + b + ")";
					return str;
				}

			}
		},
		//销毁定时器
		beforeDestroy() {
			clearInterval(this.timer);
			this.timer = null;
		},
		methods: {
			buildZhuanlanbanner() {
				this.axios.get('/api/buildZhuanlanbanner').then(res => {
					this.Zhuanlanbanner = res.data.data
				})
			},
			//开始输入的效果动画
			begin() {
				this.letters = this.str.split("")
				for (var i = 0; i < this.letters.length; i++) {
					setTimeout(this.write(i), i * 100);
				}
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
							that.begin();
						}, 700);

					}
				}
			},

		},

		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Zhuanlan_banner {
		width: 980px;
		margin: 0 auto;

		.title_ptsmV {

			width: 100%;
			text-align: center;
			font-size: 34px;
			font-weight: 300;
			line-height: 48px;
			color: rgba(0, 0, 0, .8);
			margin-bottom: 7px;

		}

		.partUL {
			flex-shrink: 0;
			width: 705px;
			margin: 0 auto;
			list-style: none;

			li {
				display: inline-block;
				width: 210px;
				height: 276px;
				background: lightgreen;
				margin: 25px 0 0 25px;
				vertical-align: top;
				box-shadow: 0 2px 12px rgba(0, 0, 0, .06);

				.zl_img {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					overflow: hidden;
					margin: 30px 55px 27px;
					cursor: pointer;
				}

				.zl_title {
					font-size: 16px;
					font-weight: bold;
					line-height: 22px;
					/* color: rgba(0,0,0,.8); */
					color: rgb(51, 51, 51);
					/* width: 100%; */
					text-align: center;
					margin-bottom: 5px;
					overflow: hidden;
					text-overflow: ellipsis;
					height: 22px;
					white-space: nowrap;
					padding: 0 10px;
				}

				.zl_desc {
					font-size: 14px;
					/* color: rgba(0,0,0,.6); */
					color: rgb(102, 102, 102);
					line-height: 22px;
					text-align: center;
					padding: 0 14px;
					margin-bottom: 15px;
					width: 100%;
					height: 41px;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					line-clamp: 2;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.num_3ym5g {
					text-align: center;
					font-size: 12px;
					line-height: 17px;
					/* color: rgba(0,0,0,.35); */
					color: rgb(166, 166, 166);

					i {
						display: inline-block;
						width: 1px;
						height: 10px;
						/* background: rgba(0,0,0,.35); */
						background: rgb(166, 166, 166);
						vertical-align: -1px;
						margin: 0 8px;
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

	.zhuanlan_greeting {
		width: 980px;
		margin: 150px auto;
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
