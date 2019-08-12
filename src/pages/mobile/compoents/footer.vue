<template>
	<div class="m-index-footer">
		<p class="links">
			<router-link to="">手机版</router-link>
			<router-link to="">电脑版</router-link>
			<router-link to="">APP</router-link>
			<router-link to="">意见反馈</router-link></p>
			<p class="copy-right">2004-2019 ©北京穷游天下科技发展有限公司™<br>京ICP备12003524号&nbsp;|&nbsp;电话 010 64554669</p>
			</div>
</template>

<script>
</script>

<style>
	.m-index-footer {
		margin-top: 10px;
    padding-bottom: 24px;
    background-color: #2d3741;
    text-align: center;
}
.m-index-footer:before {
    content: "";
    display: block;
    height: 6px;
    background-color: #2bab79;
}
.m-index-footer .links {
    height: 48px;
	
    font-size: 18px;
	
}
.m-index-footer .links a{
	display: inline-block;
    padding: 0.2rem;
	font-size: 0.45rem;

    color: #9ea3ab;

}
.m-index-footer .copy-right {
    color: #656669;
    background-color: #2d3741;
    font-size: 12px;
    line-height: 16px;
}
</style>
