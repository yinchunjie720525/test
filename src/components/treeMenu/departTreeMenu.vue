<template>
    <ul>
        <li class="depart-tree-li" v-for="(item,index) in list " :key="index">
            <div class="depart-tree-li-div" @click="chose_this(index)">
                <div class="depart-tree-line1 fl depart-tree-line" :style="'padding-left:'+item.level*18+'px'">
                    <img @click.stop="toggle(index)" src="/image/peopleMan/icon-san1.png"
                         :class="scopes[index] ? 'departTree-icon-hide':''" class="departTree-icon"
                         :style="item.children !=null && item.children != '' && item.children.length >0  ? '':'visibility:hidden'"/>
                    <span class="departTree-chose">
                        <img v-if="item.chose" src="/image/bothIcon/icon-checked.png" class="departTree-chose-icon"/>
                    </span>
                    <span class="depart-tree-line1-name">{{item.name}}</span>
                    <div class="clear"></div>
                </div>
                <div class="depart-tree-line2 fl depart-tree-line">
                    <div class="depart-tree-line1-name">{{item.personalNum}}</div>
                </div>
                <div class="depart-tree-line3 fl depart-tree-line">
                    <div class="depart-tree-line1-name" v-for="(item2,index2) in item.responsible" :key="index2">{{item2.name}}</div>
                </div>
                <div class="depart-tree-line4 fl depart-tree-line">
                    <div class="depart-tree-line1-name">{{item.company}}</div>
                </div>
                <div class="depart-tree-line5 fl depart-tree-line">
                    <div class="depart-tree-line1-name">{{item.power}}</div>
                </div>
                <div class="depart-tree-line6 fl depart-tree-line">
                    <div class="depart-tree-line-btn" @click.stop="edit_dialog(index)" :data-id="index">编辑</div>
                </div>
                <div class="clear"></div>
            </div>
            <depart-tree-menu :list="item.children" v-if="scopes[index]"></depart-tree-menu>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "departTreeMenu",
        data() {
            return {
                scopesDefault: [],
                scopes: [],
                chose_num2: 0
            }
        },
        props: {
            list: Array
        },
        methods: {
            // 展示列表
            toggle: function (index) {
                if (this.scopesDefault[index]) {
                    if (this.scopes[index]) {
                        this.$set(this.scopes, index, false)
                    } else {
                        this.$set(this.scopes, index, true)
                    }
                }
            },
            scrop: function () {
                this.list.forEach((item, index) => {
                    this.scopesDefault[index] = false;
                    this.scopes[index] = false;
                    if ('children' in item) {
                        this.scopesDefault[index] = true;
                    } else {
                        this.scopesDefault[index] = true;
                    }
                })
            },
            // 选择
            chose_this: function (index) {
                let that = this;
                that.list[index].chose = !that.list[index].chose;
                that.list.splice(index, 1, that.list[index]);
            },
            // 弹出修改框
            sendData: function (_data) {
                let data = {edit_data:_data,eidt_show:true};
                this.$emit('thisData', data);
            },
            edit_dialog: function (event) {
                this.sendData(this.list[event]);
            },
        },
        created() {
            this.scrop();
        }
    }
</script>

<style lang="less">
    .departTree-icon {
        width: 12px;
        height: 12px;
        margin-top: -4px;
        transition: .4s;
        cursor: pointer;
        transform: rotate(-90deg);
    }

    .departTree-icon-hide {
        transform: rotate(0deg);
    }

    .departTree-chose {
        width: 12px;
        cursor: pointer;
        height: 12px;
        background-image: linear-gradient(0deg, #dedede 0%, #ededed 100%);
        border-radius: 2px;
        border: solid 1px #b2b2b2;
        text-align: center;
        display: inline-block;
        position: relative;
        margin: 0 5px;
    }

    .departTree-chose-icon {
        width: 11px;
        position: absolute;
        top: 1px;
        left: 0;
        height: 9px;
    }

    ul .depart-tree-li-div {
        border-bottom: 1px solid #ededed;
    }

    .depart-tree-line-btn {
        cursor: pointer;
    }

    .depart-tree-line-btn:hover {
        color: #4898fa;
    }

    .depart-tree-li-div {
        display: flex;
        justify-content: center;
        align-items: center;
        .depart-tree-line {
            height: 100%;
        }
    }
</style>