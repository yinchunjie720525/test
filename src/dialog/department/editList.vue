<template>
    <Drawer class="dialog-left dialog-eidtList" :closable="false" v-model="editList_dialog.is_edit_dialog" width="580px">
        <div class="dialog-addSubdivisions">
            <div class="dialog-setLevel-title">批量编辑部门</div>
            <div class="dialog-setLevel-body">
                <div class="dialog-setLevel-message">已选择部门 {{editList_dialog.chose_list.length}}：</div>
                <div class="dialog-setLevel-addName">
                    <template v-for="(item,index) in editList_dialog.chose_list">
                        <span :key="index" class="dialog-chose-span">{{item.name}}</span>
                    </template>
                    <div class="clear"></div>
                </div>
                <div class="dialog-setLevel-message">基础信息：</div>
                <div class="dialog-setLevel-addName">
                    <div class="dialog-add-input">
                        <img src="/image/hr/icon-star.png" class="imgIcon fl"/>
                        <span class="fl">上级部门：</span>
                        <div @click="show_depart_chose"  style="line-height: 34px;text-align: left" :style="prev_name != null && prev_name != '' ? '':' color:#999999'" class="inpName fl">{{prev_name != null && prev_name != '' ? prev_name : '请选择上级部门'}}</div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
            <div class="dialog-setLevel-operate">
                <button class="saveButton" @click="save_data" data-type="1">保存</button>
                <button class="cancelButton" @click="save_data" data-type="0">取消</button>
            </div>
        </div>
        <Modal v-model="depart_chose_show.is_show" footer-hide="" class="add-dialog-middle-project" width="656" >
            <!--添加部门-->
            <choseDepart :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></choseDepart>
        </Modal>
    </Drawer>
</template>

<script>
    import choseDepart from '@/dialog/dialogManagingPeople/chooseDepart'
    import {deepClone} from "../../assets/js/template";
    export default {
        name: "editList",
        props:{
            editList_dialog:{},
        },
        components:{
            choseDepart
        },
        data() {
            return {
                value1: false,
                name:'',
                value9: '',
                model1: '',
                prev_name:'',
                depart_chose_show:{
                    is_show:false
                }
            }
        },
        methods:{
            show_depart_chose:function () {
                this.depart_chose_show.is_show = true
            },
            get_prev_name:function(msg){
                this.prev_name = deepClone(msg)[0].name;
            },
            inputName:function (event) {
                this.name = event.srcElement.value;
                console.log(this.name)
            },
            save_data:function () {
                this.value1 = false
            },
            sendShow: function (_data) {
                this.$emit('dialog_editList', _data);
            },
        },
    }
</script>

<style lang="less">
    @import "editList.less";
</style>