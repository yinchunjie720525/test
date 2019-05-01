<template>
    <Modal v-model="newGroup_text" width="520">
        <p slot="header" class="newGroup-top">
            <span>新建分组</span>
        </p>
        <div style="text-align:center">
            <p class="newGroup_input">
                <input type="text" placeholder="请输入新建分组名字" class="newGroup-input-content"/>
            </p>
        </div>
        <div slot="footer" class="newGroup-foot">
            <button type="button" class="newGroup-foot-que" @click="queRen">确认</button>
            <button type="button" class="newGroup-foot-xiao" @click="quXiao">取消</button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'newGroup',
        data(){
            return{
                newGroup_text: false
            }
        },
        methods:{
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.newGroup_text = false;
            },
            // 确认按钮
            queRen:function () {
                var that = this;
                that.newGroup_text = false;
            },
            send_newGroup:function (data) {
                this.$emit('dialog_newGroup',data)
            }
        },
        props:{
            newGroup: Boolean
        },
        watch:{
            'newGroup':{
                handler:function (val) {
                    if (val){
                        this.newGroup_text = val;
                        this.send_newGroup(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "newGroup.less";
</style>