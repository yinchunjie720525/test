<template>
    <Drawer class="dialog-left dialog-eidt" :closable="false" v-model="edit_dialog.is_edit_dialog" width="580px">
        <div class="dialog-addSubdivisions">
            <div class="dialog-setLevel-title">编辑部门</div>
            <div class="dialog-setLevel-body">
                <div class="dialog-setLevel-message">部门信息</div>
                <div class="dialog-setLevel-addName">
                    <div class="dialog-setLevel-addName-left">
                        <div class="dialog-add-input">
                            <div class="dialog-add-input-left">
                                <img src="/image/hr/icon-star.png" class="imgIcon"/>
                                <span class="">部门名称：</span>
                            </div>
                            <input placeholder="请输入部门名称" :value="edit_dialog.edit_data.name"  @input="inputName" class="inpName fl" style="vertical-align: baseline"/>
                            <div class="clear"></div>
                        </div>
                        <div class="dialog-add-input">
                            <div class="dialog-add-input-left">
                                <img src="/image/hr/icon-star.png" class="imgIcon"/>
                                <span class="">上级部门：</span>
                            </div>
                            <div @click="show_depart_chose" data-type="1"  style="line-height: 34px;cursor: pointer" :style="prev_name != null && prev_name != '' ? '':' color:#999999'" class="inpName fl">
                                {{prev_name != null && prev_name != '' ? prev_name : '请选择上级部门'}}
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="dialog-add-input">
                            <div class="dialog-add-input-left">
                                <span class="">设置主管：</span>
                            </div>
                            <div @click="show_depart_chose" data-type="2" style="line-height: 34px;cursor: pointer;overflow: auto" :style="edit_dialog.edit_data.responsible != null && edit_dialog.edit_data.responsible != '' ? '':' color:#999999'" class="inpName fl">
                                <span class="responsible-li" v-for="(item,index) in edit_dialog.edit_data.responsible" :key="index">{{item.name}}</span>
                                {{edit_dialog.edit_data.responsible != null && edit_dialog.edit_data.responsible != '' ? '': '请选择主管'}}
                            </div>
                            <div class="clear"></div>
                        </div>
                        <!--<div class="dialog-add-input">-->
                            <!--<div class="dialog-add-input-left">-->
                                <!--<img src="/image/hr/icon-star.png" style="opacity: 0" class="imgIcon"/>-->
                                <!--<span>设置角色：</span>-->
                            <!--</div>-->
                            <!--<div class="inpName fl" style="vertical-align: baseline">-->
                                <!--<span>开发</span>-->
                                <!--<span>项目管理</span>-->
                            <!--</div>-->
                            <!--<div class="clear"></div>-->
                        <!--</div>-->
                        <div class="dialog-add-input">
                            <div class="dialog-add-input-left">
                                <div><img src="/image/hr/icon-star.png" class="imgIcon"/>是否是集团协调部</div>
                                <div>（子公司业务关联）:</div>
                            </div>

                            <RadioGroup v-model="animal">
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-setLevel-operate">
                <button class="saveButton" @click="save_data">保存</button>
                <button class="cancelButton" @click="save_data">取消</button>
            </div>
        </div>
        <Modal v-model="depart_chose_show.is_show" footer-hide="" class="add-dialog-middle-project" width="720" >
            <!--选择部门-->
            <choseDepart v-if="depart_chose_show.type === 1 || depart_chose_show.type === '1'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></choseDepart>
            <!--选择人员-->
            <selectPeople v-if="depart_chose_show.type === 2 || depart_chose_show.type === '2'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></selectPeople>
        </Modal>
    </Drawer>
</template>

<script>
    import choseDepart from '@/dialog/dialogManagingPeople/chooseDepart'
    import selectPeople from '@/dialog/dialogManagingPeople/selectPersonnel'

    import {deepClone} from "../../assets/js/template";
    export default {
        name: "edit",
        props:{
            edit_dialog:{}
        },
        components:{
            choseDepart:choseDepart,
            selectPeople:selectPeople
        },
        data() {
            return {
                value1: false,
                animal:'否',
                edit_data:{},
                prev_name:'',
                leader:'',
                depart_chose_show:{
                    is_show:false,
                    type:-1,
                    add_people:[]
                }
            }
        },
        methods:{
            show_depart_chose:function (event) {
                let type = event.currentTarget.dataset.type;
                this.depart_chose_show.is_show = true;
                this.depart_chose_show.type = type;
                // 部门选择
                if(type === 1 || type === '1'){
                    console.log('')
                }
                else if( type === 2 || type ==='2'){
                    this.depart_chose_show.chose_people = deepClone(this.edit_dialog.edit_data.responsible);
                    console.log(this.depart_chose_show.chose_people)
                }
            },
            get_prev_name:function(msg){
                // 部门选择
                let type = this.depart_chose_show.type;
                if(type === 1 || type === '1'){
                    this.prev_name = deepClone(msg)[0].name;
                }
                else if( type === 2 || type ==='2'){
                    this.edit_dialog.edit_data.responsible= deepClone(msg);
                }
            },
            inputName:function (event) {
                this.name = event.srcElement.value;
            },
            save_data:function () {
                this.edit_dialog.is_edit_dialog = false
            },
            sendShow: function (_data) {
                this.$emit('dialog_edit', _data);
            },
        },
        mounted(){

        },
    }
</script>

<style lang="less">
    @import "edit.less";
</style>