<template>
    <Modal v-model="recompose_text" class-name="vertical-center-modal">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">修改加班单位</p>
        <div class="recompose-body">
            <div class="recompose-title">最小加班单位：</div>
            <div class="recompose-content">
                <Select v-model="unit" style="width:120px">
                    <Option v-for="item in times" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <p class="recompose-content-p" >员工按分钟为最小单位选择时间，考勤按小时统计报表</p>
            </div>
            <div class="clear"></div>
            <div class="recompose-title1">计算规则：</div>
            <div class="recompose-content1">
                <p class="recompose-content-p1">员工加班时长，一半小时为单位计算，不足的不计算</p>
                <p class="recompose-content-p">列入加班1.82小时=1.5小时</p>
                <p class="recompose-content-p2">设置后，使用加班事件的审批单中，最小单位都会发生变化</p>
                <img src="/image/bothIcon/icon-assembly.png" class="recompose-content1-img"/>
            </div>
            <div class="clear"></div>
            <div class="recompose-title1">用时长折算：</div>
            <div class="recompose-content1">
                <InputNumber size="small"></InputNumber>
                <p class="recompose-content-p3" >切换单位或加班转调休时使用，修改后使用加班事件、请假事件、出差事件、外出事件的用时长折算也会更改</p>
            </div>
            <div class="clear"></div>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'recompose',
        data () {
            return {
                recompose_text: false,
                times: [
                    {
                        value: 'banxiaoshi',
                        label: '按半小时加班'
                    },
                    {
                        value: 'yixiaoshi',
                        label: '按半小时加班'
                    },
                    {
                        value: 'yigebanxiaoshi',
                        label: '按半小时加班'
                    },
                    {
                        value: 'liangxiaoshi',
                        label: '按半小时加班'
                    }
                ],
                unit: ''
            }
        },
        methods:{
            // 修改加班单位
            send_recompose:function (data) {
                this.$emit('dialog_recompose',data)
            }
        },
        props:{
            recompose: Boolean
        },
        watch:{
            'recompose':{
                handler:function (val) {
                    if (val){
                        this.recompose_text = val;
                        this.send_recompose(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "recompose.less";
</style>