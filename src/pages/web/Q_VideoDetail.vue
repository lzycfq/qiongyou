<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Q_video_top_nav">
			<router-link to="/Q_VideoDetail"></router-link>
		</div>
		<div class="VD_video" v-for="(item,index) in QVideolistdetail" :key='index'>
			<img class="VD_videobg" src="http://pic.qyer.com/video/cover/20190530/1559208730380?imageMogr2/thumbnail/350x/blur/30x15">
			<div class="top_video">
				<video :src="item.QVideo" autoplay="autoplay" controls="controls" preload="metadata"></video>
				<div class="video_list" style="background-image:url(//pic.qyer.com/video/cover/20190530/1559208730380?imageMogr2/thumbnail/350x/blur/30x15);">
					<div class="scroll_bg">
						<h3 class="video_title">系列选集（{{item.QVideolistjishu}}）</h3>
						<div class="scrolllist">
							<ul>
								<li v-for="(item,index) in item.QVideolists" :key='index'>
									<router-link :to="{path:'QVideoDetail',params:{QVideoid:item.QVideoid}}">
										<div class="video_img_NzAg3">
											<img :src="item.QVideolistimg">
											<span>{{item.QVideolisttime}}</span></div>
										<div class="video_right_-5PZo">
											<h3>{{item.QVideolisttitle}}</h3><span>{{item.QVideolistdate}}</span>
										</div>
									</router-link>
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="Q_videoDetailwarpbg" @mouseout='blur'>
			<div class="Q_videoDetailwarp" v-for="(item,index) in QvideoDetailwarp" :key='index'>
				<div class="Q_videoDetailwarptitle">
					<div class="Q_videoDetailwarptitleshare">
						<el-dropdown placement="bottom">
							<span class="el-dropdown-link" style="color: #989898; font-size: 12px;">
								<img src="../../assets/images/qiongyou/share.png" style="vertical-align: top;margin-left: 3px;" /> 分享
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item><img src="../../assets/images/qiongyou/weibo_2.png" style="vertical-align: middle;margin-right: 5px;"
									 width="20px" height="20px"> 分享到微博</el-dropdown-item>
								<el-dropdown-item>
									<img src="../../assets/images/qiongyou/weixin_3.png" style="vertical-align: middle;margin-right: 5px;" width="20px"
									 height="20px"> 微信扫一扫
									<br />
									<img src="../../assets/images/erweima.png" width="100px" height="100px" />
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<h3>{{item.Q_videoDetailwarptitle}}</h3>
					<p>{{item.Q_videoDetailwarpdsc}}</p>
					<span class="mtxt_208VJ">详情</span>
				</div>
				<div class="Q_videoDetailwarpright">
					<div class="qiyu_3mEdm">
						<img :src="item.Q_videoDetailwarpzuozheavter">
						<div class="fr_dmn5f">
							<h3>{{item.Q_videoDetailwarpzuozhename}}</h3>
							<p>{{item.Q_videoDetailwarpzuozhedsc}} </p>
						</div>
					</div>
					<br />
					<br />
					<p style="color: #323232;">{{item.Q_videoDetailwarpxuanyu}}</p>
				</div>

			</div>
			<div style="clear: both;"></div>
			<div class="Q_videocomments">
				<div class="Q_videocommentsleft">
					<h3>全部评论</h3>
					<div class="comment_area">
						<img src="//pics.lvjs.com.cn//uploads/pc/place2/2019-04-08/11722ade-49d1-4768-af15-a43281c0f792_300_200.jpg"
						 width="34">
						<div class="textarea_c">
							<router-link class="sbvs" style='display: none;' to="/Login">快来和大家分享你的感想吧</router-link><!-- v-if='this.state.taken===1' -->
							<textarea id="textarea" @click="focus()" v-model="textareavalue" placeholder="快来和大家分享你的感想吧" class="sbvs"></textarea>
							<div class="area_bot_hDUra" v-if="unsubmit">
								<!-- v-else="this.state.taken===2" -->
								<span class="fr_dmn5f">
									<button type="button" id="cancel_2EIEX" @mouseout='blur'>取消</button>
									<button type="button" id="unsubmit_3ZfCc" @click="sbpinglun">评论</button>
								</span>

							</div>
						</div>

					</div>
					<ul class="commentsul" v-for="(item,index) in commentsul" :key='index' v-if="commentsul.length>0">
						<li v-for="(item,index) in commentsul" :key='index'><img src="//pics.lvjs.com.cn//uploads/pc/place2/2019-04-08/11722ade-49d1-4768-af15-a43281c0f792_300_200.jpg" width="34">
						<div class="comments_right">
						<div class="commentsname">{{item.commentsuldsc}}</div>
					<div class="commentsdate">刚刚 <span @click="commentsremove(index)">  · 删除</span></div></div></li>
					<section class="comment_center_1mHUz" v-if="item.typepinglun===1">暂无评论</section>
					</ul>
					
				</div>
			</div>

		</div>

	</el-col>
