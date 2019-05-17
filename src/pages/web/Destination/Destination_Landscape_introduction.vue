<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div v-for="(item,index) in Landscape" :key="index">
			<div class="Landscape_breadcrumb">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/Destination' }" class="breadcrumblink">目的地</el-breadcrumb-item>
					<el-breadcrumb-item>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<router-link :to="{ name:'Destination_Citylist', params: { countryid: item.countryid}}">{{item.country}}</router-link><i
								 class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.Landscapecity" :key="index">
									<router-link style="color: #666666;" :to="{ name:'Destination_Citydetail', params: { cityid: item.cityid}}">{{item.Landscapecityname}}</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-breadcrumb-item>
					<el-breadcrumb-item>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<router-link :to="{ name:'Destination_Citydetail', params: { cityid: item.cityid}}">{{item.strategycity}}</router-link><i
								 class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.strategycitys" :key="index">
									<router-link style="color: #666666;" :to="{ name:'Destination_list_Strategy', params: { Strategyid: item.Strategyid}}">{{item.strategycityname}}</router-link>
								</el-dropdown-item>

							</el-dropdown-menu>
						</el-dropdown>
					</el-breadcrumb-item>
					<el-breadcrumb-item>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<router-link :to="{ name:'Destination_Citydetail', params: { Landscapeid: item.Landscapeid}}">{{item.strategycity}}观光景点</router-link><i
								 class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item,index) in item.Landscapec" :key="index">
									<router-link style="color: #666666;" :to="{ name:'Destination_Landscape_introduction', params: { Landscapeid: item.Landscapeid}}">{{item.Landscapecname}}</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-breadcrumb-item>
					<el-breadcrumb-item class="Landscape_name">{{item.Landname}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="compo-large-tit">
				<div class="qyWrap">
					<div class="poi-largeTit">
						<h1 class="en"><a href="javascript:void(0)" data-bn-ipg="place-poi-title-poiNameEn">
								{{item.jianxie}}
							</a></h1>
						<h1 class="cn"><a href="javascript:void(0)" data-bn-ipg="place-poi-title-poiNameCn" class="fontYaHei">
								{{item.Landscapezhongwen}}
							</a></h1>
					</div>
					<div class="poi-topside">
						<div class="compo-userbehavior">
							<ul class="place-userbehavior" style="">
								<li class="planto fontYaHei plcZIndex">
									<img class="hovertip" src="../../../assets/images/qiongyou/go_1.png" width="41px" height="38px">
									<span class="fonts">想去</span>
									<div class="poiLikeSmallTip poiLikeHoverShow">
										收藏至“我的想去”，随时查看最新信息
									</div>
								</li>
								<li class="beento fontYaHei">
									<img src="../../../assets/images/qiongyou/go_2.png">
									<span class="fonts">去过</span>
								</li>
								<li class="addToPlan fontYaHei">
									<img src="../../../assets/images/qiongyou/go_3.png" />
									<span class="fonts">加入行程</span></li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 评论加留言 -->
		<div class="Landscpae_main_bg">
			<div class="Landscpae">
				<div class="Landscpae_main">
					<div class="compo-main-left" v-for="(item,index) in Landscpaemain" :key="index">
						<div class="poi-placeinfo">
							<router-link :to="{ name:'Destination_Landscape_photo', params: { photoid: item.photoid}}" class="placeinfoimg">
								<img :src="item.photo">
								<span class="">{{item.photonumber}}张照片</span>
							</router-link>
						</div><!-- poi-placeinfo -->
						<div class="infos">
							<div class="infos_rate">
								<p class="points"><span class="number">{{item.Landscpaefen}}</span><span class="unit">分</span><em class="icon"></em></p>
								<p class="infos-rate">
									<el-rate v-model="item.Landscpaerate" disabled score-template="{value}"></el-rate>
									<router-link to="">{{item.Landscpaedianping}}点评</router-link>
								</p>
								<div style="clear: both;"></div>
								<p class="rank">东京全部景点观光中排<span>第{{item.Landscpaeming}}名</span></p>
								<router-link to='' class="infos_dianping"></router-link>
							</div>
						</div><!-- infos -->
						<br />
						<div class="compo-detail-info">
							{{item.Landscpaetxt}}
							<div class="poi-tipContent">
								<h4>
									小贴士
								</h4>
								<div class="content">
									<p>{{item.Landscpaetip}}</p>
								</div>
							</div>
							<div class="poi-date">
								<router-link to='' class="edit">添加/更新信息</router-link><span>
									信息更新时间：{{item.Landscpaetime}}　
									<router-link>{{item.Landscpaeenjoy}}</router-link>
									等{{item.Landscpaebianji}}位穷游er参与了编辑
								</span>
							</div>
						</div>
						<div class="compo-recommand-hot-poi">
							<h3 class="poi-h3">去过这里的穷游er还喜欢去</h3>
							<ul class="hot-poiul">
								<li class="hot-poili" v-for="(item,index) in item.Landscpaexiangce" :key='index'>
									<router-link :to="{ name:'Destination_Landscape_introduction', params: { Landscapeid: item.Landscapeid}}">
										<img :src="item.Landscpaeimg" style="width: 150px;height: 100px;">
										<p class="hot-poiname">{{item.Landscpaename}}</p>
										<p class="level">
											<el-rate v-model="item.Landscpaexiangcerate" disabled disabled show-score text-color="#3f9f5f"
											 score-template="{value}"></el-rate>
										</p>
									</router-link>
								</li>
							</ul>
						</div>

					</div><!-- compo-main-left -->

					<div class="compo">
						<div class="compo-tab">
							<a id="remenidc" :class="{ on: ison}" @click="_huxingtab()">点评</a>
							<a id="remenidc" :class="{ on: !ison}" @click="_huxingtab()">问答</a>
						</div>
						<div class="compo-tab-comment-content">
							<div class="options compo-tab-comment-option" v-show="ison">
								<div class="sort"><a id="remenidx" v-for="(value,key) in search_chose" :key="key" :class="key === base_indexx?'active':''"
									 v-on:click="changeBaseIndexx(key)">{{value.search_chosename}}({{value.search_chosenumber}})</a><span>|</span><span>我关注的人</span></div>
								<br />
								<div class="compo-commentlist">
									<ul class="comment-list">
										<li class="clearfix" v-for="(item,index) in commentlist" :key="index">
											<router-link to='' class="largeavatar"><img :src="item.avterimg">
												<span>{{item.commentlistname}}</span></router-link>
											<div class="comment clearfix">
												<h5 class="title"><span class="poi-stars">
														<el-rate v-model="item.commentlistrate" disabled disabled show-score text-color="#3f9f5f" score-template="{value}"></el-rate>
													</span>
													<router-link to='' class="date">
														{{item.commentlisttime}}
													</router-link>
												</h5>
												<br />
												<p class="content">{{item.commentlisttxt}}</p>
												<div class="album" v-if="item.type===1">
													<router-link to="" v-for='(item,index) in item.commentlisttype' :key="index">
														<img :src="item.commentlistimg" class="js-photo-thumb">
													</router-link>


												</div>

												<div class="praise">
													<p class="hand">
														<router-link to=''>举报</router-link><span class="number seedisable">{{item.commentlisthuifu}}条回复</span>
													</p><span class="useful">
														有用{{item.commentlistyouyong}}
													</span>
												</div>
												<!---->
											</div>
										</li>
									</ul>
								</div><!-- //compo-commentlist -->
							</div>
						</div>
						<div v-show="!ison">
							<div class="comwenda">
								<dl v-for="(item,index) in comwenda" :key="index">
									<dt>
										<router-link to="" class="Q-title">
										{{item.comwendatitle}}
										</router-link>
									</dt>
									<dd>
										<div class="see">
											<router-link to="" class="getA yes">
												{{item.comwendahuida}}个回答
											</router-link>
										</div>
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div><!-- Landscpae_main -->

				<div class="compo-rightfix">
					<h2 class="titlefix">
						<router-link to="" class="seeall">更多<i class="el-icon-arrow-right
			"></i></router-link>周边酒店<em id="plcHotelTar"><i
							 class="font1">穷游优选</i><i class="font2 fontYaHei">酒店免费退</i></em>
					</h2>
					<ul class="zlist">
						<li v-for="(item,index) in zlist" :key="index">
							<router-link to="" class="item">
								<div class="img"><img :src="item.zlistimg"></div>
								<p class="theme">{{item.zlistname}}</p>
								<p class="price"><b>
										{{item.zlistprice}}元
									</b></p>
								<p class="position">
									距离{{item.zlistposition}}km
								</p>
							</router-link>
						</li>
					</ul>
				</div>

			</div>
		</div>

	</el-col>
</template>
<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'destination',
		data() {

			return {
				value: '5.3',
				values: '5',
				desbase: ['点评', '问答'],
				search_chose: [],
				ison: true,
				Landscape: [],
				Landscpaemain: [],
				commentlist: [],
				comwenda:[],
				zlist:[],
				base_indexc: 0,
				base_indexx: 0,

			}
		},
		created() {
			this.buildsearch_chose();
			this.buildLandscape();
			this.buildLandscpaemain();
			this.buildcommentlist();
			this.buildcomwenda();
			this.buildzlist();
		},
		methods: {
			buildsearch_chose() {
				this.axios.get('/api/buildsearch_chose').then(res => {
					this.search_chose = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildLandscape() {
				this.axios.get('/api/buildLandscape').then(res => {
					this.Landscape = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildLandscpaemain() {
				this.axios.get('/api/buildLandscpaemain').then(res => {
					this.Landscpaemain = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcommentlist() {
				this.axios.get('/api/buildcommentlist'
					// , {
					// 	params: this.search_params,
					// }
				).then(res => {
					this.commentlist = res.data.data
				}).catch(function(error) {
					console.log(error)
				})
			},
			buildcomwenda(){
				this.axios.get('/api/buildcomwenda').then(res=>{
					this.comwenda=res.data.data
				}).catch(function(error){
					console.log(error)
				})
			},
			buildzlist(){
				this.axios.get('/api/buildzlist').then(res=>{
					this.zlist=res.data.data
				}).catch(function(error){
					console.log(error)
				})
			},
			_huxingtab() {
				this.ison == true ? this.ison = false : this.ison = true;
			},
			changeBaseIndexx(index) {
				this.base_indexx = index
				this.search_params['type'] = this.search_chose[index];
				this.buildcommentlist();
			},
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Landscpae_main_bg {
		background: #f5f5f5;
		width: 100%;
		height: auto;

		.Landscpae {
			width: 980px;
			margin: 0 auto;
			padding: 30px 0 60px;
		}

		.Landscpae_main {

			width: 678px;
			display: inline-block;


			.compo-main-left {
				background-color: #fff;
				border: 1px solid #ececec;
				width: 678px;
				display: inline-block;

				.poi-placeinfo {
					margin: 20px;

					.placeinfoimg {
						width: 300px;
						height: 200px;
						overflow: hidden;
						position: relative;
						float: left;

						span {

							position: absolute;
							left: 10px;
							bottom: 10px;
							padding: 0 10px;
							height: 28px;
							line-height: 28px;
							color: #fff;
							background-color: rgba(0, 0, 0, .5);
							font-size: 14px;
							text-align: center;
							border-radius: 3px
						}
					}

				}

				//poi-placeinfo
				.infos {
					width: 318px;
					height: 200px;
					position: relative;
					overflow: hidden;
					margin-left: 15px;
					display: inline-block;

					.infos_rate {
						width: 100%;
						height: 140px;

						.points {
							height: 21px;
							padding: 10px 0 17px;
							overflow: hidden;
							color: #3f9f5f;
							line-height: 21px;

							.number {
								float: left;
								font-size: 28px;
								font-weight: 700;
							}

							.unit {
								float: left;
								font-size: 14px;
								margin: 3px 0 0 5px;
							}

							.icon {
								float: left;
								width: 15px;
								height: 13px;
								background: url(//common2.qyerstatic.com/place/project/images/poi/icons-unit.png) no-repeat 0 0;
								margin: 7px 0 0 10px;
								cursor: pointer;
							}
						}

						//points
					}

					//.infos_rate

				}
			}


		}

	}

	.infos-rate .el-rate {
		width: 140px;
		float: left;

	}

	.poi-stars .el-rate {
		width: 140px;
		float: left;

	}

	.poi-stars .el-icon-star-on {
		font-size: 16px;
		color: #3f9f5f !important;
	}

	.poi-stars .el-rate__text {
		margin-top: 5px;
		font-size: 15px !important;
	}

	.infos-rate .el-icon-star-on {
		font-size: 16px;
		color: #3f9f5f !important;
	}

	.infos-rate .el-rate__text {
		font-size: 16px !important;
	}

	.infos-rate a {
		float: left;
		color: #0073b6;
		font-size: 14px;
	}

	.infos .infos_rate .rank {
		line-height: 25px;
		color: #636363;
		font-size: 14px;
		background: url(//common2.qyerstatic.com/place/project/images/poi/icons-unit.png) no-repeat 2px -154px;
		padding-left: 22px;
		margin-top: 22px;

		span {
			color: #f26622;
			font-size: 14px;
			padding-left: 10px;
		}
	}

	.infos .infos_dianping {
		width: 93px;
		float: left;
		height: 28px;
		background: url(//common2.qyerstatic.com/place/project/images/poi/btn-edit.png) no-repeat 0 0;
		border: none;
		cursor: pointer;
		margin-top: 31px;
	}

	.compo-detail-info {
		line-height: 24px;
		color: #323232;
		font-size: 14px;
		margin: 20px 20px 20px;

		.poi-tipContent {
			border: 1px solid #f1d22b;
			margin: 20px 0px 0;
			padding: 17px 20px 5px;
			background-color: #fffbc6;
			font-size: 14px;

			h4 {
				font-weight: 700;
				color: #323232;
				margin-bottom: 11px;
			}

			.content {
				line-height: 24px;
			}
		}
	}

	.poi-date {
		margin: 0px;
		color: #959595;
		font-size: 12px;
		border-bottom: 1px solid #f5f5f5;
		padding: 20px 0;

		a {
			color: #959595;
			font-size: 12px;
		}
	}

	.poi-date>a {
		float: right;
		background: url(//common2.qyerstatic.com/place/project/images/poi/icon-edit.png) no-repeat 0;
		padding-left: 20px;

		a {
			color: #0073b6;
		}
	}

	.poi-date>span {
		display: block;
		margin-right: 120px;
	}

	.compo-recommand-hot-poi {
		h3 {
			height: 59px;
			line-height: 59px;
			color: #333333;
			font-weight: 500;
			font-size: 18px;
			margin: 0 20px;
		}

		li {
			width: 150px;
			float: left;
			margin-right: 12px;
			list-style: none;
			position: relative;

			.hot-poiname {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				vertical-align: middle;
				line-height: 36px;
				font-size: 14px;
				text-align: center;
				color: #323232;
				text-decoration: none;
			}
		}
	}

	.hot-poiul {
		margin: 0 20px 20px;
		overflow: hidden;
	}

	.hot-poili .el-icon-star-on {
		font-size: 16px;
		color: #3f9f5f !important;
	}

	.hot-poili .level {
		height: 12px;
		line-height: 12px;
		color: #3f9f5f;
		margin: 0 10px;
		margin-bottom: 10px;
	}

	.hot-poiul li:last-child {
		margin: 0;
	}

	.compo {
		margin-top: 20px;
		background-color: #fff;
		border: 1px solid #ececec;
		width: 678px;
		display: inline-block;

	}

	.compo-tab {
		margin: 20px 20px 0;
		height: 40px;
		border-bottom: 1px solid #ececec;
		overflow: hidden;
	}

	#remenidc {
		display: block;
		height: 39px;
		border-bottom: 2px solid transparent;
		width: 50%;
		float: left;
		cursor: pointer;
		color: #323232;
		text-align: center;
		font-size: 18px
	}

	#remenidc.on {
		border-bottom: 2px solid #73af88;
		color: #147850;
	}

	#remenidx {
		float: left;
		height: 24px;
		line-height: 24px;
		color: #636363;
		padding: 0 6px;
		cursor: pointer;
	}

	#remenidx.active {
		border-radius: 3px;
		background-color: #65b17f;
		color: #fff;
	}

	.compo .compo-tab-comment-option {
		padding: 15px 20px;
		border-bottom: 1px solid #f5f5f5;

		.sort {
			width: 600px;
			float: left;
			height: 24px;

			span {
				float: left;
				height: 24px;
				line-height: 24px;
				color: #636363;
				padding: 0 6px;
				cursor: pointer;
			}
		}

		.selector {
			float: right;
			height: 24px;
		}

		.compo-commentlist {
			position: relative;
			padding: 30px 0 0;

			.comment-list {
				padding: 0 20px;
				list-style: none;

				.largeavatar {
					word-break: break-word;
					float: left;
					width: 60px;

					img {
						width: 60px;
						height: 60px;
						border-radius: 50%;
					}

					span {
						display: block;
						line-height: 15px;
						padding-top: 5px;
						text-align: center;
						color: #959595;
						word-break: break-all;
					}
				}

				.date {
					float: left;
					color: #959595;
					margin-top: 1px;
				}

				.content {
					margin: 13px 0 7px;
					word-break: break-all;
					line-height: 20px;
					font-size: 14px;
				}

				.praise {
					margin: 10px 0;
					overflow: hidden;
				}

				.hand {
					float: right;
					margin-top: 6px;

					.seedisable {
						color: #959595;
						background-position: left -36px;
					}

					.number {
						background: url(//common2.qyerstatic.com/place/project/images/poi/icons-comment.png) no-repeat left 2px;
						cursor: pointer;
						padding-left: 20px;
					}
				}

				.useful {
					float: left;
					padding: 0 13px 0 26px;
					height: 24px;
					line-height: 24px;
					background-color: #e0f1df;
					color: #147850;
					border-radius: 3px;
					background-image: url(//common2.qyerstatic.com/place/project/images/poi/icons-praise.png);
					background-repeat: no-repeat;
					background-position: 7px 6px;
					cursor: pointer;
				}

				.comment {
					margin-left: 80px;
					border-bottom: 1px solid #f5f5f5;
					padding-bottom: 20px;
				}
			}
		}

		.album {
			overflow: hidden;

			a {
				float: left;
				width: 80px;
				height: 80px;
				margin: 0 10px 10px 0;
				cursor: pointer;

				img {
					width: 80px;
					height: 80px;
				}
			}
		}
	}

	.compo-tab-comment-option .compo-commentlist .comment-list>li {
		padding: 0 0 30px;
	}

	//面包屑
	.Landscape_breadcrumb {
		width: 980px;
		margin: 0 auto;
		padding: 25px;
	}

	.Landscape_breadcrumb .el-dropdown-link {
		a {
			color: #0073b6;
			font-weight: 500;
		}

	}

	.Landscape_breadcrumb {
		/deep/ .el-breadcrumb__inner {
			color: #0073b6;
			font-weight: 500;
		}
	}

	// .Landscape_breadcrumb {
	// 	/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
	// 		color: #0073b6;
	// 		font-weight: 500;
	// 	}
	// }
	.compo-large-tit {
		background-color: #fff;
		border: 1px solid #fff;
		border-bottom: 1px solid #e5e5e5;
		clear: both;

		.qyWrap {
			height: 120px;
			position: relative;
			width: 980px;
			margin: 0 auto;

			.poi-largeTit h1 {
				font-size: 36px;
				line-height: 48px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin-right: 270px;
				font-weight: 400;

				a {
					font-size: 36px;
					color: #147850;
				}

			}

			.poi-topside {
				position: absolute;
				right: 0;
				top: 0;
				width: 310px;
				height: 70px;

				.place-userbehavior {
					height: 84px;
					display: table;
					width: 100%;
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					list-style: none;

					li {
						width: 100px;
						text-align: center;
						height: 70px;
						display: inline-block;
						list-style: none;

						span {
							margin-top: 8px;
							display: block;
							font-size: 16px;
							color: #222222;
						}
					}
				}
			}

		}
	}

	.place-userbehavior .poiLikeSmallTip {
		width: 234px;
		height: 32px;
		display: none;
		background: url(//common2.qyerstatic.com/place/project/images/poi/poiLikeSmallTip.png) no-repeat 0 0;
		background-size: 234px 32px;
		position: absolute;
		left: 16%;
		font-size: 13px;
		cursor: pointer;
		top: 53px;
		margin-left: -117px;
		line-height: 36px;
		color: #959595 !important;
	}

	.place-userbehavior li:hover .poiLikeSmallTip {
		display: block;

	}
	.compo-rightfix {
			width: 270px;
			float: right;
	
	
	
			.titlefix {
				padding: 5px 0 20px;
				color: #636363;
				font-size: 18px;
				height: 17px;
				line-height: 17px;
				overflow: hidden;
				font-weight: 500;
	
				.seeall {
					float: right;
					font-size: 12px;
					color: #959595;
					margin-top: 3px;
				}
	
				#plcHotelTar {
					position: relative;
					display: inline-block;
					width: 140px;
					top: -1px;
				}
	
				#plcHotelTar .font1 {
					height: 16px;
					background-color: #3f9f5f;
					color: #fff;
					line-height: 16px;
				}
	
				#plcHotelTar .font1 {
					width: 64px;
					position: relative;
					text-align: center;
				}
	
				#plcHotelTar .font1,
				#plcHotelTar .font2 {
					font-size: 12px;
					display: inline-block;
					font-style: normal;
				}
	
				#plcHotelTar .font1:before {
					position: absolute;
					height: 0;
					width: 0;
					border: 8px solid transparent;
					border-left: 6px solid #f5f5f5;
					left: 0;
					top: 0;
					content: "";
				}
	
				#plcHotelTar .font1:after {
					position: absolute;
					height: 0;
					width: 0;
					border: 8px solid transparent;
					border-right: 6px solid #f5f5f5;
					right: 0;
					top: 0;
					content: "";
				}
			}
	
			.zlist li {
				overflow: hidden;
				margin-bottom: 20px;
	
				.item {
					display: block;
					height: 68px;
					overflow: hidden;
					position: relative;
				}
			}
		}
	
		.compo-rightfix .item .img,
		.compo-rightfix .item>img {
			float: left;
			margin-right: 20px;
			width: 68px;
			height: 68px;
		}
	
		b {
			color: #0073b6;
		}
	
		.compo-rightfix .item .img img {
			vertical-align: middle;
			width: 68px;
			height: 68px;
		}
	
		.compo-rightfix .item .theme {
			line-height: 23px;
			color: #323232;
			font-size: 14px;
			height: 23px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	
		.compo-rightfix .position {
			color: #959595;
			font-size: 12px;
		}
		.comwenda dl {
	    border-bottom: 1px solid #f5f5f5;
	    padding: 0 0 30px;
	    margin: 0 20px;
	    animation: mySecond 1s;
	    -moz-animation: mySecond 1s;
	    -webkit-animation: mySecond 1s;
	    -o-animation: mySecond 1s;
		 dt {
	    padding: 28px 0 18px;
	}
	}
	.comwenda .Q-title:hover {
	    color: #0073b6;
	}
	.comwenda .Q-title {
	    color: #323232;
	    font-size: 16px;
	    font-family: Hiragino Sans GB,Microsoft YaHei,9 ED1 4 F53,5 b8b 4 f53,sans-serif;
	}
	.comwenda .see {
	    color: #959595;
	}
	.comwenda .see a {
	    color: #959595;
	  
	    background-image: url(//common2.qyerstatic.com/place/project/images/poi/icons-handler.png);
	    background-repeat: no-repeat;
	}
	.comwenda .getA {
	    margin-left: 10px;
	    background-position: -344px -216px;
	    padding-left: 15px;
	}
</style>
