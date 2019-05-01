<template>
    <Modal v-model="removeTo_text">
        <div class="remove">
            <div class="remove-top">将“加班”移动到</div>
            <div class="remove-body">
                <ul class="remove-body-ul">
                    <li class="remove-body-ul-li">项目审批(2)</li>
                    <li class="remove-body-ul-li">出勤审批(2)
                        <button class="remove-body-ul-li-but fr">当前所在组</button>
                    </li>
                    <li class="remove-body-ul-li">人事(2)</li>
                    <li class="remove-body-ul-li">行政(2)</li>
                </ul>
            </div>
        </div>
        <div slot="footer">
            <div class="foot-button" slot="footer">
                <button class="remove-foot-newGroup fl" slot="footer" @click="newGroup = true">
                    <img src="/image/approval/icon-new.png" class="remove-foot-newGroup-img"/>新建分组
                </button>
                <button class="remover-foot-save fl" slot="footer" @click="queRen">确认</button>
                <button class="remover-foot-quxiao fr" slot="footer" @click="quXiao">取消</button>
            </div>
            <newGroup :newGroup="newGroup" v-on:dialog_newGroup="dialog_newGroup_show"></newGroup>
        </div>
    </Modal>
</template>

<script>
    import newGroup from '@/dialog/internalReview/newGroup'
    export default {
        name:'removeTo',
        data () {
            return {
                removeTo_text: false,
                newGroup:false
            }
        },
        methods:{
            send_removeTo:function (data) {
                this.$emit('dialog_removeTo',data)
            },
            // 新建分组弹窗
            dialog_newGroup_show:function (msg) {
             this.newGroup = msg;
            },
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.removeTo_text = false;
                console.log(this.removeTo_text)
            },
            // 确认按钮
            queRen:function () {
                var that = this;
                that.removeTo_text = false;
            }
        },
        props:{
            removeTo: Boolean
        },
        watch:{
            'removeTo':{
                handler:function (val) {
                    if (val){
                        this.removeTo_text = val;
                        this.send_removeTo(!val);
                    }
                }
            }
        },
        components:{
            newGroup
        }
    }
</script>

<style lang="less" scoped>
    @import "remove.less";
</style>
<style lang="less">
    .ivu-modal-footer {
        border-top: 0;
        padding: 0px 18px 10px 18px;
    }
</style>
