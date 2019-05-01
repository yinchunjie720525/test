<template>
    <div class="level1-list" v-bind:style="sum_height">
        <template v-for="item in routers">
            <router-link :to="item.path" class="level1-list-text" :id="pageName(item.name)" :class='pageName(item.name)? "level1-list-text":"" '
                 v-bind:key="item.index" v-if="!item.meta.hideInMenu" @click="goPage">
                <Tooltip :content="item.meta.title" placement="right">
                    <img :src="pageName(item.name) ? item.meta.icon2 :item.meta.icon" class="level1-list-img"/>
                </Tooltip>
            </router-link>
        </template>
    </div>

</template>

<script>
    import routers from '@/router'

    export default {
        name: "list",
        data() {
            return {
                height: 0,
                sum_height: 0,
                routers: routers
            }
        },
        methods: {
            // 计算左侧一级导航栏高度
            list_height: function () {
                this.height = window.innerHeight >= (54 * 13 + 66) ? window.innerHeight : (54 * 13 + 66);
                this.sum_height = "min-height:" + this.height + 'px';
                this.sendHieght(this.sum_height);
            },
            // 传值给父级
            sendHieght: function (_data) {
                this.$emit('min_height', _data);
            },
            goPage: function (event) {
                console.log(event)
            },
            // 判断name是否相等
            pageName: function (text1) {
                return this.$route.matched[0].name == text1 ;
            }
        }
    }
</script>

<style lang="less">

    .active {
        color: red;
    }

    .level1-list::-webkit-scrollbar {
        display: none;
    }

    .level1-list {
        text-align: center;
        width: 64px;
        height: 100%;
        /*min-height: 820px;*/
        position: absolute;
        left: 0;
        top: 0;
        z-index: 20;
        padding-top: 66px;
        line-height: 0;
        /*overflow-y: auto;*/
        background: #418bfa;
        background: linear-gradient(0deg, #418bfa 0%, #56b1fc 100%);
        .level1-list-text {
            cursor: pointer;
            display: block;
            margin-bottom: 22px;
            .level1-list-img {
                width: 32px;
                height: 32px;
            }
        }
    }
</style>