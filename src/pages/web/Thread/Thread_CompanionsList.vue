<template>
	<!-- 	结伴同游列表 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Com_header">
			<router-link to="/Thread">穷游论坛</router-link>
			<div class="Com_from">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>

				</el-form>
			</div>
		</div>
		<ul class="Com-nav" v-for="(item,index) in coutryCom" :key='index'>
			<li class="itm">
				<router-link to='' class="itma">论坛首页</router-link>
			</li>
			<li class="itm">
				<router-link to='' class="itma">结伴同游</router-link>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.ouzhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { coutrycountryid: item.coutrycountryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>欧洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.yazhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>亚洲版块 <i class="el-icon-arrow-down iconsss"></i></a>

			</el-popover>

			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.meizhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>美洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.dayangzhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>大洋洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.feizhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>非洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<router-link to='' class="itma">全部版块</router-link>
			</li>
		</ul>
		<!-- 安全检查 -->
		<div style="clear: both;"></div>
		<div class="crumnav" v-for="(item,index) in crumnav" :key="index">
			<div class="filterimg" :style="{background:'url('+item.crumnavimg+')'}"></div>
			<div class="crumnavt">
				<img :src="item.crumnavimg" height="260px" width="680px"/>
				<div class="cn-info">
					<h3 class="cni-tle">结伴同游</h3>
					<p class="cni-con"><b class="cni-num">{{item.crumnavnumber}}</b>靠谱穷游er</p>
					<p class="cni-con"><b class="cni-num">{{item.crumnavnow}}</b>个正在结伴</p>
					<p class="cni-con"><b class="cni-num">{{item.crumnavmoth}}</b>个近一个月内出发</p>
					<div class="cni-btn j-pubmate">发布结伴</div>

				</div>
			</div>
		</div>
		<div class="m-sel f-bw f-ma">
			<div class="date">
				<span class="title">出发时间</span>
				<a id='gotime' :class="type_index===index?'active':''" @click="typeIndex(index)" v-for="(item,index) in gotimes"
				 :key="index">{{item.gotime}}</a>
			</div>
			<br />
			
			<div class="dest">
				<span class="title">目的地</span>

				<div class="desttab">
					<el-tabs>
						<el-tab-pane label="热门">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehots" :key="index">
									<a id='com_hotmudi' :class="type_indexhot===index?'active':''" @click="typeIndexhot(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="亚洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotyazhou" :key="index">
									<a id='com_hotmudi' :class="type_indexyazhou===index?'active':''" @click="typeIndexyazhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="欧洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotouzhou" :key="index">
									<a id='com_hotmudi' :class="type_indexouzhou===index?'active':''" @click="typeIndexouzhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="北美洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotbeimeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexbeimeizhou===index?'active':''" @click="typeIndexbeimeizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="南美洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotnanmeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexnanmeizhou===index?'active':''" @click="typeIndexnameizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="大洋洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotdayangzhou" :key="index">
									<a id='com_hotmudi' :class="type_indexdayangzhou===index?'active':''" @click="typeIndexdayangzhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="非洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in gotimehotfeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexfeizhou===index?'active':''" @click="typeIndexfeizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						
					</el-tabs>
					<div class="Com_froms">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="mini">
							<el-form-item prop="searchinfo">
								<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
								<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
							</el-form-item>
					
						</el-form>
					</div>
				</div><!-- desttab -->
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="navinfos_bg">
			<div class="navinfos">
				<div class="checkboxarea">
					<!-- 	<a class="checkboxitem"><input class="checkbox_input" type="checkbox" name='sex' value="1" rel="pinche" /> 我要拼车</a>
				<a class="checkboxitem checkboxitemleft"><input class="checkbox_input" name='sex' type="checkbox" value="2" rel="pinfang" />
					我要拼房</a> -->
					<a class="checkboxitem" v-for="(item,index) in checkbox" :key="index"><input class="checkbox_input" type="checkbox"
						 name='sex' :value="item.value" @click='checkClick()' :rel="item.value" /> {{item.valuename}}</a>

				</div>
				<div class="checkboxtag">
					<a class="lastpub" v-for="(value,index) in checkboxtag" :key='index' :class="type_indexnew===index?'active':''"
					 @click="typeIndexnew(index)">
						{{value,chboxname}}</a>
				</div>
			</div>
		</div>
		<div style="clear: both;"></div>
		<br />
		<br />
		<br />
		<div class="cardwrap">
			<div class="Com_container">
				<router-link to="" class="Com_card" v-for="(item,index) in Comcrad" :key="index">
					<div class="imgwp"><img class="ci" :src="item.Comcradimg" alt="item.Comcrad_title">
						<p class="Com_title">{{item.Comcradtitle}}</p>
					</div>
					<div class="con">
						<p class="name"><img class="user" :src="item.Comcradavter" alt="item.Comcrad_title"><span class="txt">{{item.Comcradname}}</span></p>
						<p class="des dinfo"><img src="../../../assets/images/qiongyou/ditu_1.png" /> {{item.Comcradmudidi}}</p>
						<p class="date dinfo"><img src="../../../assets/images/qiongyou/ditu_2.png" /> {{item.Comcradgotime}}<span class="join">-</span>{{item.Comcradfanhuitime}}</p>
					</div>
				</router-link>
			</div>
		</div>
		<div class="navwrap_bg" v-if="btnFlags">
			<div class="navwrap">
				<div class="navinner">
					<el-popover placement="bottom-start" width="320" trigger="hover">
						<div class="navinner-tab">
							<a id="checktime" v-for="(value,index) in gotimes" :key='index' :class="type_indextime===index?'active':''"
							 @click="typeIndextime(index)">{{value.gotime}}</a>
						</div>
						<div class="area j-timepopup" slot="reference">
							<span class="txt">出发时间</span>
							<span class="split">-</span>
							<span class="navinfo" id="aa">{{gettimecontent}}</span>
							<span class="tria"></span>
						</div>
					</el-popover>
					<el-popover placement="bottom-start" width="300" trigger="hover">
						<div class="navinner-tab-two">
							<el-tabs tab-position='left'>
								<el-tab-pane label="热门">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehots" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="sbs" :class="type_indexhots===index?'active':''" @click="typeIndexhots(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="亚洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotyazhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexyazhous===index?'active':''"
												 @click="typeIndexyazhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="欧洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotouzhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexouzhous===index?'active':''"
												 @click="typeIndexyazhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="北美洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotbeimeizhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexbeimeizhous===index?'active':''"
												 @click="typeIndexbeimeizhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="南美洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotnanmeizhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexnanmeizhous===index?'active':''"
												 @click="typeIndexnanmeizhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="大洋洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotdayangzhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexdayangzhous===index?'active':''"
												 @click="typeIndexdayangzhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane label="非洲">
									<div class="navinner-tab-two-content">
										<ul>
											<li class="navinner-tab-two-contentli" v-for="(item,index) in gotimehotfeizhou" :key="index">
												<a class="navinner-tab-two-contentli-itma" id="navinner-tab-two-contentli-itma" :class="type_indexfeizhous===index?'active':''"
												 @click="typeIndexfeizhous(index)">{{item.hotcountry}}</a>
											</li>
										</ul>
									</div>
								</el-tab-pane>
							</el-tabs>
						</div>
						<div class="area j-timepopup" slot="reference">
							<span class="txt">目的地</span>
							<span class="split">-</span>
							<span class="navinfo">{{gomudidi}}</span>
							<span class="tria"></span>
							<span class="lines"></span>
						</div>

					</el-popover>

				</div>
				<div class="pub j-pubmate"><i class="el-icon-edit-outline"></i> 发布结伴</div>
			</div>

		</div>

	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'

	export default {
		name: 'Thread_CompanionsList',
		data() {

			return {
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
				//   search_params:{
				//     type: this.$route.query.type,
				//  
				// },
				coutryCom: [],
				gotimes: [],
				gotimehots: [],
				gotimehotyazhou: [],
				gotimehotouzhou: [],
				gotimehotbeimeizhou: [],
				gotimehotnanmeizhou: [],
				gotimehotdayangzhou: [],
				gotimehotfeizhou: [],
				crumnav:[],
				type_index: 0,
				type_indexhot: -1,
				type_indexhots: -1,
				type_indexyazhou: -1,
				type_indexyazhous: -1,
				type_indexouzhou: -1,
				type_indexouzhous: -1,
				type_indexbeimeizhou: -1,
				type_indexbeimeizhous: -1,
				type_indexnameizhou: -1,
				type_indexnameizhous: -1,
				type_indexdayangzhou: -1,
				type_indexdayangzhous: -1,
				type_indexfeizhou: -1,
				type_indexfeizhous: -1,
				type_indextime: -1,
				type_indexnew: 0,
				checkbox: [],
				checkboxtag: ["最新发布", "最近出发"],
				Comcrad: [],
				btnFlags: false,
				gettimecontent: '不限',
				gomudidi: '不限',
				search_params: {}

			}
		},

		created() {
			this.buildcoutryCom();
			this.buildgotimes();
			this.buildgotimehot();
			this.buildComcrad();
			this.buildcheckbox();
			this.buildgotimeyazhou();
			this.buildgotimeouzhou();
			this.buildgotimebeimeizhou();
			this.buildgotimenanmeizhou();
			this.buildgotimedayangzhou();
			this.buildgotimefeizhou();
			this.buildcrumnav();
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTops)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTops)
		},
		methods: {
			buildcoutryCom() {
				this.axios.get('/api/buildcoutryCom').then(res => {
					this.coutryCom = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimes() {
				this.axios.get('/api/buildgotimes').then(res => {
					this.gotimes = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimehot() {
				this.axios.get('/api/buildgotimehot').then(res => {
					this.gotimehots = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimeyazhou() {
				this.axios.get('/api/buildgotimeyazhou').then(res => {
					this.gotimehotyazhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimeouzhou() {
				this.axios.get('/api/buildgotimeouzhou').then(res => {
					this.gotimehotouzhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimebeimeizhou() {
				this.axios.get('/api/buildgotimebeimeizhou').then(res => {
					this.gotimehotbeimeizhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimenanmeizhou() {
				this.axios.get('/api/buildgotimenanmeizhou').then(res => {
					this.gotimehotnanmeizhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimedayangzhou() {
				this.axios.get('/api/buildgotimedayangzhou').then(res => {
					this.gotimehotdayangzhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildgotimefeizhou() {
				this.axios.get('/api/buildgotimefeizhou').then(res => {
					this.gotimehotfeizhou = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildcrumnav(){
				this.axios.get('/api/buildcrumnav').then(res => {
					this.crumnav = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			buildComcrad() {
				this.axios.get('/api/buildComcrad' // , {
					// 						params: {
					// 							params: this.search_params,
					// 							
					// 
					// 						}
					// 					}

				).then(res => {
					this.Comcrad = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},

			buildcheckbox() {
				this.axios.get('/api/buildcheckbox').then(res => {
					this.checkbox = res.data.data
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
				this.search_params['type'] = this.gotimes[index]
				this.buildComcrad();
			},
			typeIndexhot(index) {
				this.type_indexhot = index
				this.search_params['type'] = this.gotimehots[index]

				this.buildComcrad();
			},
			typeIndexhots(index) {
				this.type_indexhots = index
				this.search_params['type'] = this.gotimehots[index]
				var v = this.gotimehots[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexyazhou(index) {

				this.type_indexyazhou = index
				this.search_params['type'] = this.gotimehotyazhou[index]
				var v = this.gotimehotyazhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexyazhous(index) {

				this.type_indexyazhous = index
				this.search_params['type'] = this.gotimehotyazhou[index]
				var v = this.gotimehotyazhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexouzhou(index) {

				this.type_indexouzhou = index
				this.search_params['type'] = this.gotimehotouzhou[index]
				this.buildComcrad();
			},
			typeIndexouzhous(index) {

				this.type_indexouzhous = index
				this.search_params['type'] = this.gotimehotouzhou[index]
					var v = this.gotimehotouzhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexbeimeizhou(index) {

				this.type_indexbeimeizhou = index
				this.search_params['type'] = this.gotimehotbeimeizhou[index]
				this.buildComcrad();
			},
			typeIndexbeimeizhous(index) {

				this.type_indexbeimeizhous = index
				this.search_params['type'] = this.gotimehotbeimeizhou[index]
					var v = this.gotimehotbeimeizhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexnanmeizhou(index) {

				this.type_indexnanmeizhou = index
				this.search_params['type'] = this.gotimehotnanmeizhou[index]
				this.buildComcrad();
			},
			typeIndexnanmeizhous(index) {

				this.type_indexnanmeizhous = index
				this.search_params['type'] = this.gotimehotnanmeizhou[index]
				var v = this.gotimehotnanmeizhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexdayangzhou(index) {

				this.type_indexdayangzhou = index
				this.search_params['type'] = this.gotimehotdayangzhou[index]
				this.buildComcrad();
			},
			typeIndexdayangzhous(index) {

				this.type_indexdayangzhous = index
				this.search_params['type'] = this.gotimehotdayangzhou[index]
				var v = this.gotimehotdayangzhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexfeizhou(index) {

				this.type_indexfeizhou = index
				this.search_params['type'] = this.gotimehotfeizhou[index]
				this.buildComcrad();
			},
			typeIndexfeizhous(index) {

				this.type_indexfeizhous = index
				this.search_params['type'] = this.gotimehotfeizhou[index]
				var v = this.gotimehotfeizhou[index].hotcountry;
				this.gomudidi = v;
				this.buildComcrad();
			},
			typeIndexnew(index) {
				this.type_indexnew = index
				this.search_params['type'] = this.checkboxtag[index]
				this.buildComcrad();
			},
			checkClick(index) {
				this.search_params['type'] = this.checkbox[index]
				this.buildComcrad();
			},
			typeIndextime(index) {
				this.type_indextime = index
				if (index > 0) {
					this.search_params['type'] = this.gotimes[index];
				} else {
					this.search_params['type'] = '';
				}
				let v1 = this.gotimes[index].gotime;
				this.gettimecontent = v1;
				this.buildComcrad();

			},



			// 为了计算距离顶部的高度，当高度大于100显示回顶部图标，小于100则隐藏
			scrollToTops() {

				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 550) {
					that.btnFlags = true
				} else {
					that.btnFlags = false
				}
			},
		},
		components: {
			headers,


		},
	}
</script>

<style lang="scss">
	.navinner-tab-two-content {

		height: 285px;
		overflow-y: auto;
		overflow-x: hidden;

		.navinner-tab-two-contentli {
			list-style: none;
			text-align: left;
			min-width: 173px;
			padding-left: 10px;
			background: #fff;
			border: none;
			line-height: 46px;

			.navinner-tab-two-contentli-itma {
				display: block;
				line-height: 46px;
				width: 167px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #323232;
				border-top: 1px dashed #ececec;
			}


		}
	}

	.navinner-tab-two-contentli:first-child .navinner-tab-two-contentli-itma {
		border-top: none;
	}

	.navinner-tab-two-content .navinner-tab-two-contentli .navinner-tab-two-contentli-itma.active {
		color: #10b041 !important;
	}

	.navinner-tab-two {
		/deep/ .el-tabs__item.is-active {
			color: #10b041 !important;
		}
	}

	.navinner-tab-two {
		/deep/ .el-tabs__active-bar {
			background: #10b041;
		}
	}

	#checktime {
		display: inline-block;
		margin-right: 15px;
		color: #323232;
		margin-top: 15px;
	}

	#checktime.active {
		color: #10b041;
	}

	.navwrap_bg {
		position: fixed;
		top: 100px;
		left: 0;
		-webkit-transition: all .3s linear;
		transition: all .3s linear;
		-webkit-transform: translateY(-100px);
		-ms-transform: translateY(-100px);
		transform: translateY(-100px);
		z-index: 1200;
		width: 100%;
		background: #f0f0f0;
		line-height: 60px;
		border: 1px solid #d7d7d7;
		border-left: none;
		border-right: none;
		color: #323232;
		font-size: 14px;

		.navwrap {
			position: relative;
			width: 980px;
			margin: 0 auto;

			.navinner {
				position: relative;
				float: left;
				height: 60px;

				.area {
					position: relative;
					float: left;
					cursor: pointer;

					.txt {
						padding-left: 30px;
						border-left: 1px solid silver;
					}

					.tria {
						display: inline-block;
						margin: 0 23px 0 5px;
						vertical-align: -3px;
						width: 0;
						height: 0;
						border: 5px dashed transparent;
						border-top: 5px solid #636363;
					}

					.lines {
						display: inline-block;
						margin-left: -2px;
						height: 14px;
						border-left: 1px solid silver;
						vertical-align: -2px;
					}

					.navinfo {
						font-weight: 700;
						color: #10b041;
					}

				}


			}

			.pub {
				position: absolute;
				right: -20px;
				top: -1px;
				height: 62px;
				padding: 0 73px 0 65px;
				font-size: 18px;
				background: #10b041;
				color: #fff;
				font-weight: 700;
			}
		}
	}

	.navinfos_bg {
		background: #f4f4f4;
		width: 100%;
	}

	.navinfos {
		line-height: 50px;

		width: 980px;
		margin: 0 auto;

		.checkboxarea {
			display: inline-block;

			.checkboxitem {
				display: inline-block;
				cursor: pointer;
				color: #323232;

				.checkbox_input {
					position: relative;
					top: 2px;
				}
			}

			.checkboxitem+.checkboxitem {
				margin-left: 15px;
			}
		}
	}

	.checkboxtag {
		float: right;

		.lastpub:hover {
			text-decoration: none;
			color: #10b041;
		}

		.lastpub {
			display: inline-block;
			padding: 0 20px;
			border-left: 1px solid #fff;
			color: #323232;
		}

		.lastpub.active {
			color: #10b041;
		}
	}
.m-sel .dest{
	margin-top: 10px;
}
.m-sel .dest .desttab{
/deep/ .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ececec;
    z-index: 1;
}
}
	.m-sel .dest .desttab {
		width: 888px;
		float: left;
		position: relative;
		top: -13px;
		margin-left: 5px;

		.gotimeclass {
			width: 84px;
			float: left;
			list-style: none;
		}

		#com_hotmudi {
			display: inline-block;
			padding: 0 9px;
			line-height: 22px;
			font-size: 14px;
			color: #323232;
			border: 1px solid #fff;
			border-radius: 12px;
		}

		#com_hotmudi.active {

			border: 1px solid #10b041;
			border-radius: 12px;
			color: #10b041;
		}
	}
.m-sel .dest .desttab {
		/deep/  .el-tabs__item{
		height: 48px;	
		}
		}
	.m-sel .dest .desttab {
		/deep/ .el-tabs__item.is-active {
			color: #10b041;
		}
	}

	.m-sel .dest .desttab {
		/deep/ .el-tabs__item:hover {
			color: #10b041;

		}
	}

	.m-sel .dest .desttab {
		/deep/.el-tabs__active-bar {
			background-color: #10b041;

		}
	}
.m-sel .dest .title{
	padding-right:32px;
	
	display: inline-block;
	font-weight: 700;
	float: left;
	
	border-right: 1px solid #ececec;
}
	.m-sel {
		padding-top: 48px;
		font-size: 14px;
		line-height: 14px;
		color: #323232;
		width: 980px;
		margin: 0 auto;

		.title {
			padding-right: 19px;
			margin-right: 10px;
			display: inline-block;
			font-weight: 700;
			float: left;

			border-right: 1px solid #ececec;
		}

		.date {
			padding-bottom: 14px;
			border-bottom: 1px solid #ececec;
		}

		#gotime {
			display: inline-block;
			color: #323232;
			position: relative;
			top: -3px;
			padding: 3px 8px 3px 9px;
			border: 1px solid #fff;
		}

		#gotime+#gotime {
			margin-left: 10px;
		}

		#gotimes {
			margin-left: 13px;
			float: left;


		}

		#gotime.active {
			border: 1px solid #10b041;
			border-radius: 12px;
			color: #10b041;

		}

		#gotimes {
			position: relative;
			top: -3px;
			display: inline-block;
			border: 1px solid #10b041;
			border-radius: 12px;
			color: #10b041;
			padding: 3px 8px 3px 9px;

		}
	}

	.crumnav {
		margin-top: 15px;
		left: 0;
		width: 100%;
		height: 260px;
		border-top: 1px solid #1faf47;
		overflow: hidden;
		position: relative;

		.filterimg {
			width: 100%;
			height: 260px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			filter: blur(5px);
			background-repeat: no-repeat;

			background-size: cover;

			background-attachment: fixed;

			background-position: center;



		}

		.crumnavt {
			position: absolute;
			top: 0;
			width: 980px;
			height: 260px;
			left: 50%;
			margin-left: -490px;
			z-index: 100;

			img {
				float: left
			}

			.cn-info {
				width: 230px;
				height: auto;
				float: right;
				padding: 20px;

				.cni-tle {
					font-size: 28px;
					margin-bottom: 4px;
					color: #fff;

				}

				.cni-con {
					color: #fff;
					margin-top: 3px;

					.cni-num {
						margin-right: 5px;
						font-weight: 500;
						font-size: 18px;
						font-family: Helvetica Neue, Helvetica, Arial;
					}
				}

				.cni-btn {
					display: block;
					margin-top: 28px;
					width: 134px;
					line-height: 40px;
					border-radius: 3px;
					font-size: 16px;
					text-align: center;
					color: #fff;
					background: #10b041;
					font-weight: 700;
					text-shadow: none;
				}
			}
		}
	}


	.Com_header {
		padding: 30px 0;
		width: 980px;
		margin: 0 auto;
		position: relative;

		a {
			margin: 23px 0;
			font-size: 36px;
			color: #10b041;
			line-height: 36px;
		}

		.Com_from {
			float: right;
			width: 230px;
		}

		.iconss {
			position: absolute;
			top: 10px;
			font-size: 20px;
			left: 15px;
		}
	}
.Com_froms {
			top:5px;
			width: 200px;
			z-index: 1000;
			position: absolute;
			right: 0;
			.iconss {
				position: absolute;
				top:7px;
				font-size: 15px;
				left: 15px;
			}
		}
	.Com_input /deep/ .el-input__inner {
		padding: 0 40px;
	}

	.popoverouzhou {
		width: 98%;

		.popoverouzhoucontent {
			width: 980px;
			margin: 0 auto;

			li {
				list-style: none;
				float: left;
				line-height: 60px;
				width: 10%;

				a {
					font-size: 12px;
					color: #636363;
					line-height: 25px;
				}
			}

		}
	}

	.Com-nav {
		list-style: none;
		width: 980px;
		margin-bottom: 12px;
		line-height: 14px;
		font-size: 14px;
		margin: 0 auto;

		.itm {
			display: inline-block;
			padding-right: 50px;

			.itma {
				color: #323232;
				font-weight: 700;
			}

			.iconsss {
				font-weight: 700;

			}

		}
	}

	.itm.hover {
		color: #10b041;
	}

	.cardwrap {

		width: 980px;
		margin: 0px auto;
		position: relative;

		.Com_container {
			margin-top: -21px;
			margin-left: -13px;
			text-align: justify;
			-webkit-transition: all .3s linear;
			transition: all .3s linear;
			width: 1020px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-ms-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;

			.Com_card {
				border-style: dashed;

				display: inline-block;
				margin-left: 10px;
				margin-bottom: 30px;
				cursor: pointer;
				font-size: 14px;

				.imgwp {
					position: relative;
					width: 235px;
					height: 235px;
					overflow: hidden;

					.ci {
						width: 235px;
						height: 235px;
						border-radius: 3px 3px 0 0;
						-webkit-transition: all .4s linear;
						transition: all .4s linear;
					}
				}

				//imgwp
				.Com_title {
					position: absolute;
					padding: 9px;
					bottom: 16px;
					margin-left: 5px;
					text-align: left;
					font-weight: bold;
					font-size: 18px;
					word-wrap: break-word;
					word-break: break-all;
				}

			}

			.con {
				padding: 9px 0 11px;
				box-sizing: border-box;
				width: 235px;
				padding-left: 8px;
				border: 1px solid #ececec;
				border-top: none;

				.user {
					width: 24px;
					height: 24px;
					border-radius: 12px;
				}

				.txt {
					margin-left: 6px;
					color: #323232;
					font-size: 12px;
					vertical-align: 6px;
				}



				.dinfo {
					margin-top: 5px;
					width: 215px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding-left: 5px;
					color: #323232;
					font-size: 15px;
					font-weight: 700;
				}
			}

			.Com_card:hover .ci {
				transform: scale(1.1);
			}
		}

	}
</style>
