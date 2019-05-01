<template>
    <div class="externalCon">
        <div class="externalCon-left fl">
            <div class="externalCon-left-search">
                <input type="text" value="搜索..." class="inp"/>
                <img src="/image/bothIcon/icon-search.png" class="img-search"/>
            </div>
            <div class="externalCon-left-list">
                <template>
                    <Tree class="tissueChange" :data="list" show-checkbox></Tree>
                </template>
            </div>
        </div>
        <div class="externalCon-right fr">
            <div class="externalCon-right-table">
                <div class="externalCon-right-table-title">外部联系人</div>
                <div class="externalCon-right-table-handle">
                    <button class="add" @click="show_people_member" data-type="1">添加外部联系人</button>
                    <button class="option">批量导出/导入/修改</button>
                    <button class="deleted" @click="del_modal = true">批量删除</button>
                </div>
                <div class="externalCon-right-table-content">
                    <Table :columns="flat" :data="data2" ref="selection"  size="small" style="width: 100%">
                        <template slot-scope="{row, index }" slot="options">
                            <div style="color:#fff;background: #56b1fc;border-radius: 4px;display: inline-block;padding: 5px;margin-right: 10px" @click="show_editor_dialog(index)">编辑</div>
                            <div style="color:#fff;background: #ed4014;border-radius: 4px;display: inline-block;padding: 5px" @click="show_del_dialog(index)">删除</div>
                            <div class="clear"></div>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <!--删除弹窗-->
        <Modal class="del-list" v-model="del_modal" @on-ok="list_del" @on-cancel="cancel">
            <p slot="header">
                <img src="/image/bothIcon/icon-sigh.png" class="del-list-icon-sigh"/>
                <span class="del-list-sigh-text">提示</span>
            </p>
            <p>确定删除该部门？（如果该部门有部门群，则部门群的聊天信息和文件都会删除）</p>
        </Modal>
        <Drawer  v-model="addExternal_show.is_show" width="580px">
            <!--外部联系人添加 & 详情-->
            <addExternal :addExternal_show="addExternal_show" v-on:dialog_addExternal_show="addExternal_show"></addExternal>
        </Drawer>
    </div>
</template>

<script>
    import addExternal from '@/dialog/externalContact/add'

    import {deepClone} from "../../../../assets/js/template";
    export default {
        name: "list",
        data(){
            return{
                del_modal: false,
                list: [
                    {
                        title: '类型',
                        expand: true,
                        children: [
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },

                        ]
                    }, {
                        title: '类型',
                        expand: true,
                        children: [
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },

                        ]
                    }, {
                        title: '类型',
                        expand: true,
                        children: [
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },
                            {
                                title: '客户',
                                expand: true,
                            },

                        ]
                    }
                ],
                flat: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '电话',
                        key: 'phoned'
                    },
                    {
                        title: '公司',
                        key: 'company'
                    },
                    {
                        title: '负责人',
                        key: 'leader'
                    },
                    {
                        title: '类型',
                        key: 'type'
                    },
                    {
                        title: '操作',
                        key: 'edit',
                        slot: 'options'
                    }
                ],
                data2: [
                    {
                        id:0,
                        name: '程嵩',
                        phoned: '13566375655',
                        company:'公司',
                        leader:'程啊',
                        address: '编辑',
                        type:'个人商户'
                    },
                ],
                addExternal_dialog:{},
                addExternal_show:{
                    is_show: false,
                    type:1,
                    title:'',
                    addExternal_data:[]
                },
            }
        },
        methods: {
            dialog_addExternal_show:function (msg) {
                this.addExternal_show = msg;
            },
            // 外部联系人详情
            show_people_member:function(event){
                let type =  event.currentTarget.dataset.type;
                console.log(type);
                console.log(event);
                // 添加外部联系人
                if (type=== 1||type ==='1'){
                    let data = { named:'',phoned:'',company:'',leader:'',type:'',edit:''};
                    this.addExternal_show.addExternal_dialog=deepClone(data);
                    this.addExternal_show.title = '添加外部联系人';
                    this.addExternal_show.type = type;
                    this.addExternal_show.is_show = true;
                    console.log(type);
                }
            },
            // 外部联系人详情
            show_editor_dialog:function(index){
                let data =  deepClone(this.data2[index]);
                this.addExternal_show.type = 2;
                this.addExternal_show.addExternal_dialog = deepClone(data);
                this.addExternal_show.title = '外部联系人详情'
                this.addExternal_show.is_show = true;
                console.log(data);
            },
            // 列表内容删除
            show_del_dialog:function(index){
                this.data2.splice(index,1);
            },
            OnSelect:function (data) {
                console.log(data)
            },
            // 删除
            list_del :function() {
                // this.$Message.info('删除成功');
            },
            cancel () {
                // this.$Message.info('');
            }
        },
        components:{
            addExternal:addExternal
        }
    }
</script>

<style lang="less">
    @import "list.less";
    .del-list{
        text-align: center;
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