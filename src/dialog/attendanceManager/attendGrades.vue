<template>
    <Modal v-model="attendGrades_text" class-name="vertical-center-modal">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">选择班次</p>
        <div class="machinery">
            <div class="machin">
                <input type="text" placeholder="请输入班次名称" class="machinery-input"/>
                <img src="/image/bothIcon/icon-search.png" class="machinery-img"/>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
            <Table ref="selection" :columns="banciCount" :data="data1" :border="false"></Table>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'attendGrades',
        data () {
            return {
                attendGrades_text: false,
                // 表格数据
                banciCount: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '班次名称',
                        key:'name',
                        width: 160
                    },
                    {
                        title: '考勤时间',
                        key:'time'
                    },
                ],
                data1: [
                    {
                        name: '后勤',
                        time: '2019-03-28'
                    },
                    {
                        name: '后勤',
                        time: '2019-03-28'
                    }
                ]
            }
        },
        methods:{
            send_attendGrades:function (data) {
                this.$emit('dialog_attendGrades',data)
            },
            // 全选方法
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        },
        props:{
            attendGrades: Boolean
        },
        watch:{
            'attendGrades':{
                handler:function (val) {
                    if (val){
                        this.attendGrades_text = val;
                        this.send_attendGrades(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "attendGrades.less";
</style>