<template>
    <div class="hot-list">
        <el-row class="hot-nav">
            <el-col :span="12">
                <span class="hot-title">热销楼盘</span>
                <span class="hot-description">为您推荐优质精品楼盘</span>
                <span class="hot-more">更多楼盘<i class="el-icon-arrow-right"></i></span>
            </el-col>
        </el-row>
        <el-row class="hot-building" :gutter=10>
            <el-col :span="6" v-for="str in list" :key="index">
                <el-row>
                    <el-col class="hot-building-img">
                        <img :src="str.path" alt="" />
                    </el-col>
                </el-row>
                <el-row class="hot-building-info">
                    <el-col :span="12" class="name">{{str.name}}</el-col>
                    <el-col :span="12" class="price">1240元/m²</el-col>
                    <el-col :span="24" class="layout">户型:63</el-col>
                    <el-col :span="24" class="address">{{str.address}}</el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'hot-list',
        data(){
            return {
                building_list:[],
                index:'',
            }
        },
        mounted () {
            this.axios.get('/api/hot')
                .then((response) =>{
                    var array = new Array();
                    //console.log(response.data);
                    response.data.forEach(function (item) {
                        var temp = {};
                        temp['name'] = item.name;
                        temp['path'] = item.rotation == null ? '' : item.rotation.path;
                        temp['address'] = item.address;
                        array.push(temp);
                    });
                    this.list = array;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style lang="scss" scoped>
    .hot-list{
        overflow: hidden;
        .hot-nav{
            margin: 20px 0;
            border-left: 4px solid #E4292F;
            text-align: left;
            .hot-title{
                margin: 0 15px;
                @include text-font(20px,$text-color-title,bold);
            }
            .hot-description{
                font-size: 0.8rem;
            }
            .hot-more{
                font-size: 0.8rem;
                position: absolute;
                right: 5px;
                bottom: 5px;
            }
        }
        .hot-building{
            .hot-building-img{
                @include image-16();
            }
            .hot-building-info{
                margin:5px;
                *{
                    margin: 2px 0;
                }
                .name{
                    @include text-font(18px,$text-color-title,bold);
                    text-align:left
                }
                .price{
                    text-align: right;color: #FF4923
                }
                .layout{
                    margin-left: 10px;
                    text-align: left;
                }
                .address{
                    margin-left: 10px;
                    text-align:left;
                }
            }
        }
    }
</style>

