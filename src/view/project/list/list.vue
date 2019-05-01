<template>
    <div class="project">
        <div class="project-title">
            <div class="project-position-top" ref="positionTop">
                <!--操作-->
                <div class="project-active">
                    <div class="project-active-btn fl">
                        <div class="chose-btn fl" data-id="0" @click="chose_list">全选</div>
                        <div class="chose-btn fl" data-id="1" @click="chose_list">批量确认</div>
                        <div class="chose-btn fl" data-id="2" @click="chose_list">批量关闭</div>
                        <div class="clear"></div>
                    </div>
                    <div class="project-active-right fr">
                        <div @click="project_screen_show" class="project-screen fl">
                            <span class="project-screen-text">筛选</span>
                            <img src="/image/bothIcon/icon-screen.png" class="project-screen-icon"/>
                        </div>
                        <div class="project-select fl">查询</div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="borderT" v-if="screen_show"></div>
                <!--筛选下拉-->
                <div :class="screen_show ? '' :'project-screen-dialog-hide' " class="project-screen-dialog">
                    <div class="start-time screen-dialog-time">
                        <div class="start-time-text fl screen-dialog-time-text">发起时间：</div>
                        <DatePicker class="fl" :editable="false" type="datetimerange" :value="start_time"
                                    @on-change="save_start_time" name="date" format="yyyy-MM-dd HH:mm"
                                    placeholder="请选择时间" style="width: 300px"></DatePicker>
                        <div class="clear"></div>
                    </div>
                    <div class="get-time screen-dialog-time marR0">
                        <div class="get-time-text fl screen-dialog-time-text">提交时间：</div>
                        <DatePicker class="fl" :editable="false" type="datetimerange" :value="get_time"
                                    @on-change="save_get_time" name="date" format="yyyy-MM-dd HH:mm" placeholder="请选择时间"
                                    style="width: 300px"></DatePicker>
                        <div class="clear"></div>
                    </div>
                    <div class="ground-time screen-dialog-time">
                        <div class="ground-time-text screen-dialog-time-text fl">落地时间：</div>
                        <DatePicker class="fl" :editable="false" type="datetimerange" :value="ground_time"
                                    @on-change="save_ground_time" name="date"
                                    format="yyyy-MM-dd HH:mm" placeholder="请选择时间" style="width: 300px"></DatePicker>
                        <div class="clear"></div>
                    </div>
                    <!--项目类型-->
                    <div class="project-screen-both-style project-screen-style">
                        <div class="screen-dialog-time-text fl">项目类型：</div>
                        <ul class="screen-dialog-both-style-ul fl">
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_type ==1  || project_type == 0? 'screen-dialog-style-li-active' : ''"
                                @click="project_type = 1">工厂联动
                            </li>
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_type ==2 ? 'screen-dialog-style-li-active' : ''"
                                @click="project_type =2">全国联动
                            </li>
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_type ==3 ? 'screen-dialog-style-li-active' : ''"
                                @click="project_type =3">商城联动
                            </li>
                            <div class="clear"></div>
                        </ul>
                        <div class="clear"></div>
                    </div>
                    <!--客户标签-->
                    <div class="project-screen-both-style customer-label">
                        <div class="screen-dialog-time-text fl">客户标签：</div>
                        <ul class="screen-dialog-both-style-ul fl">
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_customer ==1  || project_customer == 0? 'screen-dialog-style-li-active' : ''"
                                @click="project_customer = 1">商城老板
                            </li>
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_customer ==2 ? 'screen-dialog-style-li-active' : ''"
                                @click="project_customer = 2">供应商
                            </li>
                            <li class="screen-dialog-both-style-li fl"
                                :class="project_customer ==3 ? 'screen-dialog-style-li-active' : ''"
                                @click="project_customer = 3">经理
                            </li>
                            <div class="clear"></div>
                        </ul>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--列表-->
        <div class="project-list" :style="height">
            <ul class="project-ul">
                <li :key=index class="project-li" :data-index="index" v-for="(item,index) in list">
                    <!--头部信息-->
                    <div class="project-li-title">
                        <span :data-index="index" @click="li_chose" class="project-chose fl"
                              :class="item.is_chose ? 'project-chose-active':''"></span>
                        <div class="project-no fl">项目编号：ALSJDFLKJN512</div>
                        <div class="project-date fl">提交时间：2018-09-30</div>
                        <div class="project-people fl">提交人：<span class="project-li-title-people">张大彪&nbsp;<img
                                src="/image/bothIcon/icon-logo.png"/>&nbsp;三人禾集团-三人禾执行</span>
                        </div>
                        <div class="project-status fr project-status1">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">待审批</span>
                        </div>
                        <div class="project-status fr project-status2 disn">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">待洽谈</span>
                        </div>
                        <div class="project-status fr project-status3 disn">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">待分配</span>
                        </div>
                        <div class="project-status fr project-status4 disn">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">筹备中</span>
                        </div>
                        <div class="project-status fr project-status5 disn">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">进行中</span>
                        </div>
                        <div class="project-status fr project-status6 disn">
                            <img src="/image/bothIcon/icon-approval.png" class="project-status-icon"/>
                            <span class="project-status-text">待收尾</span>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!--主体内容-->
                    <div class="project-info">
                        <div class="project-info-first">
                            <div class="project-style project-info-div">项目类型：商城活动</div>
                            <div class="project-left">
                                <div class="project-company project-info-div">甲方单位：杭州红星美凯龙</div>
                                <div class="project-people project-info-div">
                                    <span class="project-userName">联系人：王飞</span>
                                    <span class="project-work">岗位：经理</span>
                                </div>
                            </div>
                            <div class="project-right">
                                <div class="project-address project-info-div">详细地址：杭州市杭州市滨江区</div>
                                <div class="project-contact project-info-div">
                                    <span class="project-phone">联系电话：18569853166</span>
                                    <span class="project-email">邮箱：13646513485@163.com</span>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="customer-style-list project-info-div">客户标签：
                                <span class="customer-style">商场老板</span>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div v-if="item.isShow.div2" :class="item.isShow.div1 ? '' : 'project-info-second-hide' "
                             class="project-info-second">
                            <div class="enter-date project-info-div">信息确认时间：<img src="/image/bothIcon/icon-time.png"
                                                                                 class="project-info-icon-date"/>2019年1月1日12:00
                            </div>
                            <div class="project-left">
                                <div class="talk-people project-info-div">商务洽谈：张飞</div>
                            </div>
                            <div class="project-right">
                                <div class="talk-people project-info-div">确认洽谈时间：<img
                                        src="/image/bothIcon/icon-time.png"
                                        class="project-info-icon-date"/>2019年1月1日12:00
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="talk-remark project-info-div">商务备注：该项目甲方想在上海体育馆举行</div>
                            <div class="project-left">
                                <div class="active-name project-info-div">活动名字：红星美凯龙全国联动</div>
                                <div class="contract-no project-info-div">合同编号：HLI7445DGFFH1463</div>
                                <div class="earnest-money project-info-div">定金金额：<span class="earnest-money-num">5,000,000&nbsp;元<span
                                        class="earnest-money-num-shu"></span>伍佰万元人民币整</span><span
                                        class="earnest-money-no-num" data-type="5" :data-id="item.id"
                                        @click="show_dialog">未录入</span></div>
                            </div>
                            <div class="project-right">
                                <div class="project-date project-info-div">起止时间：<img src="/image/bothIcon/icon-time.png"
                                                                                     class="project-info-icon-date"/>2019年1月1日12:00&nbsp;～&nbsp;<img
                                        src="/image/bothIcon/icon-time.png" class="project-info-icon-date"/>2019年1月1日12:00
                                </div>
                                <div class="contract-phone project-info-div">合同照片：
                                    <span class="contract-phone-show" data-type="4" :data-id="item.id"
                                          @click="show_dialog"><img
                                            src="/image/bothIcon/icon-contract.png"/>查看合同凭证</span>
                                    <span class="contract-phone-no-show" data-type="4" :data-id="item.id"
                                          @click="show_dialog"><img src="/image/bothIcon/icon-upload.png"/>上传</span>
                                    <span class="contract-phone-return-show" data-type="4" :data-id="item.id"
                                          @click="show_dialog"><img src="/image/bothIcon/icon-f5.png"/>重新上传</span>
                                </div>
                                <div class="contract-phone project-info-div">定金凭证：
                                    <span class="contract-phone-show" data-type="5" :data-id="item.id"
                                          @click="show_dialog"><img
                                            src="/image/bothIcon/icon-contract.png"/>查看款项凭证</span>
                                    <span class="contract-phone-no-show" data-type="5" :data-id="item.id"
                                          @click="show_dialog"><img src="/image/bothIcon/icon-upload.png"/>上传</span>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="project-info-div">
                                <span class="project-info-status">当前状态：筹备中</span>
                                <span class="project-info-master">当前主控：<span class="project-info-master-img">
                                <img src="/image/user/icon-header.png" class="project-info-master-img1"/>
                                <img src="/image/bothIcon/icon-supervip.png" class="project-info-master-level"/>
                            </span>姜森</span>
                                <span class="project-info-implement">当前执行：张三;李四</span>
                            </div>
                            <div class="project-info-div">
                                <span class="project-info-status">财务对接：王宁</span>
                                <span class="project-info-master">企划对接：刘康</span>
                                <span class="project-info-implement">礼品对接：刘六</span>
                            </div>
                            <div class="project-info-div">完工表：
                                <span class="contract-phone-show" data-type="10" :data-id="item.id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-contract.png"/>查看完工表</span>
                                <span class="contract-phone-no-show" data-type="10" :data-id="item.id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-upload.png"/>上传</span>
                                <span class="contract-phone-return-show" data-type="10" :data-id="item.id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-f5.png"/>重新上传</span>
                            </div>
                            <div class="project-left">
                                <div class="project-info-div">尾款款项：<span class="earnest-money-num">5,000,000&nbsp;元<span
                                        class="earnest-money-num-shu"></span>伍佰万元人民币整</span><span
                                        class="earnest-money-no-num">未录入</span></div>
                            </div>
                            <div class="project-right">
                                <div class="project-info-div">尾款凭证：
                                    <span class="contract-phone-show" data-type="9" :data-id="item.id"
                                          @click="show_dialog"><img
                                            src="/image/bothIcon/icon-contract.png"/>查看尾款凭证</span>
                                    <span class="contract-phone-no-show" data-type="9" :data-id="item.id"
                                          @click="show_dialog"><img
                                            src="/image/bothIcon/icon-upload.png"/>上传</span>
                                    <span class="contract-phone-return-show" data-type="9" :data-id="item.id"
                                          @click="show_dialog"><img
                                            src="/image/bothIcon/icon-f5.png"/>重新上传</span></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <!--操作-->
                    <div class="project-info-active fr">
                        <span class="project-info-active-btn project-info-active-btn1" data-type="0" :data-id="item.id"
                              @click="show_dialog">关闭</span>


                        <span class="project-info-active-btn" data-type="1" :data-id="item.id"
                              @click="show_dialog">分配公司</span>
                        <span class="project-info-active-btn" data-type="2" :data-id="item.id" @click="show_dialog">分配商务人员</span>
                        <span class="project-info-active-btn" data-type="3" :data-id="item.id"
                              @click="show_dialog">确认信息</span>

                        <span class="project-info-active-btn " data-type="4" :data-id="item.id" @click="show_dialog">合同提交</span>
                        <span class="project-info-active-btn " data-type="5" :data-id="item.id" @click="show_dialog">定金证明</span>

                        <span class="project-info-active-btn " data-type="6" :data-id="item.id" @click="show_dialog">进入项目组</span>
                        <!--<span class="project-info-active-btn " data-type="7" :data-id="item.id" @click="show_dialog">信息修改</span>-->
                        <span class="project-info-active-btn " data-type="8" :data-id="item.id" @click="show_dialog">人员安排</span>
                        <span class="project-info-active-btn " data-type="9" :data-id="item.id"
                              @click="show_dialog">尾款提交</span>

                        <span class="project-info-active-btn " data-type="10" :data-id="item.id" @click="show_dialog">提交完工表</span>
                        <span class="project-info-active-btn " data-type="11" :data-id="item.id" @click="show_dialog">委托书提交</span>
                        <!--<span class="project-info-active-btn " data-type="12" :data-id="item.id" @click="show_dialog">人员调整</span>-->

                        <span class="project-info-active-btn " data-type="13" :data-id="item.id"
                              @click="show_dialog"><img src="/image/bothIcon/icon-contract.png"
                                                        class="project-info-active-btn-icon1"/>项目人员评分</span>

                        <!--<span class="project-info-active-btn" data-type="14" :data-id="item.id" @click="show_dialog">人员安排</span>-->
                        <span class="project-info-active-btn" data-type="15" :data-id="item.id" @click="show_dialog">信息完善</span>
                        <!--中期款项-->
                        <span class="project-info-active-btn" data-type="16" :data-id="item.id" @click="show_dialog">中期款项</span>
                        <span class="project-info-active-btn" data-type="17" :data-id="item.id" @click="show_dialog">活动照片</span>
                        <span class="project-info-active-btn" data-type="18" :data-id="item.id" @click="show_dialog">商务确认函</span>
                        <span class="project-info-active-btn" data-type="19" :data-id="item.id" @click="show_dialog">协议提交</span>

                        <span class="project-info-active-btn"  data-type="20"  :data-id="item.id" @click="show_dialog">查看项目</span>
                        <span :data-index="index" class="project-info-active-btn project-info-active-btn2" data-id="0"
                              @click="show_detail">
                            <img src="/image/bothIcon/icon-project-down.png"
                                 :class="item.isShow.div1 ? '' : 'project-info-active-btn2-icon-hide'"
                                 class="project-info-active-btn2-icon"/>
                            {{item.isShow.div1 ? '合拢':'展开'}}
                        </span>
                    </div>
                    <div class="clear"></div>
                </li>
            </ul>
        </div>
        <!--提示框 -->
        <dialogTip :dialog_tip_data="dialog_tip_data" v-on:is_yes="dialog_is_yes"></dialogTip>
        <!--左侧弹窗-->
        <Drawer class="dialog-right-div" :closable="false" v-model="dialog_btn_data.dialog_show" width="580px"
                @on-close='change'>
            <!--关闭项目-->
            <dialogLeft0 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 0"
                         ref="cancel"></dialogLeft0>
            <!--分配公司-->
            <dialogLeft :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 1"
                        ref="cancel"></dialogLeft>
            <!--分配业务人员-->
            <dialogLeft2 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 2"
                         ref="cancel"></dialogLeft2>
            <!--项目信息确认-->
            <dialogLeft3 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 3"
                         ref="cancel"></dialogLeft3>
            <!--合同提交-->
            <dialogLeft4 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 4"
                         ref="cancel"></dialogLeft4>
            <!--定金证明-->
            <dialogLeft5 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 5"
                         ref="cancel"></dialogLeft5>
            <!--收款-->
            <dialogLeft9 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 9"
                         ref="cancel"></dialogLeft9>
            <!--提交完工表-->
            <dialogLeft10 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 10"
                          ref="cancel"></dialogLeft10>
            <!--委托书提交-->
            <dialogLeft11 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 11"
                          ref="cancel"></dialogLeft11>
            <!--活动落地信息完善-->
            <dialogLeft15 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 15" ref="cancel"></dialogLeft15>
            <!--中期款项-->
            <dialogLeft16 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 16" ref="cancel"></dialogLeft16>
            <!--活动照片-->
            <dialogLeft17 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 17 || dialog_btn_data.dialog_type== 18 || dialog_btn_data.dialog_type== 19" ref="cancel"></dialogLeft17>
        </Drawer>
        <!--居中弹窗-->
        <Modal draggable v-model="dialog_middle_data.dialog_middle_show" class="dialog-middle-project" width="80" >
            <div slot="header">
                <div class="project-score-top"></div>
                <div class="project-score-title">
                    <div class="project-score-logo fl">
                        <img src="/image/bothIcon/icon-assembly.png" class="project-score-logo-img"/>
                        <span>项目评分</span>
                    </div>
                    <div class="project-score-info fl">
                        <div class="project-score-info-t">
                            <span class="project-score-info-t2">项目名称：红星美凯龙全国联动</span>
                            <span class="">活动类型：工厂联动</span>
                        </div>
                        <div class="project-score-info-b">活动时间：2018年4月1日12:00 <img src="/image/bothIcon/icon-time.png"/> —— 2019年4月6日20:00 <img src="/image/bothIcon/icon-time.png"/></div>
                    </div>
                    <div class="clear"></div>
                    <div style="border-bottom: 1px solid #eeeeee;margin-top: 24px"></div>
                </div>
            </div>
            <!--项目评分-->
            <dialogMiddle13 :dialog_middle_data="dialog_middle_data" v-if="dialog_middle_data.dialog_type== 13" ref="cancel"></dialogMiddle13>

            <div slot="footer">
                <button class="project-score-btn">确认评分</button>
                <button class="project-score-btn project-score-btn-cancel" @click="close_middle_dialog">取消</button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import dialogTip from '@/components/dialog/dialog-tip'
    // 左侧弹窗
    import dialogLeft0 from '@/dialog/project/closeProject'
    import dialogLeft from '@/dialog/project/allotCompany'
    import dialogLeft2 from '@/dialog/project/allotPersonal'
    import dialogLeft3 from '@/dialog/project/confirmInfo'
    import dialogLeft4 from '@/dialog/project/contractUp'
    import dialogLeft5 from '@/dialog/project/earnest'
    import dialogLeft9 from '@/dialog/project/getMoney'
    import dialogLeft10 from '@/dialog/project/completion'
    import dialogLeft11 from '@/dialog/project/entrustBook'
    import dialogLeft15 from '@/dialog/project/activityLanding'
    import dialogLeft16 from '@/dialog/project/middleMoney'
    import dialogLeft17 from '@/components/dialog/dialog-photo'
    // 居中弹窗
    import dialogMiddle13 from '@/dialog/project/projectScore'

    export default {
        name: "list",
        components: {
            // 批量确认提示弹窗
            dialogTip: dialogTip,
            // 按钮左侧弹窗
            dialogLeft0: dialogLeft0,
            dialogLeft: dialogLeft,
            dialogLeft2: dialogLeft2,
            dialogLeft3: dialogLeft3,
            dialogLeft4: dialogLeft4,
            dialogLeft5: dialogLeft5,
            dialogLeft9: dialogLeft9,
            dialogLeft10: dialogLeft10,
            dialogLeft11: dialogLeft11,
            dialogLeft15: dialogLeft15,
            dialogLeft16:dialogLeft16,
            dialogLeft17:dialogLeft17,
            // 按钮居中
            dialogMiddle13: dialogMiddle13
        },
        data() {
            return {
                // 居中弹窗
                dialog_middle_data: {
                    dialog_middle_show: false,
                    dialog_type: '13',
                    dialog_id: ''
                },
                // 左侧弹窗
                dialog_btn_data: {
                    dialog_show: false,
                    dialog_type: '',
                    dialog_id: '',
                    title:'',
                    title2:'',
                    lineName:'',
                },
                // 筛选搜索
                project_type: 0,
                project_customer: 0,
                // 批量确认
                dialog_tip_data: {
                    dialog_show: false,
                    dialog_text: '',
                    is_yes: '',
                },
                chose_list_data: [],
                start_time: '',
                ground_time: '',
                get_time: '',
                height: '',
                screen_show: false,
                list: [{
                    id: 0,
                    is_chose: false,
                    isShow: {div1: false, div2: false},
                }, {
                    id: 1,
                    is_chose: false,
                    isShow: {div1: false, div2: false},
                }, {
                    id: 2,
                    is_chose: false,
                    isShow: {div1: false, div2: false},
                }],
                // 折叠


            }
        },
        methods: {
            close_middle_dialog:function(){
              this.dialog_middle_data.dialog_middle_show = false
            },
            change: function () {
                this.$refs.cancel.cancel();
            },
            // 单选：各类btn按钮
            show_dialog: function (event) {
                let id = event.currentTarget.dataset.id;
                // 1公司 2业务人员 3项目信息确认 4合同提交
                let type = event.currentTarget.dataset.type;

                if (type == 13) {
                    this.dialog_middle_data.dialog_type = type;
                    this.dialog_middle_data.dialog_id = id;
                    this.dialog_middle_data.dialog_middle_show = true;
                }else if(type == 6){
                    let attr = [];
                    let back_url = { url : this.$route.name ,id :id };
                    if(JSON.parse(sessionStorage.getItem('back_url')) != null && JSON.parse(sessionStorage.getItem('back_url')) != ''){
                        let li = JSON.parse(sessionStorage.getItem('back_url'));
                        li.forEach((item) =>{
                            attr.push(item)
                        })
                    }
                    attr.push(back_url);
                    sessionStorage.setItem('back_url',JSON.stringify(attr));
                    this.$router.push({name:"levelMenu2_projectItem",query:{ id:id}})
                }else if(type == 8){
                    let attr = [];
                    let back_url = { url : this.$route.name ,id :id };
                    if(JSON.parse(sessionStorage.getItem('back_url')) != null && JSON.parse(sessionStorage.getItem('back_url')) != ''){
                        let li = JSON.parse(sessionStorage.getItem('back_url'));
                        li.forEach((item) =>{
                            attr.push(item)
                        })
                    }
                    attr.push(back_url);
                    sessionStorage.setItem('back_url',JSON.stringify(attr));
                    this.$router.push({name:"levelMenu3_project_distributive",query:{ id:id}})
                }
                else if(type == 20){
                    let attr = [];
                    let back_url = { url : this.$route.name ,id :id };
                    if(JSON.parse(sessionStorage.getItem('back_url')) != null && JSON.parse(sessionStorage.getItem('back_url')) != ''){
                        let li = JSON.parse(sessionStorage.getItem('back_url'));
                        li.forEach((item) =>{
                            attr.push(item)
                        })
                    }
                    attr.push(back_url);
                    sessionStorage.setItem('back_url',JSON.stringify(attr));
                    this.$router.push({name:"levelMenu3_project_index",query:{ id:id}})
                }
                else if(type == 17){
                    this.dialog_btn_data.dialog_show = true;
                    this.dialog_btn_data.title = '上传活动照片';
                    this.dialog_btn_data.title2 = '上传活动照片';
                    this.dialog_btn_data.lineName = '上传活动照片';
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_type = type;
                }else if(type == 18){
                    this.dialog_btn_data.dialog_show = true;
                    this.dialog_btn_data.title = '商务确认函';
                    this.dialog_btn_data.title2 = '商务确认函';
                    this.dialog_btn_data.lineName = '上传确认函';
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_type = type;
                }
                else if(type == 19){
                    this.dialog_btn_data.dialog_show = true;
                    this.dialog_btn_data.title = '协议提交';
                    this.dialog_btn_data.title2 = '协议提交';
                    this.dialog_btn_data.lineName = '上传协议';
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_type = type;
                }
                else {
                    this.dialog_btn_data.dialog_type = type;
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_show = true;
                }
                // // 分配公司
                // if(type == 1 ){
                //
                // }
                // // 分配业务人员
                // if(type == 2){
                //
                // }
            },
            // 返回多选确认
            dialog_is_yes: function (msg) {
                this.dialog_tip_data.is_yes = msg;
                if (this.dialog_tip_data.is_yes) {
                    console.log(this.chose_list_data)
                }
            },
            // 单选
            li_chose: function (event) {
                let index = event.currentTarget.dataset.index;
                this.list[index].is_chose = !this.list[index].is_chose;
                if (this.list[index].is_chose) {
                    if (this.chose_list_data.length > 0) {
                        this.chose_list_data.forEach((item2) => {
                            if (item2 != this.list[index].id) {
                                this.chose_list_data.push(this.list[index].id);
                            }
                        })
                    } else {
                        this.chose_list_data.push(this.list[index].id);
                    }
                } else {
                    if (this.chose_list_data.length > 0) {
                        this.chose_list_data.forEach((item2, index2) => {
                            if (item2 == this.list[index].id) {
                                this.chose_list_data.splice(index2, 1);
                            }
                        })
                    }
                }
            },
            // 列表选择
            chose_list: function (event) {
                let type = event.currentTarget.dataset.id;
                // 全选
                if (type == 0) {
                    this.chose_list_data = [];
                    this.list.forEach((item) => {
                        item.is_chose = true;
                        this.chose_list_data.push(item.id)
                    })
                    event.currentTarget.dataset.id = 3;
                }
                // 取消全选
                else if (type == 3) {
                    this.list.forEach((item) => {
                        item.is_chose = false;
                    })
                    this.chose_list_data = [];
                    event.currentTarget.dataset.id = 0;
                }
                // 批量确认
                if (type == 1) {
                    this.dialog_tip_data.dialog_show = true;
                    this.dialog_tip_data.dialog_text = '确认审核通过选中的相关项目吗？'
                }
                // 批量关闭
                if (type == 2) {
                    this.dialog_tip_data.dialog_show = true;
                    this.dialog_tip_data.dialog_text = '确认要关闭选中的相关项目吗？'
                }

            },
            // 发起时间
            save_start_time: function (date) {
                this.start_time = date;
            },
            // 提交时间
            save_get_time: function (date) {
                this.get_time = date;
            },
            // 落地时间
            save_ground_time: function (date) {
                this.ground_time = date;
            },
            // 获取高度
            get_height() {
                this.height = "height:calc(100% - " + window.getComputedStyle(this.$refs.positionTop).height + ")";
            },
            project_screen_show: function () {
                let that = this;
                if (this.screen_show) {
                    this.screen_show = false;
                    this.height = "height:calc(100% - 54px)";
                } else {
                    this.screen_show = true
                    that.get_height();
                }
            },
            // 展开合拢列表页
            show_detail: function (event) {
                let that = this;
                let index = event.currentTarget.dataset.index;
                let show1 = that.list[index].isShow;
                console.log(show1)
                if (show1.div1) {
                    show1.div1 = !show1.div1;
                    setTimeout(function () {
                        show1.div2 = !show1.div2;
                    }, 400)
                } else {
                    show1.div2 = !show1.div2;
                    // that.list[index].isShow.splice(event.target.dataset.id,1,show1);
                    setTimeout(function () {
                        show1.div1 = !show1.div1;
                        // that.list[index].isShow.splice(event.target.dataset.id,1,show1);
                    }, 400)
                }

            }
        },
        mounted() {
            this.get_height();
        },
    }
</script>

<style lang="less">
    @import "list.less";
</style>