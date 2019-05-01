<template>
    <!--修改规则-->
    <div class="changeRules">
        <div class="changeRules-content">
            <div class="changeRules-content-entry">
                <div class="content-entry-message fl">考勤组名称：</div>
                <div class="content-entry-midder fl">
                    <input type="text" placeholder="后勤" class="content-entry-midder-hou"/>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-align fl">参与考勤人员：</div>
                <div class="content-entry-midder fl">
                    <div class="content-entry-midder-yuan-button" @click="arrange = true">请选择</div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-message fl">无需参与人员：</div>
                <div class="content-entry-midder fl">
                    <div class="content-entry-midder-yuan-button" @click="arrange = true">请选择</div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-message fl">考勤组负责人：</div>
                <div class="content-entry-midder fl">
                    <div class="content-entry-midder-yuan-button" @click="arrange = true">请选择</div>
                    <p class="content-entry-midder-declare">协助管理员分管本考勤组的排班急统计</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-message fl">考勤类型：</div>
                <div class="content-entry-midder fl">
                    <form action="" method="">
                        <label class="midder-label"><input name="stutic" type="radio" checked="checked" class="entry-midder-radio" disabled/>固定班制 (每天考勤时间一样)</label>
                        <p class="entry-midder-shi">适用于：IT、金融、文化传媒、政府/事业单位、教育培训等行业</p>
                        <label class="midder-label"><input name="stutic" type="radio" class="entry-midder-radio" disabled/>排班制 (自定义设置考勤时间)</label>
                        <p class="entry-midder-shi">适用于：餐饮、制造、物流贸易、客户服务、医院等行业</p>
                        <label class="midder-label"><input name="stutic" type="radio" class="entry-midder-radio" disabled/>自由工时（不设置班次，随时打卡）</label>
                        <p class="entry-midder-shi">适用于：班次没有规律、装修、家政、物流等计算工作时长的行业</p>
                    </form>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-align fl">考勤班次：</div>
                <div class="content-entry-midder fl">
                    <div class="content-entry-midder-yuan-button" @click="attendGrades = true">请选择</div>
                    <div class="banci-daka">
                        <Checkbox><span class="one-span">未排班时，员工可以根据班次打卡</span><span class="banci-daka-span">减轻管理员排班负担，同时支持事后排班</span></Checkbox>
                        <span class="banci-daka-span">查看说明</span>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry" style="margin-top: 32px">
                <div class="content-entry-align fl">排班周期：</div>
                <div class="content-entry-midder fl">
                    <div class="content-entry-midder-yuan">
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li fl">周期名称</li>
                            <li class="content-entry-midder-li-count fl">周期班次</li>
                            <li class="content-entry-midder-li-data fl">周期天数</li>
                            <li class="content-entry-midder-li-option fl">操作</li>
                            <li class="clear"></li>
                        </ul>
                        <li class="line"></li>
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li fl" style="line-height: 50px">2班制</li>
                            <li class="content-entry-midder-li-count fl" style="line-height: 50px">实施·默认班次</li>
                            <li class="content-entry-midder-li-data fl" style="line-height: 50px">2</li>
                            <li class="content-entry-midder-li-options fl" style="line-height: 50px">设置</li>
                            <li class="clear"></li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry" style="margin-top: 22px">
                <div class="content-entry-align fl">考勤方式：</div>
                <div class="content-entry-midder fl">
                    <p class="content-entry-manzu fl">一下方式满足一项，考勤组成员即可完成考勤，你也可以批量导入导出考勤方式</p>
                    <button class="content-entry-educe">导出考勤方式</button>
                    <button class="content-entry-lead fl">导入考勤方式</button>
                    <div class="clear"></div>
                    <p style="margin: 15px 0 5px 0"><span>1.根据办公地点考勤（可添加多个考勤地点）</span>
                        <span class="content-entry-manzu">有效范围
                            <Select v-model="mi" size="small" style="width:90px">
                                <Option v-for="item in testing" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </span></p>
                    <div class="content-entry-midder-yuan">
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li-addre fl">考勤地址</li>
                            <li class="content-entry-midder-li-option fl">操作</li>
                            <li class="clear"></li>
                        </ul>
                        <li class="line"></li>
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li-address fl">
                                <p class="content-entry-midder-li-address-p">杭州奥体博览城</p>
                                <p class="content-entry-midder-li-address-p1">浙江省杭州市江干区东宁路</p>
                            </li>
                            <li class="content-entry-midder-li-option1 fl">设置</li>
                            <li class="clear"></li>
                        </ul>
                    </div>
                    <p class="map"><span class="address">添加考勤地点</span>(查询考勤地点经纬度，请使用高德地图查看<span class="address">查看</span>)</p>
                    <p style="margin: 20px 0 5px">2.根据wifi考勤（精确定位到办公室内，可添加多个办公WiFi）</p>
                    <div class="content-entry-midder-yuan">
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li-name fl">名称</li>
                            <li class="content-entry-midder-li-add fl">考勤地址</li>
                            <li class="content-entry-midder-li-select fl">操作</li>
                            <li class="clear"></li>
                        </ul>
                        <li class="line"></li>
                        <ul class="content-entry-midder-ul">
                            <li class="content-entry-midder-li-data fl"></li>
                            <li class="clear"></li>
                        </ul>
                    </div>
                    <p class="map"><span class="address">添加办公WiFi</span></p>
                    <p class="map"><Checkbox><span class="one-span">允许外勤打卡</span></Checkbox></p>
                    <p class="map"><Checkbox><span class="one-span" @on-change="discern">拍照打卡（支持人脸识别）</span></Checkbox></p>
                    <p class="map" v-show="showDiscern"><Checkbox><span class="one-span">美颜模式</span></Checkbox></p>
                    <p class="map" v-show="showDiscern"><Checkbox><span class="one-span">人脸打卡</span></Checkbox><span class="banci-daka-span">三位员工未录入人脸</span><span class="address">查看</span></p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-content-entry">
                <div class="content-entry-message fl">加班规则：</div>
                <div class="content-entry-midder fl">
                    <p class="jiaban-p">审批后，以打卡时间计算加班<span class="address">查看</span></p>
                    <p class="jiaban-p">工作日：加班必须审批，以打卡为准，但不能超过审批单时长</p>
                    <p class="jiaban-p" >休息日和节假日，加班必须审批，已打卡为准</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="changeRules-footer">
                <button class="baocun-set">保存设置，开始加班</button>
            </div>
        </div>
        <arrange :arrange="arrange" v-on:dialog_arrange="dialog_arrange_show"></arrange>
        <attendGrades :attendGrades="attendGrades" v-on:dialog_attendGrades="dialog_attendGrades_show"></attendGrades>
    </div>
