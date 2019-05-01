<template>
    <div class="dialog-newRole-bg">
        <div class="dialog-newRole">
            <div class="dialog-newRole-title">{{role_show.title}}</div>
            <!--新增角色-->
            <div class="dialog-newRole-body">
                <div class="dialog-newRole-message">角色信息</div>
                <div class="dialog-newRole-addName">
                    <div class="dialog-newRole-addName-left">
                        <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                        角色组名称：<input type="text" placeholder="电商事业部" class="inpNamed"/>
                        <br>
                        <img src="/image/bothIcon/icon-assembly.png" class="imgIcon1" />
                        分组到：
                        <Select style="width:279px" placeholder="请选择分组">
                            <Option v-for="item in duty" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div class="dialog-newRole-operate">
                <button class="saveButton">保存</button>
                <button class="cancelButton">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                duty: [
                    {
                        value: 'zhiwu',
                        label: '职务'
                    },
                    {
                        value: 'gangwei',
                        label: '岗位'
                    }
                ]
            }
        },
        methods:{
        },
        props:{
            role_show:{}
        },
    }
</script>

<style lang="less">
    @import "./newRole.less";
</style>