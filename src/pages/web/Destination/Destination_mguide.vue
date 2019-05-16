<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div v-for="(item,index) in mguide" :key='index'>
		<div class="mguide_breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">目的地</el-breadcrumb-item>
				<el-breadcrumb-item>{{item.mguidename}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- mguide-wrap -->
		<div class="mguide-wrap">
			<div class="mguide-wrap-left">
				<div class="detail-imgWrap">
					<img :src="item.mguideimg"  width="100%" />
					<img src="//static.qyer.com/models/project/mguide/images/mguideDetail/watermark.png" class="imgWrap">
				</div>
				<div class="mguide-avatar">
					<img :src="item.mguideavter" width="120px"
					 height="120px" />
					<p align="center" class="mguide-time">{{item.mguidetime}}</p>
				</div>
				<div class="detail-wrap">
					<h1 class="detail-h1">{{item.mguidename}}</h1>
					<div class="mguide-like">
						<a><img src="../../../assets/images/qiongyou/love-2.png" style="float: left;margin-left: 15px;"><span style="float: right;color: #333333;font-size: 16px;margin-right: 15px;">喜欢
								{{item.mguidepinglun}}</span></a>
					</div>
					<div class="detail-content">
                     {{item.mguidetxt}}
					<br />
					<br />
				</div>
				<ul class="poiList">
					<li class="mguide-list" v-for="(item,index) in item.mguidelist" :key="index">
						<div class="list-title">
							<div class="title-left">
								<h2 class="title-detail">
									<span class="title-icon">{{index+1}}</span>
									<router-link to='/'>{{item.mguidedianming}}</router-link>
								</h2>
								<p class="title-tag">
									<router-link to='/' class="title">{{item.mguidedidian}}</router-link>
									<router-link to='/' class="mguideDetail">
										查看目的地详情 <i class="el-icon-arrow-right"></i>
									</router-link>
								</p>
							</div>
							<div class="title-right">
								<a><img src="../../../assets/images/qiongyou/love_1.png" /></a>
								<a><img src="../../../assets/images/qiongyou/date.png" /></a>
							</div>
						</div>
						<div class="swiper-container gallery-top">
							<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in item.mguidebanner"><img :src="item.mguidebannerimg" width="100%"></div>
							
						</div>

						<div class="swiper-container gallery-thumbs">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(item,index) in item.mguidebanner"><img :src="item.mguidebannerimg" width="100%"></div>

							</div>
							</div>

						</div>
						<div style="clear: both;"></div>
						<div class="slider-intro">
						<p class="stars">
							<em>推荐星级：</em>
							<el-rate v-model="item.mguiderate" disabled show-score score-template="{value}"></el-rate>
							<router-link to="" style="color: #0073b6;float: left;margin-top: 2px;">{{item.mguidedianping}}条点评</router-link>
						</p>
						<div class="detailc">
                         {{item.mguidedetailc}}
						</div>
						<div class="handler">
							<a  class="praise jspoicommentuseful">有用{{item.mguideyouyong}}</a>
							<a  id="getComment" class="comment js_commentreply commentDisabled">回复</a>
						</div>
						<br />
                        </div>			
					</li>
				</ul>
			</div>
		
		</div>
			<div class="mguide-involve">
			<h2 class="xianguang">
				相关微锦囊
			</h2>
			<li v-for="(item,index) in item.mguideinvolve">
					<router-link to="">
						<img :src="item.mguideinvolveimg" class="themeImg">
						<span class="title2">{{item.mguideinvolvetitle}}</span>
						<em class="avatar">
							<img :src="item.mguideinvolveavter">
		                  {{item.mguideinvolvename}}
						</em>
		            </router-link>
		        </li>
		</div>
		</div>
		</div>
	</el-col>
</template>
<style lang="scss">
	.mguide-involve{
		width: 245px;
		float: right;
		.xianguang{
	font-size: 18px;
    color: #636363;
    height: 35px;
	font-weight: 500;}
	 li {
    margin-bottom: 30px;
	list-style: none;
	a {
    display: block;
    height: 80px;
    overflow: hidden;
    position: relative;
	.themeImg {
    float: left;
    display: block;
    width: 80px;
    height: 80px;
    margin-right: 20px;
}
 .title2 {
    display: block;
    min-height: 27px;
    max-height: 38px;
    line-height: 20px;
    color: #323232;
    font-size: 14px;
    margin-top: -3px;
    margin-left: 100px;
    overflow: hidden;
}
 .avatar {
    height: 32px;
    display: block;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #636363;
    margin-top: 10px;
	 img {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;

}
}

}
		}
	}
	.swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.gallery-top {
		height: 360px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.gallery-thumbs {
		height: 60px;

padding:10px 20px 0px 20px;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: black;
		opacity: 0.6;

	}

	.gallery-thumbs .swiper-slide {

		opacity: 0.4;
	}

	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
		border: box-sizing;


	}
	.slider-intro{
		    padding: 22px 29px 20px 29px;
    border: solid 1px #ececec;
    border-top: none;
	
	.stars{
		color: #959595;
    font-size: 12px;
    height: 26px;
    overflow: hidden;
    vertical-align: top;
    margin-top: 10px;
	}
.stars .el-rate{
	margin-top: 2px;
	width: 150px;float: left;
}
	.stars .el-icon-star-on {
		color: #28b76c !important;
	}

	.stars em {
		float: left;
		height: 26px;
		line-height: 24px;
		margin-right: 15px;
	}
	.detailc{
		font-size: 18px;
    color: #636363;
    line-height: 30px;
    margin-top: 10px;
	}
	}
	.slider-intro .praise {
    float: right;
    padding: 0 10px 0 24px;
    color: #147850;
    font-size: 12px;
    background-color: #e0f1df;
    background-image: url(https://mguide.qyerstatic.com/project/images/mguideDetail/icons.png);
    background-repeat: no-repeat;
    background-position: -280px -207px;
    margin: 0 0 0 20px;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    border-radius: 3px;
}
.slider-intro .commentDisabled {
    padding-left: 19px;
    float: right;
    font-size: 12px;
    background: url(https://mguide.qyerstatic.com/project/images/mguideDetail/icons.png) no-repeat -286px -170px;
    margin: 4px 0 0 20px;
    display: inline-block;
    color: #959595;
    text-decoration: none;
}
</style>
<script>
	import 'swiper/dist/css/swiper.css';
	import swiper from "swiper"

	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'Destination_strategy',
		data() {
			return {
				value: "3.5",
				mguide:[],
				
			}
		},
			
		created(){
			this.buildmguide();
		},
		
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				spaceBetween: 10,
				slidesPerView: 10,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,

			});
			var galleryTop = new swiper('.gallery-top', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs
				}

			});

		},
		methods: {
			buildmguide() {
				this.axios.get('/api/buildmguide').then(res => {
					this.mguide = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			}
		},
		components: {
			headers,
			swiper,

		},
	}
</script>

<style lang="scss">
	.mguide-wrap {
		width: 980px;
		margin: 0 auto;
		height: auto;

		.mguide-wrap-left {
			width: 680px;
			float: left;
			position: relative;
			height: auto;


			.detail-imgWrap {
				width: 100%;
				position: relative;
				height: 360px;
				overflow: hidden;

				.imgWrap {
					position: absolute;
					left: 50%;
					top: 50%;
					margin: -42px 0 0 -219px;
					width: 438px;
					height: 85px;
					z-index: 10;
				}
			}

			.mguide-avatar {
				text-align: center;
				position: absolute;
				width: 180px;
				height: 160px;
				left: 50%;
				top: 360px;
				margin: -64px 0 0px -90px;
				z-index: 2;
				clear: both;

				img {
					border-radius: 50%;
					border: 4px #f5f5f5 solid;
				}
			}

			.mguide-time {
				line-height: 40px;
				color: #999999;
				font-weight: 500;
				font-size: 12px;
			}

			.detail-wrap {
				border: solid 1px #ececec;
				border-top: solid 1px transparent;

				h1 {
					font-size: 40px;
					text-align: center;
					color: #000;
					margin: 110px 29px 0px 29px;
					font-weight: 700;
				}

			}

			//detail-wrap
			.mguide-like {
				padding: 30px 0;
				text-align: center;

				a {
					display: inline-block;
					height: 34px;
					border: solid 1px #ededed;
					min-width: 163px;
					border-radius: 34px;
					cursor: pointer;
					background: #fff;
					line-height: 34px;

				}
			}

			//mguide-like
			.detail-content {
				padding: 44px 29px;
				font-size: 18px;
				color: #323232;
				line-height: 30px;
				position: relative;
			}

			.detail-content:before {
				width: 32px;
				height: 28px;
				background: url(https://mguide.qyerstatic.com/project/images/mguideDetail/icons.png) no-repeat left -572px;
				position: absolute;
				left: 30px;
				top: 3px;
				content: "";
			}

			.detail-content:after {
				width: 32px;
				height: 28px;
				background: url(https://mguide.qyerstatic.com/project/images/mguideDetail/icons.png) no-repeat -111px -572px;
				position: absolute;
				right: 30px;
				bottom: 0px;
				content: "";
			}

			.poiList {
				margin-top: 25px;
				list-style: none;
			}

			.mguide-list {
				overflow: hidden;
				margin-bottom: 10px;
				background: #fff;

				.list-title {
					height: 89px;
					overflow: hidden;
					border: solid 1px #ececec;
					border-bottom: none;

					.title-left {
						float: left;
						width: 450px;
						padding-left: 29px;
						height: 89px;

						.title-detail {
							font-size: 30px;
							color: #3f9f5f;
							height: 31px;
							line-height: 31px;
							margin-top: 18px;
							position: relative;

							span {
								font-size: 24px;
								color: #71b087;
								background: url(https://mguide.qyerstatic.com/project/images/mguideDetail/icons.png) no-repeat 0px -252px;
								padding-left: 25px;
								float: left;
								height: 32px;
								margin-right: 10px;
							}

							a {
								color: #3f9f5f;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								display: block;
								height: 36px;
								font-size: 30px;
								font-weight: 500;
							}

						}

						.title-tag {
							height: 20px;
							line-height: 20px;
							overflow: hidden;
							font-size: 12px;
							margin-top: 10px;

							.title {
								color: #959595;
								padding-left: 0px;
								float: left;
								max-width: 450px;
								text-decoration: none;
								cursor: text;
							}

							a {
								color: #0073b6;
								padding-left: 20px;
							}
						}


					}

					.title-right {
						float: right;
						width: 150px;
						padding-right: 0px;
						height: 89px;

						a {
							float: left;
							width: 60px;
							line-height: 119px;
							text-align: center;
						}
					}

				}

			}
		}
	}

	.mguide_breadcrumb {
		width: 980px;
		margin: 0 auto;
		padding: 25px;
	}
</style>
