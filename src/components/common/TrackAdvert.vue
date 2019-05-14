<template></template>
<script>
    export default {
        name: 'track-advert',
        props: {
            client: {  // 必须提供字段
                required: true
            }
        },
        data(){
            return {
                //百度来源跟踪
                source:this.$route.query.source,
                keyword:this.$route.query.keyword,
                e_creative:this.$route.query.e_creative,
            }
        },
        created(){
            this.trackAdvert();
        },
        methods:{
            trackAdvert(){
                if (this.source){
                    this.axios.get('/admin/advert-track',
                        {
                            params: {
                                'source':this.source,
                                'keyword':this.keyword,
                                'e_creative':this.e_creative,
                                'ip':returnCitySN["cip"],
                                'client':this.client,
                            },
                        }
                    ).then(res => {

                    }).catch(function(error) {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>