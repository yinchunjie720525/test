<template>
    <div class="level-row-list-f">
        <!--搜索-->
        <div class="level-row-list-f-search fl">
            <img src="/image/bothIcon/icon-search.png" class="fl level-row-list-f-search-icon"/>
            <input class="level-row-list-f-input fl" placeholder="搜索..."/>
            <div class="clear"></div>
        </div>
        <!--用户信息-->
        <div class="level-row-list-f-user fr">
            <Dropdown class="fl">
                <a href="javascript:void(0)">
                    <img src="/image/user/user.png" class="level-row-list-f-user-img fl"/>
                    <img src="/image/bothIcon/icon-slide.png" class="level-row-list-f-icon-down fl"/>
                    <span class="level-row-list-f-userName fl">秦飞</span>
                    <img src="/image/bothIcon/icon-supervip.png" class="level-row-list-f-icon-vip fl"/>
                    <div class="clear"></div>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>修改个人信息</DropdownItem>
                    <DropdownItem><div @click="edit_login">退出</div></DropdownItem>
                    <!--<DropdownItem disabled>豆汁儿</DropdownItem>-->
                    <!--<DropdownItem>冰糖葫芦</DropdownItem>-->
                    <!--<DropdownItem divided>北京烤鸭</DropdownItem>-->
                </DropdownMenu>
            </Dropdown>
            <span class="level-row-list-f-userStyle fl">管理员</span>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "list",
        methods:{
            edit_login:function () {
                console.log(45);
                this.$router.push({name:"login"});
            }
        }
    }
</script>

<style lang="less">
    .level-row-list-f {
        /*min-width: 1200px;*/
        border-bottom: 1px solid #eeeeee;
        background: #ffffff;
        height: 56px;
        width: 100%;
        position: relative;
        z-index: 19;
        padding-left: 64px;
        .level-row-list-f-search {
            margin: 11px 0 0 19px;
            width: 207px;
            height: 30px;
            background-color: #eeeeee;
            border-radius: 15px;
            padding: 7.5px 0;
            .level-row-list-f-search-icon {
                width: 15px;
                height: 15px;
                margin: 0 6px 0 15px
            }
            .level-row-list-f-input {
                color: #333333;
                font-size: 12px;
                line-height: 12px;
                border: 0;
                padding: 0;
                background: #eeeeee;
                width: 160px;
                margin-top: -1px;
            }
            .level-row-list-f-input::placeholder {
                color: #bfc0c1;
            }
        }
        .level-row-list-f-user {
            .level-row-list-f-user-img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
                margin-top: 10px;
            }
            .level-row-list-f-icon-down {
                width: 8px;
                margin: 24px 6px 0;
            }
            .level-row-list-f-userName {
                color: #222222;
                font-size: 14px;
                margin-top: 20px;
                line-height: 14px;
            }
            .level-row-list-f-icon-vip {
                width: 16px;
                margin: 19px 10px 0;
            }
            .level-row-list-f-userStyle {
                width: 60px;
                margin: 14px 14px 0 0;
                height: 24px;
                background: #418bfa;
                background: linear-gradient(0deg, #418bfa 0%, #56b1fc 100%);
                border-radius: 12px;
                color: #ffffff;
                font-size: 12px;
                line-height: 24px;
                display: inline-block;
                text-align: center;
            }
        }
    }
</style>