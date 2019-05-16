<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<!-- 面包屑 -->
		<div class="qyer_head_crumb">
			<el-breadcrumb separator-class="el-icon-arrow-right" v-for="(item,index) in strategy_breadcrumb" :key="index">
				<el-breadcrumb-item :to="{path:item.link,params: { breadcrumbid: item.breadcrumbid }}" v-for="(item,index) in item.strategy_breadcrumbs"
				 :key="index">{{item.breadcrumbname}}</el-breadcrumb-item>
				<el-breadcrumb-item>{{item.breadcrumbcity}}活动攻略</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="plcTopBar clearfix" v-for="(item,index) in plcTopBar" :key="index">
			<div class="plcTopBarL">
				<p class="plcTopBarNameEn">
					<router-link :to="{name:'/Destination_Citydetail',params: { cityid: item.cityid }}">
						{{item.plcTopBarjianxie}}
					</router-link>
				</p>
				<div class="plcTopBarNameCns clearfix">
					<p class="plcTopBarNameCn fontYaHei">
						<router-link :to="{name:'/Destination_Citydetail',params: { cityid: item.cityid }}">
							{{item.plcTopBarcity}}
						</router-link>
					</p>
				</div>
			</div>
			<div class="plcTopBarR">
				<div class="plcTopBarWeather">
				</div>
				<div class="plcTopBarStat fontYaHei">
					<em>{{item.plcTopBargo}}</em>人去过这里,
					<em>{{item.plcTopBarpinlun}}</em>条目的地点评
				</div>
			</div>
			<div style="clear:both"></div>
		</div>
		<div class="plcMenuBars" v-for="(item,index) in strategy_list">
			<div class='plcMenuBar'>
				<ul class="plcMenuBarList">
					<li class="guide">
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
							<em slot="reference">城市指南</em>
						</el-popover>
					</li>
					<li class="poi">
						<el-dropdown placement="bottom-start">
							<em class="el-dropdown-link">
								旅行地
							</em>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.listStrategy" :key="index">
									<router-link style="color:#555555" :to="{ name:'Destination_list_Strategy', params: { listStrategyid: item.listStrategyid}}">{{item.listStrategycity}}({{item.listnumber}})</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="route">
						<router-link to="/Destination_Strategydetail"><em>行程路线</em></router-link>
					</li>
					<li class="hotel">
						<router-link to="/Destination_Strategydetail"><em>住宿</em></router-link>
					</li>
					<li class="travel">
						<router-link to="/Destination_Strategydetail"><em>游记攻略</em></router-link>
					</li>
					<li class="map">
						<router-link to="/Destination_Strategydetail"><em>地图</em></router-link>
					</li>
				</ul>
				<p class="plcMenuBarAddPlan">
					<router-link to="/Destination_Strategydetail">加入行程</router-link>
				</p>
			</div><!-- plcMenuBar -->
		</div>

		<div class="plcListMgContainer">
			<div class="qyWrapsbanner" v-for="(item,index) in qyWrap" :key="index">
				<div style="width: 980px; margin: 0 auto;">
					<div class="plcListMgTitles">
						<h2 class="title fontYaHei">{{item.mguidedidian}}美食微锦囊</h2>
						<p class="more">
							<router-link :to="{ name:'Destination_mguide ', params: { mguideid: item.mguideid}}">更多微锦囊({{item.mguidenumber}})
								<i class="el-icon-arrow-right" style="vertical-align: middle;"></i></router-link>
						</p>
					</div>
				</div>
				<el-carousel class="qyWrapsbanner" height="250px" arrow="always">
					<el-carousel-item v-for="(item,index) in item.qyWraps" :key="index">
						<div style="width: 980px; margin: 0 auto;">
							<li class="qyWrapslist" v-for="(item,index) in item.qyWrapc" :key="index">
								<router-link :to="{ name:'Destination_mguidedetail ', params: { Destination_mguidedetailid: item.Destination_mguidedetailid}}"
								 title="item.mguidedetailtitle">
									<p class="photo"><img :src="item.mguidedetailimg " width="227" height="auto" alt="item.mguidedetailtitle"></p>
									<p class="photoMask"></p>
									<div class="content">
										<p class="face"><img :src="item.mguidedetailavter" width="60" height="60" alt="堂本琥珀"></p>
										<h3 class="title fontYaHei">{{item.mguidedetailtitle}}</h3>
										<blockquote class="text">{{item.mguidedetaildsc}}</blockquote>
										<p class="tags">
											{{item.mguidedetailtags}}
										</p>
									</div>
									<div class="bottom"></div>
								</router-link>
							</li>
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="qyWraplist">
			<!-- 游记攻略 before -->
			<div class="qyMain" v-for="(item,index) in zl" :key="index">
				<h3 class="subTitle">{{item.zlcity}}旅行地</h3>
				<ul class="plcPoiSort">
					<li>
						<p class="tit">旅行地：</p>
						<p class="labels">
							<a v-for="(item,index) in item.search_luvxing" :class="type_indexl===index?'current':''" @click="clickIndexl(index)"
							 :key="index">{{item.lvxingdi}} ({{item.lvxingnumber}})</a>
						</p>
					</li>
					<li>
						<p class="tit">主题：</p>
						<p class="labels">
							<a v-for="(item,index) in item.search_zhuti" :class="type_indexz===index?'current':''" @click="clickIndexz(index)"
							 :key="index">{{item.zhitiname}}</a>
						</p>
					</li>
				</ul>
				<div style="clear: both;"></div>
				<div class="plcPoiSift">
					<p class="shaix" style="position: relative;">
						<label><input class="shaixinput" type="radio" name="poi" value="1" rel="poi" @click="search_clickradio"><span>微锦囊推荐</span></label>
						<label><input class="shaixinput" type="radio" name="poi" value="2" rel="poi" @click="search_clickradio"><span>有折扣</span></label>
					</p>
					<div class="qui-select">
						<el-select v-model="value" clearable placeholder="请选择" class="elselect">
							<el-option v-for="item in search_options" @click="searchselect(index)" :key="item.value" :label="item.label"
							 :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="plcPoiListStrategy showed">
					<li v-for="(item,index) in plcPoiList" :key="index">
						<div class="cntBox clearfix">
							<p class="pics">
								<router-link :to="{ name:'Destination_mguidedetail ', params: { plcPoiListid: item.plcPoiListid}}">
									<img :src="item.plcPoiListidimg" width="227" height="150"><span class="label">用户热推</span></router-link>
							</p>
							<h3 class="title fontYaHei">
								<router-link :to="{ name:'Destination_mguidedetail ', params: { plcPoiListid: item.plcPoiListid}}">{{item.plcPoiListtitle}}&nbsp;&nbsp;<span>Tokyo
										{{item.plcPoiListidjianxie}}</span></router-link>
							</h3>
							<div class="info">
								<p class="stars">
									<el-rate v-model="item.ratevalue" disabled show-score text-color="#3f9f5f" score-template="{value}">
									</el-rate>
									<span class="dping">
										<router-link :to="{ name:'Destination_mguidedetail ', params: { plcPoiListid: item.plcPoiListid}}">{{item.plcPoiListpinglun}}人点评</router-link>
									</span>
									<span class="zhe">折</span> <span class="infoSide"> 景点观光排名 <em class="rank orange">第{{item.plcPoiListfirat}}位</em>
									</span>
								</p> 
							</div>
							<div class="comment clearfix">
								<p class="user">
									<router-link to=''><img :src="item.plcPoiListavter" width="32" height="32" alt="item.plcPoiListtitle"></router-link>
								</p>
								<p class="txt">{{item.plcPoiListxt}}</p>
								<p class="mguideNumber">
									<router-link to='' style="color: #777777;">{{item.plcPoiListjn}}个微锦囊推荐了这里</router-link>
								</p>
							</div>
							<br />
							<dt class="orange bordert">优选折扣:
								<router-link :to="{ name:'Destination_mguidedetail ', params: { plcPoiListid: item.plcPoiListid}}" style="color: #777777;">
									{{item.plcPoiListyouhui}}</router-link></dt>

						</div>
					</li>

				</div>

			</div>
			<div class="plcPoiLis_jieshao" v-for="(item,index) in strategy_jieshao" :key="index">
				<h3 class="subTitle">{{item.strategy_jieshao_didian}}活动攻略</h3>
				<p class="text">{{item.strategy_jieshao_text}}</p>
				<p align="right">
					<router-link to="/" style="color: #0073b6;">阅读全文<i class="el-icon-arrow-right"></i></router-link>
				</p>
				<p class="plaBorderGap" style="width: 100%;
    height: 1px;
    overflow: hidden;
    background-color: #ececec;
    margin: 30px 0;"></p>
				<h3 class="subTitle">{{item.strategy_jieshao_didian}}活动地图</h3>
				<br />
				<img :src="item.strategy_jieshao_img" width="100%" />
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
				id: this.$route.query.id,
				type_indexl: 0,
				type_indexz: 0,
				value: '按综合',
				search_options: [{
						value: 1,
						label: '按综合'
					},
					{
						value: 2,
						label: '按过去数'
					},
					{
						value: 3,
						label: '按评分'
					},
					{
						value: 4,
						label: '按点评数'
					}
				],
				strategy_breadcrumb: [],
				plcTopBar: [],
				qyWrap: [],
				zl: [],
				plcPoiList: [],
				strategy_jieshao: []
			}
		},
		created() {
			this.buildstrategy_breadcrumb();
			this.buildplcTopBar();
			this.buildstrategy_list();
			this.buildqyWrap();
			this.buildzl();
			this.buildplcPoiList();
			this.buildstrategy_jieshao();
		},
		methods: {
			buildstrategy_breadcrumb() {
				this.axios.get('/api/buildstrategy_breadcrumb').then(res => { //+this.id
					this.strategy_breadcrumb = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildplcTopBar() {
				this.axios.get('/api/buildplcTopBar').then(res => { //+this.id
					this.plcTopBar = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildstrategy_list() {
				this.axios.get('/api/buildstrategy_list').then(res => { //+this.id
					this.strategy_list = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildqyWrap() {
				this.axios.get('/api/buildqyWrap').then(res => { //+this.id
					this.qyWrap = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildzl() {
				this.axios.get('/api/buildzl').then(res => { //+this.id
					this.zl = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildstrategy_jieshao() {
				this.axios.get('/api/buildstrategy_jieshao').then(res => { //+this.id
					this.strategy_jieshao = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildplcPoiList() {
				this.axios.get('/api/buildplcPoiList'
					// ,{
					//         params:this.search_params,
					//         radio:this.$refs.poi.value,
					// }
				).then(res => { //+this.id
					this.plcPoiList = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			clickIndexl(index) {
				this.type_indexl = index
				this.search_params['type'] = this.search_luvxing[index];
				this.buildplcPoiList();

			},
			clickIndexz(index) {
				this.type_indexz = index
				this.search_params['type'] = this.search_zhuti[index];
				this.buildplcPoiList();
			},
			// inputradio点击筛选数据
			search_clickradio() {
				this.buildplcPoiList();
			},
			searchselect(index) {
				this.search_params['type'] = this.search_options[index];
				this.buildplcCitylist();
			}

		},

		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.plcPoiLis_jieshao {
		float: right;
		width: 270px;

		.subTitle {
			font-size: 16px;
			line-height: 18px;
			color: #636363;
			font-weight: 500;

		}

		.text {
			margin-top: 15px;
			line-height: 20px;
			color: #636363;

		}
	}

	.qyWraplist {
		width: 980px;
		padding: 40px 0;
		margin: 0 auto;

		.qyMain {
			float: left !important;
			width: 680px;

			.subTitle {
				font-size: 16px;
				line-height: 18px;
				color: #636363;
			}

			.plcPoiSort {
				margin: 20px 0;
				border: 1px solid #ececec;
				position: relative;
				list-style: none;

				.tit {
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					width: 80px;
					padding-right: 10px;
					background-color: #f5f5f5;
					text-align: right;
					line-height: 44px;

				}

				.labels {
					float: right;
					width: 571px;
					overflow: hidden;
					border-left: 1px solid #ececec;
					padding: 7px 8px;
					background-color: #fff;
					line-height: 20px;
				}

			}
		}

	}

	.plcPoiSort li:first-child {
		border-top: none;
	}

	.plcPoiSort li {
		position: relative;
		width: 100%;
		overflow: hidden;
		border-top: 1px solid #ececec;
		color: #636363;
	}

	.plcPoiSort .labels a.current,
	.plcPoiSort .labels a:hover {
		border-radius: 2px;
		background-color: #67b27a;
		color: #fff;
		text-decoration: none;
	}

	.plcPoiSort .labels a {
		float: left;
		margin: 5px 12px;
		font-size: 12px;
		padding: 0 4px;
		color: #636363;
	}

	.plcListMgContainer {
		width: 100%;
		min-width: 980px;
		padding: 30px 0;
		border-bottom: 1px solid #ececec;
		background-color: #f5f5f5;

		.qyWrapsbanner {
			width: 1130px;

			margin-left: auto;
			margin-right: auto;

			.plcListMgTitles {
				width: 100%;
				overflow: hidden;
				margin-bottom: 18px;

				.title {
					float: left;
					font-size: 16px;
					line-height: 18px;
					color: #636363;
				}

				.more {
					float: right;

					a {
						color: #959595;
					}
				}
			}
		}
	}

	.plcPoiSift {

		height: 54px;
		border: 1px solid #ececec;

		.shaix {
			float: left;
			padding-left: 20px;
			line-height: 54px;

			.shaixinput {
				float: left;
				margin: 20px 3px 0 0;
			}

			label {
				float: left;
				margin-right: 30px;
			}
		}

		.qui-select {
			float: right;
			padding-right: 10px;
			width: 120px;
			height: 54px;

			overflow: hidden;

			.elselect {
				margin-top: 8px;
			}
		}
	}

	.plcPoiListStrategy {
		width: 680px;
		float: left;
	}

	.plcPoiListStrategy li {
		border-bottom: 1px solid #ececec;
		padding: 30px 0 20px;
		list-style: none;
	}

	.plcPoiListStrategy .cntBox {
		position: relative;
		padding-left: 247px;
	}

	.plcPoiListStrategy .pics {
		position: relative;
		float: left;
		margin-left: -247px;
	}

	.plcPoiListStrategy .pics .label {
		position: absolute;
		left: 15px;
		top: 15px;
		width: 70px;
		height: 20px;
		line-height: 22px;
		overflow: hidden;
		color: #fff;
		font-size: 12px;
		background-color: #3f9f5f;
		opacity: .75;
		text-align: center;
		border-radius: 10px;
	}

	.plcPoiListStrategy .title {
		width: 380px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		line-height: 18px;
		color: #959595;
	}

	.plcPoiListStrategy .title a {
		color: #323232;
		font-weight: 700;
	}

	.plcPoiListStrategy .title a span {
		color: #959595;
		font-weight: 700;

	}

	.plcPoiListStrategy .info {
		width: 100%;
		overflow: hidden;
		padding: 10px 0;
		color: #959595;
		position: relative;
		height: 18px;
	}
	.plcPoiListStrategy .info .stars{
		/deep/ .el-rate{
		float: left;
	}
	}
	.plcPoiListStrategy .info .stars .el-icon-star-on {
		color: #28b76c !important;
	}
		.plcPoiListStrategy .info .stars .el-rate__text{
			font-size: 15px;
		}
	.plcPoiListStrategy .dping {
		float: left;
		margin-left: 20px;

		a {
			color: #959595;
		}
	}


	.plcPoiListStrategy .zhe {
		float: left;
		margin-left: 10px;
		margin-top: 1px;
		width: 16px;
		height: 16px;
		overflow: hidden;
		background: url(//common2.qyerstatic.com/place/project/images/icon-sprites.png) no-repeat -40px -120px;
		line-height: 160px;
	}

	.plcPoiListStrategy .infoSide {
		position: absolute;
		right: 0;
		top: 11px;
	}

	.plcPoiListStrategy .cntBox .orange {
		color: #f26622;
		font-style: normal;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.plcPoiListStrategy .cntBox .bordert {
		padding: 20px 0;
		border-top: 1px dashed #ececec;
	}

	.plcPoiListStrategy .rank {
		padding-left: 5px;
	}

	.plcPoiListStrategy .comment {
		height: 70px;
		overflow: hidden;
		line-height: 20px;
		position: relative;
		margin-top: 15px;
	}

	.plcPoiListStrategy .comment .user {
		float: left;
		padding-right: 10px;
		padding-top: 4px;

		img {
			display: block;
			border-radius: 50%;
		}
	}

	.plcPoiListStrategy .comment .txt {
		height: 40px;
		color: #636363;
		overflow: hidden;
	}

	.plcPoiListStrategy .mguideNumber {
		margin: 10px 0 0;
	}

	.clearfix:after {
		display: block;
		font-size: 0;
		height: 0;
	}

	.plcPoiListStrategy .discount {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border-top: 1px dashed #ececec;
		margin-top: 8px;
		padding-top: 20px;
		position: relative;

		.orange {
			color: #ff7466;

		}


		.list {
			margin-left: 55px;
			margin-right: 20px;
			height: 20px;
		}
	}


	.qyWrapsbanner .qyWrapslist {
		position: relative;
		float: left;

		width: 227px;
		height: 219px;
		list-style: none;
		border-bottom: 1px solid #ececec;
		overflow: hidden;
		background-color: #fff;
	}

	.qyWrapsbanner .qyWrapslist:nth-of-type(2) {
		margin-left: 24px;
	}

	.qyWrapsbanner .qyWrapslist:nth-of-type(3) {
		margin-left: 24px;
	}

	.qyWrapsbanner .qyWrapslist:nth-of-type(4) {
		margin-left: 24px;
	}

	.qyWrapsbanner .el-carousel__indicator {
		display: none !important;
	}

	.qyWrapsbanner .qyWrapslist .photoMask {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 200px;
		background: transparent url(//common2.qyerstatic.com/place/project/images/mguide-photomask.png) repeat-x;
		-webkit-transition: background-color .5s;
		transition: background-color .5s;
	}

	.qyWrapsbanner li .content {
		position: absolute;
		left: 0;
		right: 0;
		top: 150px;
		height: 300px;
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		padding: 0 20px;
		background-color: #fff;
		line-height: 20px;
		-webkit-transition: top .5s;
		transition: top .5s;
	}

	.qyWrapsbanner li a:hover .content {
		top: 60px;
	}

	.qyWrapsbanner li .face {
		position: absolute;
		left: 50%;
		top: -36px;
		margin-left: -36px;

		img {
			display: block;
			border-radius: 50%;
			border: 2px solid #fff;
		}
	}

	.qyWrapsbanner li .title {
		padding-top: 30px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		color: #323232;
	}

	.qyWrapsbanner li .text {
		height: 60px;
		overflow: hidden;
		padding-top: 5px;
		color: #636363;
	}

	.qyWrapsbanner li .tags {
		margin-top: 5px;
		color: #959595;
	}

	.qyWrapsbanner li .bottom {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 16px;
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		background: #fff;
	}

	.qyWrapsbanner li .bottom:before {
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

	.plcMenuBarList em.hover {
		color: #21BF6A;
	}

	.plcMenuBarList li.guide em {
		background-position: left 15px;
		font-style: normal;

	}

	.plcMenuBarList em {
		display: inline-block;
		padding-left: 30px;
		font-style: normal;
		background: url(//common2.qyerstatic.com/place/project/images/icon-menu.png) no-repeat;
	}

	.plcMenuBarList li.poi em {
		font-style: normal;
		background-position: left -45px;
	}

	.plcMenuBarList li.route em {
		font-style: normal;
		background-position: left -105px;
	}

	.plcMenuBarList li.hotel em {
		font-style: normal;
		background-position: left -165px;
	}

	.plcMenuBarList li.travel em {
		font-style: normal;
		background-position: left -225px;
	}

	.plcMenuBarList li.map em {
		font-style: normal;
		background-position: left -285px;
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

	.plcMenuBarAddPlan a:before {
		content: '';
		display: inline-block;
		vertical-align: -3px;
		width: 18px;
		height: 18px;
		margin-right: 14px;
		background: url(//common2.qyerstatic.com/place/project/images/icon-menu.png) no-repeat -30px -360px;
	}
</style>
