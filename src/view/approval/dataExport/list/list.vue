<template>
    <div class="dataExport">
        <div class="countExport">
            <!--头部-->
            <div class="dataExport-top">
                <button class="dataExport-title-exp" data-id="0" @click="count_change" :class="{active:0==current}">数据导出</button>
                <button class="dataExport-title-jiLu" data-id="1" @click="count_change" :class="{actived:1==current}">数据导出记录</button>
            </div>
            <!--数据导出-->
            <div class="" v-if="0==current">
                <div class="dataExport-body">
                <div class="dataExport-select fl">
                    <div class="dataExport-select-informa">
                        <div class="dataExport-select-title fl">审批类型:</div>
                        <div class="dataExport-select-content fl">
                            <Select v-model="approval" size="large" style="width:160px;">
                                <Option v-for="item in shenPi" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>

                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="dataExport-select-informa">
                        <div class="dataExport-select-title fl">发起时间:</div>
                        <div class="dataExport-select-content fl">
                            <DatePicker type="datetimerange" placeholder="选择发起时间" style="width: 336px" size="large"></DatePicker>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="dataExport-select-informa">
                        <div class="dataExport-select-title fl">审批编号:</div>
                        <div class="dataExport-select-content fl">
                            <input type="text" placeholder="审批成本" class="dataExport-select-content-input"/>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="dataExport-selected fl">
                    <div class="dataExport-select-informa">
                        <div class="dataExport-select-title fl">审批编号:</div>
                        <div class="dataExport-select-content fl">
                            <input type="text" placeholder="标题关键字" class="dataExport-select-content-input"/>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="dataExport-select-informa">
                        <div class="dataExport-select-title fl">发起时间:</div>
                        <div class="dataExport-select-content fl">
                            <DatePicker type="datetimerange" placeholder="选择发起时间" style="width: 336px; color: rgb(117,117,117)" size="large"></DatePicker>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
                <div class="dataExport-table">
                    <button class="dataExport-table-inquire">查询</button>
                    <button class="dataExport-table-exp">导出</button>
                    <div class="dataExport-table-comtent">
                        <table class="dataExport-table-comtent-count">
                            <tr class="dataExport-table-comtent-count-tr1">
                            <td class="dataExport-table-comtent-count-td">审批编号</td>
                            <td class="dataExport-table-comtent-count-td">标题</td>
                            <td class="dataExport-table-comtent-count-td">发起时间</td>
                            <td class="dataExport-table-comtent-count-td">完成时间</td>
                            <td class="dataExport-table-comtent-count-td">当前审批人</td>
                            <td class="dataExport-table-comtent-count-td">历史审批人</td>
                            <td class="dataExport-table-comtent-count-td">操作</td>
                        </tr>
                            <tr class="dataExport-table-comtent-count-tr">
                            <td class="dataExport-table-comtent-count-td title">ASD5426</td>
                            <td class="dataExport-table-comtent-count-td title">红星美凯龙全国联动</td>
                            <td class="dataExport-table-comtent-count-td title">2019-02-18</td>
                            <td class="dataExport-table-comtent-count-td title">2019-02-19</td>
                            <td class="dataExport-table-comtent-count-td title">李四</td>
                            <td class="dataExport-table-comtent-count-td title">张三</td>
                            <td class="dataExport-table-comtent-count-td title">导出</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
            <!--数据导出记录-->
            <div class="" v-if="1==current">
                <div class="dataExportRecord">
                    <div class="dataExportRecord-table">
                        <table>
                            <tr class="dataExportRecord-table-tr1">
                                <td class="dataExportRecord-table-td">导出文件名称</td>
                                <td class="dataExportRecord-table-td">导出人员</td>
                                <td class="dataExportRecord-table-td">导出时间</td>
                                <td class="dataExportRecord-table-td">审批名称</td>
                                <td class="dataExportRecord-table-td">操作</td>
                            </tr>
                            <tr class="dataExportRecord-table-tr">
                                <td class="dataExportRecord-table-td title">2019023654.xls</td>
                                <td class="dataExportRecord-table-td title">张三</td>
                                <td class="dataExportRecord-table-td title">2019-02-20 18:11</td>
                                <td class="dataExportRecord-table-td title">请假</td>
                                <td class="dataExportRecord-table-td1 title" style="padding-left: 40px">下载</td>
                            </tr>
                        </table>
                    </div>
                    <div class="tabs fr">
                        <Page :total="10" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'list',
        data (){
            return{
                current:0,
                shenPi: [
                    {
                        value: 'mingpian',
                        label: '名片批发采购'
                    },
                    {
                        value: 'jiaban',
                        label: '加班'
                    },
                    {
                        value: 'baoxiao',
                        label: '报销'
                    },
                    {
                        value: 'shijia',
                        label: '事假'
                    }
                ],
                approval:''
            }
        },
        methods:{
            count_change:function (event) {
                this.current = event.target.dataset.id;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "list.less";
    .ivu-select-selection {
        display: block;
        box-sizing: border-box;
        outline: 0;
        user-select: none;
        cursor: pointer;
        position: relative;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid rgb(117,117,117) !important;
        transition: all .2s ease-in-out;
        .ivu-select-single .ivu-select-selection .ivu-select-placeholder {
         color: rgb(117,117,117)!important;
     }
    }
</style>
<style lang="less">
    .ivu-modal-confirm-head-title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 12px;
        font-size: 16px;
        color: #17233d;
    }
    .ivu-page-item-active {
        border-color: #2d8cf0;
        background: #2d8cf0;
        color: #fff;
    }
    .ivu-page-item-active a, .ivu-page-item-active:hover a {
        color: #fff;
    }
</style>