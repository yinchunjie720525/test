<template>
    <div class="daily">
        <!--标题-->
        <div class="attendance-style">
            <div class="attendance-style-li fl attendance-style-li1" @click="daily_data.show_daily = 0">返回列表</div>
            <div :class="show_list === 1 ? 'attendance-style-active' : '' " class="attendance-style-li fl"
                 @click="show_list = 1">日报
            </div>
            <div :class="show_list === 2 ? 'attendance-style-active' : '' "
                 class="attendance-style-li fl attendance-style-li2" @click="show_list = 2">请假
            </div>
            <div class="clear"></div>
        </div>
        <!--内容-->
        <!--日报-->
        <div v-if="show_list === 1" class="attendance-list">
            <div v-for="(item,index) in attend_text" :key="index"
                 :class=" item.is_your ? 'attendance-liattendance-li1' : ''" class="attendance-li">
                <div v-if="!item.is_your" class="attendance-li-left fl">
                    <img :src="item.uer_img" class="user-img"/>
                </div>
                <div class="attendance-li-right fl">
                    <div class="user-name" :class="item.is_your ? 'fr' :''"><span :class="item.is_your ? 'fr' :''">{{item.user}}</span><span
                            class="user-date">{{item.date}}</span></div>
                    <div class="clear" v-if="item.is_your"></div>
                    <div class="attendance-info">
                        <img src="/image/project/item/der-header.png" class="der-header"/>
                        <img src="/image/project/item/der.png" class="der-last"/>
                        <img src="/image/project/item/der-bottom.png" class="der-bottom"/>
                        <!--<img src="/static/img/project/item/der-top.png" class="der-top"/>-->
                        <div class="attendance-info-text" v-html="item.text"></div>
                    </div>
                </div>
                <div v-if="item.is_your" class="attendance-li-left fl">
                    <img :src="item.uer_img" class="user-img"/>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <!--请假-->
        <div v-if="show_list ===2" class="attendance-list">
            <div class="attendance-leave-li" v-for="(item,index) in leave_data" :key="index"
                 :class=" item.is_your ? 'attendance-liattendance-li1' : ''">
                <div v-if="!item.is_your" class="attendance-li-left fl">
                    <img :src="item.uer_img" class="user-img"/>
                </div>
                <div class="attendance-li-right fl">
                    <div class="user-name" :class="item.is_your ? 'fr' :''"><span :class="item.is_your ? 'fr' :''">{{item.user}}</span><span
                            class="user-date">{{item.date}}</span></div>
                    <div class="clear" v-if="item.is_your"></div>
                    <div class="attendance-info attendance-info2">
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">提交人</div>
                            <div class="attendance-leave-li-r fr">{{item.user}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">请假类型</div>
                            <div class="attendance-leave-li-r fr">{{item.leave_type == 1 ? '事假': item.leave_type == 2 ?
                                '病假':'其他'}}
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">所在部门</div>
                            <div class="attendance-leave-li-r fr">{{item.company}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">审批编号</div>
                            <div class="attendance-leave-li-r fr">{{item.no}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">开始时间</div>
                            <div class="attendance-leave-li-r fr">{{item.start_time}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">结束时间</div>
                            <div class="attendance-leave-li-r fr">{{item.end_time}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-row">
                            <div class="attendance-leave-li-l fl">请假理由</div>
                            <div class="attendance-leave-li-r fr attendance-leave-li-r2">{{item.remark}}</div>
                            <div class="clear"></div>
                        </div>
                        <div class="attendance-leave-li-footer">
                            <div class="attendance-leave-li-btn fr" :data-index="index" @click="show_text" data-type='3'>{{item.is_leave == 0 ? '审批' : '详情'}}
                            </div>
                            <div class="clear"></div>
                        </div>
                        <img :src="item.is_leave == 0 ? '/image/project/item/icon-shenqing.png' : item.is_leave == 1 ? '/image/project/item/icon-tongguo.png':'/image/project/item/icon-jujue.png'"
                             class="attendance-leave-status"/>
                    </div>
                </div>
                <div v-if="item.is_your" class="attendance-li-left fl">
                    <img :src="item.uer_img" class="user-img"/>
                </div>
                <div class="clear"></div>
            </div>
        </div>


        <div class="project-footer">
            <div class="attendance-last">
                <div>昨日3人未发日报</div>
            </div>
            <div class="project-active">
                <div class="fr project-active-li" @click="show_text" data-type='2'>
                    <div class="project-active-li-t">
                        <div class="project-active-li-t-bg project-active-li-t-bg1">
                            <img src="/image/project/item/leave2.png" class="project-active-li-img"/>
                        </div>
                    </div>
                    <div class="project-active-li-b">请假</div>
                </div>
                <div class="fr project-active-li" @click="show_text" data-type='1'>
                    <div class="project-active-li-t">
                        <div class="project-active-li-t-bg project-active-li-t-bg1">
                            <img src="/image/project/item/icon-plane.png" class="project-active-li-img"/>
                        </div>
                    </div>
                    <div class="project-active-li-b">发送日报</div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <!--居中弹窗-->
        <Modal v-model="dialog_middle_data.dialog_middle_show" class="dialog-middle-project" width="60">
            <div slot="header">
                <div class="project-score-top"></div>
                <div class="project-score-title">
                    <div class="project-score-logo">
                        <!--<img src="/image/project/item/icon-plane.png" class="project-score-logo-img"/>-->
                        <span>{{dialog_middle_data.show_type === 1 || dialog_middle_data.show_type === '1' ? '发送日报':dialog_middle_data.show_type === 2 || dialog_middle_data.show_type === '2'? '请假' : ''}}</span>
                    </div>
                    <div v-if="dialog_middle_data.show_type === 1 || dialog_middle_data.show_type === '1'" class="project-score-info project-score-info4">
                        <textarea class="daily-textarea" placeholder="来总结一下今天的收获吧！~~" :value="dialog_middle_data.attend_text.value" @input="get_val"></textarea>
                    </div>
                    <div class="clear"></div>
                </div>
                <div v-if="dialog_middle_data.show_type === 2 || dialog_middle_data.show_type === '2' || dialog_middle_data.show_type === 3 || dialog_middle_data.show_type === '3'" class="daily-leave-body">
                    <div class="daily-leave-body-row">
                        <div class="daily-leave-body-l fl">请假类型：</div>
                        <div class="daily-leave-body-r fl">
                            <Select :disabled="!(dialog_middle_data.leave_data.is_leave ===0 || dialog_middle_data.leave_data.is_leave === '0')" v-model="dialog_middle_data.leave_data.leave_type" filterable style="width: 279px">
                                <Option v-for="item in leave_type_data" :value="item.value" :key="item.value">{{item.label}}</Option>
                            </Select>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="daily-leave-body-row">
                        <div class="daily-leave-body-l fl">开始时间：</div>
                        <div class="daily-leave-body-r fl">
                            <DatePicker :disabled="!(dialog_middle_data.leave_data.is_leave ===0 || dialog_middle_data.leave_data.is_leave === '0')" class="fl" :editable="false" type="datetime" :value="dialog_middle_data.leave_data.start_time" @on-change="save_start_time" @on-ok="save_start_time2" name="date" format="yyyy-MM-dd HH:mm" placeholder="请选择时间" style="width: 279px"></DatePicker>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="daily-leave-body-row">
                        <div class="daily-leave-body-l fl">结束时间：</div>
                        <div class="daily-leave-body-r fl">
                            <DatePicker :disabled="!(dialog_middle_data.leave_data.is_leave ===0 || dialog_middle_data.leave_data.is_leave === '0')" class="fl" :editable="false" type="datetime" :value="dialog_middle_data.leave_data.end_time" @on-change="save_end_time" @on-ok="save_end_time2" name="date" format="yyyy-MM-dd HH:mm" placeholder="请选择时间" style="width: 279px"></DatePicker>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="daily-leave-body-row">
                        <div class="daily-leave-body-l fl">请假理由：</div>
                        <div class="daily-leave-body-r fl">
                           <textarea placeholder="请输入您为什么要请假的理由" :disabled="!(dialog_middle_data.leave_data.is_leave ===0 || dialog_middle_data.leave_data.is_leave === '0')" class="daily-leave-body-r-textarea" :value="dialog_middle_data.leave_data.remark" @input="get_val2"></textarea>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="daily-leave-body-row">
                        <div class="daily-leave-body-l fl">所属部门：</div>
                        <div class="daily-leave-body-l fl">执行部</div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <div v-if="dialog_middle_data.show_type === 1 || dialog_middle_data.show_type === '1'">
                    <button class="project-score-btn" @click="enter_daily">确认发送</button>
                    <button class="project-score-btn project-score-btn-cancel" @click="close_middle_dialog">取消</button>
                </div>
                <div v-if="dialog_middle_data.show_type === 2 || dialog_middle_data.show_type === '2' || dialog_middle_data.show_type === 3 || dialog_middle_data.show_type === '3'">
                    <div class="for-people fl">
                        <div class="for-peopel-li fl">
                            <div class="for-peopel-li-l fl">抄送人：</div>
                            <div class="for-peopel-li-r fl">
                                <div>
                                    <img src="/image/project/item/icon-header.png" class="for-peopel-li-r-img"/>
                                </div>
                                <div class="for-peopel-li-r-text">李够胆</div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="for-peopel-li fl">
                            <div class="for-peopel-li-l fl">审批人：</div>
                            <div class="for-peopel-li-r fl">
                                <div>
                                    <img src="/image/project/item/icon-header.png" class="for-peopel-li-r-img"/>
                                </div>
                                <div class="for-peopel-li-r-text">李够胆</div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="for-peopel-li fl">
                            <div class="for-peopel-li-l fl">抄送人：</div>
                            <div class="for-peopel-li-r fl">
                                <div>
                                    <img src="/image/project/item/icon-header.png" class="for-peopel-li-r-img"/>
                                </div>
                                <div class="for-peopel-li-r-text">李够胆</div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div v-if="dialog_middle_data.show_type === 2 || dialog_middle_data.show_type === '2'" class="for-people-btn fr">
                        <button class="project-score-btn" @click="enter_daily">提交</button>
                        <button class="project-score-btn project-score-btn-cancel" @click="close_middle_dialog">取消</button>
                    </div>
                    <div v-if="dialog_middle_data.show_type === 3 || dialog_middle_data.show_type === '3'" class="for-people-btn fr">
                        <button class="project-score-btn" @click="enter_daily_agree" data-type="1">同意</button>
                        <button class="project-score-btn project-score-btn-cancel2" @click="enter_daily_agree" data-type="2">拒绝</button>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {deepClone, get_date3} from '@/assets/js/template'

    export default {
        name: "daily",
        props: {
            daily_data: {}
        },
        data() {
            return {
                leave_type_data: [
                    {
                        value: 1,
                        label: "事假"
                    },
                    {
                        value: 2,
                        label: "病假"
                    },
                    {
                        value: 3,
                        label: "例假"
                    },
                ],
                dialog_middle_data: {
                    dialog_middle_show: false,
                    show_type: 0,
                    attend_text: {
                        value: '',
                        date: '',
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        is_your: true,
                        text: ''
                    },
                    leave_data: {
                        id: 1,
                        is_leave: 1,
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        is_your: true,
                        // 1事假 2病假
                        leave_type: -1,
                        company: '执行部',
                        no: 'SP234512',
                        start_time: '',
                        end_time: '',
                        remark: ''
                    }
                },
                show_list: 1,
                attend_text: [
                    {
                        text: '三人禾企划中心—程嵩 2019年3月18日工作日报: 今日工作内容： 1、系统开发（上午）： ①OA意向提交静态页面书写 2、系统开发（下午） ①OA项目详情静态页面书写 ②OA人员分配静态页面书写 明日工作内容： ①OA剩余页面计划排布 ②OA审批模块页面书写',
                        date: '2019.02.06 19:16',
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        is_your: true
                    }, {
                        text: '三人禾企划中心—程嵩 2019年3月18日工作日报: 今日工作内容： 1、系统开发（上午）： ①OA意向提交静态页面书写 2、系统开发（下午） ①OA项目详情静态页面书写 ②OA人员分配静态页面书写 明日工作内容： ①OA剩余页面计划排布 ②OA审批模块页面书写',
                        date: '2019.02.06 19:16',
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        is_your: false
                    }, {
                        text: '三人禾企划中心—程嵩 2019年3月18日工作日报: 今日工作内容： 1、系统开发（上午）： ①OA意向提交静态页面书写 2、系统开发（下午） ①OA项目详情静态页面书写 ②OA人员分配静态页面书写 明日工作内容： ①OA剩余页面计划排布 ②OA审批模块页面书写',
                        date: '2019.02.06 19:16',
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        is_your: true
                    }
                ],
                leave_data_index:-1,
                leave_data: [
                    {
                        id: 1,
                        is_leave: 1,
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        date: '2019.02.06 19:16',
                        is_your: true,
                        // 1事假 2病假
                        leave_type: 1,
                        company: '执行部',
                        no: 'SP234512',
                        start_time: '2019-04-04 18:02',
                        end_time: '2019-04-15 18:02',
                        remark: '生病了我需要请2天的假期，在家里好好的休息补充下精神'
                    }, {
                        id: 2,
                        is_leave: 0,
                        user: '程嵩',
                        uer_img: '/image/project/item/icon-header.png',
                        date: '2019.02.06 19:16',
                        is_your: false,
                        // 1事假 2病假
                        leave_type: 2,
                        company: '执行部',
                        no: 'SP234512',
                        start_time: '2019-04-04 18:02',
                        end_time: '2019-04-15 18:02',
                        remark: '生病了我需要请2天的假期，在家里好好的休息补充下精神'
                    }
                ]
            }
        },
        methods: {
            // 返回列表
            back_list:function(){
                this.daily_data.show_daily = 0;
            },
            // 同意&拒绝
            enter_daily_agree:function(event){
                let that = this;
                let type = event.currentTarget.dataset.type;
                if(type === 1 || type === '1'){
                    that.leave_data[that.dialog_middle_data.leave_data_index].is_leave = 1

                }else if(type === 2 || type === '2'){
                    that.leave_data[that.dialog_middle_data.leave_data_index].is_leave = 2
                }
                that.dialog_middle_data.dialog_middle_show = false
            },
            // 弹窗：请假开始时间
            save_start_time:function(date){
                this.dialog_middle_data.leave_data.start_time = date;
            },
            save_start_time2:function(){
                if(new Date(this.dialog_middle_data.leave_data.start_time) > new Date(this.dialog_middle_data.leave_data.end_time)){
                    this.dialog_middle_data.leave_data.end_time = this.dialog_middle_data.leave_data.start_time
                }
            },
            // 弹窗：请假休息时间
            save_end_time:function(date){
                this.dialog_middle_data.leave_data.end_time = date;
            },
            save_end_time2:function(){
                if(new Date(this.dialog_middle_data.leave_data.start_time) > new Date(this.dialog_middle_data.leave_data.end_time)){
                    this.dialog_middle_data.leave_data.start_time = this.dialog_middle_data.leave_data.end_time
                }
            },
            // 弹窗：请假理由
            get_val2: function (event) {
                // let value = deepClone(event.srcElement.value).replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
                // this.dialog_middle_data.attend_text.value = event.srcElement.value;
                this.dialog_middle_data.leave_data.remark = event.srcElement.value;
            },
            // 弹窗：编辑日报
            get_val: function (event) {
                let value = deepClone(event.srcElement.value).replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
                this.dialog_middle_data.attend_text.value = event.srcElement.value;
                this.dialog_middle_data.attend_text.text = value;
            },
            // 关闭弹窗
            close_middle_dialog: function () {
                this.dialog_middle_data.dialog_middle_show = false
            },
            // 确认&关闭弹窗
            enter_daily: function () {
                let that = this;
                if (that.dialog_middle_data.show_type === 1 || that.dialog_middle_data.show_type === '1') {
                    that.dialog_middle_data.attend_text.date = get_date3(new Date());
                    that.attend_text.push(deepClone(that.dialog_middle_data.attend_text));
                }
                else if(that.dialog_middle_data.show_type === 2 || that.dialog_middle_data.show_type === '2'){
                    that.dialog_middle_data.leave_data.date = get_date3(new Date());
                    that.leave_data.push(deepClone(that.dialog_middle_data.leave_data));
                }
                that.dialog_middle_data.dialog_middle_show = false
            },
            // 打开弹窗
            show_text: function (event) {
                let that = this;
                that.dialog_middle_data.show_type = event.currentTarget.dataset.type;
                // 发日报
                that.dialog_middle_data.dialog_middle_show = true
                if(event.currentTarget.dataset.type === 3 || event.currentTarget.dataset.type ==='3' ){
                    that.dialog_middle_data.leave_data_index = event.currentTarget.dataset.index;
                    that.dialog_middle_data.leave_data = that.leave_data[event.currentTarget.dataset.index]
                }
                else if(event.currentTarget.dataset.type === 2 || event.currentTarget.dataset.type ==='2' ){
                    that.dialog_middle_data.leave_data.is_leave = 0;
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import "daily";
</style>
<style lang="less">
    .project-score-info4 {
        width: 100% !important;
        .daily-textarea {
            width: 100%;
            margin-top: 20px;
            border: 0;
            height: 80px;
        }
    }
    .daily-leave-body{
        margin: 24px;
        .ivu-select-input{
            height: 29px;
        }
        .daily-leave-body-row{
            margin: 0 0 10px 0;
            .daily-leave-body-l{
                color: #222222;
                font-size: 14px;
                height: 34px;
                line-height: 34px;
                margin: 0 16px 0 0;
            }
            .daily-leave-body-r{
                width: 80%;
                .daily-leave-body-r-textarea{
                    width: 80%;
                    height: 98px;
                    border-radius: 4px;
                    border: solid 1px #bec2c6;
                    line-height: 20px;
                    padding: 5px 10px;
                    font-size: 14px;
                }

            }

        }
    }
    .for-people{
        .for-peopel-li{
            margin-right: 30px;
        }
        .for-peopel-li-l{
            color: #222222;
            font-size: 14px;
            line-height: 14px;
            position: relative;
            top: 9px;
        }
        .for-peopel-li-r-img{
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        .for-peopel-li-r-text{
            color: #999999;
            font-size: 12px;
        }
    }
    .for-people-btn{
        margin-top: 9px;
    }

</style>