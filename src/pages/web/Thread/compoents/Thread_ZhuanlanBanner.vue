<template>
	<div class="Zhuanlan_bannerBG">
	<div class="Zhuanlan_banner">
		<p class="title_ptsmV">推荐专栏</p>
		<el-carousel :interval="5000" arrow="always" indicator-position="outside" height="630px">
			<el-carousel-item v-for="(val,index) in Zhuanlanbanner" :key='index'>
				<ul class="partUL">
					<li v-for="(val,index) in val.Zhuanlanbannercontet" :key='index' :style="checkbackground(index)">
						<router-link :to="{path:'/Thread_Zhuanlan_PersonalDetail',params:{Zhuanlanbannerid:val.Zhuanlanbannerid}}">
							<img class="zl_img" :src="val.Zhuanlanbannerimg" lazy="loaded">
							<p class="zl_title">{{val.Zhuanlanbannertitle}}</p>
							<p class="zl_desc">{{val.Zhuanlanbannerdesc}}</p>
							<p class="num_3ym5g">{{val.Zhuanlanbannerdingyue}}&nbsp;订阅<i></i>{{val.Zhuanlanbannerwenzhang}}篇文章
							</p>
						</router-link>
					</li>
				</ul>
			</el-carousel-item>
		</el-carousel>
	</div>
	</div>

</template>

<script>
	export default {
		name: 'zhuanlan_banner',
		data() {
			return {
				Zhuanlanbanner: [],
			}
		},
		created() {
			this.buildZhuanlanbanner();

		},
		//定时器
		mounted() {
			this.timer = setInterval(() => {
				this.checkbackground();
			}, 1000)
		},
		computed: {
			checkbackground() {
				return function(index) {
					let r, g, b;
					r = Math.floor(Math.random() * 255);
					g = Math.floor(Math.random() * 255);
					b = Math.floor(Math.random() * 255);
					// return "rgb("+r+","+g+","+b+")"
					let str = "background:" + "rgb(" + r + "," + g + "," + b + ")";
					return str;
				}

			}
		},
		//销毁定时器
		beforeDestroy() {
			clearInterval(this.timer);
			this.timer = null;
		},
		methods: {
			buildZhuanlanbanner() {
				this.axios.get('/api/buildZhuanlanbanner').then(res => {
					this.Zhuanlanbanner = res.data.data
				})
			},
		},
	}
</script>

<style lang="scss">
	.Zhuanlan_bannerBG{
		width: 100%;
    background: rgba(249, 249, 249, 1);
		
	}
		.Zhuanlan_banner {
		width: 980px;
		margin: 0 auto;
		overflow: hidden;
	
		.title_ptsmV {
			width: 100%;
			text-align: center;
			font-size: 34px;
			font-weight: 300;
			margin-top: 50px;
			line-height: 48px;
			color: rgba(0, 0, 0, .8);	
	
		}
	
		.partUL {
			flex-shrink: 0;
			width: 705px;
			margin: 0 auto;
			list-style: none;
	
			li {
				display: inline-block;
				width: 210px;
				height: 276px;
				background: lightgreen;
				margin: 25px 0 0 25px;
				vertical-align: top;
				box-shadow: 0 2px 12px rgba(0, 0, 0, .06);
	
				.zl_img {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					overflow: hidden;
					margin: 30px 55px 27px;
					cursor: pointer;
				}
	
				.zl_title {
					font-size: 16px;
					font-weight: bold;
					line-height: 22px;
					/* color: rgba(0,0,0,.8); */
					color: rgb(51, 51, 51);
					/* width: 100%; */
					text-align: center;
					margin-bottom: 5px;
					overflow: hidden;
					text-overflow: ellipsis;
					height: 22px;
					white-space: nowrap;
					padding: 0 10px;
				}
	
				.zl_desc {
					font-size: 14px;
					/* color: rgba(0,0,0,.6); */
					color: rgb(102, 102, 102);
					line-height: 22px;
					text-align: center;
					padding: 0 14px;
					margin-bottom: 15px;
					width: 100%;
					height: 41px;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					line-clamp: 2;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
	
				.num_3ym5g {
					text-align: center;
					font-size: 12px;
					line-height: 17px;
					/* color: rgba(0,0,0,.35); */
					color: rgb(166, 166, 166);
	
					i {
						display: inline-block;
						width: 1px;
						height: 10px;
						/* background: rgba(0,0,0,.35); */
						background: rgb(166, 166, 166);
						vertical-align: -1px;
						margin: 0 8px;
					}
				}
			}
		}
	}
</style>
