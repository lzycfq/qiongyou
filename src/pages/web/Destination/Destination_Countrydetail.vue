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
		<div class="plcMenuBarHolder placeNavBar">
			<div class="plcMenuBars">
				<ul class="placeNav">
					<li class="menu">
						<el-popover placement="bottom-start" width="575" trigger="hover" popper-class="chengshi">
						<ul class="cityList">
                          <li class="cityItem">
                            <router-link to="">
                               <img class="pic" src="http://pic.lvmama.com/uploads/pc/place2/2017-12-05/60075c3b-ef6a-450e-9000-4cfe4e42ab48_480_320.jpg">
                                <span class="cn">
                                    东京
                                </span>
                                <span class="en">
                                    Tokyo
                                </span>
                            </router-link>
                        </li>
                            </ul>
							<span slot="reference">热门城市 <i class="el-icon-caret-bottom
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
							<em slot="reference">国家指南 <i class="el-icon-caret-bottom
"></i></em>
						</el-popover>
					</li>
					<li class="menu">
						<el-dropdown placement="bottom-start">
							<em class="el-dropdown-link">
								景点玩乐 <i class="el-icon-caret-bottom
"></i>
							</em>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.listStrategy" :key="index">
									<router-link style="color:#555555" :to="{ name:'Destination_list_Strategy', params: { listStrategyid: item.listStrategyid}}">{{item.listStrategycity}}({{item.listnumber}})</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
				</ul>
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
			}
		},
		created() {
			this.buildCountry_breadcrumb();
			this.buildCountryplcTopBar();
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
		},
		components: {
			headers
		}
	}
</script>

<style lang="scss">
	.plcMenuBarHolder {
		width: 100%;
		min-height: 60px;

		.plcMenuBars {
			
			margin: 0 auto;
			width: 980px;
			border-bottom: 1px solid #d7d7d7;
			background-color: #fff;
			box-shadow: 0 1px 5px rgba(0, 0, 0, .05);
			min-height: 60px;

			.placeNav>li {

				height: 59px;
				list-style: none;
				position: relative;
				line-height: 59px;
				z-index: 2;
				display: table-cell;
				vertical-align: middle;

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
.chengshi .cityItem .cn, .chengshi .cityItem .en {
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

	.plcMenuBars {
		width: 100%;
		min-width: 980px;
		border-bottom: 1px solid #d7d7d7;
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
</style>
