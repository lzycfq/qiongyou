<template>
	<!-- 签证 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Visa_nav">
			<h1 class="v-h1">穷游论坛</h1>
			<span class="v-qz">签证</span>
			<div class="v-xfr">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="small">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>
				
				</el-form>
			</div>
		</div>
		<!-- 签证导航 -->
		<div class="vl-nav">
			<ul class="vn-u">
				<li class="vu-l vua-cur">全部签证</li>
				<li class="vu-l">亚洲签证</li>
				<li class="vu-l">欧洲签证</li>
				<li class="vu-l">北美签证</li>
				<li class="vu-l">南美签证</li>
				<li class="vu-l">大洋签证</li>
				<li class="vu-l">非洲签证</li>
			</ul>
		</div>
		<!-- 签证轮播 -->
		<div class="Visa_banner">
			<div class="Visa_banner_content">
				<div class="v-banner">
					<div class="swiper-container gallery-top ">
						<div class="swiper-wrapper">
							<div class="swiper-slide Visaimg" v-for="(item,index) in vbanner" :key="index">
								<img :src="item.vbannerimg" />
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<div class="swiper-container gallery-thumbs ">
						<div class="swiper-wrapper">
							<div class="swiper-slide gallery-thumbsslide" v-for="(item,index) in vbanner" :key="index">
								<router-link :to="{name:'/Thread_VisaDetail',params:{Visabannerid:item.Visabannerid}}">
									<img :src="item.vaterimg" class="v-avter" />
									<div class="gallery-thumbsslidetxt">
										<p class="vbdl-t">
											<a>
												<img src="../../../assets/images/qiongyou/vheader.png" class="v-headerimg" /> {{item.vbannertitle}}</a>
										</p>
										<p class="vbdl-d">
											<a>{{item.vbannerdsc}}</a>
										</p>
									</div>
								</router-link>
							</div>

						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div><!-- v-banner -->

				<div class="vb-side">
					<p class="vbsq-p">
						<router-link to="" class="vbsq-t">穷游签证</router-link>
						价格优惠<span class="vbsq-d">.</span>服务专业<span class="vbsq-d">.</span>高通过率
					</p>
					<ul class="vbsq-u">

						<router-link :to="{name:'/',params:{qianzhengid:item.qianzhengid}}" class="vbsula" v-for="(item,index) in qianzheng"
						 :key="index">
							<img :src="item.qianzhengimg" alt="">
							<span class="vbsuls">{{item.qianzhengcountry}}</span>
							<span class="vbsuls2"><b class="vbsulsb">¥<strong class="vbsunum xnum">{{item.qianzhengjiage}}</strong></b>起</span>
						</router-link>


					</ul>
					<router-link to="" class="vbsu-b"></router-link>
				</div>
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	import swiper from "swiper"
	import 'swiper/dist/css/swiper.css';
	export default {
		name: 'Thread_Visa',
		data() {
			return {
				vbanner: [],
				qianzheng: [],
				ruleForm: {
					searchinfo: ''
				},
				rules: {
					searchinfo: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}, ]
				},
			}
		},
		created() {
			this.buildvbanner();
			this.buildqianzheng();
		},
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				spaceBetween: 10,
				slidesPerView: 20,
				autoplay: true, //等同于以下设置
				noSwiping: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				direction: 'vertical',
			});
			var galleryTop = new swiper('.gallery-top', {
				direction: 'vertical',
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				autoplay: true, //等同于以下设置
				effect: 'fade',
				noSwiping: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

				thumbs: {
					swiper: galleryThumbs,
				},
			});

		},
		methods: {
			buildvbanner() {
				this.axios.get('/api/buildvbanner').then(res => {
					this.vbanner = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildqianzheng() {
				this.axios.get('/api/buildqianzheng').then(res => {
					this.qianzheng = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
				searchBtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.$rels.searchinfo.value
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
		},

		// watch: {
		// 	vbanner(newValue, oldValue) {
		// 		this.vb = document.getElementsByClassName('v-banner')
		// 		console.log(newValue, oldValue)
		// 	}
		// },
		components: {
			headers,
			swiper
		},
	}
</script>

<style lang="scss">
	.vl-nav{
		width: 980px;
		margin: 0 auto;
		position: relative;
		overflow: inherit;
		height: 55px;
		.vn-u{
			list-style: none;
			float: left;
			.vu-l{			
    padding: 0 12px;
    margin-right: 13px;
    color: #636363;
    font-size: 16px;
	float: left;
    line-height: 53px;
    cursor: default;
	width: 78px;
    cursor: pointer;
    text-align: center;
			}
		}
		}
		.vl-nav .vn-u .vu-l.vua-cur {
    border-bottom: 2px solid #10b041;
}
	// header
	.Visa_nav {
		padding: 20px 0;
		border-bottom: 1px solid #f5f5f5;
		width: 980px;
		margin: 0 auto;

		.v-h1 {
			float: left;
			font-size: 32px;
			line-height: 32px;
			color: #147850;
			vertical-align: middle;
			font-weight: 500;
		}

		.v-qz {
			display: inline-block;
			padding-left: 15px;
			font-size: 20px;
			margin-top: 5px;
			margin-left: 15px;
			color: #636363;
			vertical-align: text-top;
			line-height: 20px;
			border-left: 1px solid #e7e7e7;
		}

		.v-xfr {
			position: relative;
			width: 298px;
			height: 34px;
			line-height: 34px;
			float: right;
		}
		.iconss {
			position: absolute;
			top:8px;
			font-size: 15px;
			left: 15px;
			color: #10b041;
            font-weight: bold;
		}
	}
.Com_input /deep/ .el-input__inner {
		padding: 0 40px;
		color: #10b041;
	}
	 .Com_input::-webkit-input-placeholder{
            color:red;
        }
        .Com_input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:red;
        }
        .Com_input::-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:red;
        }
        .Com_input::-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:red;
        }
	.Visa_banner {
		padding: 34px 0;
		background-color: #f0f0f0;

		.Visa_banner_content {
			width: 980px;
			margin: 0 auto;
			overflow: hidden;

			.vb-side {
				position: relative;
				box-sizing: border-box;
				float: right;
				width: 300px;
				height: 200px;
				background-color: #fff;
				border: 1px solid #ececec;

				.vbsq-p {
					padding: 8px 0 8px 19px;
					color: #959595;
					font-size: 12px;
					border-bottom: 1px solid #ececec;

					.vbsq-t {
						margin-right: 13px;
						color: #323232;
						font-size: 18px;
					}
				}

				.vbsq-u {
					padding: 4px 2px 5px;
					width: 100%;

					.vbsula {
						display: inline-block;
						width: 58px;
						padding: 11px 19px 5px;

						.vbsuls {
							display: block;
							color: #323232;
							line-height: 21px;
							font-size: 12px;
						}

						.vbsuls2 {
							display: block;
							color: #959595;
							line-height: 12px;
							font-size: 13px;

							b {
								margin-right: 6px;
								color: #ff7466;
								font-size: 12px;
							}
						}

					}

				}

				.vbsu-b {

					position: absolute;
					width: 300px;
					height: 51px;
					left: 0px;
					bottom: 0;
					background: url(//common1.qyerstatic.com/bbs/old/images/list/qyqz1.png) no-repeat;
				}
			}

			//vb-side
			.v-banner {
				float: left;
				width: 648px;
				height: 200px;

				position: relative;

				.Visaimg {
					width: 300px !important;
					height: 200px;
					z-index: -1;
				}

				.gallery-thumbs {
					position: absolute;
					right: 0;
					top: 0;
					width: 347px;
					height: 200.6px;
					border: 1px solid #ececec;
					border-left: none;
					overflow: inherit;
					background-color: #fff;

					.gallery-thumbsslide {
						width: 348px;
						height: 58.6px !important;
						position: relative;



						.v-avter {
							position: absolute;
							width: 32px;
							height: 32px;
							left: -18px;
							display: none;
							top: 14px;
							border: 3px solid #fff;
							border-radius: 19px;
							z-index: 10000;
						}

						.gallery-thumbsslidetxt {
							float: right;
							width: 323px;
							height: 56.6px;
							margin-top: 7px;

							.vbdl-t {
								margin-bottom: 9px;
								font-size: 12px;


								a {
									color: #959595;
									font-size: 12px;

								}

								.v-headerimg {
									height: 16px;
									width: 16px;
									vertical-align: top;
									display: inline-block;
								}
							}

							.vbdl-d {
								font-size: 14px;
								line-height: 14px;

								a {
									position: relative;
									display: block;
									width: 320px;
									color: #636363;
									z-index: 2;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
								}

							}

						}
					}

				}
			}

		}
	}

	.gallery-thumbsslide.swiper-slide-thumb-active .vbdl-d a {
		color: #10b041 !important;

	}

	.vbdl-d a.hover {
		color: #10b041;
	}

	.gallery-thumbsslide.swiper-slide-thumb-active .v-avter {
		display: block !important;
	}

	.gallery-thumbsslide.swiper-slide-thumb-active .v-headerimg {
		display: none !important;
	}
</style>
