<template>
    <div class="dialog-both-box">
        <div class="dialog-both-title">活动落地信息完善</div>
        <div class="dialog-both-body">
            <div class="dialog-both-message">分配公司</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">该项目分配给：</span>
                    <div class="clear"></div>
                </div>
                <Select v-model="company_list_data" filterable not-found-text="没有相关公司信息">
                    <Option v-for="(item,index) in companyList" :value="item.id" :key="index" :style="'background: url('+item.logo+') 16px 7px no-repeat;background-size:16px 16px;padding:7px 16px 7px 32px'">{{item.name}}</Option>
                </Select>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-message">分配商务人员</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">该项目分配给：</span>
                    <div class="clear"></div>
                </div>
                <Select v-model="people_list_data" filterable not-found-text="没有相关人员信息">
                    <Option v-for="(item,index) in peopleList" :value="item.id" :key="index" :style="'background: url('+item.logo+') 16px 7px no-repeat;background-size:16px 16px;padding:7px 16px 7px 32px'">{{item.name}}</Option>
                </Select>
                <div class="clear"></div>
            </div>
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
            <div class="dialog-both-message">合同信息</div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">甲方单位信息：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="杭州红星美凯龙"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">合同编号：</span>
                    <div class="clear"></div>
                </div>
                <input type="text" class="dialog-both-li-input fl" value="MSAD-453186"/>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">项目截止时间：</span>
                    <div class="clear"></div>
                </div>
                <div class="dialog-both-li-input fl dialog-both-li-input-date">
                    <img src="/image/bothIcon/icon-time.png"/>
                    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间" style="width: 200px"></DatePicker>
                </div>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">合同金额：</span>
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
                    <span class="">定金金额：</span>
                    <div class="clear"></div>
                </div>
                <div class="dialog-both-li-input fl">
                    <span class="dialog-both-li-money fl">¥</span><input type="text" class="dialog-both-li-money-input fl" value="5000000"/>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="dialog-both-li">
                <div class="dialog-both-li-left fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="imgIcon"/>
                    <span class="">上传合同图片：</span>
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
                    <div class="dialog-contract-photo" v-for="(item,index) in contract_photo" :key="index" :class="(index+1)%2 == 0 ? 'fr' : 'fl'">
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
        <Modal v-model="contract_show"  title="合同原图" footer-hide>
            <img :src="contract_show_img"/>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "activityLanding",
        data(){
            return{
                companyList:[{id:1,name:'三人禾集团',logo:'/image/bothIcon/icon-assembly.png'},{id:2,name:'杭州始秦咨询有限公司信息技术科技',logo:'/image/bothIcon/icon-assembly.png'}],
                company_list_data:'',
                peopleList:[{id:1,name:'李四',logo:'/image/bothIcon/icon-assembly.png'},{id:2,name:'赵五',logo:'/image/bothIcon/icon-assembly.png'}],
                people_list_data:'',
                confirm_style:[{id:1,name:'城市经理'},{id:2,name:'红星美凯龙'}],
                confirm_style_data:'',
                contract_show:false,
                contract_show_img:'',
                contract_photo:[{
                    id:1,img_src:'/image/user/contact.png'
                },{
                    id:2,img_src:'/image/user/contact.png'
                }],
                contract_photo_end:[{
                    id:1,img_src:'/image/user/contact.png'
                },{
                    id:2,img_src:'/image/user/contact.png'
                }]
            }
        },
        props:{
            dialog_btn_data:{}
        },
        methods:{
            cancel:function () {
                this.dialog_btn_data.dialog_show = false;
                this.contract_photo = this.contract_photo_end;
            },
            // 查看原图
            show_img:function (envent) {
                this.contract_show = true
                this.contract_show_img = envent.currentTarget.dataset.src;
            },
            // 删除合同
            delete_img:function (event) {
                this.contract_photo.splice(event,1);
                // this.contract_photo[event.currentTarget.dataset.dataset.index]
            },
        }
    }
</script>

<style scoped>
    @import "../bothCss.less";
</style>