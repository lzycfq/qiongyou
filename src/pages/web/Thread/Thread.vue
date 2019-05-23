<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="thread_header">
			<div class="cn-desc">
				<h1 class="desctitle">穷游论坛</h1>
				<div class="descjj">
					<strong class="descfs">分享</strong><i>.</i><strong>结伴</strong><i>.</i><strong>找攻略</strong>
				</div>
			</div>
			<div class="cn-fr" v-for="(item,index) in cnpopover" :key='index'>
				<el-popover placement="bottom-end" v-model="visible" width="100%" trigger="hover" popper-class="cnpopoverbg">
					<div class="cnpopover">
						<div class="cnbci-item cnbci-fir">
							<h4>穷游兴趣小组</h4>
							<tr v-for="(item,index) in item.cnpopovertd" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingqus}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingqu}}</router-link>
								</td>
							</tr>
							<br />
							<h4>线上线下</h4>
							<li class="firli" v-for="(item,index) in item.cnpopoverli" :key='index'>
								<router-link to="">{{item.cnpopoverliname}}</router-link>
							</li>
						</div>
						<div class="cnbci-item cnbci-fir">
							<h4>欧洲</h4>
							<tr v-for="(item,index) in item.cnpopoverouzhou" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingquouzhous}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingquouzhou}}</router-link>
								</td>
							</tr>
						</div>
						<div class="cnbci-item cnbci-fir">
							<h4>亚洲</h4>
							<tr v-for="(item,index) in item.cnpopoveryazhou" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingquyazhous}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingquyazhou}}</router-link>
								</td>
							</tr>
						</div>
						<div class="cnbci-fo">
							<div class="cnbcii-cell">
								<h4>美洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopovermeizhou" :key='index'>
										<router-link to="">{{item.cnpopovermeizhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>非洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopoverfeizhou" :key='index'>
										<router-link to="">{{item.cnpopoverfeizhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>大洋洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopoverdayangzhou" :key='index'>
										<router-link to="">{{item.cnpopoverdayangzhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>后院</h4>
								<ul>
									<li>
										<router-link to="">海阔天空</router-link>
									</li>
									<li>
										<router-link to="">转让专区</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<span slot="reference" class="cfsub cn-banlist">版面列表 <i class="el-icon-caret-bottom" /></i></span>
				</el-popover>
				<div class="cfsub cn-pub"><i class="inbg xpub"></i>发新帖</div>
			</div>
		</div>
		<div class="thread_banner">
			<div class="swiper-container mohu-bg">
				<div class="swiper-wrapper">
					<div class="swiper-slide mohuslide swiper-no-swiping" v-for="(item,index) in threadbanner" :key="index" :style="{background:'url('+item.threadbannerimg+')'}">



					</div>
				</div>
				<div class="thread_banner_content">
					<div class="swiper-container gallery-top">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index">
								<img :src="item.threadbannerimg" width="100%" height="100%" />

							</div>
						</div>
					</div>
					<div class="swiper-container gallery-thumbs">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index"><img :src="item.threadbannerimg"
								 width="100%" height="100%" />

							</div>
						</div>
					</div>
					<div class="swiper-container swiperbox">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index">
								<span class="">{{item.threadbannerdsc}}</span>
								<em class="swipername">{{item.threadbannerzuozhe}}</em>
								<router-link to="" class="swiper_a"><img :src="item.threadbanneravter" /></router-link>
								<img class="cnsi-authen index-tooltip" style="width: 32px; height: 32px;" src="//common1.qyerstatic.com/bbs/old/images/authentication_u.png" />
							</div>
						</div>
					</div>
				</div><!-- thread_banner_content -->
			</div> <!-- mohu-bg -->

		</div><!-- //thread_banner -->
		<br />
		<br />
		<div class="thread_question">
			<div class="thread_questionlist">
				<el-tabs style="height: auto;">
					<el-tab-pane label="游记策略">
						<div class="yl-con yls" v-for="(item,index) in con" :key='index'>
							<i class="ylc-line ylcl"></i>
							<div class="con-inner xfix">
								<router-link to="" class="anchtoup">
									<img class="con-pic" :src="item.conavter"></router-link>
								<dl class="con-detail">
									<dt class="dl-title">
										<router-link to="" class="dl-name xc32 aptle">{{item.conname}}</router-link>
										<img src="//common1.qyerstatic.com/bbs/old/images/index/at_member.png" class="indexauthen">
									</dt>
									<dd class="dl-des">
										<span class="dd-inw">在<strong>
												<router-link to="">{{item.condiqu}}</router-link>
											</strong>发布的游记
											<img src="../../../assets/images/qiongyou/dianzan.png" class="dianzan" />
											<em class="xnum xc32">{{item.condianzan}}</em>人赞</span>
										<span class="con-time"><i class="inbg zhhf"></i>最后回复于
											<b lass="xnum">{{item.conhour}}前</b></span></dd>
									<dd class="xcfb">
										<div class="tle-con">
											<p>
												<router-link to="" class="tc-title aptle">{{item.condsc}}</router-link>
											</p>
											<p class="tc-desc">{{item.contxt}}</p>
										</div>
										<router-link to="" class="tc-awrap anchtoup"><img class="tc-rimg" :src="item.conpic"></router-link>
									</dd>
								</dl>
							</div>
						</div>
						<a class="tab-load" v-if="page<page_count" @click='loadMore'>点击加载更多</a>
						<a class="tab-load" v-else>没有更多了</a>
					</el-tab-pane>
					<el-tab-pane label="结伴同游" ref="testH" >
						<p class="jy-tips">
							<i class="inbg jyts"></i>我想约上你，一起看世界<span class="ytsplit">|</span>
							<router-link to='' class="yt-a" target="_blank">更多待约穷游er<i class="inbg lfci"></i></router-link>
						</p>
						<div class="yl-con" v-for="(item,index) in jieban" id="testH" :key="index" :style="domheight()" :class="index===jieban.length-1?'last-yl-con':''" >
							<i class="ylc-line ylcl"></i>
							<div class="con-inner xfix">
								<router-link to='' class="anchtoup"><img class="con-pic" :src="item.jiebanavter" /></router-link>
								<dl class="con-detail"><dt class="dl-title">
										<router-link to="" class="dl-name xc32 aptle">{{item.jiebanname}}</router-link>
									</dt>
									<dd class="dl-des clearfix">
										<span class="dd-inw">
											<i class="inbg seeicon"></i>
											<em class="xnum xc32">{{item.jiebanliulan}}</em>人浏览
											<i class="inbg replyicon"></i>
											<em class="xnum xc32">{{item.jiebanhuifu}}</em>人回复</span>
										<span class="con-time"><i class="inbg zhhf"></i>最后回复于<b class="xnum">{{item.jiebantime}}前</b></span>
									</dd>
									<dd class="xcfb">
										<div class="tle-con">
											<p>
												<router-link to='' class="tc-title aptle">
													<span class="innertxt">{{item.jiebantxt}}</span>
												</router-link>
											</p>
											<div class="tlec-cd clearfix">
												<div class="tc-calen">
													<p class="xmb6">出发<em class="xnum xc32 xml8">{{item.jiebanchufa}}</em></p>
													<p class="xmb6">返程<em class="xnum xc32 xml8">{{item.jiebanfancheng}}</em></p>
												</div>
												<p class="tc-dir">
													<span class="tcd-sn"><i class="inbg dreicon"></i></span>
													<span class="indrp">{{item.jiebanmudi}}</span></p>
											</div>
										</div>
									</dd>
								</dl>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="版面列表">角色管理</el-tab-pane>

				</el-tabs>
			</div>
		</div>


	</el-col>
</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import Swiper from "swiper"
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread',
		data() {

			return {
				threadbanner: [],
				cnpopover: [],
				con: [],
				jieban: [],
				page: 1,
				page_count: '',

			}
		},
		mounted() {
			var galleryThumbs = new Swiper('.gallery-thumbs', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				spaceBetween: 10,
				slidesPerView: 3,
				noSwiping: true,
				loopedSlides: 10, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new Swiper('.gallery-top', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				effect: 'fade',
				loopedSlides: 10, //looped slides should be the same
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
			});
			var mohubg = new Swiper('.mohu-bg', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				effect: 'fade',
				noSwiping: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var swiperbox = new Swiper('.swiperbox', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				noSwiping: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slidesPerView: 1,

			});

		},
		created() {
			this.buildthreadbanner();
			this.buildcnpopover();
			this.buildcon();
			this.buildjieban();
		},
		methods: {
			buildthreadbanner() {
				this.axios.get('/api/buildthreadbanner').then(res => {
					this.threadbanner = res.data.data
					console.log(res)
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcnpopover() {
				this.axios.get('/api/buildcnpopover').then(res => {
					this.cnpopover = res.data.data
					console.log(res)
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcon() {
				this.axios.get('/api/buildcon').then(res => {
					this.con = res.data.data
					console.log(res)
				}).catch(function(error) {
					console.log(error)
				})

			},
			buildjieban() {
				this.axios.get('/api/buildjieban').then(res => {
					this.jieban = res.data.data
					console.log(res)
				}).catch(function(error) {
					console.log(error)
				})
			},
			loadMore() {
				this.page += 1;
				this.axios.get('/api/buildcon', {
					params: {
						'current_page': this.page, //请求页面					
					},
				}).then(res => {
					console.log(res)
					this.con = this.con.concat(res.data.con); //将请求回来的数据和上一次进行组合
				}).catch(err => {
					this.$toast.fail("系统开小差,请重试");
				});

			},
			domheight() {
				let lastheight = this.$refs.jieban.$refs.textH.offsetHeight;
				//let lastlength = this.jieban.length - 1;
				// let o = document.getElementsById("last-yl-con");
				// let o = document.getElementById("testH");
				console.log(lastheight);
			
			}
		},
		components: {
			headers,
			Swiper
		},
	}
</script>

<style lang="scss">
	.jy-tips {
		margin-bottom: 8px;
		font-size: 14px;
		color: #636363;

		.jyts {
			width: 16px;
			height: 12px;
			margin-right: 8px;
			background-position: -53px -271px;
		}

		.ytsplit {
			color: #ececec;
			margin: 0 8px;
		}

		.yt-a {
			color: #10b041;
		}

	}

	.clearfix:after {
		display: block;
		font-size: 0;
		height: 0;
	}

	.clearfix:after,
	.q-layer-header:after,
	.q-layer-message .layer-msg-tab ul:after {
		visibility: hidden;
		content: " ";
		clear: both;
	}

	.thread_question {
		width: 980px;
		margin: 0 auto;

		.thread_questionlist {
			width: 680px;
			height: auto;
			float: left;

			.yl-con {
				position: relative;
				padding: 17px 0 20px;

				.xcfb {
					clear: both;
				}

				.tlec-cd {
					position: relative;
					left: -34px;
					zoom: 1;
					width: 400px;
					top: 0;
					margin-top: 5px;
					padding-left: 34px;
					border: 1px solid #ececec;
					border-left: none;

					.tc-calen {
						float: left;
						width: 110px;
						margin: 12px 15px 10px 0;
						padding-right: 16px;
						color: #9d9d9d;
						font-size: 14px;
						line-height: 14px;
						border-right: 1px solid #ececec;

					}

				}

				.xmb6 {
					margin-bottom: 6px;

					.xc32 {
						color: #323232;
					}

					.xml8 {
						margin-left: 8px;
					}
				}

				.tc-dir {
					float: left;
					line-height: 66px;
					height: 56px;
					font-size: 14px;
					color: #636363;

					.tcd-sn {
						display: table-cell;
						vertical-align: middle;

						.dreicon {
							width: 10px;
							height: 14px;
							background-position: -27px -202px;
						}

					}

					.indrp {
						display: table-cell;
						padding: 1px 0 0 5px;
						width: 230px;
						vertical-align: middle;
						line-height: 20px;
						word-wrap: break-word;
						word-break: break-all;
					}
				}
			}
		}
	}

	.yl-con .ylc-line {
		position: absolute;
		left: 23px;
		top: 30px;
		height: 100%;
		border-left: 1px solid #ececec;
	}

	.yl-con .xfix:after,
	.yl-con .xfix:before {
		content: "";
		display: table;
	}

	.index-tooltip {
		cursor: pointer;
	}

	.yl-close {
		position: absolute;
		right: 0;
		width: 10px;
		height: 10px;
		background-position: 0 -59px;
		cursor: pointer;
	}

	.inbg {
		display: inline-block;
		background: url(//common1.qyerstatic.com/bbs/old/images/index/indexs.png) no-repeat;
	}

	.con-time {
		position: relative;
		top: 2px;
	}

	.con-pic {
		position: relative;
		float: left;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		z-index: 200;
	}

	.con-detail {
		float: left;
		margin: 14px 0 0 9px;
		width: 623px;

		.dl-title {
			float: left;
			margin: 0 9px 4px 0;
			font-size: 12px;

			.xc32 {
				color: #323232;
			}

			.index-tooltip {
				cursor: pointer;
			}

			.indexauthen {
				margin-left: 2px;
				width: 16px;
				height: 16px;
				vertical-align: -3px;
			}

		}

		.dl-des {
			float: left;
			color: #959595;
			line-height: 20px;

			.dd-inw {
				float: left;
				font-size: 12px;
				font-weight: 500;

				em {
					font-size: 12px;
				}

				.seeicon {
					margin-right: 3px;
					width: 16px;
					height: 12px;
					background-position: 0 -79px;
					vertical-align: -1px;
				}

				.caicon,
				.replyicon {
					vertical-align: -2px;
				}

				.replyicon {
					margin: 0 3px 0 20px;
					width: 12px;
					height: 12px;
					background-position: 0 -92px;
				}

				.dianzan {
					vertical-align: sub;
					margin-left: 5px;
					margin-right: 5px;
				}
			}

			.dl-des strong {
				margin: 0 7px;
				font-size: 12px;
				font-weight: 500;

			}

			.dd-inw a {
				color: #959595;
				font-weight: 500;
				font-size: 12px;
				margin-right: 5px;
				text-decoration: underline;
			}

			.bicf.praise {
				position: relative;
				margin-left: 16px;
				top: -2px;
				color: #ececec;
				font-size: 22px;
				line-height: 22px;
				vertical-align: -8px;
				display: inline-block;
			}
		}

		.con-time,
		.tle-con {
			float: left;
			font-size: 12px;

			b {
				font-size: 12px;
			}
		}

		.tle-con {
			margin-top: 22px;
			width: 415px;
			color: #323232;

			.tc-title {
				display: block;
				margin-right: 15px;
				font-size: 16px;
				line-height: 24px;
				color: #323232;
				word-wrap: break-word;
				word-break: break-all;
			}

			.tc-desc {
				margin-top: 15px;
				width: 400px;
				line-height: 20px;
				color: #959595;
			}

		}

		.tc-rimg {
			margin: 45px 0 0 9px;
			width: 161px;
			height: 107px;
		}
	}

	.xfix:after {
		clear: both;
	}

	.xfix:after,
	.xfix:before {
		content: "";
		display: table;
	}

	.zhhf {
		width: 14px;
		height: 14px;
		margin: 0 5px 0 20px;
		background-position: -28px -263px;
		vertical-align: -2px;
	}

	.tab-load {

		display: block;
		cursor: pointer;
		margin: 50px auto;
		line-height: 38px;
		border: 1px solid #ececec;
		font-size: 14px;
		text-align: center;
		color: #d7d7d7;
	}

	.tab-load:hover {
		color: #10b041;
		border: #10b041 1px solid;
	}

	.yls:nth-last-child(1) .ylc-line {
		display: none;
	}

	.yly:last-child .ylc-line {
		height: 162px;
	}

	// .yl-con .ylc-line:last-child{
	// 	display: none;
	// }
	.thread_questionlist {
		/deep/ .el-tabs__item {
			padding: 0 !important;
			width: 226.6px;
			font-size: 18px;
			height: 50px;
			text-align: center;
			color: #888888;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__item.is-active {
			color: #10b041;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__item:hover {
			color: #10b041;
			cursor: pointer;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__active-bar {
			background-color: rgb(16, 176, 65);
		}
	}

	.thread_header {
		width: 980px;
		padding: 10px 0;
		margin: 0 auto;

		.cn-desc {
			float: left;
			font-size: 18px;
			color: #3f9f5f;

			.desctitle {
				float: left;
				line-height: 100px;
				color: #147850;
				font-size: 36px;
				font-weight: 500;
			}

			.descjj {
				float: left;
				margin-left: 16px;

				strong {
					display: inline-block;
					margin-top: 47px;
					line-height: 18px;
					font-weight: 500;
					font-size: 18px;
				}

				.descfs {
					padding-left: 14px;
					border-left: 1px solid #3f9f5f;
				}

				i {
					display: inline-block;
					margin: 0 5px;
					vertical-align: 5px;
				}
			}
		}

		.cn-fr {
			float: right;
			width: 270px;

			.cfsub {
				float: left;
				margin-top: 29px;
				font-size: 18px;
				border-radius: 3px;
				text-align: center;
			}

			.cn-banlist {
				width: 123px;
				line-height: 38px;
				color: #3f9f5f;
				border: 1px solid #3f9f5f;
				cursor: pointer;
			}

			.cn-pub {
				width: 125px;
				margin-left: 18px;
				line-height: 40px;
				color: #fff;
				background-color: #1c95dd;
				cursor: pointer;
			}

			.cn-pub .xpub {
				margin-right: 8px;
				width: 15px;
				height: 13px;
				background-position: 0 -14px;
				vertical-align: 1px;
			}

			.inbg {
				display: inline-block;
				background: url(//common1.qyerstatic.com/bbs/old/images/index/indexs.png) no-repeat;
			}
		}

	}

	// thread_banner
	.mohu-bg {
		width: 100%;
		height: 400px;
		position: relative;
		overflow: hidden;
		display: flex;
		background-color: rgba(141, 141, 141, 2);
		background-blend-mode: darken;


		.mohuslide {
			width: 100%;
			height: 400px;
			position: relative;
			overflow: hidden;
			filter: blur(20px);



		}
	}

	.swiperbox {
		position: absolute;
		width: 350px;
		height: 185px;


		opacity: 1;
		top: 25px;
		right: 10px;

		span {
			display: inline-block;
			width: 70%;
			height: auto;
			color: white;
			position: absolute;
			top: 105px;
			left: 85px;
			line-height: 25px;
			font-size: 16px;
			// color: #fff;
			//  text-shadow: 0 0 2px rgba(12,3,6,.5);
		}

		.swipername {
			display: inline-block;
			width: 70%;
			height: auto;
			color: black;
			position: absolute;
			top: 35px;
			color: white;
			left: 115px;
		}

		.cnsi-authen {
			position: absolute;
			padding: 5px;
			left: 65px;
			z-index: 2000;
			top: 49px;

			overflow: hidden;
		}

		.swiper_a {
			position: absolute;
			padding: 5px;
			left: 15px;
			z-index: 2000;
			top: 0px;
			overflow: hidden;
			background: #fff;
			border-radius: 50%;
			width: 80px;
			height: 80px;
			background: hsla(0, 0%, 100%, 0.3);

			img {
				width: 80px;
				height: 80px;
				border-radius: 50%;

			}
		}
	}

	.thread_banner {
		width: 100%;
		height: 400px;
		overflow: hidden;
		position: relative;
		z-index: 100;

		.gallery-bg {

			width: 100%;
			height: 400px;
			z-index: -1;



		}

		.thread_banner_content {
			margin: 0 auto;
			width: 980px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			opacity: 1;
			z-index: 1000;

			.gallery-top {
				float: left;
				width: 680px;
				height: 400px;
				position: relative;

			}

			.gallery-thumbs {
				width: 360px;
				position: absolute;
				bottom: 90px;
				right: 0;


				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
				}
			}


		}
	}

	.swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.gallery-thumbs {
		height: 90px;
		box-sizing: border-box;
		padding: 10px 0;
		width: 100px;
	}

	.gallery-thumbs .swiper-slide {
		height: 48px;
		width: 48px !important;
		opacity: 0.4;
		position: absolute;
		bottom: 0;
		left: 85px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(2) {
		margin-left: 55px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(3) {
		margin-left: 110px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(4) {
		margin-left: 165px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(5) {
		margin-left: 220px;
	}

	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
		border: 2px solid #fff;
		height: 44px;
		width: 44px !important;
	}

	.gallery-thumbs .swiper-slide-thumb-active::before {
		content: "";
		position: absolute;

		width: 0;
		height: 0;
		left: 17px;
		top: -10px;
		line-height: 0;
		border-width: 0 5px 5px;
		border-style: dashed dashed solid;
		border-color: transparent transparent #fff;
		border-color: transparent transparent hsla(0, 0%, 100%, 0.5);
	}

	.cnpopover {
		width: 980px;
		height: auto;


		.cnbci-item {
			width: 240px;
			margin-left: 20px;
		}

		.cnbci-fo {
			width: 200px;

			position: relative;
			float: left;
			padding: 12px 0 8px;

			h4 {
				margin-bottom: 10px;
				font-size: 16px;
				font-weight: 500;
			}

			.cnbcii-cell {
				float: left;
				width: 100px;
				text-align: left;
				height: 190px;

				ul li {
					list-style: none;
					font-size: 12px;
					color: #636363;
					line-height: 25px;

					a {
						font-size: 12px;
						color: #636363;
					}
				}
			}
		}

		.cnbci-fir {
			position: relative;
			float: left;
			padding: 12px 0 8px;

			h4 {
				margin-bottom: 10px;
				font-size: 16px;
				font-weight: 500;
			}

			.td {
				width: 120px;
				height: 25px;
				text-align: left;

				font-size: 12px;
				color: #636363;

				a {
					font-size: 12px;
					color: #636363;
				}
			}

			.firli {
				list-style: none;
				font-size: 12px;
				color: #636363;
				line-height: 25px;

				a {
					font-size: 12px;
					color: #636363;
				}
			}
		}
	}
</style>
