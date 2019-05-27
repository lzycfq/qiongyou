<template>
	<!-- 签证 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Visa_banner">
			<div class="Visa_banner_content">
				<div class="v-banner">
					<div class="swiper-container gallery-top"  >
						<div class="swiper-wrapper">
							<div class="swiper-slide Visaimg" v-for="(item,index) in vbanner" :key="index">
								<img :src="item.vbannerimg" />
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<div class="swiper-container gallery-thumbs" >
						<div class="swiper-wrapper">
							<div class="swiper-slide gallery-thumbsslide" v-for="(item,index) in vbanner" :key="index">
								<img :src="item.vaterimg" class="v-avter" />
								<div class="gallery-thumbsslidetxt">
									<p class="vbdl-t">
										<router-link to="">{{item.vbannertitle}}</router-link>
									</p>
									<p class="vbdl-d">
										<router-link to="">{{item.vbannerdsc}}</router-link>
									</p>
								</div>
							</div>

						</div>
						<div class="swiper-pagination"></div>
					</div>
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
            vbanner:[],
			}
		},
		created(){
			this.buildvbanner();
		},
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				spaceBetween: 10,
				slidesPerView:20,
				autoplay: true, //等同于以下设置
			    noSwiping: true,
				
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				direction: 'vertical',
			});
			var galleryTop = new swiper('.gallery-top', {
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
				this.axios.get('/api/buildvbanner').then(res=>{
					this.vbanner=res.data.data
				}).catch(function(error){
					console.log(orror)
				})
			}
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
	.Visa_banner {
		padding: 34px 0;
		background-color: #f0f0f0;

		.Visa_banner_content {
			width: 980px;
			margin: 0 auto;
			overflow: hidden;

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
					margin: -200px 0 0 300px;
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
							
							top: 14px;
							border: 3px solid #fff;
							border-radius: 19px;
							z-index: 10000;
						}

						.gallery-thumbsslidetxt {
							float: right;
							width: 320px;
							height: 56.6px;
						    margin-top: 7px;

							.vbdl-t {
								margin-bottom: 9px;
								font-size: 12px;
								

								a {
									color: #959595;
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
.gallery-thumbsslide.swiper-slide-thumb-active .vbdl-d a{
	color: #10b041 !important;
	
}
	.vbdl-d a.hover {
		color: #10b041;
	}
	.gallery-thumbs .swiper-slide-thumb-active {
    
    }

</style>
