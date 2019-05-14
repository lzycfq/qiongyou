<template>
	<el-col :span="24">
		<app-header></app-header>
		<div><img src="../../assets/images/aimeite/white_bg.jpg" width="100%" /></div>
		<div v-for="(item,index) in detail" :key="index">
			<aside class="Banner">
				<img :src="item.bannerimg" width="100%">
			</aside>
        
			<div class="contain Pro_info">
				<div class="boxd box1d">
					<div class="text">
						<h2 class="h2">{{item.detailtitle}}</h2>
						<router-link to="" >立即购买</router-link>
						<p class="p">{{item.detaildsc}}</p>
					</div>
				</div>
			</div>
		<!-- 第二层盒子 --> 
		<div class="boxd box2d" v-for="(item,index) in item.detailimg">
			<img :src="item.detailsimg" alt="" width="100%"/>
		</div>
		
		</div>

	</el-col>
</template>
<script>
	import Header from '../../pages/mobile/components/header.vue';
	export default {
		name: 'Product',
		data() {
			// 			// 此处自定义校验手机号码js逻辑
			// 			var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			// 			var validatePhone = (rule, value, callback) => {
			// 				if (!value) {
			// 					return callback(new Error('请输入手机号码'))
			// 				}
			// 				setTimeout(() => {
			// 					if (!phoneReg.test(value)) {
			// 						callback(new Error('格式有误'))
			// 					} else {
			// 						callback()
			// 					}
			// 				}, 1000)
			// 			};
			const self = this

			return {
				// 				source: this.$route.query.source,
				// 				keyword: this.$route.query.keyword,
				id: this.$route.params.id,
               
             detail:[]
			}
		},

		created() {
          this.builddetail();
		},


		methods: {
          builddetail(){
			  this.axios.get('/api/builddetail').then(res => { //+this.id
			  
			  	this.detail = res.data.data //请求出来的标签数据			
			  }).catch(function(error) {
			  	console.log(error);
			  })
		  }
		},
		components:{
	   'app-header':Header,
		},
		computed: {

		},

	}
</script>
<style lang="scss" scoped>
	.Pro_info .boxd {
		padding: 1% 0;
	}

	@media screen and (max-width: 480px) {
		.Pro_info .box1d .text {
			font-size: 14px;
		}
	}

	@media screen and (max-width: 480px) {
		.Pro_info .box1d .text {
			font-size: 16px;
		}
	}

	.Pro_info .box1d .text .h2 {
		font-size: 34px;
		color: #333;
		margin: 5% 3% 0;
		font-weight: normal;
		text-align: left;


	}

	@media screen and (max-width: 480px) {
		.Pro_info .box1d .text .h2 {
			font-size: 24px;

			text-align: left;
		}
	}

	.Pro_info .box1d .text a {
		background: #005abc;
		line-height: 40px;
		padding-left: 29px;
		width: 88px;
		position: relative;
		top: -25px;
		border-radius: 20px;
		display: block;
		color: #fff;
		text-align: left;
		float: right;
		right: 15px;
	}

	.Pro_info .box1d .text .p {
		font-size: 24px;
		margin: 2% 3% 10%;
		text-align: left;
	}

	.Pro_info .box1d .text .h3 {
		font-size: 24px;
		color: #222;
		text-align: left;
		margin-left: 3%;
	}

	@media screen and (max-width: 480px) {

		.Pro_info .box1d .text .p,
		.Pro_info .box1d .text .h3 {
			font-size: 16px;
		}
	}

	.Pro_info .box1d table td {
		padding: 2% 0;
		text-align: left;
		position: relative;
		left: 3%;
		border-bottom: 1px solid #dcdcdc;
	}
</style>
