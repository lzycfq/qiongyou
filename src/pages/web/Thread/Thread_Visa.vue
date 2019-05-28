<template>
	<!-- 签证 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Visa_nav">
			<h1 class="v-h1">穷游论坛</h1>
			<span class="v-qz">签证</span>
			<div class="v-xfr">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="small">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!-- 签证导航 -->
		<div class="vl-nav" v-for="(item,index) in qianzhengsb" :key='index'>
			<ul class="vn-u">
				<li class="vu-l vua-cur">全部签证</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							亚洲签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsbyz" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{yzqianzhengid:item.yzqianzhengid}}">{{item.yzqianzhengname}}签证
								</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							欧洲签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsboz" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{ozqianzhengid:item.ozqianzhengid}}">
									{{item.ozqianzhengname}}签证</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							北美签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsbbm" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{bmqianzhengid:item.bmqianzhengid}}">
									{{item.bmqianzhengname}}签证</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							南美签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsbnm" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{nmqianzhengid:item.nmqianzhengid}}">
									{{item.nmqianzhengname}}签证</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							大洋洲签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsbdy" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{dyqianzhengid:item.dyqianzhengid}}">
									{{item.dyqianzhengname}}签证</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
				<li class="vu-l">
					<el-dropdown placement="bottom">
						<span class="vu-l-span">
							非洲签证<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.qianzhengsbfz" :key='index'>
								<router-link style='color: #606266;' :to="{path:'/',params:{fzqianzhengid:item.fzqianzhengid}}">
									{{item.fzqianzhengname}}签证</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</li>
			</ul>
			<router-link to="" class="vn-pub"><i class="el-icon-edit-outline"></i>发新帖</router-link>
		</div>
		<!-- 签证轮播 -->
		<div style="clear: both;"></div>
		<div class="Visa_banner">
			<div class="Visa_banner_content">
				<div class="v-banner">
					<div class="swiper-container gallery-top ">
						<div class="swiper-wrapper">
							<div class="swiper-slide Visaimg" v-for="(item,index) in vbanner" :key="index">
								<img :src="item.vbannerimg" width="300px" height="200px" />
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<div class="swiper-container gallery-thumbs ">
						<div class="swiper-wrapper">
							<div class="swiper-slide gallery-thumbsslide" v-for="(item,index) in vbanner" :key="index">
								<router-link :to="{path:'/Thread_VisaDetail',params:{Visabannerid:item.Visabannerid}}">
									<img :src="item.vaterimg" class="v-avter" />
									<div class="gallery-thumbsslidetxt">
										<p class="vbdl-t">
											<a>
												<img src="../../../assets/images/qiongyou/vheader.png" class="v-headerimg" /> {{item.vbannertitle}}</a>
										</p>
										<p class="vbdl-d">
											<a>{{item.vbannerdsc}}</a>
										</p>
									</div>
								</router-link>
							</div>

						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div><!-- v-banner -->

				<div class="vb-side">
					<p class="vbsq-p">
						<router-link to="" class="vbsq-t">穷游签证</router-link>
						价格优惠<span class="vbsq-d">.</span>服务专业<span class="vbsq-d">.</span>高通过率
					</p>
					<ul class="vbsq-u">

						<router-link :to="{path:'/',params:{qianzhengid:item.qianzhengid}}" class="vbsula" v-for="(item,index) in qianzheng"
						 :key="index">
							<img :src="item.qianzhengimg" alt="">
							<span class="vbsuls">{{item.qianzhengcountry}}</span>
							<span class="vbsuls2"><b class="vbsulsb">¥<strong class="vbsunum xnum">{{item.qianzhengjiage}}</strong></b>起</span>
						</router-link>


					</ul>
					<router-link to="" class="vbsu-b"></router-link>
				</div>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="vw-nav">
			<ul class="vwu">
				<li class="vwl" :class="type_index===index?'active':''" @click="typeIndex(index)" v-for="(value,index) in vwu" :key="index">{{value}}</li>
			</ul>
			<div class="vwd">
				<span class="vwdb">版主</span>
				<span class="vwd-line">|</span>
				<ul class="vwdu">
					<li class="vwdl">
						<router-link to='' class="vwdl-a"><img src="https://pic.qyer.com/avatar/000/18/08/46/200?v=1427296208" class="vwdli"
							 alt="牧先生">牧先生</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="vc-tag">
			<div class="vcts">
				<a class="vct" v-for="(item,index) in countryqianzheng" :class="type_indexcountry===index?'active':''" @click="typeIndexcountry(index)"
				 :key="index">{{item.countryqianzhengname}}</a>
			</div>
			<div class="vctfrom">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="small">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_inputs" placeholder="请输入搜索内容"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>

				</el-form>
			</div>
			<div class="vcc">
				<div class="vccw"><input type="checkbox" name="name" value="1" rel="checkvalue" @click="typeIndexcountry(index)"
					 style="vertical-align: middle;"> 精华帖</div>
				<span class="vccs">|</span>
				<div class="zhhf">
					<el-dropdown>
						<span class="el-dropdown-link">
							最后回复排序<i class="el-icon-caret-bottom"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<!-- <el-dropdown-item>最后回复排序</el-dropdown-item>
    <el-dropdown-item>发帖时间排序</el-dropdown-item> -->
							<el-dropdown-item v-for="(value,index) in huifu" :key='index'>{{value.huifuname}}</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>

			</div>

		</div><!-- //vc -->
		<div class="Visa_lists">
			<li class="clearfix vwc-l" v-for="(item,index) in vwuquestion.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			 :key='index'>
				<!--运营管理checkbox-->
				<!-- 头像 -->
				<router-link :to="{path:'/Thread_VisaDetail',params: { vwuquestionid: item.vwuquestionid }}" class="face">
					<img :src="item.vwuquestionavter" width="48" height="48" alt="item.vwuquestionname">
				</router-link>
				<div class="cnt clearfix">
					<router-link :to="{path:'/Thread_VisaDetail',params:{vwuquestionid:item.vwuquestion}}" class="cnt_img" v-if="item.type===1">
						<img :src="item.vwuquestionimg" width="160" height="120" alt="item.vwuquestionname"></router-link>
					<dl class="cntdl clearfix">
						<!-- 标题类型 -->
						<dt class="title fontYaHei">
							<router-link :to="{path:'/Thread_VisaDetail',params:{vwuquestionid:item.vwuquestion}}" class="txt" target="_blank">{{item.vwuquestiontitle}}</router-link><span class="titlerate" v-if="item.type===3"><el-rate v-model="item.ratevalue" void-icon-class="weixuanzhong" score-template="{value}">
								</el-rate>精华
							</span>
						</dt>
						<!-- 数据数字 -->
						<dd class="data"><a>{{item.vwuquestionname}}</a>
							<span class="xlistAuthWrap">
							</span><span class="lbvcd xnum"><i class="lb vcdate"></i>{{item.vwuquestiontime}}</span><span class="lbvcl xnum"><i
								 class="lb vclook"></i>{{item.vwuquestionchakan}}</span><span class="lbvch xnum"><i class="lb vchf"></i>{{item.vwuquestionhuifu}}</span>
							<span class="lbvce xnum"><img src="../../../assets/images/qiongyou/dianzan.png" style="vertical-align: top;" />
								{{item.vwuquestiondianzan}}</span><span class="zdate">最后回复{{item.vwuquestionhuifitime}}前</span></dd>
						<!-- 内容 -->
						<dd class="textzdate">{{item.vwuquestiontxt}}</dd>
					</dl>
				</div>
			</li>
			<el-pagination class="Visa_elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
			 :current-page="currentPage" prev-text="上一页" next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
			 layout="total, sizes, prev, pager, next, jumper,slot" background :total="vwuquestion.length">
			</el-pagination>
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
				
				currentPage: 1, //初始页
				pagesize: 12, //每页的数据
				vbanner: [],
				qianzheng: [],
				qianzhengsb: [],
				countryqianzheng: [],
				vwuquestion: [],
				type_index: 0,
				type_indexcountry: 0,
				search_params: {},
				vwu: ['全部签证讨论', '问答'],
				huifu: [{
						huifuname: '最后回复排序'
					},
					{
						huifuname: '发帖时间排序'
					}
				],
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
			}
		},
		created() {
			this.buildvbanner();
			this.buildqianzheng();
			this.buildqianzhengsb();
			this.buildcountryqianzheng();
			this.buildvwuquestion();
		},
		mounted() {
			var galleryThumbs = new swiper('.gallery-thumbs', {
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
				spaceBetween: 10,
				slidesPerView: 20,
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
				this.axios.get('/api/buildvbanner').then(res => {
					this.vbanner = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildqianzheng() {
				this.axios.get('/api/buildqianzheng').then(res => {
					this.qianzheng = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildqianzhengsb() {
				this.axios.get('/api/buildqianzhengsb').then(res => {
					this.qianzhengsb = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildcountryqianzheng() {
				this.axios.get('/api/buildcountryqianzheng').then(res => {
					this.countryqianzheng = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildvwuquestion() {
				this.axios.get('/api/buildvwuquestion').then(res => {
					this.vwuquestion = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			searchBtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.$rels.searchinfo.value
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
			typeIndex(index) {
				this.type_index = index
				this.search_params['type'] = this.vwu[index]
				this.buildvwuquestion();
			},
			typeIndexcountry(index) {

				this.type_indexcountry = index
				this.search_params['type'] = this.countryqianzheng[index]
				let checkvalue = this.$refs.checkvalue.value //精华帖的值
				let fatievalue = this.huifu[index].huifuname
				this.buildvwuquestion();
			}
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
	.Visa_lists {
		width: 980px;
		margin: 0 auto;
	}

	.vwc-l {
		padding-left: 70px;

		zoom: 1;
		list-style: none;
		position: relative;

		.face {
			position: relative;
			float: left;
			margin: 25px 0 0 -70px;
			z-index: 2;

			img {
				width: 48px;
				height: 48px;
				display: block;
				border-radius: 50%;
			}
		}

		.vwc-l:hover {
			background: #f5f5f5;
			box-shadow: 20px 0 0 #f5f5f5, -20px 0 0 #f5f5f5;
		}
.titlerate {
	    background: #ff8c7d;
    border: 1px solid #ff8c7d;
    border-radius: 2px;
    padding: 0 5px;
	color:white;
	font-size:12px;
.el-rate{
display:inherit;
}
.el-icon-star-on{
	color:white !important;
	font-size:11px !important;
	margin-right:1px !important;
}
.weixuanzhong{
	display:none;
}
}

		//face
		.cnt {
			border-bottom: 1px solid #ececec;
			padding: 20px 0 30px;

			.cnt_img {
				float: right;
				width: 160px;
				margin-left: 20px;
			}

			.title {
				font-size: 16px;
				line-height: 26px;

				.txt {

					color: #323232;
					position: relative;
					z-index: 2;
					bottom: -1px;
					font-weight: 600;
				}

			}

			.data {
				margin-top: 10px;
				color: #959595;
				height: 18px;
				font-family: Hiragino Sans GB, 宋体, sans-serif;

				a {
					position: relative;
					z-index: 2;
					color: #636363;
					display: inline-block;
				}
			}

			.xnum {
				color: #636363;
			}

			.lb.vcdate {
				width: 13px;
				height: 13px;
				margin: 0 6px 0 16px;
				background-position: 0 -10px;
				vertical-align: 0px;
			}

			.lb {
				display: inline-block;
				background-image: url(//common1.qyerstatic.com/bbs/old/images/list/lbn.png);
				background-repeat: no-repeat;
			}

			.lb.vchf,
			.lb.vclook {
				height: 12px;
				vertical-align: -2px;
			}

			.lb.vclook {
				width: 16px;
				background-position: 0 -23px;
				margin: 0 6px 0 10px;
			}

			.lb.vchf {
				width: 12px;
				margin: 0 5px 0 8px;
				background-position: 0 -35px;
			}

			.bicf.vclike {
				width: 14px;
				height: 12px;
				margin-left: 4px;
				vertical-align: -5px;
				font-size: 22px;
			}

			.zdate {
				padding-left: 10px;
				color: #636363;
			}

			.textzdate {
				color: #636363;
				word-break: break-all;
				margin-top: 10px;
				font-size: 14px;
				line-height: 24px;
				max-height: 48px;
				overflow: hidden;
			}
		}
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

	.vw-nav {
		width: 980px;
		margin: 0 auto;
		line-height: 50px;
		height: 50px;
		border-bottom: 1px solid #ececec;

		.vwu {
			float: left;
			font-size: 18px;
			color: #959595;
			list-style: none;

			.vwl {
				float: left;
				padding: 0 18px;
				font-size: 18px;
				cursor: pointer;
			}

			.vwl:hover {
				color: #10b041;
				cursor: pointer;

			}

			.vwl.active {
				border-bottom: 2px solid #10b041;
				color: #10b041;

			}
		}

		.vwd {
			float: right;

			.vwd-line,
			.vwdb {
				float: left;
				font-size: 14px;
			}

			.vwd-line {
				color: silver;
				margin: 0 15px 0 13px;
			}

			.vwdl,
			.vwdu {
				list-style: none;
				float: left;

				.vwdl {
					margin-right: 20px;

					.vwdl-a {
						color: #959595;

						.vwdli {
							width: 24px;
							height: 24px;
							margin-right: 10px;
							border-radius: 12px;
							vertical-align: -7px;
						}
					}
				}
			}
		}

		// vc-tag xfix
		.vc-tag {
			margin-bottom: 6px;
		}
	}

	.vl-nav {
		width: 980px;
		margin: 0 auto;
		position: relative;
		overflow: inherit;
		height: 55px;

		.vn-u {
			list-style: none;
			float: left;

			.vu-l {
				padding: 0 12px;
				margin-right: 13px;
				color: #636363;
				font-size: 16px;
				float: left;
				line-height: 53px;
				cursor: default;

				cursor: pointer;
				text-align: center;

				.vu-l-span {
					font-size: 16px;
				}

			}
		}
	}

	.vn-pub {
		float: right;
		margin: 10px 0;
		padding: 9px 20px 9px 20px;
		font-size: 14px;
		line-height: 14px;
		color: #fff;
		background-color: #1995dd;
		border-radius: 3px;
	}

	.vl-nav .vn-u .vu-l.vua-cur {
		border-bottom: 2px solid #10b041;
	}

	// header
	.Visa_nav {
		padding: 20px 0;
		border-bottom: 1px solid #f5f5f5;
		width: 980px;
		margin: 0 auto;

		.v-h1 {
			float: left;
			font-size: 32px;
			line-height: 32px;
			color: #147850;
			vertical-align: middle;
			font-weight: 500;
		}

		.v-qz {
			display: inline-block;
			padding-left: 15px;
			font-size: 20px;
			margin-top: 5px;
			margin-left: 15px;
			color: #636363;
			vertical-align: text-top;
			line-height: 20px;
			border-left: 1px solid #e7e7e7;
		}

		.v-xfr {
			position: relative;
			width: 298px;
			height: 34px;
			line-height: 34px;
			float: right;
		}

		.iconss {
			position: absolute;
			top: 8px;
			font-size: 15px;
			left: 15px;
			color: #10b041;
			font-weight: bold;
		}
	}

	.Com_input /deep/ .el-input__inner {
		padding: 0 40px;
		color: #10b041;
	}

	.Com_inputs /deep/ .el-input__inner {
		padding: 0 20px;
		color: #10b041;
	}

	.Com_input::-webkit-input-placeholder {
		color: red;
	}

	.Com_input::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: red;
	}

	.Com_input::-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: red;
	}

	.Com_input::-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: red;
	}

	.Visa_banner {
		padding: 34px 0;
		background-color: #f0f0f0;

		.Visa_banner_content {
			width: 980px;
			margin: 0 auto;
			overflow: hidden;

			.vb-side {
				position: relative;
				box-sizing: border-box;
				float: right;
				width: 300px;
				height: 200px;
				background-color: #fff;
				border: 1px solid #ececec;

				.vbsq-p {
					padding: 8px 0 8px 19px;
					color: #959595;
					font-size: 12px;
					border-bottom: 1px solid #ececec;

					.vbsq-t {
						margin-right: 13px;
						color: #323232;
						font-size: 18px;
					}
				}

				.vbsq-u {
					padding: 4px 2px 5px;
					width: 100%;

					.vbsula {
						display: inline-block;
						width: 58px;
						padding: 11px 19px 5px;

						.vbsuls {
							display: block;
							color: #323232;
							line-height: 21px;
							font-size: 12px;
						}

						.vbsuls2 {
							display: block;
							color: #959595;
							line-height: 12px;
							font-size: 13px;

							b {
								margin-right: 6px;
								color: #ff7466;
								font-size: 12px;
							}
						}

					}

				}

				.vbsu-b {

					position: absolute;
					width: 300px;
					height: 51px;
					left: 0px;
					bottom: 0;
					background: url(//common1.qyerstatic.com/bbs/old/images/list/qyqz1.png) no-repeat;
				}
			}

			//vb-side
			.v-banner {
				float: left;
				width: 648px;
				height: 200px;

				position: relative;

				.Visaimg {
					width: 300px !important;
					height: 200px ;
					z-index: -1;
					
				}

				.gallery-thumbs {
					position: absolute;
					right: 0;
					top: 0;
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
							display: none;
							top: 14px;
							border: 3px solid #fff;
							border-radius: 19px;
							z-index: 10000;
						}

						.gallery-thumbsslidetxt {
							float: right;
							width: 323px;
							height: 56.6px;
							margin-top: 7px;

							.vbdl-t {
								margin-bottom: 9px;
								font-size: 12px;


								a {
									color: #959595;
									font-size: 12px;

								}

								.v-headerimg {
									height: 16px;
									width: 16px;
									vertical-align: top;
									display: inline-block;
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

	.gallery-thumbsslide.swiper-slide-thumb-active .vbdl-d a {
		color: #10b041 !important;

	}

	.vbdl-d a.hover {
		color: #10b041;
	}

	.gallery-thumbsslide.swiper-slide-thumb-active .v-avter {
		display: block !important;
	}

	.gallery-thumbsslide.swiper-slide-thumb-active .v-headerimg {
		display: none !important;
	}

	.vc-tag {
		width: 980px;
		margin: 0 auto;
		line-height: 50px;
		height: 50px;
		position: relative;

		.vcts {
			max-width: 578px;
			overflow: hidden;
			height: 40px;
			position: absolute;
			left: 0;
			top: 0;

			.vct {

				margin: 0 15px 9px 0;
				padding: 5px 13px 5px 11px;
				color: #636363;
				line-height: 23px;
				background-color: #f5f5f5;
				border-radius: 10px;
			}

			.vct.active {
				color: #10b041;
			}
		}

		.vctfrom {
			position: relative;
			width: 200px;
			float: left;
			margin-left: 340px;
			margin-top: 10px;
			height: 25px;
			// border: 1px solid #ececec;
			border-radius: 2px;

			.iconss {
				position: absolute;
				top: 8px;
				font-size: 15px;
				right: 15px;

				font-weight: bold;
			}
		}

		.vcc {
			line-height: 50px;
			float: right;

			.vccw {
				position: relative;
				float: left;
				color: #10b041;
			}

			.zhhf {
				float: left;
				line-height: 50px;
			}

			.vccs {
				margin: 0 14px 0 15px;
				color: #ececec;
			}

			.zhhf {
				position: relative;
				cursor: pointer;
			}

			.vccs {
				float: left;
				line-height: 16px;
			}

		}
	}
</style>
