<template>
	<!-- 首页index 策划点击-详情 -->
	<el-col :span="24">
		<div class="Q_plan_container">
			<headers></headers>
			<div style="clear: both;"></div>
			<!-- 	策划图 -->
			<div class="plan_img">
				<img src="../../../assets/images/qiongyou/planimg.jpg" />
				<div class="plan_img_share">
					<el-dropdown placement="bottom">
						<span class="el-dropdown-link">分享</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item><img src="../../../assets/images/qiongyou/weixin_3.png"></el-dropdown-item>
							<el-dropdown-item><img src="../../../assets/images/qiongyou/weibo_2.png"></el-dropdown-item>
							<el-dropdown-item><img src="../../../assets/images/qiongyou/q_zne.png" width="32px" height="32px"></el-dropdown-item>

						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
		<!-- 策划描述bg -->
		<div class="plan_dscbg">
			<!-- 策划描述 -->
			<div class="plan_dsc">
				2019穷游继续践行“对世界上瘾”的品牌主张，等待爱旅行、爱分享、爱社交、爱记录的各路旅行先锋随时加入，一起提炼环球旅行的上瘾秘籍，记录每个角落的上瘾体验。因为热爱旅行，所以对世界上瘾。因为心有诉说，所以脚步不停；因为梦想无限，所以去向远方。全球尝鲜、顶级奢享、秘境体验，我们即刻出发！
			</div>
			<!-- 策划-人物展现 -->
			<div class="plan_people">
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/FmTpeec_rDMPmHsB_p5smRkwtzC4" />
					<p class="plan_people_dsc">CC橙子</p>
				</div>
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/FjU1fnXdpZtBT-B3ujFWQbEeXa4N" />
					<p class="plan_people_dsc">漂亮女孩</p>
				</div>
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/FpPldTreEttYWhhCyO1qBR6R4EQJ" />
					<p class="plan_people_dsc">欢儿欢-Queenio</p>
				</div>
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/Fgn9cqbRnE_RxGuu7rOy1BHN1M7D" />
					<p class="plan_people_dsc">苏菲的旅行世界</p>
				</div>
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/FssPx0T29H1N26KkoGcNtCEkHI7E" />
					<p class="plan_people_dsc">筱莲</p>
				</div>
				<div class="plan_people_img">
					<img src="//fes.qyerstatic.com/FoQ-uYCLtSHTjjGENxItp83YGgSk" />
					<p class="plan_people_dsc">大侠V5</p>
				</div>
			</div>
			<div class="plan_content">
				<div class="plan_video">
					<p class="plan_videoinfo">
						<span>这是上瘾团的第一次游轮之旅，旅途中不仅有碧海蓝天与微风艳阳，更有数不清的惊喜“埋伏”在各个角落，等待与我们来一场浪漫邂逅。大家每时每刻都充满了新鲜感，每分每秒都保持着对旅程的期待。现在就来围观达人们旅行的精彩的瞬间，一起感受游轮旅行的独特魅力。</span>
						<img src="//fes.qyerstatic.com/FmjDyD9m6ew47ndib4X3WyNH4E_3?imageslim" alt="" class="s3_lv_info_dot1">
						<img src="//fes.qyerstatic.com/FlEnJQL4P3TSCWl83hfaRJISCKEj?imageslim" alt="" class="s3_lv_info_dot2"></p>
					<div class="plan_lv_video">
						<video src="//fes.qyerstatic.com/lgSeZI5dtKvo8YEF_sjYB9msNUCW" autoplay="autoplay" controls="controls"></video>
					</div>
				</div>
				<div class="plan_chengyuan">
					<h3 class="plan_chengyuantitle"><i></i><span>本期团员</span></h3>
					<ul class="plan_chengyuan_ul">
						<li>

							<router-link to="" class="s3_r_li_title">cici澄</router-link>
							<router-link to="" class="s3_rbox_li_info1">【游轮旅行全方位纪实】坐着“海洋光谱号”去旅行（设施|房间|美食|娱乐|购物）</router-link>
							<router-link to="" class="s3_r_li_user">
								<img src="//fes.qyerstatic.com/FroVg9AdujBtjcqh6JK897YUJ0XK" alt=""></router-link>
							<router-link to="" class="s3_rbox_li_info2">财务会计领域的非主流摄影师，曾在265天的间隔年旅行中环游15个国家，88座异国城市。</router-link>

						</li>
					</ul>
				</div>
			</div>

			<div class="plan_jieshao">
				<ul class="plan_jieshaoul">
					<li>
						<h3 class="plan_jieshaotitle"><i></i><span>上瘾团团长的话</span></h3>
						<br />
						<el-carousel :interval="3000" height="370px" arrow="always">
							<el-carousel-item>
								<img src="//fes.qyerstatic.com/FmTABnmyiYRwZnP_qjB1M_ainTfE" />
							</el-carousel-item>
							<el-carousel-item>
								<img src="//fes.qyerstatic.com/Fo0XH-rV9HGgxv5TMUzmnJAjGNAs" />
							</el-carousel-item>

						</el-carousel>
						<p class="plan_jieshaop">这一次，让我们一起出海，仰望星空，追逐浪花！</p>
					</li>
				</ul>
			</div>
		</div>
	</el-col>