</template>

<script>
    import arrange from '@/dialog/attendanceManager/arrange'
    import attendGrades from '@/dialog/attendanceManager/attendGrades'
    export default {
        name:'revision',
        data(){
            return{
                personnel: [
                    {
                        value: 'huang',
                        label: '黄佳丽'
                    },
                    {
                        value: 'cheng',
                        label: '黄佳丽'
                    },
                    {
                        value: 'li',
                        label: '黄佳丽'
                    }
                ],
                testing: [
                    {
                        value: 'fifity',
                        label: '50米'
                    },
                    {
                        value: 'hundred',
                        label: '100米'
                    },
                    {
                        value: 'hundredfifity',
                        label: '150米'
                    },
                    {
                        value: 'fifitys',
                        label: '200米'
                    },
                    {
                        value: 'hundreds',
                        label: '250米'
                    },
                    {
                        value: 'hundredfifitys',
                        label: '300米'
                    }
                ],
                partake: '',
                mi:'',
                arrange: false,
                attendGrades: false,
                showDiscern: false
            }
        },
        methods:{
            dialog_arrange_show:function (msg) {
                this.arrange = msg;
            },
            dialog_attendGrades_show:function (msg) {
                this.attendGrades = msg;
            },
            // 美颜模式切换
            discern:function () {
                this.showDiscern = !this.showDiscern;
            }
        },
        components:{
            arrange,
            attendGrades
        }
    }
</script>

<style lang="less" scoped>
    @import "revision.less";
</style>