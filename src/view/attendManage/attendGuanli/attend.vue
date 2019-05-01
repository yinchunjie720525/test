<template>
    <div class="attendManager">
        <div class="attendManager-title" >
            <div class="buttonBox1">
                <button class="newShift1" @click="detail">
                    <img src="/image/attendance/newAdd.png" class="newShift-img" /> 新增考勤组
                </button>
            </div>
            <div class="inputBox1">
                <input type="text" value="" placeholder="请输入考勤组名称" class="newShift-inp1"/>
                <img src="/image/bothIcon/icon-search.png" class="newShift-search1"/>
            </div>
            <div class="clear"></div>
        </div>
        <div class="attendManager-table">
            <table style="min-width: 1000px">
                <tr class="attendManager-table-tr">
                        <td class="attendManager-table-th">班次名称<img src="/image/attendance/icon-paixu.png" class="paixu"/></td>
                        <td class="attendManager-table-th_1">人数</td>
                        <td class="attendManager-table-th_2">类型</td>
                        <td class="attendManager-table-th_3">考勤时间</td>
                        <td class="attendManager-table-th_4">操作</td>
                    </tr>
                <tr class="attendManager-table-tr1">
                        <td class="attendManager-table-th">默认班次</td>
                        <td class="attendManager-table-th1">40人</td>
                        <td class="attendManager-table-th2">默认班次</td>
                        <td class="attendManager-table-th3">
                            <p>09:00-16:00</p>
                            <p>09:00-16:00</p>
                        </td>
                        <td class="attendManager-table-tr4">
                            <button class="attendManager-table-th4-span" @click=" attendance = true">编辑排班</button>
                            <span class="attendManager-table-th4-span1">|</span>
                            <button class="attendManager-table-th4-span" @click="xiugai">修改规则</button>
                            <span class="attendManager-table-th4-span1">|</span>
                            <button class="attendManager-table-th4-span">删除</button>
                        </td>
                    </tr>
                <tr class="attendManager-table-tr1">
                        <td class="attendManager-table-th">默认班次</td>
                        <td class="attendManager-table-th1">40人</td>
                        <td class="attendManager-table-th2">默认班次</td>
                        <td class="attendManager-table-th3">
                            <p>09:00-16:00</p>
                            <p>09:00-16:00</p>
                        </td>
                        <td class="attendManager-table-tr4">
                            <button class="attendManager-table-th4-span" @click="paiban">编辑排班</button>
                            <span class="attendManager-table-th4-span1">|</span>
                            <button class="attendManager-table-th4-span" @click="xiugai">修改规则</button>
                            <span class="attendManager-table-th4-span1">|</span>
                            <button class="attendManager-table-th4-span">删除</button>
                        </td>
                    </tr>
            </table>
            <div class="clear"></div>
        </div>
        <div class="tabs">
            <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
            <button class="but2">1</button>
            <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
        </div>
        <attendance :attendance="attendance" v-on:dialog_attendance="dialog_attendance_show"></attendance>
        <router-view></router-view>
    </div>
</template>

<script>
    import attendance from '@/dialog/attendanceManager/attendance'
    export  default {
        name:'attend',
        data(){
            return{
                attendance:false
            }
        },
        methods:{
            // 新增考勤管理页面
            dialog_attendance_show:function (msg) {
                this.attendance = msg;
            },
            detail(){
                this.$router.push({path:'levelMenu4_kaoqinDetail'})
            },
            xiugai(){
                this.$router.push({path:'levelMenu4_kaoqinXiugai'})
            },
            paiban(){
                this.$router.push({path:'levelMenu4_kaoqinPaiban'})
            }
        },
        components:{
            attendance
        }
    }
</script>

<style lang="less" scoped>
    @import "attend.less";
</style>