<template>
    <div class="dialog-external">
        <div class="dialog-external-title">{{addExternal_show.title}}</div>
        <!--新增外部联系人-->
        <div class="dialog-external-body">
            <div class="dialog-external-details">
                <div class="details">
                    <div class="details-span">
                        <img src="/image/peopleMan/icon-star.png" class="detailIcon"/>
                        <span>姓名：</span>
                    </div>
                    <!--<input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_dialog.name"/>-->
                    <input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_data && addExternal_show.addExternal_data.name"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <img src="/image/peopleMan/icon-star.png" class="detailIcon"/>
                        <span>电话：</span>
                    </div>
                    <!--<input type="text" placeholder="" class="inpDetail fl" :value="addExternal_show.addExternal_dialog.phoned"/>-->
                    <input type="text" placeholder="" class="inpDetail fl" :value="addExternal_show.addExternal_data && addExternal_show.addExternal_data.phoned"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <span>公司：</span>
                    </div>
                    <!--<input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_dialog.company"/>-->
                    <input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_data && addExternal_show.addExternal_data.company"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <span>职位：</span>
                    </div>
                    <input type="text" placeholder="" class="inpDetail"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <span>邮箱：</span>
                    </div>
                    <input type="text" placeholder="" class="inpDetail"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <span>地址：</span>
                    </div>
                    <input type="text" placeholder="" class="inpDetail"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                    <span>备注：</span>
                </div>
                    <input type="text" placeholder="" class="inpDetail"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <img src="/image/peopleMan/icon-star.png" class="detailIcon"/>
                        <span>负责人：</span>
                    </div>
                    <!--<input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_dialog.leader"/>-->
                    <input type="text" placeholder="" class="inpDetail" :value="addExternal_show.addExternal_data && addExternal_show.addExternal_data.leader"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <img src="/image/peopleMan/icon-star.png" class="detailIcon"/>
                        <span>共享给：</span>
                    </div>
                    <input type="text" placeholder="" class="inpDetail"/>
                    <div class="clear"></div>
                </div>
                <div class="details">
                    <div class="details-span">
                        <span>标签：</span>
                    </div>
                    <Select v-model="confirm_style_data" filterable not-found-text="没有相关人员信息" multiple><Option v-for="(item,index) in confirm_style" :value="item.id" :key="index">{{item.name}}</Option></Select>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="dialog-external-operate">
            <button class="saveButton" @click="save_data">保存</button>
            <button class="cancelButton" @click="quxiao_data">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                confirm_style:[{id:1,name:'城市经理'},{id:2,name:'红星美凯龙'}],
                confirm_style_data:'',
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
            }
        },
        props:{
            addExternal_show:{}
        },
        methods:{
            save_data:function () {
                this.addExternal_show = false
            },
            quxiao_data:function () {
                this.addExternal_show = false
            }
        },
    }
</script>

<style lang="less">
    @import "./add.less";
</style>