<template>

    <div id="app">
        <!--<level1List ref="changeList" v-on:min_height="get_height"></level1List>-->
        <!--<rowList></rowList>-->
        <!--<level2List></level2List>-->
        <!--<level3List ref="changeWidth"></level3List>-->
        <!--<router-view name="default">-->
        <!--</router-view>-->
        <router-view/>
        <!--<router-view name="projectList"></router-view>-->
        <!--<HelloWorld msg="dede" v-bind:id="prefixCls" v-on:prefixClsd="zidingyi($event)"></HelloWorld>-->
        <!--<getLeft v-bind:id="prefixCls"></getLeft>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import getLeft from './components/texr.vue'
    // import level1List from './components/firstList/list.vue'
    // import rowList from './components/rowList/list.vue'
    // import level2List from './components/secondList/list.vue'
    // import level3List from './components/thirdList/list.vue'
    // alert(prefixCls);
    export default {
        name: 'app',
        data() {
            return {
                prefixCls: 1,
                min_height: ''
            }
        },
        // components: {
        //     // HelloWorld,
        //     // getLeft,
        //     level1List,
        //     rowList,
        //     level2List,
        //     level3List
        // },
        methods: {
            // zidingyi: function (msg) {
            //     this.prefixCls = msg;
            // },
            // // 获取子集参数
            // get_height: function (msg) {
            //     this.min_height = msg;
            // },
            // goOther: function () {
            //     this.$router.push({name: 'home', params: {id: '1'}})
            // }
        },
        mounted() {
            // this.goOther();
        },
    }
</script>

<style>
    #app{
        position: relative;
        min-width: 1200px;
    }
    .fr {
        float: right;
    }

    .fl {
        float: left;
    }

    .clear {
        clear: both;
    }

    body::-webkit-scrollbar {
        width: 12px;
        background-color: #f1f1f1;
    }

    body::-webkit-scrollbar-thumb {
        width: 7px;
        background-color: #dddddd;
        border-radius: 3.5px;
    }

    input, button, select, textarea {
        outline: none;
    }

    body {
        font-family: "Microsoft YaHei", 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*min-width: 1200px;*/
        width: 100%;
        height: 100%;
        /*min-height: 820px;*/
        position: relative;
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
