<template>
    <Modal v-model="machinery_text" class-name="vertical-center-modal">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">必须打卡日期</p>
        <div class="machinery">
            <p class="machinery-p">日期：<DatePicker type="date" placeholder="2019-03-16" style="width: 110px"></DatePicker></p>
            <div class="machin">
                <input type="text" placeholder="请输入班次名称" class="machinery-input"/>
                <img src="/image/bothIcon/icon-search.png" class="machinery-img"/>
                <div class="clear"></div>
            </div>
            <table class="machinery-table">
                <tr class="machinery-table-tr1">
                    <th class="machinery-table-th">班次名称</th>
                    <th class="machinery-table-tr1">考勤时间</th>
                </tr>
                <tr class="machinery-table-tr">
                    <td class="machinery-table-td"><Radio>&nbsp;&nbsp;&nbsp;&nbsp;安吉拉</Radio></td>
                    <td>09:00-12:00</td>
                </tr>
                <tr class="machinery-table-tr">
                    <td class="machinery-table-td"><Radio>&nbsp;&nbsp;&nbsp;&nbsp;安吉拉</Radio></td>
                    <td>09:00-12:00</td>
                </tr>
                <tr class="machinery-table-tr">
                    <td class="machinery-table-td"><Radio>&nbsp;&nbsp;&nbsp;&nbsp;安吉拉</Radio></td>
                    <td>09:00-12:00</td>
                </tr>
            </table>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'machinery',
        data () {
            return {
                machinery_text: false,
            }
        },
        methods:{
            send_machinery:function (data) {
                this.$emit('dialog_machinery',data)
            }
        },
        props:{
            machinery: Boolean
        },
        watch:{
            'machinery':{
                handler:function (val) {
                    if (val){
                        this.machinery_text = val;
                        this.send_machinery(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "machinery.less";
</style>