<template>
    <Modal v-model="add_text" class-name="vertical-center-modal" width="710px">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">新增班次</p>
        <div class="ivu-modal-body">
        <div class="addShift">
            <div class="addShift-title">
                <span>班次名称 </span><input type="text" value="" placeholder="安吉拉" class="addShift-input"/>
                <p class="addShift-p">最多10个字符（中英文或数字）</p>
            </div>
            <div class="addShift-title">
                <div class="addShift-title-topic">
                    <span class="addShift-title-span">设置改班次一天内上班的次数 </span>
                    <button class="addShift-title-button" data-id="0" @click="banci_change" :class="{bg: 0==change}">1天1次上下班</button>
                    <button class="addShift-title-button" data-id="1" @click="banci_change" :class="{bg: 1==change}">1天2次上下班</button>
                    <button class="addShift-title-button" data-id="2" @click="banci_change" :class="{bg: 2==change}">1天3次上下班</button>
                </div>
                <div class="addShift-title-option">
                    <Checkbox label="" @on-change="frameCount"><span class="one-span">打卡时段设置</span></Checkbox>
                </div>
                <div class="clear"></div>
            </div>
            <!--一天一次上班-->
            <div class="addShift-title1" v-if="0==change">
                <div class="punchCard">
                    <span>第一次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="punchCard1">
                    <span>下班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="addShift-title1">
                    <div class="rest fl">
                        <Checkbox style="margin-right: 24px"><span class="one-span">休息时间</span></Checkbox>
                        <span class="rest-span">休息开始：</span>
                        <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    </div>
                    <div class="rested fl">
                        <span>休息结束：</span>
                        <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    </div>
                    <div class="clear"></div>
                </div>
                <p style="color: rgb(89,89,89);">合计工作时长3小时0分钟&nbsp;&nbsp;<a href="" class="explain">(考勤统计工作时长及出差外出统计，会以此时间为准)</a> </p>
            </div>

            <!--一天两次上班-->
            <div class="addShift-title1" v-if="1==change">
                <div class="punchCard">
                    <span>第一次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                    </div>
                </div>
                <div class="punchCard1">
                    <span>下班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                    <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                        <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span class="punchCard-span">分钟前开始打卡</span>
                    <div class="clear"></div>
                </div>
                </div>
                <div class="clear"></div>
                <div class="punchCard">
                    <span>第二次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="punchCard1">
                    <div class="ys fl"><p class="ys-p">下班：</p></div>
                    <div class="ya fl">
                        <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                        <div class="frame fr" v-show="showFrame">
                            <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                                <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <!--一天三次上班-->
            <div class="addShift-title1" v-if="2==change">
                <div class="punchCard">
                    <span>第一次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="punchCard1">
                    <div class="ys fl"><p class="ys-p">下班：</p></div>
                    <div class="ya fl">
                        <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                        <div class="frame fr" v-show="showFrame">
                            <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                                <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="punchCard">
                    <span>第二次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="punchCard1">
                    <span>下班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="punchCard">
                    <span>第三次&nbsp;&nbsp;上班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="punchCard1">
                    <span>下班：</span>
                    <TimePicker format="HH:mm" size="small" placeholder="09:00" style="width: 80px; margin-right: 3px;"></TimePicker>
                    <div class="frame fr" v-show="showFrame">
                        <Select size="small" style="width:55px; margin: 1px 0 0 3px">
                            <Option v-for="item in hour1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="punchCard-span">分钟前开始打卡</span>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="addShift-title1">
                <Checkbox style="margin-right: 24px"><span class="one-span">下班不用打卡（开启后，下班不打卡也不会记做异常）</span></Checkbox>
            </div>
            <div class="line"></div>
            <div class="addShift-title1">
                <p>人性化班次</p>
            </div>
            <div class="addShift-title1">
                <CheckboxGroup>
                    <Checkbox style="margin: 0 12px 12px 3px"><span class="one-span">允许迟到分钟数</span></Checkbox>
                    <InputNumber size="small" class="entry"></InputNumber>
                </CheckboxGroup>
                <CheckboxGroup>
                    <Checkbox style="margin: 0 12px 12px 3px"><span class="one-span">严重迟到分钟数</span></Checkbox>
                    <InputNumber size="small" class="entry"></InputNumber>
                </CheckboxGroup>
                <CheckboxGroup>
                    <Checkbox style="margin: 0 12px 12px 3px"><span class="one-span">旷工迟到分钟数</span></Checkbox>
                    <InputNumber size="small" class="entry"></InputNumber>
                </CheckboxGroup>
            </div>
            <div class="line"></div>
            <div class="addShift-title1">
                <Checkbox style=""><span class="one-span"></span>晚走晚到<span class="explain">(第一天下班走太晚，第二天可以晚点到，仅支持固定班制内勤打卡)</span></Checkbox>
            </div>
        </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'add',
        data () {
            return {
                change:0,
                add_text: false,
                hour: [
                    {
                        value: '10',
                        label: '10'
                    },
                    {
                        value: '20',
                        label: '20'
                    },
                    {
                        value: '30',
                        label: '30'
                    },
                    {
                        value: '40',
                        label: '40'
                    },
                    {
                        value: '50',
                        label: '50'
                    },
                    {
                        value: '60',
                        label: '60'
                    }
                ],
                hour1: [
                    {
                        value: '10',
                        label: '10'
                    },
                    {
                        value: '20',
                        label: '20'
                    },
                    {
                        value: '30',
                        label: '30'
                    },
                    {
                        value: '40',
                        label: '40'
                    },
                    {
                        value: '50',
                        label: '50'
                    },
                    {
                        value: '60',
                        label: '60'
                    }
                ],
                showFrame: false
            }
        },
        methods:{
            send_add:function (data) {
                this.$emit('dialog_add',data)
            },
            banci_change: function (event) {
                this.change = event.target.dataset.id;
            },
            frameCount:function () {
                console.log(123)
                this.showFrame = !this.showFrame;
            }
        },
        props:{
            add: Boolean
        },
        watch:{
            'add':{
                handler:function (val) {
                    if (val){
                        this.add_text = val;
                        this.send_add(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "add.less";
</style>