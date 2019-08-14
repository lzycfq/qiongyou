<template>
	<el-col :span="24">
		<div class="compo-search-bar">
			<router-link to="/index" class="logo"><img src="../../../assets/images/qiongyou/m-logo.svg" /></router-link>
			<div class="compo-search">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="75px" class="demo-ruleForm">
					<el-form-item prop="compovalue">
						<el-input v-model="ruleForm.compovalue" placeholder="搜索国家、城市、景点、美食"></el-input>
						<i class="el-icon-search compo-searchicon" @click="composearch('ruleForm')"></i>
					</el-form-item>

				</el-form>
			</div>
		</div>
		<div class="compo-hot-month">
			<div class="m-title"><span class="l-tit">当季热门</span>
				<router-link to="" class="s-tit"><i class="el-icon-warning"></i>&nbsp;还没有护照?</router-link>
			</div>
			<div style="clear: both;"></div>
			<div style="overflow:hidden">
				<div class="compo-hot-month-list">
					<span class="compo-list" v-on:load="scrollleft" v-bind:class="{active:isactive}" style="width:65px;" v-for="(month,index) in monthdata">{{month}}</span>
				</div>
			</div>

		</div>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					compovalue: '',
				},
				rules: {
					compovalue: [{
							required: true,
							message: '搜索国家、城市、景点、美食',
							trigger: 'blur'
						},
						{
							min: 0,
							max: 11,
							message: '搜索国家、城市、景点、美食',
							trigger: 'blur'
						}
					],
				},
				
				monthdata: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
			}
		},
		computed: {
			scrollleft(){
				var date=new Date;
				var m=date.getMonth()+1;
				console.log(m)

				// this.isactive[m]=true
			},
			
		},
		methods: {
			composearch(formName) {
				this.$refs[formName].validate((valid) => {
					this.axios.get('', {
						params: {
							'compovalue': this.ruleForm.compovalue,
						},
					}).then(res => {
						//搜索成功 
					}).catch(function(error) {
						console.log(error);
					});
				});
			},
		},
	}
</script>

<style lang='scss'>
	.compo-search-bar {
		padding: 0.06rem 0.40rem;
		background-color: #fff;
		height: 1.2rem;
		overflow: hidden;
		box-sizing: border-box;
		box-shadow: 0 -1px 7px 0 rgba(0, 0, 0, 0.07);
		position: relative;

		.logo {

			float: left;

			img {
				width: 1.6rem;
				height: 1.2rem;
				position: relative;
				top: -2px;
			}
		}

		.compo-search {
			position: relative;

			/deep/ .el-input__inner {
				border-radius: 0.4rem;
				height: 0.8rem;
				border: none;
				background-color: rgba(0, 0, 0, 0.05);
			}

			/deep/ .el-form-item {
				margin-bottom: 0;
			}
		}

		.compo-searchicon {
			position: absolute;
			right: 0.3rem;
			font-size: 0.5rem;
			top: 0.25rem;
		}
	}

	.compo-hot-month {
		width: 100%;
		height: auto;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.05);

		.m-title {
			padding: 0 0.40rem;
			font-size: 0.2rem;
			color: #000;
			margin-top: 0.7rem;
			position: relative;
			overflow: hidden;

			.l-tit {
				font-weight: 700;
				float: left;
				font-size: 0.6rem;

			}

			.s-tit {
				font-size: 0.12rem;
				color: #11bf79;
				float: right;
				position: relative;
				top: 0.2rem;
				text-decoration: none;
			}
		}

		.compo-hot-month-list {
			margin-top: 0.5rem;
			overflow-x: scroll;
			overflow-y: hidden;
			padding: 0 15px 30px;
			white-space: nowrap;

			.compo-list {
				display: inline-block;
				background-color: #fff;
				border: 1px solid #dedede;
				font-size: 13px;
				color: #000;
				height: 32px;
				line-height: 32px;
				text-align: center;
				border-radius: 4px;
				margin-right: 12px;
				box-sizing: border-box;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				padding: 0 5px;
			}

			.compo-list.active {
				background-color: #11bf79;
				border-color: #11bf79;
				color: #fff;
			}

		}
	}
</style>
