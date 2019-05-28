<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="city-detail">
			<div class="plc-container">
				<!-- 	箭头面包屑 -->
				<div class="header-crumb" v-for="(item,index) in mianbaoxie" :key="index">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item>
							<el-dropdown placement="bottom-end">
								<span class="el-dropdown-link">
									目的地
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item v-for="(item,index) in item.mianbaoplace" :key="index">
										<router-link style="color:#555555" :to="{ path:'/Destination_Detail_place', params: { id: item.id}}">{{item.place}}</router-link>
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-breadcrumb-item>
						<el-breadcrumb-item>
							<el-dropdown placement="bottom-end">
								<span class="el-dropdown-link">
									{{item.mudicon}}
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item v-for="(item,index) in item.mianbaocity" :key="index">
										<router-link style="color:#555555" :to="{ path:'/Destination_Detail_place', params: { id: item.id}}">{{item.city}}</router-link>
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-breadcrumb-item>
						<el-breadcrumb-item>
							<el-dropdown placement="bottom-end">
								<span class="el-dropdown-link">
									{{item.mudicity}}

								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item v-for="(item,index) in item.mianbaogonglv" :key="index">
										<router-link style="color:#555555" :to="{ path:'/Destination_Detail_place', params: { id: item.id}}">{{item.gonglv}}</router-link>
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-breadcrumb-item>
						<el-breadcrumb-item>{{item.mianbaodidian}}旅游攻略</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="traveled-number"><span><em>126590</em> 人去过这里</span></div>
				<div style="clear: both;"></div>
				<div v-for="(item,index) in navbars" :key="index">
					<div class="cityname">
						<div class="city-name">
							<h3>{{item.city}}</h3><br>
							<h5>{{item.englishcity}}</h5>
						</div>
						<div class="city-user-mark">
							<ul>
								<li class="want-to-btn"><span class="want-to-icon"></span><span class="item-text">想去</span>
								</li>
								<li class="visited-btn">
									<div>
										<div class="visited-btn-main"><span class="visited-icon"></span><span class="item-text">去过</span></div>
									</div>
								</li>
								<li class="lived-btn">
									<div>
										<div class="lived-btn-main"><span class="lived-icon"></span><span class="item-text">生活过</span></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="navbar-menu navbar-menu">
						<ul class="plc-nav">
							<li class="plc-menu shadow">
								<el-popover placement="bottom-start" popper-class="city-zhinan" width="550" trigger="hover" style="display: block;">
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
									<el-button slot="reference" class="hoverzhinan">城市指南 <i class="el-icon-caret-bottom"></i></el-button>
								</el-popover>
							</li>
							<li class="plc-menu shadows">
								<router-link to="/guide">锦囊</router-link>
							</li>
							<li class="plc-menu shadow">
								<el-dropdown placement="bottom-start">
									<span class="navdropdown">
										景点美食<i class="el-icon-caret-bottom"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item v-for="(item,index) in item.navbarmeishi" :key="index">
											<router-link style="color: #666666;" :to="{path:"/Destination_list_Strategy",params: { id: item.id }}">{{item.meishi}}({{item.meishinumber}})</router-link>
										</el-dropdown-item>

									</el-dropdown-menu>
								</el-dropdown>
							</li>
							<li class="plc-menu shadow">
								<el-dropdown placement="bottom-start">
									<span class="navdropdown">
										游记社区<i class="el-icon-caret-bottom"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item v-for="(item,index) in item.navbarshequ" :key="index">
											<router-link style="color: #666666;" :to="{path:item.link,params: { id: item.id }}">{{item.shequ}}</router-link>
										</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</li>
							<li class="plc-menu shadow">
								<el-dropdown placement="bottom-start">
									<span class="navdropdown">
										行程助手<i class="el-icon-caret-bottom"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item v-for="(item,index) in item.navbartuijian" :key="index">
											<router-link style="color: #666666;" :to="{path:item.link,params: { id: item.id }}">{{item.tuijian}}</router-link>
										</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</li>
							<li class="plc-menu shadows">
								<router-link to="/hotel">酒店</router-link>
							</li>
							<li class="plc-menu shadow">
								<el-dropdown placement="bottom-start">
									<span class="navdropdown">
										旅行商城<i class="el-icon-caret-bottom"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item v-for="(item,index) in item.navbarshop" :key="index">
											<router-link style="color: #666666;" :to="{path:item.link,params: { id: item.id }}">{{item.shop}}({{item.shopnumber}})</router-link>
										</el-dropdown-item>

									</el-dropdown-menu>
								</el-dropdown>
							</li>
							<li class="plc-menu shadows">
								<router-link to="/map">地图</router-link>
							</li>
						</ul>
					</div>
					<div class="navbar-search">
						<el-form ref="detailform" rules="detailform" :model="detailform">
							<el-form-item>
								<el-input autocomplete="off" class="searchinput" placeholder="搜索国家/城市/景点" rel="searchgcj" v-model="detailform.searchgcj">
								</el-input> <i class="el-icon-search eliconsearch" @click="searchdetailclick"></i>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<div style="clear: both;"></div>
				<div class="impression-container">
					<div class="city-focus-photo-container" v-for="(item,index) in detailswiper">
						<el-carousel height="424px">
							<el-carousel-item v-for="(item,index) in item.detailswipers" :key="item">
								<img :src="item.detailtweenimg" width="100%" height="100%" />
							</el-carousel-item>
						</el-carousel>
						<div class="carousel-total-img"><span>{{item.picnumber}}张图片</span></div>
					</div>
					<div class="content-right">
						<div class="dheader">
							<div class="dcontent">
								<div class="left"><img src="https://fes.qyerstatic.com/FjKr2RWZpVvqQLzUcgl4o-AhCIZQ" alt="问号图标" width="17"><span>城市印象</span>
								</div>
								<div data-bn-ipg="place-city-experience-add" class="right"><span class="add"></span><span class="share">分享我的印象</span></div>
							</div>
						</div>
						<el-carousel style="width:412px;height:312px;margin: 0 auto;">
							<el-carousel-item v-for="(item,index) in detailswipercontent" :key="item" indicator-position="outside">
								<div class="impression-item-container slider-item" v-for="(item,index) in item.detailswipercontents">
									<div class="impression-item-top">
										<div class="user-info">
											<div class="avater"><img :src="item.avater" alt="avater">

											</div><span class="name">{{item.name}}</span>
										</div>
										<div class="value"><img src="https://fes.qyerstatic.com/Fhjpp-Y8rsQOSdbuUkTlajHbmTDl?imageslim" alt="赞">
											<span class="number">有用{{item.youyong}}</span></div>
									</div>
									<div class="impression-item-text">
										{{item.desc}}
									</div>
								</div>
							</el-carousel-item>
						</el-carousel>
						<p class="slide-bar-footer">
							<router-link to="/moreCity">查看更多城市印象</router-link>
						</p>

					</div>
				</div>
			</div>
			<div style="clear: both;"></div>
			<!-- 	穷游锦囊 -->
			<div class="jinnang-container">
				<div class="jn-content">
					<h2 class="bigTitle">穷游锦囊</h2>
					<h3 class="smallTitle">全世界穷游er为你撰写的出境旅行指南</h3>
					<div class="jn-all" v-for="(item,index) in qyou" :key="index">
						<div class="jn-main-container" v-if="item.type==1">
							<!-- type==1 -->
							<div class="jn-item-five-container">
								<ul class="clearfix">
									<li v-for="(item,index) in item.qyoufirst" :key="index">
										<div class="picture"><a class="jn-pic-link"><img :src="item.qyfengmianimg" width="150px" height="225px" alt="item.qyfengmiantitle"
												 class="jn-item-pic"></a></div>
										<div class="content">
											<h2>{{item.qyfengmiantitle}}</h2>
											<router-link to="/" class="download"><img src="https://fes.qyerstatic.com/FnTX_W6gPLXatOIFeiYWhGH0oYLJ?imageslim"
												 class="icon-download"><span>立刻下载</span></router-link>
										</div>
									</li>
								</ul>
								<div class="guideAll">
									<router-link to="/morejn">查看{{item.qyfengmiandidian}}全部锦囊({{item.qyfengmiannumber}})</router-link>
								</div>
							</div>
						</div>
						<div class="jn-main-container" v-else v-for="(item,index) in item.qyoutwo" :key="index">
							<!-- type==2 -->
							<div class="jn-item-one-container">
								<div class="jn-item-left"><a href="javascript:;" class="jn-item-left-link"><img :src="item.qfengmianimg" alt=""
										 class="jn-item-pic"></a></div>
								<div class="jn-item-content">
									<h2 class="jn-item-title"><span class="city-name">{{item.qyfengmiandidian}}</span><span class="tag">更新</span></h2>
									<div class="jn-item-description">
										{{item.qyfengmiandsc}}
									</div>
									<ul class="writer">
										<li class="writer-item"><img :src="item.qyfengmianavter"><span>{{item.qyfengmianzuozhe}}</span></li>
									</ul>
									<a class="download"><img src="https://fes.qyerstatic.com/FnTX_W6gPLXatOIFeiYWhGH0oYLJ?imageslim" class="icon-download"><span>立刻下载</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 	热门目的地 -->
			<div class="hot-destinationbg">
				<div class="hot-destination">
					<div class="destinaion-header">
						<h2>热门目的地</h2>
						<router-link to="/cityzhinan" class="destination-direct">城市指南</router-link>
					</div>

					<ul class="destination-tabs">
						<li id="remenidg" v-for="(value,key) in desbase" :key="key" :class="key === base_indexh?'active':''" v-on:click="changeBaseIndexh(key)">
							{{value.hotdi}}
						</li>
					</ul>
					<dl class="destination-content" v-for="(item,key) in destinationcontent" :class="key === base_indexh?'active':''"
					 :key="key">
						<li v-for="(item,key) in item.destinationcontents">
							<router-link to="{ name:'Destination_Landscape_introduction', params: { id: item.id}}">
								<div class="easing-container"><img :src="item.desimg" width="275" height="185"></div>
								<h4 class="card-name">{{item.destitle}}</h4>
								<div class="rank-info">
									<el-rate v-model="item.desvalue" show-score text-color="#666666" score-template="{value}">
									</el-rate>
								</div>
							</router-link>
						</li>
					</dl>
					<router-link to="/mudi" class="show-all">查看全部目的地</router-link>
				</div>
			</div>

			<!-- 	热门游记 -->
			<div class="essencial-diarybg">
				<div class="essencial-diary">
					<br />
					<br />
					<div class="diary-header">
						<h3>热门游记</h3>
						<router-link to="/youji_write" class="btn-write-diary"><img src="https://fes.qyerstatic.com/Fu99QEKUJXqT4saloWMxXTIjb_oL"
							 alt=""><span>写游记</span></router-link>
					</div>
					<div class="ess-diary-list">
						<ul>
							<li v-for="(item,index) in writeyouji">
								<router-link to="{ name:'Destination_Detail_thread', params: { id: item.id}}" class="diary-box">
									<div class="diary-pic">
										<div class="easing-container"><img width="370" height="248" :src="item.writeyoujiimg" lazy="loaded"></div>
										<div class="tags-container">
											<em class="is-essence"><i class="el-icon-star-off"></i><span>精华</span></em></div>
									</div>
									<h3 class="diary-title">{{item.title}}</h3>
									<div class="post-and-user">
										<div class="user-info">
											<router-link to="{ name:'Destination_Detail_thread', params: { id: item.id}}" class="user-avatar" style="display: inline-block; position: relative; overflow: visible;"><img
												 :src="item.userinfo" style="position: relative;">
												<div class="recognize-wrapper" style="position: absolute; bottom: 0px; right: 0px; width: 12px; height: 12px;"><span>
													</span>
												</div>
											</router-link><a class="user-link">{{item.zuozhe}}</a>
										</div>
										<div class="post-info"><span><img src="https://fes.qyerstatic.com/FhqEDeY-XCA7539PVHelTWOPhvBX?imageslim" alt="">
												{{item.liulan}}人浏览
											</span></div>
									</div>
								</router-link>

							</li>
						</ul>
					</div>
					<a class="see-more-diary">查看更多游记</a>
				</div>
			</div>
			<!-- 	行程路线 -->

			<div class="travel-route">
				<div class="route-header">
					<h3>行程路线</h3>
					<router-link to="{ name:'Destination_Detail_trip', params: { id: item.id}}" class="btn-write-route">
						<div class="jia"></div><span>创建行程</span>
					</router-link>
				</div>
				<div class="route-list">
					<ul>
						<li class="route-list-item" v-for="(item,index) in xingcheng">
							<router-link to="{ name:'Destination_Detail_trip', params: { id: item.id}}" class="item-pic">
								<div class="easing-container"><img width="370" height="242" :src="item.xcimg" lazy="loaded"></div>
								<div class="route-info">
									<div class="route-days"><em>{{item.day}}</em> 天
									</div>
									<div class="route-title">
										<p class="route-date">{{item.nyr}} 出发</p>
										<router-link to="{ name:'Destination_Detail_trip', params: { id: item.id}}" class="route-name">{{item.xctitle}}</router-link>
									</div>
								</div>
							</router-link><a class="copy-travel-route"><img src="https://fes.qyerstatic.com/FmIcQbx1p6V048casMPBkhUCE7nY"
								 alt=""><span data-v-9b99d28a="">复制</span></a>
							<div class="route-tags">
								<ul>
									<li v-for="(item,index) in item.xcbiaoqiao">
										{{item.biaoqiao}}
									</li>

								</ul>
							</div>
							<div class="route-pois">
								<ul>
									<li class="route-poi-item" v-for="(item,index) in item.xccity">
										{{item.xccityname}}
									</li>
								</ul>
							</div>
							<div class="user-and-route">
								<div class="user-info">
									<router-link to="{ name:'Destination_Detail_trip', params: { id: item.id}}" class="user-avatar" style="display: inline-block; position: relative; overflow: visible;"><img
										 :src="item.userinfo" alt="" style="position: relative; width: 30px; height: 30px;">
									</router-link><a class="user-link">{{item.xcname}}</a><span></span>
								</div>
								<div class="post-info"><span class="post-viewed">{{item.xcliulna}}人浏览</span><span class="post-copyed">{{item.pinglun}}</span></div>
							</div>
						</li>
					</ul>
					<router-link to="/plan_search" class="see-more-diary">查看更多行程</router-link>

				</div><!-- route-list -->
			</div> <!-- 	热门形成结束 -->
			<!-- 穷游商城 -->
			<div class="city-q-shopbg">
				<div class="city-q-shop">
					<br />
					<br />
					<h3 data-v-6fde679d="">穷游商城</h3>
					<div class="main-list">
						<router-link v-for="(item,index) in qshop" :key="index" :to="{ path:'/Destination_Detail_deal', params: { id: item.id}}"
						 class="commodity-item">
							<div class="commodity-cover"><img alt="" width="275" height="206" :src="item.qimgs" lazy="loaded"></div>
							<div class="commodity-info">
								<h3 class="link">{{item.qtitel}}</h3>
								<p class="tag"></p>
								<p class="price"><em>{{item.qjiage}}</em>元起</p>
							</div>
						</router-link>
						<div class="category-links">
							<ul>
								<li>
									<router-link to="/"><i class="icon el-icon-news"></i>
										<div class="info">
											<h5>机酒自由行</h5>

										</div><i class="direct el-icon-arrow-right
