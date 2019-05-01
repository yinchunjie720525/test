<template>
    <div class="department-bg">
        <div class="department">
            <div class="department-title">部门管理</div>
            <div class="department-active">
                <span class="department-btn" @click="show_add_dialog" data-type="1">添加部门</span>
                <span class="department-btn">添加子公司</span>
                <span class="department-btn fr" @click="show_add_dialog" data-type="2">编辑选中组织({{chose_num}})</span>
                <span class="department-btn fr" @click="show_add_dialog" data-type="3">删除选中组织({{chose_num}})</span>
            </div>
            <!--列表-->
            <div class="department-list">
                <div class="department-list-title">
                    <div class="depart-tree-line depart-tree-line1 fl">部门名称</div>
                    <div class="depart-tree-line depart-tree-line2 fl">成员数</div>
                    <div class="depart-tree-line depart-tree-line3 fl">负责人</div>
                    <div class="depart-tree-line depart-tree-line4 fl">所属公司</div>
                    <div class="depart-tree-line depart-tree-line5 fl">部门成员对通讯录查看范围</div>
                    <div class="depart-tree-line depart-tree-line6 fl">编辑</div>
                    <div class="clear"></div>
                </div>
                <my-trees :list="list" v-on:thisData="get_edit_data"></my-trees>
            </div>
        </div>
        <!--删除弹窗-->
        <Modal class="del-list" v-model="del_modal" @on-ok="list_del" @on-cancel="cancel">
            <p slot="header">
                <img src="/image/bothIcon/icon-sigh.png" class="del-list-icon-sigh"/>
                <span class="del-list-sigh-text" style="padding: 18px auto">提示</span>
            </p>
            <p>
                确定删除该部门？（如果该部门有部门群，则部门群的聊天信息和文件都会删除）
            </p>
        </Modal>
        <!--显示：添加-->
        <addDialog :add_dialog="add_dialog" v-on:dialog_add="show_add"></addDialog>
        <!--修改-->
        <editDialog :edit_dialog="edit_dialog" v-on:dialog_edit="show_edit"></editDialog>
        <!--批量编辑-->
        <editListDialog :editList_dialog="editList_dialog" v-on:dialog_editList="show_editList"></editListDialog>
        <!--选择角色-->
    </div>
</template>

