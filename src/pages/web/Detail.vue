<template>
	<el-col :span="24">
		<div class="Indexall">
			<!-- //首页轮播 -->
			<div class="indexbanner">
				<el-col :span='24'>
					<div class="navbar">
						<el-col :span='14'><img src="../../assets/images/aimeite/logo.png" height="29px"></el-col>
						<el-col :span='10'>
							<ul class="navul">
								<li>
									<router-link to="/" class="nav_a">首页</router-link>
								</li>
								<li @mouseenter="enter(index)">
									<router-link to="/product" class="nav_a">产品</router-link>
								</li>
								<li @mouseenter="enters(index)">
									<router-link to="/serve" class="nav_a">服务</router-link>
								</li>
								<li>
									<router-link to="/shoping" class="nav_a">网上商城</router-link>
								</li>
								<li><img class="nav_img" @click="toggle()" src="../../assets/images/aimeite/index-seach.png" width="32px"
									 height="32px"></li>
							</ul>
						</el-col>
						<div style="clear: both;"></div>
						<div class="cengji">
							<div style="float: left;">
								<router-link to='shouserve'>新风系统</router-link> &gt; <span> NAC85-100BG</span>
							</div>
							<div style="float: right;"><a class="cengji_a avtive" style=' color: #005bac;
    text-decoration: underline;'>参数与卖点</a><a
								 class="cengji_a"> 产品详情</a><a class="cengji_a">产品推荐</a></div>

						</div>
					</div>

					<div class="productcontent" v-if="seen&&index==current">
						<div class="pcontent">
							<img src="../../assets/images/aimeite/productline.jpg" width="100%">
							<ul class="pcontent_ul">
								<router-link class="lia" to="" v-for="(item,index) in pcontent" :key="index">
									<img :src="item.pcontentimg1" class="imgblock" height="55px" /><span class="pcontent_ul_wenzi">{{item.pcontentc}}</span>
								</router-link>
							</ul>
						</div>
					</div>
					<div class="productcontents" v-if="seens&&index==currents">
						<div class="pcontent">
							<img src="../../assets/images/aimeite/productline1.jpg" width="100%">
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">售后服务</router-link>
								<router-link to="/index_6" style="color: #555555;">服务理念</router-link>
								<router-link to="/index_7" style="color: #555555;">服务政策</router-link>
								<router-link to="/index_8" style="color: #555555;">上门服务公告</router-link>
								<router-link to="/index_9" style="color: #555555;">[金卡]服务介绍</router-link>
							</div>
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">服务网点</router-link>

							</div>
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">常见问题</router-link>
								<router-link to="/index_6" style="color: #555555;">电风扇</router-link>
								<router-link to="/index_7" style="color: #555555;">电暖气</router-link>
								<router-link to="/index_8" style="color: #555555;">小家电</router-link>
								<router-link to="/index_9" style="color: #555555;">住宅电器</router-link>
							</div>
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">客服联系</router-link>
								<router-link to="/index_6" style="color: #555555;">联系我们</router-link>
								<router-link to="/index_7" style="color: #555555;">商用服务</router-link>

							</div>
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">下载中心</router-link>
								<router-link to="/index_6" style="color: #555555;">软件下载</router-link>
								<router-link to="/index_7" style="color: #555555;">智能产品专区</router-link>
								<router-link to="/index_6" style="color: #555555;">专卖网络</router-link>
								<router-link to="/index_7" style="color: #555555;">海报下载</router-link>
							</div>
							<div class="tableform">
								<router-link to="/index_5" href='/fwln/index_5.aspx' style="color: #111111;">在线留言</router-link>

							</div>
						</div>
					</div>
					<div class="searchtoggel" v-if="searchtoggel">
						<div class="searchcontent">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="serachruleForm">

								<el-input placeholder="请输入搜索内容" class="input-with-select">
									<el-button slot="append" v-model="ruleForm.searchcontent" @click="seachbtn()" class="seachbtn">搜索</el-button>
								</el-input>
							</el-form>
							<i class="elform_close" @click="toggle()"></i>
						</div>
					</div>
					<!-- //<img src="http://www.airmate-china.com/cn/images/banner_btn.png" class="arrow_xia" @click="getdown()"> -->
				</el-col>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="shopdetail">
			<img src="http://www.airmate-china.com/uploadfiles/2019/04/201904171950415041.png" @mouseleave="leave(index)"
			 @mouseout='leaves(index)' width="100%">
			 <figure>
         <img src="http://www.airmate-china.com/uploadfiles/2019/04/20190413122104214.jpg" alt="">
         </figure>
		 <article>
         <h2 class="h2">技术参数：</h2>
         <table border="0" cellpadding="0" cellspacing="0" width="660" style="width:494pt;" class="ke-zeroborder">
	<tbody>
		<tr>
			<td height="19" class="xl65" width="330">
				产品名称：
			</td>
			<td class="xl66" width="330">
				空气循环扇
			</td>
		</tr>
		<tr>
			<td height="19" class="xl65" width="330">
				品牌 :
			</td>
			<td class="xl65" width="330">
				Airmate/艾美特
			</td>
		</tr>
		<tr>
			<td height="19" class="xl65" width="330">
				型号:
			</td>
			<td class="xl65" width="330">
				FB2309DR
			</td>
		</tr>
		<tr>
			<td height="19" class="xl67" width="330">
				<span class="font7">额定电压</span><span class="font6"> :</span>
			</td>
			<td class="xl65" width="330">
				220V~50HZ
			</td>
		</tr>
		<tr>
			<td height="19" class="xl66" width="330">
				额定功率：
			</td>
			<td class="xl65" width="330">
				35W
			</td>
		</tr>
		<tr>
			<td height="19" class="xl66" width="330">
				包装净重：
			</td>
			<td class="xl68" width="330">
				3.34kg
			</td>
		</tr>
		<tr>
			<td height="19" class="xl66" width="330">
				包装毛重：
			</td>
			<td class="xl68" width="330">
				5.24kg
			</td>
		</tr>
		<tr>
			<td height="19" class="xl65" width="330">
				包装尺寸
			</td>
			<td class="xl65" width="330">
				680*335*340 mm
			</td>
		</tr>
	</tbody>