"></i>
									</router-link>
								</li>
								<li>
									<router-link to="/"><i class="icon el-icon-location"></i>
										<div class="info">
											<h5>当地玩乐</h5>

										</div><i class="direct el-icon-arrow-right
"></i>
									</router-link>
								</li>
								<li>
									<router-link to="/"><i class="icon el-icon-tickets
" data-icon="visa"></i>
										<div class="info">
											<h5>签证</h5>

										</div><i class="direct el-icon-arrow-right
"></i>
									</router-link>
								</li>
								<li>
									<router-link to="/"><i class="icon el-icon-star-off"></i>
										<div class="info">
											<h5>跟团游</h5>

										</div><i class="direct el-icon-arrow-right
"></i>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<router-link to="shop" class="more-link">查看更多折扣</router-link>
				</div><!-- 穷游商城 -->
			</div><!-- 穷游商城bg -->
			<!-- 客路 -->
			<div class="city-q-klook-bg">
				<div class="qyer_klook">
					<div class="klook_title"><span class="klook_logo"></span><span class="klook_desc">全球10万种当地玩乐</span></div>
					<p align="right" @click="qshopclick()"><img src="https://fes.qyerstatic.com/FnJsBwAkUOELx41R6FVhZlrQjTaU" style="vertical-align: sub;" />
						换一换</p>
					<div class="list_item">
						<router-link v-for="(item,index) in cityq" :key="index" :to="{ path:'/Destination_Detail_activity', params: { id: item.id}}"
						 class="item_box">
							<img alt="" width="275" height="147" :src="item.klimg" lazy="loaded">
							<div class="commodity-info">
								<h3 class="title">{{item.kltitle}}</h3>
								<div class="del_price">¥ {{item.delprice}}</div>
								<div class="laster_price"><b>{{item.lasterprice}}</b>元起<span class="instant_confirm" v-if="item.type===1"><i></i>即时确认</span></div>
							</div>
						</router-link>
					</div>
					<router-link to="moreactivity " class="look_more">查看更多活动</router-link>
				</div><!-- 客路content -->
			</div>

			<div class="hotel-tips-bg" v-for="(hotelvalue,index) in Strategy" :key="index">
				<div class="hotel-tips">
					<h3>{{hotelvalue.stname}}攻略</h3>
					<el-form :model="detailforms" rules="detailforms" ref="detailforms">
						<el-form-item>
							<el-input v-model="detailforms.cityname" placeholder="请输入入住地点" align="center" class="hotel-input" rel="cityname"></el-input>
							<el-date-picker size="large" v-model="detailforms.citydate" rel="citydate" type="daterange" align="right"
							 unlink-panels range-separator="-" start-placeholder="入住日期" end-placeholder="退房日期" :picker-options="pickerOptions">
							</el-date-picker>
							<el-button type="success" class="desclick el-icon-search" @click="onSubmit"> 搜索</el-button>
						</el-form-item>
					</el-form>
					<div class="data-and-recommand">
						<div class="hotel-favor">
							<h4>nice住宿偏好</h4>

							<div class="favor-big-data">
								<div class="data-of-qyer">
									<h5>在东京，多数穷游er预订了这样的酒店</h5>
									<div class="data-item"><em class="bold-num">{{hotelvalue.stjiage}}</em>元
										<p>价格</p>
									</div>
									<div class="data-item"><em class="bold-num">{{hotelvalue.stxingji}}</em>
										<p>星级</p>
									</div>
									<div class="data-item"><em class="bold-num">{{hotelvalue.stpingfen}}</em>
										<p>评分</p>
									</div>
								</div>
								<div class="data-decor"><img src="//fes.qyerstatic.com/FstHfUBiILSoBh7TcEzn7_3-BSOO" alt=""></div>
							</div>
							<el-carousel height="338px" style="margin-top: 25px;" class="Strategybanner">
								<el-carousel-item v-for="(hotelvalue,index) in hotelvalue.Strategybanner" :key="index">
									<router-link v-for="(hotelvalue,index) in hotelvalue.Strategybannercontent" :key="index" :to="{ path:'/hotel', params: { id: hotelvalue.id}}"
									 class="favor-slider-slide">
										<div class="card-pic"><img :src="hotelvalue.stimg" alt="hotelvalue.sttitle" width="230" height="144"></div>
										<div class="card-info"><a></a>
											<el-rate v-model="hotelvalue.stxingji" disabled show-score text-color="#ff9900" score-template="{value}">
											</el-rate>
											<p class="area-info"><span>{{hotelvalue.stdianname}} {{hotelvalue.stjuli}}km</span></p>
											<p class="price"><em>{{hotelvalue.stdianjiage}}</em>元起</p>
										</div>
									</router-link>

								</el-carousel-item>
							</el-carousel>
						</div><!-- hotel-favor -->
						<div class="hotel-hot-area">
							<div class="title">
								<h4>热门住宿区域</h4>
								<router-link to="/hotel_list">更多 <i class="el-icon-arrow-right"></i></router-link>
							</div>
							<router-link :to=" { name:'hotel', params: { id: hotelvalue.id}}" class="rank-1 rank-block">
								<!-- :to="{ name:'hotel', params: { id: item.id}}" -->
								<span><em>{{hotelvalue.stqbaifenzhi_1}}%</em>穷游er选择住在</span>
								<router-link to="/" class="rank-block-title">{{hotelvalue.stqdianname_1}}</router-link>
								<div class="mutiple-line" style="max-height: 90px; line-height: 30px;">
									{{hotelvalue.stqdsc}}
									<router-link to="/hotel_list" class="more-link"><i>…</i>[更多]</router-link>

								</div>
							</router-link>
							<div class="rank-2-3">
								<router-link :to="{ path:'/hotel', params: { id: hotelvalue.id}}" class="rank-2 rank-block"><span><em>{{hotelvalue.stqbaifenzhi_2}}%</em>穷游er选择住在</span>
									<router-link :to="{ path:'/hotel', params: { id: hotelvalue.id}}" class="rank-block-title">{{hotelvalue.stqdianname_2}}</router-link>
								</router-link>
								<router-link :to="{ path:'/hotel', params: { id: hotelvalue.id}}" class="rank-3 rank-block"><span><em>{{hotelvalue.stqbaifenzhi_3}}%</em>穷游er选择住在</span>
									<router-link :to="{ path:'/hotel', params: { id: hotelvalue.id}}" class="rank-block-title">{{hotelvalue.stqdianname_3}}</router-link>
								</router-link>
							</div>
						</div><!-- hotel-hot-area -->
					</div><!-- data-and-recommand -->
					<div class="more-link-box">
						<router-link :to="{ path:'/hotel', params: { id: hotelvalue.id}}" class="more-link">查看更多{{hotelvalue.stjiudianname}}酒店</router-link>
					</div>
				</div>
			</div><!-- hotel-tips-bg -->
			<!-- 特色住宿 -->
			<div class="characteristic-lodge-bg">
				<div class="characteristic-lodge-container">
					<br />
					<br />
					<br />
					<div class="characteristic-lodge-header">
						<h2>Airbnb爱彼迎特色住宿</h2>
					</div>
					<ul class="destination-tabs">
						<li id="remenidg" v-for="(value,key) in aibase" :key="key" :class="key === base_indexai?'active':''" v-on:click="changeBaseIndexai(key)">
							{{value.aitese}}
						</li>
					</ul>
					<dl v-for="(item,key) in aizcontent" class="characteristicdltab" :class="key === base_indexai?'active':''" :key="key">
						<router-link to="hotel" v-for="(item,key) in item.aizcontents" :key="index" class="characteristicli">
							<img :src="item.aiimg" width="275px" height="182px">
							<div class="airate">
								<el-rate class="characteristicrate" v-model="item.aipingfen" show-score text-color="#777777" score-template="{value}"></el-rate><span
								 class="comment">{{item.aipinglun}}条评论</span>
							</div>
							<div style="clear: both;"></div>
							<div class="row2">{{item.aidsc}}</div>
							<div class="row3">
								<div class="row3-left"><em class="price">{{item.jiage}}</em><span>元</span><i></i></div>
								<div class="row3-right">
									<img :src="item.aiavter" alt="item.aidsc" width="30px" height="30px">
									<span class="name">{{item.aizuozhe}}</span>
								</div>
							</div>
						</router-link>
					</dl>
					<router-link to="hotel" class="show-all">查看更多特色民宿</router-link>
				</div><!-- characteristic-lodge-container -->
			</div>
			<!-- question-and-answer-bg -->
			<div class="question-and-answer-bg">
				<div class="question-and-answer-content" v-for="(item,index) in questionanswer">
					<div class="wenda">
						<h2>相关问答</h2>
						<div class="ask-companions"><span>+</span>提问题</div>
						<ul class="ask-content">
							<li v-for="(item,index) in item.question">
								<div class="question"><img src="https://fes.qyerstatic.com/Fu8LumlljOZjy3evBJH-gk_q_44j?imageslim" alt="问题图标"><a>{{item.question}}</a></div>
								<div class="answer"><img src="https://fes.qyerstatic.com/FgKl7QaL_NAUDh9zx6ff_qegbvr0?imageslim" alt="回复图标"><span>{{item.answer}}</span></div>
							</li>

						</ul>
						<router-link :to="{ path:'/question', params: { id: item.id}}" class="btn">查看全部问答</router-link>
					</div><!-- wenda -->
					<div class="jieban">
						<h2>旅行结伴</h2>
						<div class="ask-companions"><span>+</span>发结伴</div>
						<ul class="jieban-content">
							<li v-for="(item,index) in item.answer">
								<div class="title">
									<div class="avater"><img :src="item.animg"></div>
									<router-link :to="{ path:'/answer', params: { id: item.id}}">{{item.antitle}}</router-link>
								</div>
								<div class="detail"><span class="td1 td">{{item.anzuozhe}}</span><span class="td2 td" style="color: #333333;">{{item.antime}}</span>
									<span class="td3 td"><img width="13px" height="9px" src="https://fes.qyerstatic.com/FjQl8dAV6OeqkRdd1YcquIPse9Oa?imageslim"
										 alt="眼睛图片">{{item.anliulan}}人浏览</span><span class="td4 td"><img width="20px" height="18px" src="https://fes.qyerstatic.com/Fo-XZeGWU-efECrLRyItAVqvo53z?imageslim"
										 alt="回复图片">{{item.anhuifu}}</span>
								</div>
								<div class="jieban-text">出发 {{item.anchufa}} - 返程 {{item.anfanhui}}


								</div>
							</li>
						</ul>
						<router-link :to="{ path:'/answer', params: { id: item.id}}" class="btn">进入论坛查看更多结伴</router-link>
					</div>

				</div>
			</div>
			<!-- 相关游记 -->
			<div class="relative-diary-bg">
				<div class="relative-diary">
					<div class="diary-header">
						<h3>相关游记</h3>
						<router-link to="write_youji" class="btn-write-diary"><img src="https://fes.qyerstatic.com/Fu99QEKUJXqT4saloWMxXTIjb_oL"
							 alt=""><span>写游记</span></router-link>
					</div>
					<router-link v-for="(item,index) in youjilist" :key="index" :to="{ path:'/thread', params: { id: item.id}}" class="diary-item-container">
						<div class="diary-item-img"><img :src="item.yjimg" alt="item.yjdsc" width="350" height="234"></div>
						<div class="diary-item-content">
							<router-link :to="{ path:'/thread', params: { id: item.id}}" class="diary-item-title"><span class="diary-link">{{item.yjtitle}}</span>
								<em class="is-essence"><i></i><span>精华</span></em></router-link>
							<p>{{item.yjdsc}}</p>
							<div class="post-and-user">
								<div data-v-4d060ef2="" class="user-info">
									<router-link :to="{ path:'/thread', params: { id: item.id}}" class="user-avatar" style="display: inline-block; position: relative; overflow: visible;"><img
										 :src="item.yjavter" alt="" style="position: relative; width: 30px; height: 30px;">

									</router-link>
									<router-link :to="{ path:'/thread', params: { id: item.id}}" class="user-link">{{item.yjzuozhe}}</router-link><span>{{item.yjtime}}</span>
								</div>
								<div class="post-info"><span class="viewed-num">
										{{item.yjliulan}} 人浏览
									</span><span class="favored-num">
										{{item.yjdianzan}}
									</span></div>
							</div>
						</div>
					</router-link>
				</div><!-- relative-diary -->
			</div> <!-- 相关游记 -->
		</div>
	</el-col>

