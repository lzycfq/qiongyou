<template>
	<!-- 	专栏 -->
	<el-col :span="24">
		<div class="m-zl-header">
			<router-link to="/index" class="mzl_home"><img src="../../../assets/images/qiongyou/home.svg" class=""></router-link>
			<router-link to="/" class="mzl_zhuanlan"><img src="../../../assets/images/qiongyou/zhuanlan_logo.svg" class=""></router-link>
			<router-link to="/" class="mzl_zhuanlan_dingyue">我的订阅</router-link>
		</div>
		<!-- 打印机欢迎语 -->
		<div class="m-zl-welcome">
			<p class="m-zl-welcomedynamic">
				<span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
				<i class="cursor_2ktlD"></i>

			</p>
		</div>
		<!-- 如何成为作者 -->
		<div style="clear:both"></div>
		<router-link to="/" class="m-zl-zuozhe">如何成为专栏作者<i class="el-icon-arrow-right"></i></router-link>
		<div style='clear:both'></div>
		<h2 class="m-zl-tuijian">推荐专栏</h2>
		<div class="m-zl-tjlist">
			<router-link v-for="(item,index) in mzllist" :key='index' :to="{path:'Detail',params:{mzllistid:item.mzllistid}}"
			 class="m-zl-tjlist_a">
				<img :src="item.mtjimg" lazy="loaded" />
				<h3>{{item.mtjtitle}}</h3>
				<p>{{item.mtjdsc}}</p><i>进入专栏</i>
			</router-link>
		</div>
		<div class="m-zl-list">
			<h2>推荐文章</h2>
			<li class="m-zl-list-li">
				<router-link to=""><img src="https://pic.qyer.com/zhuanlan/article/20190705/1473444328651/300x200" lazy="loaded"></router-link>
				<router-link to="" class="m-zl-list-lidsc">
					<h4>上海周末自在浪|去新场古镇一定要顺道去超小众超大博物馆包馆</h4>
					<p>
						<router-link to="">喝沁柠水的猪<span> · 来自 </span>大方小圆的攻略集</router-link>
					</p>
				</router-link>
			</li>
		</div>
	</el-col>
</template>

<script>
	export default {
		data() {

			return {
				words: [], //字母数组push，pop的载体
				str: "欢迎开启穷游专栏之旅", //str初始化
				letters: [], //str分解后的字母数组
				order: 1, //表示当前是第几句话
				mzllist: [],
			}
		},
		created() {
			this.buildbegin();
			this.buildmzllist();

		},
		watch: { //监听order值的变化，改变str的内容
			order(old, newV) {
				if (this.order % 4 == 1) {
					this.str = "欢迎开启穷游专栏之旅"
				} else if (this.order % 4 == 2) {
					this.str = "探索更独特的世界"
				} else {
					this.str = '分享用创造定义旅行'
				}
			}
		},
		methods: {
			//开始输入的效果动画
			buildbegin() {
				this.letters = this.str.split("")
				for (var i = 0; i < this.letters.length; i++) {
					setTimeout(this.write(i), i * 150);
				}
			},
			//开始删除的效果动画
			back() {
				let L = this.letters.length;
				for (var i = 0; i < L; i++) {
					setTimeout(this.wipe(i), i * 90);
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
						}, 800);

					}
				}
			},
			buildmzllist() {
				this.axios.get('/api/buildmzllist').then(res => {
					this.mzllist = res.data.data
					console.log(res)
				}).catch(function(orror) {
					console.log(orror)
				})
			}
		},
	}
</script>

