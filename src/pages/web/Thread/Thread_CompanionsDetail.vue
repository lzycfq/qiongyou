<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<div class="Com_header">
			<router-link to="/Thread">穷游论坛</router-link>
			<div class="Com_from">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
					<el-form-item prop="searchinfo">
						<el-input v-model="ruleForm.searchinfo" rel="searchinfo" class="Com_input" placeholder="请输入搜索游记/经验"></el-input>
						<i class="el-icon-search iconss" @click="searchBtn('ruleForm')"></i>
					</el-form-item>
		
				</el-form>
			</div>
		</div>
		<ul class="Com-nav" v-for="(item,index) in coutryCom" :key='index'>
			<li class="itm">
				<router-link to='' class="itma">论坛首页</router-link>
			</li>
			<li class="itm">
				<router-link to='' class="itma">结伴同游</router-link>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.ouzhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { coutrycountryid: item.coutrycountryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>欧洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.yazhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>亚洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
		
			</el-popover>
		
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.meizhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>美洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.dayangzhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>大洋洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<el-popover placement="bottom" trigger="hover" popper-class="popoverouzhou">
					<div class="popoverouzhoucontent">
			<li v-for="(item,index) in item.feizhoucoutry" :key='index'>
				<router-link :to="{ path:'', params: { countryid: item.countryid}}">{{item.countryname}}</router-link>
			</li>
			</div>
			<a class="itma" slot='reference'>非洲版块 <i class="el-icon-arrow-down iconsss"></i></a>
			</el-popover>
			</li>
			<li class="itm">
				<router-link to='' class="itma">全部版块</router-link>
			</li>
		</ul>
	</el-col>
</template>

<script>
	import headers from '../../../pages/web/Thread/header.vue'
	
	export default {
		name: 'Thread_CompanionsList',
		data() {
	
			return {
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
				//   search_params:{
				//     type: this.$route.query.type,
				//  
				// },
				coutryCom: [],
				
				
	
			}
		},
	
		created() {
			this.buildcoutryCom();
		
		},

		methods: {
	buildcoutryCom() {
				this.axios.get('/api/buildcoutryCom').then(res => {
					this.coutryCom = res.data.data
				}).catch(function(error) {
					console.log(orror)
				})
			},
			
	
			searchBtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('', {
							params: {
								'searchinfo': this.$rels.searchinfo.value
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
			
	
	
	
			
		},
		components: {
			headers,
	
	
		},
	}
</script>

<style lang="scss">
	.Com_header {
		padding: 30px 0;
		width: 1160px;
		margin: 0 auto;
		position: relative;
	
		a {
			margin: 23px 0;
			font-size: 36px;
			color: #10b041;
			line-height: 36px;
		}
	
		.Com_from {
			float: right;
			width: 230px;
		}
	
		.iconss {
			position: absolute;
			top: 10px;
			font-size: 20px;
			left: 15px;
		}
	}
		.Com_input /deep/ .el-input__inner {
		padding: 0 40px;
	}
	.Com-nav {
		list-style: none;
		width: 1160px;
		margin-bottom: 12px;
		line-height: 14px;
		font-size: 14px;
		margin: 0 auto;
	
		.itm {
			display: inline-block;
			padding-right: 40px;
	
			.itma {
				color: #323232;
				font-weight: 700;
			}
	
			.iconsss {
				font-weight: 700;
	
			}
	
		}
	}
</style>
