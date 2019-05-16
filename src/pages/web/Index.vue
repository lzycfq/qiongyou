<template>
	<el-col :span="24">
		<headers></headers>
		<div class="q-banner">
		<!-- 	<swiper :options="sb" ref="mySwiper" v-if="webswiper.length>0">
				<swiper-slide v-for="(item,index) in webswiper" class="webswiper" :key="index" style="max-height: 640px;">
					<img :src="item.tweenimg" width="100%" height="100%" />
					<div class="swipertext">
						<P>{{item.swipertitle}}</p>
						<P>{{item.swiperdsc}}</p>

					</div>
				</swiper-slide>
			</swiper> -->
			<div class="swiper-pagination sbpagination" slot="pagination"></div>
			<div class="swiper-button-prev swiper-button-white" slot="button-prev" style="left: 50px;"></div>
			<div class="swiper-button-next swiper-button-white" slot="button-next" style="right: 50px;"></div>
			<div class="q-search">
				<!-- <i class="icon iconfont  icon-tubiaozhizuomoban"></i> -->
				<el-tabs class="card" type="border-card">
					<el-tab-pane>
						<span slot="label"><i class="el-icon-location"></i>目的地</span>
						<el-form ref="cityformrul" :rules="cityformrul" :model="cityform">
							<el-form-item style="margin-bottom: 5px !important;">
								<el-input placeholder="请输入你想搜索旅游城市" autocomplete="off" value="" v-model="cityform.cityname" id="city" rel="city"
								 v-on:click.native="showels" v-on:input="focus()">
									<el-button slot="append" type="success" @click="searchcity('cityformrul')" class="success">搜索</el-button>
								</el-input>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane>
						<span slot="label"><i class="el-icon-printer"></i> 做行程</span>
						<div class="plan">
							<p>一分钟搞定你的攻略</p>
							<router-link to="/create" class='link'><i class="el-icon-plus"></i>创建行程</router-link>
							<router-link to="/dingzhi" class=" custom">
								<i class="el-icon-news"></i>免费定制</router-link>
						</div>
					</el-tab-pane>
					<el-tab-pane>
						<span slot="label"><i class="el-icon-goods"></i> 选商品</span>
						<el-form ref="shopformrul" :rules="shopformrul" :model="shopform">
							<el-form-item style="margin-bottom: 5px !important;">
								<el-input placeholder="请搜索目的地/商品/关键字" v-model="shopform.shopname" rel="shopname">
									<el-button slot="append" type="success" @click="searchshop('shopformrul')" class="success">搜索</el-button>
								</el-input>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane>
						<span slot="label"><i class="el-icon-sold-out"></i>酒店</span>
						<el-form ref="jiudianformrul" :rules="jiudianformrul" :model="jiudianform">
							<el-form-item style="margin-bottom: 5px !important;">
								<el-input class="jiudianipnut" placeholder="请搜索目的地/酒店名" v-model="jiudianform.jiudianname" rel="jiudianname"></el-input>
								<el-date-picker class="jiudianpicker" type="datetimerange" v-model="jiudianform.date" rel="date"
								 :picker-options="pickerOptions2" range-separator="-" start-placeholder="入住时间" end-placeholder="退房时间" align="right">
								</el-date-picker>
								<el-button class="jiudian" @click="searchjiudian('jiudianformrul')">搜索酒店</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>



				</el-tabs>
				<transition name="el-fade-in-linear">
					<div class="els" v-if="els">
						<h2 class="history-title">热门城市</h2>
						<router-link class="poa" :to="{ name:'Detail', params: { id: item.id}}" v-for="(item,index) in popoverdiv" :key="index">{{item.popoverdivcity}}</router-link>
					</div>
				</transition>
				<div class="q-layer q-layer-search-autocomplete" v-if="autocomplete">
					<ul v-for="(item,index) in searchhotCity" :key="index">
						<li v-for="(item,index) in item.searchhotCitys" :key="index">
							<div class="search-title search-city-title"><a class="search-name"><span class="cGreen">{{item.guojia}}</span> </em><em class="en">{{item.jname}}</em></a></div>
							<div class="search-info">
								<router-link :to="{path:item.qlink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q1.png"></i><span>签证</span></router-link>
								<router-link :to="{path:item.clink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q2.png"></i><span>城市</span></router-link>
								<router-link :to="{path:item.jlink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q3.png"></i><span>景点</span></router-link>
								<router-link :to="{path:item.tlink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q4.png"></i><span>餐厅</span></router-link>
								<router-link :to="{path:item.ylink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q5.png"></i><span>游记</span></router-link>
								<router-link :to="{path:item.glink,params: { id: item.id }}" class="search-info-block"><i class="iconfont-home"><img src="../../assets/images/qiongyou/q6.png"></i><span>计划行程</span></router-link>

							</div>
						</li>

						<li>
							<div class="search-title search-titles "><router-link :to="{name:'deal',params:{id: item.id}}" class="search-poi">
									查看更多关于<span class="c-green">{{item.didian}}</span>的搜索结果
								</router-link></div>
						</li>
					</ul>
				</div>
			</div>

		</div>
		</div>
		<!-- 广告 -->
		<div class="section section-gray" @mouseout='blur'>
			<div class="wrapper">
				<div class="advertising">
					<ul>
						<li data-bn-ipg="index-ad-0">
							<div id="zoneid-6" class="mkt_zone" style="width: 740px; height: 110px;">
								<router-link to="/download"><img src="https://picb2b.qyer.com/FrixbKwP9Ix2LdK6_5PZCBiPuf6u"></router-link>
							</div>
						</li>
						<li data-bn-ipg="index-ad-1">
							<div id="zoneid-7" class="mkt_zone" style="width: 400px; height: 110px;">
								<router-link to='/download' target="_blank"><img src="https://picb2b.qyer.com/FurGZfGkQ38Zh_Cu8ebsm11_cwEh"></router-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<!-- 今日推荐 -->

		<div class="section">
			<div class="wrapper">
				<h2 class="title">今日推荐</h2>
				<div class="recommend">
					<ul class="gradually_col4_show">
						<li v-for="(item,index) in layoutuijian" :key="index">
							<div v-if="item.type===1">
								<div class="item" v-for="(item,index) in item.layout">
									<div class="img">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<video width="100%" height="100%" autoplay="autoplay">
												<source :src="item.video" type="video/mp4"></video>
											<div class="tag"><span class="bt">{{item.icon}}</span></div>
										</router-link>
									</div>
									<div class="info">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<div class="subtitle">
												<p>{{item.title}}</p>
											</div>
											<div class="bottom"><span class="fr">{{item.fr}}</span><span class="f14">{{item.f14}}</span></div>
										</router-link>
									</div>
								</div>
							</div>
							<div v-else-if="item.type===2">
								<div class="item" v-for="(item,index) in item.layout">
									<div class="img">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<img width="275" height="185" :src="item.img" lazy="loaded">
											<div class="tag"><span class="bt">{{item.icon}}</span></div>
										</router-link>
									</div>
									<div class="info">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<div class="subtitle">
												<p>{{item.title}}</p>
											</div>
											<div class="bottom"><span class="fr"><em>{{item.jiage}}</em>元起</span><span class="f14">{{item.didian}}</span></div>
										</router-link>
									</div>
								</div>
							</div>
							<div v-else-if="item.type===3">
								<div class="item" v-for="(item,index) in item.layout">
									<div class="img">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<img width="275" height="185" :src="item.img" lazy="loaded">
											<div class="tag"><span class="bt">{{item.icon}}</span></div>
										</router-link>
									</div>
									<div class="info">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<div class="subtitle">
												<p>{{item.title}}</p>
											</div>
											<div class="bottom"><span class="fr">{{item.liulan}}人浏览过</span><span class="f14">{{item.youjiname}}</span></div>
										</router-link>
									</div>
								</div>
							</div>
							<div v-else-if="item.type===4">
								<div class="item" v-for="(item,index) in item.layout">
									<div class="img">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<img width="275" height="185" :src="item.img" lazy="loaded">
											<div class="tag"><span class="bt">{{item.icon}}</span></div>
										</router-link>
									</div>
									<div class="info">
										<router-link :to="{path:item.link,params: { id: item.id }}">
											<div class="subtitle">
												<p>{{item.title}}</p>
											</div>
											<div class="bottom"><span class="fr">{{item.frdsc}}</span><span class="f14">{{item.f14dsc}}</span></div>
										</router-link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 	穷游商城 -->
		<div class="section section-green">
			<div class="wrapper">
				<h2 class="title">穷游商城</h2>
				<p align="right" class="huan" v-on:click="huans"><i class="el-icon-refresh"> 换一换</i></p>
				<div class="discount-wrap">
					<div class="q-card" v-for="(item,index) in qshop" :key="index" :data-index="index" v-if="index<6">
						<router-link :to="{name:'deal',params:{id: item.id}}">
							<div class="q-pic"><img :src="item.qimg" lazy="loaded"><span class="flag" style="" v-if="item.type===1" style="display: block;">距结束{{item.date}}天</span><span
								 v-else></span></div>
							<div class="q-desc">
								<div class="block">
									<div class="q-title">{{item.title}}</div>
									<div class="tag"><span>{{item.tejia}}</span></div>
									<div class="price">￥<span><em>{{item.jiage}}</em>元起</span></div>
								</div>
							</div>
						</router-link>
					</div>
				</div>
				<div class="more">
					<router-link to="/shop">查看更多商品</router-link>
				</div>
			</div><!-- wrapper -->
		</div><!-- section -->
		<!-- 热门游记与话题 -->
		<div class="section section-youji">
			<div class="wrapper wrapper_youji">
				<h2 class="title">热门游记与话题</h2>
				<div class="hotthread ">
					<swiper :options="sbs" ref="mySwiper" v-if="youjic.length>0">
						<swiper-slide v-for="(item,index) in youjic" :key="index">
							<ul>
								<li class="sb-slide" v-for="(item,index) in item.youjiccontent" :key="index">
									<div class="thread">
										<div class="y-pic">
											<router-link :to="{name:'thread',params:{id: item.id}}"><img width="275" height="185" :src="item.youjipic"
												 lazy="loaded"></router-link>
											<div class="like total_replies"><i class="el-icon-document-checked"></i> <span>{{item.pinglun}}</span></div>
										</div>
										<div class="inner">
											<div class="info clearfix"><span class="avatar">
													<router-link :to="{name:'thread',params:{id: item.id}}"><img :src="item.youjixiang" lazy="loaded"></router-link>
												</span><span class="txt">
													<router-link :to="{name:'thread',params:{id: item.id}}">{{item.youjiname}}</router-link>
												</span></div>
											<div class="caption">
												<router-link :to="{name:'thread',params:{id: item.id}}">{{item.youjidsc}}</router-link>
											</div>
										</div><em class="tip">精华</em>
									</div>
								</li>
							</ul>
						</swiper-slide>

					</swiper>
					<div class="swiper-pagination paginations" slot="pagination"></div>
				</div>
				<div class="more-youji">
					<router-link to="/bbs">查看更多游记</router-link>
				</div>
			</div><!-- wrapper -->
		</div><!-- section -->
		<!-- 特别策划 -->
		<div class="section section-gary">
			<div class="wrapper" v-for="(item,index) in trys" :key="index">
				<div class="q-advtry">
					<h3 class="title">穷游体验馆</h3>
					<div class="q-advtry-wrap advtry-wray-fl" v-for="(item,index) in item.tryA" :key="index">
						<div class="advtry-item">
							<div class="img">
								<router-link :to="{name:'thread',params:{id: item.id}}"><img class="pic" :src="item.tryimg" lazy="loaded">
									<p class="time">申请已结束</p>
									<div class="free-counts"><span>免费体验名额 {{item.mianfei}}</span></div>
								</router-link>
							</div>
							<div class="info">
								<h4 class="title">
									<router-link :to="{name:'thread',params:{id: item.id}}">{{item.title}}</router-link>
								</h4>
								<div class="desc"><span>价值<em class="price">{{item.jiage}}</em>元</span>
									<router-link :to="{name:'thread',params:{id: item.id}}" class="link-btn">查看详情</router-link>
								</div>
							</div>
							<div class="advtry-user">
								<h4><span>近期参与</span></h4>
								<div class="user-scroll">
									<ul>
										<li v-for="(item,index) in item.tryE"><img :src="item.canyu" lazy="loaded"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<router-link to="/try" class="try-more-btn">查看往期</router-link>
				</div>
				<div class="q-cehua">
					<div class="title-container"><span>特别策划</span>
						<router-link to="/cehua">查看全部</router-link>
					</div>
					<div style="clear: both;"></div>
					<router-link to="/" class="bigtu" v-for="(item,index) in item.tryB" :key="index">
						<img :src="item.cehuaimg" />
					</router-link>
					<div class="cehua_list">
						<router-link to="" class="cehua_listimg small-item" v-for="(item,index) in item.tryC" :key="index">
							<img :src="item.cimg" />
							<div class="hovercontent-container">
								<div class="phone-icon"></div>
								<div class="qrcode-container">
									<img :src="item.erweima" alt="扫描二维码，在手机端查看～" class="qr-code">
									<br />
									<span>{{item.cehuaname}}</span>
								</div>
							</div>
						</router-link>

					</div>
				</div>
			</div><!-- wrapper -->
		</div><!-- section -->
		<!-- 	广告第二层 -->
		<div class="section">
			<div class="wrapper">
				<div class="application clearfix">
					<div class="apps">
						<h3 class="title">穷游APP</h3>
						<ul class="lists">
							<li>
								<router-link to="qiongyouapp"><img width="80" height="80" src="../../assets/images/qiongyou/d1.png" lazy="loaded"></router-link><span>穷游app</span>
							</li>
							<li>
								<router-link to="zhushouapp"><img width="80" height="80" src="../../assets/images/qiongyou/d2.png" lazy="loaded"></router-link><span>行程助手</span>
							</li>
							<li>
								<router-link to="jinnangapp"><img width="80" height="80" src="../../assets/images/qiongyou/d3.png" lazy="loaded"></router-link><span>穷游锦囊</span>
							</li>
						</ul>
					</div>
					<div class="wechat">
						<h3 class="title">微信号</h3>
						<ul class="lists">
							<li><img width="80" heigght="80" src="https://fes.qyerstatic.com/FtA9Ii7lgMTDhyiN-gxmpTvXOytT?imageslim" lazy="loaded"><span>穷游网</span></li>
							<li><img width="80" height="80" src="https://fes.qyerstatic.com/Fk9OCTSYnotcck1f_06yVegUqTW-?imageslim" lazy="loaded"><span>穷游最世界</span></li>
							<li><img width="80" height="80" src="https://fes.qyerstatic.com/FnaUiGjGOXrf7g7q_QMvw0pMXqCX?imageslim" lazy="loaded"><span>穷游锦囊</span></li>
							<li><img width="80" height="80" src="https://fes.qyerstatic.com/FuJMevuydf3MFAVSM9hWG_Uzm5NC?imageslim" lazy="loaded"><span>行程助手</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="q-footer-banner" v-if="footer">
			<div class="q-fb-main">
				<div class="q-fb-operation">
					<router-link to="guide"><img src="https://static.qyer.com/models/common/images/banner_default.png"></router-link>
				</div>
				<div class="q-fb-login"><a href="https://passport.qyer.com/oauth?using=weibo&amp;ref=https%3A%2F%2Fhome.qyer.com%2F"
					 class="btn btn-weibo"><i><img src="../../assets/images/qiongyou/weibo.png" style="vertical-align: middle;" /></i>
						<span>微博登录</span></a><a href="https://passport.qyer.com/oauth?using=qq&amp;ref=https%3A%2F%2Fhome.qyer.com%2F"
					 class="btn btn-qq"><i><img src="../../assets/images/qiongyou/QQ.png" style="vertical-align: middle;" /></i> <span>QQ登录</span></a>
					<router-link to="/login" class="link">登录</router-link><span>或</span>
					<router-link to="/resgin" class="btn btn-qyer"><i class="frame-iconfont frame-icon-qyer"></i><span>注册穷游</span></router-link>
				</div>
			</div><span class="q-fb-close"><i class="el-icon-close" @click="close"></i></span>
		</div>
		
	</el-col>
