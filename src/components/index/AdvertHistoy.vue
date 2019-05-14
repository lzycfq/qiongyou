<template>
    <div class="advert">
        <el-row>
            <el-col>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" :data-history="str.id" v-for="str in ad">
                            <img :src="str.url"/>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-row class="search-nav">
                <el-col class="search" :span="12">
                    <div style="margin-top: 5px;">
                        <el-input v-model="inputValue" placeholder="请输入小区/楼盘" clearable class="input-with-select">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            <el-select v-model="selectValue" slot="prepend" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search" class="search-btn">搜索</el-button>
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="12" class="building-link">
                    <ul>
                        <li>碧桂园苹果</li>
                        <li>卓越中环</li>
                        <li>世纪豪园</li>
                        <li>新华苑</li>
                    </ul>
                </el-col>
            </el-row>
        </el-row>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data(){
            return {
                ad:[],
                options: [{
                    value: '1',
                    label: '广东'
                }, {
                    value: '2',
                    label: '深圳'
                }, {
                    value: '3',
                    label: '东莞'
                }, {
                    value: '4',
                    label: '中山'
                }, {
                    value: '5',
                    label: '北京'
                }],
                inputValue: '',

                selectValue:'东莞'
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-wrapper',
                //paginationClickable: true,
                history: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
                // 如果需要前进后退按钮
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });

            this.axios.get('/api/advert').then((response) => {
                var ad = [];
                response.data.forEach(function (e) {
                    ad.push({url:e.image,id:e.id});
                    //console.log(e);
                });
                this.ad = ad;
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
</script>
<style lang="scss" scoped>
    .swiper-container{
        .swiper-slide{
            @include image-16();
        }
        .swiper-button-prev,.swiper-button-next{
            background: #3f4040;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            opacity:0.5;
            color: white;
            i{
                opacity:1;
                font-size: 50px;
            }
        }
    }
    .search-nav{
        background: #2B3050;
        .search{
            padding: 10px 0 15px 80px;
            .el-select .el-input {
                width: 100px;
            }
            .input-with-select .el-input-group__prepend,.input-with-select  .el-input-group__append {
                background-color: #fff;
                border: none;
            }

            .search-btn{
                background-color: #E60918;
                color: white;
                border: 1px solid #E60918;
            }
        }
        .building-link{
            color: white;
            padding: 15px;
            ul {
                list-style:none;
                li{
                    float: left;
                    margin: 0 0 0 15px;
                }
            }
        }
    }
</style>