</template>

<script>
	import headers from '../web/compoents/header_two.vue'
	export default {
		name: 'Q_VideoDetail',
		data() {
			return {
				Q_VideoDetailid: this.$route.params.Q_VideoDetailid,
				QVideolistdetail: [],
				QvideoDetailwarp: [],
				commentsul:[],
				unsubmit: false,
				textareavalue: ''
			}

		},
		created() {
			this.buildQVideolistdetail();
			this.buildQvideoDetailwarp();
			this.buildcommentsul();
		},
		methods: {
			buildQVideolistdetail() {
				this.axios.get('/api/buildQVideolistdetail').then(res => {
					this.QVideolistdetail = res.data.data
				})
			},
			buildQvideoDetailwarp() {
				this.axios.get('/api/buildQvideoDetailwarp').then(res => {
					this.QvideoDetailwarp = res.data.data
				})
			},
			// 评论描述提交
			sbpinglun(){
			this.axios.get('/api/buildQVideolistdetail'
			// ,params:{
			// 	textareavalue:this.textareavalue
			// }			
			).then(res => {
			
			})	
			},
			//用户点击评论后端返回数据显示在li中
			buildcommentsul(){
				this.axios.get('/api/buildcommentsul').then(res => {
					this.commentsul = res.data.data
				})
			},
			focus: function() {
				this.unsubmit = true
			},
			blur: function() {
				this.unsubmit = false
			},
			commentsremove(index){
				 this.comments.splice(k,1); //循坏名字comments
				}

		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.Q_videocomments {
		width: 980px;
		margin: 0 auto;

		overflow: hidden;

		.Q_videocommentsleft {
			width: 640px;
			padding: 30px;
			margin-top: 20px;
			background: #fff;
			overflow: hidden;
			margin-bottom: 30px;
 .commentsul {
    clear: both;
	list-style: none;
    overflow: hidden;
	li{
		padding-top: 40px;
    overflow: hidden;
	img {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.comments_right {
    float: left;
    width: 570px;
    padding-left: 20px;
    font-size: 14px;
	.commentsname {
    font-weight: bold;
	color: #323232;
}
.commentsdate{
	margin-top: 3px;
	color: #989898;
	font-size: 12px;
	span{
		color: #989898;
		font-size: 12px;

	}
}
}
	}
}
			.comment_center_1mHUz {
				clear: both;
				background: url(//fes.qyerstatic.com/FgZjuR7eL4EjKEJrq_Kd4ojsb6hV?imageslim) no-repeat center top;
				padding-top: 100px;
				text-align: center;
				margin-top: 108px;
				color: rgba(0, 0, 0, 0.35);
			}

			h3 {
				padding-bottom: 26px;
				font-size: 18px;
				font-weight: 500;
				color: #323232;
			}

			.comment_area {

				img {
					float: left;
					width: 40px;
					height: 40px;
					border-radius: 20px;
				}

				.textarea_c {
					float: left;
					width: 570px;
					padding-left: 20px;

					.sbvs {
						width: 550px;
						float: left;
						height: 20px;
						line-height: 20px;
						font-size: 14px;
						padding: 10px;
						border: none;
						background: rgba(0, 0, 0, 0.04);
						border-radius: 5px;
						color: #ABABAB;

					}

					#textarea:focus {
						height: 60px !important;
						background: #fff !important;
						border: solid 1px #28B76B !important;
						color: #000 !important;
					}


					.area_bot_hDUra {

						clear: both;
						padding-top: 20px;
						overflow: hidden;
						line-height: 60px;
						color: #999;

						.fr_dmn5f {
							float: right;

							#cancel_2EIEX {
								width: 70px;

								height: 40px;
								color: #666666;
								border: none;
								background: none;
							}

							#unsubmit_3ZfCc {
								width: 70px;

								height: 40px;
								color: white;
								border: 0;
								background: #28B76B;


							}
						}

					}
				}
			}
		}
	}

	.Q_videoDetailwarpbg {
		width: 100%;
		height: auto;
		background: #f5f5f5;
		overflow: hidden;
	}

	.Q_videoDetailwarp {
		width: 980px;
		height: auto;
		margin: 0 auto;

		.Q_videoDetailwarptitle {
			width: 640px;
			float: left;
			background: #fff;
			padding: 30px;
			height: 130px;
			overflow: hidden;
			margin-bottom: 30px;
			font-size: 14px;

			.Q_videoDetailwarptitleshare {
				float: right;
				position: relative;
				padding-top: 5px;
				border-radius: 10px;
				width: 55px;
				margin-top: 5px;
				border: 1px solid rgba(0, 0, 0, 0.1);
				height: 20px;
				color: rgba(0, 0, 0, 0.4);
				font-size: 12px;
			}

			h3 {
				font-size: 24px;
				margin-bottom: 14px;
				margin-right: 70px;
				color: #323232;
				font-weight: 500;
			}

			p {
				line-height: 25px;
				color: #323232;
				font-weight: 500;
			}

			.mtxt_208VJ {
				color: #323232;
				float: right;
			}

		}

		.Q_videoDetailwarpright {
			float: right;
			background: #fff;
			width: 230px;
			padding: 20px;
			padding-top: 30px;

			font-size: 14px;
			line-height: 20px;

			.qiyu_3mEdm {
				overflow: hidden;
				padding-bottom: 15px;


				img {
					float: left;
					border-radius: 50%;
					width: 80px;
					height: 80px;
				}

				.fr_dmn5f {
					float: right;
					width: 124px;
					margin-right: 15px;
					/* white-space: nowrap; */
					font-size: 12px;
					line-height: 18px;
					padding-top: 10px;

					h3 {
						font-size: 20px;
						color: #323232;
						font-weight: 500;
						padding-bottom: 14px;
						line-height: 24px;
					}

					p {
						min-height: 20px;
						color: #323232;
					}
				}
			}
		}
	}

	.Q_video_top_nav {
		background: url(https://fes.qyerstatic.com/FlY6GAbfIoId5UFnavBZe85YdWrp?imageslim) no-repeat 20px center #fff;
		background-size: 185px auto;
		height: 46px;

		a {
			display: block;
			width: 174px;
			height: 46px;
		}
	}

	.VD_video {
		width: 100%;
		height: 555px;
		position: relative;
		overflow: hidden;
		background: #f5f5f5;


		.VD_videobg {
			width: 100%;
			height: 360px;
		}

		.top_video {
			width: 980px;
			left: 50%;
			margin-left: -490px;
			height: 394px;
			position: absolute;
			bottom: 0;
			z-index: 1000;
			margin-bottom: 20px;

			video {
				width: 700px;
				float: left;
				background: #fff;
				height: 395px;
				display: inline-block;
				position: relative;

			}

			.scroll_bg {
				background-color: rgba(31, 30, 40, 0.6);
				padding: 0 20px;
				width: 240px;
				height: 395px;
				float: right;
				overflow: hidden;

				.video_title {
					height: 64px;
					line-height: 64px;
					border-bottom: rgba(255, 255, 255, 0.5) solid 1px;
					margin-bottom: 20px;
					color: #fff;
					font-size: 14px;
					font-weight: 500;
				}

				.scrolllist::-webkit-scrollbar {
					display: none;
				}

				.scrolllist {
					overflow-y: scroll;
					overflow-x: hidden;
					height: 300px;
					width: 240px;

					ul {
						list-style: none;

						li {

							margin-bottom: 10px;
							overflow: hidden;

							a {
								color: white;
							}

							.video_img_NzAg3 {
								border: solid 1px #fff;
								width: 122px;
							}

							.video_img_NzAg3 {
								float: left;
								width: 124px;
								height: 70px;
								overflow: hidden;
								margin-right: 10px;
								border-radius: 2px;
								position: relative;
							}

							.video_img_NzAg3 span {
								position: absolute;
								left: 3px;
								bottom: 3px;
								background: rgba(0, 0, 0, 0.7);
								padding: 0 3px;
							}

							.video_right_-5PZo {
								float: right;
								width: 90px;
							}

							.video_right_-5PZo h3 {
								height: 57px;
								font-size: 14px;
								font-weight: 500;
								overflow: hidden;
								line-height: 18px;
							}

							.video_right_-5PZo span {
								color: rgba(255, 255, 255, 0.8);
							}
						}

					}
				}
			}



		}
	}
</style>
