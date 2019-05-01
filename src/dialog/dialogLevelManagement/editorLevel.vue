<template>
    <Drawer :closable="false" v-model="value1" width="580px">
        <div class="dialog-editorLevel">
            <div class="dialog-editorLevel-title">编辑等级</div>
            <div class="dialog-editorLevel-body">
                <div class="dialog-editorLevel-message">编辑等级</div>
                <div class="dialog-editorLevel-addName">
                    <div class="dialog-editorLevel-addName-left">
                        当前等级名字：<Input v-model="value9" disabled placeholder="堂主"  class="inpName" style="vertical-align: baseline"/>
                        <br>
                        更改后等级名字：<input placeholder="堂主" class="inpNamed"/>
                        <br>
                        <div class="upImg">
                            <div class="upImg-left">
                                <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                                等级图标编辑：
                            </div>
                            <div class="upImg-right">
                                <Upload action="//jsonplaceholder.typicode.com/posts/">
                                    <Button icon="ios-cloud-upload-outline" style="background-color: #4898fa; border: solid 1px #418bfa; color: #fff">上传图片</Button>
                                </Upload>
                                <div class="clear"></div>
                                <div class="again-avatar">
                                    <div class="again">
                                    </div>
                                    <div class="avatar">
                                        <img src="/image/bothIcon/icon-assembly.png" class="avatarImg"/>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="dialog-editorLevel-operate">
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
                value1: true,
                value9: '',
                duty: [
                    {
                        value: 'zhukong',
                        label: '主控'
                    },
                    {
                        value: 'fuzhukong',
                        label: '副主控'
                    },
                    {
                        value: 'tangzhu',
                        label: '堂主'
                    },
                    {
                        value: 'futangzhu',
                        label: '副堂主'
                    }
                ],
                model1: ''
            }
        }
    }
</script>

<style lang="less">
    @import "./editorLevel.less";
</style>