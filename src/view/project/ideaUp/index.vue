<template>
    <div class="idea-up">
        <!--头部信息-->
        <div class="idea-up-top">
            <div class="idea-up-top-img fl">
                <img src="/image/bothIcon/icon-assembly.png" class=""/>
            </div>
            <div class="idea-up-top-text fl">欢迎进入项目提交申请界面，感谢每一位战神的付出！</div>
            <div class="clear"></div>
        </div>
        <!--窗口-->
        <div class="idea-up-body">
            <div class="idea-up-body-top">项目意向提交</div>
            <div class="idea-up-body-title">甲方单位信息</div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-input-title fl">名称：</div>
                <div class="idea-up-body-input-div fl">
                    <input class="idea-up-body-input" value="杭州红心美凯龙家居三号店"/>
                </div>
                <div class="clear"></div>
            </div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-name-left fl">
                    <div class="idea-up-body-input-title fl">省份：</div>
                    <div class="idea-up-body-input-div fl">
                        <Cascader :data="address_data" change-on-select filterable placeholder="请选择省市"></Cascader>
                    </div>
                </div>
                <div class="idea-up-body-name-left fl">
                   <div class="idea-up-body-input-title fl">详细地址：</div>
                   <div class="idea-up-body-input-div fl">
                       <input class="idea-up-body-input idea-up-body-input2" value="杭州红心美凯龙家居三号店"/>
                   </div>
                   <div class="clear"></div>
               </div>
             <div class="clear"></div>
            </div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-name-left fl">
                    <div class="idea-up-body-input-title fl">联系人：</div>
                    <div class="idea-up-body-input-div fl">
                        <input class="idea-up-body-input idea-up-body-input3" value="张柳"/>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="idea-up-body-name-left fl">
                    <div class="idea-up-body-input-title fl">邮箱地址：</div>
                    <div class="idea-up-body-input-div fl">
                        <input class="idea-up-body-input idea-up-body-input4" value="371702509@qq.com"/>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-input-title fl">备注信息：</div>
                <div class="idea-up-body-input-div fl">
                    <input class="idea-up-body-input" value="皇皇者凤。通玄知时。萃于山趾。与帝邀期。吉事有祥。惟汉之祺。"/>
                </div>
                <div class="clear"></div>
            </div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-input-title fl">客户标签：</div>
                <div class="idea-up-body-input-div fl">
                    <Select v-model="confirm_style_data" filterable not-found-text="没有相关人员信息" multiple>
                        <Option v-for="(item,index) in confirm_style" :value="item.id" :key="index">{{item.name}}</Option>
                    </Select>
                </div>
                <div class="clear"></div>
            </div>
            <div class="idea-up-body-name">
                <div class="idea-up-body-input-title fl">商务类型：</div>
                <div class="idea-up-body-input-div fl">
                    <Select v-model="business_type_data" filterable not-found-text="">
                        <Option v-for="(item,index) in business_type" :value="item.id" :key="index">{{item.name}}</Option>
                    </Select>
                </div>
                <div class="clear"></div>
            </div>
            <div class="idea-up-body-active">
                <span class="idea-up-body-active1">取消</span>
                <span class="idea-up-body-active2">存至草稿</span>
                <span class="idea-up-body-active3">确认提交</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                confirm_style:[{id:1,name:'城市经理'},{id:2,name:'红星美凯龙'}],
                confirm_style_data:'',
                business_type:[{id:1,name:'三人禾集团',logo:'/image/bothIcon/icon-assembly.png'},{id:2,name:'杭州始秦咨询有限公司信息技术科技',logo:'/image/bothIcon/icon-assembly.png'}],
                business_type_data:'',
                address_data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

<style lang="less">
   @import "index";
</style>