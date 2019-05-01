<template><!--考勤页面详情-->
<div class="attendDetails">
    <div class="attend">
        <div class="details">考勤组名称：</div>
        <input type="text" value="" placeholder="请输入考勤组名称" class="inpDetail">
        <div class="clear"></div>
    </div>

    <div class="attend">
        <div class="details">参与考勤人员: </div>
        <div class="inpDetail1" @click="arrange = true">请选择</div>
        <div class="clear"></div>
    </div>

    <!--<div class="attend">-->
        <!--<div class="details">-->
            <!--<span class="">设置主管：</span>-->
        <!--</div>-->
        <!--<div @click="show_depart_chose" data-type="2" style="line-height: 34px;cursor: pointer;overflow: auto" :style="edit_dialog.edit_data.responsible != null && edit_dialog.edit_data.responsible != '' ? '':' color:#999999'" class="inpDetail1 fl">-->
            <!--<span class="responsible-li" v-for="(item,index) in edit_dialog.edit_data.responsible" :key="index">{{item.name}}</span>-->
            <!--{{edit_dialog.edit_data.responsible != null && edit_dialog.edit_data.responsible != '' ? '': '请选择主管'}}-->
        <!--</div>-->
        <!--<div class="clear"></div>-->
    <!--</div>-->


    <div class="attend">
        <div class="details">无需考勤人员: </div>
        <div class="inpDetail1">请选择</div>
        <!--@click="selectManager = true"-->
        <div class="clear"></div>
    </div>
    <div class="attend">
        <div class="details1">考勤组负责人: </div>
        <div class="inpDetail1">请选择</div>
        <!--@click="selectManager = true"-->
        <div class="clue">协助管理员分管本考勤组的排班及统计</div>
        <div class="clear"></div>
    </div>
    <div class="attend">
        <div class="details">考勤类型: </div>
        <RadioGroup v-model="vertical" @on-change="attend_change">
            <Radio label="0"  class="radioDetail" >固定班制 (每天考勤时间一样)</Radio>
            <div class="clued">适用于：IT、金融、文化传媒、政府/事业单位、教育培训等行业</div>
            <Radio label="1" class="radioDetail">排班制 (自定义设置考勤时间)</Radio>
            <div class="clued">适用于：餐饮、制造、物流贸易、客户服务、医院等行业</div>
            <Radio label="2" class="radioDetail">自由工时（不设置班次，随时打卡</Radio>
            <div class="clued">适用于：班次没有规律、装修、家政、物流等计算工作时长的行业</div>
            <div class="clear"></div>
        </RadioGroup>
    </div>
        <div class="attend-body" v-if="0==current">
            <div class="shortcut fl">
                工作日设置：<span class="shortcut-span">快捷设置班次：休息</span>
                <button class="shortcut-button" @click="alteration = true">更改班次</button>
                <div class="clear"></div>
            </div>
            <div class="content ">
                <table class="content-body fl">
                    <tr class="content-body-tr1">
                        <td class="content-body-th">工作日</td>
                        <td class="content-body-th1">次时间段</td>
                        <td class="content-body-th2">操作</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周一</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周二</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周三</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周四</span></Checkbox></td>
                        <td class="content-body-td">休息</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周五</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周六</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                    <tr class="content-body-tr">
                        <td class="content-body-td1"><Checkbox><span class="one-span">周日</span></Checkbox></td>
                        <td class="content-body-td">班次实施: 09:00-17:30</td>
                        <td class="content-body-td2" @click="alteration = true">更改班次</td>
                    </tr>
                </table>
                <div class="clear"></div>
                <div class="motion">
                    <div class="motion-hugh">
                        <Checkbox style="font-size: 14px; color: #222;"><span class="one-span">法定节假日自动排休</span></Checkbox>
                    </div>
                    <div class="motion-title">
                        <span class="motion-title-span">特殊日期：</span>
                        <button class="motion-title-button" @click="machinery = true">添加</button>
                        <a href="" class="motion-title-a">必须打卡日期</a>
                    </div>
                    <div class="motion-content">
                        <p class="motion-title-p">
                            <button class="motion-title-button1" @click="noMachinery = true">添加</button>
                            <a href="" class="motion-title-a">不用打卡日期</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="attend-body1" v-if="1==current">
            <div class="details">考勤班次: </div>
            <div class="inpDetail1" @click="arrange = true">请选择</div>
            <div class="clear"></div>
        </div>
        <div class="attend" v-if="2==current">
            <div class="details">设置工作日: </div>
            <div class="clue1">
                <Checkbox class="one"><span class="one-span">周一</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周二</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周三</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周四</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周五</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周六</span></Checkbox>
                <Checkbox class="one"><span class="one-span">周日</span></Checkbox>
            </div>
            <div class="clue" style="margin-left: 110px">请假时工作日意外的时间不计入请假时长</div>
            <div class="clear"></div>
            <div class="details-title">考勤开始时间: </div>
            <div class="details-title-clue1">每天几点开始新一天的考勤<TimePicker size="small" format="HH:mm" placeholder="09:00" style="width:100px;margin-left: 10px;"></TimePicker></div>
            <div class="clear"></div>
        </div>
    <div class="attend">
        <div class="details1">考勤方式: </div>
        <div class="clue1">协助管理员分管本考勤组的排班及统计</div>
        <div class="clue1">1.根据办公地点考勤（可添加多个考勤地点）
            <span>有效范围</span>
            <Select size="small">
                <Option v-for="item in distance" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <table class="commuteAddress">
            <tr class="commute-tr">
                <td class="commute-th">考勤地址</td>
                <td class="commute-th1">操作</td>
            </tr>
            <tr class="commute-tr">
                <td class="commute-th"><p>东溪德必易园</p><p>东宁路553号</p></td>
                <td class="commute-td1">删除</td>
            </tr>
            <tr class="commute-tr">
                <td class="commute-th"><p>富亿中心</p><p>全福桥路与天庐弄交叉口东北100米</p></td>
                <td class="commute-td1">删除</td>
            </tr>
        </table>
        <div class="clue2"><span class="clue1-a">添加考勤地点</span><span>&nbsp;&nbsp;(查询地点的经纬度请使用高德地图<span class="clue1-a1">查看</span>)</span></div>
        <div class="clue3">2.根据WiFi考勤（精确定位到办公室内，可添加多个办公WiFi）</div>
        <table class="commuteAddress1">
            <tr class="commute1-tr">
                <td class="commute1-th">名称</td>
                <td class="commute1-th1">MAC地址</td>
                <td class="commute1-th2">操作</td>
            </tr>
            <tr class="commute1-tr">
                <td class="commute1-th">东溪德必易园东溪德必易园东溪德必易园</td>
                <td class="commute1-th">02:10:40:06:30:10</td>
                <td class="commute1-td">
                    <button class="commute1-td-but">编辑</button>
                    <span class="commute1-td-xian">|</span>
                    <button class="commute1-td-but">删除</button>
                </td>
            </tr>
        </table>
        <div class="clue4" @click="addWifi = true">添加办公WiFi</div>
        <CheckboxGroup class="commute1-checkbox">
            <Checkbox><span class="one-span">允许外勤打卡</span></Checkbox>
        </CheckboxGroup>
        <CheckboxGroup class="commute1-checkbox" @on-change="discern">
            <Checkbox label=""><span class="one-span">拍照打卡（支持人脸识别）</span></Checkbox>
        </CheckboxGroup>
        <div class="beauty" v-show="showDiscern">
            <CheckboxGroup class="commute1-checkbox">
                <Checkbox label=""><span class="one-span">美颜模式</span></Checkbox>
            </CheckboxGroup>
            <CheckboxGroup class="commute1-checkbox">
                <Checkbox label=""><span class="one-span">人脸打卡</span></Checkbox><span class="clue1-a1">查看</span>
            </CheckboxGroup>
        </div>
        <div class="clear"></div>
    </div>
    <div class="attend">
        <div class="details">考勤类型: </div>
        <div class="clue2">默认加班规则
            <!--<span class="clue1-a" @click="selectOvertime = true">更改</span>-->
        </div>
        <div class="clear"></div>
    </div>
    <div class="attendFoot">
        <button class="baocun-set">保存设置</button>
    </div>


    <Modal v-model="depart_chose_show.is_show" footer-hide="" class="add-dialog-middle-project" width="656" >
        <!--选择部门-->
        <choseDepart v-if="depart_chose_show.type === 1 || depart_chose_show.type === '1'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></choseDepart>
        <!--选择人员-->
        <selectPeople v-if="depart_chose_show.type === 2 || depart_chose_show.type === '2'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></selectPeople>
    </Modal>


    <arrange :arrange="arrange" v-on:dialog_arrange="dialog_arrange_show"></arrange>
    <machinery :machinery="machinery" v-on:dialog_arrange="dialog_arrange_show"></machinery>
    <noMachinery :noMachinery="noMachinery" v-on:dialog_noMachinery="dialog_noMachinery_show"></noMachinery>
    <alteration :alteration="alteration" v-on:dialog_alteration="dialog_alteration_show"></alteration>
    <addWifi :addWifi="addWifi" v-on:dialog_addWifi="dialog_addWifi_show"></addWifi>
    <!--<selectOvertime :selectOvertime="selectOvertime" v-on:dialog_selectOvertime="dialog_selectOvertime_show"></selectOvertime>-->
    <!--<selectManager :selectManager="selectManager" v-on:dialog_selectManager="dialog_selectManager_show"></selectManager>-->
