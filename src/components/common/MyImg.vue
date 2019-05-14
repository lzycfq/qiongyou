<template>
    <div :style="imageStyle()">
        <img    :src="src" class="grid-content_img" style="width:100%;
                                        height:100%;
                                        position: absolute;
                                        left: 0;
                                        right: 0;
                                        top: 0;
                                        bottom: 0;
                                        margin: auto;">
									
    </div>
</template>

<script>
	import lpbigimgs from '../../pages/web/compoents/xiangceimgs.vue'
	export default {
        props: {
            src: {  // 必须提供字段
                required: true
            },
            width: {   // 可选字段，有默认值
                default: 100
            },
			height: {   // 可选字段，有默认值
			    default: 75
			},
			
        },
	
		name: 'MyImg',
			data(){
			return{
			
			}
		},
        computed: {
            imageStyle(){
                return function () {
                    return "position: relative;width:" + this.width + "%;padding-top:" + this.height + "%;margin: auto;"
                }
            }
        },
    }
</script>