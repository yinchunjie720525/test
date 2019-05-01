<template>
    <div class="login-box">
        <div class="verifyLogin">
            <!--头像-->
            <div class="logo">
                <img class="logo-icon" src="/image/login/login-logo.png"/>
            </div>
            <!--标题-->
            <div class="title">
                <h5>登录OA系统账号</h5>
            </div>

            <!--登录方式-->
            <div class="maxim">
                <ul class="maxim-ul">
                    <!--<li data-id="0" class="maxim-li" v-on:click="login_chose" v-bind:class="{active:0==current}">验证码登录</li>-->
                    <li data-id="1" class="maxim-li" v-on:click="login_chose" v-bind:class="{active:1==current }">
                        账号密码登录
                    </li>
                    <!--<li data-id="2" class="maxim-li" v-on:click="login_chose" v-bind:class="{active:2==current }">扫码登录</li>-->
                    <li data-id="3" class="maxim-li" v-on:click="login_chose" v-bind:class="{active:3==current }">注册账号
                    </li>
                    <div class="clearfix"></div>
                    <li class="login-title-move maxim-li" :style="login_active_left">
                        <div class="bgColor"></div>
                    </li>
                </ul>
            </div>

            <!--手机登录界面-->
            <div class="tel1" v-if="0==current">
                <div class="tel">
                    <div class="tel-left">
                        <span>+86</span>
                    </div>
                    <div class="tel-right">
                        <input type="number" :value="phone" placeholder="请输入您的手机号" name="username" class="inp1"
                               @input="showTel"/>
                    </div>
                </div>
                <div class="captcha">
                    <div class="captcha-left">
                        <input type="text" :value="vCode" placeholder="请输入验证码" name="uservcode" class="inp2"
                               @input="showvCode"/>
                    </div>
                    <div class="captcha-right" v-bind:class="{transparency:isTransparency}" @click="getCode">发送验证码</div>
                </div>
                <div class="wrong-info" v-if="is_wrong">{{wrong_text}}</div>
                <div class="lbtn" v-bind:class="{transparency:isTransparency1}" @click="login" data-type="2">登录</div>
            </div>

            <!--账号密码登录界面-->
            <div class="tel2" v-if="1==current">
                <div class="tel-01">
                    <div class="tel-left-01">
                        <img src="/image/login/account.png"/>
                    </div>
                    <div class="tel-right-01">
                        <input type="text" placeholder="请输入您的账号" :value="userName" name="username"
                               @input="inputUserName" class="inp3"/>
                    </div>
                </div>
                <div class="captcha-01">
                    <div class="captcha-left-01">
                        <img src="/image/login/icon-password.png"/>
                    </div>
                    <div class="captcha-right-01">
                        <input type="password" :value="password" placeholder="请输入密码" name="username" class="inp4"
                               @input="showPassWord"/>
                    </div>
                </div>
                <div class="wrong-info" v-if="is_wrong">{{wrong_text}}</div>
                <div class="lbtn" v-bind:class="{transparency:isTransparency2}" @click="login" data-type="1">登录</div>
            </div>

            <!--扫码登录界面-->
            <div class="tel3" v-if="2==current">
                <div class="qrCode">
                    <img src="/image/bothIcon/icon-assembly2.png" class="ewmImg"/>
                </div>
                <p class="p1">请使用微信扫码登录<img src="/image/bothIcon/icon-checked.png"/></p>
            </div>

            <!--账号注册-->
            <div class="tel1" v-if="3==current">
                <div class="tel-01">
                    <div class="tel-left-01">
                        <img src="/image/login/account.png"/>
                    </div>
                    <div class="tel-right-01">
                        <input type="text" placeholder="请输入您注册的账号" :value="re_userName" name="username"
                               @input="reUserName" class="inp3"/>
                    </div>
                </div>
                <div class="captcha-01">
                    <div class="captcha-left-01">
                        <img src="/image/login/icon-password.png"/>
                    </div>
                    <div class="captcha-right-01">
                        <input type="password" :value="re_passWord" placeholder="请输入密码" name="username" class="inp4"
                               @input="rePassWord"/>
                    </div>
                </div>
                <div class="captcha-01">
                    <div class="captcha-left-01">
                        <img src="/image/login/icon-password.png"/>
                    </div>
                    <div class="captcha-right-01">
                        <input type="password" :value="re_passWord2" placeholder="请重复输入密码" name="username" class="inp4"
                               @input="rePassWord2"/>
                    </div>
                </div>
                <div class="tel">
                    <div class="tel-left">
                        <span>+86</span>
                    </div>
                    <div class="tel-right">
                        <input type="number" :value="re_phone" placeholder="请输入您的手机号" name="username" class="inp1"
                               @input="rePhone"/>
                    </div>
                </div>
                <div class="wrong-info" v-if="is_wrong">{{wrong_text}}</div>
                <div class="lbtn" v-bind:class="{transparency:isTransparency3}" @click="login" data-type="0">注册</div>
            </div>
            <!--底部-->
            <div class="copy">三人禾的战神们辛苦了</div>
        </div>
    </div>
