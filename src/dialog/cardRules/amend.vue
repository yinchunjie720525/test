<template>
    <Modal v-model="amend_text" class-name="vertical-center-modal" width="640px">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">修改补卡规则</p>
        <div class="amendShift">
            <div class="amendShift-title-option">
                <Checkbox><span class="one-span">允许补卡</span></Checkbox>
                <span class="amendShift-span">(勾选后，员工可以发起补卡)</span>
            </div>
            <div class="amendShift-title-options">
                <Checkbox><span class="one-span">限制补卡次数：</span></Checkbox>
                <span>每月可提交<span class="two-span"><InputNumber size="small"></InputNumber></span>次补卡</span>
                <span class="amendShift-span">(按自然月计算)</span>
            </div>
            <div class="amendShift-title-options">
                <Checkbox><span class="one-span">限制补卡时间：</span></Checkbox>
                <span>可申请过去<span class="two-span"><InputNumber size="small"></InputNumber></span>天内的补卡</span>
                <span class="amendShift-span">(填写0天，只能发起当天的补卡)</span>
            </div>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'amend',
        data () {
            return {
                amend_text: false
            }
        },
        methods:{
            send_amend:function (data) {
                this.$emit('dialog_amend',data)
            }
        },
        props:{
            amend: Boolean
        },
        watch:{
            'amend':{
                handler:function (val) {
                    if (val){
                        this.amend_text = val;
                        this.send_amend(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "amend.less";
</style>