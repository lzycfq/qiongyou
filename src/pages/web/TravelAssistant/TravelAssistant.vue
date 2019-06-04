<template>
	<!-- 行程助手 -->
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="we_head">
			<ul>
				<li>
					<router-link to=''>使用帮助</router-link>
				</li>
				<li>
					<router-link to=''>APP下载</router-link>
				</li>
				<li style="width: 110px">
					<router-link to=''>免费私人定制</router-link>
				</li>
				<li>
					<router-link to=''>企业版</router-link>
				</li>
			</ul>
			<router-link to='/' class="we_logo"></router-link>
		</div>
		<div class="Tr_banner">
			<div class="bannerinner">
				<div class="one-minit">一分钟搞定你的攻略</div>
				<div class="one-counter">共有<span id="user_nums">1253</span> 万穷游er,创建了<span class="num-wrap">356,532,353</span> 个行程
				</div>
				<div class="doodle-bg">
					<span class="doodle">
						<img class="no_moon" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_moon.png">
						<img class="no_hill" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_hill.png">
						<img class="no_road" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_road.png">
						<img class="no_cloud" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_cloud.png">
						<img class="no_tree" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_tree.png">
						<img class="no_stone" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_stone.png">
						<img class="no_plan_sd home-doodle-sd" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_plan_sd.png">
						<img class="no_plan home-doodle" src="//common3.qyerstatic.com/plan/desktop/home/img/doodles/d_plan.png">
					</span>
					<a class="Tr_chuanjian">+ 创建新的行程</a>
				</div>
			</div>
		</div>
		<!-- 筛选创建行程 -->
		<div class="Tr_content">
			<div class="Tr_contenttitle">不想自己做行程，为什么不看看别人的？</div>
			<div class="ind_sifter">
				<div class="Tr_items">
					<strong class="title">
						目的地：
					</strong>
					<el-collapse accordion>
						<el-collapse-item>
							<template slot="title">
								<a class="Tr_time" v-for="(value,index) in Trmudi" :class="type_indexm===index?'active':''" @click="typeIndexm(index)">{{value}}</a>
							</template>
							<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
							<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
						</el-collapse-item>
					</el-collapse>
				</div>
				<div class="Tr_items">
					<strong class="title">
						出行时间：
					</strong>
					<el-collapse accordion>
						<el-collapse-item>
							<template slot="title">
								<a class="Tr_time" v-for="(value,index) in Trtime" :class="type_indext===index?'active':''" @click="typeIndext(index)">{{value}}</a>
							</template>
							<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
							<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
						</el-collapse-item>
					</el-collapse>
				</div>
				<div class="Tr_items Tr_itemsim">
					<strong class="title">
						出行天数：
					</strong>

					<a class="Tr_time" v-for="(value,index) in Trdate" :class="type_indexd===index?'active':''" @click="typeIndexd(index)">{{value}}</a>

				</div>
				<div class="Tr_items Tr_itemsim">
					<strong class="title">
						出行城市：
					</strong>

					<a class="Tr_time" v-for="(value,index) in Trtheme" :class="type_indexe===index?'active':''" @click="typeIndexe(index)">{{value}}</a>

				</div>
				<div class="Tr_items Tr_itemsim">
					<strong class="title">
						精华等级：
					</strong>

					<a class="Tr_time" v-for="(value,index) in Trjh" :class="type_indexj===index?'active':''" @click="typeIndexj(index)">{{value}}</a>

				</div>
			</div>
			<div class="ind_lists">
				<div class="ind_set">
					<div class="ind_setsort">
						<a v-for="(value,index) in Trsort" :class="type_indexs===index?'active':''" @click="typeIndexs(index)" class="sortcurrent">{{value}}</a>

					</div>
					<div class="ind_search">
						<span>150个行程</span>
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
							<el-form-item prop="searchinfo">
								<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索内容"></el-input>
								<i class="el-icon-search ind_searchiconss" @click="searchBtn('ruleForm')"></i>
							</el-form-item>

						</el-form>
					</div>
				</div>
			</div>
			<div class="ind_list">
				<div class="ind_listcontent">
					<div class="ind_items" v-for="(item,index) in inditems.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key='index'>
						<router-link :to="{path:'',params:{inditemsid:item.inditemsid}}" class='link'>
							<div class="img">
								<img class="plan-cover" title="item.inditemstitle" :src="item.inditemsimg" style="display: block;">
								<!-- 空层，遮罩背景 -->
								<span class="bg"></span>
							</div>
							<div class="title">
								<div class="day"><strong>{{item.inditemsdate}}</strong>天</div>
								<dl class="fontYaHei">
									<dt>{{item.inditemsreqi}} 出发</dt>
									<dd>{{item.inditemstitle}}</dd>
								</dl>
							</div>
							<div class="content">
								<div class="tag clearfix">
									<span v-for="(item,index) in inditemstag" :key='index'>{{item.inditemstagname}}</span>
								</div>
								<div class="plan">
									<p>{{item.inditemsdsc}}</p>
								</div>
								<div class="number">
									<a rel="nofollow" class="name" >{{item.inditemszuozhe}}</a>
									<div class="numberright"><span class="el-icon-view"> {{item.inditemschakan}}</span> | <span class="el-icon-edit-outline"> {{item.inditemsconment}}</span></div>
								</div>
							</div>
						</router-link>
						<a  class="copy">复制</a>						
					</div>
				</div>
				<div  style="clear: both;"></div>
				  <el-pagination  class="ind_paination"  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" prev-text="上一页"
				                next-text="下一页" :page-sizes="[5, 8, 10, 12]" :page-size="pagesize"
				                layout="total, sizes, prev, pager, next, jumper,slot" background
				                :total="inditems.length">
				</el-pagination>
			</div>
			
		</div>

	</el-col>
