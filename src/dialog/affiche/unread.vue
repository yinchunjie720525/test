<template>
    <Modal v-model="unreadPeople_text" class-name="vertical-center-modal" width="1350px">
        <div class="read-header" slot="header">
            <div class="readPeople" v-if="0==current" >已读人员列表</div>
            <div class="unreadPeople" v-if="1==current">未读人员列表</div>
        </div>

        <div class="readPeople-content">
            <div class="readPeople-content-option">
                <div class="optionReadPeople fl" data-id="0" @click="read_change" :class="{active: 0==current}">已读6人</div>
                <div class="optionUnReadPeople fl" data-id="1" @click="read_change" :class="{active: 1==current}">未读0人</div>
                <div class="clear"></div>
            </div>
            <div class="readPeople-content-list" v-if="0==current">
                <ul class="readPeople-content-ul">
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-takephotos.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢任任人呢任任人呢任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-pitchon2.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-takephotos.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-pitchon2.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-takephotos.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-pitchon2.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                </ul>
                <li class="clear"></li>
            </div>
            <div class="readPeople-content-list" v-if="1==current">
                <ul class="readPeople-content-ul">
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-pitchon2.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢任任人呢任任人呢任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-takephotos.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                    <li class="readPeople-content-li">
                        <img src="/image/divisional/icon-pitchon2.png" class="readPeople-content-img"/>
                        <p class="readPeople-content-p">任任人呢</p>
                    </li>
                </ul>
                <li class="clear"></li>
            </div>
        </div>
        <div slot="footer" class="readPeople-footer">
            <div type="error" size="large" class="updownList">下载已读未读列表</div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name:'unreadPeople',
        data(){
            return{
                current: 0,
                unreadPeople_text: false
            }
        },
        methods:{
            send_unreadPeople:function (data) {
                this.$emit('dialog_unreadPeople',data)
            },
            read_change:function (event) {
                this.current = event.target.dataset.id;
            },
        },
        props:{
            unreadPeople:Boolean
        },
        watch:{
            'unreadPeople':{
                handler:function (val) {
                    if (val){
                        this.unreadPeople_text = val;
                        this.send_unreadPeople(!val);
                        console.log(this.unreadPeople)
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "unread.less";
</style>
<style lang="less">
    .vertical-center-modal{
        .ivu-modal-header{
            border-bottom: 1px solid #f0f2f5;
            height: 35px;
            padding: 0 20px;
            background: #f0f2f5;
            color: #595959;
            border-radius: 4px 4px 0 0;
            .ivu-modal-close .ivu-icon-ios-close{
                font-size: 31px;
                color: #999;
                transition: color .2s ease;
                position: relative;
                top: -5px;
            }
        }
    }

    .ivu-modal-footer {
        border-top: 1px solid #fff;
        padding: 12px 18px 12px 18px;
        text-align: center;
    }
</style>