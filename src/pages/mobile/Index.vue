<template>
	<el-col :span="24">
		<div class="m-header">
			<div class="m-logo"><img src='../../assets/images/qiongyou/m-logo.svg' /></div>
			<div class="m-searchbox" @click="clicksearch()">
				<i class="search-icon el-icon-search"></i>
				<span>搜索目的地、游记攻略等</span>
			</div>
			<div class="user-info">
				<router-link to="/login">
					<img src="//fes.qyerstatic.com/FurPR8aA_RznD30juuPr3LhFdOiY?imageslim">
				</router-link>
			</div>
		</div>
		<div class="m-serachdiv" v-if="serachdiv">
			<div class="msearch-header">
				<div class="msearch-container">
					<i class="el-icon-search search-icons" @click="handleIconClick"></i>
					<el-autocomplete popper-class="my-autocomplete" v-model="searchvalue" :fetch-suggestions="querySearch" placeholder="搜索目的地、锦囊、游记攻略等"
					 @select="handleSelect">
						<template slot-scope="msearchlist" v-for="(item,index) in msearchlistdata">
							<div>{{msearchlist.item.value}}</div>
						</template>
					</el-autocomplete>
					<i class="el-icon-circle-close circle-close"></i>
				</div>
				<span @click="clicksearch()">取消</span>

			</div>
			<div style="clear:both"></div>
			<div class="search-history" v-if="this.searchhistory.length>0">
				<h4 class="block-title">搜索记录<i class="el-icon-circle-close circle-closes"></i></h4>
				<ul>
				<li class="history-item" v-for='(item,index) in searchhistory' :key='index'>
				<router-link :to="{name:item.historylink,params:{historylinkid:item.historylinkid}}">{{item.historytitle}}</router-link>
				</li>
				</ul>
				</div>
			<div style="clear:both"></div>
			
			<div class="hot-tags">
				<h4 class="block-title">24小时热门话题</h4>
				<ul>
					<li v-for="(item,index) in hotthread" key="index">
						<h5 class="tag-title"># {{item.hotname}}</h5>
						<span class="is-active" v-if="item.hotindex===1">活动中</span>
						<div class="card-wrap">
							<router-link v-for="(item,index) in item.hotthreadimg" key="index" :to="{name:item.hotlink,params:{hotlinkid:item.hotlinkid}}" class="card card-type-1 card-fullview-0">
								<img :src="item.hotimg"></router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
		</div>

		<div class="m-banner">
			<el-carousel :height="mbannerheight+'px'">
				<el-carousel-item v-for="(item,index) in mbanner" :key="index">
					<router-link :to="{name:item.bannerlink,parame:{bannerlinkid:item.bannerlinkid}}">
						<img ref='mbannerheight' @load="imgLoad('0')" :src="item.mbannerimg" title="item.bannertitle" /></router-link>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="m-nav">
			<ul class='m-navul'>
				<li v-for='(item,index) in mnav' :key='index'>
					<router-link :to="{name:item.navlink,parame:{navlinkid:item.navlinkid}}">
						<!-- :to="{name:item.navlink,parame:{navlinkid:item.navlinkid}}" -->
						<img :src="item.navicon">
						<span>{{item.navspan}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="m-zhekou">
			<div class="m-zhekouhead">主打折扣</div>
			<ul class="m-zhekouProduct-list">
				<li v-for="(item,index) in mzhekou">
					<router-link :to="{path:'',parame:{zhekouid:item.zhekouid}}">
						<div class="pic">
							<img width="100%" :src="item.zhekouimg" lazy="loaded">
						</div>
						<p>{{item.zhekoudsc}}</p>
						<p class="price"><em>{{item.zhekouprice}}</em>元起</p>
					</router-link>
				</li>
				<li class="read-more">
					<router-link to="">
						<span class="icon"></span>
						<p class="text">千款折扣<br>查看更多</p>
					</router-link to="">
				</li>
			</ul>
		</div>
		<div class="m-jingxuan">
			<div class="m-jingxuanhead">精选玩乐</div>
			<ul class="m-jingxuanlist">
				<li v-for="(item,index) in mjingxuan" :key="index">
					<router-link :to='{name:item.jingxuanlink,parame:{jingxuanlinkid:item.jingxuanlinkid}}'>
						<img :src="item.jingxuanicon">
						<span>{{item.jingxuandsc}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="m-gonglue">
			<div class="m-gongluehead">精选攻略</div>
			<waterfall :col='col' :data="mgonglue">
				<div class="cell-item" v-for="(item,index) in mgonglue" :key='index'>
					<img :lazy-src='item.mgonglueimg' alt="加载错误" class="gonglueimg" />
					<img src="../../assets/images/qiongyou/mgonglue.svg" class="gonglue_svg">
					<span class="mgonglue_youji" v-if="item.mgonglueyouji==1">游记</span>
					<div class="content-box">
						<p class="title">{{item.mgongluedsc}}</p>
						<div class="other-box">
							<div class="author">
								<i class="avatar" :style="{background:'url('+item.mgonglueavater+')'}"></i>
								<span class="name">{{item.mgongluename}}</span></div>
							<div class="nums">
								<i class="like-icon"><img src="../../assets/images/qiongyou/love_3_1.png" class="iconimg"></i>
								<span class="like-nums">{{item.mgongluepinglun}}</span>
							</div>
						</div>
					</div>
				</div>
				<!-- @click="loadmore" -->
			</waterfall>
			<div class="load-more"><span>加载更多内容</span></div>
		</div>
	</el-col>
</template>
<script>
	export default {
		name: 'index',
		data() {
			return {
				serachdiv: false,
				mbannerheight: '',
				mbanner: [],
				mnav: [],
				mzhekou: [],
				mjingxuan: [],
				mgonglue: [],
				col: 2,
				mgongluenumber: '10',
				msearchlistdata: [],
				searchvalue: '',
				searchvalues: '',
				hotthread:[],
				searchhistory:[],

			}
		},
		created() {
			this.buildmbanner();
			this.buildmnav();
			this.buildmzhekou();
			this.buildmjingxuan();
			this.buildmgonglue();
            this.buildhotthread();
			this.buildsearchhistory();
		},

		mounted() {
			this.imgLoad();
			window.addEventListener('resize', () => {
				this.mbannerheight = this.$refs.mbannerheight[0].height
				this.imgLoad();
			}, false)
		},
		mounted() {
			this.msearchlistdata = this.searchload();
		},
		methods: {
			querySearch(queryString, cb) {
				var msearchlistdata = this.msearchlistdata;
				var results = queryString ? msearchlistdata.filter(this.createFilter(queryString)) : msearchlistdata;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (msearchlistdata) => {
					return (msearchlistdata.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			searchload() {
				this.axios.get('/api/buildmsearchlistdata').then(res => {
					this.msearchlistdata = res.data.data
				})
			},
			// 头部点击搜索提交
			handleSelect(item) {
				console.log(item.value)
				this.axios.get('/api/buildmsearchlistdata', {
					params: {
						searchdata: item.value
					},
				}).then(res => {

				})

			},
			handleIconClick() {
				this.axios.get('/api/buildmsearchlistdata', {
					params: {
						searchdata: this.searchvalue
					},
				}).then(res => {

				})
			},


			clicksearch() {
				this.serachdiv = !this.serachdiv
			},
			// scroll(scrollData){
			//              console.log(scrollData)
			//          },
			//          switchCol(col){
			//              this.col = col
			//              console.log(this.col)
			//        },

			imgLoad() {
				this.$nextTick(() => {
					this.mbannerheight = this.$refs.mbannerheight[0].height

				})
			},
			buildmbanner() {
				this.axios.get('/api/buildmbanner').then(res => {
					this.mbanner = res.data.data
				})
			},
			buildmnav() {
				this.axios.get('/api/buildmnav').then(res => {
					this.mnav = res.data.data
				})
			},
			buildmzhekou() {
				this.axios.get('/api/buildmzhekou').then(res => {
					this.mzhekou = res.data.data
				})
			},
			buildmjingxuan() {
				this.axios.get('/api/buildmjingxuan').then(res => {
					this.mjingxuan = res.data.data
				})
			},
			buildmgonglue() {
				this.axios.get('/api/buildmgonglue'
					//,{
					// 		 params:{
					// 		 newnumber:'12'
					// 	 },

				).then(res => {
					this.mgonglue = res.data.data
				})
			},
			buildhotthread(){
				this.axios.get('/api/buildhotthread'
					//,{
					// 		 params:{
					// 		 newnumber:'12'
					// 	 },
				
				).then(res => {
					this.hotthread = res.data.data
				})
			},
			buildsearchhistory(){
					this.axios.get('/api/buildsearchhistory'
					//,{
					// 		 params:{
					// 		 newnumber:'12'
					// 	 },
				
				).then(res => {
					this.searchhistory = res.data.data
				})
			}
			//  loadmore(){
			// 	 this.axios.get('/api/buildmgonglue',{
			// 		 params:{
			// 		 concatnumber:this.mgongluenumber
			// 	 },
			// 	 }).then(res => {
			// 	 	this.mgonglue = res.data.data
			// 		 this.mgonglue = this.mgonglue.concat(this.data)
			// 	 })
			//      
			// },
		},

	}
</script>

<style lang="scss">
	.msearch-header {
		/deep/ .el-input__inner {
			background: #eee;
			height: 0.8rem;
			line-height: 0.8rem;
			border: none;

		}

		/deep/ .el-autocomplete {
			position: relative;
			display: inline-block;
			width: 100%;
		}
	}

	.m-serachdiv {
		position: fixed;
		top: 0;
		z-index: 2000;
		width: 100%;
		height: 100vh;
		background: white;
		-webkit-animation-name: fadeIn;
		-moz-animation-name: fadeIn;
		-ms-animation-name: fadeIn;
		-o-animation-name: fadeIn;
		animation-name: fadeIn;
		/*动画名称*/
		-webkit-animation-duration: 0.5s;
		/*动画持续时间*/
		-webkit-animation-iteration-count: 1;
		/*动画次数*/
		-webkit-animation-delay: 0s;

		/*延迟时间*/
		.search-history {
   padding: 0.5rem 0.4rem 0px;

  
    margin-top: 1rem;
	h4{
		color: rgba(0, 0, 0, 0.4);
		height: 0.6rem;
		
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		font-size: 0.35rem;
		margin-bottom: 0.25rem;
		position: relative;
		.circle-closes{
			float:right;
		}
	}
	ul{
		list-style:none;
	.history-item {
    display: inline-block;
    vertical-align: middle;
    padding: 0 .32rem;
    
    height: 0.6rem;
    line-height: .6rem;
    font-size: 0.26rem;
    border-radius: 0.25rem;
    background-color: #ededed;
    overflow: hidden;
    max-width: 2.78rem;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 0.2rem;
	a{
		color:#000;
	}
}
	}
}
		.hot-tags {
			margin-top: 0.5rem;
			padding: 0.88rem 0.4rem 0px;
			box-sizing: border-box;

			.block-title {
				color: rgba(0, 0, 0, 0.4);
				height: 0.6rem;

				border-bottom: 1px solid rgba(0, 0, 0, 0.06);
				font-size: 0.35rem;
				margin-bottom: 0.25rem;
				position: relative;
			}

			ul {
				list-style: none;

				li {
						margin-top: 0.5rem;
					.card-wrap {
						margin-top: 5px;
						width: 100%;
						display: flex;
						justify-content: space-between;

						.card {
							display: inline-block;
							position: relative;
							border-radius: 0.16rem;
							overflow: hidden;
							width: 3rem;

							img {
								width: 100%;
								height: 100%;
							}
						}
					}

					.tag-title {
						color: #000;
						font-size: 0.38rem;
						line-height: 0.36rem;
						height: 0.36rem;
						display: inline-block;
						vertical-align: middle;
						font-weight: 700;

					}

					.is-active {
						display: inline-block;
						line-height: 0.56rem;
						height: 0.56rem;
						color: #000;
						vertical-align: middle;
						font-size: 0.18rem;
						padding: 0 .1rem;
						border-radius: 0.18rem;
						background-color: #f9ea2e;
						overflow: hidden;
						margin-left: 0.12rem;
						font-weight: 700;
					}
				}
			}
		}

		.msearch-header {
			padding: 0.19rem 0.4rem;
			width: 100%;
			height: 0.88rem;
			box-sizing: border-box;
			line-height: 0.8rem;
			background-color: #fff;
			position: fixed;
			z-index: 999;
			display: flex;
			flex: 1;
			justify-content: space-between;
			font-size: 0;

			.msearch-container {
				display: flex;
				flex: 1;
				padding-right: 0.2rem;
				justify-content: space-between;
				align-items: center;
				height: 0.8rem;
				line-height: 0.8rem;
				border-radius: 0.5rem;
				background: #eee;
				overflow: hidden;
				position: relative;

				.search-icons {
					position: relative;
					left: 9px;
					color: #000000;
					font-weight: bold;
					z-index: 1000;
				}

			}

			span {
				display: inline-block;
				color: #000;
				font-size: 0.38rem;
				flex: 0 1 0.8rem;
				width: 0.8rem;
				padding-left: 0.1rem;
				padding-right: 0.04rem;
			}
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
			/*初始状态 透明度为0*/


		}

		50% {
			opacity: 0;
			/*中间状态 透明度为0*/
		}

		100% {
			opacity: 1;
			/*结尾状态 透明度为1*/


		}

	}

	.m-header {
		padding: 7px 15px;
		width: 100%;
		height: 44px;
		box-sizing: border-box;
		line-height: 30px;
		background-color: #fff;
		position: relative;
		display: flex;
		justify-content: space-between;

		.user-info {
			align-self: flex-end;
			width: 28px;
			height: 28px;
			line-height: 30px;
			vertical-align: middle;
			position: relative;
			flex: 0 1 28px;

			a {
				display: block;
				width: 28px;
				height: 28px;
				border-radius: 50%;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
				}
			}
		}

		.m-searchbox {
			align-self: center;
			height: 30px;
			flex: 1;
			margin-left: 10px;
			margin-right: 10px;
			overflow: hidden;
			border-radius: 15px;
			background-color: #f0f0f0;
			padding: 0 18px;

			span {
				font-size: 14px;
				display: inline-block;
				vertical-align: middle;
				margin-left: 8px;
				color: #323232;
			}

			.search-icon {
				color: #323232;
				font-weight: 600;
			}
		}

		.m-logo {
			width: 63px;
			flex: 0 1 63px;
			height: 30px;

			img {
				display: inline-block;
				height: 20px;
				line-height: 30px;
				vertical-align: middle;
			}
		}
	}

	.m-banner {
		min-width: 300px;
		max-width: 640px;
		overflow: hidden;

		/deep/ .el-carousel {
			overflow: hidden;
		}

		img {
			width: 100%;

		}
	}

	.m-nav {
		margin-top: 12.5px;

		.m-navul {
			display: flex;
			list-style: none;
			flex-wrap: wrap;

			li {
				box-sizing: border-box;
				padding: 5px;
				width: 20%;

				a {
					display: block;

					img {
						width: 100%;
						margin: 0 auto;
					}

					span {
						display: block;
						width: 100%;
						font-size: 12px;
						margin-top: -7px;
						text-align: center;
						color: rgba(0, 0, 0, .8);
						font-weight: 500;
					}
				}
			}
		}
	}

	.m-zhekou {
		margin-top: 25px;
		overflow: hidden;

		.m-zhekouhead {
			position: relative;
			height: 30px;
			font-size: 20px;
			line-height: 30px;
			text-align: left;
			color: #000;
			padding-left: 15px;
			padding-bottom: 8px;
			font-weight: 700;

		}

		.m-zhekouProduct-list {
			box-sizing: border-box;
			width: 100%;
			margin-top: 10px;
			padding: 0 15px;
			overflow-x: auto;
			overflow-y: hidden;
			white-space: nowrap;

			.read-more {
				display: inline-flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				vertical-align: top;
				margin-left: 10px;
				width: 115px;

				border: none;
				text-align: center;

				.icon {
					display: block;

					width: 48px;
					height: 48px;
					margin: 0 auto;
					background: url('../../assets/images/qiongyou/arrow_right_1.png')
				}

				p {
					font-weight: 400;
					font-size: 0.35rem;
				}

			}

			li {
				display: inline-block;
				box-sizing: border-box;
				width: 4.35rem;
				height: 4.85rem;
				border: 1px solid rgba(0, 0, 0, 0.1);
				border-radius: 10px;
				background: #fff;
				margin-right: 9px;
				overflow: hidden;

				a {
					display: block;

					.pic {
						position: relative;
						width: 100%;
						height: 0;
						padding-top: 66.66%;

						img {
							position: absolute;
							top: 0;
							left: 0;
							vertical-align: top;
							width: 100%;
							height: 100%;
						}
					}

					p {
						height: 0.85rem;
						overflow: hidden;
						margin-top: 8px;
						font-size: 15px;
						line-height: 0.45rem;
						color: #1f2023;
						width: 100%;
						padding: 0 8px;
						box-sizing: border-box;
						white-space: normal;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-weight: 600;
					}

					.price {
						margin-top: 0.15rem;
						font-size: 12px;
						height: 35px;
						color: rgba(31, 32, 35, 0.4);

						em {
							font-size: 0.45rem;
							color: #ff7467;
							font-family: special;
						}

					}

				}
			}
		}
	}

	.m-jingxuan {
		margin-top: 15px;

		.m-jingxuanhead {
			position: relative;
			height: 30px;
			font-size: 20px;
			line-height: 30px;
			text-align: left;
			color: #000;
			padding-left: 15px;
			padding-bottom: 8px;
			font-weight: 700;
		}

		.m-jingxuanlist {
			display: flex;
			flex-wrap: wrap;
			padding: 0 15px;

			li {
				flex: 0 0 33.33%;
				width: 33.33%;
				height: 55px;
				box-sizing: border-box;
				display: flex;

				align-items: center;
				justify-content: center;
				margin: 0 auto;

				a {
					display: block;
					position: relative;
					width: 95%;
					height: 45px;
					padding: 5px;
					border: 1px solid rgba(0, 0, 0, 0.1);
					box-sizing: border-box;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
					border-radius: 6px;
					font-size: 16px;

					line-height: 30px;
					color: rgba(0, 0, 0, 0.8);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;

					img {
						width: 0.9rem;
						height: 0.7rem;
						position: absolute;
						right: 0.06rem;
						bottom: 0;
						display: block;
					}

					span {
						color: rgba(0, 0, 0, 0.8);
						font-size: 0.35rem;
					}
				}
			}
		}
	}

	.m-gonglue {
		overflow: hidden;
		margin-top: 15px;
		position: relative;
		margin: 13px 13px 0;
		box-sizing: border-box;

		.m-gongluehead {
			position: relative;
			height: 30px;
			font-size: 20px;
			line-height: 30px;
			text-align: left;
			color: #000;
			padding-bottom: 8px;
			font-weight: 700;
		}

		.vue-waterfall-column:nth-of-type(even) .cell-item {
			padding: 0 6px 0 0; //奇数div
		}

		.vue-waterfall-column:nth-of-type(odd) .cell-item {
			padding: 0 0 0 6px; //偶数div
		}

		.cell-item {
			position: relative;
		}

		.cell-item .gonglueimg {
			border-radius: 8px;
			width: 100%;
			height: 100% !important;
		}

		.vue-waterfall-column:nth-of-type(even) .cell-item .mgonglue_youji {
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 8px 0 8px 0;
			color: #fff;
			background: linear-gradient(90deg, #ff5e62, #f96);
			background: -webkit-linear-gradient(right, #ff5e62, #f96);
			display: block;
			text-align: center;
			width: 1rem;
			height: 0.5rem;
			line-height: 0.5rem;
			font-size: 0.2rem;
		}

		.vue-waterfall-column:nth-of-type(odd) .cell-item .mgonglue_youji {
			display: block;
			position: absolute;
			left: 6px;
			top: 0;
			border-radius: 8px 0 8px 0;
			color: #fff;
			background: linear-gradient(90deg, #ff5e62, #f96);
			background: -webkit-linear-gradient(right, #ff5e62, #f96);
			display: block;
			text-align: center;
			width: 1rem;
			height: 0.5rem;
			line-height: 0.5rem;
			font-size: 0.2rem;
		}

		.vue-waterfall-column:nth-of-type(even) .cell-item .gonglue_svg {
			position: absolute;
			right: 9px;
			top: 0;
			z-index: 1000;
			width: 0.8rem;
			height: 0.8rem;
		}

		.vue-waterfall-column:nth-of-type(odd) .cell-item .gonglue_svg {
			position: absolute;
			right: 4px;
			top: 0;
			z-index: 1000;
			width: 0.8rem;
			height: 0.8rem;
		}

		.cell-item {
			margin-bottom: 15px;

			.content-box {
				width: 100%;
				margin-top: .1rem;

				.title {
					height: 1rem;
					font-size: 14px;
					line-height: 0.5rem;
					color: #000;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					font-weight: 600;
				}

				.other-box {
					display: flex;
					justify-content: space-between;
					font-size: 0;
					height: 0.36rem;

					.author {
						display: inline-block;
						vertical-align: middle;

						.name {
							display: inline-block;
							vertical-align: middle;
							font-size: 0.22rem;
							line-height: 0.6rem;
							color: rgba(0, 0, 0, 0.4);
						}

						.avatar {
							display: inline-block;
							vertical-align: middle;
							width: .36rem;
							height: .36rem;
							margin-right: .1rem;
							border-radius: 50%;
							overflow: hidden;
							background: url(//fes.qyerstatic.com/FurPR8aA_RznD30juuPr3LhFdOiY?imageslim=) no-repeat 50%;
							background-size: 100%;

						}
					}

					.nums {
						display: inline-block;
						color: #666;
						vertical-align: middle;
						font-family: special;

						span {
							font-size: 0.32rem;
							line-height: 0.36rem;
							padding-top: 3px;
						}

						.like-icon .iconimg {
							position: relative;
							top: 2px;
							width: 13px !important;
						}
					}
				}

			}
		}

		.load-more {
			text-align: center;
			margin-top: 0.8rem;
			margin-bottom: 0.3rem;

			line-height: 14px;
			color: #0cbf79;

			span {
				font-size: 16px;
			}
		}
	}
</style>
