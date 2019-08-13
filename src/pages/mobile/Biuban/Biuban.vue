<template>
	<el-col :span="24">
		<div class="Biuban_header">
			<img src="https://fes.qyerstatic.com/Fm4HsBIkKgTXE2ouOZ-lK6CuDiVX?imageslim=" class="Bb_header_img">
			<span>Biu伴!</span>
			<a>{{biubanrest}}</a>
		</div>
		<div class="Biuban_shuaixuan">

			<span class="didian">
				{{place}}<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
			</span>

			<el-dropdown trigger="click" placement='bottom' class="themelist">
				<span class="el-dropdown-link" v-bind:class='{active: isActiveTheme}'>
					{{theme | themelength}}<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item v-for="(item,index) in themedata" id="theme" :class="index === base_index?'active':''"
					 @click.native="changeThemeIndex(index)">{{item.themed}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dropdown trigger="click" placement='bottom'>
				<span class="el-dropdown-link" v-bind:class='{active: isActiveTime}'>
					{{time | timelength}}<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item v-for="(item,index) in timedata" :class="index === base_indextime?'active':''" @click.native="changeTimeIndex(index)">{{item.timed}}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="biubanlist">
			<waterfall :col='col' :biubanlist="biubanlist" @loadmore="loadmore">
				<div class="cell-item" v-for="(item,index) in biubanlist">
					<img :src='item.biubanlistbg'alt="加载错误" class="biubanlist_img" /> <!-- 背景 -->
					<div class="biubanlist_tag"><span>一起去旅游</span></div>
					<div class="biubanlist_avter"><img :src="item.biubanlistavter" /></div>
					<p class="biubanlist_country">{{item.biubanlistplace}}</p>
					<p class="biubanlist_time">{{item.biubanlisttime}}</p>
					<div class="biubanlist_dsc">{{item.biubanlistdsc}}</div>
				</div>
				<!-- @click="loadmore" -->
			</waterfall>
		<!-- 	<div class="load-more" @click="loadmore"><span>加载更多内容</span></div> -->
		</div>
		<router-link to="" class="biuban_fabu">发布Biu伴</router-link>
	</el-col>
</template>

<script>
	export default {
		filters: {
			themelength: function(value) {
				if (!value) return ''
				if (value.length > 5) {
					return value.slice(0, 5) + '...'
				}
				return value
			},
			timelength: function(value) {
				if (!value) return ''
				if (value.length > 5) {
					return value.slice(0, 5) + '...'
				}
				return value
			}
		},
		data() {
			return {
				biubanrest: '重置',
				place: '地点',
				theme: '主题',
				time: '时间',
				themedata: [],
				timedata: [],
				base_index: 0,
				base_indextime: 0,
				isActiveTheme: false,
				isActiveTime: false,
				col: 2,
				biubanlist: [],

			}
		},
		created() {
			this.buildtheme();
			this.buildtimedata();
			this.buildbiubanlist();
		},
		methods: {
			buildtheme() {
				this.axios.get('/api/buildtheme'
					// ,{
					// 	params:{
					// 		themeData:this.theme
					// 	}
					// }
				).then(res => {
					this.themedata = res.data.data
				})
			},
			buildtimedata() {
				this.axios.get('/api/buildtimedata'
					// ,{
					// 	params:{
					// 		timeData:this.time
					// 	}
					// }
				).then(res => {
					this.timedata = res.data.data
				})
			},
			buildbiubanlist(){
				this.axios.get('/api/buildbiubanlist'
					
				).then(res => {
					this.biubanlist = res.data.data
				})
				},
			changeThemeIndex(index) {
				this.base_index = index
				var v = this.themedata[index].themed;
				this.theme = v;
				this.isActiveTheme = true //控制theme的字体颜色
				//this.buildtheme()
			},
			
			changeTimeIndex(index) {

				this.base_indextime = index
				var v = this.timedata[index].timed;
				this.time = v
				this.isActiveTime = true //控制time的字体颜色

				//this.buildtimedata()
			},
			loadmore(index) {

				this.biubanlist = this.biubanlist.concat(this.biubanlist)
			}
		},
	}
</script>

<style lang="scss">
	
	.Biuban_header {
		height: 0.7rem;
		padding: 0.4rem 0.35rem;
		position: relative;

		.Bb_header_img {
			width: 1.73rem;
			height: 0.53rem;
		}

		span {
			font-family: "biufont" !important;
			position: absolute;
			left: 50%;
			width: 2rem;
			font-weight: bold;
			font-size: 0.5rem;
			margin-left: -1rem;
			text-align: center;
			color: #000;
		}

		a {
			float: right;
			border: 0.02rem solid #000;
			border-radius: 0.35rem;
			font-size: 0.33rem;
			color: #000;
			width: 1.1rem;
			text-align: center;
			padding: 0.12rem;
		}
	}

	.Biuban_shuaixuan {
		width: 100%;
		overflow: hidden;
		border-bottom: 0.01rem solid #d8d8d8;

		/deep/ .el-dropdown {
			font-weight: bold;
			font-size: 0.45rem;
			text-align: center;
			float: left;
			width: 33%;
			color: #000;
		}

		/deep/ .el-dropdown-link {

			font-size: 0.45rem;
		}

		/deep/ .el-dropdown-link.active {

			color: #ff168f;
		}

		.didian {
			font-weight: bold;
			height: 0.8rem;
			float: left;
			font-size: 0.45rem;
			width: 33%;
			text-align: center;
			display: inline-block;
			color: #000;
		}
	}

	.el-dropdown-menu {
		/deep/.el-dropdown-menu__item {
			width: 100%;
			color: #000;
			line-height: 1.3rem;
			font-size: 0.5rem;
			white-space: nowrap;
			overflow: hidden;
			font-weight: 600
		}
	}

	.el-dropdown-menu {
		/deep/ .el-dropdown-menu__item.active {
			color: #ff168f;
		}
	}
.biubanlist .vue-waterfall-column:last-child .cell-item{
	float:right;
}
	.biubanlist {
		width: 95%;
		margin: 15px auto;
		height: auto;
		

		.cell-item {
			position: relative;
			width: 97.5%;
			height: 6.5rem;
			border-radius: 0.15rem;
			margin-bottom: 0.18rem;
			overflow: hidden;
			position: relative;

			.biubanlist_tag {
				left: 0;
				right: 0;
				position: absolute;
				text-align: center;
				top: 0.4rem;

				span {
					height: 0.65rem;
					line-height: 0.65rem;
					border-radius: 12.5px;
					background-color: #fff;
					padding: 1px 7.25px 0;
					font-size: 0.26rem;
					color: #000;
					mix-blend-mode: screen;
					display: inline-block;
					vertical-align: middle;
					font-weight: 700;
				}
			}

			.biubanlist_avter {
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 100%;
				border: 0.03rem solid #fff;
				box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, .3);
				left: 50%;
				position: absolute;
				top: 1.3rem;
				overflow: hidden;
				margin-left: -0.7rem;

				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.biubanlist_country {
				position: absolute;
				color: #fff;
				text-shadow: 0 0 0.03rem rgba(0, 0, 0, .3);

				text-shadow: 0 0 3px rgba(0, 0, 0, .3);
				top: 2.8rem;
				left: 0.3rem;
				font-size: 0.45rem;
				right: 0.2rem;
				padding-bottom: 0.42rem;
			}

			.biubanlist_time {
				position: absolute;
				color: #fff;
				top: 3.5rem;
				left: 1rem;
				font-size: 14px;
				text-align: center;
			}

			.biubanlist_dsc {
				position: absolute;

				color: #fff;
				font-size: 0.34rem;
				line-height: 0.56rem;
				bottom: 0.22rem;
				left: 0.3rem;
				right: 0.2rem;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
			}
		}
	}
	.biuban_fabu{
	position: fixed;
	left: 50%;
	bottom: .6rem;
	margin-left: -1.5rem;
	width: 3.1rem;
	height: 1rem;
	border-radius: 1rem;
	background-image: linear-gradient(90deg,#ff7e32,#ff00a3);
	box-shadow: 0 10px 20px 0 rgba(255,55,114,0.3);
	color: #fff;
	line-height: 1rem;
	font-size: 0.42rem;
	text-align:center;
	box-sizing: border-box;
	z-index: 100;
	}
</style>
