<template>
    <Modal v-model="noMachinery_text" class-name="vertical-center-modal">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">不用打卡日期</p>
        <div class="machinery">
            <p class="machinery-p">日期： <DatePicker type="date" placeholder="2019-03-16" style="width: 110px"></DatePicker><span class="machinery-span">该日期已被指定为不需要打卡日期</span></p>
        </div>
    </Modal>
</template>
<script>
    export default {
        name:'noMachinery',
        data () {
            return {
                noMachinery_text: false,
            }
        },
        methods:{
            send_noMachinery:function (data) {
                this.$emit('dialog_noMachinery',data)
            }
        },
        props:{
            noMachinery: Boolean
        },
        watch:{
            'noMachinery':{
                handler:function (val) {
                    if (val){
                        this.noMachinery_text = val;
                        this.send_noMachinery(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "noMachinery.less";
</style>