</template>

<script>
	import headers from '../../../pages/web/Destination/header.vue'
	export default {
		name: 'destination_detail',
		data() {
			return {
				detailswiper: [],
				detailswipercontent: [],
				desbase: [],
				destinationcontent: [],
				writeyouji: [],
				xingcheng: [],
				qshop: [],
				cityq: [],
				Strategy: [],
				aibase: [],
				youjilist: [],
				questionanswer: [],
				mianbaoxie: [],
				qyou: [],
				qshopnumber: 0,
				base_indexh: 0,
				base_indexai: 0,
				detailform: {
					searchgcj: ''
				},
				detailform: {
					searchgcj: [{
						required: true,
						message: '请输入搜索国家/城市/景点',
						trigger: 'blur'
					}]
				},
				detailforms: {
					cityname: ''
				},
				detailforms: {
					cityname: [{
						required: true,
						message: '请输入搜索入住地点',
						trigger: 'blur'
					}]
				},
			}
		},
		created() {
			this.buildmianbaoxie();
			this.buildnavbars();
			this.builddetailswiper();
			this.builddetailswipercontent();
			this.buildqyou();
			this.builddesbase();
			this.builddestinationcontent();
			this.buildwriteyouji();
			this.buildxingcheng();
			this.buildqshop();
			this.buildcityq();
			this.buildStrategy();
			this.buildaibase();
			this.buildaizcontent();
			this.buildquestionanswer();
			this.buildyoujilist();

		},
		methods: {
			builddetailswiper() {
				this.axios.get('/api/builddetailswiper').then(res => {
					this.detailswiper = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddetailswipercontent() {
				this.axios.get('/api/builddetailswipercontent').then(res => {
					this.detailswipercontent = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildqyou() {
				this.axios.get('/api/buildqyou').then(res => {
					this.qyou = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddesbase() {
				this.axios.get('/api/builddesbase').then(res => {
					this.desbase = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			builddestinationcontent() {
				this.axios.get('/api/builddestinationcontent').then(res => {
					this.destinationcontent = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildwriteyouji() {
				this.axios.get('/api/buildwriteyouji').then(res => {
					this.writeyouji = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildxingcheng() {
				this.axios.get('/api/buildxingcheng').then(res => {
					this.xingcheng = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildqshop() {
				this.axios.get('/api/buildqshops').then(res => {
					this.qshop = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildcityq() {
				this.axios.get('/api/buildcityq').then(res => {
					this.cityq = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildStrategy() {
				this.axios.get('/api/buildStrategy').then(res => {
					this.Strategy = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildaibase() {
				this.axios.get('/api/buildaibase').then(res => {
					this.aibase = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildaizcontent() {
				this.axios.get('/api/buildaizcontent').then(res => {
					this.aizcontent = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildquestionanswer() {
				this.axios.get('/api/buildquestionanswer').then(res => {
					this.questionanswer = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildyoujilist() {
				this.axios.get('/api/buildyoujilist').then(res => {
					this.youjilist = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildnavbars() {
				this.axios.get('/api/buildnavbars').then(res => {
					this.navbars = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			qshopclick() {
				this.qshopnumber++
				this.axios.get('/api/buildcityq', {
					params: {
						'qshopnumber': this.qshopnumber
					},
				}).then(res => {
					this.cityq = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			buildmianbaoxie() {
				this.axios.get('/api/buildmianbaoxie').then(res => {
					this.mianbaoxie = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			},
			searchdetailclick() {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchgcj': this.$rels.searchgcj.value
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
			// 入住搜索
			onSubmit() {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'cityname': this.$rels.cityname.value,
								'citydate': this.$rels.citydate.value,

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
			changeBaseIndexh(index) {
				this.base_indexh = index
			},
			changeBaseIndexai(index) {
				this.base_indexai = index
			}
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	// <!-- 相关游记 -->
	.diary-item-container {
		display: block;
		text-decoration: none;
		height: 234px;


		list-style: none;
		border: 1px solid #ececec;
		background: #fff;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
	}

	.diary-item-container .diary-item-img {
		width: 350px;
		float: right;
		height: 234px;
		overflow: hidden;
	}

	.diary-item-container .diary-item-title {
		text-decoration: none;
		font-weight: 700;
		margin: 30px 40px 0px;
		display: inline-block;

	}

	.diary-item-content .diary-item-title .diary-link {
		display: inline-block;
		vertical-align: middle;
		max-width: 503px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 16px;
		font-size: 16px;
		color: rgba(0, 0, 0, .8);
		line-height: 16px;
		margin-right: 4px;
	}

	.diary-item-title em {
		font-style: normal;
	}

	.diary-item-content .is-essence,
	.diary-item-content .is-essence i {
		display: inline-block;
		vertical-align: middle;
		line-height: 12px;
		font-size: 12px;
	}

	.diary-item-content .is-essence {
		height: 16px;
		background: -webkit-gradient(linear, left top, left bottom, from(#ff976a), to(#ff7466)) rgba(255, 115, 98, .65);
		background: linear-gradient(180deg, #ff976a, #ff7466) rgba(255, 115, 98, .65);
		-webkit-box-shadow: 0 6px 12px 0 hsla(7, 100%, 70%, .15);
		box-shadow: 0 6px 12px 0 hsla(7, 100%, 70%, .15);
		border-radius: 2px;
		color: #fff;
		padding: 0 4px;
	}

	.diary-item-content .is-essence i {
		background: url(https://fes.qyerstatic.com/FpmJgrJdmYBvT5ar9fsWhcoUlTFN) no-repeat 50%;
		width: 9px;
		height: 12px;
		margin-right: 2px;
	}

	.diary-item-content .is-essence span {
		display: inline-block;
		vertical-align: middle !important;
		height: 12px;
		line-height: 14px;
	}

	.diary-item-content p {
		height: 72px;
		font-size: 14px;
		color: rgba(0, 0, 0, .6);
		line-height: 24px;
		width: 700px;
		margin-left: 40px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		margin-top: 20px;
	}

	.diary-item-content .post-and-user {
		position: relative;
		margin-top: 25px;
		width: 700px;
		margin: 38px;


		.user-info {
			display: inline-block;
			vertical-align: middle;
			position: absolute;
			left: 0;
			text-align: left;

			.user-avatar {
				display: inline-block;
				vertical-align: middle;
				width: 30px;
				height: 30px;

				img {
					display: block;
					width: 100%;
					border-radius: 50%;
				}
			}

			.user-link {
				text-decoration: none;
				display: inline-block;
				vertical-align: middle;
				margin-left: 6px;
				height: 17px;
				font-size: 12px;
				color: rgba(0, 0, 0, .8);
				line-height: 17px;
			}

			span {
				display: inline-block;
				vertical-align: middle;
				height: 12px;
				font-size: 12px;
				margin-left: 9px;
				color: #959595;
				line-height: 12px;
			}
		}
	}

	.post-and-user .post-info {
		display: inline-block;
		vertical-align: middle;
		position: absolute;
		right: 0;
		text-align: right;
	}

	.post-and-user .post-info .viewed-num {
		background: url(https://fes.qyerstatic.com/FhqEDeY-XCA7539PVHelTWOPhvBX?imageslim) no-repeat 0;
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .4);
		line-height: 17px;
		display: inline-block;
		vertical-align: middle;
		padding-left: 16px;
	}

	.post-and-user .post-info .favored-num {
		background: url(https://fes.qyerstatic.com/FtkUNjO-xTk2-6a6BetbkbOnaIbT) no-repeat 0;
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .4);
		line-height: 17px;
		display: inline-block;
		vertical-align: middle;
		padding-left: 20px;
		margin-left: 10px;
	}

	.relative-diary-bg {
		width: 100%;
		height: auto;
		background: #FAFAFA;

		.relative-diary {
			width: 1160px;
			margin: 0 auto;
			background: #fafafa;
			padding-top: 40px;
			padding-bottom: 60px;

			.diary-header {

				position: relative;
				margin-bottom: 40px;
				text-align: center;

				h3 {
					height: 24px;
					font-size: 30px;
					font-weight: 400;
					color: #000;
					line-height: 24px;
					margin: auto;
					display: inline-block;
					vertical-align: middle;
				}

				.btn-write-diary {
					float: right;
					display: inline-block;
					vertical-align: middle;
					width: 100px;
					height: 34px;
					background: #28b76c;

					img {
						display: inline-block;
						vertical-align: middle;
					}

					span {
						display: inline-block;
						vertical-align: middle;
						height: 34px;
						font-size: 14px;
						color: #fff;
						line-height: 34px;
					}
				}
			}
		}
	}

	// question-and-answer
	.question-and-answer-bg {
		width: 100%;
		min-width: 1160px;
		background: #fff;
		padding-top: 40px;
		padding-bottom: 60px;

		.question-and-answer-content {
			width: 1160px;
			margin: 0 auto;


			.wenda {
				position: relative;
				display: inline-block;
				width: 800px;
				vertical-align: top;

				h2 {
					width: 96px;
					height: 24px;
					font-size: 24px;
					color: #000;
					font-weight: 500;
					line-height: 24px;
				}

				.ask-companions {
					position: absolute;
					top: -2px;
					right: 0;
					width: 100px;
					height: 34px;
					line-height: 28px;
					background: #28b76c;
					font-size: 14px;
					color: #fff;
					text-align: center;
					vertical-align: middle;
					cursor: pointer;

					span {
						font-size: 21px;
						margin-right: 6px;
						position: relative;
						top: 1px;
					}
				}
			}

			.ask-content {
				margin-top: 60px;
			}
		}

		.question-and-answer-content .ask-content li:first-child {
			border-bottom: 1px solid rgba(0, 0, 0, .08);
		}

		.question-and-answer-content .ask-content li {
			width: 100%;
			height: 125px;
			list-style: none;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}

		.question-and-answer-content .wenda .answer img,
		.question-and-answer-content .wenda .question img {
			display: inline-block;
			width: 30px;
			height: 30px;
			vertical-align: super;
		}

		.question-and-answer-content .wenda .question a {
			text-decoration: none;
			vertical-align: top;
			margin-left: 10px;
			display: inline-block;
			width: 700px;
			height: 22px;
			font-size: 16px;
			color: rgba(0, 0, 0, .8);
			line-height: 22px;
			cursor: pointer;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.question-and-answer-content .wenda .answer {
			margin-top: 14px;
		}
	}

	.question-and-answer-content .wenda .answer span {
		vertical-align: top;
		margin-left: 10px;
		width: 700px;
		height: 50px;
		line-height: 24px;
		font-size: 14px;
		color: rgba(0, 0, 0, .6);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: inline-block;
		cursor: pointer;
	}

	.question-and-answer-content .ask-content li:nth-child(2) {
		margin-top: 36px;
	}

	.question-and-answer-content .btn {
		display: inline-block;
		margin-top: 10px;
		width: 200px;
		height: 50px;
		line-height: 50px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		border: 1px solid #28b76c;
		font-size: 16px;
		color: #28b76c;
		text-decoration: none;
		cursor: pointer;
		margin-left: 50%;
		-webkit-transform: translate(-100px);
		transform: translate(-100px);
	}

	.city-zhinan {
		padding: 0px;
	}


	.city-detail {
		width: 100%;
		min-width: 1160px;
		height: auto;
		background: #fff;
		-webkit-box-shadow: 0 3px 9px 0 hsla(0, 0%, 87%, .77);
		box-shadow: 0 3px 9px 0 hsla(0, 0%, 87%, .77);
	}

	.plc-container {
		width: 1160px;
		height: auto;
		margin: 0 auto;
		background: #fff;
		position: relative;

		.header-crumb {
			float: left;
			margin-top: 20px;
		}

		.traveled-number {
			float: right;
			margin-top: 26px;
			font-size: 14px;
			color: #959595;

			em {
				color: #fa5f50;
			}
		}

	}

	.jieban {
		position: relative;
		display: inline-block;
		width: 322px;
		float: right;
		margin-left: 38px;
		vertical-align: top;

		h2 {
			width: 96px;
			height: 24px;
			font-size: 24px;
			color: #000;
			font-weight: 500;
			line-height: 24px;
		}

		.ask-companions {
			position: absolute;
			top: -2px;
			right: 0;
			width: 100px;
			height: 34px;
			line-height: 28px;
			background: #28b76c;
			font-size: 14px;
			color: #fff;
			text-align: center;
			vertical-align: middle;
			cursor: pointer;

			span {
				font-size: 21px;
				margin-right: 6px;
				position: relative;
				top: 1px;
			}
		}
	}

	.question-and-answer-content .jieban-content {
		margin-top: 50px;
	}

	.question-and-answer-content .jieban-content li:first-child {
		border-bottom: 1px solid rgba(0, 0, 0, .08);
	}

	.question-and-answer-content .jieban-content li {
		width: 100%;
		height: 135px;
		list-style: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.question-and-answer-content .jieban-content li:last-child {
		margin-top: 25px;
	}

	.question-and-answer-content .jieban .title .avater {
		position: relative;
		display: inline-block;

		img {
			display: inline-block;
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}
	}

	.question-and-answer-content .jieban .title a {
		text-decoration: none;
		float: right;
		height: 44px;
		line-height: 22px;
		width: 272px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-left: 19px;
		cursor: pointer;
		font-size: 16px;
		color: rgba(0, 0, 0, .8);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.question-and-answer-content .jieban .detail {
		margin-top: 10px;
	}

	.question-and-answer-content .jieban .td1 {
		color: rgba(0, 0, 0, .8);
		font-size: 12px;

	}

	.question-and-answer-content .jieban .td3,
	.question-and-answer-content .jieban .td4 {
		color: rgba(0, 0, 0, .4);
	}

	.question-and-answer-content .jieban .td2,
	.question-and-answer-content .jieban .td3,
	.question-and-answer-content .jieban .td4 {
		margin-left: 20px;
	}

	.question-and-answer-content .jieban .detail img {
		vertical-align: middle;
	}

	.question-and-answer-content .jieban .jieban-text {
		margin-top: 16px;
		height: 44px;
		font-size: 14px;
		color: rgba(0, 0, 0, .6);
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.cityname {
		margin-top: 20px;
		width: 1160px;

		background: #fff;
		position: relative;

		.city-name {
			float: left;

			h3 {
				font-size: 40px;
				color: #28b76c;
				display: inline-block;
				height: 40px;
				line-height: 40px;
				font-weight: 500px;
			}

			h5 {
				margin-top: 6px;
				display: inline-block;
				height: 22px;
				font-size: 20px;
				color: #28b76c;
				line-height: 20px;
			}
		}

		.city-user-mark {
			float: right;

			li {
				display: inline-block;
				vertical-align: top;
				margin: 0;
				padding-top: 12px;
				padding-bottom: 12px;
				width: 70px;
				text-align: center;
				-webkit-box-shadow: 0 3px 12px 0 hsla(0, 0%, 100%, .1);
				box-shadow: 0 3px 12px 0 hsla(0, 0%, 100%, .1);
				-webkit-transition: -webkit-box-shadow .2s linear;
				transition: -webkit-box-shadow .2s linear;
				transition: box-shadow .2s linear;
				transition: box-shadow .2s linear, -webkit-box-shadow .2s linear;
				border: 1px solid #fff;

				.want-to-icon {
					background: url(https://fes.qyerstatic.com/Fo6R3BGVxeuI0WckTGWfeEEHYL6d) no-repeat 50%;
					background-size: 100%;
					display: block;
					width: 20px;
					height: 20px;
					margin: 0 auto;
					margin-bottom: 7px;
				}

				.item-text {
					height: 17px;
					font-size: 12px;
					color: #28b76c;
					line-height: 20px;
				}

				.visited-icon {
					background: url(https://fes.qyerstatic.com/FuHppxgzEu_n-Vic6_ZQjZd7Gz_Y) no-repeat 50%;
					background-size: 100%;
					display: block;
					width: 20px;
					height: 20px;
					margin: 0 auto;
					margin-bottom: 7px;
				}

				.lived-icon {
					background: url(https://fes.qyerstatic.com/FhpWBeirwrnbomHs6-8Ax-Q8fq2V) no-repeat 50%;
					background-size: 100%;
					display: block;
					width: 20px;
					height: 20px;
					margin: 0 auto;
					margin-bottom: 7px;
				}
			}

		}
	}

	.navbar-menu {
		float: left;

	}

	.navbar-menu,
	.plc-nav {
		height: 58px;
		min-width: 900px;
		max-width: 940px;
		background: #fff;
		display: table;

	}

	.navbar-menu .plc-nav .plc-menu {
		height: 58px;
		position: relative;
		line-height: 55px;
		float: left;
		z-index: 6;
		list-style: none;
		width: 120px;
		text-align: left;

		a {
			color: #636363;
			font-size: 18px;
		}
	}

	.navbar-menu .plc-nav .plc-menu:nth-of-type(2) {
		width: 70px;
	}

	.navbar-menu .plc-nav .plc-menu:nth-of-type(6) {
		width: 70px;
	}

	.navbar-menu .plc-nav .plc-menu .hoverzhinan {
		border: 1px white solid;
		padding: 0;

		span {
			color: #636363;
			font-size: 18px;
		}

	}

	.navbar-menu .plc-nav .plc-menu .navdropdown {
		color: #636363;
		font-size: 18px;
	}

	// .navbar-menu .plc-nav .shadows:hover{
	// 	width: 50px;
	// 	border-bottom: #28b76c 4px solid;
	// }
	.navbar-menu .plc-nav .plc-menu .hoverzhinan span:hover {
		color: #28b76c;

		background-color: white;
	}

	.navbar-menu .plc-nav .plc-menu a:hover {
		color: #28b76c;

	}

	.navbar-menu .plc-nav .plc-menu .navdropdown:hover {
		color: #28b76c;
	}

	.navbar-menu .plc-nav.plc-menu .hoverzhinan span:focus {
		color: #28b76c;

		background-color: white;
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
		padding: 8px 20px;
		overflow: hidden;
	}

	.city-zhinan .subMenu-big ul .list-item a.list-item-title {
		display: block;
		float: left;
		margin-right: 20px;
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
		width: 400px;
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

	.plc-container .navbar-search {
		float: right;
		margin-top: 0px;
		position: relative;
		width: 200px;

		.eliconsearch {
			position: absolute;
			top: 9px;
			font-size: 20px;
			right: 8px;
		}
	}

	.plc-container .navbar-search .searchinput {
		/deep/ .el-input__inner:focus {
			border: 1px #28b76c solid;
		}
	}

	.impression-container .impression-item-container {
		width: 412px;
		margin-top: 30px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.impression-item-container .impression-item-top .user-info {
		float: left;
		cursor: pointer;
	}

	.impression-item-container .impression-item-top .user-info .avater {
		position: relative;
		width: 32px;
		height: 32px;
		display: inline-block;
	}

	.impression-item-container .impression-item-top .user-info .avater img {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		vertical-align: middle;
	}

	.impression-item-container .impression-item-top .user-info .name {
		margin-left: 9px;
		font-size: 12px;
		color: rgba(0, 0, 0, .8);
		vertical-align: middle;
	}

	.impression-item-container .impression-item-top .value {
		float: right;
		margin-top: 7px;
		cursor: pointer;
	}

	.impression-item-container .impression-item-top .value img {
		width: 14px;
		height: 15px;
		vertical-align: middle;
		-webkit-animation: dianzanAnimation .4s linear 1;
		animation: dianzanAnimation .4s linear 1;
	}

	.impression-item-container .impression-item-top .value .number {
		font-size: 12px;
		margin-left: 6px;
		vertical-align: middle;
		color: #28b76c;
		-webkit-transition: color .4s;
		transition: color .4s;
	}

	.impression-item-container .impression-item-text {
		margin-top: 16px;
		width: 412px;
		height: 70px;
		font-size: 14px;
		color: #646464;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.impression-container {
		overflow: hidden;

		.city-focus-photo-container {
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			width: 640px;

			position: relative;
			float: left;
			background: #eee;

		}
	}

	.impression-container .content-right {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 520px;
		height: 424px;
		position: relative;
		background: #fff;
		float: right;
		border: 1px solid #ececec;

		.dheader .dcontent {
			width: 412px;
			margin: 0 auto;

			.left {
				float: left;
				margin-top: 20px;
				cursor: pointer;

				span {
					display: inline-block;
					width: 96px;
					height: 33px;
					font-size: 24px;
					color: rgba(0, 0, 0, .8);
					line-height: 33px;
					margin-left: 6px;
				}
			}

			.right {
				float: right;
				margin-top: 27px;
				color: #28b76c;
				cursor: pointer;

				.add {
					font-size: 0;
					width: 16px;
					height: 16px;
					display: inline-block;
					vertical-align: middle;
					background: url(https://fes.qyerstatic.com/Fp1X2lksS-OBcT4hqTb__UL5mSX2?imageslim) no-repeat;
					background-size: 100% 100%;
				}

				.share {
					font-size: 14px;
					vertical-align: middle;
					margin-left: 4px;
					color: #28b76c;
				}
			}
		}
	}

	.impression-container .content-right .slide-bar-footer {
		width: 420px;
		height: 58px;
		margin: 0 auto;
		text-align: center;
		line-height: 58px;
		font-size: 16px;
		border-top: 1px solid hsla(0, 0%, 93%, .8);

		a {
			color: #28b76c;
		}
	}

	.city-focus-photo-container .carousel-total-img {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 112px;
		height: 33px;
		line-height: 33px;
		text-align: center;
		background: #000;
		border-radius: 23px;
		opacity: 0.6;
		z-index: 1000;
		cursor: pointer;

		span {
			font-weight: 400;
			color: #fff;
			font-size: 14px;
			opacity: 1;
		}
	}

	// 穷游锦囊
	.jinnang-container {
		width: 1160px;
		margin: 0 auto;
		padding-top: 40px;
		padding-bottom: 60px;

		.jn-content .bigTitle {
			margin: 0;
			height: 24px;
			text-align: center;
			font-size: 30px;
			color: #000;
		}

		.jn-content .smallTitle {
			margin-top: 22px;
			margin-bottom: 40px;
			height: 18px;
			text-align: center;
			font-size: 18px;
			color: rgba(0, 0, 0, .4);
			line-height: 18px;
			font-weight: 300;
		}
	}

	.jn-main-container {
		margin-bottom: 40px;
	}

	.jn-item-five-container {
		width: 1160px;
		text-align: center;

		ul {
			width: 1160px;
			height: 320px;
			padding: 0;
			margin: 0;
			padding: 0 45px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			overflow: hidden;

			li {
				float: left;
				list-style: none;
				width: 150px;
				height: 320px;
				margin-right: 80px;
				cursor: pointer;

				.picture {
					width: 150px;
					height: 225px;

					.jn-pic-link {
						position: relative;
						display: block;
						height: 225px;
						width: 150px;
						-webkit-box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .12), 0 20px 14px -10px rgba(0, 0, 0, .12);
						box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .12), 0 20px 14px -10px rgba(0, 0, 0, .12);
						-webkit-transition: -webkit-transform .3s;
						transition: -webkit-transform .3s;
						transition: transform .3s;
						transition: transform .3s, -webkit-transform .3s;

						.jn-item-pic {
							display: block;
							width: 100%;
							height: 100%;
							transition: 5s ease-in-out;
							/*可以改变时间*/
							-moz-transition: 5s ease-in-out;
							-webkit-transition: 5s ease-in-out;
						}
					}
				}

				.jn-item-pic:hover {
					position: relative;
					top: 5px;

					transition: 5s ease-in-out;
					/*可以改变时间*/
					-moz-transition: 5s ease-in-out;
					-webkit-transition: 5s ease-in-out;
				}

				.content {
					overflow: hidden;
					width: 150px;

					h2 {
						text-align: center;
						padding: 0;
						margin: 0;
						margin-top: 16px;
						margin-bottom: 10px;
						height: 24px;
						font-size: 18px;
						color: #323232;
						line-height: 24px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}

	.jn-item-five-container ul li:nth-child(5n) {
		margin-right: 0;
	}

	.jn-item-five-container ul li .content a.download {
		position: relative;
		display: block;
		width: 150px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		text-decoration: none;
		background: #28b76c;
		-webkit-box-shadow: 0 7px 24px 0 rgba(40, 183, 108, .2);
		box-shadow: 0 7px 24px 0 rgba(40, 183, 108, .2);
	}

	.jn-item-five-container ul li .content a.download .icon-download {
		width: 13px;
		height: 15px;
		display: inline-block;
		margin-right: 6px;
		position: relative;
		top: 2px;
	}

	.jn-item-five-container ul li .content a.download span[data-v-13707b88] {
		font-size: 14px;
		color: #fff;
	}

	.clearfix:after,
	.clearfix:before {
		content: "";
		display: table;
		clear: both;
	}

	.jinnang-container .jn-content .guideAll {
		margin-top: 40px;
		text-align: center;
		cursor: pointer;
	}

	.jinnang-container .jn-content .guideAll a {
		text-decoration: none;
		min-width: 200px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: 1px solid #28b76c;
		display: inline-block;
		font-size: 16px;
		padding: 0 10px;
		color: #28b76c;
	}

	.jinnang-container .jn-content .guideAll a:hover {
		background: #28b76c;
		color: white;
	}

	.jn-item-one-container {
		position: relative;
		width: 1160px;
		height: 306px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: #fff;

		.jn-item-left {
			width: 200px;
			height: 300px;
			position: absolute;
			top: -16px;
			left: 43px;
		}

		.jn-item-content {
			margin-left: 280px;
			overflow: hidden;
		}

	}

	.jn-item-one-container .jn-item-left .jn-item-left-link:hover {
		-webkit-transform: scale(1.03);
		transform: scale(1.03);
	}

	.jn-item-one-container .jn-item-left .jn-item-left-link {
		display: block;
		height: 100%;
		-webkit-box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .12), 0 20px 14px -10px rgba(0, 0, 0, .12);
		box-shadow: 0 8px 24px 0 rgba(0, 0, 0, .12), 0 20px 14px -10px rgba(0, 0, 0, .12);
		-webkit-transition: -webkit-transform .3s;
		transition: -webkit-transform .3s;
		transition: transform .3s;
		transition: transform .3s, -webkit-transform .3s;
	}

	.jn-item-one-container .jn-item-left .jn-item-left-link .jn-item-pic {
		display: block;
		width: 100%;
		height: 100%;
	}

	.jn-item-one-container .jn-item-content .jn-item-title {
		margin-top: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		.city-name {
			display: inline-block;
			height: 30px;
			font-size: 30px;
			color: rgba(0, 0, 0, .8);
			line-height: 30px;
			vertical-align: middle;
			cursor: pointer;
		}

		.tag {
			display: inline-block;
			width: 40px;
			height: 16px;
			margin-top: 2px;
			margin-left: 6px;
			line-height: 17px;
			font-size: 12px;
			color: #fff;
			vertical-align: middle;
			text-align: center;
			background: #ffc764;
		}
	}

	.jn-item-one-container .jn-item-content .jn-item-description {
		width: 786px;
		height: 84px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		padding-left: 1px;
		margin-top: 16px;
		font-size: 16px;
		color: #646464;
		line-height: 28px;
		cursor: pointer;
	}

	.jn-item-one-container .jn-item-content .writer {
		margin-top: 26px;
		width: 786px;
		height: 22px;
		margin-right: -10px;
		overflow: hidden;

		.writer-item {
			float: left;
			margin-right: 10px;
			cursor: pointer;

			img {
				display: inline-block;
				width: 22px;
				height: 22px;
				border-radius: 50%;
				vertical-align: middle;
			}

			span {
				display: inline-block;
				margin-left: 6px;
				max-width: 60px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				height: 17px;
				font-size: 12px;
				color: rgba(0, 0, 0, .8);
				line-height: 17px;
				vertical-align: middle;
			}
		}
	}

	.jn-item-one-container .jn-item-content .download {
		position: relative;
		display: block;
		margin-top: 31px;
		width: 150px;
		height: 45px;
		line-height: 45px;
		background: #28b76c;
		-webkit-box-shadow: 0 7px 24px 0 rgba(40, 183, 108, .2);
		box-shadow: 0 7px 24px 0 rgba(40, 183, 108, .2);
		text-align: center;
		text-decoration: none;
		cursor: pointer;

		.icon-download {
			width: 13px;
			height: 15px;
			display: inline-block;
			margin-right: 6px;
			position: relative;
			top: 2px;
		}

		span {
			font-size: 14px;
			color: #fff;
		}
	}

	// 热门目的地
	.hot-destinationbg {
		width: 100%;
		background: white;
		height: 930px;

	}

	.hot-destination {
		width: 1160px;
		margin: auto;
		text-align: center;
		position: relative;

	}

	.hot-destination .destinaion-header h2 {
		height: 24px;
		font-size: 30px;
		font-weight: 400;
		color: #000;
		line-height: 24px;
		text-align: center;
	}

	.hot-destination .destinaion-header .destination-direct:hover {
		background: #3dbe7a;
	}

	.hot-destination .destinaion-header .destination-direct {
		width: 100px;
		height: 34px;
		line-height: 34px;
		font-size: 14px;
		color: #fff;
		background: #28b76c;
		display: block;
		position: absolute;
		right: 0;
		top: 0;
		text-decoration: none;
	}

	.rank-info .el-icon-star-on {
		color: #28b76c !important;
	}

	// .rank-info .el-icon-star-off{
	// 	color: white !important;
	// }
	.hot-destination .show-all:hover {
		background-color: #11bf79;
		color: #fff;
	}

	.hot-destination .show-all {
		display: inline-block;
		width: 200px;
		height: 50px;
		margin-top: 30px;
		line-height: 50px;
		text-decoration: none;
		font-size: 16px;
		color: #28b76c;
		border: 1px solid #28b76c;
	}

	.destination-tabs {
		margin: 0 auto;
		padding: 0;

		margin-top: 41px;
		margin-bottom: 50px;
		display: inline-block;
		border-bottom: 1px solid rgba(0, 0, 0, .1);
		position: relative;

		li {
			display: inline-block;
			vertical-align: text-bottom;
			height: 43px;
			font-size: 18px;
			color: #878787;
			line-height: 37px;
			position: relative;
			top: 3px;

		}

	}

	.destination-content li .easing-container {
		transition: all 0.6s;
		overflow: hidden;
		width: 275px;
		height: 188px;
	}

	.destination-content {
		display: none;
	}

	.destination-content.active {
		display: block;
	}

	.destination-content li .easing-container img:hover {
		transition: all 0.6s;
		transform: scale(1.2);
		/* 放大1.2倍 */
	}

	.destination-content li:hover {
		-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
	}

	.destination-content li {
		padding: 0;
		margin-top: 30px;
		margin-left: 20px;
		list-style: none;
		cursor: pointer;
		display: inline-block;
		vertical-align: top;
		width: 275px;
		height: 290px;

		background: #fff;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
		text-align: center;

		.card-name {
			font-size: 22px;
			color: #000;
			font-weight: 500;
			line-height: 30px;
			margin-top: 10px;
			max-width: 275px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}

		.rank-info {
			margin-top: 10px;
			height: 18px;
			font-size: 18px;
			color: rgba(0, 0, 0, .6);
			line-height: 18px;
		}
	}

	.destination-content li:nth-of-type(1) {
		margin-left: 0px;
	}

	.destination-content li:nth-of-type(5) {
		margin-left: 0px;
	}

	.rank-info .el-rate__text {
		font-size: 19px;
	}

	.destination-tabs #remenidg.active {
		color: #000;
		position: relative;
		line-height: 46px;
		top: 0px;
		border-bottom: #28b76c 2px solid;
	}

	.hot-destination .destination-tabs li+li {
		margin-left: 40px;
	}

	// 热门游记
	.essencial-diarybg {

		width: 100%;
		height: 1040px;
		background: #FAFAFA;
	}

	.essencial-diary {
		margin-top: 25px;
		width: 1160px;
		margin: 0 auto;
		height: auto;

		.diary-header {
			text-align: center;
			position: relative;
			margin-bottom: 40px;

			h3 {
				font-size: 30px;
				font-weight: 400;
				color: #000;
				margin: auto;
				display: inline-block;
				vertical-align: middle;
			}

			.btn-write-diary:hover {
				background-color: #3dbe7a;
			}

			.btn-write-diary {
				position: absolute;
				width: 100px;
				height: 34px;
				background: #28b76c;
				right: 0;
				top: 5px;

				span {
					display: inline-block;
					vertical-align: middle;
					height: 34px;
					font-size: 14px;
					color: #fff;
					line-height: 34px;
				}

				img {
					display: inline-block;
					vertical-align: middle;
				}
			}
		}
	}

	.see-more-diary {
		width: 200px;
		height: 50px;
		line-height: 50px;
		border: 1px solid #28b76c;
		display: block;
		margin: auto;
		margin-top: 40px;
		text-align: center;
		font-size: 16px;
		color: #28b76c;
		text-decoration: none;
	}

	.see-more-diary:hover {
		background: #11bf79;
		color: white;
	}

	.ess-diary-list ul {
		padding: 0;
		margin: 0;
		margin-left: -25px;
		margin-top: -30px;
		width: 1185px;
		position: relative;
	}

	.ess-diary-list li:hover {
		-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
	}

	.ess-diary-list li {
		width: 370px;
		height: 388px;
		background: #fff;
		list-style: none;
		display: inline-block;
		margin-left: 25px;
		margin-top: 30px;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
	}

	.ess-diary-list ul li .diary-box {
		display: inline-block;
		width: 370px;
		height: 388px;
		text-decoration: none;
	}

	.ess-diary-list .diary-pic {
		display: block;
		width: 100%;
		height: 248px;
		overflow: hidden;
		position: relative;
		z-index: 1;
	}

	.ess-diary-list ul li .diary-box .easing-container {
		overflow: hidden;
		width: 370px;
		height: 248px;
	}

	.diary-box:hover .easing-container img {
		-webkit-transform: scale(1.03);
		transform: scale(1.03);
		-webkit-transition: -webkit-transform .4s linear;
		transition: -webkit-transform .4s linear;
		transition: transform .4s linear;
		transition: transform .4s linear, -webkit-transform .4s linear;
	}

	.ess-diary-list li img {
		display: inline-block;
		width: 100%;
		height: 100%;

	}

	.ess-diary-list .diary-pic .tags-container {
		position: absolute;
		left: 5px;
		bottom: 5px;
		z-index: 10;
	}

	.ess-diary-list .diary-pic .tags-container em {
		font-style: normal;
	}

	.is-essence,
	.is-essence i {
		display: inline-block;
		vertical-align: inherit;
		line-height: 15px;
		font-size: 12px;

		span {
			font-size: 12px;

		}
	}

	.is-essence {
		height: 16px;
		background: -webkit-gradient(linear, left top, left bottom, from(#ff976a), to(#ff7466)) rgba(255, 115, 98, .65);
		background: linear-gradient(180deg, #ff976a, #ff7466) rgba(255, 115, 98, .65);
		-webkit-box-shadow: 0 6px 12px 0 hsla(7, 100%, 70%, .15);
		box-shadow: 0 6px 12px 0 hsla(7, 100%, 70%, .15);
		border-radius: 2px;
		color: #fff;
		padding: 0 4px;
	}

	.ess-diary-list .diary-pic:after {
		content: " ";
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		background: -webkit-gradient(linear, left top, left bottom, from(rgba(42, 54, 63, 0)), to(#06273a));
		background: linear-gradient(180deg, rgba(42, 54, 63, 0), #06273a);
		z-index: 5;
	}

	.ess-diary-list .diary-title {
		margin: 0 auto;
		margin-top: 14px;
		text-decoration: none;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		width: 330px;
		height: 56px;
		font-size: 18px;
		color: #000;
		line-height: 28px;
	}

	.post-and-user {
		position: relative;
		width: 330px;
		margin: 0 auto;
		margin-top: 28px;
	}

	.post-and-user .user-info {
		display: inline-block;
		vertical-align: middle;
		position: relative;
		text-align: left;
		width: 50%;
	}

	.post-and-user .user-info .user-avatar {
		display: inline-block;

		width: 22px;
		float: left;
		height: 22px;
	}

	.post-and-user .user-info .user-avatar img {
		display: block;
		width: 100%;
		position: relative;
		top: -3px;
		border-radius: 50%;
	}

	.post-and-user .user-info .user-link {
		text-decoration: none;
		display: inline-block;
		vertical-align: middle;
		margin-left: 6px;
		float: left;
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .8);
		line-height: 17px;
	}

	.post-and-user .post-info {
		float: right;
		vertical-align: middle;
		position: relative;
		text-align: right;
		width: 50%;
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .4);
		line-height: 17px;
	}

	.post-and-user .post-info img {
		width: 13px;
		height: 9px;
		margin-top: -4px;
		position: relative;
		left: 2px;
	}

	.ess-diary-list li img {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	// 行程路线
	// 热门行程
	.travel-route {
		width: 1160px;
		margin: 0 auto;
		margin-top: 50px;
		margin-bottom: 50px;

		.route-header {
			text-align: center;
			position: relative;

			h3 {
				height: 30px;
				font-size: 30px;
				color: #000;
				line-height: 24px;
				font-weight: 400;
			}

			.btn-write-route {
				display: block;
				width: 116px;
				height: 34px;
				background: #28b76c;
				position: absolute;
				right: 0;
				top: -3px;
				font-size: 14px;
				color: #fff;
				line-height: 34px;
				text-align: center;
				text-decoration: none;

				.jia {
					position: absolute;
					width: 12px;
					height: 12px;
					top: 50%;
					left: 25px;
					margin-left: -6px;
					margin-top: -6px;
				}

				span {
					position: relative;
					display: inline-block;
					padding-left: 10px;
				}
			}
		}

		.route-list {
			margin-top: 46px;

			.route-list-item:hover {
				-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
				box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
			}

			.route-list-item {
				width: 370px;
				height: 394px;
				background: #fff;
				display: inline-block;
				vertical-align: bottom;
				position: relative;
				-webkit-transition: all .2s linear;
				transition: all .2s linear;
			}

			.route-list li {
				list-style: none;
			}

		}
	}

	.route-list .route-tags li+li {
		margin-left: 10px;
	}

	.route-list .route-list-item+.route-list-item {
		margin-left: 25px;
	}

	.route-list .item-pic {
		height: 242px;
		overflow: hidden;
		display: block;
		position: relative;
	}

	.route-list .easing-container {
		overflow: hidden;
		width: 370px;
		height: 242px;
	}

	.route-list .item-pic:hover .easing-container img {
		-webkit-transform: scale(1.03);
		transform: scale(1.03);
		-webkit-transition: -webkit-transform .4s linear;
		transition: -webkit-transform .4s linear;
		transition: transform .4s linear;
		transition: transform .4s linear, -webkit-transform .4s linear;
	}

	.route-list .item-pic img {
		width: 100%;
		display: block;
		z-index: 2;
	}

	.route-list .item-pic .route-info {
		position: absolute;
		bottom: 0;
		padding: 10px;
		color: #fff;
		z-index: 10;
	}

	.route-list .item-pic .route-info .route-days {
		height: 50px;
		font-size: 16px;
		line-height: 16px;
		float: left;
		max-width: 80px;
		bottom: 0;

		em {
			line-height: 50px;
			font-size: 50px;
			font-style: normal;
		}
	}

	.route-list .item-pic .route-title {
		margin-left: 85px;
		padding-left: 10px;
		height: 36px;
		border-left: 1px solid hsla(0, 0%, 100%, .3);
		bottom: -10px;
		position: relative;

		.route-date {
			height: 12px;
			font-size: 12px;
			color: #fff;
			line-height: 12px;
			margin-bottom: 6px;
		}

		.route-name {
			height: 18px;
			font-size: 18px;
			color: #fff;
			line-height: 18px;
			text-decoration: none;
			width: 260px;
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	.route-list .item-pic:after {
		content: "";
		height: 100px;
		width: 100%;
		background: -webkit-gradient(linear, left top, left bottom, from(rgba(42, 54, 63, 0)), to(#06273a));
		background: linear-gradient(180deg, rgba(42, 54, 63, 0), #06273a);
		display: block;
		position: absolute;
		bottom: 0;
		z-index: 5;
	}

	.route-list .route-list-item:hover>.copy-travel-route {
		display: block;
	}

	.route-list .route-list-item .copy-travel-route {
		display: none;
		width: 72px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		text-decoration: none;
		font-size: 14px;
		color: #fff;
		background: #34bb74;
		position: absolute;
		top: 16px;
		left: 16px;
		cursor: pointer;
	}

	.route-list .route-list-item .copy-travel-route img {
		display: inline-block;
		vertical-align: middle;
	}

	.route-list .route-list-item .copy-travel-route span {
		margin-left: 6px;
	}

	.route-list .route-tags {
		margin: 10px 20px;

		li {
			width: 60px;
			height: 24px;
			display: inline-block;
			vertical-align: middle;
			background: rgba(162, 241, 183, .18);
			border-radius: 2px;
			font-size: 12px;
			color: #28b76c;
			line-height: 24px;
			text-align: center;
		}

		li {
			list-style: none;
		}
	}

	.route-list .route-pois {
		margin: 0 20px;
		max-height: 40px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;

		li {
			font-size: 14px;
			color: rgba(0, 0, 0, .6);
			line-height: 20px;
			display: inline-block;
		}

		li {
			list-style: none;
		}
	}

	.user-and-route {
		position: absolute;
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		bottom: 0;
		padding: 0 20px;
		margin-top: 18px;
		margin-bottom: 20px;

		.user-info {
			display: inline-block;
			vertical-align: middle;
			position: relative;

			text-align: left;
			width: 50%;

			.user-avatar {
				display: inline-block;
				vertical-align: middle;
				width: 30px;
				height: 30px;
			}

			img {
				display: block;
				width: 100%;
				border-radius: 50%;
			}

			.user-link {
				text-decoration: none;
				margin-left: 6px;
				height: 17px;
				font-size: 12px;
				color: rgba(0, 0, 0, .8);
				line-height: 17px;
			}
		}

		.post-info {
			width: 50%;
			float: right;
			text-align: right;

			.post-viewed {
				height: 17px;
				font-size: 12px;
				color: rgba(0, 0, 0, .4);
				line-height: 17px;
				display: inline-block;
				vertical-align: middle;
			}
		}
	}

	.post-info .post-copyed,
	.post-info .post-viewed {
		height: 17px;
		font-size: 12px;
		color: rgba(0, 0, 0, .4);
		line-height: 17px;
		display: inline-block;
		vertical-align: middle;
	}

	.post-info .post-viewed {
		background: url(https://fes.qyerstatic.com/FhqEDeY-XCA7539PVHelTWOPhvBX?imageslim) no-repeat 0;
		padding-left: 16px;
	}

	.jia:before {
		width: 12px;
		height: 2px;
		top: 5px;
		left: 0;
	}

	.jia:after,
	.jia:before {
		position: absolute;
		background-color: #fff;
		content: "";
	}

	.jia:after {
		width: 2px;
		height: 12px;
		left: 5px;
	}

	// 穷游商城
	.city-q-shopbg {
		width: 100%;
		height: 950px;
		background: #FAFAFA;
	}

	.city-q-shop {
		margin-top: 70px;
		width: 1160px;
		margin: 0 auto;

		h3 {
			font-size: 30px;
			font-weight: 400;
			color: #000;
			line-height: 30px;
			text-align: center;
			margin-top: 37px;
			margin-bottom: 28px;
		}

		.main-list {

			margin-top: -20px;
			margin-left: -20px;
			position: relative;

			.commodity-item:hover {
				-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
				box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
			}

			.commodity-item {
				display: inline-block;
				vertical-align: top;
				width: 275px;
				height: 340px;
				background: #fff;
				text-decoration: none;
				margin-left: 20px;
				margin-top: 20px;
				-webkit-transition: all .2s linear;
				transition: all .2s linear;

				.commodity-cover {
					display: block;
					overflow: hidden;
					width: 275px;
					height: 206px;
				}
			}

		}
	}

	.commodity-item:hover .commodity-cover img {
		-webkit-transform: scale(1.03);
		transform: scale(1.03);
		-webkit-transition: -webkit-transform .4s linear;
		transition: -webkit-transform .4s linear;
		transition: transform .4s linear;
		transition: transform .4s linear, -webkit-transform .4s linear;
	}

	.commodity-item .commodity-info {
		padding: 11px 16px;
		height: 112px;
		position: relative;
	}

	.commodity-item .commodity-info .link {
		font-size: 18px;
		font-weight: 600;
		color: #323232;
		line-height: 28px;
		height: 56px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin: 0;
	}

	.commodity-item .commodity-info .price {
		font-size: 12px;
		font-weight: 400;
		color: rgba(0, 0, 0, .4);
		line-height: 12px;
		text-align: right;
		margin: 0;
		position: absolute;
		bottom: 15px;
		right: 20px;
	}

	.commodity-item .commodity-info .price em {
		font-size: 16px;
		font-weight: 400;
		color: #ff7366;
		line-height: 12px;
		vertical-align: bottom;
		font-style: normal;
	}

	.category-links {
		width: 275px;
		height: 340px;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.category-links li {
		width: 275px;
		height: 60px;
		background: #fff;
		color: rgba(0, 0, 0, .4);
		position: relative;
		list-style: none;
	}

	.category-links li+li {
		margin-top: 10px;
	}

	.category-links li a {
		width: 100%;
		height: 100%;
		padding: 14px 0;
		display: block;
		text-decoration: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		line-height: 33px;
	}

	// .category-links li .icon {
	//     display: inline-block;
	//     vertical-align: middle;
	//     line-height: 33px;
	//     margin-left: 15px;
	//     height: 33px;
	//     width: 23px;
	//     background: url(https://fes.qyerstatic.com/FthDHi-sU2s-sq4fHoJIOu3peIYC) no-repeat 50%;
	// }
	.category-links li .info {
		display: inline-block;
		vertical-align: middle;
		line-height: 33px;
		margin-left: 6px;
	}

	.category-links li .info h5 {
		font-size: 14px;
		font-weight: 500;
		color: #333;
		line-height: 14px;
		margin: 0;
	}

	.category-links li .icon {
		color: #28b76c;
		margin-left: 8px;
	}


	.category-links li .direct {
		display: inline-block;
		vertical-align: middle;
		line-height: 33px;
		color: #28b76c;
		float: right;
		margin-right: 15px;
		font-style: normal;
	}

	.city-q-shop .more-link:hover {
		background-color: #11bf79;
		color: #fff;
	}

	.city-q-shop .more-link {
		width: 200px;
		height: 50px;
		border: 1px solid #28b76c;
		font-size: 16px;
		font-weight: 400;
		color: #28b76c;
		line-height: 50px;
		text-decoration: none;
		text-align: center;
		display: block;
		margin: auto;
		margin-top: 40px;
	}

	// 客路
	.city-q-klook-bg {
		width: 100%;
		height: 520px;
		background: #FAFAFA;

		.qyer_klook {
			width: 1160px;
			margin: 0 auto;

			.klook_title {
				text-align: center;
				width: 153px;
				color: #333;
				margin: 0 auto;
				padding-top: 30px;

				.klook_logo {
					display: inline-block;
					height: 26px;
					width: 153px;
					background-image: url(https://fes.qyerstatic.com/Fh5LcMy_3YAfWzv5c2SNaDN_SYCq?imageslim);
				}
			}
		}
	}

	.qyer_klook .list_item {
		margin-left: -20px;
		padding-top: 10px;
	}

	.qyer_klook .list_item .item_box {
		text-decoration: none;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
		display: inline-block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-left: 20px;
		background: #fff;
		outline: none;
	}

	.qyer_klook .list_item .item_box .commodity-info {
		padding: 15px;

		color: #323232;
	}

	.qyer_klook .list_item .item_box .commodity-info .title {
		font-size: 18px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		line-height: 24px;
		height: 45px;
		width: 245px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 12px;
	}

	.qyer_klook .list_item .item_box .commodity-info .del_price {
		text-decoration: line-through;
		font-size: 14px;
		color: #bcbcbc;
		font-family: HelveticaNeue;
		margin-bottom: 6px;
	}

	.qyer_klook .list_item .item_box .commodity-info .laster_price {
		color: rgba(0, 0, 0, .4);
		font-size: 12px;
		font-family: PingFangSC-Regular;
		line-height: 12px;

		b {
			font-size: 22px;
			color: #ff5722;
			font-family: HelveticaNeue-Medium;
			font-weight: 500;
		}
	}

	.qyer_klook .list_item .item_box .commodity-info .instant_confirm {
		background: -webkit-gradient(linear, left top, left bottom, from(#f82), to(#ff5722)) rgba(255, 87, 34, .2);
		background: linear-gradient(180deg, #f82, #ff5722) rgba(255, 87, 34, .2);
		width: 70px;
		height: 17px;
		line-height: 13px;
		text-align: center;
		border-radius: 2px;
		vertical-align: bottom;
		display: inline-block;
		color: #fff;
		font-size: 12px;
		padding: 2px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-left: 8px;
	}

	.list-item .item_box .commodity-info .instant_confirm i {
		display: inline-block;
		width: 8px;
		height: 10px;
		background-image: url(https://fes.qyerstatic.com/FodGju4UeDt65XCOvvjqwFIO84hW);
		background-size: cover;
		margin-right: 2px;

	}

	.qyer_klook .look_more {
		width: 200px;
		height: 50px;
		line-height: 50px;
		border: 1px solid #28b76c;
		display: block;
		margin: auto;
		margin-top: 40px;
		text-align: center;
		font-size: 16px;
		color: #28b76c;
		text-decoration: none
	}

	.qyer_klook .look_more:hover {
		background: #28b76c;
		color: white;
	}

	// 酒店攻略
	.hotel-tips-bg {
		width: 100%;
		height: 840px;
		background: white;

		.hotel-tips {
			width: 1160px;
			margin: 0 auto;

			h3 {
				margin: 40px auto;
				text-align: center;
				font-size: 30px;
				font-weight: 400;
				color: #000;
				line-height: 24px;
			}
		}
	}

	.hotel-tips .hotel-input {
		width: 23%;

		margin-right: 20px;
	}

	.hotel-tips {
		/deep/ .el-input__inner {
			height: 50px;

			line-height: 50px;
			border: 1px #21BF6A solid;

		}
	}

	.hotel-tips .citydate {
		/deep/ .el-range-editor .el-input__inner {
			height: 50px;
			line-height: 50px;
		}
	}

	.hotel-tips {
		/deep/ .el-range-editor.el-input__inner {
			width: 57%;
		}
	}

	.hotel-tips .hotel-input {
		/deep/ .el-input__inner:focus {
			border: 1px #21BF6A solid;
		}
	}

	.hotel-tips .desclick {
		width: 180px;
		height: 50px;
		background: #28b76c;
		margin-left: 20px;
	}

	.hotel-favor {
		display: inline-block;
		vertical-align: top;
		width: 730px;

		h4 {
			font-size: 24px;
			color: #000;
			line-height: 34px;
			font-weight: 400;
			padding-bottom: 10px;
		}

		.favor-big-data {
			width: 730px;
			height: 140px;
			background: #fafafa;
			border: 1px solid #ededed;
			position: relative;

			.data-of-qyer {
				width: 420px;
				display: inline-block;
				padding-left: 60px;

				h5 {
					height: 24px;
					font-size: 14px;
					color: rgba(0, 0, 0, .83);
					text-align: center;
					margin-top: 20px;
					margin-bottom: 10px;
					font-weight: 400;
				}

			}

			.data-item {
				display: inline-block;
				vertical-align: top;
				font-size: 14px;
				color: rgba(0, 0, 0, .6);
				line-height: 20px;
				width: 135px;
				text-align: center;

				em {
					font-size: 40px;
					color: rgba(0, 0, 0, .8);
					line-height: 44px;
					font-style: normal;
					font-weight: 700;
				}
			}
		}

	}

	.favor-big-data .data-decor {
		position: absolute;
		bottom: -5px;
		right: 40px;
	}

	.favor-slider-slide {
		width: 230px;
		height: 304px;
		display: inline-block;
		vertical-align: bottom;
		background: #fff;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
	}

	.favor-slider-slide+.favor-slider-slide {
		margin-left: 20px;
	}

	.favor-slider-slide .card-pic {
		width: 230px;
		height: 144px;
		overflow: hidden;
	}



	.Strategybanner .el-carousel__indicator .el-carousel__button {
		background: #E2E2E2;
		padding: 2px 30px;
	}

	.Strategybanner .el-carousel__indicator+.is-active .el-carousel__button {
		background: #21BF6A;
	}

	.Strategybanner .is-active .el-carousel__button {
		background: #21BF6A;
	}

	.favor-slider-slide .card-info {
		padding: 20px 16px;
	}

	.favor-slider-slide .card-info a {
		font-size: 20px;
		color: rgba(0, 0, 0, .8);
		line-height: 20px;
		text-decoration: none;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 195px;
		white-space: nowrap;
		display: inline-block;
	}

	.favor-slider-slide .card-info .area-info {
		margin-top: 10px;
		font-size: 14px;
		color: rgba(0, 0, 0, .4);
		line-height: 14px;
		height: 28px;

	}

	.favor-slider-slide .card-info .price {
		font-size: 12px;
		color: rgba(0, 0, 0, .4);
		line-height: 14px;
		margin-top: 5px;

		em {
			font-size: 30px;
			color: #f18f01;
			line-height: 30px;
			font-style: normal;
		}
	}

	.hotel-hot-area .rank-2 {
		position: relative;
		width: 155px;
		height: 182px;
		background: -webkit-gradient(linear, left top, right top, from(rgba(145, 163, 227, .1)), to(rgba(112, 138, 228, .1)));
		background: linear-gradient(90deg, rgba(145, 163, 227, .1), rgba(112, 138, 228, .1));
	}

	.hotel-hot-area .rank-block {
		padding: 20px;
		-webkit-box-shadow: 0 10px 20px 0 transparent;
		box-shadow: 0 10px 20px 0 transparent;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
		display: inline-block;
		vertical-align: bottom;
		text-decoration: none;
	}

	.hotel-hot-area .rank-block:hover {
		-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
	}

	.hotel-hot-area .rank-2 .rank-block-title {
		line-height: 42px;
		max-width: 155px;
	}

	.hotel-hot-area .rank-block .rank-block-title {
		font-size: 30px;
		color: rgba(0, 0, 0, .8);
		line-height: 30px;
		display: block;
		text-decoration: none;
		font-weight: 700;
		margin-top: 6px;
	}

	.hotel-hot-area .rank-3 {
		position: relative;
		margin-left: 10px;
		float: right;
		width: 155px;
		height: 182px;
		background: -webkit-gradient(linear, left top, right top, from(rgba(239, 140, 68, .1)), to(rgba(232, 133, 44, .1)));
		background: linear-gradient(90deg, rgba(239, 140, 68, .1), rgba(232, 133, 44, .1));
	}


	.hotel-hot-area .rank-block {
		padding: 20px;
		-webkit-box-shadow: 0 10px 20px 0 transparent;
		box-shadow: 0 10px 20px 0 transparent;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
		display: inline-block;
		vertical-align: bottom;
		text-decoration: none;
	}

	.hotel-hot-area .rank-1 {
		position: relative;
		margin-bottom: 10px;
		width: 360px;
		height: 216px;
		background: -webkit-gradient(linear, left top, right top, from(rgba(243, 186, 59, .1)), to(rgba(239, 179, 45, .1)));
		background: linear-gradient(90deg, rgba(243, 186, 59, .1), rgba(239, 179, 45, .1));
	}

	.hotel-hot-area .rank-block {
		padding: 20px;
		-webkit-box-shadow: 0 10px 20px 0 transparent;
		box-shadow: 0 10px 20px 0 transparent;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
		display: inline-block;
		vertical-align: bottom;
		text-decoration: none;
	}

	.hotel-hot-area .rank-3 .rank-block-title {
		line-height: 42px !important;
		max-width: 155px;
	}

	.hotel-hot-area .rank-block span {
		font-size: 14px;
		color: rgba(0, 0, 0, .8);
		line-height: 25px;
	}

	.hotel-hot-area .rank-block em {
		font-size: 18px;
		font-weight: 700;
		font-style: normal;
	}

	.hotel-hot-area .rank-block .rank-block-title {
		font-size: 30px;
		color: rgba(0, 0, 0, .8);
		line-height: 30px;
		display: block;
		text-decoration: none;
		font-weight: 700;
		margin-top: 6px;
	}

	.hotel-hot-area .rank-2:after {
		content: "2";
		position: absolute;
		font-size: 116px;
		font-weight: 700;
		width: 85px;
		height: 116px;
		color: #698fdd;
		opacity: .14;
		display: block;
		bottom: 15px;
		right: -20px;
	}

	.hotel-hot-area .rank-3:after {
		content: "3";
		position: absolute;
		font-size: 116px;
		font-weight: 700;
		width: 85px;
		height: 116px;
		color: #ee8a3f;
		opacity: .14;
		display: block;
		bottom: 15px;
		right: -20px;
	}

	.hotel-hot-area .rank-block .mutiple-line {
		width: 90%;
		-webkit-line-clamp: 2;
		position: absolute;
		bottom: 20px;
		color: #777777;
		height: 90px;
		overflow: hidden; //超出的文本隐藏
		text-overflow: ellipsis; //溢出用省略号显示

		-webkit-box-sizing: border-box;
		box-sizing: border-box;

		.ellipsis-container {
			position: relative;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			color: transparent;
		}
	}

	.more-link {
		color: #21BF6A;
	}

	.hotel-hot-area .rank-1:after {
		content: "1";
		position: absolute;
		width: 99px;
		font-size: 218px;
		font-weight: 700;
		height: 218px;
		color: #f1b634;
		opacity: .14;
		display: block;
		bottom: 28px;
		right: 24px;
	}

	.hotel-hot-area {
		width: 400px;
		float: right;
	}

	.hotel-hot-area {
		display: inline-block;
		vertical-align: top;
		margin-left: 28px;
	}

	.hotel-hot-area .title {
		position: relative;
		padding-bottom: 10px;

		h4 {
			font-size: 24px;
			color: #000;
			line-height: 34px;
			font-weight: 400;
		}
	}

	.hotel-hot-area .title a:hover {
		color: #28b76c;
	}

	.hotel-hot-area .title a {
		font-size: 12px;
		color: rgba(0, 0, 0, .8);
		line-height: 34px;
		display: inline-block;
		position: absolute;
		right: 0;
		top: 0;
		text-decoration: none;
	}

	.more-link-box {
		text-align: center;

		.more-link {
			padding: 0 20px;
			min-width: 200px;
			height: 50px;
			border: 1px solid #28b76c;
			font-size: 16px;
			font-weight: 400;
			color: #28b76c;
			line-height: 50px;
			text-align: center;
			display: inline-block;
			margin: auto;
			margin-top: 40px;
			margin-bottom: 60px;
			text-decoration: none;
		}
	}

	.more-link:hover {
		background-color: #11bf79;
		color: #fff;
	}

	// 特色住宿
	.characteristic-lodge-bg {
		width: 100%;
		text-align: center;
		height: 680px;
		background: #FAFAFA;

		.characteristic-lodge-container {
			width: 1160px;
			margin: 0 auto;

			.characteristic-lodge-header {


				h2 {

					font-size: 30px;
					color: #000;
					text-align: center;

				}
			}
		}
	}

	.characteristicdltab {
		display: none;
	}

	.characteristicdltab.active {
		display: block;
	}

	.characteristic-lodge-container .destination-tabs #remenidg.active {
		color: #000;
		position: relative;
		line-height: 46px;
		top: 0px;
		border-bottom: #28b76c 2px solid;
	}

	.characteristic-lodge-container .destination-tabs li+li {
		margin-left: 40px;
	}

	.characteristicli {
		text-align: left;
		padding: 0;
		margin-right: 20px;
		list-style: none;
		cursor: pointer;
		display: inline-block;
		vertical-align: top;
		width: 275px;
		height: 305px;
		background: #fff;
		-webkit-transition: all .2s linear;
		transition: all .2s linear;
	}

	.characteristicli:nth-child(4) {
		margin-right: 0;
	}

	.airate .el-icon-star-on {
		color: #0073b6 !important;
	}

	.airate .el-rate__text {
		font-size: 18px;
	}

	.characteristicli {
		/deep/ .el-rate {
			width: 50%;
			margin-left: 14px;
			float: left;
			margin-right: 5px;
			margin-top: 10px;
		}
	}

	.characteristicli:hover {
		-webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .04);
	}

	.characteristicli .comment {
		vertical-align: bottom;
		position: relative;
		top: 13px;
		height: 17px;
		font-size: 12px;
		color: #000;


		line-height: 17px;
		float: left;

		margin-left: 6px;
	}

	.characteristicli .row2 {
		margin-top: 17px;
		padding: 0 16px;
		height: 14px;
		font-size: 14px;
		color: rgba(0, 0, 0, .4);
		line-height: 14px;
	}

	.characteristicli .row3 {
		margin-top: 16px;
		padding: 0 16px;

		.row3-left {
			float: left;
			position: relative;

			span {
				color: #888888;
			}

			i {
				display: inline-block;
				width: 14px;
				height: 20px;
				margin-left: 6px;
				background: url(https://fes.qyerstatic.com/FkRuVhNbgLrEoaJEPj1qAmhp_ME_?imageslim) no-repeat;
			}

			.price {
				height: 36px;
				font-size: 30px;
				color: #ff585d;
				line-height: 36px;
			}
		}

		.row3-right {
			position: relative;
			float: right;
			margin-top: 4px;

			img {
				border-radius: 50%;
				vertical-align: middle;
			}

			.name {
				vertical-align: middle;
				margin-left: 11px;
				font-size: 12px;
				color: rgba(0, 0, 0, .8);
				display: inline-block;
				max-width: 70px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}

	.characteristic-lodge-container .show-all {
		display: inline-block;
		width: 200px;
		height: 50px;
		border: 1px solid #28b76c;
		margin-top: 40px;
		line-height: 50px;
		text-decoration: none;
		font-size: 16px;
		color: #28b76c;
	}

	.characteristic-lodge-container .show-all:hover {
		background: #28b76c;
		color: white;
	}
</style>
