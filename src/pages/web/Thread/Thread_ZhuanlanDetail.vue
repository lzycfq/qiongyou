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
		</div><!-- zhuanlanheader 导航栏以及订阅分享等数据数据 -->
		<!-- ZD_banner大图 -->
		<div class="ZD_banner">
			<div class="cover_mask_2burc" :class="{cover_mask_top__MN40:istabBara}"></div>
			<div class="cover_img_2jfW" :class="{cover_img_top_2n_Kl:istabBarb}"><img src="../../../assets/images/qiongyou/ZDbanner.jpg"></div>
			<h1 class="title_h1_3dJwo" :class="{ title_opacity_3neg2:istabBarc}"><p id="title" class="title_1KXfp">泰国有个嬉皮村 | 拜县</p></h1>
			<div class="next_1uqF3" :class="{ next_1uqF3s:istabBard}"></div>
		</div>
		<div class="ZD_content">
			<div class="ZD_sidebar" v-if="btnFlag">
				<p class="praise_3pSgm">
				<span class="praise_bg_2K-tS"></span>
				<img src="../../../assets/images/qiongyou/dianzan_3.png" class="praise_icon_2dh0o"/></p>
				<span class="ZD_dianzan">452赞</span>
				<p class="collect_tJEtH"><img src="../../../assets/images/qiongyou/love_3_1.png"></p>
				<p class="collect_tJEtH"><img src="../../../assets/images/qiongyou/liaotian.png"></p>
				<p class="collect_tJEtH">
					<el-dropdown placement="bottom">
						<span  class="el-dropdown-link">
							<i class="el-icon-upload2" style="color: #323232;font-size: 35px;"></i>
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
					</el-dropdown></p>
				

			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread_ZhuanlanDetail',
		data() {
			return {
				btnFlag: false,
				istabBar: false,
				dingyue: true,
				ydingyue: false,
				zhuanlanheader: [],
				istabBara:false,
				istabBarb:false,
				istabBarc:false,
				istabBard:false,
			}
		},
		mounted() { //页面初次加载后调用begin()开始动画
			this.buildzhuanlanheader();
			window.addEventListener('scroll', this.handleScroll); // Dom树加载完毕
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			//下拉导航栏浮动吸顶
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				// 固定导航栏
				let topBar = document.querySelector("#topPart");
				if (scrollTop > topBar.offsetHeight) {
					this.istabBar = true;
					this.istabBara = true;
					this.istabBarb = true;
					this.istabBarc = true;
					this.istabBard = true;


				} else {
					this.istabBar = false;
					this.istabBara = false;
					this.istabBarb = false;
					this.istabBarc = false;
					this.istabBard = false;
				}
			},
			//点击订阅 发送1
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
			//点击取消订阅 发送2
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
			// 初次未登录，未选定订阅进入界面判断 返回type=1判断已经订阅返回type=2
			buildzhuanlanheader() {
				this.axios.get('/api/buildzhuanlanheader').then(res => {
					this.zhuanlanheader = res.data.data
					console.log(res)
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			
			// 为了计算距离顶部的高度，当高度大于250显示回顶部图标，小于250则隐藏
			scrollToTop() {
			
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 250) {
					that.btnFlag = true
				} else {
					that.btnFlag = false
				}
			},
		},
		components: {
			headers,

		},
	}
</script>

<style lang="scss">
.ZD_content{
	position: relative;
    width: 100%;
	.ZD_sidebar{
	position: fixed;
    left: 330px;
    top: 160px;
    z-index: 100;
    text-align: center;
	.praise_3pSgm {
    width: 59px;
    height: 59px;
    border: 1px solid rgba(40, 183, 107, 0);
	    border-radius: 50%;
    position: relative;
    cursor: pointer;
	.praise_bg_2K-tS {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(40, 183, 107, .06);	
}
.praise_icon_2dh0o{
		width: 32px;
    height: 32px;
    display: inline-block;
    position: absolute;
    top: 22%;
    left: 25%;
	}
}//praise_3pSgm\
.praise_3pSgm:hover{
	-moz-box-shadow:0px 0px 20px #48C286; -webkit-box-shadow:0px 0px 20px #48C286; box-shadow:0px 0px 20px #48C286;
}
.ZD_dianzan{
	color: #999999;
	font-size: 12px;
	display: inline-block;
	margin-top: 5px;
}
.collect_tJEtH{
	    margin: 15px auto;
		
}
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

		.ZD_banner{
			    height: 100%;
	    position: relative;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    margin: 0 auto;
	    width: 100%;
	    min-height: 818px;
	    box-sizing: border-box;
	    overflow: hidden;
		.cover_mask_2burc{
			    width: 100%;
	    /* height: 100%; */
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: rgba(0, 0, 0, .1);
	    z-index: 2;
	    transition-duration: .5s;
	    transition-timing-function: cubic-bezier(.7, 0, .3, 1);
		}
		.cover_img_2jfW{
	    position: absolute;
	    overflow: hidden;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    transition-duration: 0.5s;
	    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	    backface-visibility: hidden;
	    transition-property: transform;
	    box-sizing: border-box;
	    background: #514753;
	    z-index: 1;
		img {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    display: block;
	    width: 100%;
	    height: 100%;
	    box-sizing: border-box;
	}
	}
	.cover_mask_top__MN40 {
	    /* bottom: 65%; */
	    transform: translate3d(0, -50%, 0);
	}
	.cover_img_top_2n_Kl {
	    /* bottom: 65%; */
	    transform: translate3d(0, -50%, 0);
	}
	.title_opacity_3neg2 {
	    opacity: 0;
	    color: rgba(0, 0, 0, .01);
	    /* text-shadow: none; */
	    /* background: none; */
	}
		.title_1KXfp {
	    width: 680px;
	    color: #fff;
	    font-size: 42px;
	    font-weight: bold;
	    position: absolute;
	    left: 50%;
	    top: 45%;
	    z-index: 99;
	    transform: translate(-50%, -50%);
	    line-height: 58px;
	    transition-property: color, opacity;
	    transition-duration: .5s;
	    text-shadow: 0px 5px 10px rgba(0, 0, 0, .2);
	    text-align: center;
		
	}
	.next_1uqF3{
		    width:32px;
	    height: 55px;
	    position:absolute;
	    bottom: 20px;
	    left: 50%;
	    margin-left: -11px;
	    cursor: pointer;
	    animation: next_1uqF3 1s infinite linear;
	    transition: 1s;
	    transition-property: translateY;
	    z-index: 2;
	}
	.next_1uqF3s{
		display: none !important;
	}
	@keyframes next_1uqF3{
	0% {
	    background: url(http://www.airmate-china.com/cn/images/banner_btn.png) no-repeat;
	    transform: translateY(-3px);
	}
	25% {
	    background: url(http://www.airmate-china.com/cn/images/banner_btn.png) no-repeat;
	    transform: translateY(-1px);
	}
	50% {
	    background: url(http://www.airmate-china.com/cn/images/banner_btn.png) no-repeat;
	    transform: translateY(0px);
	}
	85% {
	    background: url(http://www.airmate-china.com/cn/images/banner_btn.png) no-repeat;
	    transform: translateY(-1px);
	}
	100% {
	    background: url(http://www.airmate-china.com/cn/images/banner_btn.png) no-repeat;
	    transform: translateY(-3px);
	}
	}
	
		}

</style>
