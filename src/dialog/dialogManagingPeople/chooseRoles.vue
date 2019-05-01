<template>
    <div class="arrange-bg">
        <Modal v-model="chooseRoless_text" :styles="{top: '20px'}" width="700px">
            <div class="arrange">
                <div class="arrange-title">选择人员</div>
            </div>
            <div class="arrange-body">
                <div class="arrange-body-xuan fl">
                    <div class="arrange-body-xuan-title">选择：</div>
                    <div class="arrange-body-xuan-content">
                        <div class="arrange-body-xuan-content-search">
                            <div class="arrange-body-xuan-content-search-icon fl">
                                <img src="/image/attendance/icon-search.png" class="search-icon"/>
                            </div>
                            <input type="text" value="" placeholder="搜索" class="search-input fl">
                            <div class="clear"></div>
                        </div>
                        <div class="arrange-body-xuan-content-midder">
                            <!--<div class="arrange-body-xuan-content-midder-p">-->
                                <!--<Breadcrumb separator=">">-->
                                    <!--<BreadcrumbItem to="">三人禾集团</BreadcrumbItem>-->
                                    <!--<BreadcrumbItem to="">高端营销</BreadcrumbItem>-->
                                    <!--<BreadcrumbItem>开发部</BreadcrumbItem>-->
                                <!--</Breadcrumb>-->
                            <!--</div>-->
                            <div class="clear"></div>
                            <div class="arrange-body-xuan-content-midder-list">
                                <p class="list-div1"><Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox></p>
                                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                    <div v-for="(item,index) in people_data2" :key="index" class="list-div" :data-index="index">
                                        <Checkbox :label="index">
                                            <div class="fl list-div-bg">
                                                <img :src="item.img_url" class="list-div-icon"/>
                                                <span class="list-div-span">{{item.name}}</span>
                                            </div>
                                            <div class="clear"></div>
                                        </Checkbox>
                                        <span :data-index="index" @click.stop="show_next" class="div-span fr" v-if="item.children!=null && item.children != undefined && item.children != '' && item.children.length>0"><img src="/image/attendance/icon-xia.png" class="dic-span-icon"/>下级</span>
                                    </div>
                                </CheckboxGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="arrange-body-yiXuan fr">
                    <div class="arrange-body-yiXuan-title">已选：</div>
                    <div class="arrange-body-yiXuan-content">
                        <div class="arrange-body-yiXuan-content-midder-list">
                            <div class="list-div" v-for="(item,index) in click_people" :key="index">
                                <img :src="item.img_url" class="list-div-icon fl"/>
                                <span class="list-div-span fl">{{item.name}}</span>
                                <span class="div-span fr"><img src="/image/attendance/icon-delete.png" class="dic-span-icon" :data-index="index" @click="del_chose"/></span>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arranged" slot="footer">
                <div class="arrenge-footer">
                    <button  class="arrenge-footer-but" @click="baoCun">保存</button>
                    <button  class="arrenge-footer-but1" @click="quXiao">取消</button>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        name:'chooseRoless',
        data () {
            return {
                chooseRoless_text: false,
                indeterminate: false,
                checkAll: false,
                checkAllGroup: [],
                routeName: '',
                people_data:[
                    {
                        id:0,
                        name:'张飞',
                        img_url:'/image/attendance/icon-wenjian.png',
                        children:[
                            {
                                id:0,
                                name:'开发',
                                img_url:'/image/attendance/icon-wenjian.png',
                                children:[{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                },{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                }
                                ]
                            },{
                                id:1,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:2,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组OA系统项目组OA系统项目组OA系统项目组OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:3,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'试试',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:1,
                        name:'张飞',
                        img_url:'/image/attendance/icon-wenjian.png',
                        children:[
                            {
                                id:0,
                                name:'开发',
                                img_url:'/image/attendance/icon-wenjian.png',
                                children:[{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                },{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                }
                                ]
                            },{
                                id:1,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:2,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组OA系统项目组OA系统项目组OA系统项目组OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:3,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'试试',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:2,
                        name:'张飞',
                        img_url:'/image/attendance/icon-wenjian.png',
                        children:[
                            {
                                id:0,
                                name:'开发',
                                img_url:'/image/attendance/icon-wenjian.png',
                                children:[{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                },{
                                    name:'前端开发',
                                    img_url:'/image/attendance/icon-wenjian.png',
                                    people_list:[
                                        {
                                            id:1,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        },{
                                            id:2,
                                            name:'王菲',
                                            img_url:'/image/attendance/icon-wenjian.png'
                                        }]
                                }
                                ]
                            },{
                                id:1,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:2,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'OA系统项目组OA系统项目组OA系统项目组OA系统项目组OA系统项目组',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            },{
                                id:3,
                                img_url:'/image/attendance/icon-wenjian.png',
                                name:'试试',
                                children:[
                                    {
                                        name:'前端开发',
                                        img_url:'/image/attendance/icon-wenjian.png',
                                        people_list:[
                                            {
                                                id:1,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            },{
                                                id:2,
                                                name:'王菲',
                                                img_url:'/image/attendance/icon-wenjian.png'
                                            }]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                people_data2:[],
                click_people:[],
            }
        },
        computed:{
            breadData(){
                return {

                }
            }
        },
        methods:{
            // 数据复制
            coyp_data:function(data){
                let data1 = JSON.stringify(data);
                let data2 = JSON.parse(data1);
                return data2
            },
            // 删除
            del_chose:function(event){
                let index = event.currentTarget.dataset.index ;
                this.click_people.splice(index,1);
                this.checkAllGroup.splice(index,1);
                if(this.checkAllGroup.length === 0){
                    this.indeterminate = false;
                    this.checkAll = false;
                }else{
                    this.indeterminate = true;
                }
            },
            // 显示下级
            show_next:function(event){
                let index = event.currentTarget.dataset.index ;
                this.routeName = {
                    nav: this.people_data2[index].route,
                }
                console.log(this.routeName)
                this.people_data2 = this.coyp_data(this.people_data2[index].children);
            },
            send_chooseRoless:function (data) {
                this.$emit('dialog_chooseRoless',data)
            },
            arrange_change:function(){
                this.change = event.target.dataset.id;
            },
            // 多选框全选方法
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;
                if (this.checkAll) {
                    this.people_data2.forEach((item,index) =>{
                        this.checkAllGroup.push(index);
                    })
                    this.click_people = this.coyp_data(this.people_data2);
                } else {
                    this.checkAllGroup = [];
                    this.click_people = [];
                }
            },
            checkAllGroupChange (data) {
                let chose_data= [];
                let  that = this;
                data.forEach((item) =>{
                    chose_data.push(that.coyp_data(that.people_data2[item]));
                })
                this.click_people = chose_data;
                if (data.length === this.people_data2.length) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            // 取消按钮
            quXiao:function () {
                var that = this;
                that.arrange_text = false;
            },
            // 保存按钮
            baoCun:function () {
                var that = this;
                that.arrange_text = false;
            }
        },
        props:{
            chooseRoless: Boolean
        },
        mounted(){
            this.people_data2 = this.coyp_data(this.people_data);
        },
        watch:{
            'chooseRoless':{
                handler:function (val) {
                    if (val){
                        this.chooseRoless_text = val;
                        this.send_chooseRoless(!val);
                    }
                }
            }
        },
        created: function() {
            function justify(data, parent) {
                data.forEach((item) => {
                    item.route = `${parent}${item.name}`;
                    if (item.children) {
                        justify(item.children, item.route + "/");
                    }
                });
            }
            justify(this.people_data, "/");
            console.log(this.people_data);
        }
    }
</script>

<style lang="less" scoped>
    @import "chooseRoles.less";
</style>
<style lang="less">
    .ivu-modal-footer {
        border-top: 0;
    }
    .list-div1{
        .ivu-checkbox-inner{
            margin-right: 6px !important;
        }
    }
    .list-div{
        .ivu-checkbox-wrapper{
            margin-right: 0;
            width: calc(100% - 50px);
        }
        .ivu-checkbox{
            float: left;
            margin: 2px 0 0;
        }

        .list-div-bg{
            position: relative;
            padding-left: 24px;
            .list-div-icon{
                width: 24px;
                position: absolute;
                left: 0;
            }
        }
        .list-div-span{
            font-size: 14px;
            line-height: 15px;
            position: relative;
            top: 2px;
        }
        .div-span{
            line-height: 19px;
            cursor: pointer;
        }
    }
    .ivu-breadcrumb-item-separator {
        margin: 0 8px;
        color: rgb(89,89,89);
    }
    .ivu-modal-footer {
        /* border-top: 1px solid #e8eaec; */
        padding: 12px 18px 12px 18px;
        text-align: right;
    }
</style>