</table>
         </article>
		</div>
	</el-col>
</template>
<style lang="scss" scoped="scoped">
	.shopdetail figure {
    /* float: left; */
    /* text-align: center; */
    width: 630px;
    margin: 0 auto;
    /* padding: 100px 0; */
}
.shopdetail article {
    /* float: right; */
    width: 650px;
    margin: 50px auto 0;
}
.shopdetail article h2 {
    font-size: 14px;
    color: #222;
    margin: 0;
    line-height: 36px;
    border-bottom: 1px solid #dcdcdc;
}
.shopdetail article td {
    line-height: 36px;
    border-bottom: 1px solid #dcdcdc;
}
	.Indexall {
		width: 100%;
		height: 150px;
		overflow: hidden;
	}

	// 导航
	.indexbanner .navbar {
		position: absolute;
		top: 31px;
		width: 80%;
		z-index: 1003;
		height: 150px;
		left: 140px;
		overflow: hidden;

		.cengji {
			width: 100%;
			height: 50px;
			background: white;
			position: relative;
			top: 25px;
			z-index: 1001;
			line-height: 50px;

			border-top: 1px #D3DCE6 solid;
			margin: 0px auto;

			.cengji_a {
				width: 80px;
				text-align: center;
				display: inline-block;
			}

			a {
				font-size: 12px;
				color: #666666;
			}

			span {
				font-size: 12px;
			}
		}
	}

	.indexbanner .navul li {
		width: 20%;
		float: left;
		position: relative;
		list-style: none;
		text-align: right;

		.nav_a {
			position: relative;
			top: 5px;

			font-size: 15px;
			color: #222222;
		}

	}

	.indexbanner {
		.productcontent {
			position: absolute;
			top: 0px;
			width: 100%;
			height: 250px;
			background: white;
			z-index: 1001;
			pointer-events: none;

			.pcontent {
				position: absolute;
				bottom: 0;
				height: 95px;
				width: 80%;
				left: 150px;

				.pcontent_ul {
					margin-top: 10px;
				}

				.lia {
					float: right;
					margin-right: 80px;
				}

				.pcontent_ul_wenzi {
					position: relative;
					color: #111111;
					top: -25px;
					left: 25px;
				}

			}

		}

		.productcontents {
			position: absolute;
			top: 0px;
			width: 100%;
			height: 308px;
			background: white;
			z-index: 1002;
			pointer-events: none;

			.pcontent {
				position: absolute;
				bottom: 48px;
				height: 135px;
				width: 75%;
				left: 15%;

				.tableform {
					width: 150px;
					height: 150px;
					float: right;

					a {
						display: block;
						line-height: 30px;
						font-size: 15px;
					}
				}
			}

		}
	}

	.indexbanner .searchtoggel {
		position: absolute;
		top: 0px;
		width: 97%;
		height: 80px;
		-webkit-transition: all ease-in-out .6s;
		-o-transition: all ease-in-out .6s;
		-moz-transition: all ease-in-out .6s;
		-ms-transition: all ease-in-out .6s;
		transition: all ease-in-out .6s;
		background: white;
		z-index: 1003;

		.searchcontent {
			width: 80%;
			height: 40px;
			position: relative;
			margin: 20px auto;


			.serachruleForm {
				width: 95%;
				float: left;
			}

			.elform_close {
				background: url('http://www.airmate-china.com/cn/images/close.png') no-repeat;
				width: 31px;
				height: 31px;
				float: right;
				position: relative;
				;
				top: 3px;
				cursor: pointer
			}

			.seachbtn {
				color: white;
				width: 90px;
				background: #005BAC;
			}
		}
	}
</style>
<script>
	export default {
		name: 'app',
		data() {
			return {
				searchtoggel: false,
				ruleForm: {
					searchcontent: ''
				},
				rules: {
					searchcontent: [{
						required: true,
						message: '请输入搜索内容',
						trigger: 'blur'
					}]
				},
				index: 0,
				seen: false,
				current: 0,
				seens: false,
				currents: 0,
			}
		},
		created() {
			this.buildpcontent();
		},

		methods: {
			buildpcontent() {
				this.axios.get('/api/buildpcontent').then(res => {
					this.pcontent = res.data.data //请求出来的标签数据			
				}).catch(function(error) {
					console.log(error);
				})
			},

			enter(index) {
				this.seen = true;
				this.current = index;
			},
			leave() {

				this.seen = false;
				this.current = index;
			},
			enters(index) {
				this.seens = true;
				this.currents = null;
			},
			leaves() {

				this.seens = false;
				this.currents = null;
			},
			getdown() {
				// 	document.body.animate({scrollTop:925},500);
				// 	 document.documentElement.animate({scrollTop:925},500);
				document.body.scrollTop = 950
				document.documentElement.scrollTop = 950
			},
			toggle() {

				this.searchtoggel = !this.searchtoggel
			},
			//头部搜索
			//买房咨询
			seachbtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {

							},
						}).then(res => {
							if (res.data.success) {
								this.house_consultation = false;
							}
							alert(res.data.message);

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