</template>

<script>
    import {postRuquest} from '@/api/data'

    export default {
        data() {
            return {
                current: 1,
                login_active_left: '',
                isTransparency: true,
                isTransparency1: true,
                isTransparency2: true,
                isTransparency3: true,
                phone: '',
                vCode: '',
                password: '',
                userName: '',

                wrong_text: '',
                is_wrong: false,

                re_userName: '',
                re_passWord: '',
                re_passWord2: '',
                re_phone: '',
                // value3:''
            }
        },
        methods: {

            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            },

            // show_value:function(date){
            //     this.value3=date;
            //     console.log(this.value3)
            // },
            // 账号登录切换&添加蓝色横条
            login_chose: function (event) {
                this.current = event.target.dataset.id;
                this.login_active_left = " transform: translateX(" + event.srcElement.offsetLeft + "px);"
                this.is_wrong = false;
                this.wrong_text = '';
            },

            // 填写手机号码
            showTel(event) {
                this.phone = event.srcElement.value;
                this.showButton();
            },
            // 填写验证码
            showvCode(event) {
                this.vCode = event.srcElement.value;
                this.showButton();
            },
            // 填写密码
            showPassWord(event) {
                this.password = event.srcElement.value;
                this.showButton();
            },
            // 填写账号
            inputUserName(event) {
                this.userName = event.srcElement.value;
                this.showButton();
            },
            // 注册账号
            reUserName(event) {
                this.re_userName = event.srcElement.value;
                this.showButton();
            },
            // 注册密码
            rePassWord(event) {
                this.re_passWord = event.srcElement.value;
                this.showButton();
            },
            // 重复密码
            rePassWord2(event) {
                this.re_passWord2 = event.srcElement.value;
                this.showButton();
            },
            // 注册手机号
            rePhone(event) {
                this.re_phone = event.srcElement.value;
                this.showButton();
            },
            // 按钮允许点击
            showButton() {
                // 手机号码&验证码
                this.isTransparency = this.phone == null || this.phone == '' ? true : false;
                this.isTransparency1 = this.vCode == null || this.vCode == '' || this.phone == null || this.phone == '' ? true : false;
                // 账号密码
                this.isTransparency2 = this.password == null || this.password == '' || this.userName == null || this.userName == '' ? true : false;

                // 注册
                this.isTransparency3 = this.re_userName == null || this.re_userName == '' || this.re_passWord == null || this.re_passWord == '' || this.re_passWord2 == null || this.re_passWord2 == '' || this.re_phone == null || this.re_phone == '' ? true : false;
            },
            // 获取验证码
            getCode() {
                if (this.phone != null && this.phone != '') {
                    alert('获取验证码')
                }
            },
            // 登录
            login() {
                this.is_wrong = false;
                this.wrong_text = '';
                this.start();
                // 短信验证码登录
                if (this.phone != null && this.phone != '' && this.vCode != null && this.vCode != '' && this.current == 0) {
                    console.log(123);
                    this.finish();
                }
                // 账号密码登录
                else if (this.userName != null && this.userName != '' && this.password != null && this.password != '' && this.current == 1) {
                    // console.log(34);
                    let data = {
                        acc: this.userName,
                        pwd: this.password,
                    }
                    postRuquest('/Acc/Login',data).then(res => {
                        this.finish();
                        if (res.data.code === 500 || res.data.code === '500') {
                            this.is_wrong = true;
                            this.wrong_text = res.data.detail;
                        }
                        else if (res.data.code === 200 || res.data.code === '200') {
                            this.$Message.success('登录成功~~!');
                            this.$router.push({name:"home"})
                        }
                    }).catch()
                }
                // 注册
                else if (this.re_userName != null || this.re_userName != '' || this.re_passWord != null || this.re_passWord != '' || this.re_passWord2 != null || this.re_passWord2 != '' || this.re_phone != null || this.re_phone != '' && this.current == 3) {
                    if (this.re_passWord == this.re_passWord2) {
                        let data = '{"acc":"'+this.re_userName+'","pwd": "'+this.re_passWord + '","phone": "'+this.re_phone+'","state":1}';
                        postRuquest('/Acc/AccRegister',JSON.parse(data)).then(res => {
                            this.finish();
                            if (res.data.code === 500 || res.data.code === '500') {
                                this.is_wrong = true;
                                this.wrong_text = res.data.detail;
                            }
                            // 成功
                            else if (res.data.code === 200 || res.data.code === '200') {
                                this.$Message.success('恭喜您,注册成功~~!');
                                this.current = 1;
                            }
                        }).catch()
                    } else {
                        this.is_wrong = true;
                        this.wrong_text = '您输出的两次密码不一致,请重新输入';
                    }
                }
            }
        },
        created() {
            let that = this;
            document.onkeydown = function () {
                var key = window.event.keyCode;
                if (key == 13) {
                    that.login();
                }
            }
        }
    }
</script>

<style lang="less">
    @import "./login.less";
</style>