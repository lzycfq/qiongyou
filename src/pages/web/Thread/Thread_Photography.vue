<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="bbs_ind_title" style="padding-bottom:20px;">
			<div class="bbs_box_auto" v-for="(item,index) in bbsbox" :key="index">
				<!-- 内容 -->

				<!-- 标题 -->
				<strong class="titles fontYaHei">{{item.bbsboxtitle}}</strong>
				<!-- 版主 -->
				<div class="admins">
					<dl>
						<dt class="fontYaHei">版主</dt>
						<dd v-for="(item,index) in item.bbsboxbanzhu" :key="index">
							<router-link to=""><img :src="item.bbsboximg" width="32" height="32" alt="item.bbsboxname"><span class="xbannername">{{item.bbsboxname}}</span>
								<span class="xlistAuthWrap"></span>
							</router-link>
						</dd>

					</dl>

				</div>
				<div style="clear: both;"></div>
				<div class="clearfix divPt30 x-tdn">
					<!-- 文本 -->
					<div class="texts">{{item.bbsboxdsc}}<a href="http://www.qyer.com/htmlpages/bbsguide.html" target="_blank"
						 data-bn-ipg="bbs-board-guide">
							<font color="darkgreen">{{item.bbsboxzhina}}</font>
						</a></div>
					<!-- 按钮 -->
					<div class="buttons">
						<!-- 发新帖 -->
						<div class="ui_btn_bigA">
							<el-dropdown placement="bottom">
								<span class="ui_btn_bigA">
									发新帖 <i class="el-icon-caret-bottom"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>
										<router-Link to="" style="color: #636363;">游记</router-Link>
									</el-dropdown-item>
									<el-dropdown-item>
										<router-Link to="" style="color: #636363;">攻略</router-Link>
									</el-dropdown-item>
									<el-dropdown-item>
										<router-Link to="" style="color: #636363;">讨论</router-Link>
									</el-dropdown-item>

								</el-dropdown-menu>
							</el-dropdown>
						</div>
						<!-- 提问题 -->
						<router-link to="" class="ui_btn_big js-open-ask-layer">提问题</router-link>
					</div>

				</div>

			</div>

		</div>
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
					<!-- 			<li class="bankuai_questionli" :class="type_indexbankuai===index?'active':''" @click="typeIndexbankuai(index)"
					 v-for="(value,index) in bankuai_question" :key="index">{{value}}</li> -->
					<li class="bankuai_questionli" :class="{ active: ison}" @click="_huxingtab()">主版块</li>
					<li class="bankuai_questionli" :class="{ active: !ison}" @click="_huxingtab()">提问</li>

				</ul>
				<div class="Pho_question_searchs">
					<el-autocomplete v-model="state" rel="statevalue" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
					</el-autocomplete>
					<i class="el-icon-search Pho_el-icon-search" @click="searchBtn()"></i>
				</div>
			</div>

			<div style="clear: both;"></div>
			<div class="" v-show="ison">
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
							<el-option v-for="item in sort" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="Pho_question_list">
					<li class="Pho_question_listli" v-for="(item,index) in Phoquestion.slice((currentPage-1)*pagesize,currentPage*pagesize)"
					 :key='index'>
						<a class="question_listliavter"><img :src="item.Phoquestionlistavter" alt="item.Phoquestionlisttitle"></a>
						<div class="cntquest">
							<dl class="cntdl">
								<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailid:item.PhotographyDetailid}}"
								 class="question_listliimg"><img :src="item.Phoquestionlistimg" /></router-link>
								<dt class="Pho_title">
									<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailid:item.PhotographyDetailid}}"
									 class="type" style="position: relative;">{{item.typetitle}}</router-link>
									<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailid:item.PhotographyDetailid}}"
									 class="txt" target="_blank" style="position: relative;">{{item.Phoquestionlisttitle}}</router-link>
									<span class="rtop" title="必读" v-if="item.type===1">必读</span><span class="plan" v-if="item.type===2">行程单</span><span
									 class="titlerate" v-if="item.type===3">
										<el-rate v-model="item.ratevalue" void-icon-class="weixuanzhong" score-template="{value}">
										</el-rate>精华
									</span>
								</dt>
								<dt class="Pho_data">
									<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailid:item.PhotographyDetailid}}">{{item.Phoquestionlistzuozhe}}</router-link>
									<span><i class="el-icon-date Pho_icon"></i>{{item.Phoquestionlistchufa}}</span>
									<span><i class="el-icon-view Pho_icon"></i>{{item.Phoquestionlistchakan}}</span>
									<span><img src="../../../assets/images/qiongyou/huifu.png" class="Pho_icon">{{item.Phoquestionlistdianzan}}</span>
									<span><img src='../../../assets/images/qiongyou/dianzan.png' class="Pho_icon" style="vertical-align: -2px;">{{item.Phoquestionlisthuifu}}</span>
									<span>最后回复{{item.PhoquestionlastTime}}</span>
								</dt>
								<dd class="text">{{item.Phoquestionlisttxt}}</dd>
							</dl>
						</div>
					</li>
					<el-pagination class="Visa_elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
					 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
					 layout="total, sizes, prev, pager, next, jumper,slot" background :total="Phoquestion.length">
					</el-pagination>
				</div>
			</div><!-- //ison -->
			<div class="" v-show='!ison'>
				<div class="Pho_recs">
					<br />
					<div class="tag-list">
						<a class="likes" v-for="(value,index) in taglist" :key="index" :class="type_indexbiaoqians===index?'active':''"
						 @click="typeIndexbiaoqians(index)">{{value}}</a>
					</div>
					<div class="x-searchtag-wrap">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="mini">
							<el-form-item prop="searchinfo">
								<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入筛选内容"></el-input>
								<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
							</el-form-item>
						</el-form>
					</div>
					<div class="Pho_question_list">
						<li class="Pho_question_listli" v-for="(item,index) in Phoquestions.slice((currentPage-1)*pagesize,currentPage*pagesize)"
						 :key='index'>
							<a class="question_listliavter"><img :src="item.Phoquestionlistavters" alt="item.Phoquestionlisttitles"></a>
							<div class="cntquest">
								<dl class="cntdl">
									<a class="question_listlihuida">2个答案 <span>回答</span></a>
									<dt class="Pho_title">

										<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailsid:item.PhotographyDetailsid}}"
										 class="txt" target="_blank" style="position: relative;">{{item.Phoquestionlisttitles}}</router-link>

									</dt>
									<dt class="Pho_data">
										<router-link :to="{path:'/Thread_PhotographyDetail',params:{PhotographyDetailid:item.PhotographyDetailsid}}">{{item.Phoquestionlistzuozhes}}</router-link>
										<span style="margin-left: 15px;">发表于{{item.PhoquestionlastTimes}}</span>
									</dt>
									<dd class="text">{{item.Phoquestionlisttxts}}</dd>
								</dl>
							</div>
						</li>
						<el-pagination class="Visa_elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
						 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
						 layout="total, sizes, prev, pager, next, jumper,slot" background :total="Phoquestions.length">
						</el-pagination>
					</div>
				</div>
			</div><!-- !ison -->
		</div>
	 <transition name="el-fade-in-linear">
		<div class="Pho_FixedNav" v-if="btnFlag">
			<div class="Pho_FixedNav_a">
				<router-link to="" class="Pho_FixedNav_acontent active">主版块</router-link>
				<router-link to="" class="Pho_FixedNav_acontent">提问</router-link>

			</div>
			<div class="Pho_FixedNavbutton">

				<el-dropdown placement="bottom">
					<span class="xintie">
						发新贴<i class="el-icon-caret-bottom"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<router-Link to="" style="color: #636363;">游记</router-Link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-Link to="" style="color: #636363;">攻略</router-Link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-Link to="" style="color: #636363;">讨论</router-Link>
						</el-dropdown-item>

					</el-dropdown-menu>
				</el-dropdown>
				<router-link to="" class="wenti">提问题</router-link>

			</div>

			<div class="Pho_FixedNav_from">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>
				</el-form>
			</div>
		</div>
			 </transition>
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
				currentPage: 1, //初始页
				pagesize: 12, //每页的数据
				Phobanner: [],
				ison: true,
				biaoqian: ['精华', '游记', '攻略', '讨论'],
				taglist: ['全部问题', '0回答'],
				type_indexbiaoqian: -1,
				type_indexbiaoqians: -1,

				restaurants: [],
				Phoquestion: [],
				Phoquestions: [],
				bbsbox: [],
				state: '',
				timeout: null,
				search_params: {},
				ratevalue: 3.5,
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
				sbvalue: '按时间回复排序',
				btnFlag: false,

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
			window.addEventListener('scroll', this.scrollToTop);

		},

		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		created() {
			this.buildPhobanner();
			this.buildPhoquestion();
			this.buildPhoquestions();
			this.buildbbsbox();
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
			buildPhoquestion() {
				this.axios.get('/api/buildPhoquestion' //, {
					// 						params: {
					// 							sortvalue: this.sbvalue,
					// 							search_params: this.search_params
					// 						}
					// 					}
					// 
				).then(res => {
					this.Phoquestion = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			// 按时间回复和发帖时间排序以及板块列表请求数据
			buildPhoquestions() {
				this.axios.get('/api/buildPhoquestions' //, {
					// 						params: {
					// 							search_params: this.search_params,

					// 						}
					// 					}
					// 
				).then(res => {
					this.Phoquestions = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			buildbbsbox() {
				this.axios.get('/api/buildbbsbox' //, {
					// 						params: {
					// 							search_params: this.search_params,

					// 						}
					// 					}
					// 
				).then(res => {
					this.bbsbox = res.data.data
				}).catch(function(orr) {
					console.log(orr)
				})
			},
			// 板块和提问切换
			_huxingtab() {
				this.ison == true ? this.ison = false : this.ison = true;
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
			clicksort(index) {

				this.buildPhoquestion();
			},

			typeIndexbiaoqian(index) {
				this.type_indexbiaoqian = index
				this.search_params['type'] = this.biaoqian[index]
				this.buildPhoquestion();
			},
			typeIndexbiaoqians(index) {
				this.type_indexbiaoqians = index
				this.search_params['type'] = this.taglist[index]
				this.buildPhoquestions();
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
			},
			// 为了计算距离顶部的高度，当高度大于100显示回顶部图标，小于100则隐藏
			scrollToTop() {

				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 320) {
					that.btnFlag = true
				} else {
					that.btnFlag = false
				}
			},
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Pho_FixedNav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		z-index: 1002;

		background: #F5F5F5;

		.Pho_FixedNav_a {
			float: left;

			.Pho_FixedNav_acontent {
				display: block;
				line-height: 50px;
				padding: 0 45px;
				float: left;
				font-size: 16px;
				color: #636363;
			}

			.Pho_FixedNav_acontent.active {
				line-height: 46px;
				padding-top: 2px;
				color: #147850;
				border-bottom: 2px #147850 solid;
			}

			.Pho_FixedNav_acontent:hover {
				color: #147850;
				text-decoration: none;
			}
		}

		.Pho_FixedNav_from {
			float: right;
			width: 232px;
			margin-top: 6px;
			position: relative;

			.iconss {
				position: absolute;
				right: 10px;
				top: 9px;
			}
		}

		.Pho_FixedNavbutton {
			float: right;
			width: 244px;
			margin-left: 25px;

			.xintie {
				background-color: #1995dd;
				color: white;
				width: 122px;
				height: 50px;
				float: left;
				text-align: center;
				line-height: 50px;
				display: inline-block
			}

			.wenti {
				background-color: #3f9f5f;
				color: white;
				width: 122px;
				height: 50px;
				float: right;
				line-height: 50px;
				text-align: center;
				display: inline-block
			}
		}
	}

	.Pho_recs {
		height: auto;
		overflow: hidden;
		border-bottom: 1px #ececec solid;

		.tag-list {
			max-width: 688px;
			display: inline-block;
			overflow: hidden;
			height: 26px;
			float: left;
			vertical-align: middle;

			.likes {
				color: #959595;
				margin-right: 30px;
				float: left;
				position: relative;
				top: 5px;
			}

			.likes.active {
				color: #10A251;
			}
		}
	}

	.bbs_ind_title {
		margin-top: 25px;
		padding: 0 0 40px;
		position: relative;
		z-index: 50;

		.bbs_box_auto {
			width: 980px;
			margin: 0 auto;

			.titles {
				float: left;
				font-size: 36px;
				color: #147850;
				line-height: 38px;
				max-width: 680px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.admins {
				float: right;
				height: 32px;

				dl {
					line-height: 32px;

					dt {
						width: 54px;
						float: left;
						font-size: 18px;
						color: #636363;
					}

					dd {
						height: 32px;
						padding-right: 10px;
						float: left;

						img {
							float: left;
							border-radius: 50%;
							width: 32px;
							height: 32px;
							margin-right: 10px;
						}

						.xbannername {
							float: left;
							max-width: 103px;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #636363;
							white-space: nowrap;
						}

						.xlistAuthWrap {
							position: relative;
							display: inline-block;

							width: 18px;
						}

						.xlistAuthimg {
							float: right;
							width: 16px;
							height: 16px;
							margin: 8px 0 0 1px;

						}
					}
				}
			}

			.divPt30 {
				padding-top: 30px;
				overflow: hidden;

				.texts {
					width: 680px;
					float: left;
					line-height: 18px;
					color: #959595;

					a {
						color: #10b041;
					}
				}

				.buttons {
					float: right;

					.ui_btn_bigA {
						float: left;
						text-align: center;
						width: 134px;
						height: 36px;
						line-height: 36px;
						position: relative;
						color: white;
						font-size: 16px;
						background-color: #1995dd;
					}

					.ui_btn_big {
						float: left;
						width: 134px;
						height: 36px;
						line-height: 36px;
						margin-left: 20px;
						text-align: center;
						font-size: 16px;
					}

					.ui_btn_big {
						background-color: #3f9f5f;
					}
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
				right: 10px;
				top: 8px;
				font-size: 18px;
			}

			.Pho_question_searchs {
				/deep/.el-input__inner {
					width: 230px !important;
				}
			}

		}

		.Pho_question_searchs {
			/deep/.el-input__inner {
				width: 230px !important;
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

		.Pho_recsort {
			width: 135px;
			height: 24px;
			float: right;

		}
	}

	.Pho_recsort {
		/deep/ .el-input__inner {
			height: 28px;

			font-size: 12px;
		}
	}

	.Pho_question_list {
		width: 980px;
		margin: 0 auto;
		position: relative;
		top: 10px;
		clear: both;

		.Pho_question_listli {
			overflow: hidden;
			padding-left: 70px;
			position: relative;
			list-style: none;
			border-bottom: 1px #ECECEC solid;

			.cntquest {
				border-bottom: 1px solid #ececec;
				padding: 20px 0 30px;
				position: relative;
				zoom: 1;

				.cntdl {
					.Pho_title {
						font-size: 16px;
						line-height: 26px;

						.type {
							color: #10b041;
							background: #fff;
							border: 1px solid #10b041;
							border-radius: 2px;
							height: 18px;
							line-height: 18px;
							float: left;
							font-size: 12px;
							padding: 0 6px;
							margin: 4px 5px 0 0;
						}

						//type
						.txt {

							color: #323232;
							position: relative;
							bottom: -1px;
							font-weight: 600;
							margin-right: 2px;
						}

						//TXT
						.rtop {
							margin-right: 2px;
							color: #fff;
							line-height: 16px;
							display: inline-block;
							font-size: 12px;
							height: 16px;
							border: 1px solid #30c9ea;
							background: #30c9ea;
							border-radius: 2px;
							padding: 0 2px;
						}

						.plan {
							margin-right: 2px;
							color: #fff;
							background: #82d1af;
							line-height: 16px;
							display: inline-block;
							font-size: 12px;
							padding: 0 2px;
							height: 16px;
							border: 1px solid #82d1af;
							border-radius: 2px;
						}

						.titlerate {
							background: #ff8c7d;
							border: 1px solid #ff8c7d;
							border-radius: 2px;
							padding: 1px 5px;
							color: white;
							font-size: 12px;

							.el-rate {
								display: inherit;
							}

							.el-icon-star-on {
								color: white !important;
								font-size: 11px !important;
								margin-right: 1px !important;
							}

							.weixuanzhong {
								display: none;
							}
						}
					}

					//Pho_title
					.Pho_data {
						margin-top: 10px;
						color: #959595;
						height: 26px;

						a {
							color: #636363;
							font-weight: 500;
							font-size: 12px;
							font-family: Hiragino Sans GB, 宋体, sans-serif;
						}

						span {
							vertical-align: -2px;
							margin-right: 10px;
							font-size: 13px;

							.Pho_icon {
								margin-right: 8px;
							}
						}

					}

					//Pho_data
					.text {
						color: #636363;
						word-break: break-all;
						margin-top: 10px;
						font-size: 14px;
						line-height: 24px;
						max-height: 48px;
						overflow: hidden;
					}
				}

				//cntdl
				.question_listliimg {
					margin-top: 6px;
					float: right;
					width: 160px;
					margin-left: 20px;

					img {

						width: 160px;
						height: 120px;
					}
				}

				.question_listlihuida {
					position: absolute;
					right: 10px;
					top: 55px;
					font-size: 12px;
					color: #636363;

					span {
						display: inline-block;
						color: #fff;
						margin-left: 5px;
						padding: 3px 15px 3px 15px;
						border-radius: 3px;
						background: #3f9f5f;
					}
				}

				//question_listliavter
			}

			//cntquest
			.question_listliavter {
				float: left;

				margin: 25px 0 0 -70px;

				img {
					width: 48px;
					height: 48px;
					display: block;
					border-radius: 50%;
				}
			}

			//question_listliavter
		}

		.Visa_elpaination {
			margin-top: 25px;
			margin-bottom: 25px;
			float: right;
		}

		.Visa_elpaination.is-background .el-pager li.active {
			background: #5ea67c !important;
			border-radius: 3px;
			font-weight: 700;
			color: #fff;
		}

	}
</style>
