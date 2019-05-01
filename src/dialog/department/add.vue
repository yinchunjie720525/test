<template>
    <Drawer class="dialog-left" :closable="false" v-model="value1" width="580px">
        <div class="dialog-addSubdivisions">
            <div class="dialog-setLevel-title">添加部门</div>
            <div class="dialog-setLevel-body">
                <div class="dialog-setLevel-message">部门信息</div>
                <div class="dialog-setLevel-addName">
                    <div class="dialog-setLevel-addName-left">
                        <div class="dialog-add-input">
                            <img src="/image/hr/icon-star.png" class="imgIcon fl"/>
                            <span class="fl">部门名称：</span>
                            <input placeholder="请输入部门名称" :value="name"  @input="inputName" class="inpName fl" style="vertical-align: baseline"/>
                            <div class="clear"></div>
                        </div>
                        <div class="dialog-add-input">
                            <img src="/image/hr/icon-star.png" class="imgIcon fl"/>
                            <span class="fl">上级部门：</span>
                            <div @click="show_depart_chose"  style="line-height: 34px" :style="prev_name != null && prev_name != '' ? '':' color:#999999'" class="inpName fl">{{prev_name != null && prev_name != '' ? prev_name : '请选择上级部门'}}</div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-setLevel-operate">
                <button class="saveButton" @click="save_data" data-type='1' >保存</button>
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
        name: "add",
        components:{
            choseDepart
        },
        props:{
            add_dialog:Boolean,
            chose_list:Array ,
        },
        data() {
            return {
                value1: false,
                name:'',
                value9: '',
                model1: '',
                prev_name:'',
                depart_chose_show:{
                    is_show:false,
                    depart_data:{}
                }
            }
        },
        methods:{
            // 获得上级部门
            get_prev_name:function(msg){
                this.prev_name = deepClone(msg)[0].name;
            },
            depart_chose_back_fun:function(data){
                this.depart_chose_show = data;
            },
            inputName:function (event) {
                this.name = event.srcElement.value;
                console.log(this.name)
            },
            save_data:function () {
                this.value1 = false
            },
            sendShow: function (_data) {
                this.$emit('dialog_add', _data);
            },
            show_depart_chose:function () {
                this.depart_chose_show.is_show = true
            }
        },
        mounted(){

        },
        watch:{
            'chose_list':{
                handler: function(val) {
                   if(val.length == 1){
                      this.prev_name = val[0].name;
                   }
                }
            },
            'add_dialog':{
                handler: function(val) {
                    if(val){
                        this.value1 = val;
                        this.sendShow(!val)
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "add.less";
</style>