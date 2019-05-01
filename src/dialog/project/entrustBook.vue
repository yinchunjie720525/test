<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">委托书提交</div>
        <div class="dialog-both-body">
            <div class="dialog-both-message">委托书提交</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">上传委托书：</span>
                    <div class="clear"></div>
                </div>
                <div type="number" class="dialog-both-li-input fl dialog-both-li-input-upload">
                    <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                        <img src="/image/bothIcon/icon-upload.png"/>上传
                    </Upload>
                </div>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl" style="visibility: hidden">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">上传合同图片：</span>
                    <div class="clear"></div>
                </div>
                <div class="dialog-both-li-input fl dialog-contract-div">
                    <div class="dialog-contract-photo" v-for="(item,index) in entrust_photo" :key="index" :class="(index+1)%2 == 0 ? 'fr' : 'fl'">
                        <img :src="item.img_src" class="dialog-contract-photo-img"/>
                        <div class="dialog-contract-photo-tip">
                            <div class="dialog-contract-photo-show" :data-src="item.img_src" @click="show_img">查看原图</div>
                            <div class="dialog-contract-photo-down"><a download="w3logo" :href="item.img_src">下载原图</a></div>
                            <div class="dialog-contract-photo-del" :data-id="index" @click="delete_img">删除</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="dialog-both-active-btn">
            <button class="saveButton">保存</button>
            <button class="cancelButton" @click="cancel">取消</button>
        </div>
        <Modal v-model="entrust_show"  title="委托书原图" footer-hide>
            <img :src="entrust_show_img"/>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "entrustBook",
        data() {
            return {
                entrust_show:false,
                entrust_show_img:'',
                entrust_photo:[{
                    id:1,img_src:'/image/user/contact.png'
                },{
                    id:2,img_src:'/image/user/contact.png'
                }],
                entrust_photo_end:[{
                    id:1,img_src:'/image/user/contact.png'
                },{
                    id:2,img_src:'/image/user/contact.png'
                }]
            }
        },
        props: {
            dialog_btn_data: {}
        },
        methods: {
            cancel:function () {
                this.dialog_btn_data.dialog_show = false;
                this.entrust_photo = this.entrust_photo_end;
            },
            // 查看原图
            show_img:function (envent) {
                this.entrust_show = true
                this.entrust_show_img = envent.currentTarget.dataset.src;
            },
            // 删除合同
            delete_img:function (event) {
                this.entrust_photo.splice(event,1);
                // this.entrust_photo[event.currentTarget.dataset.dataset.index]
            },
        },
    }
</script>

<style scoped>
    @import "../bothCss.less";
</style>