</div>
</template>

<script>
    import arrange from '@/dialog/attendanceManager/arrange'
    import machinery from '@/dialog/attendanceManager/machinery'
    import noMachinery from '@/dialog/attendanceManager/noMachinery'
    import alteration from '@/dialog/attendanceManager/alteration'
    import addWifi from '@/dialog/attendanceManager/addWifi'
    // import selectOvertime from '@/dialog/attendanceManager/selectOvertime'
    // import selectManager from '@/dialog/attendanceManager/selectManager'
    import {deepClone} from "../../../assets/js/template";

    export  default {
        name:'attend',
        data(){
            return{
                current:0,
                vertical: '0',
                distance: [
                    {
                        value: '100米',
                        label: '100米'
                    },
                    {
                        value: '200米',
                        label: '200米'
                    },
                    {
                        value: '300米',
                        label: '300米'
                    },
                    {
                        value: '400米',
                        label: '400米'
                    },
                    {
                        value: '500米',
                        label: '500米'
                    },
                    {
                        value: '600米',
                        label: '600米'
                    }
                ],
                arrange: false,
                machinery:false,
                noMachinery:false,
                showBanZhi: false,
                showDiscern: false,
                alteration: false,
                addWifi: false,
                // selectOvertime: false,
                // selectManager: false
                depart_chose_show:{
                    is_show:false,
                    type:-1,
                    chose_people:[]
                }
            }
        },
        methods:{
            show_depart_chose:function (event) {
                let type = event.currentTarget.dataset.type;
                this.depart_chose_show.is_show = true;
                this.depart_chose_show.type = type;
                // 部门选择
                if(type === 1 || type === '1'){
                    console.log('')
                }
                else if( type === 2 || type ==='2'){
                    this.depart_chose_show.chose_people = deepClone(this.edit_dialog.edit_data.responsible);
                }
            },
            get_prev_name:function(msg){
                // 部门选择
                let type = this.depart_chose_show.type;
                if(type === 1 || type === '1'){
                    this.prev_name = deepClone(msg)[0].name;
                }
                else if( type === 2 || type ==='2'){
                    this.edit_dialog.edit_data.responsible= deepClone(msg);
                }

            },
            // 选择人员与部门弹窗
            dialog_arrange_show:function (msg) {
                this.arrange = msg;
            },
            //选择人员弹窗
            // dialog_selectManager_show:function(msg){
            //     this.selectManager = msg
            // },
            // 必须打卡日期
            dialog_machinery_show:function(msg){
                this.machinery = msg;
            },
            // 不用打卡日期
            dialog_noMachinery_show:function(msg){
                this.noMachinery = msg;
            },
            // 更改班次
            dialog_alteration_show:function(msg){
                this.alteration = msg;
            },
            // 添加WiFi
            dialog_addWifi_show:function(msg){
                this.addWifi = msg;
            },
            // 更改-选择加班规则
            // dialog_selectOvertime_show:function(msg){
            //     this.selectOvertime = msg;
            // },
            // 考勤类型切换
            attend_change: function (event) {
                console.log(event);
                this.current = event;
            },
            // 美颜模式切换
            discern:function () {
                this.showDiscern = !this.showDiscern;
            }
        },
        components:{
            arrange,
            machinery,
            noMachinery,
            alteration,
            addWifi,
            // selectOvertime,
            // selectManager
        }
    }
</script>

<style lang="less" scoped>
    @import "attend.less";
</style>