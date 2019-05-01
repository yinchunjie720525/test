<template>
    <Modal v-model="addWifi_text" draggable scrollable title="Modal 2">
        <div class="addNetwork-top" slot="header">
            <p class="" style="text-align: left">添加办公WIFI</p>
        </div>
        <div class="addNetwork">
            <div class="netWork">
                <div class="netWork-title fl">名称:</div>
            </div>
            <div class="netWork-content fl">
                <input type="text" placeholder="最多不超过15个字" value="" class="netWork-content-input"/>
            </div>
            <div class="clear"></div>
        </div>
        <div class="addNetwork">
            <div class="netWork">
                <div class="netWork-title fl">MAC地址:</div>
            </div>
            <div class="netWork-content fl">
                <input type="text" placeholder="例子：02:10:18:02:40:7b" value="" class="netWork-content-input"/>
            </div>
            <div class="clear"></div>
        </div>
        <div class="shuoMing">名称尽量保持与考勤WiFi名称一致，避免员工产生误解</div>
        <div></div>
    </Modal>
</template>

<script>
    export default {
        name:'addWifi',
        data () {
            return {
                addWifi_text: false,
            }
        },
        methods:{
            send_addWifi:function (data) {
                this.$emit('dialog_addWifi',data)
            }
        },
        props:{
            addWifi: Boolean
        },
        watch:{
            'addWifi':{
                handler:function (val) {
                    if (val){
                        this.addWifi_text = val;
                        this.send_addWifi(!val);
                        console.log(this.addWifi)
                    }
                }
            }
        }
    }
</script>

<style lang="less" scope>
    @import "addWifi.less";
</style>
