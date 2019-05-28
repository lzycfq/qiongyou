<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Pho_bannerbg">
			<div class="Pho_banner">
				<div class="swiper-container gallery-top " >
					<div class="swiper-wrapper">
						<div class="swiper-slide Pho_Visaimg" v-for="(item,index) in Phobanner" :key="index" >
							<router-link :to="{path:'/Thread_PhotographyDetail',params:{Photographyid:item.Photography}}">
								<img :src="item.Phobannerimg" alt="item.Phobannertxt"  width="680px" height="400px"/>
							</router-link>
						</div>
					</div>
				</div>
				<div class="swiper-container gallery-thumbs Pho_gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide Pho_gallery-thumbsslide" v-for="(item,index) in Phobanner" :key="index" >
							<router-link :to="{path:'/Thread_PhotographyDetail',params:{Photographyid:item.Photography}}">
								<img :src="item.Phobanneravter" class="v-avter" alt="item.Phobannertxt" />
								<img class="xauthimg24" src="//common1.qyerstatic.com/bbs/old/images/authentication_u.png" data-title="穷游资深精华作者">
								<div class="gallery-thumbsslidetxt">
									<p class="vbdl-t">
										<a>{{item.Phobannertxt}}</a>
									</p>
								</div>
							</router-link>
						</div>

					</div>
					
				</div>
			</div>
		</div>
		<!-- 轮播结束 -->
		<div class="Pho_question">
			<div class="Pho_question_title">
			<ul class="bankuai_question">
				<li class="bankuai_questionli" :class="type_indexbankuai===index?'active':''" @click="typeIndexbankuai(index)"
				 v-for="(value,index) in bankuai_question" :key="index">{{value}}</li>
			</ul>
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	import swiper from "swiper"
	import 'swiper/dist/css/swiper.css';
	export default {
		name: 'Thread_Photography',
		data() {

			return {
				Phobanner: [],
				bankuai_question:['主版块','问答'],
				type_indexbankuai:0,
			}
		},
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				spaceBetween: 10,
				slidesPerView: 'auto',
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
				slidesPerView: 'auto',
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
		created() {
			this.buildPhobanner();
		},
		methods: {
			buildPhobanner() {
				this.axios.get('/api/buildPhobanner').then(res => {
					this.Phobanner = res.data.data
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			typeIndexbankuai(index){
				this.type_indexbankuai=index
			}
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Pho_question{
    width: 980px;
    margin: 0 auto;
	position: relative;
	.Pho_question_title{
		border-bottom: 1px solid #ECECEC;
		height: 49px;
		width: 980px;
		margin-top: 35px;
		.bankuai_question{
			list-style: none;
			.bankuai_questionli{
				  float: left;
				  font-size: 18px;
    margin-right: 5px;
    line-height: 50px;
    padding: 0 45px;
    color: #636363;
position: relative;
    bottom: 2px;
			}
			.bankuai_questionli.active{
				color:#147850;
				
				border-bottom: 2px #147850 solid;
			}
.bankuai_questionli:hover{
	color:#147850;

}
		}
	}
	}
	.Pho_bannerbg {
		background-color: #f5f5f5;
		box-shadow: inset 0 0 1px #e5e5e5;
		border-top: 1px solid #e5e5e5;
		border-bottom: none;
		padding: 40px 0;

		.Pho_banner {
			width: 980px;
			height: 400px;
			zoom: 1;
			margin: 0 auto;
			position: relative;
			overflow: hidden;
			//vb-side


			.Pho_Visaimg {
				width: 680px !important;
				
				z-index: -1;
                overflow: hidden;
				
			}

			.gallery-thumbs {
				position: absolute;
				right: 0;
				top: 0;
				width: 299px;
				height: 400px;
				border: 1px solid #ececec;
				border-left: none;
				overflow: initial;
				background-color: #fff;
				

				.Pho_gallery-thumbsslide {
					width: 299px;
					height: 49px !important;
					position: relative;
					border-bottom: 1px solid #ececec;
					border-right: 1px solid #ececec;
					margin-bottom: 0px !important;

					.v-avter {
						position: absolute;
						width: 42px;
						height: 42px;
						left: -20px;
						display: none;
						top:0px;
						border: 4px solid #fff;
						border-radius:50%;
						z-index: 1000;
					}
                    .xauthimg24{
						position: absolute;
						left: 4px;
						bottom: 0;
						display: none;
					    width: 20px!important;
                        height: 20px!important;
						z-index: 1001;

						
}
					.gallery-thumbsslidetxt {
						float: right;
						width: 299px;
						height: 49px;
					
						.vbdl-t {							
							line-height: 49px;
							    padding: 0px 5px 10px 25px;
							a {
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								display: inline-block;
								width: 100%;
								color: #424242;
								font-size: 16px;

							}

							.v-headerimg {
								height: 16px;
								width: 16px;
								vertical-align: top;
								display: inline-block;
							}
						}

					}
				}


			}
		}
	}
	.Pho_gallery-thumbsslide.swiper-slide-thumb-active .v-avter {
		display: block !important;
	}
	.Pho_gallery-thumbsslide.swiper-slide-thumb-active .gallery-thumbsslidetxt{
		background: #F5F5F5;
		border-right: 3px #10A251 solid;
	}
		.Pho_gallery-thumbsslide.swiper-slide-thumb-active .vbdl-t {
			margin-left: 15px !important;
		}
		.Pho_gallery-thumbsslide.swiper-slide-thumb-active .xauthimg24{
			display: block !important;
		}
</style>
