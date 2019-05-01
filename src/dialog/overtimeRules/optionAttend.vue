<template>
    <Modal v-model="optionAttend_text" width="562px">
        <p solt="header" class="optionAttend_title">选择考勤组</p>
        <div class="optionAttend-body">
            <Table ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
        <div class="optionAttend" slot="footer">
            <div class="optionAttend-footer">
                <span solt="footer"  class="optionAtttend_foot_span fl">已选择：个考勤组</span>
                <button solt="footer" class="optionAttend-but">保存</button>
                <button solt="footer" class="optionAttend-but1" @click="quXiao">取消</button>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'optionAttend',
        data(){
            return{
                optionAttend_text: false,
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '后勤组名称',
                        key:'name'
                    },
                ],
                data1: [
                    {
                        name: '后勤',
                    },
                    {
                        name: '后勤',
                    }
                ]
            }
        },
        methods:{
            send_optionAttend:function (data) {
                this.$emit('dialog_optionAttend', data)
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.optionAttend_text = false;
            }
        },
        props:{
            optionAttend: Boolean
        },
        watch:{
            'optionAttend':{
                handler:function (val) {
                    if (val){
                        this.optionAttend_text = val;
                        this.send_optionAttend(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "optionAttend.less";
</style>