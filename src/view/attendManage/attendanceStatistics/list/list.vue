<template>
    <div class="attendanceStatistics">
        <!--考勤统计页面列表-->
        <div class="statistics-list">
            <ul class="statistics-list-ul">
                <li class="statistics-list-ul-li" data-id="0" @click="statistics_change" :class="{active: 0==current}">月度汇总</li>
                <li class="statistics-list-ul-li" data-id="1" @click="statistics_change" :class="{active: 1==current}">每日统计</li>
                <li class="statistics-list-ul-li" data-id="2" @click="statistics_change" :class="{active: 2==current}">打卡时间</li>
                <li class="statistics-list-ul-li" data-id="3" @click="statistics_change" :class="{active: 3==current}">原始记录</li>
            </ul>
        </div>
        <!--考勤统计月度汇总-->
        <div class="monthlySummary" v-if="0==current">
            <div class="showColumns">
                <div class="show-width">
                    <div class="showColumns-top">
                        <div class="attend">
                            <div class="attend-title fl"> 展示列： </div>
                            <div class="attend-content fl">
                                <CheckboxGroup>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">职位</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">出勤天数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">出勤班次</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">休息天数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">工作时长</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">迟到次数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">迟到时长</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">严重迟到次数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">严重迟到时长</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">旷工迟到天数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">早退次数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">早退时长</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">上班缺卡次数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">下班缺卡次数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">旷工天数</span></Checkbox>
                                    <Checkbox label="" class="attend-content-checkbox"><span class="lizhi">加班时长-按加班规则计算</span></Checkbox>
                                </CheckboxGroup>
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend attend-select">
                            <div class="attend-div fl">
                                <div class="attend-title1"> 出勤时间： </div>
                                <DatePicker type="datetimerange" placeholder="请选择时间区间" style="width: 300px;float: left; margin-top: 24px"></DatePicker>
                                <div class="clear"></div>
                            </div>
                            <div class="attend-div1 fl">
                                <div class="attend-content-select fl" style="padding-left: 24px">
                                    <span class="fl" style="padding-top: 5px">部门/人员：</span>
                                    <Select v-model="model8" clearable style="width: 300px; float: left; text-align: left" >
                                        <Option v-for="item in section" :value="item.value" :key="item.value" class="attend-content-option">{{ item.label }}</Option>
                                    </Select>
                                    <div class="attend-div fl">
                                        <Checkbox class="attend-content-checkbox fl">
                                            <span class="lizhi">离职员工</span>
                                            <span class="attend-content-checkbox1-a">(保留三个月)</span>
                                        </Checkbox>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="monthlySummary">
                        <button class="but fl">导出报表</button>
                        <div class="clear"></div>
                        <!--考勤统计表格页面-->
                        <div class="attend-content-table">
                            <table class="attend-content-midder">
                                <tr class="attend-content-table-tr">
                                    <td class="attend-content-table-th">姓名</td>
                                    <td class="attend-content-table-th1">部门</td>
                                    <td class="attend-content-table-th2">工号</td>
                                    <td class="attend-content-table-th3">职位</td>
                                    <td class="attend-content-table-th3">出勤天数</td>
                                    <td class="attend-content-table-th4" colspan="2">
                                        <div class="th-top">出勤班次</div>
                                        <div class="th-bottom">
                                            <div class="th-bottom1">实施</div>
                                            <div class="th-bottom2">班次</div>
                                            <div class="clear"></div>
                                        </div>
                                    </td>
                                    <td class="attend-content-table-th3">休息天数</td>
                                    <td class="attend-content-table-th3">工作时长</td>
                                    <td class="attend-content-table-th3">迟到次数</td>
                                    <td class="attend-content-table-th3">迟到时长</td>
                                    <td class="attend-content-table-th3">严重迟到次数</td>
                                    <td class="attend-content-table-th3">严重迟到时长</td>
                                    <td class="attend-content-table-th3">旷工迟到天数</td>
                                    <td class="attend-content-table-th3">早退天数</td>
                                    <td class="attend-content-table-th3">早退时长</td>
                                    <td class="attend-content-table-th3">上班缺卡次数</td>
                                    <td class="attend-content-table-th3">下班缺卡次数</td>
                                    <td class="attend-content-table-th3">旷工天数</td>
                                    <td class="attend-content-table-th3">加班时长</td>
                                </tr>
                                <tr class="attend-content-table-tr1">
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                </tr>
                                <tr class="attend-content-table-tr1">
                                    <td class="attend-content-table-tr1-td">旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                </tr>
                                <tr class="attend-content-table-tr1">
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                </tr>
                                <tr class="attend-content-table-tr1">
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                    <td class="attend-content-table-tr1-td">旷工天数</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="tabs">
                        <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
                        <button class="but2">1</button>
                        <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <!--考勤统计每日统计-->
        <div class="dailyStats" v-if="1==current">
            <div class="showColumns1">
                <div class="show-width">
                    <div class="showColumns-top">
                    <div class="attend1">
                        <div class="attend-title"> 展示列： </div>
                        <div class="attend-content2">
                            <CheckboxGroup>
                                <Checkbox label="" class="attend-content-checkbox2">
                                    <span class="lizhi">汇总每日考勤记录</span>
                                    <img src="/image/attendance/icon-help.png" class="attend-content-checkbox-img1"/>
                                    <button class="attend-content-checkbox-img2">NEW</button>
                                </Checkbox>
                                <Checkbox label="" class="attend-content-checkbox1"><span class="lizhi">出勤天数</span></Checkbox>
                            </CheckboxGroup>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="attend attend-select">
                        <div class="attend-div fl">
                            <div class="attend-title1"> 出勤时间：</div>
                            <DatePicker type="datetimerange" placeholder="请选择时间区间" style="width: 300px;float: left"></DatePicker>
                            <div class="clear"></div>
                        </div>
                        <div class="attend-div fl">
                            <div class="attend-content-select fl">
                                <span class="fl" style="padding-top: 5px">部门/人员：</span>
                                <Select v-model="model8" clearable style="width: 70px; float: left" >
                                    <Option v-for="item in section" :value="item.value" :key="item.value" class="attend-content-option">{{ item.label }}</Option>
                                </Select>
                                <Checkbox class="attend-content-checkbox fl" >
                                    <span class="lizhi">离职员工</span>
                                    <span class="attend-content-checkbox1-a">(保留三个月)</span>
                                </Checkbox>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="line1"></div>
                </div>
                </div>
                <div class="showColumns-body">
                    <button class="but1">导出报表</button>
                    <!--每日统计表格页面-->
                    <div class="dailyStats-content-table">
                        <table class="dailyStats-content-midder">
                            <tr class="dailyStats-content-table-tr">
                                    <td class="dailyStats-content-table-th">姓名</td>
                                    <td class="dailyStats-content-table-th1">部门</td>
                                    <td class="dailyStats-content-table-th2">工号</td>
                                    <td class="dailyStats-content-table-th2">职位</td>
                                    <td class="dailyStats-content-table-th2">日期</td>
                                    <td class="dailyStats-content-table-th2">班次</td>
                                    <td class="dailyStats-content-table-th3" colspan="2">
                                        <div class="th-top">上班1</div>
                                        <div class="th-bottom">
                                            <div class="th-bottom1">打卡时间</div>
                                            <div class="th-bottom2">打卡结果</div>
                                            <div class="clear"></div>
                                        </div>
                                    </td>
                                    <td class="dailyStats-content-table-th3" colspan="2">
                                        <div class="th-top">下班1</div>
                                        <div class="th-bottom">
                                            <div class="th-bottom1">打卡时间</div>
                                            <div class="th-bottom2">打卡结果</div>
                                            <div class="clear"></div>
                                        </div>
                                    </td>
                                    <td class="dailyStats-content-table-th3" colspan="2">
                                        <div class="th-top">上班2</div>
                                        <div class="th-bottom">
                                            <div class="th-bottom1">打卡时间</div>
                                            <div class="th-bottom2">打卡结果</div>
                                            <div class="clear"></div>
                                        </div>
                                    </td>
                                    <td class="dailyStats-content-table-th3" colspan="2">
                                        <div class="th-top">下班2</div>
                                        <div class="th-bottom">
                                            <div class="th-bottom1">打卡时间</div>
                                            <div class="th-bottom2">打卡结果</div>
                                            <div class="clear"></div>
                                        </div>
                                    </td>
                                    <td class="dailyStats-content-table-th2">关联的审批单</td>
                                    <td class="dailyStats-content-table-th4">出勤天数</td>
                                    <td class="dailyStats-content-table-th4">出勤班次</td>
                                    <td class="dailyStats-content-table-th4">休息天数</td>
                                    <td class="dailyStats-content-table-th4">工作时长（分钟）</td>
                                    <td class="dailyStats-content-table-th4">迟到次数</td>
                                    <td class="dailyStats-content-table-th4">迟到时长（分钟）</td>
                                    <td class="dailyStats-content-table-th4">严重迟到次数</td>
                                    <td class="dailyStats-content-table-th4">严重迟到时长（分钟）</td>
                                    <td class="dailyStats-content-table-th4">旷工迟到天数</td>
                                    <td class="dailyStats-content-table-th4">早退次数</td>
                                    <td class="dailyStats-content-table-th4">早退时长（分钟）</td>
                                </tr>
                            <tr class="dailyStats-content-table-tr1">
                                    <td class="dailyStats-content-table-tr1-td">黄佳丽</td>
                                    <td class="dailyStats-content-table-tr1-td">企划部</td>
                                    <td class="dailyStats-content-table-tr1-td">123</td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                </tr>
                            <tr class="dailyStats-content-table-tr1">
                                    <td class="dailyStats-content-table-tr1-td">黄佳丽</td>
                                    <td class="dailyStats-content-table-tr1-td">企划部</td>
                                    <td class="dailyStats-content-table-tr1-td">123</td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                </tr>
                            <tr class="dailyStats-content-table-tr1">
                                    <td class="dailyStats-content-table-tr1-td">黄佳丽</td>
                                    <td class="dailyStats-content-table-tr1-td">企划部</td>
                                    <td class="dailyStats-content-table-tr1-td">123</td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                </tr>
                            <tr class="dailyStats-content-table-tr1">
                                    <td class="dailyStats-content-table-tr1-td">黄佳丽</td>
                                    <td class="dailyStats-content-table-tr1-td">企划部</td>
                                    <td class="dailyStats-content-table-tr1-td">123</td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                    <td class="dailyStats-content-table-tr1-td"></td>
                                </tr>
                        </table>
                    </div>
                    <div class="tabs1">
                        <button class="but3"><img src="/image/attendance/icon-left.png" class="butImg"/></button>
                        <button class="but" :key="index" v-for="(list,index) in pageTab" v-bind:class="{tabBg: index == dynamic}" @click="getPages(index)">{{list.pAges}}</button>
                        <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/></button>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <!--考勤统计打卡时间-->
        <div class="clockTime" v-if="2==current">
        <div class="showClockTime">
            <div class="show-width">
                <div class="showColumns-top">
            <div class="attend attend-select">
                <div class="attend-div fl">
                    <div class="attend-title1"> 时间： </div>
                    <DatePicker type="datetimerange" placeholder="请选择时间区间" style="width: 300px;float: left"></DatePicker>
                    <div class="clear"></div>
                </div>
                <div class="attend-div fl">
                    <div class="attend-content-select fl">
                        <span class="fl" style="padding-top: 5px">部门/人员：</span>
                        <Select v-model="model8" clearable style="width: 70px; float: left" >
                            <Option v-for="item in section" :value="item.value" :key="item.value" class="attend-content-option">{{ item.label }}</Option>
                        </Select>
                        <Checkbox class="attend-content-checkbox fl" >
                            <span class="lizhi">离职员工</span>
                            <span class="attend-content-checkbox1-a">(保留三个月)</span>
                        </Checkbox>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
                </div>
            <div class="line2"></div>

            <div class="clockTime-body">
                <button class="table-but">导出报表</button>
                <div class="midder-table">
                    <table class="clockTime-table">
                        <tr class="clockTime-table-tr">
                            <td class="clockTime-table-th">姓名</td>
                            <td class="clockTime-table-th1">部门</td>
                            <td class="clockTime-table-th2">工号</td>
                            <td class="clockTime-table-th3">职位</td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">五</div>
                                <div class="th-data">1</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">六</div>
                                <div class="th-data1">2</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">天</div>
                                <div class="th-data1">3</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">一</div>
                                <div class="th-data">4</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">二</div>
                                <div class="th-data">5</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">三</div>
                                <div class="th-data">6</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">四</div>
                                <div class="th-data">7</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">五</div>
                                <div class="th-data">8</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">六</div>
                                <div class="th-data1">9</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">天</div>
                                <div class="th-data1">10</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">一</div>
                                <div class="th-data">11</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">二</div>
                                <div class="th-data">12</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">三</div>
                                <div class="th-data">13</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">四</div>
                                <div class="th-data">14</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week">五</div>
                                <div class="th-data">15</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">六</div>
                                <div class="th-data1">16</div>
                                <div class="clear"></div>
                            </td>
                            <td class="clockTime-table-th4">
                                <div class="th-week1">日</div>
                                <div class="th-data1">17</div>
                                <div class="clear"></div>
                            </td>
                        </tr>
                        <tr class="clockTime-table-tr1">
                            <td class="clockTime-table-td">黄佳丽</td>
                            <td class="clockTime-table-td">OA系统项目组</td>
                            <td class="clockTime-table-td">0125</td>
                            <td class="clockTime-table-td">开发</td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                            <td class="clockTime-table-td"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="tabs">
                <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
                <button class="but2">1</button>
                <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
            </div>
            </div>
        </div>
    </div>
        <!--原始记录页面-->
        <div class="originalRecord" v-if="3==current">
        <div class="showOriginalRecord">
            <div class="show-width">
                <div class="showColumns-top">
                    <div class="attend attend-select">
                        <div class="attend-div fl">
                            <div class="attend-title1"> 时间： </div>
                            <DatePicker type="datetimerange" placeholder="请选择时间区间" style="width: 300px;float: left"></DatePicker>
                            <div class="clear"></div>
                        </div>
                        <div class="attend-div fl">
                            <div class="attend-content-select fl">
                                <span class="fl" style="padding-top: 5px">部门/人员：</span>
                                <Select v-model="model8" clearable style="width: 70px; float: left" >
                                    <Option v-for="item in section" :value="item.value" :key="item.value" class="attend-content-option">{{ item.label }}</Option>
                                </Select>
                                <Checkbox class="attend-content-checkbox fl" >
                                    <span class="lizhi">离职员工</span>
                                    <span class="attend-content-checkbox1-a">(保留三个月)</span>
                                </Checkbox>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="line3"></div>
                </div>

            <div class="originalRecord-body">
                <button class="table-but fl">导出报表</button>
                <div class="clear"></div>
                <div class="midder-table">
                    <table class="particulars">
                        <tr class="particulars-tr">
                            <td class="particulars-th">姓名</td>
                            <td class="particulars-th1">部门</td>
                            <td class="particulars-th2">工号</td>
                            <td class="particulars-th3">职位</td>
                            <td class="particulars-th">考勤日期</td>
                            <td class="particulars-th3">考勤时间</td>
                            <td class="particulars-th3">打卡结果</td>
                            <td class="particulars-th1">打卡地址</td>
                            <td class="particulars-th4">打卡备注</td>
                            <td class="particulars-th3">异常打卡原因</td>
                            <td class="particulars-th3">打卡图片1</td>
                            <td class="particulars-th3">打卡图片2</td>
                            <td class="particulars-th5">打卡设备</td>
                            <td class="particulars-th3">管理员修改备注</td>
                            <td class="particulars-th3">管理员修改备注图片1</td>
                            <td class="particulars-th3">管理员修改备注图片2</td>
                            <td class="particulars-th3">管理员修改备注图片3</td>
                        </tr>
                        <tr class="particulars-tr1">
                            <td class="particulars-th">黄佳丽</td>
                            <td class="particulars-th">oa系统项目组</td>
                            <td class="particulars-th">1234</td>
                            <td class="particulars-th">ui</td>
                            <td class="particulars-th">19-03-19 星期二</td>
                            <td class="particulars-th">2019-03-19 9:00</td>
                            <td class="particulars-th">迟到</td>
                            <td class="particulars-th">东溪德必易园</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th">手机_bcksdljgfhslaiuvjnbxck,vzjhejf</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                        </tr>
                        <tr class="particulars-tr1">
                            <td class="particulars-th">黄佳丽</td>
                            <td class="particulars-th">oa系统项目组</td>
                            <td class="particulars-th">1234</td>
                            <td class="particulars-th">ui</td>
                            <td class="particulars-th">19-03-19 星期二</td>
                            <td class="particulars-th">2019-03-19 9:00</td>
                            <td class="particulars-th">打卡无效：需要二次确认</td>
                            <td class="particulars-th">东溪德必易园</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th">手机_bcksdljgfhslaiuvjnbxck,vzjhejf</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                        </tr>
                        <tr class="particulars-tr1">
                            <td class="particulars-th">黄佳丽</td>
                            <td class="particulars-th">oa系统项目组</td>
                            <td class="particulars-th">1234</td>
                            <td class="particulars-th">ui</td>
                            <td class="particulars-th">19-03-19 星期二</td>
                            <td class="particulars-th">2019-03-19 9:00</td>
                            <td class="particulars-th">迟到</td>
                            <td class="particulars-th">东溪德必易园</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th">手机_bcksdljgfhslaiuvjnbxck,vzjhejf</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                        </tr>
                        <tr class="particulars-tr1">
                            <td class="particulars-th">黄佳丽</td>
                            <td class="particulars-th">oa系统项目组</td>
                            <td class="particulars-th">1234</td>
                            <td class="particulars-th">ui</td>
                            <td class="particulars-th">19-03-19 星期二</td>
                            <td class="particulars-th">2019-03-19 9:00</td>
                            <td class="particulars-th">迟到</td>
                            <td class="particulars-th">东溪德必易园</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th">手机_bcksdljgfhslaiuvjnbxck,vzjhejf</td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                            <td class="particulars-th"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="tabs">
                <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
                <button class="but2">1</button>
                <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        name:'list',
        data() {
            return {
                current: 0,
                value1: '2019-02-01',
                value2: '2019-02-18',
                section: [
                    {
                        value: 'New York',
                        label: '全公司'
                    },
                    {
                        value: 'London',
                        label: '全公司'
                    },
                    {
                        value: 'Sydney',
                        label: '全公司'
                    },
                    {
                        value: 'Ottawa',
                        label: '全公司'
                    },
                    {
                        value: 'Paris',
                        label: '全公司'
                    },
                    {
                        value: 'Canberra',
                        label: '全公司'
                    }
                ],
                model8: '',
                dynamic: 0,
                pageTab:[
                    {
                        pAges:1
                    },
                    {
                        pAges:2
                    },
                    {
                        pAges:3
                    },
                    {
                        pAges:4
                    },
                ]
            }
        },
        methods: {
            // 页面切换
            statistics_change: function (event) {
                this.current = event.target.dataset.id;
            },
            // 每日统计分页切换
            getPages:function (index) {
                this.dynamic = index;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "list.less";
</style>