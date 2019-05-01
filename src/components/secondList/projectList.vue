<template>
    <div class="level2-list">
        <template v-for="(item,index) in second_list">
            <div v-if="item.meta.hideInMenu2 != false " :key="index" @click="chose_this($event)" :data-name="item.name" class="level2-li"
                 :class="this_third == '' && index == 0 ? 'level2-li-active' : this_third== item.name ? 'level2-li-active' : ''">
                <!--<router-link :to="item.name">-->
                <span class="level2-li-span" v-if="index == 0">
                      <img :src="item.meta.icon" class="level2-li-img fl"/>
                     <span class="level2-li-text fl">{{item.meta.title}}({{item.meta.num}})</span>
                </span>
                <img v-if="index != 0" :src="item.meta.icon" class="level2-li-img fl"/>
                <span v-if="index != 0" class="level2-li-text fl">{{item.meta.title}}</span>
                <div class="clear"></div>
                <!--</router-link>-->
            </div>
        </template>

        <div style="text-align: center">
            <Tooltip content="项目意向提交" placement="bottom" >
                <div class="project-idea rotate360" @click="chose_this" data-name="levelMenu3_infoUp">
                    <img src="/image/index/create.png" class="project-idea-img"/>
                </div>
            </Tooltip>
        </div>


    </div>
</template>

<script>

    export default {
        name: "projectList",
        data() {
            return {
                second_list: [],
                second_name: '',
                this_third: '',
            }
        },
        methods: {
            // 二级菜单点击
            chose_this: function (event) {
                this.this_third = event.currentTarget.dataset.name;
                console.log( event.currentTarget.dataset.name);
                this.$router.push({name: event.currentTarget.dataset.name})
            },
            // 获得二级菜单列表
            get_list: function (list_data) {
                this.this_third = this.$route.name;
                list_data.forEach((item) => {
                    if (item.name == this.$route.matched[1].name) {
                        this.second_list = item.children;
                    }
                    if ('children' in item) {
                        this.get_list(item.children);
                    }
                })
            }
        },
        created() {
            this.get_list(this.$router.options.routes);
        },
        watch: {
            $route: {
                handler: function () {
                    this.get_list(this.$router.options.routes);
                },
                // 深度观察监听
                deep: true
            }
        },
    }
</script>

<style lang="less">
    /*.level2-list::-webkit-scrollbar {*/
    /*display: none;*/
    /*}*/
    .level2-list::-webkit-scrollbar {
        width: 12px;
        background-color: #f1f1f1;
    }

    .level2-list::-webkit-scrollbar-thumb {
        width: 7px;
        background-color: #dddddd;
        border-radius: 3.5px;
    }

    .level2-list {
        /*min-height: 820px;*/
        width: 240px;
        height: 100%;
        position: absolute;
        left: 64px;
        float: left;
        top: 0;
        z-index: 18;
        padding-top: 56px;
        background: #ffffff;
        border-right: 1px solid #eeeeee;
        overflow-y: auto;
        .level2-li {
            cursor: pointer;
            width: 100%;
            border-bottom: 1px solid #eeeeee;
            display: -webkit-flex;
            display: flex;
            justify-content: center;
            padding: 14px 0;
            align-items: center;
            .level2-li-img {
                width: 36px;
                height: 36px;
                margin: 0 16px 0 20px;
            }
            .level2-li-text {
                color: #333333;
                font-size: 16px;
                line-height: 1.2;
                width: 140px;
                text-align: left;
            }
            .level2-li-span {
                display: inline-block;
                background-color: rgba(220, 173, 91, 0.45);
                border-radius: 4px;
                height: 34px;
                line-height: 34px;
                .level2-li-img {
                    width: 16px;
                    height: 16px;
                    margin-top: 9px;
                }
                .level2-li-text {
                    color: #ce7e30;
                    font-size: 14px;
                    line-height: 34px;
                }
            }
        }
        .project-idea {
            width: 48px;
            height: 48px;
            margin: 50px auto 0;
            cursor: pointer;
            border-radius: 50%;
            background: linear-gradient(-90deg, #418bfa 0%, #56b1fc 100%);
            text-align: center;
            img {
                margin-top: 10px;
                width: 28px;
                height: 28px;
            }
        }
        .level2-li-active, .level2-li:hover {
            background: #ebedf0;
        }
    }
</style>