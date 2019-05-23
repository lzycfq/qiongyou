<template>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {

			}
		},
		methods: {
			seachbtn(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.axios.get('/api/buildlogin').then(res => {
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
						}.bind(this)).catch(function(err) {
							this.$Message.error('登录失败，错误：' + err);
							this.$Loading.error();
						}.bind(this));
					} else {
						console.log(error);
					}
				})


			}
		}
	}
</script>

<style>
</style>
