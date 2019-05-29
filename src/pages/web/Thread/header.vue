<template>
	<el-col :span="24">
		<div class="header">
			<div class="q-header-nav-wrapper">
				<a href="//www.qyer.com" data-bn-ipg="head-logo"><img src="../../../assets/images/qiongyou/logo.png" width="76"
					 height="36"></a>
				<ul class="q-header-nav">
					<li class="nav-list nav-list-dandu">

						<router-link to="/Destination" class="sba"><span>
								目的地
							</span></router-link>
					</li>
					<li class="nav-list nav-list-dandu">
						<span>
							锦囊
						</span>
					</li>
					<li class="nav-list">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link" style="color:#10b041;">
								社区<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>
									<router-link v-popover:popover4 to="/thread" style="color: #606266;"><i class="el-icon-tickets"></i> 旅行论坛</router-link>


								</el-dropdown-item>
								<el-dropdown-item><router-link style="color: #606266;" to="/Thread_Zhuanlan">旅行专栏<em class="tra_flag">NEW</em></router-link></el-dropdown-item>
								<el-dropdown-item>旅行问答</el-dropdown-item>
								<el-dropdown-item>JNE旅行生活美学</el-dropdown-item>
								<el-dropdown-item>Biu伴(结伴而行)</el-dropdown-item>
								<el-dropdown-item>分责任的旅行</el-dropdown-item>
								<el-dropdown-item>特别策划</el-dropdown-item>
								<el-dropdown-item>旅行精选视频</el-dropdown-item>

							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="nav-list nav-list-dandu">
						<span>
							行程助手
						</span>
					</li>
					<li class="nav-list">
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								商城<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>机场自由行</el-dropdown-item>
								<el-dropdown-item>当地玩乐</el-dropdown-item>
								<el-dropdown-item>签证</el-dropdown-item>
								<el-dropdown-item>保险</el-dropdown-item>
								<el-dropdown-item>租车自驾</el-dropdown-item>
								<el-dropdown-item>邮轮</el-dropdown-item>
								<el-dropdown-item>河轮</el-dropdown-item>
								<el-dropdown-item>私人订制</el-dropdown-item>
								<el-dropdown-item>欧洲铁路</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="nav-list" placement="bottom-start">
						<el-dropdown>
							<span class="el-dropdown-link">
								酒店.民宿<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>酒店</el-dropdown-item>
								<el-dropdown-item>爱彼迎</el-dropdown-item>
								<el-dropdown-item>华人旅馆</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="nav-list" placement="bottom-start">
						<el-dropdown>
							<span class="el-dropdown-link">
								独家深度<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>特色长线</el-dropdown-item>
								<el-dropdown-item>独家日游</el-dropdown-item>
								<el-dropdown-item>Q-HOME</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="nav-list" placement="bottom-start">
						<el-dropdown>
							<span class="el-dropdown-link">
								穷游APP<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>穷游APP</el-dropdown-item>
								<el-dropdown-item>穷游助手APP</el-dropdown-item>
								<el-dropdown-item>穷游锦囊APP</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
				</ul>

			</div>
			<div class="q-header-user-wrapper">
				<div class="q-header-search">
					<!-- 
							<input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容">
							<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i> -->
					<form>
						<input name="keyword" type="text"  v-model="searchheader" autocomplete="off" value="" class="txt-search">
						<i class="el-icon-search" @click="seachbtn()"></i>
					</form>


					</el-form>
				</div>
				<span class="q-header-cut">|</span>
				<div class="q-header-user-status">
					<div class="login-wrap">
						<router-link to=""><img src="../../../assets/images/qiongyou/QQ.png" style="vertical-align: middle;"></router-link>
						<router-link to=""><img src="../../../assets/images/qiongyou/weibo.png" /></router-link>
						<router-link to=""><img src="../../../assets/images/qiongyou/weixin.png" /></router-link>
						<router-link to="/registe" class="login-link">注册</router-link>
						<router-link to="login" class="login-link">登录</router-link>
					</div>
				</div>
			</div>
		</div>
		<el-popover ref="popover4" placement="right-start" width="614px" trigger="hover">
			<div class="q-header-layer">
				<div class="q-layers">
					<div class="section-title">
						<router-link class="allsection" to='/Thread'>全部版块 <i class="el-icon-arrow-right"></i></router-link>
						<span>热门版块</span>
					</div>
					<div style="clear: both;"></div>
					<dl class="section-item" v-for="(item,index) in dtdl" :key="index">
						<dt>{{item.dtname}}</dt>
						<dd>
							<router-link v-for="(item,index) in item.dl" :key="index" class="dda" :to="{ name:item.link, params: { linkid: item.linkid}}">{{item.dlname}}</router-link>
						</dd>
					</dl><!-- section-item -->
				</div><!-- q-layers -->
			</div>
		</el-popover>
	</el-col>
