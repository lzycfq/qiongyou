<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<!-- 面包屑 -->
		<div class="qyer_head_crumb">
			<el-breadcrumb separator-class="el-icon-arrow-right" v-for="(item,index) in Country_breadcrumb" :key="index">
				<el-breadcrumb-item>
					<router-link :to="{path:item.link,params: { Countryid: item.Countryid }}">{{item.Countryname}}</router-link>
				</el-breadcrumb-item>
				<el-breadcrumb-item v-for="(item,index) in item.Country_list" :key="index">
					<el-dropdown>
						<span class="el-dropdown-link" placement="bottom-end">
							{{item.Country_listname}}
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.Country_lists" :key="index">
								<!-- 	<router-link :to="{path:item.link,params: { Country_listid: item.Country_listid }}"> -->
								<router-link style="color: #777777;" :to="{path:'/Destination_list_Strategy',params: { Country_listid: item.Country_listid }}">{{item.Country_listnames}}</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-breadcrumb-item>
				<el-breadcrumb-item>{{item.Country}}活动攻略</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="plcTopBar clearfix" v-for="(item,index) in CountryplcTopBar" :key="index">
			<div class="plcTopBarL">
				<p class="plcTopBarNameEn">
					<router-link :to="{name:'/Destination_Citydetail',params: { Countryid: item.Countryid }}">
						{{item.plcTopBarjianxie}}
					</router-link>
				</p>
				<div class="plcTopBarNameCns clearfix">
					<p class="plcTopBarNameCn fontYaHei">
						<router-link :to="{name:'/Destination_Citydetail',params: { Countryid: item.Countryid }}">
							{{item.plcTopBarcity}}
						</router-link>
					</p>
				</div>
			</div>
			<div class="plcTopBarR">
				<div class="plcTopBarWeather">
				</div>
				<div class="plcTopBarStat fontYaHei">
					<em>{{item.CountryidBargo}}</em>人去过这里,
					<em>{{item.Countryidpinlun}}</em>条目的地点评
				</div>
			</div>
			<div style="clear:both"></div>
		</div>
		<div class="plcMenuBarHolder placeNavBar" v-for="(item,index) in plcMenuBarHolder" :key="index">
			<div class="plcMenuBars">
				<ul class="placeNav">
					<li class="menu">
						<el-popover placement="bottom-start" width="575" trigger="hover" popper-class="chengshi">
							<ul class="cityList">
								<li class="cityItem" v-for="(item,index) in item.hotcity" :key="index">
									<router-link :to="{name:'/Destination_Citydetail',params: { hotcityid: item.hotcityid }}">
										<img class="pic" :src="item.hotcityimg">
										<span class="cn">
											{{item.hotcityname}}
										</span>
										<span class="en">
											{{item.hotcityjx}}
										</span>
									</router-link>
								</li>
							</ul>
							<span slot="reference" style="color: #666666;">热门城市 <i class="el-icon-caret-bottom
"></i></span>
						</el-popover>
					</li>
					<li class="menu">
						<el-popover placement="bottom-start" popper-class="city-zhinan" width="550" trigger="hover">
							<div class="subMenu-big">
								<ul class="guideList">
									<li class="list-item overview">
										<router-link to="/" class="list-item-title">目的地概况</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbarmudi" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.mudi}}</router-link>
											</li>

										</ul>
									</li>
									<li class="list-item traffic">
										<router-link to="/" class="list-item-title">城际交通</router-link>
										<ul class="list-item-content">

											<li v-for="(item,index) in item.navbarchengji" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.chengji}}</router-link>
											</li>

										</ul>
									</li>
									<li class="list-item domestic_traffic">
										<router-link to="/" class="list-item-title">市内交通</router-link>
										<ul class="list-item-content">

											<li v-for="(item,index) in item.navbarshinei" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.shinei}}</router-link>
											</li>

										</ul>
									</li>
									<li class="list-item season">
										<router-link to="/" class="list-item-title">旅行日历</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbarrili" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.rili}}</router-link>
											</li>


										</ul>
									</li>
									<li class="list-item currency">
										<router-link to="/" class="list-item-title">货币与花费</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbarxiaofei" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.xiaofei}}</router-link>
											</li>


										</ul>
									</li>
									<li class="list-item information">
										<router-link to="/" class="list-item-title">实用信息</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbarxinxi" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.xinxi}}</router-link>
											</li>


										</ul>
									</li>
									<li class="list-item notice">
										<router-link to="/" class="list-item-title">旅行须知</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbargonggao" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.gonggao}}</router-link>
											</li>


										</ul>
									</li>
									<li class="list-item define">
										<router-link to="/" class="list-item-title">路线</router-link>
										<ul class="list-item-content">
											<li v-for="(item,index) in item.navbarluxian" :key="index">
												<router-link :to="{path:item.link,params: { id: item.id }}">{{item.luxian}}</router-link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<span slot="reference" style="color: #666666;">国家指南 <i class="el-icon-caret-bottom
