<template>
    <!--新增加班规则页面-->
    <div class="overtime">
        <div class="overtime-title">
            <button class="newShift2" @click="newExtra = true"><img src="/image/attendance/newAdd.png" class="newShift-img"/> 新增加班规则</button>
        </div>
        <div class="overtime-table">
            <table>
                <tr class="overtime-table-tr">
                    <td class="overtime-table-th">加班规则名称</td>
                    <td class="overtime-table-th1">规则内容</td>
                    <td class="overtime-table-th2">应用范围</td>
                    <td class="overtime-table-th3">操作</td>
                </tr>
                <tr class="overtime-table-tr1">
                    <td class="overtime-table-td">以审批时间计算加班
                        <a href="" class="overtime_a">默认</a>
                    </td>
                    <td class="overtime-table-td1">
                        <p>工作日：加班必须审批，加班时长以审批单为准</p>
                        <p>休息日和节假日：加班必须审批，加班时长以审批单为准</p>
                    </td>
                    <td class="overtime-table-td">应用到除其他加班规则以外所有员工</td>
                    <td class="overtime-table-td2">
                        <span class="td2-span" @click="revamp = true">编辑</span>
                        <span class="line">|</span>
                        <span class="td2-span">删除</span>
                    </td>
                </tr>
                <tr class="overtime-table-tr1">
                    <td class="overtime-table-td">以审批时间计算加班</td>
                    <td class="overtime-table-td1">
                        <p>工作日：加班必须审批，加班时长以审批单为准</p>
                        <p>休息日和节假日：加班必须审批，加班时长以审批单为准</p>
                    </td>
                    <td class="overtime-table-td">应用</td>
                    <td class="overtime-table-td2">
                        <span class="td2-span">编辑</span>
                        <span class="line">|</span>
                        <span class="td2-span">删除</span>
                    </td>
                </tr>
                <tr class="overtime-table-tr1">
                    <td class="overtime-table-td">以审批时间计算加班</td>
                    <td class="overtime-table-td1">
                        <p>工作日：加班必须审批，加班时长以审批单为准</p>
                        <p>休息日和节假日：加班必须审批，加班时长以审批单为准</p>
                    </td>
                    <td class="overtime-table-td3">未使用</td>
                    <td class="overtime-table-td2">
                        <span class="td2-span">编辑</span>
                        <span class="line">|</span>
                        <span class="td2-span">删除</span>
                    </td>
                </tr>
            </table>
            <div class="clear"></div>
        </div>
        <div class="rules">
            <div class="rules1"><span class="rules1-span1">加班计算单位</span><button class="rules1-a1" @click="recompose = true">修改</button></div>
            <div class="rules1"><span class="rules1-span2">最小加班单位：</span><span class="rules1-span2-1">按半小时加班</span><a href="" class="rules1-a2">员工按分钟为最小单位选择时间，考勤按小时统计报表</a></div>
            <div class="rules1"><span class="rules1-span3">计算规则：</span><span class="rules1-span2-1">员工加班时长，以半小时为单位计算，不足的不计算</span><a href="" class="rules1-a2">例如：加班1.82小时=1.5小时</a></div>
            <div class="rules1"><span class="rules1-span4">日时长折算：</span><span class="rules1-span2-1">小时=1天</span></div>
        </div>
        <div class="regulation">
            <div class="extra">
                <p>员工可以通过以下审批单提交加班</p>
                <button><img src="/image/bothIcon/icon-supervip.png" class="extra-img"/> 加班</button>
            </div>
            <div class="punch">
                <p>员工可以通过以下应用记录打卡时间</p>
                <button><img src="/image/attendance/icon-attendClock.png" class="punch-img"/>考勤打卡</button>
            </div>
        </div>

        <newExtra :newExtra="newExtra" v-on:dialog_newExtra="dialog_newExtra_show"></newExtra>
        <revamp :revamp="revamp" v-on:dialog_revamp="dialog_revamp_show"></revamp>
        <recompose :recompose="recompose" v-on:dialog_recompose="dialog_recompose_show"></recompose>

    </div>
</template>

<script>
    import newExtra from '@/dialog/overtimeRules/newExtra'
    import revamp from '@/dialog/overtimeRules/revamp'
    import recompose from '@/dialog/overtimeRules/recompose'

    export  default {
        name:'overTime',
        data(){
            return{
                newExtra:false,
                revamp:false,
                recompose: false,
            }
        },
        methods:{
            // 新建加班规则
            dialog_newExtra_show:function (msg) {
                this.newExtra = msg;
            },
            // 修改加班规则
            dialog_revamp_show:function (msg) {
                this.revamp = msg;
            },
            // 修改加班单位
            dialog_recompose_show:function (msg) {
                this.recompose= msg;
            },
        },
        components:{
            newExtra,
            revamp,
            recompose,
        }
    }
</script>

<style lang="less" scoped>
    @import "overTime.less";
</style>