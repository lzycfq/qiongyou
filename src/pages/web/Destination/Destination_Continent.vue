<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Continent_bramd" v-for="(item,index) in Continentbramd" :key="index">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/Destination' }" class="breadcrumblink">
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							<router-link :to="{ name:'Destination', params: { Continentid: item.Continentid}}">目的地</router-link><i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.country" :key="index">
								<router-link style="color: #666666;" :to="{ name:'Destination_Citydetail', params: { countryid: item.countryid}}">{{item.country}}</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/Destination' }">
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							{{item.Continent}}<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item v-for="(item,index) in item.Landscapecity" :key="index">
								<router-link style="color: #666666;" :to="{ name:'Destination_Citydetail', params: { countryid: item.countryid}}">{{item.Landscapecityname}}</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- 标题 -->
		<div class="pla_topbar clearfix" v-for="(item,index) in platopbar" :key="index">
			<div class="pla_topbar_names">
				<p class="pl_topbox_en" id="pl_topbox_en">
					<router-link to="/">{{item.english}}</router-link>
				</p>
				<div class="clearfix">
					<p class="pl_topbox_cn fontYaHei">
						<router-link to="/">{{item.chinses}}</router-link>
					</p>
				</div>
			</div>
			<!-- 	right -->
			<div class="pla_topbar_tools">
				<ul class="pl_topbox_btn">
					<li class="pl_topbox_want" id="pl_topbox_want">
						<p class="num"><span><strong id="doings_planto_counts">{{item.gonumber}}</strong>人想去</span><em></em></p>
						<router-link to="/" class="click" id="doings_planto_button">想去</router-link>
					</li>
					<li class="pl_topbox_been" id="pl_topbox_been">
						<p class="num"><span><strong id="doings_beento_counts">{{item.wentnumber}}</strong>人去过</span><em></em></p>
						<router-link to="/" class="click" id="doings_beento_button">去过</router-link>
					</li>
					<li class="pl_topbox_lived" id="pl_topbox_lived">
						<p class="num"><span><strong id="doings_lived_counts">{{item.livednumber}}</strong>人生活过</span><em></em></p>
						<router-link to="/" class="click" id="doings_lived_button">生活过</router-link>
					</li>
				</ul>
				<p class="pl_topbox_numbeen fontYaHei"><em id="doings_beento_counts_big">{{item.goed}}</em>人去过这里</p>
			</div>
		</div>
		<!-- navbar -->
		<div style="clear: both;"></div>
		<div class="pla_menubar_hold">
			<div class="pla_menubar">
				<div class="pla_menubar_wrap clearfix">
					<div class="pla_topnavs">
						<ul class="nav fontYaHei">
							<li>
								<router-link to="/">行程计划</router-link>
							</li>
							<li>
								<router-link to="/">热门游记</router-link>
							</li>
						</ul>
					</div>
					<div class="pla_topbtns">
						<router-link to="/" class="ui_button ask" data-bn-ipg="place-continents-ask">提问</router-link to="/">
					</div>
				</div>
			</div>
		</div>
		<!-- 亚洲以及全部亚洲所有国家 tab切换 -->
		<div class="pla_bigtits pla_citylisttit">
			<h2 class="pla_bigtit" :class="{ on: ison}" @click="_huxingtab()" id="hotcitytab"> 亚洲热门国家</h2>
			<p class="pla_biggap"></p>
			<h2 class="pla_bigtit" :class="{ on: !ison}" @click="_huxingtab()" id="hotcitytab">全部国家</h2>
		</div>
		<div class="pla_citypiclist">
			<div class="pla_citypiclistul" v-show="ison">
				<ul>
					<li v-for="(item,index) in contryul" :key='index'>
						<router-link :to="{ name:'Destination_Countrydetail', params: { Countryid: item.Countryid}}" class="pla_citypiclistimg">
							<img :src="item.countryimg" width="300" height="200" alt="item.countryname" data-bn-ipg="place-continents-hotcity-pic">
							<h3 class="title">{{item.countryname}}</h3>
						</router-link>
						<div class="infos">

							<p class="sights"><span>热门城市：</span>
								<router-link class="sightsa" :to="{ name:'Destination_Citydetail', params: { Cityid: item.Cityid}}" v-for="(item,index) in item.contrycity"
								 :key='index'>{{item.contrycityname}}、</router-link>
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="pla_citypiclistul" v-show="!ison">
				<router-link class="pla_citypiclistul_a" v-for="(item,index) in countrylist" :key="index" :to="{ name:'Destination_Countrydetail', params: { Countryid: item.Countryid}}">{{item.coutryname}}
					<em>{{item.countryenglish}}</em> <span v-if="item.type===1"></span></router-link>
			</div>
		</div>

		<div style="clear: both;"></div>
		<!-- 	游记 -->
		<div class="Continent_youji">
			<div class="Continent_youji_title">
				<h2 class="Continent_youji_titleh2">亚洲游记攻略</h2>
				<router-link to="">更多</router-link>
				<span id="searchtype" v-for="(value,index) in search_type" v-bind:disabled="item.disabledid" :key="index" :class="type_index===index?'active':''"
				 @click="typeIndex(index)">{{value}}</span>
			</div>
			<router-link to="" class="Continent_youji_list"  v-for="(item,index) in youjilist" :key="index">
				<div class="youji_pic">
					<router-link :to="{ name:'Thread_Detail', params: { ThreadDetailid: item.ThreadDetailid}}">
						<img :src="item.thraedimg" width="227" height="151" alt="item.threadtitle" title="item.threadtitle"></router-link>
				</div>
				<div class="youji_cnt">
					<div class="youji_top">
						<p class="face">
							<router-link :to="{ name:'Thread_Detail', params: { ThreadDetailid: item.ThreadDetailid}}"><img :src="item.threadavter" alt="item.threadtitle" height="48" width="48">
							</router-link>
						</p>
						<h3 class="youji_title">
							<router-link :to="{ name:'Thread_Detail', params: { ThreadDetailid: item.ThreadDetailid}}" alt="item.threadtitle" title="item.threadtitle">{{item.threadtitle}}</router-link>
						</h3>
						<div>
							<p class="fr"><span class="time">{{item.threadtime}}</span><span class="bbsview" title="浏览">{{item.threadliulan}}</span><span class="bbslike"
								 title="喜欢">{{item.threadlike}}</span></p>
							<span>作者：<router-link to="">{{item.threadzuozhe}}</router-link></span>
						</div>
					</div>
					<div class="bbstext1">{{item.threadtxt}}</div>
				</div>
			</router-link>
		</div>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'destination',
		data() {

			return {
				Continentbramd: [],
				platopbar: [],
				contryul: [],
				countrylist: [],
				youjilist:[],
				search_type: ["精华", "最新", "热门"],
				ison: true,
				type_index: 2,
			}
		},
		created() {
			this.buildContinentbramd();
			this.buildplatopbar();
			this.buildcontryul();
			this.buildcountrylist();
			this.buildyoujilist();
		},
		methods: {
			buildContinentbramd() {
				this.axios.get('/api/buildContinentbramd'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.Continentbramd = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildplatopbar() {
				this.axios.get('/api/buildplatopbar'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.platopbar = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcontryul() {
				this.axios.get('/api/buildcontryul'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.contryul = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcountrylist() {
				this.axios.get('/api/buildcountrylist'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.countrylist = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildyoujilist() {
				this.axios.get('/api/buildyoujilists'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.youjilist = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			_huxingtab() {
				this.ison == true ? this.ison = false : this.ison = true;
			},
			typeIndex(index) {
				this.type_index = index
				this.search_params['type'] = this.search_type[index]
				this.buildyoujilist();
			}

		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Continent_youji {


		width: 980px;
		margin: 50px auto;

		.Continent_youji_title {
			position: relative;
			height: 26px;
			margin-bottom: 20px;
			padding-left: 33px;
			background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_bigtit.png) no-repeat left -79px;

			.Continent_youji_titleh2 {
				float: left;
				font-size: 24px;
				line-height: 26px;
				font-weight: 500;
				color: #323232;
			}

			a {
				padding-left: 16px;
				background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_more.png) no-repeat 0;
				color: #0073b6;
				vertical-align: middle;
				position: relative;
				top: 8px;
				margin-left: 15px;
			}

			#searchtype {
				color: #0073b6;
				float: right;
				padding: 2px 5px;
				font-weight: 500;
			}

			#searchtype.active {
				color: #fff;
				border-radius: 2px;
				background: #65b17f;
				color: #fff;
				cursor: default;
				padding-bottom: 3px;
				background-image: url(//common2.qyerstatic.com/place/project/images/old/place5/tab_curarrow2.png) no-repeat bottom;
			}
		}

		.Continent_youji_list {
			width:690px;
			display: inline-block;
			padding-bottom: 30px;
			margin-bottom: 30px;
			border-bottom: 1px solid #ececec;

			.youji_pic {
				float: left;
				width: 227px;
			}

			//youji_pic
			.youji_cnt {
				float: right;
				width: 433px;

				.youji_top {
					height: 48px;
					padding-left: 58px;
					color: #636363;

					.face {
						float: left;
						margin-left: -58px;

						img {
							display: block;
							border-radius: 50px;
						}
					}

					.youji_title {
						padding: 5px 0 7px;
						font-size: 14px;
						font-weight: 700;
						line-height: 16px;
						color: #0073b6;

						a:first-child {
							max-width: 300px;
							overflow: hidden;
							display: inline-block;
							text-overflow: ellipsis;
							white-space: nowrap;
							color: #0073b6;
						}

				
				
				}
				.fr {
						float: right;
				           margin-top: 4px;
						.bbsview {
						
							padding-left: 21px;
							background-position: 0 2px;
							margin-left: 20px;
							background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_bbsinfo.png) no-repeat left 3px;
						}
				
						.bbslike {
							padding-left: 19px;
							margin-left: 20px;
							background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_bbsinfo.png) no-repeat left 7px;
				
							background-position: 0 -58px;
						}
				     
					}
				
					span {
						float: left;
				
						a {
							color: #0073b6;
						}
					}
				
				}
				.bbstext1{
					    width: 100%;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
	    height: 72px;
    margin-top: 8px;
	color: #323232;
				}
			}

			//.youji_cnt



		}

		//Continent_youji_title
	}

	.Continent_bramd {
		width: 980px;
		margin: 0 auto;
		padding: 25px 0;
	}

	.pla_topbar {
		width: 980px;
		margin: 0 auto;

		.pla_topbar_names {
			float: left;
			padding-bottom: 20px;

			.pl_topbox_en {
				padding: 4px 0 12px;
				font-size: 36px;
				line-height: 38px;
				color: #147850;
				word-break: break-all;

				a {
					font-size: 36px;
					color: #147850;
					text-decoration: none;
					text-decoration-line: none;
					text-decoration-style: initial;
					text-decoration-color: initial;
				}
			}

			.pl_topbox_cn {
				float: left;
				font-size: 30px;
				line-height: 32px;
				color: #147850;

				a {
					font-size: 30px;
					color: #147850;
					text-decoration: none;
					text-decoration-line: none;
					text-decoration-style: initial;
					text-decoration-color: initial;
				}
			}
		}

		.pla_topbar_tools {
			float: right;
			padding-bottom: 20px;

			.pl_topbox_btn {
				float: right;
				clear: both;
				padding-top: 9px;
				height: 26px;
				list-style: none;


			}
		}
	}

	.pl_topbox_btn li:first-child {
		margin-left: 0;
	}

	.pl_topbox_btn .num {
		display: none;
		position: absolute;
		top: -29px;
		left: -2px;
		min-width: 100px;
		color: #959595;
	}

	.pl_topbox_want li {
		position: relative;
		float: left;
		height: 26px;
		margin-left: 30px;
	}

	.pl_topbox_btn .click {
		display: block;
		height: 26px;
		font-size: 14px;
		line-height: 26px;
		padding-left: 31px;
		background: url(//common2.qyerstatic.com/place/project/images/old/place5/want_been_lived.png) no-repeat 0 0;
		color: #636363;
	}

	.pl_topbox_want .click {
		background-position: 0 0;
	}

	.pl_topbox_been .click {
		background-position: 0 -60px;
	}

	.pl_topbox_lived .click {
		background-position: 0 -120px;
	}

	.pl_topbox_btn li {
		position: relative;
		float: left;
		height: 26px;
		margin-left: 30px;
	}

	.pl_topbox_numbeen {
		float: right;
		clear: both;
		padding-top: 19px;
		text-align: right;
		color: #0073b6;
		font-size: 30px;
		line-height: 32px;

		em {
			color: #0073b6;
			font-size: 30px;
		}
	}

	.pla_topbar_tools .pl_topbox_want:hover .num {
		display: block;
	}

	.pla_topbar_tools .pl_topbox_been:hover .num {
		display: block;
	}

	.pla_topbar_tools .pl_topbox_lived:hover .num {
		display: block;
	}

	.pl_topbox_btn .num span {
		float: left;
		height: 22px;
		font-size: 13px;
		padding: 0 5px;
		line-height: 22px;
		border: 1px solid #d7d7d7;
		background-color: #ffffd0;
	}

	.pl_topbox_btn .num em {
		position: absolute;
		z-index: 2;
		left: 10px;
		bottom: -4px;
		width: 9px;
		height: 5px;
		font-weight: 500;
		overflow: hidden;
		background: url(//common2.qyerstatic.com/place/project/images/old/place/four/topbtn_numarrow.png) no-repeat;
	}

	.pla_menubar_hold {
		width: 100%;
		height: 41px;
		margin-bottom: 30px;

		.pla_menubar {
			width: 100%;
			height: 40px;
			border-bottom: 1px solid #d7d7d7;
			background: #fff;
			box-shadow: 0 2px 2px rgba(0, 0, 0, .05);

			.pla_menubar_wrap {
				width: 980px;
				margin: 0 auto;

				.pla_topnavs {
					position: relative;
					z-index: 9;
					float: left;
					list-style: none;

					.nav:first-child {
						float: left;
						padding: 0 10px;
						padding-left: 0;
						background: none;

						list-style: none;

						a {
							display: block;
							font-size: 18px;
							color: #323232;
							text-align: left;
						}
					}

					.nav li {
						float: left;
						font-size: 18px;
						list-style: none;
						line-height: 30px;

						a {
							display: block;
							font-size: 18px;
							line-height: 40px;
							color: #323232;
							text-align: left;

						}
					}

					.nav li+li {
						margin-left: 15px;
					}

					.nav li:hover a {
						color: #147850;
						background: url(//common2.qyerstatic.com/place/project/images/old/place5/topnav_btm.png) repeat-x 0 100%;
					}

				}

				//pla_menubar_wrap
				.pla_topbtns {
					float: right;
					padding-top: 6px;

				}

				.pla_topbtns a.ask {
					background-position: 8px 7px;
				}

				.pla_topbtns a {
					float: left;
					padding: 4px 8px 5px 28px;
					background-image: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_topbtn.png);
					background-repeat: no-repeat;
				}

				.ui_button {
					background-color: #3f9f5f;
				}

			}

		}

		//pla_menubar

	}

	.pla_bigtits {
		margin: 0 auto;
		width: 960px;
	}

	.pla_citylisttit {
		padding: 3px 0 10px 20px;

		position: relative;
		background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_bigtit.png) no-repeat left 1px;
	}

	.pla_bigtits {
		position: relative;
		height: 26px;
		margin-bottom: 20px;
	}

	.pla_bigtit {
		float: left;
		font-size: 24px;
		line-height: 26px;
		color: #0073b6;
		font-weight: 500;
		margin-left: 25px;
		margin-right: 15px;
	}

	.pla_bigtit.on {
		font-weight: 500;
		color: #323232 !important;
		font-size: 24px;
	}

	.pla_biggap {
		float: left;
		width: 15px;
		height: 24px;
		margin: 1px 15px 1px 0;
		border-right: 1px solid #d7d7d7;
	}

	.pla_citypiclistul .pla_citypiclistul_a {
		display: inline-block;
		width: 310px;
		color: #323232;

		span {

			padding-right: 33px;
			background: url(//common2.qyerstatic.com/place/project/images/old/place5/icon_hot.png) no-repeat 100%;
		}

		em {
			color: #959595;
		}
	}

	.pla_citypiclist {
		width: 980px;
		margin: 0 auto;

		ul {
			zoom: 1;
			list-style: none;
			margin: -20px 0 0 -22px;

			li {
				float: left;
				width: 300px;
				margin: 20px 0 0 22px;
				padding: 5px;
				border: 1px solid #e5e5e5;
				position: relative;
				box-shadow: 0 0 2px rgba(0, 0, 0, .1);

				.pla_citypiclistimg {
					display: block;
					position: relative;
					width: 300px;
					height: 200px;
					overflow: hidden;

					.title {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 280px;
						height: 50px;
						padding: 50px 10px 0;
						background: url(//common2.qyerstatic.com/place/project/images/old/place5/pic_titbg.png) repeat-x;
						font-size: 30px;
						line-height: 50px;
						color: #fff;
						font-weight: 500;
					}
				}

				.infos {
					height: 57px;
					overflow: hidden;
					margin: 7px 5px 2px;
					color: #636363;

					.sights {
						padding-left: 5em;
						max-height: 55px;
						overflow: hidden;

						span {
							float: left;
							margin-left: -5em;
						}

						.sightsa {
							color: #0073b6;
						}
					}
				}
			}
		}

		//ul
	}
</style>
