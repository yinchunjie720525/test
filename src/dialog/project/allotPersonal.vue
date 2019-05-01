<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">分配商务人员</div>
        <div class="dialog-both-body">
            <div class="dialog-both-message">分配商务人员</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">该项目分配给：</span>
                    <div class="clear"></div>
                </div>
                <Select v-model="people_list_data" filterable not-found-text="没有相关人员信息">
                    <Option v-for="(item,index) in peopleList" :value="item.id" :key="index" :style="'background: url('+item.logo+') 16px 7px no-repeat;background-size:16px 16px;padding:7px 16px 7px 32px'">{{item.name}}</Option>
                </Select>
                <div class="clear"></div>
            </div>
        </div>
        <div class="dialog-both-active-btn">
            <button class="saveButton">保存</button>
            <button class="cancelButton" @click="cancel">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "allotPersonal",
        data(){
            return{
                peopleList:[{id:1,name:'李四',logo:'/image/bothIcon/icon-assembly.png'},{id:2,name:'赵五',logo:'/image/bothIcon/icon-assembly.png'}],
                people_list_data:''
            }
        },
        props:{
            dialog_btn_data:{

            }
        },
        methods:{
            cancel:function () {
                this.dialog_btn_data.dialog_show = false
            }
        }
    }
</script>

<style>
    @import "../bothCss.less";
</style>