<style lang="scss">
	.m-zl-header {
		height: 1.18rem;
		line-height: 1.4rem;
		background: #fff;
		box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, 0.08);
		border-bottom: 0.5px solid rgba(0, 0, 0, .08);
		box-sizing: border-box;
		padding: 0 0.54rem;
		position: relative;

		.mzl_home {
			height: 0.48rem;

			img {
				height: 0.48rem;
			}
		}

		.mzl_zhuanlan {
			position: absolute;
			width: 104px;
			top: 0.01rem;
			left: 50%;
			margin-left: -52px;
		}

		.mzl_zhuanlan_dingyue {
			color: #28B76B;
			font-size: 15px;
			top: -0.1rem;
			position: absolute;
			right: 0.5rem;
			font-weight: bold;
		}
	}

	.m-zl-welcome {
		padding: 0 0.54rem;
		position: relative;
		height: 3rem;
		margin-top: 1rem;

		.cursor_2ktlD {
			display: inline-block;
			width: 2px;
			height: 48px;
			background: #28B76B;
			position: relative;
			top: 11px;
			margin-left: 1px;
			animation: bling_1889Z 1s infinite;
		}

		.word:nth-of-type(2) {
			margin-right: 75%;
		}

		.word {

			font-size: 36px;
			overflow: hidden;
			color: #000;


			font-weight: 200;
		}
	}

	.m-zl-zuozhe {

		border: 1px solid #28B76B;
		border-radius: 100px;
		font-size: 14px;
		line-height: 35px;
		text-decoration: none;
		color: #28B76B;
		text-align: center;
		width: 4rem;
		height: 0.9rem;
		display: block;
		margin: 40px 0 0 20px;
		font-weight: 500;
	}

	.m-zl-tuijian {
		font-size: 18px;
		font-weight: bold;
		line-height: 25px;
		margin: 50px 20px 0 20px;
		color: rgba(0, 0, 0, 0.9);
	}

	.m-zl-tjlist {
		margin: 12.5px 20px 6px 20px;
		padding: 0;

		.m-zl-tjlist_a:nth-of-type(1) {
			background: #FDDDE5;
			box-shadow: 0 5px 12px 0 rgba(253, 221, 229, 0.6);
			display: inline-block;
			height: 228px;
			width: calc(50% - 9.5px);
			margin-bottom: 20px;
			position: relative;
			text-decoration: none;
		}

		.m-zl-tjlist_a:nth-of-type(2) {
			background: #FDE7DD;
			box-shadow: 0 5px 12px 0 rgba(253, 231, 221, 0.6);
			display: inline-block;
			height: 228px;
			width: calc(50% - 9.5px);
			margin-bottom: 20px;
			position: relative;
			float: right;
			text-decoration: none;
		}

		.m-zl-tjlist_a:nth-of-type(3) {
			background: #DDEEFD;
			box-shadow: 0 5px 12px 0 rgba(221, 238, 253, 0.6);

			display: inline-block;
			height: 228px;
			width: calc(50% - 9.5px);
			margin-bottom: 20px;
			position: relative;
			text-decoration: none;
		}

		.m-zl-tjlist_a:nth-of-type(4) {
			background: #EDE4F1;
			box-shadow: 0 5px 12px 0 rgba(237, 228, 241, 0.6);
			display: inline-block;
			height: 228px;
			float: right;
			width: calc(50% - 9.5px);
			margin-bottom: 20px;
			position: relative;
			text-decoration: none;
		}
	}

	.m-zl-tjlist_a img {
		width: 75px;
		height: 75px;
		border-radius: 75px;
		display: block;
		margin: 0.5rem auto;
	}

	.m-zl-tjlist_a h3 {
		font-size: 15px;
		color: #212121;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		color: rgba(0, 0, 0, 0.9);
	}

	.m-zl-tjlist_a p {
		color: rgba(0, 0, 0, 0.6);
		font-size: 12.5px;
		line-height: 19.5px;
		word-wrap: break-word;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		overflow: hidden;
		height: 0.8rem;
		padding: 0.2rem;
	}

	.m-zl-tjlist_a:nth-child(6n + 1)>i {
		width: 100%;
		height: 41px;
		display: block;
		text-align: center;
		line-height: 41px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.8);
		text-decoration: none;
		position: absolute;
		bottom: 0;
		background: #F8C8D4;
		font-style: normal;

	}

	.m-zl-tjlist_a:nth-child(6n + 2)>i {
		width: 100%;
		height: 41px;
		display: block;
		text-align: center;
		line-height: 41px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.8);
		text-decoration: none;
		position: absolute;
		bottom: 0;
		background: #F4DACE;
		font-style: normal;
	}

	.m-zl-tjlist_a:nth-child(6n + 3)>i {
		width: 100%;
		height: 41px;
		display: block;
		text-align: center;
		line-height: 41px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.8);
		text-decoration: none;
		position: absolute;
		bottom: 0;
		background: #CADFF2;
		font-style: normal;
	}

	.m-zl-tjlist_a:nth-child(6n + 4)>i {
		width: 100%;
		height: 41px;
		display: block;
		text-align: center;
		line-height: 41px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.8);
		text-decoration: none;
		position: absolute;
		bottom: 0;
		background: #E6D7EC;
		font-style: normal;
		line-height: 25px;
	}
	.m-zl-list {
		margin: 50px 20px 0 20px;
		h2 {
			font-size: 18px;
			color: rgba(0, 0, 0, 0.9);
			li {
				margin-bottom: 12.5px;
				font-weight: bold;
			}
			width: 3.5rem;
			width: 100%;
			height:2.5rem;
			margin-bottom:1.3rem;
			list-style: none;
			position: relative;
			img {
				width: 5.25rem;
				height: 2.5rem;
				float: left;
			}
			.m-zl-list-lidsc {
				float: right;
				h4 {
					font-size: 16px;
					font-weight: bold;
					color: rgba(0, 0, 0, 0.9);
					line-height: 22.5px;
					margin: 0;
					word-wrap: break-word;
					text-overflow: ellipsis;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					overflow: hidden;
					max-height: 45px;

				}

				p {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.4);
					width: calc(100% - 137.5px);
					position: absolute;
					right: 0;
					bottom: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					line-height: 12px;
					height: 12px;

					a {
						color: rgba(0, 0, 0, 0.4);

					}
				}
			}
		}
	}
</style>
