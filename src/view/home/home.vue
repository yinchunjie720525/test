<template>
    <div class="home">
        <!--项目数据-->
        <div class="home-project">
            <ul class="home-project-ul">
                <li class="home-project-li fl">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project8">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/enter.png"/>
                            </div>
                        </div>
                        <div class="right-area fl">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num1' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">待确认</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <li class="home-project-li fl">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project2">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/icon-待洽谈.png"/>
                            </div>
                        </div>
                        <div class="right-area fl">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num2' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">待洽谈</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <li class="home-project-li fl">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project9">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/waiting.png"/>
                            </div>
                        </div>
                        <div class="right-area fl">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num3' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">待分配</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <li class="home-project-li fl">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project3">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/icon-筹备中.png"/>
                            </div>
                        </div>
                        <div class="right-area fl">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num4' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">筹备中</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <li class="home-project-li fl">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project4">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/icon-进行中.png"/>
                            </div>
                        </div>
                        <div class="right-area fl">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num5' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">进行中</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <li class="home-project-li fl marR0">
                    <router-link to="/product/levelMenu2_project/levelMenu3_project5">
                        <div class="left-area fl left-area1">
                            <div class="right-area-bg">
                                <img src="/image/index/icon-待收尾.png"/>
                            </div>
                        </div>
                        <div class="right-area fl marR0">
                            <div class="right-area-bg">
                                <div class="right-area-num">
                                    <countTo :startVal='0' :endVal='projectNum_data.num6' :duration='3000'></countTo>
                                </div>
                                <div class="right-area-text">待收尾</div>
                            </div>

                        </div>
                        <div class="clear"></div>
                    </router-link>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
        <!--考勤&日报-->
        <div class="home-work">
            <!--考勤-->
            <div class="home-work-left fl">
                <div class="home-work-left-title">今日考勤<span>2019.03.08</span><img class="fr"
                                                                                  src="/image/login/icon-more-normal.png"/>
                </div>
                <div class="" style="display: inline-block;margin-right: 15%">
                    <i-circle :size="195" trail-color="#eeeeee" :trail-width="4" :stroke-width="4"
                              :percent="project_percentage.num1" stroke-linecap="square" stroke-color="#4898fa">
                        <div class="demo-Circle-custom">
                            <div class="home-work-left-num">
                                <span class="home-work-left-num1">
                                     <countTo :startVal='0' :endVal='project_work.num1' :duration='3000'></countTo>
                                </span>
                                <span class="home-work-left-num2">/</span>
                                <span class="home-work-left-num3"> <countTo :startVal='0' :endVal='project_work.num2'
                                                                            :duration='3000'></countTo></span>
                            </div>
                            <div class="home-work-left-text">
                                <span class="">已打卡</span>
                                <span class="">/</span>
                                <span class="">未打卡</span>
                            </div>
                        </div>
                    </i-circle>
                    <div style="text-align: center">
                        <div class="home-work-left-btn">普通打卡</div>
                    </div>

                </div>
                <div class="" style="display: inline-block;">
                    <i-circle :size="195" trail-color="#eeeeee" :trail-width="4" :stroke-width="4"
                              :percent="project_percentage.num2" stroke-linecap="square" stroke-color="#4898fa">
                        <div class="demo-Circle-custom">
                            <div class="home-work-left-num">
                                <span class="home-work-left-num1"> <countTo :startVal='0' :endVal='project_work.num3'
                                                                            :duration='3000'></countTo></span>
                                <span class="home-work-left-num2">/</span>
                                <span class="home-work-left-num3"> <countTo :startVal='0' :endVal='project_work.num4'
                                                                            :duration='3000'></countTo></span>
                            </div>
                            <div class="home-work-left-text">
                                <span class="">已打卡</span>
                                <span class="">/</span>
                                <span class="">未打卡</span>
                            </div>
                        </div>
                    </i-circle>
                    <div style="text-align: center">
                        <div class="home-work-left-btn">项目组打卡</div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <!--日报-->
            <div class="home-work-left fr">
                <div class="home-work-left-title">日报<span>2019.03.08</span><img class="fr" src="/image/login/icon-more-normal.png"/>
                </div>
                <div class="" style="display: inline-block;margin-right: 15%">
                    <i-circle :size="195" trail-color="#eeeeee" :trail-width="4" :stroke-width="4"
                              :percent="project_percentage.num1" stroke-linecap="square" stroke-color="#4898fa">
                        <div class="demo-Circle-custom">
                            <div class="home-work-left-num">
                                <span class="home-work-left-num1">
                                     <countTo :startVal='0' :endVal='project_work.num1' :duration='3000'></countTo>
                                </span>
                                <span class="home-work-left-num2">/</span>
                                <span class="home-work-left-num3"> <countTo :startVal='0' :endVal='project_work.num2'
                                                                            :duration='3000'></countTo></span>
                            </div>
                            <div class="home-work-left-text">
                                <span class="">已提交</span>
                                <span class="">/</span>
                                <span class="">未提交</span>
                            </div>
                        </div>
                    </i-circle>
                    <div style="text-align: center">
                        <div class="home-work-left-btn">普通日报</div>
                    </div>

                </div>
                <div class="" style="display: inline-block;">
                    <i-circle :size="195" trail-color="#eeeeee" :trail-width="4" :stroke-width="4"
                              :percent="project_percentage.num2" stroke-linecap="square" stroke-color="#4898fa">
                        <div class="demo-Circle-custom">
                            <div class="home-work-left-num">
                                <span class="home-work-left-num1"> <countTo :startVal='0' :endVal='project_work.num3'
                                                                            :duration='3000'></countTo></span>
                                <span class="home-work-left-num2">/</span>
                                <span class="home-work-left-num3"> <countTo :startVal='0' :endVal='project_work.num4'
                                                                            :duration='3000'></countTo></span>
                            </div>
                            <div class="home-work-left-text">
                                <span class="">已提交</span>
                                <span class="">/</span>
                                <span class="">未提交</span>
                            </div>
                        </div>
                    </i-circle>
                    <div style="text-align: center">
                        <div class="home-work-left-btn">项目组日报</div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <!--项目收款-->
        <div class="project_money">
            <div class="project_money-date">
                <div class="project_money-title fl">近期项目收款分析</div>
                <div class="project_money-active1 fl">
                    <span :class="project_money_data == 1 ? 'project_money-active-this' : ''" data-type='1'
                          @click="show_data">按日</span>
                    <span :class="project_money_data == 2 ? 'project_money-active-this' : ''" data-type='2'
                          @click="show_data">按月</span>
                </div>
                <div class="project_money-active2 fl">
                    <span :class="project_money_data == 3 ? 'project_money-active-this' : ''" data-type='3'
                          @click="show_data">最近7天</span>
                    <span :class="project_money_data == 4 ? 'project_money-active-this' : ''" data-type='4'
                          @click="show_data">最近30天</span>
                </div>
                <div class="clear"></div>
            </div>
            <div id="project_myChart" :style="{width: '100%', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to'

    export default {
        components: {
            countTo: countTo
        },
        name: "home",
        data() {
            return {
                project_money_data: 1,
                projectNum_data: {
                    num1: 50000,
                    num2: 5840,
                    num3: 94842,
                    num4: 8458,
                    num5: 1,
                    num6: 1848
                },
                project_work: {
                    num1: 5000,
                    num2: 1000,
                    num3: 6198,
                    num4: 4,
                },
                project_percentage: {
                    num1: 0,
                    num2: 0,
                    num3: 0,
                    num4: 0,
                },
                project_money: {
                    date_data: ['2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1'],
                    real_data: [5000, 140, 15, 48, 47, 56, 18, 48, 69],
                    date_data2: ['2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1', '2019.3.1'],
                    real_data2: [5000, 1251, 1251, 1251, 47, 56, 18, 48, 69],
                }
            }
        },
        methods: {
            show_data: function (event) {
                this.project_money_data = event.currentTarget.dataset.type;
                if (event.currentTarget.dataset.type == '2') {
                    this.drawLine(this.project_money.real_data2, this.project_money.date_data2)
                } else {
                    this.drawLine(this.project_money.real_data, this.project_money.date_data);
                }
            },
            // 柱状图
            drawLine(real_data, date_data) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('project_myChart'));
                // 绘制图表
                myChart.setOption({
                    grid: {
                        x: 80,
                        y: 50,

                    },
                    color: ['#e7eaef'],
                    tooltip: {
                        trigger: 'item',
                        showDelay: 20,
                        hideDelay: 100,
                        transitionDuration: 0.4,
                        backgroundColor: '#54affc',
                        borderColor: '#54affc',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis: [
                        {
                            name: '时间',
                            type: 'category',
                            data: date_data,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '单位：万元',
                            type: 'value',
                        }
                    ],
                    series: [
                        {
                            name: '收款金额（万元）',
                            type: 'bar',
                            barWidth: '20px',
                            data: real_data,
                            itemStyle: {
                                emphasis: {
                                    color: '#54affc'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,            //显示数字
                                    position: 'top',        //这里可以自己选择位置,
                                    textStyle: {
                                        color: '#54affc'
                                    }
                                }
                            }
                        },

                    ],
                });
            }
        },
        mounted() {
            let that = this;
            that.drawLine(this.project_money.real_data, this.project_money.date_data);
            setTimeout(function () {
                that.project_percentage.num1 += that.project_work.num1 / (that.project_work.num1 + that.project_work.num2) * 100;
                that.project_percentage.num2 += that.project_work.num3 / (that.project_work.num3 + that.project_work.num4) * 100;
            }, 500)

        }
    }
</script>

<style lang="less">
    @import "home.less";
</style>