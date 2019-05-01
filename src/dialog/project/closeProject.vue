<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">关闭项目</div>
        <div class="dialog-both-body">
            <div class="dialog-both-message">关闭原因备注</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">关闭原因备注：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="" placeholder="请说明关闭的缘由"/>
                <div class="clear"></div>
            </div>
        </div>
        <div class="dialog-both-active-btn">
            <button class="saveButton" style="background: #f65252">确认关闭</button>
            <button class="cancelButton" @click="cancel">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "closeProject",
        props: {
            dialog_btn_data: {}
        },
        methods: {
            cancel:function () {
                this.dialog_btn_data.dialog_show = false;
            },
        },
    }
</script>

<style scoped>
    @import "../bothCss.less";
</style>