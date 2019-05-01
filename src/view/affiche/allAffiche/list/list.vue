<template>
    <!--所有公告-->
    <div class="allAffiche">
        <router-view></router-view>
    </div>
</template>

<script>

 export default {
     name: 'list',
     data(){
         return {

         }
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
    .ivu-modal-confirm-head-title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 12px;
        font-size: 16px;
        color: #17233d;
    }
    .ivu-page-item-active {
        border-color: #2d8cf0;
        background: #2d8cf0;
        color: #fff;
    }
    .ivu-page-item-active a, .ivu-page-item-active:hover a {
        color: #fff;
    }
</style>