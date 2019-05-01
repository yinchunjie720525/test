<template>
    <Modal v-model="reName_text" width="520">
        <p slot="header" class="reName-top">
            <span>重命名分组</span>
        </p>
        <div style="text-align:center">
            <p class="reNmae_input">
                <input type="text" placeholder="张三" class="reName-input-content"/>
            </p>
        </div>
        <div slot="footer" class="reName-foot">
            <button type="button" class="reName-foot-que" @click="queRen">确认</button>
            <button type="button" class="reName-foot-xiao" @click="quXiao">取消</button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'reName',
        data(){
            return{
                reName_text: false
            }
        },
        methods:{
            send_reName:function(data){
              this.$emit('dialog_reName',data)
            },
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.reName_text = false;
            },
            // 确认按钮
            queRen:function () {
                var that = this;
                that.reName_text = false;
            }
        },
        props:{
            reName: Boolean
        },
        watch:{
            'reName':{
                handler:function (val) {
                    if (val){
                        this.reName_text = val;
                        this.send_reName(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "reName.less";
</style>
<style lang="less">
    .ivu-modal-footer {
        border-top: 0;
        padding: 0px 18px 10px 18px;
    }
</style>