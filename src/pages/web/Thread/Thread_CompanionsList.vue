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
				<router-link :to="{ name:'', params: { coutrycountryid: item.coutrycountryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>欧洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.yazhoucoutry" :key='index'>
				<router-link :to="{ name:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>亚洲版块 <i class="el-icon-arrow-down iconsss"></i></a>

			</el-popover>

			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.meizhoucoutry" :key='index'>
				<router-link :to="{ name:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>美洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.dayangzhoucoutry" :key='index'>
				<router-link :to="{ name:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>大洋洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.feizhoucoutry" :key='index'>
				<router-link :to="{ name:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
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
		<div class="crumnav">
			<div class="filterimg" style="background: url(//pics.lvjs.com.cn/uploads/pc/place2/2019-05-07/5db6b8b7-6bcb-415c-9e23-bc3166a1798d.jpg);"></div>
			<div class="crumnavt">
				<img src="//pics.lvjs.com.cn/uploads/pc/place2/2019-05-21/9b2b688c-9f62-4b5f-b0e9-d98fda244660.jpg" width="680px"
				 height="260px" />

				<div class="cn-info">
					<h3 class="cni-tle">结伴同游</h3>
					<p class="cni-con"><b class="cni-num">1亿</b>靠谱穷游er</p>
					<p class="cni-con"><b class="cni-num">110394</b>个正在结伴</p>
					<p class="cni-con"><b class="cni-num">6000</b>个近一个月内出发</p>
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
			<div class="dest" v-for="(item,index) in gotimehot" :key="index">
				<span class="title">目的地</span>

				<div class="desttab">
					<el-tabs>
						<el-tab-pane label="热门">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehots" :key="index">
									<a id='com_hotmudi' :class="type_indexhot===index?'active':''" @click="typeIndexhot(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="亚洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotyazhou" :key="index">
									<a id='com_hotmudi' :class="type_indexyazhou===index?'active':''" @click="typeIndexyazhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="欧洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotouzhou" :key="index">
									<a id='com_hotmudi' :class="type_indexouzhou===index?'active':''" @click="typeIndexouzhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="北美洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotbeimeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexbeimeizhou===index?'active':''" @click="typeIndexbeimeizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="南美洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotnanmeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexnanmeizhou===index?'active':''" @click="typeIndexnameizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="大洋洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotdayangzhou" :key="index">
									<a id='com_hotmudi' :class="type_indexdayangzhou===index?'active':''" @click="typeIndexdayangzhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="非洲">
							<ul class="desttabul">
								<li class="gotimeclass" v-for="(item,index) in item.gotimehotfeizhou" :key="index">
									<a id='com_hotmudi' :class="type_indexfeizhou===index?'active':''" @click="typeIndexfeizhou(index)">{{item.hotcountry}}</a></li>
							</ul>
						</el-tab-pane>
					</el-tabs>
				</div><!-- desttab -->
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="navinfo">
			<div class="checkboxarea">
				<a class="checkboxitem"><input class="checkbox_input" type="checkbox" name='sex' value="我要拼车" rel="pinche" /> 我要拼车</a>
				<a class="checkboxitem checkboxitemleft"><input class="checkbox_input" name='sex' type="checkbox" value="我要拼房" rel="pinfang" />
					我要拼房</a>
			</div>
			<div class="checkboxtag">
				<a class="lastpub" v-for="(value,index) in checkboxtag" :key='index' :class="type_indexnew===index?'active':''"
				 @click="typeIndexnew(index)">
					{{value,chboxname}}</a>
			</div>
		</div>
		<div style="clear: both;"></div>
		<br />
		<br />
		<br />
		<div class="cardwrap">
			<div class="Com_container">
				<router-link to="" class="Com_card">
					<div class="imgwp"><img class="ci" src="//pic.qyer.com/album/149/5e/2015637/index/300x300" alt="">

						<p class="Com_title">一起去旅行～一起去旅行一起去旅行一起去旅行一起去旅行一起去旅行一起去旅行</p>

						<div class="travelmated">已成功结伴</div>
					</div>
					<div class="con">
						<p class="name"><img class="user" src="https://pic.qyer.com/avatar/011/55/29/74/200?v=1558787329" alt=""><span
							 class="txt">Katrina999</span><span class="tag">__tag__</span></p>
						<p class="des dinfo"><i class="el-icon-location-information"></i> 中国<span class="split">,</span>台湾</p>
						<p class="date dinfo"><i class="el-icon-date"></i> 2019.06.16<span class="join">-</span>2019.06.23</p>
					</div>
				</router-link>
			</div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	export default {
		name: 'Thread',
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
				coutryCom: [],
				gotimes: [],
				gotimehot: [],
				type_index: 0,
				type_indexhot: -1,
				type_indexyazhou: -1,
				type_indexouzhou: -1,
				type_indexbeimeizhou: -1,
				type_indexnameizhou: -1,
				type_indexdayangzhou: -1,
				type_indexfeizhouzhou: -1,
				type_indexnew: 0,
				checkboxtag: ["最新发布", "最近出发"]

			}
		},
		created() {
			this.buildcoutryCom();
			this.buildgotimes();
			this.buildgotimehot();
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
					this.gotimehot = res.data.data
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
			},
			typeIndexhot(index) {
				this.type_indexhot = index
			},
			typeIndexyazhou(index) {

				this.type_indexyazhou = index
			},
			typeIndexouzhou(index) {

				this.type_indexouzhou = index
			},
			typeIndexbeimeizhou(index) {

				this.type_indexbeimeizhou = index
			},
			typeIndexnanmeizhou(index) {

				this.type_indexnanmeizhou = index
			},
			typeIndexdayangzhou(index) {

				this.type_indexdayangzhou = index
			},
			typeIndexfeizhouzhou(index) {

				this.type_indexfeizhou = index
			},
			typeIndexnew(index) {
				this.type_indexnew = index
			},

		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
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
				margin-left: 13px;
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
			.Com_card:hover .ci{
				 transform: scale(1.1);
			}
		}

	}

	.navinfo {
		line-height: 50px;
		background: #f4f4f4;
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

			.checkboxitemleft {
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

	.m-sel .dest .desttab {
		width: 827px;
		float: left;
		position: relative;
		top: -13px;
		margin-left: 18px;

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
</style>