<script>
    import myTrees from '@/components/treeMenu/departTreeMenu'
    import addDialog from '@/dialog/department/add'
    import editDialog from '@/dialog/department/edit'
    import editListDialog from '@/dialog/department/editList'
    import {deepClone} from "../../../../assets/js/template";
    export default {
        name: "list",
        components: {
            myTrees,
            addDialog,
            editDialog,
            editListDialog
        },
        data() {
            return {
                // 添加
                add_dialog:false,
                // 修改
                edit_dialog:{
                    edit_data:{},
                    is_edit_dialog:false,
                    chose_list:[]
                },
                // 批量修改
                editList_dialog:{
                    edit_data:{},
                    is_edit_dialog:false,
                    chose_list:[]
                },
                // 删除
                del_modal: false,
                chose_num: 0,
                chose_list:[],
                list: [{
                    name: '三人禾集团',
                    personalNum: 20,
                    responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                    company: '三人禾集团',
                    power: '全员',
                   chose: false,
                    level: 0,
                    children: [{
                        name: '三人禾集团',
                        personalNum: 20,
                        responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                        company: '三人禾集团',
                        power: '全员',
                       chose: false,
                        level: 1,
                        children: [{
                            name: '三人禾集团',
                            personalNum: 20,
                            responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                            company: '三人禾集团',
                            power: '全员',
                           chose: false,
                            level: 2,
                            children: [{
                                name: '三人禾集团',
                                personalNum: 20,
                                responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                                company: '三人禾集团',
                                power: '全员',
                               chose: false,
                                level: 3,
                                children: [{
                                    name: '三人禾集团',
                                    personalNum: 20,
                                    responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                                    company: '三人禾集团',
                                    power: '全员',
                                   chose: false,
                                    level: 4,
                                    children:[]
                                }]
                            }]
                        }]
                    }]
                },{
                    name: '三人禾集团',
                    personalNum: 20,
                    responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                    company: '三人禾集团',
                    power: '全员',
                   chose: false,
                    level: 0,
                    children: [{
                        name: '三人禾集团',
                        personalNum: 20,
                        responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                        company: '三人禾集团',
                        power: '全员',
                       chose: false,
                        level: 1,
                        children: [{
                            name: '三人禾集团',
                            personalNum: 20,
                            responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                            company: '三人禾集团',
                            power: '全员',
                           chose: false,
                            level: 2,
                            children: [{
                                name: '三人禾集团',
                                personalNum: 20,
                                responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                                company: '三人禾集团',
                                power: '全员',
                               chose: false,
                                level: 3,
                                children: [{
                                    name: '三人禾集团',
                                    personalNum: 20,
                                    responsible: [{name:'姓名1',id:1},{name:'姓名2',id:2}],
                                    company: '三人禾集团',
                                    power: '全员',
                                   chose: false,
                                    level: 4,
                                    children:[]
                                }]
                            }]
                        }]
                    }]
                }]
            }
        },
        methods:{
            show_add_dialog:function(event){
                let type = event.currentTarget.dataset.type ;
                // 添加
                if(type === 1 || type === '1'){
                    this.add_dialog = true;
                }
                // 修改
                else if(type === 2|| type === '2'){
                    this.editList_dialog.is_edit_dialog = true;
                    this.editList_dialog.chose_list = deepClone(this.chose_list);
                }
                // 删除
                else if(type === 3|| type === '3'){
                    this.del_modal = true
                }
            },
            // 添加
            show_add:function(msg){
                this.add_dialog = msg;
            },
            // 修改
            get_edit_data:function(msg){
                console.log(msg);
                this.edit_dialog.edit_data = msg.edit_data;
                this.edit_dialog.is_edit_dialog = msg.eidt_show;
                console.log(this.edit_dialog)
            },
            show_edit:function(msg){
                this.edit_dialog = msg;
            },
            // 批量修改
            show_editList:function(msg){
                this.editList_dialog = msg;
            },
            // 递归选择
            chose_num_sum:function (list) {
                let that = this ;
                list.forEach((item) =>{
                    if(item.chose){
                        that.chose_num++;
                        that.chose_list.push(item)
                        // this.addDialog.chose_list.push(item);
                    }
                    if(item.children !=null && item.children!='' && item.children.length>0){
                        that.chose_num_sum(item.children);
                    }
                })
            }
            // 删除
            ,list_del :function() {
                // this.$Message.info('删除成功');
            },
            cancel () {
                // this.$Message.info('');
            }
        },
        watch:{
            'list':{
                handler: function(val) {
                    this.chose_num = 0;
                    this.chose_list=[];
                    this.chose_num_sum(val)
                },
                deep: true
            }
        },
        mounted(){
            this.chose_num_sum(this.list)
        }
    }
</script>

<style lang="less">
    @import "list.less";
    .del-list{
        .ivu-modal{

        }
        .ivu-modal-header{
            padding: 10px 16px 11px;
            background-color: #e7eaef;
            border-radius: 8px 8px 0px 0px;
            .del-list-sigh-text{
                font-size: 18px;
                color: #222222;
                font-weight: normal;
            }
            .del-list-icon-sigh{
                margin: 0 5px 0 0;
            }
        }
        .ivu-icon ivu-icon-ios-close{
            top: -5px;
        }
        .ivu-modal-body{
            color: #222222;
            font-size: 14px;
            text-align: center;
        }
        .ivu-modal-footer{
            border: 0;
            padding: 0px 18px 12px 18px;
            text-align: center;
            .ivu-btn{
                line-height: 14px;
                padding: 8px 22px;
                background-color: #ffffff;
                border-radius: 4px;
                border: solid 1px #bababa;
                color: #bababa;
                font-size: 14px;
            }
            .ivu-btn:hover{
                border: solid 1px #ff5f5f;
                color: #ff5f5f;
            }
        }
    }
</style>