<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="mguide_breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>庶民价格品米其林餐厅京都篇</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- mguide-wrap -->
		<div class="mguide-wrap">
			<div class="mguide-wrap-left">
				<div class="detail-imgWrap">
					<img src="http://s2.lvjs.com.cn/uploads/pc/place2/2017-12-05/dea1b6c2-2e4b-4065-8e7a-72381fe7badc.jpg" />
					<img src="//static.qyer.com/models/project/mguide/images/mguideDetail/watermark.png" class="imgWrap">
				</div>
				<div class="mguide-avatar">
					<img src="//pics.lvjs.com.cn//uploads/pc/place2/2017-01-18/e2b8fa16-2259-4006-8e59-b351225dce0f_300_200.jpg" width="120px" height="120px" />
					<p align="center" class="mguide-time">中午十二点</p>
				</div>
				<div class="detail-wrap">
					<h1 class="detail-h1">庶民价格品米其林餐厅京都篇</h1>
					<div class="mguide-like">
						<a><img src="../../../assets/images/qiongyou/love-2.png" style="float: left;margin-left: 15px;"><span style="float: right;color: #333333;font-size: 16px;margin-right: 15px;">喜欢
								1639</span></a>
					</div>
					<div class="detail-content">
						京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，且在日本食评网站tabelog上也有较好排名，适合游客前往的代表餐厅收入于此微锦囊，供各位穷游er参考。当然，这里也给出一些提示：光顾锦囊里的餐厅，除特别注明外请提前预约；绝大部分怀石料理、割烹料理是由店家根据当季食材搭配不同价位套餐，无单点菜单。价位越高的套餐包含的料理道数更多，食材更高级，所谓“一分价钱一分货”；一些怀石料理、割烹料理店会在中午时段供应便当或“简化”的套餐，在保障餐厅水准的前提下，给出了很有性价比的套餐价格；不少餐厅在菜单定价之外有10%左右的服务费。
					</div>
					<br />
					<br />
				</div>
				<ul class="poiList">
					<li class="mguide-list">
						<div class="list-title">
							<div class="title-left">
								<h2 class="title-detail">
									<span class="title-icon">1</span>
									<router-link to='/'>菊乃井(总店)</router-link>
								</h2>
								<p class="title-tag">
									<router-link to='/' class="title">日本京都</router-link>
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
								<div class="swiper-slide"><img src="../../../assets/images/LP.jpg" width="100%"></div>
								<div class="swiper-slide"><img src="../../../assets/images/LP.jpg" width="100%"></div>

							</div>
							<!-- Add Arrows -->
							<div class="swiper-button-next swiper-button-white"></div>
							<div class="swiper-button-prev swiper-button-white"></div>
						</div>
						<div class="swiper-container gallery-thumbs">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="../../../assets/images/LP.jpg" width="100%"></div>
								<div class="swiper-slide"><img src="../../../assets/images/LP.jpg" width="100%"></div>
							</div>
						</div>

					</li>
				</ul>
			</div>
		</div>
	</el-col>
</template>
<style lang="scss">
	 .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }

	
</style>
<script>
	import 'swiper/dist/css/swiper.css';
    import swiper from "swiper"
	
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'Destination_strategy',
		data() {
			return {}
		},
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				spaceBetween: 10,
				slidesPerView: 4,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new swiper('.gallery-top', {
				spaceBetween: 10,
				
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: galleryThumbs,
			
			});

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
