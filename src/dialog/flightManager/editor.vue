<template>
    <Modal v-model="editor_text" class-name="vertical-center-modal" width="710px">
        <p slot="header" style="color:#222;text-align:left; font-size: 14px">编辑班次</p>
        <div class="editorShift">
            <div class="editorShift-title">
                <span>班次名称 </span><input type="text" value="安吉拉" class="editorShift-input"/>
                <p class="editorShift-p">最多10个字符（中英文或数字）</p>
            </div>
            <!--上班次数-->
            <div class="editorShift-title">
                <div class="editorShift-title-topic">
                    <span class="editorShift-title-span">设置改班次一天内上班的次数 </span>
                    <button class="editorShift-title-button" data-id="0" @click="office_chose" :class="{bg:0==count}">1天1次上下班</button>
                    <button class="editorShift-title-button" data-id="1" @click="office_chose" :class="{bg:1==count}">1天2次上下班</button>
                    <button class="editorShift-title-button" data-id="2" @click="office_chose" :class="{bg:2==count}">1天3次上下班</button>
                </div>
                <div class="editorShift-title-option">
                    <Checkbox label="" @on-change="frameCount"><span class="one-span">打卡时段设置</span></Checkbox>
                </div>
                <div class="clear"></div>
            </div>
                <!--一天一次上下班-->
                <div class="editorShift-title1" v-if="0==count">
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <p style="color: rgb(89,89,89);">合计工作时长3小时0分钟&nbsp;&nbsp;<a href="" class="explain">(考勤统计工作时长及出差外出统计，会以此时间为准)</a> </p>
                </div>
                <!--一天两次上下班-->
                <div class="editorShift-title1" v-if="1==count">
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <p>合计工作时长3小时0分钟&nbsp;&nbsp;<a href="" class="explain">(考勤统计工作时长及出差外出统计，会以此时间为准)</a> </p>
                </div>
                <!--一天三次上下班-->
                <div class="editorShift-title1" v-if="2==count">
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="punchCard">
                        <span>第1次&nbsp;&nbsp;上班：</span>
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
                                <Option v-for="item in hour" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="punchCard-span">分钟前开始打卡</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <p>合计工作时长3小时0分钟&nbsp;&nbsp;<a href="" class="explain">(考勤统计工作时长及出差外出统计，会以此时间为准)</a> </p>
                </div>

            <div class="editorShift-title1">
                <Checkbox style="margin-right: 24px"><span class="one-span">下班不用打卡（开启后，下班不打卡也不会记做异常）</span></Checkbox>
            </div>
            <div class="line"></div>
            <div class="editorShift-title1">
                <p>人性化班次</p>
            </div>
            <div class="editorShift-title1">
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
            <div class="editorShift-title1">
                <Checkbox style=""><span class="one-span">晚走晚到</span><a href="" class="explain">(第一天下班走太晚，第二天可以晚点到，仅支持固定班制内勤打卡)</a> </Checkbox>
                <p href="" class="explain1">晚走规则1</p>
                <p>第一天下班后晚走
                    <Select size="small" style="width:55px; margin-top: -4px">
                        <Option v-for="item in hour2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    小时，第二天上班可以晚到
                    <Select size="small" style="width:55px; margin-top: -4px">
                        <Option v-for="item in hour3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    小时<a href="" class="explain">第一天17:00下班，第二天10:30上班不算迟到</a></p>
                <p class="newAdd">新增晚走晚到</p>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'editor',
        data(){
            return{
                count:0,
                editor_text: false,
                hour: [
                    {
                        value: '10',
                        label: '1'
                    },
                    {
                        value: '20',
                        label: '5'
                    },
                    {
                        value: '30',
                        label: '10'
                    },
                    {
                        value: '40',
                        label: '15'
                    },
                    {
                        value: '50',
                        label: '20'
                    },
                    {
                        value: '60',
                        label: '25'
                    },
                    {
                        value: '70',
                        label: '30'
                    }
                ],
                hour1: [
                    {
                        value: '10',
                        label: '1'
                    },
                    {
                        value: '20',
                        label: '5'
                    },
                    {
                        value: '30',
                        label: '10'
                    },
                    {
                        value: '40',
                        label: '15'
                    },
                    {
                        value: '50',
                        label: '20'
                    },
                    {
                        value: '60',
                        label: '25'
                    },
                    {
                        value: '70',
                        label: '30'
                    }
                ],
                hour2: [
                    {
                        value: '10',
                        label: '1.5'
                    },
                    {
                        value: '20',
                        label: '2'
                    },
                    {
                        value: '30',
                        label: '2.5'
                    },
                    {
                        value: '40',
                        label: '3'
                    },
                    {
                        value: '50',
                        label: '3.5'
                    },
                    {
                        value: '60',
                        label: '4'
                    }
                ],
                hour3: [
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
                space: '',
                space1:'',
                showFrame: false
            }
        },
        methods:{
            send_editor:function (data) {
                this.$emit('dialog_editor',data)
            },
            // 上班次数切换
            office_chose: function (event) {
                this.count = event.target.dataset.id;
            },
            frameCount:function () {
                this.showFrame = !this.showFrame;
            }
        },
        props:{
            editor: Boolean
        },
        watch:{
            'editor':{
                handler:function (val) {
                    if (val){
                        this.editor_text = val;
                        this.send_editor(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "editor.less";
</style>

