<template>
    <div class="">
        <Modal title="Title" v-model="revamp_text" class-name="vertical-center-modal" width="622px">
            <p slot="header" style="color:#222;text-align:left; font-size: 14px">新建加班规则</p>
            <div class="extraShift">
                <div class="extraShift-title">
                    <div class="hint">
                        <span>加班规则名称：</span>
                    </div>
                    <div class="exhibit">
                        <input type="text" value="" placeholder="安吉拉" class="extraShift-input"/><p class="extraShift-p">最多10个字符中英文字符</p>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="extraShift-title">
                    <div class="hint">
                        <span class="hint-span">应用范围：</span>
                    </div>
                    <div class="exhibit">
                        <button class="newExhibitBut" @click="optionAttend = true">请选择</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="extraShift-title1">
                    <div class="caption">工作日加班</div>
                    <div class="line"></div>
                    <div class="clear"></div>
                </div>
                <div class="extraShift-title">
                    <div class="extraShift-title-hint1">
                        <span>允许加班：</span>
                    </div>
                    <div class="exhibit1-switch" @click="gear">
                        <i-switch v-model="switch1"/>
                    </div>
                    <div class="clear"></div>
                    <div class="kaiGuan" v-show="showCount">
                        <div class="hint1">
                            <span>加班计算方式：</span>
                        </div>
                        <div class="exhibit1">
                            <div class="">
                                <RadioGroup v-model="vertical2" vertical @on-change="revamp_change">
                                    <Radio label="0" style="font-size: 13px">需审批，以审批单位准</Radio>
                                    <Radio label="1" style="font-size: 13px">需审批，已打卡为准，但不能超过审批单时长</Radio>
                                    <Radio label="2" style="font-size: 13px">无需审批，根据打卡时间计算加班时长</Radio>
                                </RadioGroup>
                                <div class="clear"></div>
                            </div>
                            <div class="shenPi fl" v-if="0==current"></div>
                            <div class="shenPi fl" v-if="1==current">
                                <div class="shenPi-hint fl">
                                    <span>加班起算时间：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p>最后一次下班后&nbsp;&nbsp;<InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟，开始计算加班</p>
                                </div>
                                <div class="clear"></div>
                                <div class="shenPi-hint fl">
                                    <span>最小加班时长：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p><InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟小于该时长则加班计为0</p>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="shenPi fl" v-if="2==current">
                                <div class="shenPi-hint fl">
                                    <span>加班起算时间：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p>最后一次下班后&nbsp;&nbsp;<InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟，开始计算加班</p>
                                </div>
                                <div class="clear"></div>
                                <div class="shenPi-hint fl">
                                    <span>最小加班时长：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p><InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟小于该时长则加班计为0</p>
                                    <div class="clear"></div>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <p class="exhibit-p">规则说明</p>
                        </div>
                        <div class="clear"></div>
                        <div class="extraShift-title">
                            <div class="hint1" style="margin-top: 5px">
                                <span>计为调休或加班费：</span>
                            </div>
                            <div class="exhibit1">
                                <Checkbox><span class="one-span">转为调休余额：</span></Checkbox><span>(调休余额规则未设置，<span class="exhibit-aa">去设置</span> )</span>
                                <img src="/image/attendance/icon-help.png" class="exhibit-img"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="extraShift-title1">
                    <div class="caption">休息日和节假日加班</div>
                    <div class="line1"></div>
                    <div class="clear"></div>
                </div>
                <div class="extraShift-title">
                    <div class="hint1">
                        <span>允许加班：</span>
                    </div>
                    <div class="exhibit1" @click="gears" style="margin-top: 8px">
                        <i-switch v-model="switch2"/>
                    </div>
                    <div class="clear"></div>
                    <div class="guanKai" v-show="showGears">
                        <div class="hint1">
                            <span>加班计算方式：</span>
                        </div>
                        <div class="exhibit1">
                            <div class="">
                                <RadioGroup v-model="vertical" vertical @on-change="overTime">
                                    <Radio label="0">需审批，以审批单位准</Radio>
                                    <Radio label="1">需审批，已打卡为准，但不能超过审批单时长</Radio>
                                    <Radio label="2">无需审批，根据打卡时间计算加班时长</Radio>
                                </RadioGroup>
                            </div>
                            <div class="shenPi fl" v-if="0==curt"></div>
                            <div class="shenPi fl" v-if="1==curt">
                                <div class="shenPi-hint fl">
                                    <span>加班起算时间：</span>
                                </div>
                                <div class="shenPi-hint fl">
                                    <span>最小加班时长：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p><InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟小于该时长则加班计为0</p>
                                </div>
                            </div>
                            <div class="shenPi fl" v-if="2==curt">
                                <div class="shenPi-hint fl">
                                    <span>加班起算时间：</span>
                                </div>
                                <div class="shenPi-hint fl">
                                    <span>最小加班时长：</span>
                                </div>
                                <div class="shenPi-exhibit fl">
                                    <p><InputNumber size="small"></InputNumber>&nbsp;&nbsp;分钟小于该时长则加班计为0</p>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <p class="exhibit-p">规则说明</p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="extraShift-title">
                        <div class="hint1" style="margin-top: 5px">
                            <span>计为调休或加班费：</span>
                        </div>
                        <div class="exhibit1">
                            <Checkbox><span class="one-span">转为调休余额：</span></Checkbox><span>(调休余额规则未设置，<span class="exhibit-aa">去设置</span> )</span>
                            <img src="/image/attendance/icon-help.png" class="exhibit-img"/>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="newFoot" slot="footer">
                <div class="foot-content">
                    <p style="" class="content-p fl">工作日，休息日和法定节假日在报表里会分开显示</p>
                </div>
                <div class="content fr">
                    <button class="content-but1" style="" @click="quXiao">取消</button>
                    <button class="content-but2" style="">确定</button>
                    <div class="clear"></div>
                </div>
                <optionAttend :optionAttend="optionAttend" v-on:dialog_optionAttend="dialog_optionAttend_show"></optionAttend>
            </div>
        </Modal>
    </div>
</template>
<script>
    import optionAttend from '@/dialog/overtimeRules/optionAttend'
    export default {
        name:'revamp',
        data () {
            return {
                revamp_text: false,
                current:0,
                vertical: '0',
                curt:0,
                vertical2:'0',
                minute: 1,
                switch2: true,
                switch1: true,
                appliedRange: '',
                showCount: true,
                showGears: true,
                optionAttend:false
            }
        },
        methods:{
            send_revamp:function (data) {
                this.$emit('dialog_revamp',data)
            },
            // 选择考勤组弹窗
            dialog_optionAttend_show:function(msg){
                this.optionAttend = msg;
            },
            // 工作日允许加班开关按钮
            gear:function () {
                this.showCount = !this.showCount;
            },
            // 工作日需审批单选框
           revamp_change: function (event) {
                console.log(event);
                this.current = event;
            },
            // 休息日和节假日允许加班开关按钮
            gears:function () {
                this.showGears = !this.showGears;
            },
            // 休息日和节假日需审批单选框
            overTime: function (event) {
                console.log(event);
                this.curt = event;
            },
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.revamp_text = false;
            }
        },
        props:{
            revamp: Boolean
        },
        watch:{
            'revamp':{
                handler:function (val) {
                    if (val){
                        this.revamp_text = val;
                        this.send_revamp(!val);
                    }
                }
            }
        },
        components:{
            optionAttend
        }
    }
</script>

<style lang="less" scoped>
    @import "revamp.less";
</style>