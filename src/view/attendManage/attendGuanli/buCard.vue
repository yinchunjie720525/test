<template>
    <!--新增补卡规则页面-->
    <div class="card">
        <div class="card-list">
            <table class="card-list-table">
                <tr class="card-table-tr">
                    <td class="card-table-th">补卡规则名称</td>
                    <td class="card-table-th1">规则内容</td>
                    <td class="card-table-th2">应用范围</td>
                    <td class="card-table-th3">操作</td>
                </tr>
                <tr class="card-table-tr1">
                    <td class="card-table-th">默认规则</td>
                    <td class="card-table-th1">
                        <p>允许补卡</p>
                        <p>每月可提交5次补卡</p>
                        <p>可申请过去31天内的补卡</p>
                    </td>
                    <td class="card-table-th2">全公司</td>
                    <td class="card-table-th4" @click="amend = true">编辑</td>
                </tr>
            </table>
            <div class="clear"></div>
            <div class="reasons">
                <p class="reasons-p">员工可以通过以下审批单提交补卡申请</p>
                <button class="reasons-button"><img src="/image/attendance/icon-fillCardApplica.png" class="reasons-img"/>补卡申请</button>
            </div>
        </div>

        <amend :amend="amend" v-on:dialog_amend="dialog_amend_show"></amend>

    </div>
</template>

<script>
    import amend from '@/dialog/cardRules/amend'

    export default {
        name:'buCard',
        data(){
            return{
                amend:false,
            }
        },
        methods:{
            // 修改补卡规则
            dialog_amend_show:function (msg) {
                this.amend = msg;
            },
        },
        components:{
            amend
        }
    }

</script>

<style lang="less" scoped>
    @import "buCard.less";
</style>