<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">中期款项</div>
        <div class="dialog-both-body">
            <div class="dialog-both-message">中期款项</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">上传款项金额：</span>
                    <div class="clear"></div>
                </div>
                <div class="dialog-both-li-input fl">
                    <span class="dialog-both-li-money fl">¥</span><input type="text" class="dialog-both-li-money-input fl" value="200000"/>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">上传款项凭证：</span>
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
                    <div class="dialog-contract-photo" v-for="(item,index) in middleMoney_photo" :key="index" :class="(index+1)%2 == 0 ? 'fr' : 'fl'">
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
        <Modal v-model="middleMoney_show"  title="合同原图" footer-hide>
            <img :src="middleMoney_show_img"/>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "middleMoney",
        data() {
            return {
                middleMoney_show:false,
                middleMoney_show_img:'',
                middleMoney_photo:[{
                    id:1,img_src:'/image/user/contact.png'
                },{
                    id:2,img_src:'/image/user/contact.png'
                }],
                middleMoney_photo_end:[{
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
                this.middleMoney_photo = this.middleMoney_photo_end;
            },
            // 查看原图
            show_img:function (envent) {
                this.middleMoney_show = true
                this.middleMoney_show_img = envent.currentTarget.dataset.src;
            },
            // 删除合同
            delete_img:function (event) {
                this.middleMoney_photo.splice(event,1);
                // this.middleMoney_photo[event.currentTarget.dataset.dataset.index]
            },
        },
    }
</script>

<style scoped>

</style>