<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="place-home-banner" v-for="(item,index) in des" :key="index">
			<img src="https://p2-q.mafengwo.net/s13/M00/95/C7/wKgEaVzT6LKAbcE1AAj3FOEdO0M01.jpeg" width="100%" height="500px"
			 @mouseout='blur' />
			<div class="place-home-banner-search">
				<p align="center" class="hello">你好,世界！</p>
				<br />
				<div class="Des-form">
					<el-form ref="cityformrul" :rules="cityformrul" :model="cityform">
						<el-form-item>
							<el-input placeholder="搜索国家 城市 旅途景点 目的地" class="Des-input" autocomplete="off" value="" v-model="cityform.cityname"
							 id="city" rel="city" v-on:input="focus()">
								<button slot="append" @click="searchcity('cityformrul')" class="success el-icon-search"> 搜索</button>
							</el-input>
						</el-form-item>
					</el-form>
					<div class="searchLists js-search-lists" v-if="autocomplete">
						<ul>
							<li v-for="(item,index) in item.searchhotCity" :key="index">
								<div class="search-title search-city-title"><a class="search-name"><span class="cGreen">{{item.guojia}}</span>
										</em><em class="en">{{item.jname}}</em><span class="property">{{item.didian}}景点观光</span></a></div>
							</li>

						</ul>
					</div>
				</div>
			</div>
			<div class="relation">
				<router-link :to="{ path:'/Destination_Detail', params: { id: item.id}}"><img style="vertical-align: middle;" src="../../../assets/images/qiongyou/picabout.png">关于图片</router-link>
			</div>
		</div>
		</div>
		<!-- 热门城市推荐 -->
		<div class="place-home-box">
			<h3 class="place-home-title">
				<span class="title">
					热门城市推荐
				</span>
			</h3>
			<div class="place-home-tab">
				<ul class="tabs">

					<li id="remenid" class="on" v-for="(value,key) in base" :key="key" :class="key === base_index?'active':''"
					 v-on:mouseenter="changeBaseIndex(key)">
						{{value}}
					</li>

				</ul>
			</div>

			<div v-for="(value,key) in descity" class="place-home-card1" :class="key === base_index?'active':''" :key="key">
				<div v-for="(value,key) in value.descitys">
					<li class="item" v-for="(value,key) in value.descityss" :key="key">
						<dl v-for="(value,key) in value.descitysss" :key="key">
							<dt>
								{{value.citytitle}}
							</dt>
							<dd>
								<router-link v-for="(value,key) in value.descitycontent" :key="key" :to="{ path:'/Destination_Detail', params: { id: value.id}}">{{value.cityname}}</router-link>
							</dd>
						</dl>


					</li>
				</div>
			</div>
		</div>
		<div class="place-btn-container">
			<a href="javascript:void(0)" class="place-home-btn" id="js-see-all">
				查看全部国家
			</a>
		</div>
		</div>
		<!-- 	主题目的地 -->
		<div class="place-home-box">
			<h3 class="place-home-title">
				<span class="title">
					主题目的地
				</span>
			</h3>
			<div class="place-home-tabz">
				<ul class="tab">
					<li id="remenidz" v-for="(value,key) in zbase" :key="key" :class="key === base_indexz?'active':''" v-on:mouseenter="changeBaseIndexz(key)">
						{{value}}
					</li>
				</ul>
			</div>
			<div v-for="(item,key) in desczhu" class="place-home-card2" :class="key === base_indexz?'active':''" :key="key">
				<ul>
					<li class="type1" :style="{backgroundImage:'url(' + item.zhubg + ')'}">
						<router-link :to="{ path:'/Destination_Detail', params: { id: item.id}}" class="inner">
							<h4>
								{{item.title}}
							</h4>
							<div class="content">
								{{item.dsc}}
							</div>
						</router-link>
					</li>
					<li v-for="(item,key) in item.desmall" :style="{backgroundImage:'url(' + item.zhubgz + ')'}">
						<router-link :to="{ path:'/Destination_Detail', params: { id: item.id}}" class="inner">
							<h4>
								{{item.title}}
							</h4>
							<div class="content">
								{{item.dsc}}
							</div>
						</router-link>
					</li>
				</ul>
			</div>

		</div>
		<!-- 	月度推荐 -->
		<div class="place-home-box">
			<h3 class="place-home-title">
				<span class="title">
					月度推荐
				</span>
			</h3>
			<div class="place-home-taby place-home-month  ">
				<ul class="tab">
					<li id="remenidy" v-for="(value,key) in ybase" :key="key" :class="key === base_indexy?'active':''" v-on:mouseenter="changeBaseIndexy(key)">
						{{value}}
					</li>
				</ul>
			</div>
			<div v-for="(item,key) in desczhuy" class="place-home-card3" :class="key === base_indexy?'active':''" :key="key">
				<ul>
					<li v-for="(item,key) in item.desczhucontent" :style="{backgroundImage:'url(' + item.zhubgy + ')'}">
						<router-link :to="{ path:'/Destination_Detail', params: { id: item.id}}" class="inner">
							<h4>
								{{item.title}}
							</h4>
							<div class="content">
								{{item.dsc}}
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 	国家列表 -->
		<div class="place-home-box">
			<h3 class="place-home-title">
				<span class="title">
					国家列表
				</span>
			</h3>
			<div class="place-home-tabg">
				<ul class="tab">
					<li id="remenidg" v-for="(value,key) in gbase" :key="key" :class="key === base_indexg?'active':''" v-on:mouseenter="changeBaseIndexg(key)">
						{{value}}
					</li>
				</ul>
			</div>
			<div class="place-home-card4-tip">
				拼音首字母顺序
			</div>
			<div class="place-home-card4" v-for="(item,key) in desguojia" :class="key === base_indexg?'active':''" :key="key">
				<ul>
					<li v-for="(item,key) in item.desguojiacontent">
						<span class="item">
							<router-link :to="{ path:'/Destination_Detail', params: { id: item.id}}"><span>{{item.guojia}}</span> <em>{{item.jname}}</em><span
								 class="hot" v-if="item.type===1"> 热门</span></router-link>
						</span>
					</li>
				</ul>
			</div>
			<div style="clear: both;"></div>
			<br />
			<br /><br />
		</div>


	</el-col>
