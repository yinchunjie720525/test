<template>
    <div :style="min_height">
        <level1List ref="changeList" v-on:min_height="get_height"></level1List>
        <rowList></rowList>
        <router-view></router-view>
        <!--<HelloWorld msg="dede" v-bind:id="prefixCls" v-on:prefixClsd="zidingyi($event)"></HelloWorld>-->
        <!--<getLeft v-bind:id="prefixCls"></getLeft>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import getLeft from './components/texr.vue'
    import level1List from '@/components/firstList/list.vue'
    import rowList from '@/components/rowList/list.vue'

    // import routers from '@/router'
    // alert(prefixCls);
    export default {
        name: 'index',
        data() {
            return {
                prefixCls: 1,
                min_height: ''
            }
        },
        components: {
            // HelloWorld,
            // getLeft,
            level1List,
            rowList,
            // level2List,
            // level3List
        },
        methods: {
            zidingyi: function (msg) {
                this.prefixCls = msg;
            },
            // 获取子集参数
            get_height: function (msg) {
                this.min_height = msg;
            },
        },
        mounted() {
            // 改变菜单栏宽度&高度
            // console.log(routers);
            // console.log(this.$route);
            this.$refs.changeList.list_height();
            // this.$refs.changeWidth.get_width();
            window.onresize = () => {
                this.$refs.changeList.list_height();
                // this.$refs.changeWidth.get_width();
            }
        }
    }
</script>

<style scoped>

</style>