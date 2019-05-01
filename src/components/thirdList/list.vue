<template>
    <div class="level3-list">
        <router-view/>
        <!--<draggable class="draggable-ul" v-model="data_list" :move="getdata" :options="options"-->
                   <!--@update="datadragEnd($event, 'left')" @input="handleListChange($event, 'left')">-->
            <!--<div class="draggable-li" @input="handleListChange($event, 'left')" v-for="(itemLeft, index) in data_list"-->
                 <!--v-bind:key="`drag_li1_${index}`">-->
                <!--<slot name="left" :itemLeft="itemLeft">{{ itemLeft.name}}</slot>-->
            <!--</div>-->
        <!--</draggable>-->
        <!--<draggable class="draggable-ul" v-model="data_list2" :move="getdata" :options="options"-->
                   <!--@update="datadragEnd($event, 'left')" @input="handleListChange($event, 'left')">-->
            <!--<div class="draggable-li" @input="handleListChange($event, 'left')" v-for="(itemRight, index) in data_list2"-->
                 <!--v-bind:key="`drag_li2_${index}`">-->
                <!--<slot name="right" :itemRight="itemRight">{{ itemRight.name }}</slot>-->
            <!--</div>-->
        <!--</draggable>-->
        <!--<div class="clear"></div>-->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    // import draggable from 'vuedraggable'
    export default {
        name: "list",
        data() {
            return {
                width: 0,
                // data_list: [{id: 1, name: 'de1'}, {id: 1, name: 'de2'}, {id: 1, name: 'de3'}, {
                //     id: 1,
                //     name: 'de4'
                // }, {id: 1, name: 'de5'}, {id: 1, name: 'de6'}],
                // data_list2: [{id: 1, name: 'de7'}, {id: 1, name: 'de8'}, {id: 1, name: 'de9'}, {
                //     id: 1,
                //     name: 'de10'
                // }, {id: 1, name: 'de11'}, {id: 1, name: 'de12'}],
                // options: {group: 'drag_list'}
            }
        },
        methods: {
            // 托拉拽
            getdata(evt) {
                console.log(evt)
            },
            handleListChange(value, type) {
                if (type === 'left') this.$emit('update:list1', value)
                else this.$emit('update:list2', value)
                // console.log(this.data_list)
            },
            datadragEnd(event, type) {
                const srcClassName = (event.srcElement || event.target).classList[0]
                const targetClassName = event.to.classList[0]
                let src = ''
                let target = ''
                if (srcClassName === targetClassName) {
                    if (type === 'left') {
                        src = 'left'
                        target = 'left'
                    } else {
                        src = 'right'
                        target = 'right'
                    }
                } else {
                    if (type === 'left') {
                        src = 'left'
                        target = 'right'
                    } else {
                        src = 'right'
                        target = 'left'
                    }
                }
                this.$emit('on-change', {
                    src: src,
                    target: target,
                    oldIndex: event.oldIndex,
                    newIndex: event.newIndex
                })
                // console.log(35);
                // console.log(this.data_list);
            },
        },
        components: {
            // draggable
        },
        mounted(){
            // console.log(25)
            // console.log(this.$route)
            // console.log(25)
        }
    }
</script>

<style lang="less">
    .level3-list {
        overflow: auto;
        /*background: #000000;*/
        height: calc(100%);
        position: absolute;
        left: 304px;
        top: 0;
        width: calc(100% - 304px);
        padding-top: 56px;
        /*.draggable-ul {*/
            /*width: 300px;*/
            /*min-height: 500px;*/
            /*margin: 0 30px 0 0;*/
            /*float: left;*/
            /*border:1px solid #eeeeee;*/
            /*.draggable-li {*/
                /*cursor: pointer;*/
                /*border: 1px solid #dcdee2;*/
                /*background: #fff;*/
                /*font-size: 14px;*/
                /*position: relative;*/
                /*-webkit-transition: all 0.2s ease-in-out;*/
                /*transition: all 0.2s ease-in-out;*/
                /*!*padding: 16px;*!*/
                /*width: 80px;*/
                /*height: 80px;*/
                /*line-height: 80px;*/
                /*animation: rotateLR 1.5s infinite linear;*/
                /*display: inline-block;*/
                /*border-radius: 50%;*/
            /*}*/
            /*.draggable-li2 {*/
                /*margin-left: 50px;*/
            /*}*/
        /*}*/
    }

    @-webkit-keyframes rotateLR {
        25% {
            -webkit-transform: rotate(-20deg);
        }
        50%, 100% {
            -webkit-transform: rotate(0);
        }
        75% {
            -webkit-transform: rotate(20deg);
        }
    }

    @keyframes rotateLR {
        25% {
            transform: rotate(-20deg);
        }
        50%, 100% {
            transform: rotate(0);
        }
        75% {
            transform: rotate(20deg);
        }
    }
</style>