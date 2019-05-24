<template>
	<el-col :span="24">
		<div class="login-container">
			<div class="login-wrapper">
				<div class="login-logo"><img src="//fes.qyerstatic.com/fe_ssr_passport/static/login_logo2.41bd0a52.png" alt="穷游">
					<span class="titlelogin">注册</span></div><!-- login-logo -->
				<div class="login-section">
					<div class="q-login-layout">
						<div class="q-login-layout">
							<br />
							<br />
							<div class="q-login-form q-login-formphone">
								<el-form :model="ruleForms" :rules="duanxinrules" ref="ruleForms" class="demo-ruleForm">
									<div>
										<div class="login-select">
											<el-select v-model="countryvalue" placeholder="请选择" rel="countryvalue">
												<el-option v-for="item in country" :key="item.value" :label="item.label" :value="item.value">
													<span style="float: left">{{ item.label }}</span>
													<span style="float: right; color: #8492a6; font-size: 13px">({{ item.value }})</span>
												</el-option>
											</el-select>
										</div>
										<el-form-item prop="phone">
											<div class="login-phone">
												<el-input type="password" placeholder="请输入手机号码" v-model.number="ruleForms.phone" autocomplete="off" rel="phone"></el-input>
											</div>
										</el-form-item>
									</div>
									<div class="verifycode">
										<div class="yanzhengma">
											<el-form-item prop="verifycode">
												<!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
												<el-input v-model="ruleForms.verifycode" placeholder="请输入验证码" class="identifyinput" rel="verifycode"></el-input>
											</el-form-item>
										</div>
										<div class="identify">
											<div @click="refreshCode">
												<SIdentify :identifyCode="identifyCode"></SIdentify>
											</div>
										</div>
										<div style="clear: both;"></div>
										<p @click="refreshCode" class="loginrefresh">看不清，换一张 <i class="el-icon-refresh"></i></p>
									</div>
									<div class="verifycode">
										<div class="yanzhengma">
											<el-form-item prop="phonecode">

												<el-input v-model="ruleForms.phonecode" placeholder="请输入短信验证码" class="identifyinput" rel="phonecode"></el-input>
											</el-form-item>
										</div>
										<div class="identify">
											<el-button @click="send" style="width:100%;position: relative;top:-16px;" type="success" :disabled="disabled=!show">
												<span v-show="show">获取验证码</span>
												<span v-show="!show" class="count">{{count}} s</span>
											</el-button>
										</div>
									</div>
									<div style="clear: both;"></div>
									<el-form-item prop="name" class="namepass">
										<el-input v-model="ruleForms.name" placeholder="输入一个极具辨识度名字" rel="name"></el-input>
									</el-form-item>
									<el-form-item prop="pass" class="namepass">
										<el-input v-model="ruleForms.pass" placeholder="输入8-16位数的密码" rel="pass"></el-input>
									</el-form-item>
									<el-button class="haobtn" @click="submitsForm('ruleForms')">登录</el-button>
								</el-form>
								<div class="q-login-bottom"><span class="fl">
										已有穷游帐号？<router-link to="/Login">登录</router-link></span><span class="fr">
										同意<router-link to="">会员条款</router-link>和<router-link to="">免责声明</router-link></span></div>
							</div><!-- q-login-form -->

						</div>
						</el-tab-pane>

						</el-tabs>
					</div><!-- q-login-layout -->
				</div>
			</div>
		</div>
	</el-col>
