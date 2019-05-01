<template>
    <!--新增班次管理页面-->
    <div class="attendance-meter">
        <div class="attendance-meter-title">
            <div class="buttonBox">
                <button class="newShift" @click="add = true"><img src="/image/attendance/newAdd.png" class="newShift-img"/> 新增班次</button>
            </div>
            <div class="inputBox">
                <input type="text" value="" placeholder="请输入班次信息" class="newShift-inp"/>
                <img src="/image/bothIcon/icon-search.png" class="newShift-search"/>
                <div class="clear"></div>
            </div>
        </div>
        <div class="attendance-meter-table">
            <table>
                <tr class="attendance-meter-table-tr">
                    <td class="attendance-meter-table-th">班次名称</td>
                    <td class="attendance-meter-table-th1">考勤时间</td>
                    <td class="attendance-meter-table-th3">操作</td>
                </tr>
                <tr class="attendance-meter-table-tr1">
                    <td class="attendance-meter-table-td1">默认班次</td>
                    <td class="attendance-meter-table-td1">09:00-16:00</td>
                    <td class="attendance-meter-table-td">
                        <button href="" class="attendance-meter-table-td-a" @click="editor = true">编辑 </button>
                        <span class="line">|</span>
                        <button href="" class="attendance-meter-table-td-a1">删除</button>
                    </td>
                </tr>
                <tr class="attendance-meter-table-tr1">
                    <td class="attendance-meter-table-td1">默认班次</td>
                    <td class="attendance-meter-table-td1">09:00-16:00</td>
                    <td class="attendance-meter-table-td">
                        <button href="" class="attendance-meter-table-td-a" @click="editor = true">编辑 </button>
                        <span class="line">|</span>
                        <button href="" class="attendance-meter-table-td-a1">删除</button>
                    </td>
                </tr>
            </table>
            <div class="clear"></div>
            <div class="tabs">
                <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
                <button class="but2">1</button>
                <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
            </div>
        </div>
        <editor :editor="editor" v-on:dialog_editor = "dialog_editor_show"></editor>
        <add :add="add" v-on:dialog_add = "dialog_add_show"></add>
    </div>
</template>

<script>

    import editor from '@/dialog/flightManager/editor'
    import add from '@/dialog/flightManager/add'

    export default {
        name:'grades',
        data(){
            return{
                editor: false,
                add: false,
            }
        },
        methods:{
            // 编辑班次弹窗页面
            dialog_editor_show:function (msg) {
                this.editor = msg;
            },
            // 新增班次弹窗页面
            dialog_add_show:function (msg) {
                this.add = msg;
            },
        },
        components:{
            editor,
            add,
        }
    }
</script>

<style lang="less" scoped>
    @import "grades.less";
</style>