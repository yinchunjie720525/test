<template>
    <Drawer :closable="false" v-model="setLevel_text" width="580px">
        <div class="dialog-setLevel">
            <div class="dialog-setLevel-title">设置等级</div>
            <div class="dialog-setLevel-body">
                <div class="dialog-setLevel-message">设置等级</div>
                <div class="dialog-setLevel-addName">
                    <div class="dialog-setLevel-addName-left">
                        <div class="attend">
                            <div class="attend_name fl">名字：</div>
                            <div class="attend_input fl">
                                <input type="text" disabled placeholder="陈洁愉"  class="inpName"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="attend_name fl">当前等级：</div>
                            <div class="attend_input fl">
                                <input type="text" disabled placeholder="堂主"  class="inpName"/>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="attend_name fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>设置等级：</span>
                            </div>
                            <div class="attend_input fl">
                                <Select style="width:279px; text-align: left" placeholder="请重新设置等级">
                                    <Option v-for="item in duty" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                            <div class="clear"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="dialog-setLevel-operate">
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
                setLevel_text: false,
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
            send_setLevel:function (data) {
                this.$emit('dialog_setLevel',data)
            },
            save_data:function () {
                this.setLevel_text = false
            },
            quxiao_data:function () {
                this.setLevel_text = false
            }
        },
        props:{
            setLevel: Boolean
        },
        watch:{
            'setLevel':{
                handler:function (val) {
                    if (val){
                        this.setLevel_text = val;
                        this.send_setLevel(!val);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    @import "set.less";
</style>