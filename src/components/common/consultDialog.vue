<template>
    <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
</template>

<script>
    export default {
        props:['dialogVisible'],
        data(){
            return {
                //初始化值
                centerDialogVisible :this.dialogVisible,
            }
        },
        watch:{
            centerDialogVisible(val){
                //console.log('child component centerDialogVisible' + this.centerDialogVisible + 'new ' + newVal + ' old ' + oldVal );
                this.centerDialogVisible = val;     // 监测value的变化，并赋值。
                this.$emit('changConsultDialog',val); //子组件关闭弹框后，改变父组件的值
            },
            dialogVisible(val){
                this.centerDialogVisible = val
            }
        },
    };
</script>