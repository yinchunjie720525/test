<template>
    <div class="insideApproval">
        <div class="approvel">
            <!--头部-->
            <div class="insideApproval-title">
                <div class="insideApproval-title-but fl">内部审批流程</div>
                <div class="insideApproval-title-group fl" @click="newGroup = true"><img src="/image/approval/icon-new.png" class="insideApproval-title-group-img"/>新建分组</div>
                <div class="insideApproval-title-group fl"><img src="/image/approval/icon-rank.png" class="insideApproval-title-rank-img"/> 分组排序</div>
                <div class="insideApproval-title-newApproval fl"><img src="/image/approval/icon-addnew.png" class="insideApproval-title-newApproval-img"/>创建新审批</div>
                <div class="clear"></div>
            </div>
            <div class="insideApproval-content">
                <!--项目审批及内容-->
                <div class="insideApproval-content-reveal">
                    <div class="insideApproval-content-reveal-examine fl">项目审批(1)</div>
                    <div class="insideApproval-content-reveal-option fl">
                        <div class="insideApproval-content-reveal-option-editor">编辑
                            <div class="insideApproval-content-reveal-option-editor-select">
                                <ul class="insideApproval-content-reveal-option-editor-select-ul">
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="reName = true">重命名</li>
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="deleted">删除该组</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insideApproval-content-reveal-option-rank">排序</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="insideApproval-content-midder">
                    <div class="insideApproval-content-midder-examine fl">
                        <div class="midder-examine-evection fl"><img src="/image/approval/icon-chai.png" class="midder-examine-evection-img"/></div>
                        <div class="midder-examine-evectionDrection fl">
                            <p class="evectionDrection-chu">出差</p>
                            <p class="evectionDrection-shi">适用于外出申请，精确汇总</p>
                            <p class="evectionDrection-time">2019.02.20 12:59 更新</p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-range fl">
                        <div class="midder-range-line fl"></div>
                        <div class="midder-range-line-keRange fl">
                            <p class="midder-range-line-keRange-fan">可见范围</p>
                            <p class="midder-range-line-keRange-other">全部可见<span class="keRange-other-editor" @click="visualRange = true">编辑</span></p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-option fr">
                        <button class="midder-option-editor">编辑</button>
                        <button class="midder-option-stop">停用</button>
                        <button class="midder-option-remove" @click="removeTo = true">移动到</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--出勤休假及内容-->
                <div class="insideApproval-content-reveal">
                    <div class="insideApproval-content-reveal-examine fl">出勤休假(3)</div>
                    <div class="insideApproval-content-reveal-option fl">
                        <div class="insideApproval-content-reveal-option-editor">编辑
                            <div class="insideApproval-content-reveal-option-editor-select">
                                <ul class="insideApproval-content-reveal-option-editor-select-ul">
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="reName = true">重命名</li>
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="deleted">删除该组</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insideApproval-content-reveal-option-rank">排序</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="insideApproval-content-midder">
                    <div class="insideApproval-content-midder-examine fl">
                        <div class="midder-examine-evection-1 fl"><img src="/image/approval/icon-wai.png" class="midder-examine-evection-img"/></div>
                        <div class="midder-examine-evectionDrection fl">
                            <p class="evectionDrection-chu">外出</p>
                            <p class="evectionDrection-shi">适用于外出申请，精确汇总</p>
                            <p class="evectionDrection-time">2019.02.20 12:59 更新</p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-range fl">
                        <div class="midder-range-line fl"></div>
                        <div class="midder-range-line-keRange fl">
                            <p class="midder-range-line-keRange-fan">可见范围</p>
                            <p class="midder-range-line-keRange-other">企划中心；商学院;<span class="keRange-other-editor" @click="visualRange = true">编辑</span></p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-option fr">
                        <button class="midder-option-editor">编辑</button>
                        <button class="midder-option-stop">停用</button>
                        <button class="midder-option-remove" @click="removeTo = true">移动到</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="insideApproval-content-midder">
                    <div class="insideApproval-content-midder-examine fl">
                        <div class="midder-examine-evection-2 fl"><img src="/image/approval/icon-bu.png" class="midder-examine-evection-img"/></div>
                        <div class="midder-examine-evectionDrection fl">
                            <p class="evectionDrection-chu">补卡申请</p>
                            <p class="evectionDrection-shi">适用于外出申请，精确汇总</p>
                            <p class="evectionDrection-time">2019.02.20 12:59 更新</p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-range fl">
                        <div class="midder-range-line fl"></div>
                        <div class="midder-range-line-keRange fl">
                            <p class="midder-range-line-keRange-fan">可见范围</p>
                            <p class="midder-range-line-keRange-other">李三；张四；程五；等10人<span class="keRange-other-editor" @click="visualRange = true">编辑</span></p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-option fr">
                        <button class="midder-option-editor">编辑</button>
                        <button class="midder-option-stop">停用</button>
                        <button class="midder-option-remove" @click="removeTo = true">移动到</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="insideApproval-content-midder">
                    <div class="insideApproval-content-midder-examine fl">
                        <div class="midder-examine-evection-4 fl"><img src="/image/approval/icon-fukuan.png" class="midder-examine-evection-img"/></div>
                        <div class="midder-examine-evectionDrection fl">
                            <p class="evectionDrection-chu">付款申请</p>
                            <p class="evectionDrection-shi">适用于外出申请，精确汇总</p>
                            <p class="evectionDrection-time">2019.02.20 12:59 更新</p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-range fl">
                        <div class="midder-range-line fl"></div>
                        <div class="midder-range-line-keRange fl">
                            <p class="midder-range-line-keRange-fan">可见范围</p>
                            <p class="midder-range-line-keRange-other">商学院；大事业部；执行部;<span class="keRange-other-editor" @click="visualRange = true">编辑</span></p>
                        </div>
                    </div>
                    <div class="insideApproval-content-midder-option fr">
                        <button class="midder-option-editor">编辑</button>
                        <button class="midder-option-stop">停用</button>
                        <button class="midder-option-remove" @click="removeTo = true">移动到</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--人事-->
                <div class="insideApproval-content-reveal">
                    <div class="insideApproval-content-reveal-examine fl">人事(0)</div>
                    <div class="insideApproval-content-reveal-option fl">
                        <div class="insideApproval-content-reveal-option-editor">编辑
                            <div class="insideApproval-content-reveal-option-editor-select">
                                <ul class="insideApproval-content-reveal-option-editor-select-ul">
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="reName = true">重命名</li>
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="deleted">删除该组</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insideApproval-content-reveal-option-rank">排序</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--行政-->
                <div class="insideApproval-content-reveal distance-top">
                    <div class="insideApproval-content-reveal-examine fl">行政(0)</div>
                    <div class="insideApproval-content-reveal-option fl">
                        <div class="insideApproval-content-reveal-option-editor">编辑
                            <div class="insideApproval-content-reveal-option-editor-select editor-select">
                                <ul class="insideApproval-content-reveal-option-editor-select-ul">
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="reName = true">重命名</li>
                                    <li class="insideApproval-content-reveal-option-editor-select-ul-li" @click="deleted">删除该组</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insideApproval-content-reveal-option-rank">排序</div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <visualRange :visualRange="visualRange" v-on:dialog_visualRange="dialog_visualRange_show"></visualRange>
        <newGroup :newGroup="newGroup" v-on:dialog_newGroup="dialog_newGroup_show"></newGroup>
        <removeTo :removeTo="removeTo" v-on:dialog_removeTo="dialog_removeTo_show"></removeTo>
        <reName :reName="reName" v-on:dialog_reName="dialog_reName_show"></reName>
    </div>
