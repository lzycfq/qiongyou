<template>
	<!-- 	特别策划 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Pl_header_title">
			<div class="header_title_img"></div>
		</div>

		<div class="pl_banner">
			<swiper :options="sbs" ref="mySwiper" v-if="plbanner.length>0">
				<swiper-slide v-for="(item,index) in plbanner" :key='index'>
					<router-link :to="{path:'/', params:{plbannerid:item.plbannerid}}">
						<img :src="item.plbannerimg">
					</router-link>
				</swiper-slide>
			</swiper>
			<div class="swiper-button-next swiper-button-white"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
		</div>
		<div class="pl_subject_set">
			<div class="subject_tab">
				<div class="subject_title">
					<span class="fl">专题</span>
					<div class="subject_title_right fl">
						<div class="subject_text1">SPECIAL</div>
						<div class="subject_text2">SUBJECT</div>
					</div>
				</div>
				<div class="subject_tab_list">
					<ul>
						<li id="subject_tab_listli" :class="type_indextablist===index?'active':''" @click="typeIndextablist(index)" v-for="(value,index) in tab_list"
						 :key="index">{{value.tablistname}}</li>
					</ul>
				</div>
			</div>
			<ul class="subject_cards_set">
				<li class="subject_cards_setli" v-for="(item,index) in cardssetli.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key='index'>
					<router-link :to="{path:'',params:{cardssetliid:item.cardssetliid}}" class="subject_card">
						<img :src="item.cardssetliimg" class="subject_card_img" alt="item.cardssetlititle">
						<div class="subject_card_footer">
							<div class="subject_card_words">{{item.cardssetlititle}}</div>
							<div class="subject_card_icon fl">
								<div class="code">
									<div class="qrcode_img"><img class="qcode" :src="item.cardssetliqude"></div>
									<div class="code_bg"></div>
								</div>
							</div>
						</div>

					</router-link>
				</li>
				
			</ul>
			<div style="clear: both;"></div>
			<el-pagination class="Q_play_paination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
			 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
			 layout="total, sizes, prev, pager, next, jumper,slot" background :total="cardssetli.length">
			</el-pagination>
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
				currentPage: 1, //初始页
				pagesize: 12, //每页的数据
				plbanner: [],
				type_indextablist: 0,
				tab_list: [],
				cardssetli:[],
				search_params:{},
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
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
				},
				autoplayDisableOnInteraction: true,
				slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
				centeredSlides: true //<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>

				}
			}
		},

		created() {
			this.buildplbanner();
			this.buildtablist();
			this.buildcardssetli();
		},

		methods: {
			buildplbanner() {
				this.axios.get('/api/buildplbanner').then(res => {
					this.plbanner = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildtablist() {
				this.axios.get('/api/buildtablist').then(res => {
					this.tab_list = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildcardssetli(){
				this.axios.get('/api/buildcardssetli'
				// ,{
				// 	params:{
				// 		'search_params'.this.search_params
				// 	}
				// }
				).then(res => {
					this.cardssetli = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function(size) {
				this.pagesize = size;
				console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页
			},
			typeIndextablist(index) {
				this.type_indextablist = index
				if (index > 0) {
					this.search_params['type'] = this.tab_list[index];
				} else {
					this.search_params['type'] = '';
				}
				this.buildcardssetli();
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
	.pl_subject_set {
		margin: 0 auto;
		margin-top: 45px;
		min-height: 100%;
		width: 1160px;

		.subject_tab {
			border: 1px solid #ededed;
			box-shadow: -5px 0 10px #f1f1f1, 5px 0 10px #f1f1f1, 0 -5px 10px #f1f1f1, 0 5px 10px #f1f1f1;
			margin-bottom: 33px;
			height: 70px;
			background: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/icon/bg.png) no-repeat;
			background-position: right 0;

			.subject_title {
				width: 137px;
				float: left;
				padding: 22px 22px 21px;
				background-color: #323232;

				span {
					letter-spacing: 2.9px;
					margin-left: 7px;
					margin-right: 6px;
					color: rgb(255, 255, 255);
					font: 700 25px/1 "HYQiHei DES", "Microsoft YaHei", 微软雅黑;
				}

				.fl {
					float: left !important;
				}

				.subject_text1,
				.subject_text2 {
					margin-top: 2px;
					letter-spacing: 0.6px;
					color: rgb(149, 149, 149);
					font: 700 12px/1 "HYQiHei DES", "Microsoft YaHei", 微软雅黑;
				}
			}

			.subject_tab_list {
				float: left;
				padding-top: 20px;

				#subject_tab_listli {
					margin-left: 30px;

					color: rgb(50, 50, 50);
					float: left;
					background-color: rgb(255, 255, 255);
					cursor: pointer;
					list-style: none;
					font: 700 16px/1 "HYQiHei DES", "Microsoft YaHei", 微软雅黑;
					padding: 8px 14px;
				}

				#subject_tab_listli.active {
					color: #fff;
					background-color: #10b041;
					padding: 8px 14px;
					border-radius: 20px;
				}

				#subject_tab_listli:hover {
					color: #fff;
					background-color: #10b041;
					padding: 8px 14px;
					border-radius: 20px;
				}
			}


		}

		.subject_cards_set {
			margin-top: 10px;
			padding: 0;
			margin-left: -21px;



			.subject_cards_setli {
				list-style: none;
				float: left;
				margin-left: 23px;
				width: 370px;

				.subject_card {
					display: inline-block;
					width: 370px;
					height: 320px;
					background-color: rgb(255, 255, 255);
					margin-bottom: 33px;
					box-shadow: rgb(241, 241, 241) -5px 0px 10px, rgb(241, 241, 241) 5px 0px 10px, rgb(241, 241, 241) 0px -5px 10px, rgb(241, 241, 241) 0px 5px 10px;
					color: rgb(50, 50, 50);
					transform: rotate(0deg) scale(1) skew(0deg) translate(0px);
					box-sizing: border-box;
					overflow: hidden;
					border-radius: 6px;
					font: 16px "HYQiHei DES", "Microsoft YaHei", 微软雅黑;
					transition: all 0.35s ease 0s;

					.subject_card_img {
						width: 100%;
						height: 233px;
					}

					.subject_card_footer {
						padding: 20px 0;
					}

					.subject_card.h5 .subject_card_words,
					.subject_card.web_h5 .subject_card_words {
						width: 275px;
					}



					.subject_card_words {
						float: left;
						font-size: 16px;
						letter-spacing: 0.6px;
						margin-left: 20px;
						margin-right: 15px;
						word-break: break-all;
						line-height: 22px;
						cursor: pointer;
					}
.fl{
	float: left !important;
}
					.subject_card_icon {
						width: 40px;
						float: left;

						height: 40px;
						position: relative;
						background: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/icon/bg.png) no-repeat;
						background-position: -60px -146px;
						cursor: pointer;

						.code {
							width: 370px;
							height: 249px;
							top: -257px;
							left: -295px;
							
							opacity:0;
							position: relative;
							transition: All .55s ease;
							-webkit-transition: All .55s ease;
							-moz-transition: All .55s ease;
							-o-transition: All .55s ease;

							.qrcode_img {
								width: 370px;
								height: 233px;

							}

							.qrcode_img:before {
								content: ' ';
								height: 233px;
								width: 100%;
								display: block;
								background-image: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/img/qrcode.png);
							}

							.qcode {
								position: absolute;
								width: 140px;
								height: 140px;
								left: 50%;
								margin-left: -70px;
								top: 27px;
							}

							.code_bg {
								width: 21px;
								height: 6px;
								background: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/icon/bg.png);
								background-position: -120px -146px;
								margin-left: 324px;
							}

						}

					}

				}
			}
			.subject_card:hover .subject_card_icon {
				background-position: 0 -146px;
			}
			
			.subject_card .subject_card_icon:hover .code {
				
				opacity: 1;
			}
			
			.qrcode_img:before {
				content: ' ';
				height: 233px;
				width: 100%;
				display: block;
				background-image: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/img/qrcode.png);
			}
			
			.subject_card:hover {
				box-shadow: -5px 0 20px #cfcfcf, 5px 0 20px #cfcfcf, 0 -5px 20px #cfcfcf, 0 5px 20px #cfcfcf;
				border: 1px solid\9;
			}
		}
.Q_play_paination{
	float: right !important;
	margin-bottom: 40px;
}
.Q_play_paination.is-background .el-pager li.active {
  background: #5ea67c!important;
    border-radius: 3px;
    font-weight: 700;
    color: #fff;
}
		
	}

	.Pl_header_title {
		width: 100%;
		height: 120px;
		background-color: #fff;

		.header_title_img {
			position: relative;
			margin: 0 auto;
			top: 50px;
			width: 275px;
			height: 36px;
			background: url(//common2.qyerstatic.com/advzt/project/web/pages/imgs/icon/bg.png) no-repeat;
			background-position: 0 -91px;
		}
	}

	.pl_banner {
		width: 100%;
		height: 400px;

		.swiper-slide {
			width: 73%;
			height: 400px;
			border-radius: 3px;
		}

		.swiper-slide img {
			opacity: 0.3;
		}

		.swiper-slide-active img {
			margin-top: 0;
			width: 100%;
			height: 100%;
			border-radius: 6px;
			opacity: 1;
			box-shadow: 0 0 15px 2px rgba(0, 0, 0, .1);
			z-index: 1;

		}

		img {
			display: block;
			margin: 0 auto;
			border-radius: 3px;
			width: 97.625%;
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
			right: 270px;
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
			left: 270px;
			cursor: pointer;
			background-size: 20px 30px;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
</style>
