<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="thread_header">
			<div class="cn-desc">
				<h1 class="desctitle">穷游论坛</h1>
				<div class="descjj">
					<strong class="descfs">分享</strong><i>.</i><strong>结伴</strong><i>.</i><strong>找攻略</strong>
				</div>
			</div>
			<div class="cn-fr" v-for="(item,index) in cnpopover" :key='index'>
				<el-popover placement="bottom-end" v-model="visible" width="100%" trigger="hover" popper-class="cnpopoverbg">
					<div class="cnpopover">
						<div class="cnbci-item cnbci-fir">
							<h4>穷游兴趣小组</h4>
							<tr v-for="(item,index) in item.cnpopovertd" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingqus}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingqu}}</router-link>
								</td>
							</tr>
							<br />
							<h4>线上线下</h4>
							<li class="firli" v-for="(item,index) in item.cnpopoverli" :key='index'>
								<router-link to="">{{item.cnpopoverliname}}</router-link>
							</li>
						</div>
						<div class="cnbci-item cnbci-fir">
							<h4>欧洲</h4>
							<tr v-for="(item,index) in item.cnpopoverouzhou" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingquouzhous}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingquouzhou}}</router-link>
								</td>
							</tr>
						</div>
						<div class="cnbci-item cnbci-fir">
							<h4>亚洲</h4>
							<tr v-for="(item,index) in item.cnpopoveryazhou" :key='index'>
								<td class="td">
									<router-link to="">{{item.cnxingquyazhous}}</router-link>
								</td>
								<td class="td">
									<router-link to="">{{item.cnxingquyazhou}}</router-link>
								</td>
							</tr>
						</div>
						<div class="cnbci-fo">
							<div class="cnbcii-cell">
								<h4>美洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopovermeizhou" :key='index'>
										<router-link to="">{{item.cnpopovermeizhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>非洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopoverfeizhou" :key='index'>
										<router-link to="">{{item.cnpopoverfeizhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>大洋洲</h4>
								<ul>
									<li v-for="(item,index) in item.cnpopoverdayangzhou" :key='index'>
										<router-link to="">{{item.cnpopoverdayangzhouname}}</router-link>
									</li>
								</ul>
							</div>
							<div class="cnbcii-cell">
								<h4>后院</h4>
								<ul>
									<li>
										<router-link to="">海阔天空</router-link>
									</li>
									<li>
										<router-link to="">转让专区</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<span slot="reference" class="cfsub cn-banlist">版面列表 <i class="el-icon-caret-bottom" /></i></span>
				</el-popover>
				<div class="cfsub cn-pub"><i class="inbg xpub"></i>发新帖</div>
			</div>
		</div>
		<div class="thread_banner">
			<div class="swiper-container mohu-bg">
				<div class="swiper-wrapper">
					<div class="swiper-slide mohuslide swiper-no-swiping" v-for="(item,index) in threadbanner" :key="index" :style="{background:'url('+item.threadbannerimg+')'}">



					</div>
				</div>
				<div class="thread_banner_content">
					<div class="swiper-container gallery-top">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index">
								<img :src="item.threadbannerimg" width="100%" height="100%" />

							</div>
						</div>
					</div>
					<div class="swiper-container gallery-thumbs">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index"><img :src="item.threadbannerimg"
								 width="100%" height="100%" />

							</div>
						</div>
					</div>
					<div class="swiper-container swiperbox">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in threadbanner" :key="index">
								<span class="">{{item.threadbannerdsc}}</span>
								<em class="swipername">{{item.threadbannerzuozhe}}</em>
								<router-link to="" class="swiper_a"><img :src="item.threadbanneravter" /></router-link>
								<img class="cnsi-authen index-tooltip" style="width: 32px; height: 32px;" src="//common1.qyerstatic.com/bbs/old/images/authentication_u.png" />
							</div>
						</div>
					</div>
				</div><!-- thread_banner_content -->
			</div> <!-- mohu-bg -->

		</div><!-- //thread_banner -->
		<br />
		<br />
		<div class="thread_question">
			<div class="thread_questionlist">
				<el-tabs style="height: auto;">
					<el-tab-pane label="游记策略">
						<div class="yl-con yls" :class="index===con.length-1?'last-yl-cons':''" v-for="(item,index) in con" :key='index'>
							<i class="ylc-line ylcl"></i>
							<div class="con-inner xfix">
								<router-link to="" class="anchtoup">
									<img class="con-pic" :src="item.conavter"></router-link>
								<dl class="con-detail">
									<dt class="dl-title">
										<router-link to="" class="dl-name xc32 aptle">{{item.conname}}</router-link>
										<img src="//common1.qyerstatic.com/bbs/old/images/index/at_member.png" class="indexauthen">
									</dt>
									<dd class="dl-des">
										<span class="dd-inw">在<strong>
												<router-link to="">{{item.condiqu}}</router-link>
											</strong>发布的游记
											<img src="../../../assets/images/qiongyou/dianzan.png" class="dianzan" />
											<em class="xnum xc32">{{item.condianzan}}</em>人赞</span>
										<span class="con-time"><i class="inbg zhhf"></i>最后回复于
											<b lass="xnum">{{item.conhour}}前</b></span></dd>
									<dd class="xcfb">
										<div class="tle-con">
											<p>
												<router-link to="" class="tc-title aptle">{{item.condsc}}</router-link>
											</p>
											<p class="tc-desc">{{item.contxt}}</p>
										</div>
										<router-link to="" class="tc-awrap anchtoup"><img class="tc-rimg" :src="item.conpic"></router-link>
									</dd>
								</dl>
							</div>
						</div>
						<a class="tab-load" v-if="page<page_count" @click='loadMore'>点击加载更多</a>
						<a class="tab-load" v-else>没有更多了</a>
					</el-tab-pane>
					<el-tab-pane label="结伴同游">
						<p class="jy-tips">
							<i class="inbg jyts"></i>我想约上你，一起看世界<span class="ytsplit">|</span>
							<router-link to='' class="yt-a" target="_blank">更多待约穷游er<i class="inbg lfci"></i></router-link>
						</p>
						<div class="yl-con" v-for="(item,index) in jieban" ref="testH" :key="index" :class="index===jieban.length-1?'last-yl-con':''">
							<!-- :style="domheight()" -->
							<i class="ylc-line ylcl"></i>
							<div class="con-inner xfix">
								<router-link to='' class="anchtoup"><img class="con-pic" :src="item.jiebanavter" /></router-link>
								<dl class="con-detail"><dt class="dl-title">
										<router-link to="" class="dl-name xc32 aptle">{{item.jiebanname}}</router-link>
									</dt>
									<dd class="dl-des clearfix">
										<span class="dd-inw">
											<i class="inbg seeicon"></i>
											<em class="xnum xc32">{{item.jiebanliulan}}</em>人浏览
											<i class="inbg replyicon"></i>
											<em class="xnum xc32">{{item.jiebanhuifu}}</em>人回复</span>
										<span class="con-time"><i class="inbg zhhf"></i>最后回复于<b class="xnum">{{item.jiebantime}}前</b></span>
									</dd>
									<dd class="xcfb">
										<div class="tle-con">
											<p>
												<router-link to='' class="tc-title aptle">
													<span class="innertxt">{{item.jiebantxt}}</span>
												</router-link>
											</p>
											<div class="tlec-cd clearfix">
												<div class="tc-calen">
													<p class="xmb6">出发<em class="xnum xc32 xml8">{{item.jiebanchufa}}</em></p>
													<p class="xmb6">返程<em class="xnum xc32 xml8">{{item.jiebanfancheng}}</em></p>
												</div>
												<p class="tc-dir">
													<span class="tcd-sn"><i class="inbg dreicon"></i></span>
													<span class="indrp">{{item.jiebanmudi}}</span></p>
											</div>
										</div>
									</dd>
								</dl>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="版面列表">
						<div class="yl-con" v-for="(item,index) in zlcli" :key="index" :data-index='index'>
							<!-- 返回一个字符判断检测 -->
							<h3 class="zlc-tle" :data-index='index'>{{item.zlctitle}}</h3>
							<li class="zlcli" v-for="(item,index) in item.zlclicontent" :key="index">
								<router-link to=' ' class="zlc-pic"><img :src="item.zlcpic" width="48" height="48" alt="item.zlcname"></router-link>
								<div class="zlc-dest">
									<router-link to=' ' class="zlc-name">{{item.zlcname}}</router-link>
									<p>{{item.zlctxt}}</p>
								</div>
							</li>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div class="lc-fr">
				<div class="fr-login"> <!-- v-if="isLogin" -->
					<!-- v-if="isLogin()" -->
					<!-- 判断是否登录显示不同div -->
					<div class="reg-fir">
						<p class="rf-des">加入穷游社区<br>和80,000,000穷游er在一起<br>发现最世界</p>
						<a class="rf-reg"  @click="dialogTableVisible = true">注册穷游</a>
						<p class="rf-login">已有账号？立即<router-link to="/Login" class="rfl-lg">登录</router-link>
						</p>
						<p class="rf-oth">或通过第三方登录<img class="rf-icon" src="../../../assets/images/qiongyou/weibo.png"> <img class="rf-icon"
							 src="../../../assets/images/qiongyou/qq.png"> <img class="rf-icon" src="../../../assets/images/qiongyou/weixin.png"></p>
					</div><!-- reg-fir -->
					<div style="clear: both;"></div>
					<div class="reg-sec">
						<img src="../../../assets/images/qiongyou/d1.png" width="44px" height="44px" class="reg-sec-img" />
						<div class="rs-co">
							<p>在手机上看帖结伴</p>
							<p class="rc-an">
								<router-link to=''>iPhone</router-link><span class="rca-line">|</span>
								<router-link to=''>Android</router-link>
							</p>
						</div>
					</div>
				</div>
				<div class="fr-userinfo"> <!-- v-else="isUser" -->
					<!-- v-else -->
					<div class="fr-user">
						<div class="ui-des">
							<router-link to=''><img class="ud-pic" src="http://pic.qyer.com/avatar/6.png?v=0"></router-link>
							<div class="ud-con">
								<router-link to=''>sbapple</router-link>
								<p class="udc-bs">
									<span class="index-tooltip"><img width="13px" height="13px" src="../../../assets/images/qiongyou/dianzan.png" /><strong
										 class="xnum">0</strong></span>
									<span class="index-tooltip"><img width="14px" height="14px" src="../../../assets/images/qiongyou/lovewhite.png" /><strong
										 class="xnum">0</strong></span>
								</p>
								<p class="udc-sf">新进弟子</p>
							</div>
							<div style="clear: both;"></div>
						</div><!-- ui-des -->
						<div class="infotab">
							<el-tabs>
								<el-tab-pane label="我的社区">
									<ul class="ut-fir">
										<li>
											<router-link to="">我的收藏<b class="xnum">0</b></router-link>
										</li>
										<li>
											<router-link to="">我的草稿<b class="xnum">0</b></router-link>
										</li>
										<li>
											<router-link to="">我的全部帖子<b class="xnum">0</b></router-link>
										</li>
										<li>
											<router-link to="">我的回复<b class="xnum">0</b></router-link>
										</li>
									</ul>
								</el-tab-pane>
								<el-tab-pane label="浏览历史">
									<ul class="ut-sec">
										<li>
											<router-link to=''>葡萄夫妇游日本【南北九州枫叶季超强实用攻略】福冈|佐贺|鹿儿岛|指宿|熊本|由布院|别府，附大久野岛详细攻略，客路体验</router-link>
										</li>
									</ul>
								</el-tab-pane>
							</el-tabs>
						</div><!-- infotab -->
					</div>
				</div>
				<div class="huodong">
					<p class="huodong-title">活动社区
						<span class="morehuodong">更多<i class="el-icon-d-arrow-right"></i></span></p>
					<router-link to="" class="huodongtu"><img src="https://pic.qyer.com/album/user/3249/66/QktRSxwBYk0/index/270x125"
						 alt="" /></router-link>
					<router-link to="" class="huodongtu"><img src="https://pic.qyer.com/album/user/3249/66/QktRSxwBYk0/index/270x125"
						 alt="" /></router-link>

				</div>
				<div class="huodongs">
					<p class="huodong-title">可能感兴趣的人
						<span class="morehuodong">换一换<i class="el-icon-refresh"></i></span></p>
					<ul>
						<li class="huodong-intersting">
							<img src="https://pic.qyer.com/avatar/003/39/23/14/200?v=0" class="inimg" />
							<div class="huodong-dsc">
								<p class="miic-nm">奶油红烧肉<img src="//common1.qyerstatic.com/bbs/old/images/index/at_member.png" width="13px"
									 height="13px" /><span>+关注</span></p>
								<p class="ielli">穷游精华作者</p>
							</div>
						</li>
					</ul>
				</div>
			</div><!-- lc-fr -->
		</div>
		<div style="clear: both;"></div>
		<el-dialog title="注册" :visible.sync="dialogTableVisible" width='370px'>
			<div class="q-login-form q-login-formphone">
					<el-form :model="ruleForms" :rules="duanxinrules" ref="ruleForms" class="demo-ruleForm">
						<div>
							<div class="login-select">
								<el-select v-model="ruleForms.countryvalue" placeholder="请选择" rel="countryvalue">
									<el-option v-for="item in country" :key="item.value" :label="item.label" :value="item.value">
										<span style="float: left">{{ item.label }}</span>
										<span style="float: right; color: #8492a6; font-size: 13px">({{ item.value }})</span>
									</el-option>
								</el-select>
							</div>
							<el-form-item prop="phone">
								<div class="login-phone">
									<el-input type="password" placeholder="请输入手机号码" v-model.number="ruleForms.phone" autocomplete="off" rel="phone"></el-input>
								</div>
							</el-form-item>
						</div>
						<div class="verifycode">
							<div class="yanzhengma">
								<el-form-item prop="verifycode">
									<!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
									<el-input v-model="ruleForms.verifycode" placeholder="请输入验证码" class="identifyinput" rel="verifycode"></el-input>
								</el-form-item>
							</div>
							<div class="identify">
								<div @click="refreshCode">
									<SIdentify :identifyCode="identifyCode"></SIdentify>
								</div>
							</div>
							<div style="clear: both;"></div>
							<p @click="refreshCode" class="loginrefresh">看不清，换一张 <i class="el-icon-refresh"></i></p>
						</div>
						<div class="verifycode">
							<div class="yanzhengma">
								<el-form-item prop="phonecode">
			
									<el-input v-model="ruleForms.phonecode" placeholder="请输入短信验证码" class="identifyinput" rel="phonecode"></el-input>
								</el-form-item>
							</div>
							<div class="identify">
								<el-button @click="send" style="width:100%;position: relative;top:-16px;" type="success" :disabled="disabled=!show">
									<span v-show="show">获取验证码</span>
									<span v-show="!show" class="count">{{count}} s</span>
								</el-button>
							</div>
						</div>
						<div style="clear: both;"></div>
						<el-form-item prop="name" class="namepass">
							<el-input v-model="ruleForms.name" placeholder="输入一个极具辨识度名字" rel="name"></el-input>
						</el-form-item>
						<el-form-item prop="pass" class="namepass">
							<el-input v-model="ruleForms.pass" placeholder="输入8-16位数的密码" rel="pass"></el-input>
						</el-form-item>
						<el-button class="haobtn" @click="submitsForm('ruleForms')">登录</el-button>
					</el-form>
					<div class="q-login-bottom"><span class="fl">
							已有穷游帐号？<router-link to="/Login">登录</router-link></span><span class="fr">
							同意<router-link to="">会员条款</router-link>和<router-link to="">免责声明</router-link></span></div>
				</div><!-- q-login-form -->
			
			</div>
</el-dialog>
	</el-col>

</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import Swiper from "swiper"
	import headers from '../../../pages/web/Thread/header.vue'
	import SIdentify from '../../../pages/web/compoents/identify.vue'
	export default {
		name: 'Thread',
		data() {
				var validPhone = (rule, value, callback) => {
				if (!value) {
					callback(new Error('请输入电话号码'))
				} else if (!isvalidPhone(value)) {
					callback(new Error('请输入正确的11位手机号码'))
				} else {
					callback()
				}
			}
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			}
			// 验证码自定义验证规则
			const validateVerifycode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入验证码'))
				} else if (value !== this.identifyCode) {
					console.log('validateVerifycode:', value)
					callback(new Error('验证码不正确!'))
				} else {
					callback()
				}
			
			}
			//短信验证码validatephonecode
			var validatephonecode = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请输入6位短信验证码'));
				}
			
			}
			return {
				threadbanner: [],
				cnpopover: [],
				con: [],
				jieban: [],
				zlcli: [],
				page: 1,
				page_count: '', 
	            dialogTableVisible: false,
				ruleForms: {
						phone: '',
						verifycode: '',
						phonecode: '',
						name: '',
						pass: ''
					},
				
					duanxinrules: {
						phone: [{
							required: true,
							trigger: 'blur',
							validator: validPhone
						}],
						verifycode: [{
							required: true,
							trigger: 'blur',
							validator: validateVerifycode
						}],
						phonecode: [
				
							{
								required: true,
								trigger: 'blur',
								validator: validatephonecode
							}
						],
						pass: [{
							validator: validatePass,
							trigger: 'blur',
							required: true,
						}],
						name: [{
								required: true,
								message: '请输入用户名',
								trigger: 'blur'
							},
							{
								min: 3,
								max: 5,
								message: '长度在 8 到 16 个包含大小写字母',
								trigger: 'blur'
							}
						]
					},
					country: [{
						value: '012',
						label: '中国'
					}, {
						value: '052',
						label: '日本'
					}, {
						value: '063',
						label: '泰国'
					}, {
						value: '075',
						label: '新加坡'
					}, {
						value: '045',
						label: '马来西亚'
					}],
					countryvalue: "中国",
					identifyCodes: '1234567890',
					identifyCode: '',
					show: true, // 初始启用按钮
					count: '', // 初始化次数
					timer: null,
				
			}
		},
		mounted() {
			var galleryThumbs = new Swiper('.gallery-thumbs', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				spaceBetween: 10,
				slidesPerView: 3,
				noSwiping: true,
				loopedSlides: 10, //looped slides should be the same
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new Swiper('.gallery-top', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				effect: 'fade',
				loopedSlides: 10, //looped slides should be the same
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs,
				},
			});
			var mohubg = new Swiper('.mohu-bg', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				effect: 'fade',
				noSwiping: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var swiperbox = new Swiper('.swiperbox', {
				observer: true,
				observeParents: true,
				autoplay: true, //等同于以下设置
				noSwiping: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slidesPerView: 1,

			});
			this.$nextTick(() => {
				this.getHeightList();
				this.buildcount();
			});
			this.identifyCode = ''
			this.makeCode(this.identifyCodes, 4)
		},
			props: [],
		
		created() {
			this.buildthreadbanner();
			this.buildcnpopover();
			this.buildcon();
			this.buildjieban();
			this.buildzlcli();
       
		},
		computed: {
			buildcount() {
				return this.$store.state.token
				if(this.$store.state.token!=0&&this.$store.state.token!=null){				
					this.isLogin=false;
					this.isUser=true;
					this.buildisUser();//请求相关数据
				}else{					
					this.isLogin=true;
					this.isUser=false;
				}
			}
		},
		methods: {
			buildthreadbanner() {
				this.axios.get('/api/buildthreadbanner').then(res => {
					this.threadbanner = res.data.data

				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcnpopover() {
				this.axios.get('/api/buildcnpopover').then(res => {
					this.cnpopover = res.data.data

				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcon() {
				this.axios.get('/api/buildcon').then(res => {
					this.con = res.data.data

				}).catch(function(error) {
					console.log(error)
				})

			},
			buildjieban() {
				this.axios.get('/api/buildjieban').then(res => {
					this.jieban = res.data.data

				}).catch(function(error) {
					console.log(error)
				})
			},
			buildzlcli() {
				this.axios.get('/api/buildzlcli').then(res => {
					this.zlcli = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			loadMore() {
				this.page += 1;
				this.axios.get('/api/buildcon', {
					params: {
						'current_page': this.page, //请求页面					
					},
				}).then(res => {

					this.con = this.con.concat(res.data.con); //将请求回来的数据和上一次进行组合
				}).catch(err => {
					this.$toast.fail("系统开小差,请重试");
				});

			},
			getHeightList() {
				var o = document.getElementsByClassName("last-yl-con").offsetHeight;
				console.log(o);
			},
			submitsForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('/api/buildlogin', {
							params: {
								'phone': this.ruleForms.phone,
								'name': this.ruleForms.name,
								'pass': this.ruleForms.pass,
								'verifycode ': this.ruleForms.value,
								'phonecode ': this.ruleForms.value,
								
			
							}
						}).then(res => {
							var json = res.data
							console.log(json.data);
							this.$Message.success('success!');
							this.$store.commit('ADD_COUNT', json.data.token);
							let clock = window.setInterval(() => {
								this.totalTime--;
								if (this.totalTime < 0) {
									window.clearInterval(clock);
									this.$Loading.finish();
									this.$router.push('/');
								}
							}, 1000)
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			// 随机生成四位验证码
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min)
			},
			// 点击切换验证码
			refreshCode() {
				this.identifyCode = ''
				this.makeCode(this.identifyCodes, 4)
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					]
				}
				console.log(this.identifyCode)
			}
		},

		components: {
			headers,
			Swiper,
			SIdentify

		},
	}
</script>

<style lang="scss">
	.rf-reg:hover {
    background-color: #fff;
    color:#10b041 !important;
    text-decoration: none;
}
	 .haobtn {
		display: inline-block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border: 0;
		padding: 0 15px;
		width: 100%;
		height: 36px;
		line-height: 36px;
		border-radius: 3px;
		font-size: 16px;
		color: #fff;
		cursor: pointer;
		vertical-align: top;
		background-color: #3f9f5f;
	
	}

		.verifycode:nth-of-type(3) {
		margin-top: 0;
	}
	
	.verifycode {
		margin-top: 20px;
		width: 100%;
	
		.yanzhengma {
			width: 60%;
			float: left;
		}
	}
	
	.verifycode .yanzhengma {
		/deep/ .el-form-item__content {
			width: 100% !important;
			float: left !important;
		}
	}
	
	.verifycode .identify {
		width: 35%;
		height: 40px;
		float: right;
	}
	
	.loginrefresh {
		float: right;
		font-size: 12px;
		position: relative;
		top: -20px;
	}
	
	.login-select {
		width: 25%;
		float: left;
	}
	
	.q-login-formphone {
		/deep/ .el-form-item__content {
			width: 70%;
			float: right;
		}
	}
	
	.namepass {
		/deep/ .el-form-item__content {
			width: 100% !important;
		}
	}
	
	.q-login-bottom {
		zoom: 1;
		padding: 10px 0;
		height: 20px;
		line-height: 20px;
		color: #959595;
		font-size: 14px;
	
		a {
			color: #10b041;
		}
	
		.fr {
			float: right;
		}
	}
	.huodongs {
		margin-top: 30px;


		.huodong-title {
			margin-bottom: 20px;
			font-size: 20px;
			color: #323232;

			.morehuodong {
				float: right;
				color: #10b041;
				margin-top: 6px;
			}
		}

		.huodong-intersting {
			position: relative;
			padding-bottom: 16px;
			margin-bottom: 10px;
			list-style: none;
			border: 1px solid #ececec;

			.inimg {
				display: inline-block;
				width: 48px;
				height: 48px;
				position: relative;
				top: 10px;
				margin-left: 15px;
				border: 3px solid #f5f5f5;
				border-radius: 50%;
			}

			.huodong-dsc {
				width: 160px;
				display: inline-block;
				margin-left: 5px;

				.miic-nm {
					color: #959595;
					margin-bottom: 5px;

					span {
						float: right;
						color: #10b041;
					}
				}

				.ielli {
					color: #323232;
				}
			}
		}
	}

	.thread_question .lc-fr {
		float: right;
		margin: 0px 0 0 22px;
		width: 260px;

		.fr-login {
			border: 1px solid #ececec;
			border-radius: 2px;
			overflow: hidden;

			.reg-fir {
				overflow: hidden;
				width: 268px;
				height: 260px;
				background-size: cover;
				background: url(//common1.qyerstatic.com/bbs/old/images/index/regbg.png) no-repeat 50%;

				.rf-des {
					padding: 25px 0 0px 25px;
					color: white;
					line-height: 26px;
					font-size: 16px;
				}

				.rf-reg {
					display: block;
					margin: 16px 0 0 22px;
					width: 104px;
					line-height: 34px;
					border: 1px solid #fff;
					border-radius: 3px;
					text-align: center;
					font-size: 16px;
					color: #fff;
					text-decoration: none;
				}

				//rf-reg
				.rf-login {
					font-size: 12px;
					margin: 35px 0 0 22px;
					color: #f5f5f5;

					.rfl-lg {
						color: #10b041;
						font-weight: 500;
						margin-left: 5px;
						font-size: 12px;

					}
				}

				//rf-login
				.rf-oth {
					color: #f5f5f5;
					font-size: 12px;
					margin: 5px 0 0 22px;

					.rf-icon {
						vertical-align: middle;
						margin-left: 10px;

						border: #f5f5f5 1px solid;
						border-radius: 50px;
					}
				}
			}

			.reg-sec {
				padding: 22px 0 21px 23px;
				margin-bottom: 43px;



				.reg-sec-img {
					float: left;

				}

				.rs-co {
					float: left;
					margin-left: 10px;

					p {
						margin-top: 2px;
						font-size: 12px;
					}

					.rc-an {
						margin-top: 5px;
						color: #d7d7d7;
						font-size: 12px;

						a {
							font-size: 12px;
							color: #10b041;
						}

						.rca-line {
							margin: 0 7px;
						}
					}

				}
			}

			//.reg-sec

		}

		.fr-userinfo {
			border: 1px solid #ececec;
			border-radius: 2px;
			overflow: hidden;

			.ui-des {
				margin: 22px 0 15px 22px;
				clear: both;

				.ud-pic {
					width: 80px;
					height: 80px;
					float: left;
					border-radius: 50%;

				}

				//ui-des
				.ud-con {
					margin-left: 5px;
					width: 90px;
					float: left;

					a {
						color: #10b041;
					}

					.index-tooltip {
						display: inline-block;
						margin: 5px 7px 7px 0;
						min-width: 36px;
						color: white;
						background-color: #10b041;
						line-height: 16px;
						border-radius: 8px;

						img {
							vertical-align: text-top;
							margin-left: 5px;
							margin-right: 2px;
						}
					}
				}
			}
		}

		.ut-fir {
			margin: 15px 0 0 26px;
			padding-bottom: 20px;
			font-size: 14px;
			line-height: 36px;
			list-style: none;

			a {

				color: #959595;
				text-decoration: none;

			}

			.xnum {
				display: inline-block;
				background-color: #f5f5f5;
				padding: 0 10px;
				border-radius: 10px;
				font-weight: 400;
				line-height: 20px;
				vertical-align: 1px;
				margin-left: 10px;
				color: #323232;
			}
		}

		.ut-sec {
			padding: 14px 0 15px 32px;
			line-height: 26px;
			list-style-type: disc;
			color: #959595;

			a {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block;
				color: #959595;
			}
		}

		.huodong {
			margin-top: 30px;
			border-bottom: 1px solid #ececec;

			.huodong-title {
				margin-bottom: 20px;
				font-size: 20px;
				color: #323232;

				.morehuodong {
					float: right;
					color: #10b041;
					margin-top: 6px;
				}
			}

			.huodongtu img {

				margin-bottom: 39px;
				width: 260px;

			}
		}

		//huodong
	}

	.fr-userinfo .infotab {
		/deep/ .el-tabs__item {
			padding: 0 !important;
			width: 129px;
			text-align: center;
			border-right: 1px solid #ececec;
		}
	}

	.fr-userinfo .infotab {
		/deep/ .el-tabs__item.is-active {
			color: #10b041;
		}
	}

	.fr-userinfo .infotab {
		/deep/ .el-tabs__item:hover {
			color: #10b041;
		}
	}

	.fr-userinfo .infotab {
		/deep/ .el-tabs__active-bar {
			background-color: #10b041;
			width: 129px !important;

		}
	}

	.yl-con .zlc-tle {
		padding: 0 10px;
		border-left: 2px #10b041 solid;
		font-weight: 500;
		font-size: 20px;
		color: #323232;
		margin: 0px 0 20px;
	}

	.yl-con .zlcli {
		list-style: none;
		float: left;
		width: 226px;
		padding-bottom: 35px;

		.zlc-pic {
			float: left;
			margin-right: 6px;
		}

		.zlc-dest {
			float: left;

			a {
				font-size: 14px;
				color: #323232;
				line-height: 16px;
			}

			p {
				margin-top: 5px;
				width: 130px;
				line-height: 14px;
			}
		}
	}

	.thread_question {
		width: 980px;
		margin: 0 auto;

		.thread_questionlist {
			width: 680px;
			height: auto;
			float: left;

			.yl-con {
				position: relative;
				padding: 17px 0 20px;
				clear: both;

				.xcfb {
					clear: both;
				}

				.tlec-cd {
					position: relative;
					left: -34px;
					zoom: 1;
					width: 400px;
					top: 0;
					margin-top: 5px;
					padding-left: 34px;
					border: 1px solid #ececec;
					border-left: none;

					.tc-calen {
						float: left;
						width: 110px;
						margin: 12px 15px 10px 0;
						padding-right: 16px;
						color: #9d9d9d;
						font-size: 14px;
						line-height: 14px;
						border-right: 1px solid #ececec;

					}

				}

				.xmb6 {
					margin-bottom: 6px;

					.xc32 {
						color: #323232;
					}

					.xml8 {
						margin-left: 8px;
					}
				}

				.tc-dir {
					float: left;
					line-height: 66px;
					height: 56px;
					font-size: 14px;
					color: #636363;

					.tcd-sn {
						display: table-cell;
						vertical-align: middle;

						.dreicon {
							width: 10px;
							height: 14px;
							background-position: -27px -202px;
						}

					}

					.indrp {
						display: table-cell;
						padding: 1px 0 0 5px;
						width: 230px;
						vertical-align: middle;
						line-height: 20px;
						word-wrap: break-word;
						word-break: break-all;
					}
				}
			}
		}
	}

	.yl-con .ylc-line {
		position: absolute;
		left: 23px;
		top: 30px;
		height: 100%;
		border-left: 1px solid #ececec;
	}

	.last-yl-con .ylc-line {
		display: none;
	}

	.last-yl-con .tlec-cd {
		border-left: 1px #ececec solid !important;
	}

	.last-yl-cons .ylc-line {
		display: none;
	}

	.yl-con .xfix:after,
	.yl-con .xfix:before {
		content: "";
		display: table;
	}

	.index-tooltip {
		cursor: pointer;
	}

	.yl-close {
		position: absolute;
		right: 0;
		width: 10px;
		height: 10px;
		background-position: 0 -59px;
		cursor: pointer;
	}

	.inbg {
		display: inline-block;
		background: url(//common1.qyerstatic.com/bbs/old/images/index/indexs.png) no-repeat;
	}

	.con-time {
		position: relative;
		top: 2px;
	}

	.con-pic {
		position: relative;
		float: left;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		z-index: 200;
	}

	.con-detail {
		float: left;
		margin: 14px 0 0 9px;
		width: 623px;

		.dl-title {
			float: left;
			margin: 0 9px 4px 0;
			font-size: 12px;

			.xc32 {
				color: #323232;
			}

			.index-tooltip {
				cursor: pointer;
			}

			.indexauthen {
				margin-left: 2px;
				width: 16px;
				height: 16px;
				vertical-align: -3px;
			}

		}

		.dl-des {
			float: left;
			color: #959595;
			line-height: 20px;

			.dd-inw {
				float: left;
				font-size: 12px;
				font-weight: 500;

				em {
					font-size: 12px;
				}

				.seeicon {
					margin-right: 3px;
					width: 16px;
					height: 12px;
					background-position: 0 -79px;
					vertical-align: -1px;
				}

				.caicon,
				.replyicon {
					vertical-align: -2px;
				}

				.replyicon {
					margin: 0 3px 0 20px;
					width: 12px;
					height: 12px;
					background-position: 0 -92px;
				}

				.dianzan {
					vertical-align: sub;
					margin-left: 5px;
					margin-right: 5px;
				}
			}

			.dl-des strong {
				margin: 0 7px;
				font-size: 12px;
				font-weight: 500;

			}

			.dd-inw a {
				color: #959595;
				font-weight: 500;
				font-size: 12px;
				margin-right: 5px;
				text-decoration: underline;
			}

			.bicf.praise {
				position: relative;
				margin-left: 16px;
				top: -2px;
				color: #ececec;
				font-size: 22px;
				line-height: 22px;
				vertical-align: -8px;
				display: inline-block;
			}
		}

		.con-time,
		.tle-con {
			float: left;
			font-size: 12px;

			b {
				font-size: 12px;
			}
		}

		.tle-con {
			margin-top: 22px;
			width: 415px;
			color: #323232;

			.tc-title {
				display: block;
				margin-right: 15px;
				font-size: 16px;
				line-height: 24px;
				color: #323232;
				word-wrap: break-word;
				word-break: break-all;
			}

			.tc-desc {
				margin-top: 15px;
				width: 400px;
				line-height: 20px;
				color: #959595;
			}

		}

		.tc-rimg {
			margin: 45px 0 0 9px;
			width: 161px;
			height: 107px;
		}
	}

	.xfix:after {
		clear: both;
	}

	.xfix:after,
	.xfix:before {
		content: "";
		display: table;
	}

	.zhhf {
		width: 14px;
		height: 14px;
		margin: 0 5px 0 20px;
		background-position: -28px -263px;
		vertical-align: -2px;
	}

	.tab-load {

		display: block;
		cursor: pointer;
		margin: 50px auto;
		line-height: 38px;
		border: 1px solid #ececec;
		font-size: 14px;
		text-align: center;
		color: #d7d7d7;
	}

	.tab-load:hover {
		color: #10b041;
		border: #10b041 1px solid;
	}

	.jy-tips {
		margin-bottom: 8px;
		font-size: 14px;
		color: #636363;

		.jyts {
			width: 16px;
			height: 12px;
			margin-right: 8px;
			background-position: -53px -271px;
		}

		.ytsplit {
			color: #ececec;
			margin: 0 8px;
		}

		.yt-a {
			color: #10b041;
		}

	}

	.clearfix:after {
		display: block;
		font-size: 0;
		height: 0;
	}

	.clearfix:after,
	.q-layer-header:after,
	.q-layer-message .layer-msg-tab ul:after {
		visibility: hidden;
		content: " ";
		clear: both;
	}

	// .yl-con .ylc-line:last-child{
	// 	display: none;
	// }
	.thread_questionlist {
		/deep/ .el-tabs__item {
			padding: 0 !important;
			width: 226.6px;
			font-size: 18px;
			height: 50px;
			text-align: center;
			color: #888888;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__item.is-active {
			color: #10b041;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__item:hover {
			color: #10b041;
			cursor: pointer;
		}
	}

	.thread_questionlist {
		/deep/ .el-tabs__active-bar {
			background-color: rgb(16, 176, 65);
		}
	}

	.thread_header {
		width: 980px;
		padding: 10px 0;
		margin: 0 auto;

		.cn-desc {
			float: left;
			font-size: 18px;
			color: #3f9f5f;

			.desctitle {
				float: left;
				line-height: 100px;
				color: #147850;
				font-size: 36px;
				font-weight: 500;
			}

			.descjj {
				float: left;
				margin-left: 16px;

				strong {
					display: inline-block;
					margin-top: 47px;
					line-height: 18px;
					font-weight: 500;
					font-size: 18px;
				}

				.descfs {
					padding-left: 14px;
					border-left: 1px solid #3f9f5f;
				}

				i {
					display: inline-block;
					margin: 0 5px;
					vertical-align: 5px;
				}
			}
		}

		.cn-fr {
			float: right;
			width: 270px;

			.cfsub {
				float: left;
				margin-top: 29px;
				font-size: 18px;
				border-radius: 3px;
				text-align: center;
			}

			.cn-banlist {
				width: 123px;
				line-height: 38px;
				color: #3f9f5f;
				border: 1px solid #3f9f5f;
				cursor: pointer;
			}

			.cn-pub {
				width: 125px;
				margin-left: 18px;
				line-height: 40px;
				color: #fff;
				background-color: #1c95dd;
				cursor: pointer;
			}

			.cn-pub .xpub {
				margin-right: 8px;
				width: 15px;
				height: 13px;
				background-position: 0 -14px;
				vertical-align: 1px;
			}

			.inbg {
				display: inline-block;
				background: url(//common1.qyerstatic.com/bbs/old/images/index/indexs.png) no-repeat;
			}
		}

	}

	// thread_banner
	.mohu-bg {
		width: 100%;
		height: 400px;
		position: relative;
		overflow: hidden;
		display: flex;
		background-color: rgba(141, 141, 141, 2);
		background-blend-mode: darken;


		.mohuslide {
			width: 100%;
			height: 400px;
			position: relative;
			overflow: hidden;
			filter: blur(20px);



		}
	}

	.swiperbox {
		position: absolute;
		width: 350px;
		height: 185px;


		opacity: 1;
		top: 25px;
		right: 10px;

		span {
			display: inline-block;
			width: 70%;
			height: auto;
			color: white;
			position: absolute;
			top: 105px;
			left: 85px;
			line-height: 25px;
			font-size: 16px;
			// color: #fff;
			//  text-shadow: 0 0 2px rgba(12,3,6,.5);
		}

		.swipername {
			display: inline-block;
			width: 70%;
			height: auto;
			color: black;
			position: absolute;
			top: 35px;
			color: white;
			left: 115px;
		}

		.cnsi-authen {
			position: absolute;
			padding: 5px;
			left: 65px;
			z-index: 2000;
			top: 49px;

			overflow: hidden;
		}

		.swiper_a {
			position: absolute;
			padding: 5px;
			left: 15px;
			z-index: 2000;
			top: 0px;
			overflow: hidden;
			background: #fff;
			border-radius: 50%;
			width: 80px;
			height: 80px;
			background: hsla(0, 0%, 100%, 0.3);

			img {
				width: 80px;
				height: 80px;
				border-radius: 50%;

			}
		}
	}

	.thread_banner {
		width: 100%;
		height: 400px;
		overflow: hidden;
		position: relative;
		z-index: 100;

		.gallery-bg {

			width: 100%;
			height: 400px;
			z-index: -1;



		}

		.thread_banner_content {
			margin: 0 auto;
			width: 980px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			opacity: 1;
			z-index: 1000;

			.gallery-top {
				float: left;
				width: 680px;
				height: 400px;
				position: relative;

			}

			.gallery-thumbs {
				width: 360px;
				position: absolute;
				bottom: 90px;
				right: 0;


				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
				}
			}


		}
	}

	.swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.gallery-thumbs {
		height: 90px;
		box-sizing: border-box;
		padding: 10px 0;
		width: 100px;
	}

	.gallery-thumbs .swiper-slide {
		height: 48px;
		width: 48px !important;
		opacity: 0.4;
		position: absolute;
		bottom: 0;
		left: 85px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(2) {
		margin-left: 55px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(3) {
		margin-left: 110px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(4) {
		margin-left: 165px;
	}

	.gallery-thumbs .swiper-slide:nth-of-type(5) {
		margin-left: 220px;
	}

	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
		border: 2px solid #fff;
		height: 44px;
		width: 44px !important;
	}

	.gallery-thumbs .swiper-slide-thumb-active::before {
		content: "";
		position: absolute;

		width: 0;
		height: 0;
		left: 17px;
		top: -10px;
		line-height: 0;
		border-width: 0 5px 5px;
		border-style: dashed dashed solid;
		border-color: transparent transparent #fff;
		border-color: transparent transparent hsla(0, 0%, 100%, 0.5);
	}

	.cnpopover {
		width: 980px;
		height: auto;


		.cnbci-item {
			width: 240px;
			margin-left: 20px;
		}

		.cnbci-fo {
			width: 200px;

			position: relative;
			float: left;
			padding: 12px 0 8px;

			h4 {
				margin-bottom: 10px;
				font-size: 16px;
				font-weight: 500;
			}

			.cnbcii-cell {
				float: left;
				width: 100px;
				text-align: left;
				height: 190px;

				ul li {
					list-style: none;
					font-size: 12px;
					color: #636363;
					line-height: 25px;

					a {
						font-size: 12px;
						color: #636363;
					}
				}
			}
		}

		.cnbci-fir {
			position: relative;
			float: left;
			padding: 12px 0 8px;

			h4 {
				margin-bottom: 10px;
				font-size: 16px;
				font-weight: 500;
			}

			.td {
				width: 120px;
				height: 25px;
				text-align: left;

				font-size: 12px;
				color: #636363;

				a {
					font-size: 12px;
					color: #636363;
				}
			}

			.firli {
				list-style: none;
				font-size: 12px;
				color: #636363;
				line-height: 25px;

				a {
					font-size: 12px;
					color: #636363;
				}
			}
		}
	}
</style>
