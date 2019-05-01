<template>
    <Modal v-model="alteration_text" class-name="vertical-center-modal" :styles="{top: '20px'}">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">选择班次</p>
        <div class="alteration">
            <div class="altera">
                <input type="text" placeholder="请输入班次名称" class="alteration-input"/>
                <img src="/image/bothIcon/icon-search.png" class="alteration-img"/>
                <div class="clear"></div>
            </div>
            <table class="alteration-table">
                <tr class="alteration-table-tr1">
                    <th class="alteration-table-th">班次名称</th>
                    <th class="alteration-table-tr1">考勤时间</th>
                </tr>
                <tr class="alteration-table-tr">
                    <td class="alteration-table-td"><Radio><span class="radio-span">安吉拉</span></Radio></td>
                    <td>09:00-12:00</td>
                </tr>
                <tr class="alteration-table-tr">
                    <td class="alteration-table-td"><Radio><span class="radio-span">安吉拉</span></Radio></td>
                    <td>09:00-12:00</td>
                </tr>
                <tr class="alteration-table-tr">
                    <td class="alteration-table-td"><Radio><span class="radio-span">安吉拉</span></Radio></td>
                    <td>09:00-12:00</td>
                </tr>
            </table>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'alteration',
        data () {
            return {
                alteration_text: false,
            }
        },
        methods:{
            send_alteration:function (data) {
                this.$emit('dialog_alteration',data)
            }
        },
        props:{
            alteration: Boolean
        },
        watch:{
            'alteration':{
                handler:function (val) {
                    if (val){
                        this.alteration_text = val;
                        this.send_alteration(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "alteration.less";
</style>