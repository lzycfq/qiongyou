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
				<li class="Q_videohotli">
					<router-link to='' class='Q_videohota'>
						<img class="Q_videohotimg" src="http://pic.lvmama.com/uploads/pc/place2/2019-02-26/d89840b8-1b12-4ea7-854c-69f089781454_300_200.jpg">
						<p class="Q_videohottitle">又是一年毕业季，教你如何用小视频记录这段难忘时光</p>
						<p class="Q_videohottag">摄影养成邪会</p>
					</router-link>
				</li>

			</ul>
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
				sbs: {
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					loop: true,
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
					},
					autoplayDisableOnInteraction: false,
					slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
					centeredSlides: true, //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

				}
			}
		},
		created() {
			this.buildVibanner();

		},

		methods: {
			buildVibanner() {
				this.axios.get('/api/buildVibanner').then(res => {
					this.Vibanner = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},

		},
		components: {
			headers,
			swiper,
			swiperSlide
		},
	}
</script>

<style lang="scss">
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
			li{
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
.Q_videohottitle{
  color: rgba(0,0,0,0.9);
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
    color: rgba(0,0,0,0.5);
    overflow: hidden;
    text-overflow: ellipsis;
   
    white-space: nowrap;
    height: 22px;
}

			}
			.Q_videohota:hover .Q_videohottitle{
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
			width: 62%;
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
			right: 310px;
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
			left: 310px;
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
			width: 19%;
			z-index: 100;
			height: 320px;
			background: #000;
			opacity: 0.3
		}

		.Qvbanner_rightbg {

			position: absolute;
			right: 0;
			top: 0;
			width: 19%;
			z-index: 100;
			height: 320px;
			background: #000;
			opacity: 0.3
		}
	}
</style>