</template>
<style lang="scss">
	// 国家列表
	.place-home-tabg {
		height: 32px;
		margin: 0 0 40px;
		position: relative;

		.tab {
			 overflow: hidden;
			position: relative;
			font-size: 0;
			width: fit-content; 
			margin: 0 auto;
			border-bottom: #E9E9E9 1px solid;
			
					li {
						font-size: 18px;
						margin: 0 50px 0px 0px;
						display: inline-block;
						height: 30px;
						 text-align: left;
						line-height: 20px;
						color: #929292;
						border-bottom: 0px solid #e5e5e5;
						overflow: visible;
						cursor: pointer;
					}
					li:last-child{
						margin: 0 0 0 0;
					}
		}
	}

	.place-home-card4 {
		display: none;
	}

	.place-home-card4.active {
		display: block;
	}

	.place-home-card4 li {
		float: left;
		width: 33.33%;
		overflow: visible;
		white-space: nowrap;
		height: 30px;
	}

	.place-home-card4 li:nth-child(3n+0) .item,
	.place-home-card4 li:nth-child(3n-1) .item {
		margin-left: 30px;
	}

	.place-home-card4 li .item {
		display: block;
		line-height: 16px;
		margin-bottom: 14px;
	}

	.place-home-card4 li .item a {
		color: #000;
		font-size: 14px;
		text-decoration: none;
	}

	.place-home-card4 li .item a span {
		margin-right: 3px;
	}

	.place-home-card4 li .item a em {
		color: #959595;
		font-weight: 100;
	}

	.place-home-card4 li .item .hot {
		display: inline-block;
		background-color: rgb(255, 131, 35);

		color: rgb(255, 255, 255);
		font-size: 12px;
		line-height: 16px;
		padding: 1px;
		margin: 0px 0px 0px 5px;
	}

	

	.place-home-tabg #remenidg.active {
		color: #000;
		position: relative;
		z-index: 100;
		border-bottom: 2px solid #28b76c;

	}

	.place-home-card4-tip {
		padding-bottom: 20px;
		color: #959595;
	}

	// 搜索层以及背景
	.place-home-banner {
		position: relative;
		width: 100%;
		height: 500px;

		.place-home-banner-search {
			position: absolute;
			bottom: 50px;
			width: 760px;
			height: 310px;
			left: 50%;
			margin: 0 0 0 -380px;

			.hello {
				font-size: 60px;
				color: #fff;
				font-weight: 700;
				text-shadow: 0 5px 5px rgba(0, 0, 0, .1);
			}

			.Des-form {
				width: 100%;
				height: 70px;

			}
		}
	}

	.relation {
		position: absolute;
		bottom: 40px;
		right: 8%;
		color: #fff;

		line-height: 18px;
	}

	.place-home-banner .relation .about {
		margin-left: 2px;
		text-shadow: 0 0 1px rgba(0, 0, 0, .5);
	}

	.place-home-banner-search .Des-input {
		/deep/ .el-input__inner {
			height: 60px !important;
		}
	}

	.place-home-banner-search .success {
		display: block;
		width: 138px;
		height: 58px;
		line-height: 58px;
		text-align: center;
		font-size: 18px;
		color: #fff;
		font-weight: 500;
		background-color: #28b76c;
		border: 1px solid #27ad66;
		text-decoration: none;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.place-home-banner-search {
		/deep/ .el-input-group__append {
			padding: 0px;
			border: 0px;
			background-color: #28b76c;
		}
	}

	.searchLists {
		position: absolute;
		width: 618px;
		height: auto;
		overflow: hidden;
		top: 160px;
		left: 0;
		background-color: #fff;
		border-radius: 4px;
		border: 1px solid #efefef;
		z-index: 20;
		box-shadow: 0 0 15px rgba(0, 0, 0, .1);
	}

	.searchLists li a:hover {
		background-color: #d5f1e3;
	}

	.searchLists li a {
		color: #444;
		line-height: 36px;
		display: block;
		text-indent: 20px;
		text-decoration: none;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	// <!-- 热门城市推荐 -->
	.place-home-box {
		margin: 70px auto 0;
		width: 980px;
		zoom: 1;
	}

	.place-home-title {
		text-align: center;
		height: 26px;
		line-height: 24px;
		margin: 0 auto 35px;

		.title {
			font-weight: 500;
			font-size: 24px;
			color: #000;
		}
	}

	.place-home-box #remenid.active {

		color: #000;

		border-bottom: 2px solid #28b76c;
	}

	.place-home-tab {
		height: 32px;
		margin: 0 0 40px;
		position: relative;


		.tabs {
    overflow: hidden;
    position: relative;
    font-size: 0;
    width: fit-content; 
    margin: 0 auto;
    border-bottom: #E9E9E9 1px solid;

			li {
				font-size: 18px;
				margin: 0 50px 0px 0px;
				display: inline-block;
				height: 30px;
				 text-align: left;
				line-height: 20px;
				color: #929292;
				border-bottom: 0px solid #e5e5e5;
				overflow: visible;
				cursor: pointer;
			}
			li:last-child{
				margin: 0 0 0 0;
			}
		}
	}

	

	.place-home-tab .tab li.on span,
	.place-home-tab .tab li:hover span {
		color: #000;
	}

	.place-home-tab .tab li span {
		display: inline-block;
		height: 29px;
		cursor: pointer;
	}

	.place-home-box ul {
		list-style: none;
	}

	.place-home-box .place-home-card1 {
		display: none;
		margin-top: 50px;
		width: 100%;
	}

	.place-home-box .place-home-card1.active {
		display: block;

	}

	.place-home-card1 .item:last-child {
		padding-bottom: 0;
		list-style: none;
	}

	.place-home-card1 dt {
		font-size: 16px;
		height: 20px;
		line-height: 20px;
		margin-bottom: 12px;
		color: #222222;
		font-weight: 500;
	}

	.place-home-card1 .item {
		padding-bottom: 10px;
	}

	.place-home-card1 .item {
		overflow: hidden;
		list-style: none;
	}

	.place-home-card1 .item dl:first-child {
		padding-right: 20px;
		width: 306px;
	}

	.place-home-card1 .item dl:nth-child(2) {
		padding: 0 10px;
		width: 306px;
	}

	.place-home-card1 .item dl:last-child {
		padding-left: 20px;
		width: 306px;

	}

	.place-home-card1 dl {
		overflow: hidden;
		float: left;
		padding-bottom: 15px;
		width: 326px;
	}

	.cGreen,
	.place-home-box ul li a:hover,
	.place-home-card4 li .item a:hover em {
		color: #21bf6a;
		text-decoration: none;
	}

	.place-home-card1 dd a {
		color: #333333;
		margin-right: 12px;
		text-decoration: none;
		display: inline-block;
	}

	.place-btn-container {
		text-align: center;
		padding-top: 10px;
	}

	.place-home-btn:active {
		text-decoration: none;
		background-color: #3f9f5f;
		color: #fff;
	}

	.place-home-btn:hover {
		text-decoration: none;
		background-color: #21bf6a;
		color: #fff;
	}

	a:hover {
		text-decoration: underline;
	}

	.place-home-btn {
		padding: 0 51px;
		height: 48px;
		line-height: 48px;
		border: 1px solid #2fba71;
		display: inline-block;
		text-align: center;
		background-color: #fff;
		color: #28b76c;
		font-size: 18px;
		border-radius: 3px;
		text-decoration: none;
	}

	.place-home-tabz {
		height: 32px;
		margin: 0 0 40px;
		position: relative;

		.tab {
 overflow: hidden;
    position: relative;
    font-size: 0;
    width: fit-content; 
    margin: 0 auto;
    border-bottom: #E9E9E9 1px solid;

			li {
				font-size: 18px;
				margin: 0 50px 0px 0px;
				display: inline-block;
				height: 30px;
				 text-align: left;
				line-height: 20px;
				color: #929292;
				border-bottom: 0px solid #e5e5e5;
				overflow: visible;
				cursor: pointer;
			}
			li:last-child{
				margin: 0 0 0 0;
			}
		}
	}


	.place-home-tabz #remenidz.active {
		color: #000;
		position: relative;
		z-index: 100;
		border-bottom: 2px solid #28b76c;

	}

	.place-home-tabz .tab li:last-child {
		padding-right: 0;
	}

	.place-home-box .place-home-card2 {
		overflow: hidden;
		margin: 0 auto;
		position: relative;
		height: 400px;
		width: 980px;
	}

	.place-home-box .place-home-card2 {
		display: none;
		margin-top: 50px;
		width: 100%;
	}


	.place-home-box .place-home-card2.active {
		display: block;

	}

	.place-home-card2 .type1 {
		height: 400px;
		width: 236px;
		margin: 0;
	}

	.place-home-card2 li {
		float: left;
		width: 236px;
		height: 194px;
		margin: 0 0 12px 12px;
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: #efefef;
		overflow: hidden;
	}

	.place-home-card2 li:first-child:hover .inner {
		margin-top: -400px;
	}

	.place-home-card2 li:hover .inner {
		margin-top: -194px;
		background-color: rgba(0, 0, 0, .5);
	}

	.cGreen,
	.place-home-box ul li a:hover,
	.place-home-card4 li .item a:hover em {
		color: #21bf6a;
		text-decoration: none;
	}

	.place-home-card2 .inner {
		height: 100%;
		overflow: hidden;
		padding: 0 14px;
		position: relative;
		top: 100%;
		margin-top: -58px;
		transition: margin-top .5s;
		-webkit-transition: margin-top .5s;
		-moz-transition: margin-top .5s;
		-ms-transition: margin-top .5s;
		z-index: 11;
		display: block;
		text-decoration: none;
	}

	.place-home-card2 .inner h4 {
		font-size: 16px;
		color: #fff;
		height: 18px;
		line-height: 18px;
		text-align: left;
		margin-top: 26px;
		padding-bottom: 15px;
		border-bottom: 1px solid hsla(0, 0%, 100%, .5);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.place-home-card2 .inner h4 {
		font-size: 16px;
		color: #fff;
		height: 18px;
		line-height: 18px;
		text-align: left;
		margin-top: 26px;
		padding-bottom: 15px;
		border-bottom: 1px solid hsla(0, 0%, 100%, .5);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.place-home-card2 li:after {
		position: absolute;
		bottom: 0;
		height: 50px;
		background: url(//common2.qyerstatic.com/place/project/images/old/place5/pic_titbg.png) repeat-x;
		width: 100%;
		content: '';
	}

	.place-home-card2 .content {
		font-size: 12px;
		line-height: 1.5;
		color: #fff;
		padding-top: 10px;
	}

	// 月度推荐
	.place-home-taby {
		height: 32px;
		margin: 0 0 40px;
		position: relative;
	}

	.place-home-box .place-home-card3 {
		display: none;

	}


	.place-home-box .place-home-card3.active {
		display: block;

	}

	.place-home-month .tab {
		height: 50px;
		overflow: hidden;
		line-height: 50px;
	}

	.place-home-taby .tab {
		overflow: hidden;
		position: relative;
		text-align: center;
		font-size: 0;
	}

	.place-home-month .tab li {
		border: none;
		display: inline-block;
		height: 50px;
		line-height: 52px;
		overflow: hidden;

	}

	.place-home-taby .tab li {
		font-size: 18px;
		display: inline-block;
		line-height: 50px;
		color: #929292;
		margin: 0 15px;
		overflow: visible;
		cursor: pointer;
	}

	.place-home-month .tab #remenidy.active {
		border: none;
		color: #fff;
		border-radius: 50%;
		background-color: #21bf6a;
	}

	.place-home-month .tab li {
		height: 50px;
		overflow: hidden;
		display: inline-block;
		width: 50px;
	}

	.place-home-card3 {
		overflow: hidden;
		width: 990px;
		height: 300px;
		margin: 0;
		position: relative;

		li {
			background-size: cover;
			background-repeat: no-repeat;
			background-color: #efefef;
			overflow: hidden;
			width: 190px;
			height: 300px;
			position: relative;
			float: left;
			margin-right: 8px;
		}
	}

	.place-home-card3 .inner {
		overflow: hidden;
		padding: 0 14px;
		position: relative;
		top: 100%;
		margin-top: -30px;
		transition: margin-top .5s;
		-webkit-transition: margin-top .5s;
		-moz-transition: margin-top .5s;
		-ms-transition: margin-top .5s;
		z-index: 11;
		height: 200%;
		display: block;
		text-decoration: none;
	}

	.place-home-card3 .inner h4,
	.place-home-card3 .inner h5 {
		color: #fff;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.place-home-card3 .content {
		font-size: 12px;
		line-height: 1.5;
		color: #fff;
		padding-top: 10px;
	}

	.place-home-card3 li:after {
		position: absolute;
		bottom: 0;
		height: 50px;
		background: url(//common2.qyerstatic.com/place/project/images/old/place5/pic_titbg.png) repeat-x;
		width: 100%;
		content: '';
	}

	.place-home-card3 li:hover .inner {
		margin-top: -300px;
		background-color: rgba(0, 0, 0, .5);
	}

	.place-home-card3 li:hover h4 {
		margin-top: 15px;
		font-size: 16px;
		font-weight: 600;
	}
</style>
<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'destination',
		data() {

			return {
				autocomplete: false,
				base_index: 0,
				base_indexz: 0,
				base_indexy: 0,
				base_indexg: 0,
				des: [],
				descity: [],
				desczhu: [],
				desczhuy: [],
				desguojia: [],
				base: ["热门推荐", "日韩 港澳台", "东南亚及亚洲其他", "欧洲", "大洋洲 北美", "非洲 南美洲"],
				zbase: ["俯瞰城市", "怀旧时光", "魅力夜色", "神秘遗址", "最爱小镇"],
				ybase: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				gbase: ['亚洲', '欧洲', '非洲', '澳洲', '北美洲', '南美洲', '南极洲'],
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
			}
		},
		created() {
			this.buildsearchhotCitys();
			this.builddescity();
			this.builddesczhu();
			this.builddesczhuy();
			this.builddesguojia();

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
			buildsearchhotCitys() {
				this.axios.get('/api/buildsearchhotCitys').then(res => {
					this.des = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddescity() {
				this.axios.get('/api/builddescity').then(res => {
					console.log(res)
					this.descity = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},

			builddesczhu() {
				this.axios.get('/api/builddesczhu').then(res => {

					this.desczhu = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddesczhuy() {
				this.axios.get('/api/builddesczhuy').then(res => {

					this.desczhuy = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},

			builddesguojia() {
				this.axios.get('/api/builddesguojia').then(res => {

					this.desguojia = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			changeBaseIndex(index) {
				this.base_index = index;

			},
			changeBaseIndexz(index) {
				this.base_indexz = index;

			},
			changeBaseIndexy(index) {
				this.base_indexy = index;

			},
			changeBaseIndexg(index) {
				this.base_indexg = index;

			},
		},
		components: {
			headers
		},
	}
</script>