</template>
<style lang="scss" scoped>
	.tra_flag{
		    display: inline-block;
    margin-left: 4px;
    padding: 0 4px;
    height: 20px;
    line-height: 20px;
    background: #FF6553;
    color:white;
    font-size: 12px;
    font-weight: 700;
    vertical-align: 2px;
	font-weight: normal;
	}
	.q-header-layer .q-layers {
		padding: 0 20px;
		width: 570px;


		.section-title {
			padding: 8px 0;
			height: 30px;
			line-height: 30px;

			.allsection {
				float: right;
				font-size: 14px;
				color: #636363;
				transition: all .2s ease-in-out;
			}

			span {
				float: left;
				color: #323232;
				font-size: 16px;
			}
		}

		.section-item {
			border-top: 1px dashed #ededed;
			padding-left: 90px;
			line-height: 26px;

			dt {
				float: left !important;
				margin-left: -90px;
				padding-top: 8px;
				font-size: 16px;
				color: #323232;
			}

			dd {
				padding-top: 5px;
				padding-bottom: 5px;

				a {
					display: inline-block;
					padding: 5px 5px 0;
					height: 25px;
					line-height: 25px;
					border-radius: 3px;
					font-size: 14px;
					color: #636363;
					white-space: nowrap;
				}


			}

		}

		//section-item
	}

	.q-header-layer .q-layers .section-item dd a.hover {
		background: #3f9f5f;
	}

	.q-header-user-wrapper {
		float: right;
		margin-top: 10px;
		margin-right: 30px;
	}

	.q-header-search {
		float: left;
		position: relative;
		margin-top: 7px;
		padding: 0 23px 0 9px;
		width: 20px;
		height: 20px;
		border-radius: 3px;
		background: transparent;
		white-space: nowrap;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.q-header-user-wrapper .q-header-search {

		padding: 4px 24px 4px 6px;
	}

	.q-header-search.active,
	.q-header-search:hover {
		width: 188px;

	}

	.q-header-search.active,
	.q-header-search:hover {
		width: 104px;
		background: #fff;
	}

	.q-header-search .txt-search {
		width: 100%;
		height: 20px;
		font-size: 14px;
		border: 0;
		background-color: transparent;

	}

	.q-header-search .el-icon-search {
		font-size: 18px;
	}

	.q-home .q-header-cut {
		margin-right: 8px;
		line-height: 60px;
	}

	.q-header-cut {
		float: left;
		margin-left: 6px;
		margin-right: 15px;
		line-height: 38px;
		color: silver;
	}

	.q-home .q-header-search .btn-search {
		color: #fff;
	}

	.q-header-search .btn-search {
		position: absolute;
		border: 0;
		width: 20px;
		height: 20px;
		line-height: 20px;
		background-color: transparent;
		cursor: pointer;
		color: silver;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
	}

	.header .login-wrap li {
		margin: 10px !important;
		font-weight: 700;
	}

	.q-header-user-status .login-wrap .login-link {
		position: relative;
		top: -1px;
	}

	.q-header-user-status {
		float: left;
	}

	.header {
		position: relative;
		z-index: 1000;
		height: 61px;
		background: #323232;
		margin: 0 auto !important;
		width: 100%;

		a {
			display: inline-block;
			float: left;
			margin: 11px;
		}

		.q-header-nav-wrapper {


			margin-left: 19px;
			float: left;
			width: 60%;
			//border-style: dashed;

			.q-header-nav {
				list-style: none;

				li {
					float: left;
					margin-left: 21px;
					color: white;

					.sba {
						margin: 0 !important;
					}
				}
			}
		}
	}

	.q-header-nav-wrapper .q-header-nav .nav-list-dandu {
		color: white !important;
		margin-top: 17px;

		span {
			font-size: 16px;
			font-weight: 700;
		}
	}

	.q-header-nav li>>>.el-dropdown {
		color: white !important;
		margin-top: 17px;
	}

	// 	.q-header-nav li>>>.el-dropdown:hover{
	// 		border-top: 4px white solid;
	// 	}
	.q-header-nav li>>>.el-dropdown span {
		font-size: 16px;
		font-weight: 700;
	}
</style>

<script>
	export default {
		name: 'app',
		data() {
			return {

				searchheader: '',
				dtdl:[],
			}
		},
		created(){
			this.builddtdl();
		},

		methods: {
			builddtdl(){
				this.axios.get('/api/builddtdl').then(res=>{
					this.dtdl=res.data.data
				})
				},
			

			seachbtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.ruleForm.searchinfo,
								'searchheader': this.searchheader,
							},
						}).then(res => {
							//搜索成功 返回值or跳转界面
						}).catch(function(error) {
							console.log(error);
						});
						// 表单提交
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}

		},


	}
</script>
