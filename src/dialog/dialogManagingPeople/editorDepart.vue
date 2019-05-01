<template>
    <Drawer :closable="false" v-model="setDeng" width="580px">
        <div class="dialog-editorDepart">
            <div class="dialog-editorDepart-title">设置等级</div>
            <div class="dialog-editorDepart-body">
                <div class="dialog-editorDepart-message">设置等级</div>
                <div class="dialog-editorDepart-addName">
                    <div class="dialog-editorDepart-addName-left">
                        <div class="attend">
                            <div class="attend_name">
                                <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                                <span>部门名称：</span>
                            </div>
                            <div class="attend_input">
                                <Input disabled placeholder="陈洁愉"  class="inpName" style="vertical-align: baseline"/>
                            </div>
                        </div>
                        <div class="attend">
                            <div class="attend_name">
                                <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                                <span>设置主管：</span>
                            </div>
                            <div class="attend_input">
                                <Input disabled placeholder="堂主"  class="inpName" style="vertical-align: baseline"/>
                            </div>
                        </div>
                        <div class="attend">
                            <div class="attend_name">
                                <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                                <span>是否是集团协调部（子公司业务关联）：</span>
                            </div>
                            <div class="attend_input">
                                关<input type="radio" id="close"  name="radio"  checked="checked" class="close"/>
                                <input type="radio" id="open"  name="radio"  checked="checked"/>开
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-editorDepart-operate">
                <button class="saveButton">保存</button>
                <button class="cancelButton">取消</button>
            </div>
        </div>
    </Drawer>
</template>

<script>
    export default {
        data() {
            return {
                setDeng: true
            }
        }
    }
</script>

<style lang="less">
    @import "./editorDepart.less";
</style>