</template>
<style lang="scss">
	.verifycode:nth-of-type(3) {
		margin-top: 0;
	}

	.verifycode {
		margin-top: 20px;
		width: 100%;

		.yanzhengma {
			width: 60%;
			float: left;
		}
	}

	.verifycode .yanzhengma {
		/deep/ .el-form-item__content {
			width: 100% !important;
			float: left !important;
		}
	}

	.verifycode .identify {
		width: 35%;
		height: 40px;
		float: right;
	}

	.loginrefresh {
		float: right;
		font-size: 12px;
		position: relative;
		top: -20px;
	}

	.login-select {
		width: 25%;
		float: left;
	}

	.q-login-formphone {
		/deep/ .el-form-item__content {
			width: 70%;
			float: right;
		}
	}

	.namepass {
		/deep/ .el-form-item__content {
			width: 100% !important;
		}
	}

	.q-login-bottom {
		zoom: 1;
		padding: 10px 0;
		height: 20px;
		line-height: 20px;
		color: #959595;
		font-size: 14px;

		a {
			color: #10b041;
		}

		.fr {
			float: right;
		}
	}

	.q-login-auth {
		padding: 40px 0 10px;
		font-size: 0;
		text-align: center;

		.auth-qq {
			display: inline-block;
			margin: 0 21px;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-decoration: none;
			text-align: center;
			color: #d7d7d7;
			overflow: hidden;
			background-size: cover;
			background-image: url('../../../src/assets/images/qiongyou/QQ_1.png');
		}

		.auth-weibo {
			display: inline-block;
			margin: 0 21px;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-decoration: none;
			text-align: center;
			color: #d7d7d7;
			overflow: hidden;
			background-size: cover;
			background-image: url('../../../src/assets/images/qiongyou/weibo_1.png');
		}

		.auth-taobao {
			display: inline-block;
			margin: 0 21px;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-decoration: none;
			text-align: center;
			color: #d7d7d7;
			overflow: hidden;
			background-size: cover;
			background-image: url('../../../src/assets/images/qiongyou/taobao.png');
		}

		.auth-weixin {
			display: inline-block;
			margin: 0 21px;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-decoration: none;
			text-align: center;
			color: #d7d7d7;
			overflow: hidden;
			background-size: cover;
			background-image: url('../../../src/assets/images/qiongyou/weixin_2.png');
		}
	}

	.login-section {
		margin-top: 45px;
		padding: 10px 0;
		-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .3);
		box-shadow: 0 0 10px rgba(0, 0, 0, .3);
		background: hsla(0, 0%, 100%, .95);

		.q-login-layout {
			position: relative;
			margin: 0 auto;
			width: 330px;

			.q-login-tip {

				height: 40px;
				line-height: 40px;
				font-size: 14px;
				color: #959595;

				a {
					color: #3f9f5f;
				}
			}

			//q-login-tip
		}
	}

	.q-login-layout .el-form-item:nth-of-type(2) {
		margin-bottom: 5px;
	}

	.q-login-layout .haobtn {
		display: inline-block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border: 0;
		padding: 0 15px;
		width: 100%;
		height: 36px;
		line-height: 36px;
		border-radius: 3px;
		font-size: 16px;
		color: #fff;
		cursor: pointer;
		vertical-align: top;
		background-color: #3f9f5f;

	}

	.q-login-layout .input-tip a {
		color: #959595;
		float: right;
		font-size: 12px;
		margin-bottom: 5px;
	}



	.login-container {

		width: 100%;
		height: 100%;
		min-width: 960px;
		min-height: 785px;
		background: url(//fes.qyerstatic.com/fe_ssr_passport/static/web_login_bg.ecb39528.jpg) top/cover no-repeat;

		.login-wrapper {
			margin: 0 auto;
			padding: 60px 0;
			width: 380px;

			.login-logo {
				text-align: center;

				img {
					border: 0;
					height: 46px;
					vertical-align: middle;
				}

				.titlelogin {
					font-size: 24px;
					font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
					color: #fff;

					vertical-align: middle;
					text-shadow: 0 0 4px rgba(0, 0, 0, .3);
				}
			}

			//login-logo
		}
	}
</style>
<script>
	import SIdentify from '../../pages/web/compoents/identify.vue'
	export default {
		name: 'login',

		data() {
			var validPhone = (rule, value, callback) => {
				if (!value) {
					callback(new Error('请输入电话号码'))
				} else if (!isvalidPhone(value)) {
					callback(new Error('请输入正确的11位手机号码'))
				} else {
					callback()
				}
			}
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			}
			// 验证码自定义验证规则
			const validateVerifycode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入验证码'))
				} else if (value !== this.identifyCode) {
					console.log('validateVerifycode:', value)
					callback(new Error('验证码不正确!'))
				} else {
					callback()
				}

			}
			//短信验证码validatephonecode
			var validatephonecode = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请输入6位短信验证码'));
				}

			}

			return {


				ruleForms: {
					phone: '',
					verifycode: '',
					phonecode: '',
					name: '',
					pass: ''
				},

				duanxinrules: {
					phone: [{
						required: true,
						trigger: 'blur',
						validator: validPhone
					}],
					verifycode: [{
						required: true,
						trigger: 'blur',
						validator: validateVerifycode
					}],
					phonecode: [

						{
							required: true,
							trigger: 'blur',
							validator: validatephonecode
						}
					],
					pass: [{
						validator: validatePass,
						trigger: 'blur',
						required: true,
					}],
					name: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 8 到 16 个包含大小写字母',
							trigger: 'blur'
						}
					]
				},
				country: [{
					value: '012',
					label: '中国'
				}, {
					value: '052',
					label: '日本'
				}, {
					value: '063',
					label: '泰国'
				}, {
					value: '075',
					label: '新加坡'
				}, {
					value: '045',
					label: '马来西亚'
				}],
				countryvalue: "中国",
				identifyCodes: '1234567890',
				identifyCode: '',
				show: true, // 初始启用按钮
				count: '', // 初始化次数
				timer: null,
			}
		},
		components: {
			SIdentify
		},
		props: [],
		mounted() {
			this.identifyCode = ''
			this.makeCode(this.identifyCodes, 4)
		},

		methods: {

			submitsForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('/api/buildlogin', {
							params: {
								'phone': this.$refs.phone.value,
								'verifycode ': this.$refs.verifycode.value,
								'phonecode ': this.$refs.phonecode.value,

							}
						}).then(res => {
							var json = res.data
							console.log(json.data);
							this.$Message.success('success!');
							this.$store.commit('ADD_COUNT', json.data.token);
							let clock = window.setInterval(() => {
								this.totalTime--;
								if (this.totalTime < 0) {
									window.clearInterval(clock);
									this.$Loading.finish();
									this.$router.push('/');
								}
							}, 1000)
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			// 随机生成四位验证码
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min)
			},
			// 点击切换验证码
			refreshCode() {
				this.identifyCode = ''
				this.makeCode(this.identifyCodes, 4)
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					]
				}
				console.log(this.identifyCode)
			}

		}
	}
</script>
