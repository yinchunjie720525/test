<template>
    <div class="distributive-bg">
        <div class="distributive">
            <div class="project-score-top"></div>
            <div class="project-score-title">
                <div class="project-score-logo fl">
                    <img src="/image/bothIcon/icon-assembly.png" class="project-score-logo-img"/>
                    <span>项目分配</span>
                </div>
                <div class="project-score-info fl">
                    <div class="project-score-info-t">
                        <span class="project-score-info-t2">项目名称：红星美凯龙全国联动</span>
                        <span class="">活动类型：工厂联动</span>
                    </div>
                    <div class="project-score-info-b">活动时间：2018年4月1日12:00 <img src="/image/bothIcon/icon-time.png"/> —— 2019年4月6日20:00 <img src="/image/bothIcon/icon-time.png"/></div>
                </div>
                <div class="clear"></div>
                <div style="border-bottom: 1px solid #eeeeee;margin-top: 24px"></div>
            </div>

            <div class="distributive-body">
                <!--等级筛选-->
                <div class="distributive-screen">
                    <div class="level-div fl" @click="level_chose" data-index="0">
                        <span class="level-div-chose fl" :class="level_chose_data[0]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="1">
                        <span class="level-div-chose fl" :class="level_chose_data[1]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="2">
                        <span class="level-div-chose fl" :class="level_chose_data[2]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="3">
                        <span class="level-div-chose fl" :class="level_chose_data[3]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="4">
                        <span class="level-div-chose fl" :class="level_chose_data[4]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="5">
                        <span class="level-div-chose fl" :class="level_chose_data[5]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="6">
                        <span class="level-div-chose fl" :class="level_chose_data[6]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="7">
                        <span class="level-div-chose fl" :class="level_chose_data[7]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="8">
                        <span class="level-div-chose fl" :class="level_chose_data[8]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="level-div fl" @click="level_chose" data-index="9">
                        <span class="level-div-chose fl" :class="level_chose_data[9]? 'level-div-chosed' : ''"></span>
                        <img src="/image/bothIcon/icon-supervip.png" class="level-div-img fl"/>
                        <div class="level-div-text fl">堂主</div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--状态筛选&搜索-->
                <div class="distributive-status-search">
                    <!--状态筛选-->
                    <div class="distributive-screen fl">
                        <span class="distributive-screen-title">状态：</span>
                        <span class="distributive-screen-btn" data-id="0" @click="status_chose = 0" :class=" status_chose == 0 ? 'distributive-screen-btn-active' : ''">待岗（58人）</span>
                        <span class="distributive-screen-btn" data-id="1" @click="status_chose = 1" :class=" status_chose == 1 ? 'distributive-screen-btn-active' : ''">休假（58人）</span>
                        <span class="distributive-screen-btn" data-id="2" @click="status_chose = 2" :class=" status_chose == 2 ? 'distributive-screen-btn-active' : ''">在岗（58人）</span>
                        <span class="distributive-screen-btn" data-id="3" @click="status_chose = 3" :class=" status_chose == 3 ? 'distributive-screen-btn-active' : ''">任务中（58人）</span>
                    </div>
                    <!--搜索-->
                    <div class="distributive-search fl">
                        <img class="distributive-search-img fl" src="/image/bothIcon/icon-search.png"/>
                        <input type="text" placeholder="搜索..." class="fl distributive-search-input"/>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!--人员数据-->
                <div class="distributive-people">
                    <div class="distributive-people-left fl">
                        <div class="distributive-company" @click="company_chose = 0" :class="company_chose == 0 ? 'distributive-company-active' : ''">
                            <img src="/image/bothIcon/icon-logo.png" class="distributive-company-img" :class="company_chose == 0 ? '' : 'gary'"/>
                            <span>三人禾集团（369人）</span>
                        </div>
                        <div class="distributive-company" @click="company_chose = 1" :class="company_chose == 1 ? 'distributive-company-active' : ''">
                            <img src="/image/bothIcon/icon-logo.png" class="distributive-company-img" :class="company_chose == 1 ? '' : 'gary'"/>
                            <span>河南三人禾（369人）</span>
                        </div>
                    </div>
                    <div class="distributive-people-right fl">
                        <draggable class="draggable-ul" v-model="people_data_list" data-id="0"  :options="options" @input="datadragEnd">
                            <div class="distributive-personal fl" v-for="(item,index) in people_data_list" :key="index">
                                <div class="distributive-personal-img-bg">
                                    <img :src="item.img" class="distributive-personal-img" :class="item.levelNum > 3 ?  item.levelNum > 6 ? 'distributive-personal-img3': 'distributive-personal-img2' : ''"/>
                                    <img :src="item.level" class="distributive-personal-level"/>
                                </div>
                                <div class="distributive-personal-name">{{item.name}}</div>
                            </div>
                            <div class="clear"></div>
                        </draggable>
                    </div>
                    <div class="clear"></div>
                </div>

                <!--选择区域-->
                <div class="distributive-chose-people">
                    <div class="distributive-leader fl">
                        <div class="distributive-leader-title">主控（{{people_data_list1.length}}）</div>
                        <div class="distributive-leader-body">
                            <draggable class="draggable-ul" data-id="1" v-model="people_data_list1" :options="options" @input="datadragEnd2">
                                <div class="distributive-personal" v-for="(item,index) in people_data_list1" :key="index">
                                    <div class="distributive-personal-img-bg">
                                        <img :src="item.img" class="distributive-personal-img" :class="item.levelNum > 3 ?  item.levelNum > 6 ? 'distributive-personal-img3': 'distributive-personal-img2' : ''"/>
                                        <img :src="item.level" class="distributive-personal-level"/>
                                    </div>
                                    <div class="distributive-personal-name">{{item.name}}</div>
                                </div>
                                <div v-if="people_data_list1 == null || people_data_list1.length == 0" class="distributive-no-chose">主控</div>
                            </draggable>
                        </div>
                    </div>
                    <div class="distributive-staff fl">
                        <div class="distributive-leader-title">助理（{{people_data_list2.length}}）</div>
                        <div class="distributive-leader-body">
                            <draggable class="draggable-ul" data-id="2" v-model="people_data_list2" :options="options" @input="datadragEnd">
                                <div class="distributive-personal fl" v-for="(item,index) in people_data_list2" :key="index">
                                    <div class="distributive-personal-img-bg">
                                        <img :src="item.img" class="distributive-personal-img" :class="item.levelNum > 3 ?  item.levelNum > 6 ? 'distributive-personal-img3': 'distributive-personal-img2' : ''"/>
                                        <img :src="item.level" class="distributive-personal-level"/>
                                    </div>
                                    <div class="distributive-personal-name">{{item.name}}</div>
                                </div>
                                <div class="clear"></div>
                                <div v-if="people_data_list2 == null || people_data_list2.length == 0" class="distributive-no-chose">助理</div>
                            </draggable>

                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>

            <div class="distributive-footer">
                <button class="project-score-btn"  @click="goBack">确认分配</button>
                <button class="project-score-btn project-score-btn-cancel" @click="goBack">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "index",
        components:{
            draggable:draggable
        },
        data(){
          return{
              options:{group:'people_data_list',draggable:'.distributive-personal'},
              people_data_list1:[],
              people_data_list2:[],
              people_data_list:[{id:1,levelNum:3,level:'/image/bothIcon/icon-supervip.png',img:'/image/user/icon-header.png',name:'蔡雨杜'},{id:1,levelNum:6,level:'/image/bothIcon/icon-supervip.png',img:'/image/user/icon-header.png',name:'蔡雨杜'},{id:1,levelNum:9,level:'/image/bothIcon/icon-supervip.png',img:'/image/user/icon-header.png',name:'蔡雨杜'}],
              status_chose:0,
              company_chose:0,
              level_chose_data:[true,true,false,true,true,true,true,true,true,true]
          }
        },
        methods:{
            // 选择人员
            datadragEnd2:function(){
                let list = this.people_data_list1;
                if(list.length > 1 ){
                    this.people_data_list1 = [];
                    this.people_data_list.push(list[0]);
                    this.people_data_list1.push(list[1]);
                }
            },
            datadragEnd:function(){
                // let list = this.people_data_list1;
                // if(list.length>0 ){
                //     this.people_data_list1 = [];
                //     this.people_data_list1.push(value);
                // }
            },
            // 等级选择
            level_chose:function(event){
                let index = event.currentTarget.dataset.index ;
                this.level_chose_data.splice(index,1,!this.level_chose_data[index]);
            },
            // 返回
            goBack:function(){
                if(JSON.parse(sessionStorage.getItem('back_url')) != null && JSON.parse(sessionStorage.getItem('back_url')) != ''){
                    let list = JSON.parse(sessionStorage.getItem('back_url'));
                    let li = list[list.length-1];
                    list.splice(length-1,1);
                    sessionStorage.setItem('back_url',JSON.stringify(list));
                    this.$router.push({name:li.url,query:{ id:li.id}})
                }
                else{
                    this.$router.push({name:'levelMenu3_project'})
                }
            },
        }
    }
</script>

<style lang="less">
    @import "index";
</style>