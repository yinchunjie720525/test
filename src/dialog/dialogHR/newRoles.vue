<template>
    <div>
        <Drawer :closable="false" width="580" v-model="newRoles_text" class="dialog-newRoles-bg">
            <div class="dialog-newRoles">
                <div class="dialog-newRoles-title">新增角色组</div>
                <div class="dialog-newRoles-body">
                    <div class="dialog-newRoles-message">角色组信息</div>
                    <div class="dialog-newRoles-addName">
                        <div class="dialog-newRoles-addName-left">
                            <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                            角色组名称：<input type="text" placeholder="副总监" class="inpNamed"/>
                        </div>
                    </div>
                </div>
                <div class="dialog-newRoles-operate">
                    <button class="saveButton">保存</button>
                    <button class="cancelButton">取消</button>
                </div>
            </div>
        </Drawer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newRoles_text: false,
            }
        },
        methods:{
            send_newRoles:function (data) {
                this.$emit('dialog_newRoles',data)
            }
        },
        props:{
            newRoles:Boolean
        },
        watch:{
            'newRoles':{
                handler:function (val) {
                    if (val){
                        this.newRoles_text = val;
                        this.send_newRoles(!val);
                    }
                }
            }
        }
    }
</script>

<style  lang="less">
    @import "./newRoles.less";
</style>

