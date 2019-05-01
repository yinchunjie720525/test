<template>
<div>
    <Drawer :closable="false" v-model="attendance_text" width="580px" class="attend-bg">
        <div class="attend">
            <div class="attend-title">固定班制</div>
            <div class="attend-body">
                <div class="shortcut">
                    快捷设置班次：班次实施：09:00-17:30
                    <button class="shortcut-button" @click="alteration = true">更改班次</button>
                </div>
                <div class="content">
                    <table class="content-body">
                        <tr class="content-body-tr">
                            <th class="content-body-th">工作日</th>
                            <th class="content-body-th1">次时间段</th>
                            <th class="content-body-th2">操作</th>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周一</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周二</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周三</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周四</span></Checkbox></td>
                            <td class="content-body-td">休息</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周五</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周六</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                        <tr class="content-body-tr">
                            <td class="content-body-td1"><Checkbox><span class="one-span">周日</span></Checkbox></td>
                            <td class="content-body-td">班次实施: 09:00-17:30</td>
                            <td class="content-body-td2">更改班次</td>
                        </tr>
                    </table>
                    <div class="motion">
                        <div class="motion-hugh">
                            <Checkbox><span class="one-span">法定节假日自动排休</span></Checkbox>
                        </div>
                        <div class="motion-title">
                            <span class="motion-title-span">特殊日期：</span>
                            <button class="motion-title-button" @click="machinery = true">添加</button>
                            <a href="" class="motion-title-a">必须打卡日期</a>
                        </div>
                        <div class="motion-content">
                            <table class="motion-content-table">
                                <tr class="motion-content-tr">
                                    <th class="motion-content-th">日期</th>
                                    <th class="motion-content-th1">考勤时间</th>
                                    <th class="motion-content-th2">操作</th>
                                </tr>
                                <tr class="motion-content-tr">
                                    <td class="motion-content-td1">2019-02-18</td>
                                    <td class="motion-content-td">安吉拉9:00-12:00</td>
                                    <td class="motion-content-td">
                                        <button class="motion-content-tr-button">编辑</button>
                                        <span class="motion-content-tr-span">|</span>
                                        <button class="motion-content-tr-button1">修改</button>
                                    </td>
                                </tr>
                            </table>
                            <p class="motion-title-p"><button class="motion-title-button1" @click="noMachinery = true">添加</button><a href="" class="motion-title-a">不用打卡日期</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-newRoles-operate">
                <button class="saveButton">保存设置</button>
            </div>
        </div>
        <alteration :alteration="alteration" v-on:dialog_alteration="dialog_alteration_show"></alteration>
        <machinery :machinery="machinery" v-on:dialog_machinery="dialog_machinery_show"></machinery>
        <noMachinery :noMachinery="noMachinery" v-on:dialog_noMachinery="dialog_noMachinery_show"></noMachinery>
    </Drawer>
</div>
</template>
<script>
    import alteration from '@/dialog/attendanceManager/alteration'
    import machinery from '@/dialog/attendanceManager/machinery'
    import noMachinery from '@/dialog/attendanceManager/noMachinery'
    export default {
        name:'attendance',
        data () {
            return {
                attendance_text: false,
                alteration: false,
                machinery: false,
                noMachinery: false
            }
        },
        methods:{
            send_attendance:function (data) {
                this.$emit('dialog_attendance',data)
            },
            // 更改班次
            dialog_alteration_show:function (msg) {
                this.alteration = msg;
            },
            // 必须打卡日期
            dialog_machinery_show:function (msg) {
                this.machinery = msg;
            },
            // 不用打卡日期
            dialog_noMachinery_show:function (msg) {
                this.noMachinery= msg;
            }
        },
        props:{
            attendance: Boolean
        },
        watch:{
            'attendance':{
                handler:function (val) {
                    if (val){
                        this.attendance_text = val;
                        this.send_attendance(!val);
                    }
                }
            }
        },
        components:{
            alteration,
            machinery,
            noMachinery
        }
    }
</script>

<style lang="less">
    @import "attendance.less";
</style>
