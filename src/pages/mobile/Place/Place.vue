<template>
	<el-col :span="24">
		<div class="compo-search-bar">
			<router-link to="/index" class="logo"><img src="../../../assets/images/qiongyou/m-logo.svg" /></router-link>
			<div class="compo-search">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="75px" class="demo-ruleForm">
					<el-form-item prop="compovalue">
						<el-input v-model="ruleForm.compovalue" placeholder="搜索国家、城市、景点、美食"></el-input>
						<i class="el-icon-search compo-searchicon" @click="composearch('ruleForm')"></i>
					</el-form-item>

				</el-form>
			</div>
		</div>
		<div class="compo-hot-month">
			<div class="m-title"><span class="l-tit">当季热门</span>
				<router-link to="" class="s-tit"><i class="el-icon-warning"></i>&nbsp;还没有护照?</router-link>
			</div>
			<div style="clear: both;"></div>
			<div style="overflow:hidden">
				<div class="compo-hot-month-list">
					<span class="compo-list" :class="index === base_index?'active':''" @click="changeBaseIndex(index)" style="width:65px;"
					 v-on:load="scrollleft()" v-for="(month,index) in monthdata" :key="index">{{month}}</span>
					<!-- v-bind:class="{active:isactive}" -->
				</div>
				<div class="compo-tab" v-for="(value,index) in hotlist" :class="index === base_index?'active':''" :key="index">
					<div class="wrap">
						<router-link to="" class="item" v-for="(value,index) in value.hotlistcontent">
							<img :src="value.hotimg" />
							<span>{{value.hotdongwu}}</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="look-all-country">
			<router-link to="" class="look-all-countrys"><img src="../../../assets/images/qiongyou/m-place-country.svg" class="icon-all">查看全部国家
				<i class="icon-arrow el-icon-arrow-right"></i></router-link>
		</div>
		<div class='compo-visa-free'>
			<div class="m-title"><span class="l-tit">免签目的地</span>
				<router-link to="" class="s-tit"><i class="el-icon-warning"></i>&nbsp;免签是什么?</router-link>
			</div>
			<div class="compo-slide-content assist slide-content" style="height:140px;">
				<div class="wrap">
					<router-link v-for="(item,index) in visadata" :to="{path:'/',parame:{visalinkid:item.visalinkid}}" class="item">
						<img :src="item.visaimg">
						<span class="cn-name">{{item.visacn}}</span>
						<span class="en-name">{{item.visaen}}</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="theme-rec-wrap">
			<div class="m-title"><span class="l-tit">主题推荐</span>
				<!---->
			</div>
			<div class="wrap">
				<span class="item"  @click="changeThemeIndex(index),youhua()" :style="{'left':calleft + 'px'}"  :class="index ===Theme_index?'active':''"
				 v-for="(item,index) in themerec">{{item.themename}}</span>
			</div>
			<div class="themelist" :class="index ===Theme_index?'active':''" v-for="(item,index) in themelist">
				<router-link :to="{path:'/',parame:{themelinkid:item.themelinkid}}" class='themeitem' v-for="(item,index) in item.themelistcontent">
					<img :src="item.themeimg" />
					<span>{{item.themename}}</span>
				</router-link>
			</div>
		</div>
	
	</el-col>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css'
	
	export default {
		data() {
			return {
				ruleForm: {
					compovalue: '',
				},
				rules: {
					compovalue: [{
							required: true,
							message: '搜索国家、城市、景点、美食',
							trigger: 'blur'
						},
						{
							min: 0,
							max: 11,
							message: '搜索国家、城市、景点、美食',
							trigger: 'blur'
						}
					],

				},

				monthdata: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				base_index: 0,
				Theme_index: 0,
				hotlist: [],
				visadata: [],
				themerec: [],
				themelist: [],
			}
		},
		created() {
			this.buildhotlist();
			this.buildvisadata();
			this.buildthemerec();
			this.buildthemelist();
		},
		
		computed: {
			scrollleft() {
				var date = new Date;
				var m = date.getMonth();
				// this.isactive[m]=true
			},

		},
		methods: {
			youhua(){
				var themereclength = this.themerec.length;
				if (themereclength > 3) {
					this.calleft -= 65;
					if (this.calleft < -65*n) {
						this.calleft = 0
					}
				} else {
					if (themereclength < 3) {
						this.calleft -= 0;
						if (this.calleft < -0) {
							this.calleft = 0
						}
						//this.swipermove();
					}
				}
			},
			buildhotlist() {
				this.axios.get('/api/buildhotlist'
					// , {
					// 	params: {
					// 		'preview': this.preview,
					// 	}
					// }
				).then(res => {
					this.hotlist = res.data.data; //请求出来的数据
					console.log(res);
				}).catch(function(error) {
					// console.log(error);
				})
			},
			buildvisadata() {

				this.axios.get('/api/buildvisadata'
					// , {
					// 	params: {
					// 		'preview': this.preview,
					// 	}
					// }
				).then(res => {
					this.visadata = res.data.data; //请求出来的数据
					console.log(res);
				}).catch(function(error) {
					// console.log(error);
				})

			},
			buildthemerec() {
				this.axios.get('/api/buildthemerec'
					// , {
					// 	params: {
					// 		'preview': this.preview,
					// 	}
					// }
				).then(res => {
					this.themerec = res.data.data; //请求出来的数据
					console.log(res);
				}).catch(function(error) {
					// console.log(error);
				})
			},
			buildthemelist() {
				this.axios.get('/api/buildthemelist'
					// , {
					// 	params: {
					// 		'preview': this.preview,
					// 	}
					// }
				).then(res => {
					this.themelist = res.data.data; //请求出来的数据
					console.log(res);
				}).catch(function(error) {
					// console.log(error);
				})
			},
			composearch(formName) {
				this.$refs[formName].validate((valid) => {
					this.axios.get('', {
						params: {
							'compovalue': this.ruleForm.compovalue,
						},
					}).then(res => {
						//搜索成功 
					}).catch(function(error) {
						console.log(error);
					});
				});
			},
			changeBaseIndex(index) {
				this.base_index = index;
			},
			changeThemeIndex(index) {
				this.Theme_index = index;
				
			},
		},
		
	}
