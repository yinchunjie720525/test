<template>
    <div class="afficheDetail">
        <!--头部-->
        <div class="allAffiche-top">
            <!--返回按钮-->
            <div class="allAffiche-top-reverse fl">
                <div class="fanHui">返回</div>
            </div>
            <!--标题-->
            <div class="allAffiche-top-title fl">公告</div>
            <!--发公告-->
            <div class="allAffiche-top-but fl">
                <router-link to="levelMenu4_afficheIssue">
                    <div class="issue-affiche fr">发公告</div>
                </router-link>
                <router-link to="levelMenu4_newAffiche">
                    <div class="employee-affiche fr">新员工欢迎公告</div>
                </router-link>
            </div>
            <div class="clear"></div>
        </div>
        <!--公告列表-->
        <div class="allAffiche-pictures">
            <div class="recentPictures fl">最近更新</div>
            <div class="historyPictures fr">全部历史更新</div>
            <div class="clear"></div>
            <div class="line"></div>
            <div class="allAffiche-pictures-list">
                <ul class="pictures-list-ul">
                    <li class="pictures-list-li">公告已读未读导出明细的报表更新了，导出内容更完整 —— 2019.1.10更新
                        <span><img src="/image/divisional/icon-close.png" class="list-li fr" @click="deteledList = true"/></span>
                    </li>
                    <li class="pictures-list-li">【发公告】现在公告发送部门入职的新员工可以查看历史公告了——6.18更新
                        <span><img src="/image/divisional/icon-close.png" class="list-li fr" @click="deteledList = true"/></span>
                    </li>
                    <li class="pictures-list-li">【未读DING】更新了公告的未读DING提醒，现在支持应用内、短信、电话DING提醒——6.18更新
                        <span><img src="/image/divisional/icon-close.png" class="list-li fr" @click="deteledList = true"/></span>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
        </div>
        <!--左边导航-->
        <div class="newAffiche fl">
            <div class="ewAffiche-classify">
                <!--新建分类-->
                <div class="classify-but" @click="newAffiche=true"><img src="/image/divisional/icon-add.png" class="classify-but-img"/>新建分类</div>
                <div class="newAffiche-classify-list">
                    <div class="classify-but but-all" data-id="0" @click="list_chose" :class="{active: 0==current}">所有
                        <img src="/image/divisional/icon-to.png" class="but-img picture fr" @click.stop="select_show"/>
                        <div class="clear"></div>
                        <!--操作-->
                        <div class="newAffiche-classify-option" v-show="select_change">
                            <ul class="option-editor-select-ul">
                                <li class="option-editor-select-ul-li" @click.stop="newAffiche=true">重命名</li>
                                <!--<li class="option-editor-select-ul-li">上移</li>-->
                                <!--<li class="option-editor-select-ul-li">下移</li>-->
                                <li class="option-editor-select-ul-li" @click.stop="deleted">删除该组</li>
                            </ul>
                        </div>
                    </div>
                    <div class="classify-but but-all" data-id="1" @click="list_chose" :class="{active: 1==current}">清明放假通知
                        <img src="/image/divisional/icon-to.png" class="but-img picture fr" @click.stop="select_showed"/>
                        <div class="clear"></div>
                        <!--操作-->
                        <div class="newAffiche-classify-option" v-show="select_changed">
                            <ul class="option-editor-select-ul">
                                <li class="option-editor-select-ul-li" @click.stop="newAffiche=true">重命名</li>
                                <!--<li class="option-editor-select-ul-li">上移</li>-->
                                <!--<li class="option-editor-select-ul-li">下移</li>-->
                                <li class="option-editor-select-ul-li" @click.stop="deleted">删除该组</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--表格信息-->
        <div class="newAffiche-classify-table fr" v-if="0==current">
            <table>
                <tr class="classify-table-tr tr-bg">
                    <td class="classify-table-td td-title">标题</td>
                    <td class="classify-table-td">状态</td>
                    <td class="classify-table-td">时间</td>
                    <td class="classify-table-td td-option">操作</td>
                </tr>
                <tr class="classify-table-tr">
                    <td class="classify-table-td td-title">
                        <p class="td-title-midder">2019年清明节放假通知</p>
                        <p class="td-title-name">任黎新</p>
                    </td>
                    <td class="classify-table-td">
                        <p class="td-title-name">共6人</p>
                        <p class="table-td-count" @click="unreadPeople = true">未读5人</p>
                    </td>
                    <td class="classify-table-td table-td-color">2019年03月30日 16:53</td>
                    <td class="classify-table-td td-option">
                        <router-link to="levelMenu4_editorAffiche">
                            <span class="td-option-span">编辑后再发送</span>
                        </router-link>
                        <Button class="td-option-span" @click="confirm">设为置顶</Button>
                    </td>
                </tr>
            </table>
        </div>
        <!--表格信息-->
        <div class="newAffiche-classify-table fr" v-if="1==current">
            <table>
                <tr class="classify-table-tr tr-bg">
                    <td class="classify-table-td td-title">标题</td>
                    <td class="classify-table-td">状态</td>
                    <td class="classify-table-td">时间</td>
                    <td class="classify-table-td td-option">操作</td>
                </tr>
                <tr class="classify-table-tr">
                    <td class="classify-table-td td-title">
                        <p class="td-title-midder">2019年清明节放假通知</p>
                        <p class="td-title-name">任黎新</p>
                    </td>
                    <td class="classify-table-td">
                        <p class="td-title-name">共6人</p>
                        <p class="table-td-count employ" @click="unreadPeople = true">全部已读</p>
                    </td>
                    <td class="classify-table-td table-td-color">2019年03月30日 16:53</td>
                    <td class="classify-table-td td-option">
                        <router-link to="levelMenu4_editorAffiche">
                            <span class="td-option-span">编辑后再发送</span>
                        </router-link>
                        <Button class="td-option-span" @click="confirm">设为置顶</Button>
                    </td>
                </tr>
            </table>
        </div>
        <!--分页-->
        <Page :total="10" show-elevator class="newPage"/><!--:total="10"分页总数  show-elevator跳转至多少页-->
        <newAffiche :newAffiche="newAffiche" v-on:dialog_newAffiche="dialog_newAffiche_show"></newAffiche><!--分类名-->
        <deteledList :deteledList="deteledList" v-on:dialog_deteledList="dialog_deteledList_show"></deteledList><!--删除弹窗-->
        <unreadPeople :unreadPeople="unreadPeople" v-on:dialog_unreadPeople="dialog_unreadPeople_show"></unreadPeople><!--未读已读-->
    </div>
