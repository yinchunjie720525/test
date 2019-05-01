<template>
    <div class="deleted">
        <Modal v-model="deteledList_text" width="520" class-name="vertical-center-modal">
            <p slot="header" class="header-p">
                <img src="/image/divisional/icon-hint.png" class="header-img"/>
                <span class="header-span">提示</span>
            </p>
            <div class="delete-body">
                <p>确定删除该信息吗？</p>
            </div>
            <div slot="footer" class="delete-footer">
                <div class="footer-but">
                    <div class="footer-button fl" @click="quXiao">取消</div>
                    <div class="footer-button fr" @click="del">确认</div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name:'deteledList',
        data(){
            return{
                deteledList_text: false,
            }
        },
        methods:{
            send_deteledList:function (data) {
                this.$emit('dialog_deteledList',data)
            },
            quXiao () {
                setTimeout(() => {
                    this.deteledList_text = false;
                    // this.$Message.success('删除失败');
                });
            },
            del () {
                setTimeout(() => {
                    this.deteledList_text = false;
                    // this.$Message.success('删除成功');
                });
            },
        },
        props:{
            deteledList:Boolean
        },
        watch:{
            'deteledList':{
                handler:function (val) {
                    if (val){
                        this.deteledList_text = val;
                        this.send_deteledList(!val);
                        console.log(this.deteledList)
                    }
                }
            }
        }
    }
</script>
<style lang="less">
    @import "delete.less";
</style>
<style lang="less">
    .vertical-center-modal{
        .ivu-modal-header{
            border-bottom: 1px solid #f0f2f5;
            height: 35px;
            padding: 0 20px;
            background: #f0f2f5;
            color: #595959;
            border-radius: 4px 4px 0 0;
        }
    }
    .ivu-modal-close {
        z-index: 1;
        font-size: 12px;
        position: absolute;
        right: 8px;
        top: 1px;
        overflow: hidden;
        cursor: pointer;
    }
</style>