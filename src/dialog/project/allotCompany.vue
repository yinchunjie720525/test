<template>
    <div class="dialog-both-box">
            <div class="dialog-both-title">分配公司</div>
            <div class="dialog-both-body">
                <div class="dialog-both-message">分配公司</div>
                <div class="dialog-both-li">
                    <div class="dialog-both-li-left fl">
                        <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                        <span class="">该项目分配给：</span>
                        <div class="clear"></div>
                    </div>
                    <Select v-model="company_list_data" filterable not-found-text="没有相关公司信息">
                        <Option v-for="(item,index) in companyList" :value="item.id" :key="index" :style="'background: url('+item.logo+') 16px 7px no-repeat;background-size:16px 16px;padding:7px 16px 7px 32px'">{{item.name}}</Option>
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
        name: "allotCompany",
        data(){
          return{
              companyList:[{id:1,name:'三人禾集团',logo:'/image/bothIcon/icon-assembly.png'},{id:2,name:'杭州始秦咨询有限公司信息技术科技',logo:'/image/bothIcon/icon-assembly.png'}],
              company_list_data:''
          }
        },
        props:{
            dialog_btn_data:{}
        },
        methods:{
            cancel:function () {
                this.dialog_btn_data.dialog_show = false
            }
        }
    }
</script>

<style lang="less">
    @import "../bothCss.less";
</style>