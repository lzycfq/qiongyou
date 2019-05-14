<template>
	<el-col :span="24">
		<app-header></app-header>
	     <!-- 	首页轮播 -->
		<div class="swiper-container mobile-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in moblieswiper" :key="index"><img :src="item.tweenimg" width="100%"></div>
				</swiper>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<!-- 商品展示-1 -->
		<div class="mb_home" v-for="(item,index) in product">
			<ul class="ul clearfix">
				<li v-for="(item,index) in item.layoutproduct">
					<router-link :to="{ name:'Product_list', params: { id: item.id }}">
						<figure><img :src="item.productimg"></figure>
						<p>{{item.producttitle}}</p>
					</router-link>
				</li>
			</ul>
			<div class="H_pic" v-for="(item,index) in item.pic">
				<router-link :to="{ name:'Detail', params: { id: item.id}}"><img :src="item.picimg" width="100%"></router-link>
			</div>
		</div>
		<!-- 商品展示-2 -->
		<div class="mb_home_1">
			<ul class="ul clearfix">
				<li v-for="(item,index) in producttwo">
					<router-link :to="{ name:'Detail', params: { id: item.id}}">
						<figure><img :src="item.producttwoimg" width="100%"></figure>
						<p>{{item.producttwotitle}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</el-col>
</template>
<style lang="scss">
	// swiper
	.swiper-pagination .my_mobile_bullet {
		margin: 0 5px;
		height: 12px;
		overflow: hidden;
		width: 12px;
		cursor: pointer;
		display: inline-block;
		zoom: 1;
		line-height: 100px;
		background: #f3e9e6;
		border-radius: 50%;
	}

	.swiper-pagination .my_mobile_active {
		width: 9px;
		position: relative;
		top: 1.5%;
		height: 9px;
		background: none;
		border: 2px solid #f3e9e6;
	}

	.mb_home ul {
		margin: 1% 0;
		overflow: hidden;

		li {
			float: left;
			list-style: none;
			width: 33%;
			border-top: 1px solid #d6d6d6;
			border-right: 1px solid #d6d6d6;
			text-align: center;
			padding: 5% 0 0;
			margin-top: -1px;

			figure {
				width: 80%;
				margin: 0 auto;

				img {
					max-width: 50%;
					max-height: 82px;
				}
			}

			p {
				color: #333333;
				margin: 12% auto;
			}
		}
	}

	.mb_home_1 ul {
		margin: 1% 0;
		overflow: hidden;

		li {
			float: left;
			list-style: none;
			width: 49.8%;
			border-top: 1px solid #d6d6d6;
			border-right: 1px solid #d6d6d6;
			text-align: center;
			padding: 5% 0 0;
			margin-top: -1px;

			figure {
				width: 80%;
				margin: 0 auto;

				img {
					max-width: 50%;
					max-height: 82px;
				}
			}

			p {
				color: #333333;
				margin: 12% auto;
			}
		}
	}

	.mb_home ul li:nth-child(3n) {
		border-right: 0;
	}

	.mb_home_1 ul li:nth-child(2n) {
		border-right: 0;
	}
</style>
<script>
	import 'swiper/dist/css/swiper.css';
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	import Header from '../../pages/mobile/components/header.vue';

	export default {
		name: 'index',
		data() {
			return {
				nbnavbar: false,
				clickproduct: false,
				clickfuwu: false,
				clickliyi: false,
				clickg: false,
				clickz: false,
				clickr: false,
				mbsearchform: {
					searchcontent: ''
				},
				mbsearchformrul: {
					searchcontent: [{
							required: true,
							message: '请输入搜索内容',
							trigger: 'blur'
						},

					]
				},
				// 				moblieswiper: {
				// 					speed: 1000,
				// 					effect: 'fade',
				// 					autoplay: true,
				// 					observer: true, //修改swiper自己或子元素时，自动初始化swiper
				// 					observeParents: true, //修改swiper的父元素时，自动初始化swiper
				// 					pagination: '.swiper-pagination',
				// 					paginationClickable: true,
				// 					preventLinksPropagation: false, // 阻止点击事件冒泡
				// 				},
				moblieswiper: [],
				product: [],
				producttwo: [],
				navbarjson: []

			}
		},

		created() {
			this.buildmoblieswiper();
			this.buildproduct();
			this.buildproducttwo();
			this.buildnavbarjson();
		},
		mounted() {
			var mySwiper = new Swiper('.mobile-swiper', {
				speed: 1000,
				effect: 'fade',
				autoplay: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				pagination: '.swiper-pagination',
				paginationClickable: true,
				bulletClass: 'my_mobile_bullet',
				bulletActiveClass: 'my_mobile_active',
			})
		},
		methods: {
			buildmoblieswiper() {
				this.axios.get('/api/moblieswiper').then(res => {
					this.moblieswiper = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildproduct() {
				this.axios.get('/api/buildlayoutproduct').then(res => {
					this.product = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildproducttwo() {
				this.axios.get('/api/buildproducttwo').then(res => {
					console.log(res)
					this.producttwo = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildnavbarjson() {
				this.axios.get('/api/buildnavbarjson').then(res => {
					console.log(res)
					this.navbarjson = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},
			mbsearch(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchcontent': this.$rels.searchcontent.value
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

			clickproduct(index) {
				this.clickproduct = false;
			},
			clickfuwu(index) {
				this.clickfuwu = false;
			},
			clickliyi(index) {
				this.clickliyi = false;
			},
			clickg(index) {
				this.clickg = false;
			},
			clickz(index) {
				this.clickz = false;
			},
			clickr(index) {
				this.clickr = false;
			},
			opennav(index) {
				this.nbnavbar = true
			},
			navclose(index) {
				this.nbnavbar = false
			},

		},
		components: {
			swiper,
			swiperSlide,
			'app-header': Header,


		},
	}
</script>
