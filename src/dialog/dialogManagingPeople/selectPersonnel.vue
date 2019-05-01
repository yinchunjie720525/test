<template>
    <div class="arrange-bg">
        <div class="arrange">
            <div class="arrange-title">添加成员</div><!--{{selectPeople_show.title}}-->
        </div>
        <div class="arrange-body">
            <div class="arrange-body-xuan fl">
                <div class="arrange-body-xuan-title">选择：</div>
                <div class="arrange-body-xuan-content">
                    <div class="arrange-body-xuan-content-search">
                        <div class="arrange-body-xuan-content-search-icon fl">
                            <img src="/image/attendance/icon-search.png" class="search-icon"/>
                        </div>
                        <input type="text" value="" placeholder="搜索" class="search-input fl" @input="select_data">
                        <div class="clear"></div>
                    </div>
                    <div class="arrange-body-xuan-content-midder">
                        <div class="arrange-body-xuan-content-midder-p">
                            <div class="fl" v-for="(item,index) in chose_parent" :key="index">
                                <span class="midder-p-span" v-if="index < chose_parent.length -1" style="cursor:pointer;color:rgb(104,193,255);"  @click="show_childList" :data-id="item.id"
                                      :data-index="index">{{item.name}}</span>
                                <span class="midder-p-span" v-if="index ==chose_parent.length -1" :data-id="item.id" :data-index="index">{{item.name}}</span>
                                <img v-if="index < chose_parent.length -1" src="/image/attendance/icon-dao.png" class="midder-p-icon"/>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="arrange-body-xuan-content-midder-list">
                            <p class="list-div1">
                                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选
                                </Checkbox>
                            </p>
                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                <div v-for="(item,index) in people_data2" :key="index" class="list-div" :data-index="index">
                                    <Checkbox :label="index" value="1">
                                        <div class="fl list-div-bg fl"  :data-index="index" style="cursor: pointer">
                                            <img :src="item.img_url" class="list-div-icon"/>
                                            <span class="list-div-span">{{item.name}}</span>
                                        </div>
                                    </Checkbox>
                                    <div class="clear"></div>
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
                            <span class="div-span fr"><img src="/image/attendance/icon-delete.png"
                                                           class="dic-span-icon" :data-index="index"
                                                           @click="del_chose"/></span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="arranged" slot="footer">
            <div class="arrenge-footer">
                <button class="arrenge-footer-but" @click="enter_depart">保存</button>
                <button class="arrenge-footer-but1" @click="quXiao">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {deepClone} from "../../assets/js/template";
    export default {
        name:'selectPersonnel',
        props: {
            depart_chose_show: {}
        },
        data() {
            return {
                // arrange_text: false,
                indeterminate: false,
                checkAll: false,
                checkAllGroup: [],
                routeName: '',
                people_data: [
                    {
                        id: 1,
                        name: '艾米亚',
                        img_url: '/image/attendance/icon-wenjian.png',
                    },
                    {
                        id: 2,
                        name: '阿卡丽',
                        img_url: '/image/attendance/icon-wenjian.png',
                    },
                    {
                        id: 3,
                        name: '阿西吧',
                        img_url: '/image/attendance/icon-wenjian.png',
                    },
                    {
                        id: 4,
                        name: '伊泽瑞尔',
                        img_url: '/image/attendance/icon-wenjian.png',
                    },

                ],
                people_data2: [],
                click_people: [],
                chose_parent: [{name: '通讯录', id: -1}],
            }
        },
        methods: {
            // 搜索
            select_data:function(event){
                let text = event.srcElement.value;
                let that = this;
                that.run_select_data(that,text,that.people_data);
            },
            // 循环遍历
            run_select_data: function (that, text, data){
                let people_data2= [];
                data.forEach((item) => {
                    // 找到当期项
                    if (item.name.indexOf(text) != -1) {
                        people_data2.push(item);
                    }
                    // 没有找到但是有下一层
                    if( people_data2.length === 0 && item.children != null && item.children.length > 0){
                        that.run_select_data(that,text,item.children);
                    }
                    // 找到
                    else if(people_data2.length > 0){
                        that.people_data2 = deepClone(people_data2);
                    }
                })
            },
            // 标题栏返回上一级
            show_childList: function (event) {
                let id = event.currentTarget.dataset.id;
                let data_index = event.currentTarget.dataset.index;
                let that = this;
                let data_attr=[];
                that.chose_parent.forEach((item,index) =>{
                    if(index <= data_index){
                        data_attr.push(deepClone(item));
                    }
                });
                that.chose_parent = deepClone(data_attr);
                that.click_people = [];
                that.run_data(that, id, that.people_data);
            },

            // 循环遍历
            run_data: function (that, id, data) {
                if( id === -1 || id === '-1' ){
                    that.people_data2 = deepClone(that.people_data);
                }else{
                    data.forEach((item) => {
                        if (id == item.id) {
                            that.people_data2 = deepClone(item.children);
                            return;
                        }
                        else if (item.children != null && item.children.length > 0) {
                            that.run_data(that, id, item.children)
                        }
                    })
                }
            },
            // 数据复制
            coyp_data: function (data) {
                let data1 = JSON.stringify(data);
                let data2 = JSON.parse(data1);
                return data2
            },
            // 删除
            del_chose: function (event) {
                let index = event.currentTarget.dataset.index;
                this.click_people.splice(index, 1);
                this.checkAllGroup.splice(index, 1);
                if (this.checkAllGroup.length === 0) {
                    this.indeterminate = false;
                    this.checkAll = false;
                } else {
                    this.indeterminate = true;
                }
            },
            // 显示下级
            show_next: function (event) {
                let index = event.currentTarget.dataset.index;
                let name = deepClone(this.people_data2[event.currentTarget.dataset.index].name);
                let id = deepClone(this.people_data2[event.currentTarget.dataset.index].id);
                this.chose_parent.push({name: name, id: id});
                this.people_data2 = this.coyp_data(this.people_data2[index].children);
            },
            send_arrange: function (data) {
                this.$emit('dialog_arrange', data)
            },
            arrange_change: function () {
                this.change = event.target.dataset.id;
            },
            // 多选框全选方法
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;
                if (this.checkAll) {
                    this.people_data2.forEach((item, index) => {
                        this.checkAllGroup.push(index);
                    })
                    this.click_people = this.coyp_data(this.people_data2);
                } else {
                    this.checkAllGroup = [];
                    this.click_people = [];
                }
            },
            checkAllGroupChange(data) {
                let chose_data = [];
                let that = this;
                data.forEach((item) => {
                    chose_data.push(that.coyp_data(that.people_data2[item]));
                })
                that.click_people = deepClone(chose_data);
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
            quXiao: function () {
                let that = this;
                that.depart_chose_show.is_show = false;
            },
            // 确认
            enter_depart:function () {
                this.depart_chose_show.is_show = false;
                this.$emit('prev_data',deepClone(this.click_people));
            }
        },
        mounted() {
            this.people_data2 = this.coyp_data(this.people_data);
            let  chose_people = this.depart_chose_show.chose_people;
            let that = this;
            this.people_data2.forEach((item,index) =>{
                chose_people.forEach((item2) =>{
                    if(item2.id ===  item.id){
                        that.checkAllGroup.push(index);
                        that.click_people.push(item);
                    }
                })
            })
            console.log(this.people_data2)
        },
    }
</script>

<style lang="less">
    @import "./selectPersonnel.less";
</style>
<style lang="less">
    .ivu-modal-content .arrange .arrange-title {
        text-align: center;
        font-weight: normal;
        background-color: #eceff4;
        font-size: 20px;
        height: 58px;
        margin-top: -16px;
        border-radius: 4px;
        line-height: 58px;
    }
    .ivu-modal-footer {
        border-top: 0;
    }
    .list-div1 {
        .ivu-checkbox-inner {
            margin-right: 6px !important;
        }
    }
    .list-div {
        .ivu-checkbox-wrapper {
            margin-right: 0;
            width: calc(100% - 50px);
        }
        .ivu-checkbox {
            float: left;
            margin: 2px 0 0;
            display: block;
        }
        .list-div-bg {
            position: relative;
            padding-left: 24px;
            .list-div-icon {
                width: 24px;
                position: absolute;
                left: 0;
            }
        }
        .list-div-span {
            font-size: 14px;
            line-height: 15px;
            position: relative;
            top: 2px;
        }
        .div-span {
            line-height: 19px;
            cursor: pointer;
        }
    }
    .ivu-breadcrumb-item-separator {
        margin: 0 8px;
        color: rgb(89, 89, 89);
    }
</style>