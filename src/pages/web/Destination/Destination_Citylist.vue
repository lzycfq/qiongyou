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
				<el-breadcrumb-item>{{item.Country}}城市列表</el-breadcrumb-item>
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
								<el-input v-model="ruleForm.countryname" placeholder="请输入城市/景点" rel="countryname"></el-input>
								<i class="el-icon-search iconinput" @click="clickcountry"></i>
							</el-form-item>
						</el-form>
					</li>
				</ul>
			</div>
		</div>
		<!-- 城市列表 -->
		<div class="citylist citylistwrap">
			<div class="citylistwrapcontent">
				<div class="citylistwrapcontent_left">
					<h2 class="title">日本全部城市及区域</h2>
					<div class="tools">
						<p class="type">
							<a class="pictext current"></a>
							<a class="word"></a></p>
						<div class="toolselect">
							<el-select v-model="morenvalue" rel='citytiaojian' slot="select" size="small">
								<el-option v-for="item in type_search" :key="item.value" @click="layoutIndex(index)" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</div>
					<div style="clear: both;"></div>
					<br />
					<p style="width: 100%;height: 1px;overflow: hidden; background-color: #ececec;"></p>
					<div style="clear: both;"></div>
					<ul class="plcCitylist">
						<li class="item1" v-for="(item,index) in plcCitylist.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
							<p class="pics">
								<router-link :to="{ name:'/Destination_Citydetail', params: { citydetailid: item.citydetailid}}">
									<em class="number">{{index+1}}</em> <img :src="item.plcCitylistimg" width="160" height="120" alt="">
								</router-link>
							</p>
							<h3 class="title fontYaHei">
								<router-link :to="{ name:'/Destination_Citydetail', params: { citydetailid: item.citydetailid}}">{{item.plcCitylistname}}&nbsp;&nbsp;<span
									 class="en">{{item.plcCitylistjx}}</span>
								</router-link>
							</h3>
							<p class="beento">{{item.plcCitylistnumber}}人去过</p>
							<p class="pois">
								<router-link v-for="(item,index) in item.cityLandscape" :key="index" :to="{ name:'/Destination_Citydetail', params: { Landscapeid: item.Landscapeid}}"
								 style="color: #636363;font-size: 500;">{{item.cityLandscapecontent}}、
								</router-link>
							</p>
							<p class="plcAddToLikeList _addToLikeList"></p>
							<p class="addPlanBtn"></p>
						</li>
					</ul>
					<div style="clear: both;"></div>
					<el-pagination class="elpaination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
					 :current-page="currentPage" prev-text="上一页" next-text="下一页" background :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
					 layout="total, sizes, prev, pager, next, jumper,slot" :total="plcCitylist.length">

					</el-pagination>
				</div><!-- citylistwrapcontent_left -->
				<div class="qySide">
					<h3 class="subTitle ">城市及区域地图</h3>
					<img style="    position: relative;
    margin-top: 20px;
    border: 1px solid #ececec;
    padding: 1px;width: 100%;" src="//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-09-19/98282bf9-f439-42ac-a467-3b52bec1ae48_300_200.jpg"
					 alt="看地图" />
					<p class="plaBorderGap" style="width: 100%;
    height: 1px;
    overflow: hidden;
    background-color: #ececec;
    margin: 30px 0;"></p>
				</div><!-- qySide -->
			</div>


		</div><!-- citylistwrapcontent -->
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'Destination_strategy',
		data() {
			return {
				currentPage: 1, //初始页
				pagesize: 6, //每页的数据
				morenvalue: '按人气',
				type_search: [{
						value: '01',
						label: '按人气'
					},
					{
						value: '02',
						label: '按首字母'
					}
				],
				search_params: {},
				Country_breadcrumb: [],
				CountryplcTopBar: [],
				plcMenuBarHolder: [],
				ruleForm: {
					countryname: '',

				},

			}
		},
		created() {
			this.buildCountry_breadcrumb();
			this.buildCountryplcTopBar();
			this.buildplcMenuBarHolder();
			this.buildplcCitylist();
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
			buildplcCitylist() {
				this.axios.get('/api/buildplcCitylist' // ,{
					//         params:this.search_params,
					//     }
				).then(res => { //+this.id
					this.plcCitylist = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
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
			// 下拉框选择更新数据
			layoutIndex(index) {
				this.search_params['type'] = this.type_search[index];
				this.buildplcCitylist();
			}

		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.plcCitylist li:first-child {
		border-top: none;
	}

	.plcCitylist li {
		list-style: none;
		position: relative;
		height: 120px;
		border-top: 1px solid #ececec;
		padding: 30px 0 30px 170px;

		.pics {
			float: left;
			margin-left: -168px;
		}

		.title {
			width: 100%;
			overflow: hidden;
			padding-top: 4px;

			a {
				float: left;
				max-width: 460px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 18px;
				line-height: 30px;
				color: #323232;
				font-weight: 500;
			}

			.en {
				color: #959595;
				font-size: 18px;
				font-weight: 500;
			}

		}

		.beento {
			color: #959595;
		}

		.pois {
			height: 48px;
			overflow: hidden;
			margin-top: 15px;
			line-height: 24px;
		}
	}

	.citylistwrapcontent_left .elpaination {

		padding: 30px 0;
		float: right;

	}

	.qySide {
		float: right;
		width: 270px;

		.subTitle {
			font-size: 16px;
			line-height: 18px;
			color: #636363;
			font-weight: 500;
		}
	}

	.plcCitylist .pics a {
		display: block;
		position: relative;
	}

	.plcCitylist .item1:nth-of-type(1) .pics .number {
		background-color: #e8634f;
	}

	.plcCitylist .item1:nth-of-type(2) .pics .number {
		background-color: #f48a37;
	}

	.plcCitylist .item1:nth-of-type(3) .pics .number {
		background-color: #f0b500;
	}

	.plcCitylist .pics .number {
		position: absolute;
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

	.plcCitylist .pois:before {
		content: '';
		display: inline-block;
		margin-right: 8px;
		width: 10px;
		height: 15px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -30px -150px;
		vertical-align: middle;
	}

	.plcCitylist .plcAddToLikeList,
	.plcCitylist .plcCancelToLikeList {
		display: block;
		position: absolute;
		right: 30px;
		top: 40px;
		width: 20px;
		height: 18px;
		background-image: url(//common2.qyerstatic.com/place/project/images/icon-heartBlue.png);
		background-repeat: no-repeat;
		background-position: 0 -1px;
		cursor: pointer;
	}

	.plcAddToLikeList {
		z-index: 19;
		height: 20px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-heart.png) no-repeat 0 0;
	}

	.plcCitylist .addPlanBtn {

		position: absolute;
		right: 0;
		top: 40px;
		width: 18px;
		height: 18px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -90px 0;
		cursor: pointer
	}

	// 城市列表
	.citylistwrap {
		width: 100%;
		padding: 40px 0;
		background: white;

		.citylistwrapcontent {
			width: 980px;
			margin: 0 auto;

			.citylistwrapcontent_left {
				width: 680px;
				float: left;

				.title {
					float: left;
					font-size: 18px;
					line-height: 26px;
					color: #636363;
					font-weight: 500;
				}

				.tools {
					float: right;

					.type {
						float: right;
						margin-left: 20px;
						border: 1px solid silver;
					}



				}
			}
		}
	}

	.citylistwrapcontent .toolselect {
		width: 120px;
		float: left;
	}

	.citylistwrapcontent .type a.current {
		background-color: #f5f5f5;
		cursor: default;
	}

	.citylistwrapcontent .type a {
		float: left;
		width: 16px;
		height: 14px;
		padding: 5px 10px;
		background-color: #fff;
		text-align: center;
	}

	.citylistwrapcontent .type a.pictext.current:before {
		background-position: 0 -210px;
	}

	.citylistwrapcontent .type a:before {
		content: '';
		display: inline-block;
		width: 16px;
		margin-top: 3px;
		height: 14px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -60px -210px;
	}

	.citylistwrapcontent .type a.word {
		border-left: 1px solid silver;
	}

	.citylistwrapcontent .type a {
		float: left;
		width: 20px;
		height: 20px;
		padding: 5px 10px;
		background-color: #fff;
		text-align: center;
	}

	.citylistwrapcontent .type a.word:before {
		background-position: -90px -210px;
	}

	.citylistwrapcontent .type a:before {
		content: '';
		display: inline-block;
		width: 16px;
		height: 14px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -60px -210px;
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
</style>
