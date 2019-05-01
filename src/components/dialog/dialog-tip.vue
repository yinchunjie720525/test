<template>
    <Modal class="dialog-tip" v-model="dialog_tip_data.dialog_show" @on-ok="dialog_next" @on-cancel="cancel">
        <p slot="header">
            <img src="/image/bothIcon/icon-sigh.png" class="del-list-icon-sigh"/>
            <span class="del-list-sigh-text">提示</span>
        </p>
        <p>
            {{dialog_tip_data.dialog_text}}
        </p>
    </Modal>
</template>

<script>
    export default {
        name: "dialog-tip",
        data(){
            return{
                dialog_modal:false
            }
        },
        props:{
            dialog_tip_data:{},
        },
        methods:{
            // 返回
            dialog_next:function () {
                this.$emit('is_yes',true)
            },
            cancel () {
                // this.$Message.info('');
            }
        }
    }
</script>

<style lang="less">
    .dialog-tip{
        .ivu-modal{

        }
        .ivu-modal-header{
            padding: 10px 16px 11px;
            background-color: #e7eaef;
            border-radius: 8px 8px 0px 0px;
            .del-list-sigh-text{
                font-size: 18px;
                color: #222222;
                font-weight: normal;
            }
            .del-list-icon-sigh{
                margin: 0 5px 0 0;
            }
        }
        .ivu-icon ivu-icon-ios-close{
            top: -5px;
        }
        .ivu-modal-body{
            color: #222222;
            font-size: 14px;
            text-align: center;
        }
        .ivu-modal-footer{
            border: 0;
            padding: 0px 18px 12px 18px;
            text-align: center;
            .ivu-btn{
                line-height: 14px;
                padding: 8px 22px;
                background-color: #ffffff;
                border-radius: 4px;
                border: solid 1px #bababa;
                color: #bababa;
                font-size: 14px;
            }
            .ivu-btn:hover{
                border: solid 1px #ff5f5f;
                color: #ff5f5f;
            }
        }
    }
</style>