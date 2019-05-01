<template>
    <Drawer :closable="false" v-model="newLevels_text" width="580px">
        <div class="dialog-newLevels">
            <div class="dialog-newLevels-title">新建等级组</div>
            <div class="dialog-newLevels-body">
                <div class="dialog-newLevels-message">新建等级</div>
                <div class="dialog-newLevels-addName">
                    <div class="dialog-newLevels-addName-left">
                        <div class="attend">
                            <div class="attend_name fl">当前等级名字：</div>
                            <div class="attend_input fl">
                                <input type="text" disabled placeholder="堂主"  class="inpNamed"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="attend_name fl">更改后等级名字：</div>
                            <div class="attend_input fl">
                                <input type="text" placeholder="堂主"  class="inpNamed"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="attend_name fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>等级图标编辑：</span>
                            </div>
                            <div class="attend_input fl">
                                <Upload action="//jsonplaceholder.typicode.com/posts/">
                                    <Button icon="ios-cloud-upload-outline" class="upPicture">上传图片</Button>
                                </Upload>
                                <div class="clear"></div>
                                <div class="again-avatar">
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="upImg">
                            <div class="upImg-right">
                                <div class="clear"></div>
                                <div class="again-avatar">
                                    <div class="again"></div>
                                    <div class="avatar">
                                        <img src="/image/bothIcon/icon-assembly.png" class="avatarImg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-newLevels-operate">
                <button class="saveButton" @click="save_data">保存</button>
                <button class="cancelButton" @click="quxiao_data">取消</button>
            </div>
        </div>
    </Drawer>
</template>

<script>
    export default {
        data() {
            return {
                newLevels_text: false,
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
                ]
            }
        },
        methods:{
            send_newLevels:function (data) {
                this.$emit('dialog_newLevels',data)
            },
            save_data:function () {
                this.newLevels_text = false
            },
            quxiao_data:function () {
                this.newLevels_text = false
            }
        },
        props:{
            newLevels: Boolean
        },
        watch:{
            'newLevels':{
                handler:function (val) {
                    if (val){
                        this.newLevels_text = val;
                        this.send_newLevels(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "./add.less";
    .upPicture{
        background-color: #4898fa;
        border: solid 1px #418bfa;
        color: #fff
    }
</style>