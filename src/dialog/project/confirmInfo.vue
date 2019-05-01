<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">确认信息</div>
        <div class="dialog-both-box-tip" :class=" tip_show ? ' ' : 'dialog-both-box-tip-hide'">请认真核对信息</div>
        <div class="dialog-both-body" :style="tip_show ? 'padding-top:65px' :''">
            <div class="dialog-both-message">项目信息</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">项目类型：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="城市互联"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">甲方单位：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="杭州红星美凯龙"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">详细地址：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="杭州市杭州市滨江区"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">甲方联系人：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="李四"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">岗位：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="杭州区经理"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">联系电话：</span>
                    <div class="clear"></div>
                </div>
                <input type="number" class="dialog-both-li-input fl" value="13566375655"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">邮箱：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="371702509@qq.com"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">客户标签：</span>
                    <div class="clear"></div>
                </div>
                <div type="text" class="dialog-both-li-input fl dialog-both-li-input-div">
                    <Select v-model="confirm_style_data" filterable not-found-text="没有相关人员信息" multiple>
                        <Option v-for="(item,index) in confirm_style" :value="item.id" :key="index">{{item.name}}</Option>
                    </Select>
                    <!--<span class="dialog-both-li-label">城市经理</span>-->
                    <!--<span class="dialog-both-li-label">红星美凯龙</span>-->
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="dialog-both-active-btn">
            <button class="saveButton">保存</button>
            <button class="cancelButton" @click="cancel">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirmInfo",
        data() {
            return {
                tip_show: true,
                confirm_style:[{id:1,name:'城市经理'},{id:2,name:'红星美凯龙'}],
                confirm_style_data:'',
            }
        },
        props: {
            dialog_btn_data: {}
        },
        methods: {
            hide_tip: function () {
                let  that = this;
                setTimeout(function () {
                    that.tip_show = false;
                }, 3000)
            },
            cancel:function () {
                this.dialog_btn_data.dialog_show = false
            }
        },
        created() {
            this.hide_tip();
        },
        watch: {
            'dialog_btn_data': {
                handler: function (val) {
                    if (val.dialog_show && val.dialog_type == 3) {
                        this.tip_show = true;
                        this.hide_tip();
                    }
                },
                deep: true
            },
        }
    }
</script>

<style lang="less">
    @import "../bothCss.less";
</style>