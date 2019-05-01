<template>
<div class="attendanceSet">
    <!--考勤设置页面列表-->
    <div class="attendance-list">
        <ul class="attendance-list-ul">
            <router-link to="levelMenu4_kaoqinAttend">
                <li class="attendance-list-ul-li" data-id="0" @click="check_chose" :class="{active:0==current}">考勤组管理</li>
            </router-link>
            <router-link to="levelMenu4_banci">
                <li class="attendance-list-ul-li" data-id="1" @click="check_chose" :class="{active:1==current}">班次管理</li>
            </router-link>
            <router-link to="levelMenu4_jiaban">
                <li class="attendance-list-ul-li" data-id="2" @click="check_chose" :class="{active:2==current}">加班规则</li>
            </router-link>
            <router-link to="levelMenu4_buka">
                <li class="attendance-list-ul-li" data-id="3" @click="check_chose" :class="{active:3==current}">补卡规则</li>
            </router-link>
        </ul>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        name:'list',
        data(){
            return{
                current: 0
            }
        },
        methods:{
            check_chose: function (event) {
                this.current = event.target.dataset.id;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "list.less";
</style>