</template>

<script>
    import newAffiche from '@/dialog/affiche/new'
    import deteledList from '@/dialog/affiche/delete'
    import unreadPeople from '@/dialog/affiche/unread'
    export default {
        name: 'list',
        data(){
            return {
                newAffiche:false,
                current:0,
                colse_show:true,
                editor: false,
                deteledList: false,
                unreadPeople: false,
                select_change: false,
                select_changed: false
            }
        },
        methods:{
            // 左导航切换
            list_chose:function (event) {
                this.current = event.target.dataset.id;
            },
            // 新建分类弹窗AND重命名
            dialog_newAffiche_show:function (msg) {
                this.newAffiche = msg;
            },
            // 置顶弹窗
            confirm () {
                this.$Modal.confirm({
                    title: '置顶后，该公告会出现在手机钉钉工作页面顶部，确认置顶该条公告吗？',
                    onOk: () => {
                        this.$Message.info('设置置顶成功');
                    },
                    onCancel: () => {
                        this.$Message.info('设置置顶失败');
                    }
                });
            },
            // 删除
            deleted () {
                this.$Modal.confirm({
                    title: '您确认删除该组！',
                    onOk: () => {
                        this.$Message.info('删除成功');
                    },
                    onCancel: () => {
                        this.$Message.info('取消删除');
                    }
                });
            },
            // 删除弹窗
            dialog_deteledList_show:function (msg) {
                this.deteledList = msg;
            },
            // 未读已读
            dialog_unreadPeople_show:function (msg) {
                this.unreadPeople = msg;
            },
            // 删除、重命名、上移、下移
            select_show:function () {
                this.select_change= !this.select_change;
            },
            select_showed:function () {
                this.select_changed= !this.select_changed;
            }
        },
        components:{
            newAffiche,
            deteledList,
            unreadPeople
        }

    }
</script>

<style lang="less" scoped>
    @import "afficheDetail.less";
</style>