</script>

<style lang='scss'>
	 html,body {
		position:relative;
		height:100%;
	}
	html {
		overflow:hidden;
	}
	* {
		padding:0;
		margin:0;
	}
	li {
		list-style:none;
	}
	body {
		background:#fff;
		font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
		font-size:12px;
	}
	.img img {
		width:100%;
		display:block;
	}
	#top {
		position:absolute;
		top:0;
		z-index:5;
		width:100%;
		background:#fff;
	}
	#top .addr {
		height:36px;
		margin:0 auto;
		display:block;
	}
	#top .search {
		position:absolute;
		top:0;
		right:0;
		height:36px;
		display:block;
	}
	#nav {
		border-bottom:1px solid #ebebeb;
	}
	#nav .swiper-slide span {
		margin:0 5px;
		text-align:center;
		display:block;
		line-height:2.5;
		font-size:14px;
		color:#333333;
	}
	#nav .bar {
		width:50px;
		height:3px;
		position:absolute;
		bottom:0px;
	}
	#nav .bar .color {
		width:36px;
		margin:0 auto;
		height:3px;
		background:#ff4891;
	}
	.banner img {
		width:100%;
		display:block;
	}
	.banner	.swiper-pagination {
		left:auto;
		right:7px;
		bottom:7px;
		width:auto;
		padding:2px 7px;
		border-radius:10px;
		color:#fff;
		background:rgba(0,0,0,.3);
	}
	#page {
		margin-bottom:50px;
		height:100%;
	}
	#page .slidepage {
		height:100%;
	}
	.scroll {
		height:100%;
	}
	.slidescroll {
		height:auto;
	}
	#footer {
		position:fixed;
		bottom:0;
		z-index:5;
	}
	
	
	
	.compo-search-bar {
		padding: 0.06rem 0.40rem;
		background-color: #fff;
		height: 1.2rem;
		overflow: hidden;
		box-sizing: border-box;
		box-shadow: 0 -1px 7px 0 rgba(0, 0, 0, 0.07);
		position: relative;

		.logo {

			float: left;

			img {
				width: 1.6rem;
				height: 1.2rem;
				position: relative;
				top: -2px;
			}
		}

		.compo-search {
			position: relative;

			/deep/ .el-input__inner {
				border-radius: 0.4rem;
				height: 0.8rem;
				border: none;
				background-color: rgba(0, 0, 0, 0.05);
			}

			/deep/ .el-form-item {
				margin-bottom: 0;
			}
		}

		.compo-searchicon {
			position: absolute;
			right: 0.3rem;
			font-size: 0.5rem;
			top: 0.25rem;
		}
	}

	.compo-hot-month {
		width: 100%;
		height: auto;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.05);

		.m-title {
			padding: 0 0.40rem;
			font-size: 0.2rem;
			color: #000;
			margin-top: 0.7rem;
			position: relative;
			overflow: hidden;

			.l-tit {
				font-weight: 700;
				float: left;
				font-size: 0.6rem;

			}

			.s-tit {
				font-size: 0.12rem;
				color: #11bf79;
				float: right;
				position: relative;
				top: 0.2rem;
				text-decoration: none;
			}
		}

		.compo-hot-month-list::-webkit-scrollbar {
			display: none
		}

		.compo-hot-month-list {
			margin-top: 0.5rem;
			overflow-x: scroll;
			overflow-y: hidden;
			padding: 0 15px 30px;
			white-space: nowrap;

			.compo-list {
				display: inline-block;
				background-color: #fff;
				border: 1px solid #dedede;
				font-size: 13px;
				color: #000;
				height: 32px;
				line-height: 32px;
				text-align: center;
				border-radius: 4px;
				margin-right: 12px;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				padding: 0 5px;
			}

			.compo-list.active {
				background-color: #11bf79;
				border-color: #11bf79;
				color: #fff;
			}

		}

		.compo-tab .wrap::-webkit-scrollbar {
			display: none
		}

		.compo-tab {
			display: none;
			overflow: hidden;

			.wrap {
				overflow-x: scroll;
				overflow-y: hidden;
				padding-bottom: 30px;
				padding: 0 15px 30px;
				white-space: nowrap;

				.item {
					display: inline-block;
					box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .15);
					margin-right: 9px;
					text-decoration: none;
					color: #fff;
					position: relative;
					border: none;
					width: 165px;
					height: 165px;
					overflow: hidden;

					img {
						width: 100%;
						height: 100%;
					}

					span {
						position: absolute;
						bottom: 15px;
						left: 15px;
						width: 135px;
						text-align: left;
						font-size: 18px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						color: #fff;
					}
				}
			}
		}

		.compo-tab.active {
			display: block;
		}
	}

	.look-all-country {
		width: 100%;
		height: 2rem;
		overflow: hidden;

		background-color: rgba(0, 0, 0, 0.05);

		.look-all-countrys {
			display: block;
			background-color: #fff;
			width: 92%;
			height: 1.6rem;
			font-size: 15px;
			color: #000;
			text-decoration: none;
			text-align: left;
			line-height: 1.6rem;
			position: relative;
			overflow: hidden;
			margin: 0 auto;
			border-radius: 0.04rem;
			box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.05);

			.icon-all {
				display: inline-block;
				width: 0.7rem;

				margin-left: 0.4rem;
				margin-right: 0.3rem;
				height: 0.70rem;
				vertical-align: -0.2rem;
			}

			.icon-arrow {
				display: inline-block;
				height: 0.38rem;
				width: 0.38rem;
				font-size: 18px;
				position: absolute;
				right: 0.6rem;
				top: 0.55rem;

			}
		}
	}

	.compo-visa-free {
		width: 100%;
		height: auto;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.05);

		.m-title {
			padding: 0 0.40rem;
			font-size: 0.2rem;
			color: #000;
			margin-top: 0.7rem;
			position: relative;
			overflow: hidden;

			.l-tit {
				font-weight: 700;
				float: left;
				font-size: 0.6rem;

			}

			.s-tit {
				font-size: 0.12rem;
				color: #11bf79;
				float: right;
				position: relative;
				top: 0.2rem;
				text-decoration: none;
			}
		}

		.wrap {
			overflow-x: scroll;
			overflow-y: hidden;
			margin-top: 25px;
			padding-bottom: 30px;
			white-space: nowrap;
			padding: 0 15px 30px;

			.item {
				width: 165px;
				height: 115px;
				display: inline-block;
				box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .15);
				margin-right: 9px;
				text-decoration: none;
				color: #fff;
				position: relative;
				border: none;
				overflow: hidden;
				border-radius: 0.1rem;

				img {
					width: 100%;
					height: 100%;
				}

				.cn-name {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 18px;
					position: absolute;

					top: 0.95rem;
					display: block;
					width: 100%;
					text-align: center;
					line-height: 20px;
					color: #fff;
				}

				.en-name {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 17px;
					position: absolute;
					top: 1.4rem;
					display: block;
					width: 100%;
					text-align: center;
					line-height: 20px;
					color: #fff;
				}
			}
		}
	}

	.theme-rec-wrap {
		width: 100%;
		height: auto;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.05);

		.m-title {
			padding: 0 0.40rem;
			font-size: 0.2rem;
			color: #000;
			margin-top: 0.5rem;
			position: relative;
			overflow: hidden;

			.l-tit {
				font-weight: 700;
				float: left;
				font-size: 0.6rem;

			}


		}

		.wrap::-webkit-scrollbar {
			display: none
		}

		.wrap {
			overflow-x: scroll;
			overflow-y: hidden;
			padding: 0 15px 30px;
			white-space: nowrap;

			.item {
				margin-top: 0.5rem;
				display: inline-block;
				background-color: #fff;
				border: 1px solid #dedede;
				font-size: 13px;
				width: 80px;
				color: #000;
				height: 32px;
				line-height: 32px;
				text-align: center;
				border-radius: 4px;
				margin-right: 12px;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				padding: 0 5px;
			}

			.item.active {
				background-color: #11bf79;
				border-color: #11bf79;
				color: #fff;
			}

		}

		.themelist {
			display: none;
		}

		.themelist.active {
			display: block;
		}

		.themelist {
			position: relative;
			overflow: hidden;
			padding: 0 0.35rem 0.35rem;
			margin-top: 0.05rem;

			.themeitem {
				display: inline-block;
				float: left;
				width: 2.85rem;
				height: 4rem;
				margin-right: 0.35rem;
				text-align: center;

				img {
					width: 2.85rem;
					height: 2.85rem;
					display: block;
					border-radius: 0.14rem;
					box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
					overflow: hidden;
				}

				span {
					position: relative;
					top: 0.2rem;
					overflow: hidden;
					color: #323232;
					display: block;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}

		.themeitem:nth-child(3n) {
			margin-right: 0;
		}

	}
</style>
