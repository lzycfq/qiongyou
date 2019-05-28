<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Pho_bannerbg">
			<div class="Pho_banner">
				<div class="swiper-container gallery-top ">
					<div class="swiper-wrapper">
						<div class="swiper-slide Pho_Visaimg" v-for="(item,index) in Phobanner" :key="index">
							<router-link :to="{path:'/Thread_PhotographyDetail',params:{Photographyid:item.Photography}}">
								<img :src="item.Phobannerimg" alt="item.Phobannertxt" width="680px" height="400px" />
							</router-link>
						</div>
					</div>
				</div>
				<div class="swiper-container gallery-thumbs Pho_gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide Pho_gallery-thumbsslide" v-for="(item,index) in Phobanner" :key="index">
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
				<div class="Pho_question_searchs">
					<el-autocomplete v-model="state" rel="statevalue" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
					</el-autocomplete>
					<i class="el-icon-search Pho_el-icon-search" @click="searchBtn()"></i>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div class="Pho_rec">
				<div class="rec clearfix">
					<span class="recspan" v-for="(value,index) in biaoqian" :key='index' :class="type_indexbiaoqian===index?'active':''"
					 @click="typeIndexbiaoqian(index)">{{value}}</span>
				</div>
				<div class="x-searchtag-wrap">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="mini">
						<el-form-item prop="searchinfo">
							<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入筛选内容"></el-input>
							<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
						</el-form-item>
					</el-form>
				</div>
				<div class="Pho_recsort">
					<el-select v-model="sbvalue" placeholder="请选择" @change="clicksort(index)">
						<el-option v-for="item in sort" :key="item.value" :label="item.label" :value="item.value" >
						</el-option>
					</el-select>
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
		name: 'Thread_Photography',
		data() {

			return {
				Phobanner: [],
				bankuai_question: ['主版块', '问答'],
				biaoqian: ['精华', '游记', '攻略', '讨论'],
				type_indexbankuai: 0,
				type_indexbiaoqian: -1,
				restaurants: [],
				state: '',
				timeout: null,
				search_params:{},
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
				sort: [{
					value: '1',
					label: '按时间回复排序'
				}, {
					value: '2',
					label: '按发帖时间排序'
				}],
				sbvalue:'按时间回复排序'
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
			//输入框初始化
			this.restaurants = this.questionsearchs();

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
			// 输入框数据
			questionsearchs() {
				this.axios.get('/api/buildrestaurants').then(res => {
					this.restaurants = res.data.data
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			//下拉框搜索提交
			searchBtn() {
				this.axios.get('', {
					params: {
						statevalue: this.state
					}
				}).then(res => {
					// this.restaurants = res.data.data
					this.$router.push({
						name: '',
					}); //params:{ id:'1'}
				}).catch(function(orror) {
					console.log(orror)
				})
			},
			searchBtn(formName) {

				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.ruleForm.searchinfo
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
			// 按时间回复和发帖时间排序以及板块列表请求数据
			buildPhoquestion(){
				this.axios.get('/api/buildPhoquestion',
				{
					params:{
						sortvalue:this.sbvalue,
						search_params:this.search_params
					}
				}
				
				).then(res=>{
					this.Phoquestion=res.data.data
				}).catch(function(orr){
					console.log(orr)
				})
				},
			clicksort(index){
				
				this.buildPhoquestion();
			},
			typeIndexbankuai(index) {
				this.type_indexbankuai = index
				this.search_params['type']=this.bankuai_question[index]
				this.buildPhoquestion();

			},
			typeIndexbiaoqian(index) {
				this.type_indexbiaoqian = index
				this.search_params['type']=this.biaoqian[index]
				this.buildPhoquestion();
			},
			// 输入框自动提示
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			}
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Pho_question {
		width: 980px;
		margin: 0 auto;
		position: relative;

		.Pho_question_title {
			border-bottom: 1px solid #ECECEC;
			height: 49px;
			width: 980px;
			margin-top: 35px;

			.bankuai_question {
				list-style: none;

				.bankuai_questionli {
					float: left;
					font-size: 18px;
					margin-right: 5px;
					line-height: 50px;
					padding: 0 45px;
					color: #636363;
					position: relative;
					bottom: 2px;
				}

				.bankuai_questionli.active {
					color: #147850;

					border-bottom: 2px #147850 solid;
				}

				.bankuai_questionli:hover {
					color: #147850;

				}
			}
		}

		.Pho_question_searchs {
			float: right;
			width: 232px;
			position: relative;

			.Pho_el-icon-search {
				position: absolute;
				right: 40px;
				top: 8px;
				font-size: 18px;
			}
		}

		.Pho_rec {
			width: 980px;
			margin: 10px auto;

			.rec {
				width: 216px;
				height: 26px;
				float: left;
				line-height: 26px;

				.recspan {
					color: #959595;
					margin-right: 30px;
					float: left;
					font-size: 12px;
				}

				.recspan.active {
					color: #10A251;
				}
			}
		
		}

		.x-searchtag-wrap {
			width: 150px;
			height: 26px;
			line-height: 26px;
			padding: 0 10px;
			font-size: 12px;
			float: left;
			position: relative;

			.iconss {
				position: absolute;
				right: 10px;
				top: 9px;
			}
		}
		.Pho_recsort{
			    width: 135px;
    height: 24px;
	float: right;
	margin-right: 34px;
			}
	}
.Pho_recsort{
	/deep/ .el-input__inner{
		height: 28px;
		
		font-size: 12px;
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
						top: 0px;
						border: 4px solid #fff;
						border-radius: 50%;
						z-index: 1000;
					}

					.xauthimg24 {
						position: absolute;
						left: 4px;
						bottom: 0;
						display: none;
						width: 20px !important;
						height: 20px !important;
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

	.Pho_gallery-thumbsslide.swiper-slide-thumb-active .gallery-thumbsslidetxt {
		background: #F5F5F5;
		border-right: 3px #10A251 solid;
	}

	.Pho_gallery-thumbsslide.swiper-slide-thumb-active .vbdl-t {
		margin-left: 15px !important;
	}

	.Pho_gallery-thumbsslide.swiper-slide-thumb-active .xauthimg24 {
		display: block !important;
	}
</style>