</template>

<script>
	import headers from '../../../pages/web/TravelAssistant/header.vue'
	export default {
		data() {
			return {
				 currentPage: 1, //初始页
				pagesize:12, //每页的数据
				inditems:[],
				search_params: {},
				numbertime: '',
				Trmudi: ['香港', '澳门', '台湾', '泰国', '日本', '法国', '美国', '韩国', '马来西亚', '意大利', '新加坡', '德国'],
				Trtime: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				Trdate: ['3天及以下', '4天至7天', '8天至14天', '14天至20天', '20天以上'],
				Trcity: ['北京', '上海', '广州', '深圳', '重庆', '成都', '杭州', '香港', '澳门'],
				Trtheme: ['美食', '人文', '购物', '游园观光', '娱乐休闲', '沙滩海岛', '户外', '自然风光', '自驾', '蜜月', '亲子'],
				Trjh: ['一级精华', '二级精华', '三级精华'],
				Trsort: ['默认排序', '浏览次数最多', '复制次数很多'],
				type_indexm: -1,
				type_indext: -1,
				type_indexd: -1,
				type_indexc: -1,
				type_indexe: -1,
				type_indexj: -1,
				type_indexs: 0,
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


			}
		},
		created(){
			this.buildinditems();
		},
		//定时器更新指定计划数值
		mounted() {
			this.numbertime = setInterval(this.numbertimeData, 100000);
		},
		//销毁定时器更新指定计划数值
		destroyed() {
			clearInterval(this.numbertime)
		},
		methods: {
			//请求更新计划数值
			numbertimeData() {
				this.axios.get('/api/numbertimeData').then(res => {
					this.numbertimevalue = res.data.data
				})
			},
			buildinditems(){
				this.axios.get('/api/buildinditems').then(res => {
					this.inditems = res.data.data
				})
			},
			searchBtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.ruleForm.searchinfo
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
            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function(size) {
                this.pagesize = size;
                console.log(this.pagesize) //每页下拉显示数据
            },
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage;
                console.log(this.currentPage) //点击第几页
            },
			typeIndexm(index) {
				this.type_indexm = index
			},
			typeIndext(index) {
				this.type_indext = index
			},
			typeIndexd(index) {
				this.type_indexd = index
			},
			typeIndexc(index) {
				this.type_indexc = index
			},
			typeIndexe(index) {
				this.type_indexe = index
			},
			typeIndexj(index) {
				this.type_indexj = index
			},
			typeIndexs(index) {
				this.type_indexs = index
			},
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.ind_list{
		zoom: 1;
		margin-top: 20px;
		margin-left: -24px;

		.ind_listcontent{
	
    float: left;
	 .ind_items {
    margin: 24px 0 0 22.5px;
    float: left;
    width: 310px;
    position: relative;
    border-radius: 8px;
    border: 1px solid #d7d7d7;
    overflow: hidden;
    background: #fff;
 .link {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height:325px;
	 .img {
    height: 202px;
    position: relative;
    
	img {
   
    width:100%;
    height: 100%;
    transition: all 3.6s;
    -webkit-transition: all 3.6s;
}
} //.img
.title {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 150px;
    color: #fff;
	.day {
    float: left;
    padding-right: 10px;
    margin-right: 10px;
    height: 42px;
    border-right: 1px solid #b1b1b1;
    border-right: 1px solid rgba(255,255,255,0.5);
	strong {
    font-size: 50px;
    font-family: HelveticaNeue-Light;
    padding-right: 5px;
    height: 42px;
    display: inline-block;
    line-height: 42px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 0 black;
}
}
dl {
    overflow: hidden;
    zoom: 1;
    font-size: 12px;
	dd {
	    line-height: 24px;
	    font-size: 16px;
	    width: 100%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
}

}//title
.content{
    width: 90%;
	margin: 0 auto;
	margin-top: 10px;
    height: 115px;
    border-top: 0;
	 .tag {
    height: 24px;
    max-height: 24px;
    overflow: hidden;
	 span {
    float: left;
    margin-right: 10px;
    
	
    padding: 0 12px;
    line-height: 24px;
    background: #f2f2f2;
    color: #959595;
}
}
.plan {
    height: 48px;
    overflow: hidden;
    color: #636363;
    line-height: 24px;
    font-size: 14px;
    margin-top: 8px;
    font-family: \5b8b\4f53,sans-serif;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

}
 .number {
margin-top: 7px;
  .name {
 
    font-family: tahoma;
  
 float: left;
	color: #959595;
    padding-left: 18px;
    background: url(//common3.qyerstatic.com/plan/desktop/home/img/icon_names.png) 0 center no-repeat;
}
.numberright{
	float: right;
	color: #959595;
	span:first-child{
	margin-right: 5px;
    color: #959595;
	font-size: 12px;
	
	}
	span:last-child{
		margin-left: 5px;
	}
}
	
}

}//content

}//link

 
}

		}//ind_listcontent
		
		.ind_paination{
			float: right;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.ind_paination.is-background .el-pager li.active {
        background: #5ea67c;
    border-radius: 3px;
    font-weight: 700;
    color: #fff;
}
	}
	.ind_list .ind_items:hover .copy {
	    display: inline-block;
	}
	
	.ind_list .ind_items .copy {
	    display: none;
	    box-shadow: 0 1px 1px rgba(0,0,0,.3);
	    line-height: 28px;
	    border-radius: 5px;
	    color: #fff;
	    position: absolute;
	    left: 10px;
	    top: 10px;
	    padding: 0 10px 0 26px;
	    background: url(//common3.qyerstatic.com/plan/desktop/home/img/icons_copy.png) 10px center no-repeat #499f6b;
	}
	.Tr_content {
		margin: 0 auto;
		width: 980px;
		height: auto;

		.Tr_contenttitle {
			font-size: 26px;
			line-height: 136px;
			text-align: center;
			color: #323232;
		}

		.ind_sifter {
			width: 978px;
			border: 1px solid #d7d7d7;
			margin: 0 auto;

			.Tr_itemsim {
				overflow: hidden;
				position: relative;
				border-bottom: 1px dashed #ddd;
				padding: 10px 0px 10px 120px !important;
			}

			.Tr_items:last-child {
				border-bottom: none;
			}

			.Tr_items {
				overflow: hidden;
				position: relative;
				border-bottom: 1px dashed #ddd;
				padding: 10px 130px 0px 120px;


				.title {
					float: left;
					padding-right: 30px;
					text-align: right;
					width: 90px;
					margin: 6px 0 6px -120px;
					line-height: 22px;
					color: #959595;
					font-size: 12px;
				}

				.Tr_time {
					float: left;
					margin: 6px 30px 6px 0;
					line-height: 22px;
					color: #323232;
					font-size: 12px;
				}

			}

			.Tr_items {
				/deep/ .el-collapse-item__wrap {
					border-bottom: none;
				}

				/deep/ .el-collapse-item__arrow {
					line-height: 36px;
				}

				/deep/ .el-collapse-item__header {
					line-height: 36px;
					font-size: 12px;
					border-bottom: none;

				}

				/deep/ .el-collapse {
					border-bottom: 0;
					border-top: 0;
					width: 830px;
				}

				/deep/ .el-collapse-item:last-child {
					margin-bottom: 0;
				}
			}

		}

		.ind_lists {
			margin-top: 30px;

			.ind_set {
				line-height: 36px;
				height: 36px;

				.ind_setsort {
					float: left;
					font-size: 14px;
					color: #d7d7d7;

					.sortcurrent {
						color: #d7d7d7;
						cursor: pointer;
						border-right: 2px solid #D7D7D7;
						padding-right: 15px;


					}

					.sortcurrent+.sortcurrent {
						padding-left: 15px;
						padding-right: 15px;
					}

					.sortcurrent:last-child {
						border-right: none;
					}

					.sortcurrent.active {
						color: #0073b6;
						cursor: pointer;
					}
				}

				.ind_search {
					float: right;
					width: 293px;
					overflow: hidden;
					position: relative;

					span {
						float: left;
						font-size: 12px;
					}

					.ind_searchiconss {
						position: absolute;
						left: 80px;
						top: 10px;
						font-size: 18px;
					}
				}

				.ind_search {
					/deep/ .el-input {
						width: 75%;
						float: right;
					}

					/deep/ .el-input__inner {
						padding: 0 30px;
					}
				}
			}
		}
	}

	.Tr_banner {
		background-image: url(//common3.qyerstatic.com/plan/desktop/home/img/banner-2-bg.png);
		position: relative;

		.bannerinner {
			width: 980px;
			height: 500px;
			margin: auto;
			position: relative;

			.one-minit {
				width: 414px;
				height: 56px;
				position: absolute;
				left: 50%;
				top: 56px;
				margin-left: -207px;
				color: white;
				font-size: 45px;
				font-weight: 100px;
				background-repeat: no-repeat;

			}

			.one-counter {
				position: absolute;
				color: #fff;
				background: #41c074;
				letter-spacing: 2px;
				font-weight: bold;
				width: 980px;
				height: 50px;
				text-align: center;
				top: 140px;
				font-size: 16px;
			}
		}

		.doodle-bg {
			height: 500px;
			left: 0;
			top: 0;
			width: 980px;
			z-index: 99;
			perspective-origin: center center;
			transform-style: preserve-3d;
			transition: all .5s ease-out;

			.doodle {
				width: 466px;
				height: 209px;
				top: 180px;
				margin: auto;
				position: relative;
				display: block;
			}

			.doodle img.no_moon {
				width: 45px;
				height: 45px;
				left: 147px;
				top: 7px;
				transform: translateZ(80px);
			}

			.doodle img.no_hill {
				width: 353px;
				height: 117px;
				left: 56px;
				bottom: 85px;
				transform: translateZ(30px);
			}

			.doodle img.no_road {
				width: 466px;
				height: 90px;
				left: 0;
				bottom: 0;
				transform: translateZ(50px);
			}

			.doodle img.no_cloud {
				width: 415px;
				height: 58px;
				left: 36px;
				top: 22px;
				transform: translateZ(100px);
			}

			.doodle img.no_tree {
				width: 379px;
				height: 48px;
				left: 43px;
				bottom: 80px;
				transform: translateZ(70px);
			}

			.doodle img.no_stone {
				width: 350px;
				height: 23px;
				left: 18px;
				bottom: 48px;
				transform: translateZ(20px);
			}

			.doodle img.no_plan_sd {
				width: 23px;
				height: 7px;
				left: 226px;
				bottom: 62px;
				transform: translateZ(100px);
			}

			.doodle img.no_plan {
				width: 49px;
				height: 62px;
				left: 213px;
				bottom: 65px;
				transform: translateZ(120px);
			}

			.doodle img {
				position: absolute;
			}

			.Tr_chuanjian {
				background: #fff;
				color: #41c074;
				margin-left: -110px;
				width: 228px;
				height: 42px;
				background-position: 20px center;
				display: inline-block;
				font-size: 16px;
				border: 1px solid #fff;
				line-height: 42px;
				background-repeat: no-repeat;
				font-size: 14px;
				background-color: none;
				text-decoration: none;
				text-align: center;
				border-radius: 2px;
				position: absolute;
				z-index: 150;
				left: 50%;
				top: 410px;
			}
		}
	}

	.we_head {
		height: 50px;
		width: 100%;
		font-size: 16px;

		ul {
			float: right;
			width: 380px;
			list-style: none;

			li {
				width: 90px;
				text-align: center;
				float: left;
				height: 50px;
				line-height: 50px;

				a {
					display: block;
					font-size: 16px;
					text-decoration: none;
					color: #7d7d7d;
				}
			}

		}

		.we_logo {
			display: block;
			margin-left: 60px;
			height: 50px;
			float: left;
			background: url(//common3.qyerstatic.com/plan/desktop/home/img/logo.png) center center no-repeat;
			width: 138px;
			background-size: auto 40px;
		}
	}
</style>
