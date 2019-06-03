<template>
	<!-- 	穷游视频 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Q_video_top_nav">
			<router-link to="/Q_Video"></router-link>
		</div>
		<div class="Q_video">
			<swiper :options="sbs" ref="mySwiper" v-if="Vibanner.length>0">
				<swiper-slide v-for="(item,index) in Vibanner" :key='index'>
					<router-link :to="{path:'/', params:{Vibannerid:item.Vibannerid}}">
						<img :src="item.Vibannerimg">
					</router-link>
				</swiper-slide>
			</swiper>
			<div class="swiper-pagination  swiper-pagination-white"></div>
			<div class="swiper-button-next swiper-button-white"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
			<div class="Qvbanner_leftbg"></div>
			<div class="Qvbanner_rightbg"></div>

		</div>
		<div class="Q_video_wrapper">
			<h3 class="Q_videohottitile">
				<img src="//fes.qyerstatic.com/Fv20dWYafts8TYoKIQTUUvQ2ZZe7" width="24">热门精选</h3>
			<ul class="Q_videohotul">
				<li class="Q_videohotli" v-for="(item,index) in Qvideohotli" :key='index'>
					<router-link :to="{path:'Q_VideoDetail',params:{Q_VideoDetailid:item.Q_VideoDetailid}}" class='Q_videohota'>
						<img class="Q_videohotimg" :src="item.Q_Videoimg" alt='item.Q_Videotitle'>
						<p class="Q_videohottitle">{{item.Q_Videotitle}}</p>
						<p class="Q_videohottag">{{item.Q_Videopingdao}}</p>
					</router-link>
				</li>

			</ul>
			<div class="Q_videohotulline"></div>
		</div>
		<!-- 视频列表 美食 精选 摄影等 -->
		<div class="Q_videolist" v-for="(item,index) in Qvideolist" :key='index'>
			<div class="Q_videolistcontent" v-for="(item,index) in item.Qvideolistcon" :key='index'>
				<h4 class="Q_videolistcontent_title"><span></span>{{item.Qvideolisttitle}}</h4>
				<div v-for="(item,index) in item.Qvideolistconqy" :key='index'>
				<div class="Q_videolistcontent_qy">
					<router-link to="" class="content_qyfr">全部 <i class="el-icon-arrow-right"></i></router-link>
					<router-link :to="{path:'Q_VideoDetail',params:{Q_VideoDetailid:item.Q_VideoDetailid}}">
						<img :src="item.Qvideolistconavter" width="48" height="48"></router-link>
					<div>
						<router-link :to="{path:'Q_VideoDetail',params:{Q_VideoDetailid:item.Q_VideoDetailid}}" class="Q_videolistcontenta">
							<span class="Q_videolistcontent_qtitle">{{item.Qvideolistcontitle}}</span><span class="Q_videolistcontent_qtext">{{item.Qvideolistcondsc}}</span></router-link>
					</div>
				</div>
				<ul class="Q_videolistcontent_qyul">
					<li v-for="(item,index) in item.Qvideolistconli" :key='index'>
						<router-link :to="{path:'Q_VideoDetail',params:{Q_VideoDetailid:item.Q_VideoDetailid}}">
							<div class="hotimg_oTePe">
								<img :src="item.Qvideolistconliimg">
								<span class="datetime">{{item.Qvideolistconlilong}}</span></div>
							<span class="text">{{item.Qvideolistconlidsc}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../web/compoents/header_two.vue'
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: 'Q_Play',
		data() {
			return {
				Vibanner: [],
				Qvideohotli: [],
				Qvideolist:[],
				sbs: {
					initialSlide: 1,
					watchSlidesProgress: true,
					loop: true,
					preloadImages: false, //不加载所有图片
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					lazy: {
						loadPrevNext: true,
					},
					lazyLoading: true, //懒加载开启
					// autoplay: {
					// 	delay: 3000,
					// 	stopOnLastSlide: false,
					// 	disableOnInteraction: false,
					// },
					autoplayDisableOnInteraction: true,
					slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
					centeredSlides: true //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

				}
			}
		},
		created() {
			this.buildVibanner();
			this.buildQvideohotli();
			this.buildQvideolist();

		},

		methods: {
			buildVibanner() {
				this.axios.get('/api/buildVibanner').then(res => {
					this.Vibanner = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildQvideohotli() {
				this.axios.get('/api/buildQvideohotli').then(res => {
					this.Qvideohotli = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildQvideolist(){
					this.axios.get('/api/buildQvideolist').then(res => {
					this.Qvideolist = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			}
		},
		components: {
			headers,
			swiper,
			swiperSlide
		},
	}
</script>

<style lang="scss">
	.Q_videolist {
		width: 980px;
		margin: 25px auto;

		.Q_videolistcontent {
			border-bottom: solid 1px rgba(0, 0, 0, 0.1);
			overflow: hidden;

			.Q_videolistcontent_title {
				font-size: 22px;
				padding: 28px 0 25px;
				font-weight: 500;
				color: #323232;

				span {
					display: inline-block;
					width: 6px;
					background: #09C78D;
					height: 22px;
					vertical-align: -3px;
					margin-right: 10px;
				}
			}

			.Q_videolistcontent_qy {
				font-size: 14px;
				margin-bottom: 20px;
				overflow: hidden;
				padding-top: 10px;

				.content_qyfr {
					float: right;
					color: rgba(0, 0, 0, 0.6);
					padding-top: 26px;
				}

				img {
					float: left;
					margin-right: 16px;
					border-radius: 50%;
				}

				.Q_videolistcontenta.Q_videolistcontent_qtitle {
					color: #333;
					font-weight: bold;
				}

				.Q_videolistcontent_qtitle {
					display: block;
					font-size: 18px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 25px;
					margin-bottom: 5px;
					color: #323232;
				}

				.Q_videolistcontent_qtext {
					color: rgba(0, 0, 0, 0.5);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 18px;
					width: 870px;
				}
			}

			.Q_videolistcontent_qyul {

				overflow: hidden;
				margin-left: -20px;
				padding-bottom: 16px;

				li {
					float: left;
					width: 230px;
					overflow: hidden;
					margin-left: 20px;

					.hotimg_oTePe {
						height: 130px;
						overflow: hidden;
						width: 100%;
						margin-bottom: 8px;
						position: relative;

						img {
							width: 100%;
							height: 100%;
						}

						.datetime {
							position: absolute;
							bottom: 10px;
							right: 10px;
							background: rgba(0, 0, 0, .7);
							color: rgba(255, 255, 255, .8);
							padding: 0 5px;
							font-size: 14px;
						}
					}

					.text {
						color: #323232;
						height: 48px;
						font-size: 16px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
				}
			}

			.Q_videolistcontent_qyul li:hover .text {
				color: #09C78D;
			}
		}

	}

	.Q_video_top_nav {
		background: url(https://fes.qyerstatic.com/FlY6GAbfIoId5UFnavBZe85YdWrp?imageslim) no-repeat 20px center #fff;
		background-size: 185px auto;
		height: 46px;

		a {
			display: block;
			width: 174px;
			height: 46px;
		}
	}

	.Q_video {
		width: 100%;
		height: 320px;
		overflow: hidden;
		position: relative;

		.swiper-slide {
			width: 980px;
			height: 320px;
			overflow: hidden;
		}

		.swiper-slide img {
			background: #000000;
		}

		.swiper-slide-active img {
			margin-top: 0;
			width: 100%;
			height: 100%;
			opacity: 1;

		}

		img {
			display: block;
			margin: 0 auto;
			width: 100%;
			height: 100%;
			vertical-align: middle;
			-webkit-transition: all 1s ease 0s;
			-moz-transition: all 1s ease 0s;
			-ms-transition: all 1s ease 0s;
			-o-transition: all 1s ease 0s;
			transition: all 1s ease 0s;
		}

		.swiper-button-next {
			position: absolute;
			top: 50%;
			width: 27px;
			height: 44px;
			margin-top: -22px;
			z-index: 10;
			right: 25%;
			cursor: pointer;
			background-size: 20px 30px;
			background-position: center;
			background-repeat: no-repeat;
		}

		.swiper-button-prev {
			position: absolute;
			top: 50%;
			width: 27px;
			height: 44px;
			margin-top: -22px;
			z-index: 10;
			left: 25%;

			cursor: pointer;
			background-size: 20px 30px;
			background-position: center;
			background-repeat: no-repeat;
		}

		.swiper-pagination {
			left: 49%;
			bottom: 20px;

			.swiper-pagination-bullet+.swiper-pagination-bullet {
				margin-left: 5px;
			}
		}

		.Qvbanner_leftbg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			z-index: 100;
			height: 320px;
			background: #000;
			opacity: 0.3;
			left: -50%;
			margin-left: -490px;
		}

		.Qvbanner_rightbg {

			position: absolute;
			right: 0;
			top: 0;
			width: 100%;
			z-index: 100;
			height: 320px;
			background: #000;
			opacity: 0.3;
			left: 50%;
			margin-left: 490px;
		}
	}

	.Q_video_wrapper {
		width: 980px;
		height: auto;
		overflow: hidden;
		margin: 0 auto;

		.Q_videohottitile {
			font-size: 22px;
			padding: 50px 0 20px 0;
			font-weight: 500;
			color: #323232;

			img {
				vertical-align: -4px;
				margin-right: 10px;
			}
		}

		.Q_videohotul {
			margin-left: -19px;
			overflow: hidden;
			padding-bottom: 23px;
			list-style: none;

			li {
				float: left;
				width: 314px;
				overflow: hidden;
				margin-left: 19px;
				font-size: 16px;

				.Q_videohotimg {
					height: 176px;
					overflow: hidden;
					width: 100%;
					margin-bottom: 8px;
					position: relative;
				}

				.Q_videohottitle {
					color: rgba(0, 0, 0, 0.9);
					font-size: 15px;
					height: 48px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}

				.Q_videohottag {
					padding-top: 12px;
					color: rgba(0, 0, 0, 0.5);
					overflow: hidden;
					text-overflow: ellipsis;

					white-space: nowrap;
					height: 22px;
				}

			}

			.Q_videohota:hover .Q_videohottitle {
				color: #09C78D;
			}
		}

		.Q_videohotulline {
			height: 1px;
			font-size: 1px;
			width: 980px;
			background: rgba(0, 0, 0, 0.1);
			clear: both;
		}

	}
</style>
