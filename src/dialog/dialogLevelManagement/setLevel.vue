<template>
    <Drawer :closable="false" v-model="value1" width="580px">
        <div class="dialog-setLevel">
            <div class="dialog-setLevel-title">设置等级</div>
            <div class="dialog-setLevel-body">
                <div class="dialog-setLevel-message">设置等级</div>
                <div class="dialog-setLevel-addName">
                    <div class="dialog-setLevel-addName-left">
                        名字：<Input v-model="value9" disabled placeholder="陈洁愉"  class="inpName" style="vertical-align: baseline"/>
                        <br>
                        当前等级：<Input v-model="value9" disabled placeholder="堂主" class="inpNamed" style="vertical-align: baseline"/>
                        <br>
                        <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>设置等级：
                        <Select v-model="model1" style="width:279px; text-align: left" placeholder="请重新设置等级">
                            <Option v-for="item in duty" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div class="dialog-setLevel-operate">
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
    @import "./setLevel.less";
</style>