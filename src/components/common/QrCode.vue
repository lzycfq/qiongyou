// vue 文件
<template>
    <qriously :value="value"   :backgroundAlpha="backgroundAlpha"/>
</template>

<script>
    export default {
        name: 'qr-code',
        props:['value'],
        data(){
            return {
                // 二维码大小 默认 100
               
                // 背景透明度，默认透明 0
                backgroundAlpha: 1,
        }
        }
    }
</script>
<style>
	canvas{
		width: 72px;
		margin-left: 6%;
		height: 72px;
	}
</style>