<template>
    <Drawer :closable="false" v-model="addSub_text" width="580px">
        <div class="dialog-addSubdivisions">
            <!--标题-->
            <div class="dialog-addSubdivisions-title">添加子部门</div>
            <div class="dialog-addSubdivisions-body">
                <!--部门信息-->
                <div class="dialog-addSubdivisions-message">部门信息</div>
                <div class="dialog-addSubdivisions-addName">
                    <!--信息列表-->
                    <div class="dialog-addSubdivisions-addName-left">
                        <!--部门名称-->
                        <div class="attend">
                            <div class="attend_name fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/><span>部门名称：</span>
                            </div>
                            <div class="attend_input fl">
                                <input type="text" placeholder="电商事业部"  class="inpName" style="vertical-align: baseline"/>
                            </div><div class="clear"></div>
                        </div>
                        <!--上级部门-->
                        <div class="attend">
                            <div class="attend_name fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/><span>上级部门：</span>
                            </div>
                            <div class="attend_input fl">
                                <!--<input type="text" placeholder="高端营销"  class="inpName" style="vertical-align: baseline"/>-->
                                <div @click="show_depart_chose" data-type="1"  style="line-height: 34px;cursor: pointer; text-align: left" :style="prev_name != null && prev_name != '' ? '':' color:#999999'" class="inpName">
                                    {{prev_name != null && prev_name != '' ? prev_name : '请选择上级部门'}}
                                </div>
                            </div><div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--按钮-->
            <div class="dialog-addSubdivisions-operate">
                <button class="saveButton" @click="save_data">保存</button>
                <button class="cancelButton" @click="quxiao">取消</button>
            </div>
            <Modal v-model="depart_chose_show.is_show" footer-hide="" class="add-dialog-middle-project" width="720" >
                <!--选择部门-->
                <choseDepart v-if="depart_chose_show.type === 1 || depart_chose_show.type === '1'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></choseDepart>
                <!--选择人员-->
                <selectPeople v-if="depart_chose_show.type === 2 || depart_chose_show.type === '2'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></selectPeople>
            </Modal>
        </div>
    </Drawer>
</template>

<script>
    import choseDepart from '@/dialog/dialogManagingPeople/chooseDepart'
    import selectPeople from '@/dialog/dialogManagingPeople/selectPersonnel'

    import {deepClone} from "../../assets/js/template";
    export default {
        data() {
            return {
                addSub_text: false,
                prev_name:'',
                depart_chose_show:{
                    is_show:false,
                    type:-1,
                    add_people:[]
                },
            }
        },
        methods:{
          sand_addSub:function(data) {
              this.$emit('dialog_addSub',data)
          },
            save_data:function () {
                this.addSub_text = false
            },
            quxiao:function () {
                this.addSub_text = false
            },
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
            }
        },
        components:{
            choseDepart:choseDepart,
            selectPeople:selectPeople
        },
        props:{
            addSub:Boolean,
            edit_dialog:{}
        },
        watch:{
            'addSub':{
                handler:function (val) {
                    if(val){
                        this.addSub_text = val;
                        this.sand_addSub(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "./addSubdivisions.less";
</style>