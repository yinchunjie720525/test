<template>
    <div class="project-item">
        <!--头部基础信息-->
        <div class="project-item-title">
            <div class="project-item-title-l fl">
                <div class="project-item-back fl" @click="goBack()">返回</div>
                <div class="fl project-item-titleName">红星美凯龙全国联动</div>
                <div class="project-item-time fl">起止时间：2018-04-15 —— 2018-05-02</div>
                <div class="clear"></div>
            </div>
            <div class="project-leader fr">
                <div class="project-leader-boss fl">
                    <div class="project-leader-img-bg">
                        <img src="/image/user/icon-header.png" class="project-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-leader-img2"/>
                    </div>
                    <span class="project-leader-boss-name">最高领导：秦飞</span>
                </div>
                <div class="project-leader-boss fl">
                    <div class="project-leader-img-bg">
                        <img src="/image/user/user.png" class="project-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-leader-img2"/>
                    </div>
                    <span class="project-leader-boss-name">商务对接：草书</span>
                </div>
                <div class="project-leader-boss fl">
                    <div class="project-leader-img-bg">
                        <img src="/image/user/user.png" class="project-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-leader-img2"/>
                    </div>
                    <span class="project-leader-boss-name">企划对接：刘康</span>
                </div>
                <div class="project-leader-boss fl">
                    <div class="project-leader-img-bg">
                        <img src="/image/user/user.png" class="project-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-leader-img2"/>
                    </div>
                    <span class="project-leader-boss-name">礼品对接：陈波</span>
                </div>
                <div class="project-leader-boss fl marR0">
                    <div class="project-leader-img-bg">
                        <img src="/image/user/user.png" class="project-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-leader-img2"/>
                    </div>
                    <span class="project-leader-boss-name">财务对接：王宁</span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>

        <div class="project-item-show-body">
            <!--项目进程-->
            <div v-if="daily_data.show_daily === 0" class="project-item-status">
                <div class="project-item-status-icons">
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text opacity50">意向提交</div>
                        <div class="project-item-status-info opacity50">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">意向审批</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">分配公司</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">分配商务</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">意向洽谈</div>
                        <div class="project-item-status-info">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">定金款项</span>
                            </div>
                            <div class="project-item-status-info-active project-item-status-info-active2">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">合同提交</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">已分配</div>
                        <div class="project-item-status-info">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">人员分配</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">已筹备</div>
                        <div class="project-item-status-info">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">物料对接</span>
                            </div>
                            <div class="project-item-status-info-active project-item-status-info-active2">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">礼品对接</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">进行中</div>
                        <div class="project-item-status-info">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">中期款项</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">商务确认函</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">执行委托书</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">活动照片</span>
                            </div>
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">协议提交</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">落地当天</div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">待收尾</div>
                        <div class="project-item-status-info">
                            <div class="project-item-status-info-active">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">完工表</span>
                            </div>
                            <div class="project-item-status-info-active project-item-status-info-active2">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">尾款提交</span>
                            </div>
                            <div class="project-item-status-info-active project-item-status-info-active2">
                                <img src="/image/bothIcon/icon-checked.png"/>
                                <span class="project-item-status-info-text">项目评分</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-item-status-next fl">
                        <img src="/image/project/next.png"/>
                    </div>
                    <div class="project-item-status-icon fl">
                        <div class="project-item-status-img">
                            <img src="/image/bothIcon/icon-assembly.png"/>
                        </div>
                        <div class="project-item-status-text">项目完成</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--项目详情-->
                <div class="project-item-info" v-if="isShow.div2" :class="isShow.div1 ? '' : 'project-item-info-hide' ">
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
                    <div class="project-info-second">
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
                                    class="earnest-money-no-num" data-type="5" :data-id="project_id"
                                    @click="show_dialog">未录入</span></div>
                        </div>
                        <div class="project-right">
                            <div class="project-date project-info-div">起止时间：<img src="/image/bothIcon/icon-time.png"
                                                                                 class="project-info-icon-date"/>2019年1月1日12:00&nbsp;～&nbsp;<img
                                    src="/image/bothIcon/icon-time.png" class="project-info-icon-date"/>2019年1月1日12:00
                            </div>
                            <div class="contract-phone project-info-div">合同照片：
                                <span class="contract-phone-show" data-type="4" :data-id="project_id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-contract.png"/>查看合同凭证</span>
                                <span class="contract-phone-no-show" data-type="4" :data-id="project_id"
                                      @click="show_dialog"><img src="/image/bothIcon/icon-upload.png"/>上传</span>
                                <span class="contract-phone-return-show" data-type="4" :data-id="project_id"
                                      @click="show_dialog"><img src="/image/bothIcon/icon-f5.png"/>重新上传</span>
                            </div>
                            <div class="contract-phone project-info-div">定金凭证：
                                <span class="contract-phone-show" data-type="5" :data-id="project_id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-contract.png"/>查看款项凭证</span>
                                <span class="contract-phone-no-show" data-type="5" :data-id="project_id"
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
                            <span class="contract-phone-show" data-type="10" :data-id="project_id"
                                  @click="show_dialog"><img
                                    src="/image/bothIcon/icon-contract.png"/>查看完工表</span>
                            <span class="contract-phone-no-show" data-type="10" :data-id="project_id"
                                  @click="show_dialog"><img
                                    src="/image/bothIcon/icon-upload.png"/>上传</span>
                            <span class="contract-phone-return-show" data-type="10" :data-id="project_id"
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
                                <span class="contract-phone-show" data-type="9" :data-id="project_id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-contract.png"/>查看尾款凭证</span>
                                <span class="contract-phone-no-show" data-type="9" :data-id="project_id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-upload.png"/>上传</span>
                                <span class="contract-phone-return-show" data-type="9" :data-id="project_id"
                                      @click="show_dialog"><img
                                        src="/image/bothIcon/icon-f5.png"/>重新上传</span></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="project-item-status-btn">
                    <span class="project-item-status-btn1" data-id="1" @click="chose_list">意向审批</span>
                    <span class="project-item-status-btn1" data-type="1" @click="show_dialog">分配公司</span>
                    <span class="project-item-status-btn1" data-type="2" @click="show_dialog">分配商务人员</span>
                    <span class="project-item-status-btn1" data-type="4" @click="show_dialog">合同提交</span>
                    <span class="project-item-status-btn1" data-type="5" @click="show_dialog">定金证明</span>
                    <!--<span class="project-item-status-btn1" data-type="7" @click="show_dialog">信息修改</span>-->
                    <span class="project-item-status-btn1" data-type="8" @click="show_dialog">人员安排</span>
                    <span class="project-item-status-btn1" data-type="10" @click="show_dialog">提交完工表</span>
                    <span class="project-item-status-btn1" data-type="11" @click="show_dialog">委托书提交</span>
                    <span class="project-item-status-btn1" data-type="9" @click="show_dialog">尾款提交</span>
                    <span class="project-item-status-btn1" data-type="17" @click="show_dialog">活动照片</span>
                    <span class="project-item-status-btn1" data-type="13" @click="show_dialog">项目人员评分</span>
                    <span class="project-item-status-btn1" data-type="18" @click="show_dialog">商务确认函</span>
                    <span class="project-item-status-btn1" data-type="19" @click="show_dialog">协议提交</span>
                    <span class="project-item-status-btn1" data-type="15" @click="show_dialog">信息完善</span>
                    <span class="project-item-status-btn2" @click="show_detail"><img
                            src="/image/bothIcon/icon-project-down.png"
                            :class="isShow.div1 ? '' : 'project-item-status-btn2-img-hide'"
                            class="project-item-status-btn2-img"/> {{isShow.div1 ? '合拢':'展开'}}</span>
                </div>
            </div>
            <div v-if="daily_data.show_daily === 0" class="project-item-often">
                <!--考勤-->
                <div class="project-item-work fl">
                    <div class="project-item-work-title">考勤</div>
                    <div class="project-item-work-body">
                        <div class="project-item-work-t">
                            <!--选项卡-->
                            <div class="project-item-work-tab fl">
                            <span class="fl project-item-work-tab-li " data-id="0"
                                  :class="work_type == 0 ? 'project-item-work-tab-li-active':''" @click="work_type =0">今日</span>
                                <span class="fl project-item-work-tab-li" data-id="1"
                                      :class="work_type == 1 ? 'project-item-work-tab-li-active':''" @click="work_type =1">所有</span>
                                <span class="fl project-item-work-tab-li" data-id="2"
                                      :class="work_type == 2 ? 'project-item-work-tab-li-active':''" @click="work_type =2">我的</span>
                                <div class="clear"></div>
                            </div>
                            <!--时间-->
                            <div class="project-item-work-date fl" v-if="work_type == 0">
                                <span>今日：</span>
                                <TimePicker format="HH:mm" type="timerange" editable placement="bottom-end"
                                            placeholder="请选择时间" style="width: 86px"></TimePicker>
                                <img src="/image/bothIcon/icon-time.png"/>
                            </div>
                            <div class="project-item-work-date fl" v-if="work_type == 1 || work_type == 2">
                                <!--<span>起止时间：</span>-->
                                <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="请选起止择时间"
                                            style="width: 240px"></DatePicker>
                                <img src="/image/bothIcon/icon-time.png"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="project-item-work-b">
                            <div class="project-item-work-bHead">
                                <div class="project-item-work-line1 fl"></div>
                                <div class="project-item-work-line2 fl">迟到</div>
                                <div class="project-item-work-line3 fl">早退</div>
                                <div class="project-item-work-line4 fl">缺卡</div>
                                <div class="project-item-work-line5 fl">旷工</div>
                                <div class="project-item-work-line6 fl">外勤</div>
                                <div class="project-item-work-line7 fl">加班</div>
                                <div class="clear"></div>
                            </div>
                            <div class="project-item-work-bBody">
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>
                                    <div class="project-item-work-line6 fl">1</div>
                                    <div class="project-item-work-line7 fl">0</div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--日报-->
                <div class="project-item-work fr">
                    <div class="project-item-work-title">日报<span class="show-details fr" @click="daily_data.show_daily = 1">查看详情</span></div>
                    <div class="project-item-work-body">
                        <div class="project-item-work-t">
                            <!--选项卡-->
                            <div class="project-item-work-tab fl">
                            <span class="fl project-item-work-tab-li " data-id="0"
                                  :class="date_type == 0 ? 'project-item-work-tab-li-active':''" @click="date_type =0">今日</span>
                                <span class="fl project-item-work-tab-li" data-id="1"
                                      :class="date_type == 1 ? 'project-item-work-tab-li-active':''" @click="date_type =1">所有</span>
                                <span class="fl project-item-work-tab-li" data-id="2"
                                      :class="date_type == 2 ? 'project-item-work-tab-li-active':''" @click="date_type =2">我的</span>
                                <div class="clear"></div>
                            </div>
                            <!--时间-->
                            <div class="project-item-work-date fl" v-if="date_type == 0">
                                <span>今日：</span>
                                <TimePicker format="HH:mm" type="timerange" editable placement="bottom-end"
                                            placeholder="请选择时间" style="width: 86px"></TimePicker>
                                <img src="/image/bothIcon/icon-time.png"/>
                            </div>
                            <div class="project-item-work-date fl" v-if="date_type == 1 || date_type == 2">
                                <!--<span>起止时间：</span>-->
                                <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="请选起止择时间"
                                            style="width: 240px"></DatePicker>
                                <img src="/image/bothIcon/icon-time.png"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="project-item-work-b">
                            <div class="project-item-work-bHead">
                                <div class="project-item-work-line1 fl"></div>
                                <div class="project-item-work-line2 fl">应交天数</div>
                                <div class="project-item-work-line3 fl">实交天数</div>
                                <div class="project-item-work-line4 fl">应交次数</div>
                                <div class="project-item-work-line5 fl">实交次数</div>
                                <div class="clear"></div>
                            </div>
                            <div class="project-item-work-bBody">
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>
                                <div class="project-item-work-bLi">
                                    <div class="project-item-work-line1 fl">王五</div>
                                    <div class="project-item-work-line2 fl">1</div>
                                    <div class="project-item-work-line3 fl project-item-work-noData">0</div>
                                    <div class="project-item-work-line4 fl">1</div>
                                    <div class="project-item-work-line5 fl">0</div>

                                    <div class="clear"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <daily v-if="daily_data.show_daily === 1 " :daily_data ="daily_data" ></daily>
        </div>

        <!--项目组人员-->
        <div class="project-item-people">
            <!--主控-->
            <div class="project-item-leader">
                <div class="project-item-leader-title">主控</div>
                <div class="project-item-leader-info">
                    <div class="project-item-leader-img-bg fl">
                        <img src="/image/user/icon-header.png" class="project-item-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-item-leader-img2"/>
                    </div>
                    <div class="project-item-leader-name fl ">将色鬼</div>
                    <div class="project-item-people-status fl">
                        <img src="/image/bothIcon/icon-chose.png" class="project-item-people-status-img"/>
                        <span class="project-item-people-status-text">已到场</span>
                    </div>
                    <div class="project-item-people-switch fl">
                        <i-switch v-model="switch1"/>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!--执行助理-->
            <div class="project-item-leader project-item-leader2">
                <div class="project-item-leader-title">执行助理<span>（5人到场,2人未到,1人离场）</span></div>
                <div class="project-item-leader-info">
                    <div class="project-item-leader-img-bg fl">
                        <img src="/image/user/icon-header.png" class="project-item-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-item-leader-img2"/>
                    </div>
                    <div class="project-item-leader-name fl">将色鬼</div>
                    <div class="project-item-people-status fl">
                        <img src="/image/bothIcon/icon-chose.png" class="project-item-people-status-img"/>
                        <span class="project-item-people-status-text">已到场</span>
                    </div>
                    <div class="project-item-people-switch fl">
                        <i-switch v-model="switch2"/>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="project-item-leader-info">
                    <div class="project-item-leader-img-bg fl">
                        <img src="/image/user/icon-header.png" class="project-item-leader-img"/>
                        <img src="/image/bothIcon/icon-supervip.png" class="project-item-leader-img2"/>
                    </div>
                    <div class="project-item-leader-name fl">将色鬼</div>
                    <div class="project-item-people-status fl">
                        <img src="/image/bothIcon/icon-chose.png" class="project-item-people-status-img"/>
                        <span class="project-item-people-status-text">已到场</span>
                    </div>
                    <div class="project-item-people-switch fl">
                        <img src="/image/bothIcon/icon-project-down.png" class="project-item-people-switch-img"/>
                        <span class="project-item-people-switch-text">撤销</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <!--人员调配-->
            <div class="project-item-change">
                <img src="/image/bothIcon/icon-project-down.png" class="project-item-change-img"/>
                <span>人员调配</span>
            </div>
            <!--操作-->
            <div class="project-item-people-active">
                <div class="project-item-people-del fl">
                    <img src="/image/bothIcon/icon-project-down.png" class="project-item-change-img"/>
                    <span>人员调配</span>
                </div>
                <div class="project-item-people-open fr">
                    <img src="/image/bothIcon/icon-project-down.png" class="project-item-change-img"/>
                    <span>开启到场</span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="project-item-people-big-open">
                <div class="project-item-people-big-open-text1">项目已启动</div>
                <div class="project-item-people-big-open-text2">项目已启动</div>
            </div>
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
            <dialogLeft15 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 15"
                          ref="cancel"></dialogLeft15>
            <!--中期款项-->
            <dialogLeft16 :dialog_btn_data="dialog_btn_data" v-if="dialog_btn_data.dialog_type== 16"
                          ref="cancel"></dialogLeft16>
            <!--活动图片-->
            <dialogLeft17 :dialog_btn_data="dialog_btn_data"
                          v-if="dialog_btn_data.dialog_type== 17 || dialog_btn_data.dialog_type== 18 || dialog_btn_data.dialog_type== 19"
                          ref="cancel"></dialogLeft17>
        </Drawer>
        <!--居中弹窗-->
        <Modal draggable v-model="dialog_middle_data.dialog_middle_show" class="dialog-middle-project" width="80">
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
                        <div class="project-score-info-b">活动时间：2018年4月1日12:00 <img src="/image/bothIcon/icon-time.png"/>
                            —— 2019年4月6日20:00 <img src="/image/bothIcon/icon-time.png"/></div>
                    </div>
                    <div class="clear"></div>
                    <div style="border-bottom: 1px solid #eeeeee;margin-top: 24px"></div>
                </div>
            </div>
            <!--项目评分-->
            <dialogMiddle13 :dialog_middle_data="dialog_middle_data" v-if="dialog_middle_data.dialog_type== 13"
                            ref="cancel"></dialogMiddle13>

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

    // 日报&请假
    import daily from '@/view/project/projectItem/daily'


    export default {
        name: "index",
        components: {
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
            dialogLeft16: dialogLeft16,
            dialogLeft17: dialogLeft17,
            // 按钮居中
            dialogMiddle13: dialogMiddle13,
            daily:daily
        },
        data() {
            return {
                daily_data:{
                    show_daily:0,
                },
                work_type: 0,
                date_type: 0,
                switch1:true,
                switch2:false,
                // 展开合拢
                isShow: {
                    div1: false,
                    div2: false,
                },
                // 批量确认
                dialog_tip_data: {
                    dialog_show: false,
                    dialog_text: '',
                    is_yes: '',
                },
                project_id: '',
                bakc_url: '',
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
                    dialog_id: ''
                },
            }
        },
        methods: {
            // 返回
            goBack:function(){
                if(JSON.parse(sessionStorage.getItem('back_url')) != null && JSON.parse(sessionStorage.getItem('back_url')) != ''){
                    let list = JSON.parse(sessionStorage.getItem('back_url'));
                    let li = list[list.length-1];
                    list.splice(length-1,1);
                    sessionStorage.setItem('back_url',JSON.stringify(list));
                    this.$router.push({name:li.url,query:{ id:li.id}})
                }else{
                    this.$router.push({name:'levelMenu3_project'})
                }
            },
            close_middle_dialog: function () {
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
                } else if (type == 6) {
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
                } else if (type == 17) {
                    this.dialog_btn_data.dialog_show = true;
                    this.dialog_btn_data.title = '上传活动照片';
                    this.dialog_btn_data.title2 = '上传活动照片';
                    this.dialog_btn_data.lineName = '上传活动照片';
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_type = type;
                } else if (type == 18) {
                    this.dialog_btn_data.dialog_show = true;
                    this.dialog_btn_data.title = '商务确认函';
                    this.dialog_btn_data.title2 = '商务确认函';
                    this.dialog_btn_data.lineName = '上传确认函';
                    this.dialog_btn_data.dialog_id = id;
                    this.dialog_btn_data.dialog_type = type;
                }
                else if (type == 19) {
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
                    console.log(this.project_id)
                }
            },
            // 展开合拢列表页
            show_detail: function () {
                let that = this;
                let show1 = that.isShow;
                if (show1.div1) {
                    show1.div1 = !show1.div1;
                    setTimeout(function () {
                        show1.div2 = !show1.div2;
                    }, 400)
                } else {
                    show1.div2 = !show1.div2;
                    setTimeout(function () {
                        show1.div1 = !show1.div1;
                    }, 400)
                }
            },
            // 审批
            chose_list: function (event) {
                let type = event.currentTarget.dataset.id;
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
        },
        mounted() {
            this.project_id = this.$route.query.id
        },
    }
</script>

<style lang="less">
    @import "index.less";
</style>