"></i></span>
						</el-popover>
					</li>
					<li class="menu">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link" style="color: #666666;">
								景点玩乐 <i class="el-icon-caret-bottom
"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.hotwan" :key="index">
									<router-link style="color:#555555" :to="{ name:'/Destination_list_Strategy', params: { hotwanid: item.hotwanid}}">{{item.hotwanname}}({{item.hotwannumber}})</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="menu">
						<router-link to="" style="color:#555555">美食</router-link>
					</li>
					<li class="menu">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link" style="color: #666666;">
								旅行商城 <i class="el-icon-caret-bottom
					"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.lvxingwan" :key="index">
									<router-link style="color:#555555" :to="{ name:'/', params: { lvxingwanid: item.lvxingwanid}}">{{item.lvxingwanname}}({{item.lvxingwannumber}})</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="menu">
						<router-link to="" style="color:#555555">旅行攻略</router-link>
					</li>
					<li class="menu">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link" style="color: #666666;">
								行程路线 <i class="el-icon-caret-bottom
					"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.xingcheng" :key="index">
									<router-link style="color:#555555" :to="{ name:'/', params: { xingchengid: item.xingchengid}}">{{item.xingchengname}}</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="menu">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link" style="color: #666666;">
								社区 <i class="el-icon-caret-bottom
					"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.shequ" :key="index">
									<router-link style="color:#555555" :to="{ name:'/', params: { shequid: item.shequid}}">{{item.shequname}}</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="menu">
						<router-link to="" style="color:#555555">地图</router-link>
					</li>
					<li class="menu">
						<router-link to="" style="color:#555555">点评</router-link>
					</li>
					<li class="menuinput">
						<!-- <el-form ref="Countrycityform" :model="Countrycityform" rules="Countrycityform">
							<el-form-item>
								<el-input v-model="Countrycityform.Countrycityname"  rel="Countrycityname"></el-input>
							</el-form-item>
						</el-form> -->
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="countryform">
							<el-form-item prop="countryname">
								<el-input v-model="ruleForm.countryname" placeholder="请输入城市/目的/景点" rel="countryname"></el-input>
								<i class="el-icon-search iconinput" @click="clickcountry"></i>
							</el-form-item>
						</el-form>
					</li>
				</ul>
			</div>
		</div>
		<div class="plcFirstModule">
			<div class="plcFirstModuleWrap" v-for="(item,index) in plcFocus" :key="index">
				<div class="plcFocusPhoto">
					<el-carousel height="400px" indicator-position="none">
						<el-carousel-item v-for="(item,index) in item.plcFocusPhoto" :key="index">
							<router-link to=""><img :src="item.plcimg" width="100%"></router-link>
						</el-carousel-item>
						<div class="plcnumber">
							<router-link to="/">{{item.plcnumber}}张照片</router-link>
						</div>
					</el-carousel>
				</div>
			</div><!-- plcFirstModuleWrap -->
		</div><!-- plcFirstModule -->
		<div class="hotcitybg">
			<div class="hotcity" v-for="(item,index) in hotcity" :key="index">
				<h2 class="bigTitle">
					{{hotname}}热门城市
				</h2>
				<el-carousel trigger="click" height="670px" arrow="always">

					<el-carousel-item v-for="(item,index) in item.hotcitybanner" :key="index">
						<div class="hotcitybannercontent" style="width: 980px; margin: 0 auto;">
							<router-link v-for="(item,index) in item.hotcitybannercontent" :key="index" :to="{ name:'/Destination_Citylist', params: { Citylistid: item.Citylistid}}"
							 class="Citylist">
								<li>
									<p class="Citylisttop">
										<router-link :to="{ name:'/Destination_Citylist', params: { Citylistid: item.Citylistid}}">
											<span class="number">{{index+1}}</span>
											<img :src="item.citylistimg" alt="item.Citylistname" class="photo lazy" style="width: 100%;">
										</router-link>
									</p>
									<div class="Citylistbottom">
										<h3 class="title fontYaHei">
											<router-link :to="{ name:'/Destination_Citydetail', params: { Citylistid: item.Citylistid}}">
												{{item.citylistname}}
											</router-link>
										</h3>
										<div class="info pois">
											<router-link v-for="(item,index) in item.Landscape" :key="index" :to="{ name:'/Destination_Landscape_introduction', params: { Landscapeid: item.Landscapeid}}">
												{{item.Landscapename}} 、
											</router-link>

										</div>
									</div>
								</li>
							</router-link>
						</div>
					</el-carousel-item>
				</el-carousel>
				<p class="plcHotCityAll">
					<router-link to="">查看更多城市({{item.morecitynumber}})</router-link>
				</p>
			</div><!-- hotcity -->
		</div><!-- hotcitybg -->
		<div class="weijnbg">
			<div class="weijn" v-for="(item,index) in weijing" :key="index">
				<h2 class="plcMguideTitle bigTitle">
					{{item.wjcountry}}热门微锦囊
				</h2>
				<el-carousel trigger="click" height="400px" indicator-position="none" arrow="always">
					<el-carousel-item v-for="(item,index) in item.weijnbanner" :key="index">
						<div class="weijnbanner">
							<li v-for="(item,index) in item.weijnbannercontent" :key="index">
								<router-link :to="{ name:'/Destination_mguidedetail', params: { mguidedetailid: item.mguidedetailid}}" title="item.wjtitle">
									<p class="photo">
										<img :src="item.wjimg" width="310" height="200" alt="item.wjtitle">
									</p>
									<p class="photoMask"></p>
									<p class="pois">{{item.pois}}</p>
									<div class="content">
										<p class="face"><img :src="item.wjavter" width="80" height="80" alt=""></p>
										<p class="userName">{{item.wjusername}}</p>
										<h3 class="title fontYaHei">{{item.wjtitle}}</h3>
										<blockquote class="text">{{item.wjtext}}</blockquote>
									</div>
									<div class="weijnbottom"></div>
								</router-link>
							</li>
						</div>
					</el-carousel-item>
				</el-carousel>
				<p class="plcHotCityAll">
					<router-link to="">查看更多微锦囊({{item.moreweijinnumber}})</router-link>
				</p>
			</div><!-- weijn -->
		</div>
		<div class="tjluxianbg">
			<div class="tjluxian">
				<h2 class="plcRouteTitle bigTitle">推荐行程</h2>
				<a v-for="(item,index) in tjluxianbase" id="tjid" :class="index === base_indexz?'active':''" v-on:click="changeBaseIndexz(index)">{{item.tjname}}</a>
				<span>{{index}}</span>
				<div class="tjcontent" v-for="(item,index) in tjcontent" :class="index === base_indexz?'active':''" :key="index">
					<div class="tjcontent_left">
						<router-link to="">
							<!-- :to="{ name:'/', params: { tjid: item.tjid}}" -->
							<img :src="item.tjimg" width="308" height="240" alt="夏日北海道之旅" class="photo">
							<p class="sum"><em>{{item.tjday}}</em><span>天</span></p>
							<p class="zoom"></p>
						</router-link>
					</div>
					<div class="tjcontent_right">
						<div class="tjtitle">

							<router-link to="">{{item.tjtitle}} </router-link>

						</div>
						<blockquote class="tjtext">推荐理由：{{item.tjliyou}}</blockquote>
						<br />
						<ul class="days">

							<li v-for="(item,index) in item.tjcontentc" :key="index"><span class="c"></span>
								<p class="w"> {{item.tjcontentdsc}}</p>
							</li>

						</ul>
						<p class="tjbtns">
							<router-link to="" class="ui_button">行程详情</router-link>
							<router-link to="" class="ui_button copyPlanBtn">复制行程</router-link>
							<router-link to="" class="ui_buttonC">购买相关折扣</router-link>
						</p>

					</div>


				</div>
				<div style="clear: both;"></div>
				<div class="tuijianmore">
					<router-link to='/TraveAssistant_smartcreate' class="bigBtnViewAll">＋创建我的行程</router-link>
					<router-link to='/Shop_travelgroup' class="bigBtnViewAll bigBtnGreen ">私人定制</router-link>

				</div>
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'Destination_strategy',
		data() {
			return {
				Country_breadcrumb: [],
				CountryplcTopBar: [],
				plcMenuBarHolder: [],
				plcFocus: [],
				hotcity: [],
				weijing: [],
				tjluxianbase: [],
				tjcontent: [],
				base_indexz: 0,
				ruleForm: {
					countryname: '',

				},


			}
		},
		created() {
			this.buildCountry_breadcrumb();
			this.buildCountryplcTopBar();
			this.buildplcMenuBarHolder();
			this.buildplcFocus();
			this.buildhotcity();
			this.buildweijing();
			this.buildtjluxianbase();
			this.buildtjcontent();
		},
		methods: {
			buildCountry_breadcrumb() {
				this.axios.get('/api/buildCountry_breadcrumb').then(res => { //+this.id
					this.Country_breadcrumb = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildCountryplcTopBar() {
				this.axios.get('/api/buildCountryplcTopBar').then(res => { //+this.id
					this.CountryplcTopBar = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildplcMenuBarHolder() {
				this.axios.get('/api/buildplcMenuBarHolder').then(res => { //+this.id
					this.plcMenuBarHolder = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildplcFocus() {
				this.axios.get('/api/buildplcFocus').then(res => { //+this.id
					this.plcFocus = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildhotcity() {
				this.axios.get('/api/buildhotcity').then(res => { //+this.id
					this.hotcity = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildweijing() {
				this.axios.get('/api/buildweijing').then(res => { //+this.id
					this.weijing = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildtjluxianbase() {
				this.axios.get('/api/buildtjluxianbase').then(res => { //+this.id
					this.tjluxianbase = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildtjcontent() {
				this.axios.get('/api/buildtjcontent').then(res => { //+this.id
					this.tjcontent = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			clickcountry(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'countryname': this.$rels.countryname.value
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
			changeBaseIndexz(index) {
				this.base_indexz = index
			}
		},
		components: {
			headers
		}
	}
</script>

<style lang="scss">
	.tjluxian .tjcontent.active {
		display: block;
	}

	.tjluxian .tjcontent {
		margin-top: 30px;
		display: none;
		background-color: #fff;

		.tjcontent_left {

			position: relative;
			float: left;
			width: 308px;
			height: 240px;
			overflow: hidden;

			.sum {
				position: absolute;
				top: 20px;
				right: 20px;
				width: 70px;
				height: 70px;
				border-radius: 50%;
				background-color: #5cad77;
				background-color: rgba(92, 173, 119, .9);
				color: #fff;
				line-height: 70px;
				text-align: center;
				-webkit-transition: opacity .5s;
				transition: opacity .5s;

				em {
					font-size: 40px;
					font-style: normal;
				}
			}
		}

		.tjcontent_right {

			position: relative;
			float: right;
			width: 630px;
			height: 238px;
			border: 1px solid #ececec;
			padding: 0 20px;

			.tjtitle {
				height: 26px;
				padding-top: 15px;
				line-height: 26px;

				a {
					color: #323232;
					font-size: 16px;
					font-weight: 700;
				}
			}

			.tjtext {
				margin-top: 5px;
				font-size: 14px;
				line-height: 24px;
				color: #636363;
			}

			.days {
				margin-top: 6px;

				li {
					position: relative;
					padding-left: 18px;
					list-style: none;
				}

				.c {
					float: left;
					margin-left: -18px;
					margin-top: 5px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background-color: #d7d7d7;
				}
			}

			.tjbtns {
				position: absolute;
				right: 20px;
				bottom: 20px;
				text-align: right;
			}
		}
	}

	.tjcontent .tjcontent_right .tjbtns a {
		margin-left: 10px;
	}

	.ui_button {
		background-color: #3f9f5f;
	}

	.ui_button,
	.ui_button_cancel,
	.ui_button_disabled,
	.ui_button_load,
	.ui_button_warning,
	.ui_buttonA,
	.ui_buttonB,
	.ui_buttonC {
		display: inline-block;
		height: 28px;
		padding: 0 15px;
		border: none;
		border-radius: 3px;
		overflow: visible;
		font-size: 14px;
		line-height: 28px;
		color: #fff;
		text-align: center;
		cursor: pointer;
	}

	.tjcontent .tjcontent_right .days li:before {
		content: '';
		position: absolute;
		left: 3px;
		top: 5px;
		width: 2px;
		height: 18px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -60px 0;
	}

	.tjcontent .tjcontent_right .tjbtns a.ui_buttonC {
		background-color: #ff7466;
	}

	.tjcontent .tjcontent_right .tjbtns a {
		margin-left: 10px;
	}

	.tjcontent .tjcontent_left:hover .sum {
		opacity: 0;
	}

	.tjluxianbg {
		width: 100%;

		padding: 40px 0;
		background-color: #fff;

		.tjluxian {
			width: 980px;
			margin-left: auto;
			margin-right: auto;
			margin: 0 auto;

			.bigTitle {
				text-align: center;
				font-size: 34px;
				font-weight: 700;
				line-height: 1.058823;
				color: #636363;
				margin-bottom: 20px;
			}

			#tjid {
				display: inline-block;
				width: 33.33%;
				border-bottom: 1px solid #ececec;
				text-align: center;
				font-size: 20px;
				line-height: 58px;
				color: #636363;
				cursor: pointer;

			}
		}

	}

	#tjid.active {
		border-bottom-width: 2px !important;
		border-bottom-color: #73af88 !important;
		color: #147850 !important;
	}

	.tuijianmore {
		padding-top: 30px;
		text-align: center;

		.bigBtnViewAll {
			display: inline-block;
			min-width: 220px;
			height: 48px;
			padding: 0 15px;
			border: 1px solid #ececec;
			background-color: #fff;
			text-align: center;
			font-size: 20px;
			line-height: 48px;
			color: #959595;
		}

		.bigBtnGreen {
			background-color: #3f9f5f;
			color: #fff;
			border: 1px solid #3f9f5f;
		}
	}

	// 面包屑
	.qyer_head_crumb {
		width: 980px;
		font-size: 12px;
		margin: 20px auto;
		line-height: 14px;
		text-align: left;
	}

	.plcTopBar {
		width: 980px;
		margin: 0 auto 15px;

	}

	.plcTopBarL {
		float: left;
	}

	.plcTopBarNameEn {
		font-size: 36px;
		line-height: 1.055555;
		color: #147850;
		word-break: break-all;
	}

	.plcTopBarNameCn a,
	.plcTopBarNameEn a {
		color: #147850;
		text-decoration: none;
	}

	.plcTopBarNameCns {
		margin-top: 5px;
	}

	.plcTopBarNameCn {
		float: left;
		font-size: 36px;
		line-height: 1.055555;
		color: #147850;
	}

	.plcTopBarNameCn a,
	.plcTopBarNameEn a {
		color: #147850;
		font-size: 36px;
		text-decoration: none;
	}

	.plcTopBarR {
		float: right;
		text-align: right;
	}

	.plcTopBarWeather {
		height: 26px;
		padding-top: 15px;
		line-height: 26px;
		color: #959595;
	}

	.plcTopBarStat {
		margin-top: 15px;
		font-size: 16px;
		line-height: 1.125;
		color: #959595;
	}

	.plcTopBarStat em {
		color: #f26622;
	}

	// 
	// 导航栏
	.plcMenuBars {
		width: 100%;
		min-width: 980px;

		background-color: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .05);

		.plcMenuBar {
			position: relative;
			width: 980px;
			margin: 0 auto;
			border-top: 1px solid #f5f5f5;

			.plcMenuBarList {
				width: 100%;
				height: 48px;
				list-style: none;

				li {
					position: relative;
					float: left;
					width: 130px;
					padding-left: 1px;
					font-size: 18px;
					line-height: 48px;
					text-align: center;

					a {
						position: relative;
						display: block;
						font-style: normal;
						color: #323232;

					}

				}
			}
		}
	}

	.plcMenuBarHolder {
		width: 100%;
		min-height: 60px;
		border-bottom: 1px solid #d7d7d7;

		.plcMenuBars {
			margin: 0 auto;
			width: 980px;
			background-color: #fff;
			min-height: 60px;

			.placeNav {
				list-style: none;

				li {
					height: 59px;
					list-style: none;
					position: relative;
					line-height: 59px;
					z-index: 2;
					margin-left: 5px;
					float: left;
					vertical-align: middle;

				}

				li+li {
					margin-right: 20px;
				}

			}

		}
	}

	.plcMenuBars .placeNav li:nth-child(2) {
		margin-left: 23px;
	}

	.plcMenuBars .placeNav .menuinput {
		width: 171px;
		margin-right: 0px !important;
		position: relative;
		overflow: hidden;

		.countryform {
			margin-top: 8px;

			.iconinput {
				position: absolute;
				right: 5px;
				top: 10px;
				font-size: 20px;
			}
		}
	}

	.chengshi .cityList {
		padding: 0 0 10px 10px;
		width: 575px;
		overflow: hidden;
		list-style: none;

		.cityItem {
			float: left;
			width: 188px;
			height: 68px;
			list-style: none;

			a {
				display: block;
				height: 100%;
				overflow: hidden;
				text-decoration: none;
			}

			.pic {
				float: left;
				width: 48px;
				height: 48px;
				margin: 10px 10px 0;
			}
		}
	}

	.chengshi .cityItem .cn {
		color: #636363;
	}

	.chengshi .cityItem .cn,
	.chengshi .cityItem .en {
		font-size: 14px;
		color: #959595;
		display: block;
		margin-top: 10px;
		height: 16px;
		line-height: 16px;
	}

	.city-zhinan {
		padding: 0px;
	}

	.city-zhinan .subMenu-big,
	.plc-subMenu ul .subMenu-small {

		background: #fff;
		z-index: 12;
		-webkit-box-shadow: 0 7px 12px 0 rgba(0, 0, 0, .26);
		box-shadow: 0 7px 12px 0 rgba(0, 0, 0, .26);
	}

	.city-zhinan .subMenu-big,
	ul .overview {
		background-position: 0 -30px;

	}

	.city-zhinan .subMenu-big ul .list-item {
		padding: 8px 10px;
		overflow: hidden;
	}

	.city-zhinan .subMenu-big ul .list-item a.list-item-title {
		display: block;
		float: left;
		margin-right: 10px;
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .8);
		line-height: 17px;
		margin-top: 3px;
		text-decoration: none;
		padding-left: 20px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-nav.png) no-repeat;
	}

	.city-zhinan .subMenu-big ul .traffic a.list-item-title {
		background-position: 0 -90px;
	}

	.city-zhinan .subMenu-big ul .domestic_traffic a.list-item-title {
		background-position: 0 -270px;
	}

	.city-zhinan .subMenu-big ul .season a.list-item-title {
		background-position: 0 -120px;
	}

	.city-zhinan .subMenu-big ul .currency a.list-item-title {
		background-position: 0 -150px;
	}

	.city-zhinan .subMenu-big ul .information a.list-item-title {
		background-position: 0 -210px;
	}

	.city-zhinan .subMenu-big ul .notice a.list-item-title {
		background-position: 0 -180px;
	}

	.city-zhinan .subMenu-big ul .define a.list-item-title {
		background-position: 0 0;
	}

	.subMenu-big ul .list-item .list-item-content {
		float: right;
		width: 430px;
		overflow: hidden;
	}

	.subMenu-big ul .list-item .list-item-content li {
		float: left;
		line-height: 24px;
		margin-right: 22px;
		list-style: none;
	}

	.subMenu-big ul .list-item .list-item-content li a {
		font-size: 12px;
		text-decoration: none;
		color: rgba(0, 0, 0, .6);
	}

	.plcMenuBarAddPlan {
		position: absolute;
		top: -1px;
		right: 0;

		a {
			display: block;
			width: 194px;
			height: 48px;
			padding-top: 1px;
			border-bottom: 1px solid #0073b6;
			background-color: #1995dd;
			text-align: center;
			font-size: 18px;
			line-height: 48px;
			color: #fff;
		}
	}

	// banner
	.plcFirstModule {
		width: 100%;
		min-width: 980px;
		background-color: #f5f5f5;
		border-bottom: 1px solid #ececec;
		padding: 30px 0;

		.plcFirstModuleWrap {
			width: 980px;
			margin: 0 auto;
			height: 400px;
			background-color: #fff;

			.plcFocusPhoto {

				position: relative;
				float: left;
				width: 680px;

				.plcnumber {
					padding: 0 15px;
					position: absolute;
					bottom: 30px;
					left: 25px;
					opacity: 0.7;
					border-radius: 25px;
					z-index: 1000;
					background: #323232;

					a {
						opacity: 1
					}
				}
			}

		}
	}

	// 热门城市
	.hotcitybg {
		width: 100%;
		padding: 40px 0;
		background: white;

		.hotcity {
			width: 1130px;
			margin: 0 auto;

			.bigTitle {
				text-align: center;
				font-size: 34px;
				font-weight: 700;
				line-height: 1.058823;
				color: #636363;
			}
		}
	}

	.hotcity .Citylist {
		position: relative;
		display: inline-block;
		width: 310px;
		background-color: #fff;
	}

	.hotcity .Citylist .Citylisttop {
		position: relative;
	}

	.hotcity .Citylist .Citylisttop .number {
		position: absolute;
		z-index: 5;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		background-color: #5cad77;
		text-align: center;
		font-size: 18px;
		line-height: 30px;
		color: #fff;

	}


	.hotcity .Citylist .Citylistbottom {
		height: 100px;
		border: 1px solid #ececec;
		border-top-width: 0;
		padding: 0 20px;
	}

	.hotcity .Citylist .Citylistbottom .title {
		width: 100%;
		padding-top: 4px;
		text-align: center;
		font-size: 20px;
		font-weight: 700;
		line-height: 40px;
		color: #636363;

		a {
			width: 100%;
			padding-top: 4px;
			text-align: center;
			font-size: 20px;
			font-weight: 700;
			line-height: 40px;
			color: #222222;

		}
	}

	.hotcity .Citylist .Citylistbottom .info {
		width: 100%;
		height: 40px;
		overflow: hidden;
		line-height: 20px;
		color: #636363;

		a {
			color: #535353;
			font-size: 12px;
			font-weight: 500;

		}

	}

	.Citylist:nth-of-type(2) {
		margin-left: 25px;
	}

	.Citylist:nth-of-type(3) {
		float: right;
	}

	.Citylist:nth-of-type(4) {
		margin-top: 10px;

	}

	.Citylist:nth-of-type(5) {
		margin-top: 10px;
		margin-left: 25px;
	}

	.Citylist:nth-of-type(6) {
		margin-top: 10px;

	}

	.Citylist:nth-of-type(6) {
		float: right;

	}

	.Citylist:nth-child(1) .number {
		background-color: #e8634f !important;
	}

	.Citylist:nth-child(2) .number {
		background-color: #f48a37 !important;
	}

	.Citylist:nth-child(3) .number {
		background-color: #f0b500 !important;
	}

	.Citylist .Citylistbottom .info.pois:before {
		content: '';
		display: inline-block;
		margin-right: 5px;
		width: 13px;
		height: 18px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat 0 -150px;
		vertical-align: middle;
	}

	.hotcity .Citylist:hover {
		box-shadow: 0 0 4px rgba(0, 0, 0, .12);
	}

	.plcHotCityAll {
		padding-top: 30px;
		text-align: center;

		a {
			display: inline-block;
			min-width: 220px;
			height: 48px;
			padding: 0 15px;
			border: 1px solid #ececec;
			background-color: #fff;
			text-align: center;
			font-size: 20px;
			line-height: 48px;
			color: #959595;
		}
	}

	// 微锦囊
	.weijnbg {
		border-top: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
		background-color: #f5f5f5;
		width: 100%;
		padding: 40px 0;

		.weijn {
			width: 1130px;
			margin: 0 auto;

			.bigTitle {
				margin-bottom: 20px;
				text-align: center;
				font-size: 34px;
				font-weight: 700;
				line-height: 1.058823;
				color: #636363;

			}

			.weijnbanner {
				width: 980px;
				margin: 0 auto;

			}

		}
	}

	.weijnbanner li:first-child {
		margin-left: 0;
	}

	.weijnbanner li {
		position: relative;
		float: left;
		margin-left: 25px;
		width: 310px;
		list-style: none;
		height: 399px;
		border-bottom: 1px solid #ececec;
		overflow: hidden;
		background-color: #fff;
	}

	.weijnbanner .photoMask {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 200px;
		background: transparent url(//common2.qyerstatic.com/place/project/images/mguide-photomask.png) repeat-x;
		-webkit-transition: background-color .5s;
		transition: background-color .5s;
	}

	.weijnbanner .pois {
		position: absolute;
		left: 17px;
		top: 17px;
		height: 30px;
		padding-left: 27px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-mguidepoi.png) no-repeat;
		font: 28px/30px helvetica, arial, sans-serif;
		color: #fff;
		text-shadow: 0 0 2px rgba(0, 0, 0, .6);
	}

	.weijnbanner .content {
		position: absolute;
		left: 0;
		right: 0;
		top: 200px;
		height: 300px;
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		padding: 0 20px;
		background-color: #fff;
		line-height: 20px;
		-webkit-transition: top .5s;
		transition: top .5s;
	}

	.weijnbanner .content:before {
		content: '';
		position: absolute;
		left: -1px;
		right: -1px;
		top: 0;
		display: block;
		border-top: 2px solid #71b087;
	}

	.weijnbanner .face {
		position: absolute;
		left: 50%;
		top: -42px;
		margin-left: -42px;

		img {
			display: block;
			border-radius: 50%;
			border: 2px solid #fff;
		}
	}

	.weijnbanner .userName {
		padding-top: 47px;
		text-align: center;
		color: #959595;
	}

	.weijnbanner .title {
		padding-top: 12px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		color: #323232;
	}

	.weijnbanner .text {
		padding-top: 10px;
		color: #636363;
	}

	.weijnbanner .weijnbottom {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 26px;
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		background: #fff;
	}

	.weijnbanner .weijnbottom:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 3px;
		display: block;
		width: 100%;
		height: 3px;
		border-top: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}

	.weijnbanner a:hover .content {
		top: 82px;
	}
</style>