</template>
<style lang="scss">
	.plan_jieshao {
		width: 1160px;
		margin: 0 auto;

		border-top: 1px solid #f4f4f4;
		overflow: hidden;

		.plan_jieshaoul {
			list-style: none;
			margin-top: 50px;
			width: 692px;

			.plan_jieshaop {
				width: 100%;
				line-height: 1.8;
				margin-top: 20px;
				color: #323232;
				text-align: justify;
			}
		}

		.plan_jieshaoul li {
			/deep/ .el-carousel__arrow--left {
				background: url(//fes.qyerstatic.com/FobNHG00HPqJEHoHlEoCaaTKxz9W?imageslim=) no-repeat;
				background-size: 100% 100%;
				width: 29px;
				height: 60px;
				border-radius: 0;
			}
		}

		.plan_jieshaoul li {
			/deep/ .el-carousel__arrow--right {
				background: url('//fes.qyerstatic.com/Fr0vja2vo-ycA3s1exGGpTM4qh6j?imageslim=') no-repeat;
				background-size: 100% 100%;
				width: 29px;
				height: 60px;
				border-radius: 0;

			}
		}

		.plan_jieshaotitle {
			width: 100%;
			padding-left: 30px;
			overflow: hidden;
			text-align: left;
			font-size: 30px;
			color: #343434;
			font-weight: 700;
			position: relative;
			margin-bottom: 26px;

			i {
				width: 12px;
				height: 33px;
				background-color: #00b081;
				position: absolute;
				top: 6px;
				left: 0;
			}

			span {
				font-size: 30px;
			}
		}
	}

	.plan_content {
		width: 1160px;
		margin: 70px auto;
		height: auto;
		position: relative;

		.plan_chengyuan {
			width: 410px;
			float: right;

			.plan_chengyuantitle {
				width: 100%;
				padding-left: 30px;
				overflow: hidden;
				text-align: left;
				font-size: 36px;
				color: #343434;
				font-weight: 700;
				position: relative;
				margin-bottom: 22px;

				span {
					font-size: 36px;
				}

				i {
					width: 12px;
					height: 33px;
					background-color: #00b081;
					position: absolute;
					top: 10px;
					left: 0;
				}
			}

			ul {

				width: 410px;
				overflow: hidden;
				list-style: none;

				li {
					width: 408px;
					height: 123px;
					background-color: #fff;
					border: 1px solid #d2d2d2;
					border-radius: 12px;
					-webkit-border-radius: 12px;
					position: relative;
					margin-bottom: 16px;

					.s3_r_li_title {
						font-size: 16px;
						color: #000;
						font-weight: 700;
						width: 278px;
						position: absolute;
						top: 16px;
						left: 109px;
						text-align: left;
					}

					.s3_rbox_li_info1 {
						width: 278px;
						position: absolute;
						top: 81px;
						left: 109px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size: 12px;
						color: #0373b7;
						text-align: justify;
					}

					.s3_r_li_user {
						width: 84px;
						height: 84px;
						border: 1px solid #e0e0e0;
						border-radius: 50%;

						position: absolute;
						top: 20px;
						left: 10px;

						img {
							width: 78px;
							height: 78px;
							display: block;
							border-radius: 50%;

							margin-top: 3px;
							margin-left: 3px;
						}
					}

					.s3_rbox_li_info2 {
						width: 278px;
						height: 39px;
						position: absolute;
						top: 45px;
						left: 108px;
						font-size: 12px;
						color: #474747;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						text-align: justify;
					}
				}
			}
		}

		.plan_video {
			width: 688px;
			border: 1px solid #d2d2d2;
			background: #fff;
			border-radius: 10px;
			background: white;
			float: left;

			p {
				width: 614px;
				margin: 0 auto 21px;
				padding-top: 25px;
				position: relative;

				span {
					display: block;
					border-top: 1px solid #fff;
					width: 498px;
					margin: 34px auto 0;
					text-align: justify;
					line-height: 1.8;
					letter-spacing: 1px;
				}
			}

			.s3_lv_info_dot1 {
				width: 48px;
				position: absolute;
				top: 25px;
				left: 0;
			}

			.s3_lv_info_dot2 {
				width: 48px;
				position: absolute;
				bottom: -18px;
				right: 0;
			}

			.plan_lv_video {
				width: 613px;
				height: 345px;
				margin: 38px auto 36px;

				video {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.plan_people {
		width: 1160px;
		margin: 0px auto;

		height: 482px;
		overflow: hidden;
		position: relative;

		.plan_people_img {
			width: 191px;
			float: left;
			position: relative;
			top: -5px;
			transform: rotate(3deg);


		}

		.plan_people_img:hover img {
			transform: scale(1.1);
		}

		.plan_people_img p {
			transform: rotate(-3deg);
		}

		.plan_people_img:first-child p {
			transform: rotate(0deg);
		}

		.plan_people_img:first-child {
			width: 191px;
			float: left;
			transform: rotate(0deg);

		}

		.plan_people_img:last-child {
			width: 191px;
			float: left;
			transform: rotate(3deg);

		}

		img {
			width: 224px;
			display: block;
			position: relative;

			transition: all 1s ease;
			-webkit-transition: all 1s ease;
			-moz-transition: all 1s ease;
		}

		.plan_people_dsc {
			width: 140px;
			height: 34px;
			background: url(//fes.qyerstatic.com/Fmrhp02-nEj3Wz2egYcCAHa41G9-?imageslim=) no-repeat;
			background-size: 100% 100%;
			position: absolute;
			bottom: 34px;

			line-height: 34px;
			text-align: center;
			font-size: 14px;
			color: #fff;
			font-weight: 700;
		}
	}

	.plan_dscbg {
		height: auto;
		background: #f4f4f4;
		position: relative;
		border-top: 1px solid #f4f4f4;
		overflow: hidden;
	}

	.plan_dsc {
		font-size: 18px;
		color: #343434;
		width: 900px;
		margin: 60px auto;
		text-align: center;
		line-height: 1.8;
		width: 980px;
	}

	.Q_plan_container {
		width: 100%;
		min-width: 1160px;

		overflow: hidden;
	}

	.plan_img {
		width: 100%;
		height: 678px;
		position: relative;

		img {
			width: 100%;
			height: 100%;
		}

		.plan_img_share {
			width: 60px;
			height: auto;

			position: absolute;
			right: 21%;
			top: 50px;

			/deep/ .el-dropdown-menu__item {
				line-height: 25px;
				padding: 0 10px;

			}

		}

	}

	.plan_img_share {
		/deep/ .el-dropdown-link {
			color: rgba(0, 0, 0, 0.4);
			font-size: 14px;
			line-height: 30px;
			display: block;

			white-space: nowrap;
			text-decoration: none;
			background: hsla(0, 0%, 100%, .5);
			border-radius: 6px;
			cursor: pointer;
			width: 60px;
			text-align: center;
		}
	}
</style>
<script>
	import headers from '../../../pages/web/Plan/header.vue'
	export default {
		name: 'Q_Play',
		data() {
			return {}
		},
		components: {
			headers
		},

	}
</script>
