<template>
    <div class="level2-list">
        <template v-for="(item,index) in second_list">
            <div :key="index" @click="chose_this($event)" :data-name="item.name" class="level2-li" :class="this_third == '' && index == 0 ? 'level2-li-active' : this_third== item.name ? 'level2-li-active' : ''">
                <!--<router-link :to="item.name">-->
                    <img :src="item.meta.icon" class="level2-li-img fl"/>
                    <span class="level2-li-text fl">{{item.meta.title}}</span>
                    <div class="clear"></div>
                <!--</router-link>-->
            </div>
        </template>
    </div>
</template>

<script>

    export default {
        name: "list",
        data() {
            return {
                second_list: [],
                second_name: '',
                this_third: '',
            }
        },
        methods: {
            // 二级菜单点击
            chose_this:function(event){
                this.this_third= event.currentTarget.dataset.name;
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
                handler: function(){
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
        }
        .level2-li-active, .level2-li:hover {
            background: #ebedf0;
        }
    }
</style>