</template>
<script>
import headers from '../../pages/web/compoents/header.vue'
	export default {
		name: 'index',
		data() {

			return {
				els: false,
				autocomplete: false,
				autopopover: false,
				userImage: [],
				webswiper: [],
				popoverdiv: [],
				layoutuijian: [],
				qshop: [],
				trys: [],
				searchhotCity:[],
				count: 0,
				footer: true,
			
				sb: {
					speed: 4000,
					effect: 'fade',
					autoplay: true,
					parallax: true,
					loop: false,
					paginationClickable: true,
					pagination: '.sbpagination',
					paginationType: 'fraction',
					paginationFractionRender: function(swiper, currentClassName, totalClassName) {
						return '<span class="' + currentClassName + '"></span>' +
							' <span class="xiexian">/</span>' +
							'<span class="' + totalClassName + '"></span>';
					},
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev'

				},
				sbs: {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					loop: false,

				},
				// 表单验证
				cityform: {
					cityname: ''
				},
				cityformrul: {
					cityname: [{
						required: true,
						message: '请输入搜索城市',
						trigger: 'blur'
					}]
				},
				// 表单验证
				shopform: {
					shopname: ""
				},
				shopformrul: {
					shopname: [{
						required: true,
						message: '请输入搜索商品',
						trigger: 'blur'
					}]
				},
				jiudianform: {
					jiudianname: ''
				},
				jiudianformrul: {
					jiudianname: [{
						required: true,
						message: '请输入酒店名称',
						trigger: 'blur'
					}]
				},

			}
		},
		created() {
			this.buildwebswiper();
			this.buildpopoverdiv();
			this.buildlayoutuijian();
			this.buildqshop();
			this.buildyoujic();
			this.buildtrys();
			this.buildsearchhotCity();
		},

	

		methods: {
			// 模糊搜索下拉框数据
			focus: function() {
				if (document.getElementById("#city") == document.activeElement) {
					this.fuzzy_search(this.searchVal.trim());
				}
				this.autocomplete = true
			},
			blur() {
				this.autocomplete = false
			},
			fuzzy_search: function(value) {
				var that = this;
				if (!value) {
					that.fuzzy_list = [];
					return;
				}
				//调取接口axios
			},
			


			buildwebswiper() {
				this.axios.get('/api/buildwebswiper').then(res => {
					this.webswiper = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildpopoverdiv() {
				this.axios.get('/api/buildpopoverdiv').then(res => {
					this.popoverdiv = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildlayoutuijian() {
				this.axios.get('/api/buildlayoutuijian').then(res => {
					this.layoutuijian = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildqshop() {
				this.axios.get('/api/buildqshop').then(res => {
					this.qshop = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildyoujic() {
				this.axios.get('/api/buildyoujic').then(res => {
					this.youjic = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildtrys() {
				this.axios.get('/api/buildtrys').then(res => {
					this.trys = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildsearchhotCity(){
				this.axios.get('/api/buildsearchhotCity').then(res => {
					this.searchhotCity = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			huans() {
				this.count++;
				console.log(this.count)
				this.axios.get('/api/buildqshop', {
					params: {
						'count': this.count
					},
				}).then(res => {
					this.qshop = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			//城市搜索
			searchcity(formName) {
				this.$refs[formName].validate((valid) => {

					if (valid) {
						this.axios.get('', {
							params: {
								'cityname': this.$refs.cityname.value,
							},
						}).then(res => {


						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//城市搜索
			searchshop(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'shopname': this.$refs.shopname.value,
							},
						}).then(res => {


						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},


			//酒店搜索
			searchjiudian(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'jiudianname': this.$refs.jiudianname.value,
								'date': this.$refs.date.value,

							},
						}).then(res => {


						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},

			close() {
				this.footer = !this.footer
			},
			showels() {
				this.els = !this.els;
			}
		},
		backTop() {
			alert("aaa")
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		// 			  computed: {
		//                 reverseData() {
		//                     return this.list.reverse();
		//                 }  
		//  	},

		watch: {
			searchVal: function() {
				this.focus();

			}
		},
		components: {
			headers
		},

	}
</script>

<style lang="scss">
	.q-search .q-layer-search-autocomplete {
		width: 500px;
		position: absolute;
		z-index: 2000;

	}

	.q-search .q-layer {
		top: 100px;
		left: 15px;
	}

	.q-layer {


		border-radius: 4px;
		min-width: 100px;
		background: #fff;
		-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .1);
		box-shadow: 0 0 3px rgba(0, 0, 0, .1);
	}

	.q-search .q-layer-search-autocomplete ul li.current {
		background-color: #e3fae1;
	}

	.q-search .q-layer-search-autocomplete ul li:first-child {
		border-radius: 4px 4px 0 0;
	}

	.q-search .q-layer-search-autocomplete ul li {
		padding: 0 10px;
		list-style: none;
	}

	.q-search .q-layer-search-autocomplete ul li.current .search-city-title {
		padding-bottom: 0;
	}

	.q-search .q-layer-search-autocomplete .search-title {
		padding: 10px 0;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
	}

	.q-search .q-layer-search-autocomplete ul li.current .search-name {
		padding: 8px;
		padding-right: 0;
	}

	.q-search .q-layer-search-autocomplete .search-title .search-name {
		display: block;
		padding: 0 8px;
		padding-right: 0;
		border: 1px solid transparent;
		height: 24px;
		line-height: 24px;
	}

	.q-search .q-layer-search-autocomplete ul li.current .fr {
		background: #e3fae1;
		-webkit-box-shadow: -10px 0 10px rgba(227, 250, 225, .9);
		box-shadow: -10px 0 10px rgba(227, 250, 225, .9);
	}

	.q-search .q-layer-search-autocomplete .search-title .fr {
		position: relative;
		padding: 0 8px;
		font-size: 12px;
		color: #959595;
		background-color: #fff;
		-webkit-box-shadow: -10px 0 10px hsla(0, 0%, 100%, .9);
		box-shadow: -10px 0 10px hsla(0, 0%, 100%, .9);
	}

	.q-search .q-layer-search-autocomplete .search-title .cn {
		margin-right: 6px;
	}

	.q-search .q-layer-search-autocomplete .search-title em {
		font-weight: 400;
	}

	.q-search .q-layer-search-autocomplete .search-title .en {
		color: #959595;
	}

	.q-search .q-layer-search-autocomplete .search-title em {
		font-weight: 400;
	}

	.q-search .q-layer-search-autocomplete ul li.current .search-info {
		display: block;
	

	}
.q-search .q-layer-search-autocomplete ul li:hover {
    background-color: #e3fae1;
}
	.q-search .q-layer-search-autocomplete ul li:hover .search-info {
		display: block;
         background: #e3fae1;
	}

	.q-search .q-layer-search-autocomplete .search-info {
		display: none;
		padding-bottom: 10px;
	}

	.q-search .q-layer-search-autocomplete .search-title .cGreen {
		font-weight: 700;
		color: #323232;
	}

	.q-search .q-layer-search-autocomplete .search-info-block {
		float: left;
		margin-left: 5px;
		border: 1px solid transparent;
		width: 70px;
		height: 58px;
		text-align: center;
		color: #636363;
	}

	.q-search .q-layer-search-autocomplete .search-info-block span {
		display: block;
		font-size: 14px;
	}

	.q-search .q-layer-search-autocomplete .search-info:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: "";
		clear: both;
		height: 0;
	}
.q-search .q-layer-search-autocomplete .search-titles {
    padding: 10px 0;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
	color: #666666;
	margin-left: 8px;
	a{
		color: #666666
	}
	
}
.q-search .q-layer-search-autocomplete .search-title .c-green {
    color: #10b042;
}
	
	.q-footer-banner {
		position: fixed;
		z-index: 9999;
		left: 0;
		bottom: 0;
		width: 100%;
		min-width: 980px;
		height: 70px;
		color: #fff;
		background-color: rgba(0, 0, 0, .8);

		.q-fb-main {
			position: relative;
			margin: 0 auto;
			width: 980px;
			height: 70px;

			.q-fb-operation {
				float: left;
				margin-left: 50px;
				width: 420px;

			}

			.q-fb-login {
				float: left;
				line-height: 70px;
				font-size: 14px;
				color: #d7d7d7;

			}
		}

		.q-fb-close {
			position: absolute;
			top: 20px;
			right: 20px;
			width: 32px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			cursor: pointer;
			color: #a6a6a6;
			-webkit-transition: all .2s;
			transition: all .2s;
		}
	}

	.q-footer-banner .q-fb-main .q-fb-login .link {
		margin-left: 10px;
		margin-right: 4px;
		color: #d7d7d7;
		font-weight: 700;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn.btn-weibo {
		background-color: #da371f;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn {
		display: inline-block;
		margin-left: 10px;
		border: 0;
		min-width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		border-radius: 3px;
		color: #fff;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn.btn-qq {
		background-color: #2b8fc8;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn {
		display: inline-block;
		margin-left: 10px;
		border: 0;
		min-width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		border-radius: 3px;
		color: #fff;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn.btn-qyer {
		background-color: #5fa678;
	}

	.q-footer-banner .q-fb-main .q-fb-login .btn {
		display: inline-block;
		margin-left: 10px;
		border: 0;
		min-width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		border-radius: 3px;
		color: #fff;
	}

	.q-banner {
		/deep/ .swiper-pagination-fraction {
			bottom: 80px;

			left: 45%;
			width: 100%;
		}
	}

	.q-banner {
		/deep/ .swiper-pagination-current {
			font-size: 48px;
			color: white;
		}
	}

	.q-banner {
		/deep/ .swiper-pagination-total {
			font-size: 28px;
			color: white;
		}
	}

	.q-banner {
		/deep/ .xiexian {
			font-size: 28px;
			color: white;
		}
	}

	.q-banner .swipertext {
		position: absolute;
		bottom: 30px;
		width: 30%;
		text-align: right;
		right: 50px;

		height: auto;

		p {
			color: white;
			margin-top: 3px;
		}
	}

	// banner
	.q-banner {
		width: 100%;
		height: auto;
		position: relative;

		.q-search {
			position: absolute;
			z-index: 80;
			bottom: 100px;
			left: 50%;
			margin-left: -310px;
			width: 620px;
			height: auto;
			z-index: 1000;

		}

		.webswiper {
			position: relative;
		}
	}

	.q-search .card {
		/deep/ .el-tabs__header {
			background-color: rgba(0, 0, 0, 0.01);
			border-bottom: 0px solid #e4e7ed;
			margin: 0;
		}
	}

	.q-search {
		/deep/ .el-tabs--border-card {
			background-color: rgba(0, 0, 0, 0.6);

			border: 1px solid rgba(0, 0, 0, 0.1);
			-webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
		}
	}

	.q-search .card {
		/deep/ .el-tabs__item {
			width: 33%;
			height: 40px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			line-height: 40px;
			display: inline-block;
			list-style: none;
			font-size: 16px;
			font-weight: 500;
			color: white;
			position: relative;
		}
	}

	.q-search .card {

		/deep/[class*=" el-icon-"],
		[class^=el-icon-] {
			font-family: element-icons !important;
			speak: none;
			font-style: normal;
			font-weight: 400;
			font-variant: normal;
			text-transform: none;
			font-size: 20px;
			line-height: 1;
			vertical-align: baseline;
			display: inline-block;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}

	.q-search .card {
		/deep/ .el-tabs__item span {
			font-size: 20px;
		}
	}

	.q-search .card {
		/deep/ .el-tabs__item.is-active {
			color: #26b971;
			font-weight: 700;
			background: white;
			background-color: rgba(0, 0, 0, 0.2);
			border-right-color: rgba(0, 0, 0, 0.01);
			border-left-color: rgba(0, 0, 0, 0.01);
		}
	}

	.q-search .plan {
		text-align: center;
	}

	.q-search .plan p {
		font-size: 24px;
		color: #fff;
		text-align: center;

	}

	.q-search .plan .link {
		display: inline-block;
		margin: 6px 10px;
		width: 140px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		font-size: 18px;
		font-weight: 700;
		border-radius: 3px;
		background: #2dd382;
		background: linear-gradient(135deg, #2ed685, #10a251);
		text-decoration: none;
	}

	.q-search .plan .custom {
		background: #35a2e1;
		display: inline-block;
		margin: 6px 10px;
		width: 140px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		font-size: 18px;
		font-weight: 700;
		text-decoration: none;
		border-radius: 3px;
		background: linear-gradient(135deg, #44abe7, #0886ce);
	}

	.q-search .success {
		float: left;
		border: 0;
		border-radius: 0 3px 3px 0;
		width: 90px;
		height: 40px;
		text-align: center;
		text-decoration: none;
		font-size: 18px;
		font-weight: 700;
		color: white;
		background: #2dd382;
		background: linear-gradient(135deg, #2ed685, #10a251);
		cursor: pointer;

		span {
			color: #e4e7ed;
		}
	}

	.q-search {

		/deep/.el-input-group__append,
		.el-input-group__prepend {
			background-color: #f5f7fa;
			color: #909399;
			vertical-align: middle;
			display: table-cell;
			position: relative;
			border: 0px solid #fff;
			border-radius: 4px;
			padding: 0 20px;
			width: 1px;
			white-space: nowrap;
		}
	}

	.q-search .jiudianipnut {
		width: 41.5%;
		float: left;
	}

	.q-search .jiudianpicker {
		width: 41.5%;
		float: left;
	}

	.q-search .jiudian {
		background: #2dd382;

		border: 1px solid #2dd382;
		color: white;
	}

	.els {
		position: absolute;
		top: 106px;
		left: 15px;
		width: 480px;
		border-radius: 4px;
		padding: 10px;
		background: white;
		z-index: 2000;
		-webkit-transition: all .7s ease;
		transition: all .7s ease;

		.history-title {
			padding: 0 10px;
			height: 36px;
			line-height: 36px;
			border-radius: 3px;
			font-size: 16px;
			color: #323232;
			background: #f5f5f5;
		}
	}

	.poa {
		display: inline-block;
		margin-top: 6px;
		padding: 0 10px;
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		border-radius: 3px;
		color: #636363;
		white-space: nowrap;
	}

	.el-popper[x-placement^=bottom] {
		margin-top: 18px;
	}

	.section {
		position: relative;
		padding: 20px 0;
		min-width: 1160px;
	}

	.section.section-gray {
		border-width: 1px 0;
		border-style: solid;
		border-color: #ececec;
		background-color: #f5f5f5;
	}

	.wrapper {
		margin: 0 auto;
		width: 1160px;
	}

	.advertising ul {
		margin-left: -20px;
		list-style: none;
	}

	.advertising ul li {
		float: left;
		margin-left: 20px;
		height: 110px;
		border-radius: 3px;
		overflow: hidden;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.mkt_zone img {
		vertical-align: top;
		width: 100%;
		height: 100%;
	}

	// 今日推荐
	.section .title {
		height: 74px;
		color: #636363;
		text-align: center;
		font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
	}

	.recommend {
		position: relative;
		height: 670px;

		ul {
			margin-top: -20px;
			margin-left: -20px;
			list-style: none;
		}
	}

	.gradually_col4_show li:first-child {
		-webkit-animation: show .5s ease-in-out 0s forwards;
		animation: show .5s ease-in-out 0s forwards;
	}

	.recommend ul li {
		position: relative;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		width: 275px;
		height: 300px;
		overflow: hidden;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.recommend ul li .item {
		width: 100%;
		height: 100%;
	}

	.recommend ul li .item .img {
		position: relative;
		width: 275px;
		height: 185px;
		overflow: hidden;
	}

	.recommend ul li .item .info {
		padding: 0 18px;
		border: 1px solid #ececec;
		border-top: 0;
		height: 114px;
		line-height: 24px;
		overflow: hidden;
	}

	.recommend ul li .item .info a {
		font-weight: 700;
		color: #323232;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.recommend ul li .item .info .subtitle {
		margin-top: 14px;
		height: 48px;
		font-size: 16px;
		overflow: hidden;
	}

	.recommend ul li .item .info .bottom {
		margin-top: 16px;
		height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #636363;
	}

	.recommend ul li .item .info .bottom .fr {
		color: #959595;
		float: right;
	}

	.recommend ul li .item .info .bottom .f14 {
		display: inline-block;
		max-width: 70%;
		min-width: 55%;
		color: #636363;
		font-size: 14px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.recommend ul li .item .img .tag {
		position: absolute;
		top: 14px;
		left: 10px;
		padding: 0 8px;
		border: 1px solid #fff;
		border-radius: 14px;
		font-size: 14px;
		color: #fff;
		background: rgba(0, 0, 0, .2);
		text-align: center;
		overflow: hidden;
	}

	.recommend ul li .item .img .tag span {
		display: block;
		height: 22px;
		line-height: 22px;
		white-space: nowrap;
	}

	.recommend ul li .item .info .bottom em {
		font-size: 20px;
		color: #ff7466;
	}

	// 穷游商城
	.section-green {
		height: auto;
		text-align: center;
		background: -webkit-linear-gradient(#90dc9c, #1bcdad);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#90dc9c, #1bcdad);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#90dc9c, #1bcdad);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(#90dc9c, #1bcdad);
		/* 标准的语法 */
	}

	.section-green h2 {
		color: white !important;
	}

	.section-green .huan {
		color: white;
	}

	.section-green .discount-wrap {
		position: relative;
		overflow: hidden;
	}

	.section-green .q-card {
		float: left;
		position: relative;
		margin-top: 10px;
		width: 375px;
		overflow: hidden;
		background: #fff;
	}

	.section-green .q-card:nth-of-type(1n) {
		float: left;
	}

	.section-green .q-card:nth-of-type(2) {
		margin-left: 17px;
	}

	.section-green .q-card:nth-of-type(5) {
		margin-left: 17px;
	}

	.section-green .q-card:nth-of-type(3n) {
		float: right;
	}

	.section-green .q-card .q-pic {
		float: left;
		width: 160px;
		height: 160px;
	}

	.section-green .q-card .q-pic img {
		vertical-align: top;
		width: 100%;
		height: 100%;
	}

	.section-green .q-card .q-pic img:hover {
		transform: scale(1.3);
		-moz-box-shadow: 0px 0px 5px #000000;
		-webkit-box-shadow: 0px 0px 5px #000000;
		box-shadow: 0px 0px 5px #000000;
	}

	.section-green .q-card .q-pic .flag {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding-left: 8px;
		width: 128px;
		height: 30px;
		font-size: 14px;
		line-height: 30px;
		color: #fff;
		background: url('https://fes.qyerstatic.com/FlSORubPYxGzTj2l0pqAfym1KKmU') 0 0/cover no-repeat;
	}

	.q-card .q-desc {
		padding-left: 160px;
	}

	.q-card .q-desc .block {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 15px;
		height: 160px;
	}

	.q-card .q-desc .block .q-title {
		display: -webkit-box;
		max-height: 52px;
		font-size: 16px;
		color: #000;
		font-weight: 700;
		line-height: 26px;
		overflow: hidden;
		text-align: left;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.q-card .q-desc .block .tag {
		margin-top: 6px;
		text-align: left;
	}

	.q-card .q-desc .tag span {
		display: inline-block;
		padding: 0 6px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border-radius: 2px;
		font-size: 14px;
		line-height: 18px;
		height: 20px;
		border: 1px solid #4a90e2;
		color: #4a90e2;
	}

	.q-card .q-desc .block .price {
		position: absolute;
		bottom: 6px;
		right: 15px;
		font-size: 20px;
		color: #ff7362;
	}

	.q-card .q-desc .block .price {
		position: absolute;
		bottom: 6px;
		right: 15px;
		font-size: 20px;
		color: #ff7362;

		em {
			font-size: 30px;
			font-weight: 400;
		}
	}

	.section-green .more {
		margin-top: 30px;
		text-align: center;

		a {
			display: inline-block;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			border: 1px solid #ececec;
			border-radius: 3px;
			width: 220px;
			height: 50px;
			vertical-align: top;
			background: #fff;
			font: 20px/50px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
			color: #636363;
			-webkit-transition: all .2s ease-in-out;
			transition: all .2s ease-in-out;
			text-decoration: none;
			text-align: center
		}
	}

	// 热门游记与话题

	.section-youji {

		height: 830px;
	}

	.section-youji ul {

		list-style: none;
	}

	.section-youji li {
		margin-top: 20px;
		margin-left: 19px;
		width: 275px !important;
		height: 290px;
		float: left;
		background: #fff;

	}

	.wrapper_youji {
		width: 1200px !important;
	}

	// 	.section-youji .sb-slide:nth-of-type(2) {
	// 		margin-left: 20px !important;
	// 		margin-top: 20px !important;
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(3) {
	// 		margin-left: 20px !important;
	// 
	// 
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(4) {
	// 		margin-left: 19px !important;
	// 		margin-top: 20px !important;
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(5) {
	// 		margin-left: 3px !important;
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(6) {
	// 		margin-left: 20px !important;
	// 		margin-top: 20px !important;
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(7) {
	// 		margin-left: 20px !important;
	// 
	// 	}
	// 
	// 	.section-youji .sb-slide:nth-of-type(8) {
	// 		margin-left: 19px !important;
	// 		margin-top: 20px !important;
	// 
	// 	}



	.hotthread .thread {
		position: relative;
		line-height: 24px;

		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.hotthread .thread .y-pic {
		position: relative;
		width: 275px;
		height: 185px;
		overflow: hidden;
	}

	.hotthread .thread .y-pic img {
		display: block;
		width: 100%;
		height: 100%;
		-webkit-transition: all 1.2s ease;
		transition: all 1.2s ease;
	}

	.hotthread .thread .y-pic .like {
		position: absolute;
		right: 10px;
		bottom: 4px;
		color: #fff;
		text-shadow: 0 0 2px rgba(0, 0, 0, .4);
		font-size: 14px;
	}

	.hotthread .thread .inner {
		border: 1px solid #ececec;
		border-top: 0;
		padding: 0 15px;
		width: 243px;
		height: auto;

	}

	.hotthread .thread .inner .info {
		position: relative;
	}

	.hotthread .thread .inner .info .avatar {
		float: left;
		margin-top: -25px;
		padding: 4px;
		width: 48px;
		height: 48px;
		background: #fff;
		border-radius: 50%;
	}

	.hotthread .thread .inner .info a {
		color: #636363;
	}

	.hotthread .thread .inner .info .avatar img {
		vertical-align: top;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.hotthread .thread .inner .info .txt {
		float: left;
		margin-top: 4px;
		margin-left: 6px;
		width: 180px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 14px;
		color: #636363;
	}

	.hotthread .thread .inner .caption {
		padding-top: 12px;
		height: 48px;
		font: 700 16px/24px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		overflow: hidden;
		margin-bottom: 8px;
	}

	.hotthread .thread .inner .caption a {
		display: block;
		color: #323232;
	}

	.hotthread .thread .tip {
		position: absolute;
		z-index: 5;
		top: 10px;
		left: -5px;
		padding-bottom: 6px;
		width: 50px;
		height: 26px;
		text-align: center;
		color: #fff;
		font: 16px/26px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		background: url("../../assets/images/qiongyou/tip.svg") 0 0/contain no-repeat;
	}

	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}

	.section-youji .swiper-pagination {
		text-align: center;
		margin-top: 20px;
		position: relative;
	}

	.section-youji .swiper-pagination .swiper-pagination-bullet {
		width: 30px;
		border-radius: 0;
		height: 7px;
		background: #d7d7d7;
		margin-right: 15px;
	}

	.section-youji .swiper-pagination .swiper-pagination-bullet-active {
		background: #1ab05f;
	}

	.section-youji .more-youji {
		margin-top: 30px;
		text-align: center;

		a {
			display: inline-block;
			width: 220px;
			height: 50px;
			color: #636363;
			font-size: 20px;
			border: 1px #ececec solid;
			-webkit-transition: all .2s ease-in-out;
			transition: all .2s ease-in-out;
			line-height: 50px;
		}
	}

	.section-youji .more-youji a:hover {
		-webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
		box-shadow: 0 0 5px rgba(0, 0, 0, .2);
		border-color: #d7d7d7;
	}


	.section-gary {
		overflow: hidden;
		border-width: 1px 0;
		border-style: solid;
		border-color: #ececec;
		background-color: #f5f5f5;
	}

	.section-gary .q-advtry {
		width: 268px;
		height: 466px;
		float: left;
		margin-bottom: 50px;
	}

	.section-gary .q-advtry .title {
		height: auto;
		margin-bottom: 18px;
		font-size: 20px;
		line-height: 40px;
		text-align: left;
		color: #000;
		font: 28px/34px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
	}

	.section-gary .q-advtry .q-advtry-wrap {
		width: 268px;

		.img {
			position: relative;
			width: 100%;
			height: 160px;
			overflow: hidden;

			.time {
				position: absolute;
				z-index: 10;
				top: 50%;
				width: 100%;
				height: 22px;
				line-height: 22px;
				text-align: center;
				font-size: 14px;
				font-weight: 700;
				color: #fff;
			}
		}
	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-item {
		height: 337px;
		background: #fff;
		overflow: hidden;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.section-gary .q-advtry .q-advtry-wrap .img .free-counts {
		position: absolute;
		left: 0;
		top: 15px;
		width: 110px;
		height: 27px;
		line-height: 27px;
		padding: 0 9px;
		background-color: #ff5950;
		color: #fff;
		z-index: 99;
		-webkit-transition: none;
		transition: none;
	}

	.section-gary .q-advtry .q-advtry-wrap .img .free-counts:after {
		content: "";
		display: block;
		position: absolute;
		right: -5px;
		top: 0;
		width: 0;
		height: 0;
		border-top: 27px solid #ff5950;
		border-right: 5px solid transparent;
	}

	.section-gary .q-advtry .q-advtry-wrap .img a:after {
		content: "";
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .6);
	}

	.section-gary .q-advtry .q-advtry-wrap .info {
		padding: 18px 0;
		margin: 0 16px;
		border-bottom: 1px solid #d8d8d8;

	}

	.section-gary .q-advtry .q-advtry-wrap .info .title {
		height: auto;
		line-height: 28px;
		font: 20px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		font-weight: 300;
		letter-spacing: 0;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		a {
			color: #000;
			font-size: 20px;
		}
	}

	.section-gary .q-advtry .q-advtry-wrap .user-scroll ul li {
		display: inline-block;
		padding: 0 4px;
		-webkit-transition: all 1s;
		transition: all 1s;
		margin-top: 15px;
	}

	.section-gary .q-advtry .q-advtry-wrap .user-scroll ul li img {
		width: 30px;
		height: 30px;
		vertical-align: middle;
		border-radius: 30px;
	}

	.section-gary .q-advtry .q-advtry-wrap .info .desc {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-top: 9px;
		line-height: 34px;
	}

	.section-gary .q-advtry .q-advtry-wrap .info .desc span {
		display: block;
		height: 20px;
		font: 12px/20px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		color: #000;
	}

	.section-gary .q-advtry .q-advtry-wrap .info .desc .price {
		color: #fe7369;
		font-size: 30px;
	}

	.section-gary .q-advtry .q-advtry-wrap .info .desc .link-btn {
		display: block;
		width: 100px;
		height: 34px;
		font: 700 14px/34px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		text-align: center;
		color: #fff;
		background: #fd756a;
		text-decoration: none;
	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-user {
		position: relative;
		padding-left: 66px;
		width: 186px;
		height: 66px;
		background: #fff;
		overflow: hidden;
	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-user h4 {
		float: left;
		margin-left: -66px;
		width: 66px;
		height: 66px;
		font: 14px/18px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		color: #000;
		text-align: center;
	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-user h4 span {
		display: block;
		margin: 13px auto;
		width: 2em;
	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-user h4 {
		float: left;
		margin-left: -66px;
		width: 66px;
		height: 66px;
		font: 14px/18px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		color: #000;
		text-align: center;

	}

	.section-gary .q-advtry .q-advtry-wrap .advtry-user .user-scroll {
		width: 290px;
		height: 100%;
		overflow: hidden;
	}

	.section-gary .try-more-btn {
		display: block;
		margin-top: 20px;
		width: 268px;
		height: 50px;
		border: 1px solid #3cbd79;
		color: #3cbd79;
		font-size: 16px;
		line-height: 50px;
		text-align: center;
	}

	.section-gary .q-cehua {
		float: right;
		width: 871px;
		height: 446px;

		.title-container {
			line-height: 40px;

			span {
				float: left;
				color: #000;
				font-size: 28px;
				margin-bottom: 12px
			}

			a {
				float: right;
				font-size: 22px;
				text-decoration: none;
				color: rgba(0, 0, 0, .4);
			}

		}
	}

	.section-gary .q-cehua .title-container>a:after {
		content: "";
		display: inline-block;
		width: 8.5px;
		height: 15px;
		margin-left: 8px;
		background-size: 100%;
		background-repeat: no-repeat;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAYAAADZCo4zAAAABGdBTUEAALGPC/xhBQAAAL1JREFUGBlt0MsOwUAUxvFDsRGEVxAhpAt7QbyCd3V7mhK3Jmzs3FL/bxIy1Z7kl86c+XoybWBmc7SwR6YCOg2EqGGLVCmgN8voo44dErhSQKWQ1gNooia50DfA3g4oQKEmIiR+gL0d1YRCunj0H6BnJ7zhJhXVyakbPU2qlnIO2/RmuGKlS/nVYTPFBQvc/UCXxgQxlnjAfZaePYxxhg6fcKUJ+oMj6BPX+B2yNl1yCP3JDV7IVIWOf5dU4APRLyOVzHXPKQAAAABJRU5ErkJggg==);
	}

	.section-gary .q-cehua .bigtu {
		position: relative;
		float: left;
		width: 268px;
		height: 408px;
		display: inline-block;
		color: #fff;
		font-size: 24px;
		text-decoration: none;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.section-gary .q-cehua .cehua_list {
		float: right;
		width: 598px;
		font-size: 0;
		position: relative;

		.cehua_listimg {
			display: inline-block;
			width: 284px;
			height: 196px;
			position: relative;
			margin: 0 7.5px 16px;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.small-item:nth-child(odd) {
		margin-left: 15px;
	}

	.small-item:nth-child(2n+2) {
		margin-right: 0;
	}

	.small-item:nth-child(3),
	.small-item:nth-child(4) {
		margin-bottom: 0;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container .phone-icon {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		background: url(https://fes.qyerstatic.com/FoJ0DTisdpszSOb_uUjnxlw50_DZ?imageslim) no-repeat;
		background-position: -60px -146px;
		cursor: pointer;
		opacity: .7;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container .qrcode-container {
		position: relative;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		margin: 0 auto;
		display: none;
		color: #fff;
		text-align: center;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container .qr-code {
		margin-bottom: 10px;
		width: 100px;
		height: 100px;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container span {
		font-weight: 700;
		font-size: 25px;
		line-height: 38px;
		color: white;
		text-align: center;
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container:hover {
		background: rgba(0, 0, 0, .6);
	}

	.section-gary .q-cehua .cehua_list .hovercontent-container:hover .qrcode-container {
		display: block;
	}

	.application .apps {
		float: left;
	}

	.application .title {
		float: left;
		font-size: 28px;
		line-height: 100px;
	}

	.application .lists {
		float: left;
	}

	.application .lists li {
		float: left;
		list-style: none;
		margin-left: 30px;
		text-align: center;
	}

	.application .lists li img {
		display: block;
		width: 80px;
		height: 80px;
	}

	.application .lists li span {
		display: block;
		margin-top: 8px;
		font-size: 14px;
		color: #636363;
	}

	.application .wechat {
		float: right;
	}
</style>