</template>

<script>
    import visualRange from '@/dialog/internalReview/visualRange'
    import newGroup from '@/dialog/internalReview/newGroup'
    import removeTo from  '@/dialog/internalReview/remove'
    import reName from '@/dialog/internalReview/reName'
    export default {
        name:'list',
        data(){
            return{
                visualRange: false,
                newGroup: false,
                removeTo: false,
                reName: false
            }
        },
        methods:{
            // 可见范围弹窗
            dialog_visualRange_show:function (msg) {
                this.visualRange = msg;
            },
            // 移动到弹窗
            dialog_removeTo_show:function(msg){
                this.removeTo = msg;
            },
            // 重命名弹窗
            dialog_reName_show:function(msg){
                this.reName = msg;
            },
            // 新建分组弹窗
            dialog_newGroup_show:function(msg){
                this.newGroup = msg
            },
            // 删除
            deleted () {
                this.$Modal.confirm({
                    title: '您确认删除该组信息！',
                    onOk: () => {
                        this.$Message.info('信息已删除');
                    },
                    onCancel: () => {
                        this.$Message.info('信息删除失败');
                    }
                });
            }
        },
        components:{
            visualRange,
            newGroup,
            removeTo,
            reName
        }
    }
</script>

<style lang="less" scoped>
    @import "list.less";
</style>
<style lang="less">
    .ivu-modal-confirm-head {
        padding: 0 12px 0 0;
        text-align: left;
        .ivu-modal-confirm-head-title {
            font-weight: normal;
            width: 80%;
        }
    }
</style>

