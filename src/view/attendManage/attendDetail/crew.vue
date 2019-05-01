<template>
    <!--排班页面-->
    <div class="arrange">
        <div class="arrange-content">
            <div class="arrange-content-title">
                <button class="arrange-content-title-manage">排班管理</button>
                <span class="arrange-content-title-line">/</span>
                <button class="arrange-content-title-rear">后勤</button>
            </div>
            <div class="line"></div>
            <div class="explain">
                <div class="explain-sub fl">班次说明：</div>
                <div class="explain-show fl">
                    <button class="explain-show-shi">实施：09:00-17:30</button>
                    <button class="explain-show-mo">默认班次：09:00-18:00</button>
                    <button class="explain-show-xiu">休：休息</button>
                </div>
                <div class="clear"></div>
            </div>
            <div class="explain">
                <div class="explain-sub fl">排班周期：</div>
                <div class="explain-show fl">
                    <button class="explain-show-dao">两班倒：实施-默认班次</button>
                    <button class="explain-show-set">设置</button>
                </div>
                <div class="clear"></div>
            </div>
            <div class="explain-data">
                <div class="explain-data-xuan fl">
                    <DatePicker size="small" type="month" placeholder="2019-03" style="width: 90px"></DatePicker>
                </div>
                <div class="explain-data-duo fl">
                    <Checkbox>&nbsp;未排班时，员工可以选择班次打卡<img src="/image/attendance/icon-hint.png" class="explain-data-duo-img"/></Checkbox>
                </div>
                <div class="explain-data-excel fr">
                    <span class="explain-data-excel-title fl">Excel排班：</span>
                    <button class="explain-data-excel-first fl">第一步：导出排班表</button>
                    <span class="explain-data-excel-img fl"><img src="/image/attendance/icon-dao.png"/></span>
                    <button class="explain-data-excel-second fl">第二步，导入排班表</button>
                </div>
                <div class="clear"></div>
            </div>
            <!--排班表-->
            <div class="midder-table">
                <table class="clockTime-table">
                    <tr class="clockTime-table-tr">
                        <td class="clockTime-table-th">姓名</td>
                        <td class="clockTime-table-th4"><div class="th-data">1</div>
                            <div class="th-week">五</div>

                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">2</div>
                            <div class="th-week1">六</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">3</div>
                            <div class="th-week1">天</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">4</div>
                            <div class="th-week">一</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">5</div>
                            <div class="th-week">二</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">6</div>
                            <div class="th-week">三</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">7</div>
                            <div class="th-week">四</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">8</div>
                            <div class="th-week">五</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">9</div>
                            <div class="th-week1">六</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">10</div>
                            <div class="th-week1">天</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">11</div>
                            <div class="th-week">一</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">12</div>
                            <div class="th-week">二</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">13</div>
                            <div class="th-week">三</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">14</div>
                            <div class="th-week">四</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">15</div>
                            <div class="th-week">五</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">16</div>
                            <div class="th-week1">六</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">17</div>
                            <div class="th-week1">日</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">18</div>
                            <div class="th-week">一</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">19</div>
                            <div class="th-week">二</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">20</div>
                            <div class="th-week">三</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">21</div>
                            <div class="th-week">四</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">22</div>
                            <div class="th-week">五</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">23</div>
                            <div class="th-week1">六</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data1">24</div>
                            <div class="th-week1">日</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">25</div>
                            <div class="th-week">一</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">26</div>
                            <div class="th-week">二</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">27</div>
                            <div class="th-week">三</div>
                            <div class="clear"></div>
                        </td>
                        <td class="clockTime-table-th4">
                            <div class="th-data">28</div>
                            <div class="th-week">四</div>
                            <div class="clear"></div>
                        </td>
                    </tr>
                    <tr class="clockTime-table-tr1">
                        <td class="clockTime-table-td1">黄佳丽</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                    </tr>
                    <tr class="clockTime-table-tr2">
                        <td class="clockTime-table-td1">黄佳丽</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                    </tr>
                    <tr class="clockTime-table-tr3">
                        <td class="clockTime-table-td1">黄佳丽</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td">实施</td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                        <td class="clockTime-table-td"></td>
                    </tr>
                </table>
            </div>
            <div class="arrange-tab">
                <button class="but1"><img src="/image/attendance/icon-left.png" class="butImg"/> </button>
                <button class="but2">1</button>
                <button class="but3"><img src="/image/attendance/icon-right.png" class="butImg"/> </button>
            </div>
            <div class="clear"></div>
            <!--排班人数-->
            <div class="count-table">
                <table class="count-table">
                    <tr class="count-table-tr">
                        <td class="count-table-th">班次人数</td>
                        <td class="count-table-th4">1</td>
                        <td class="count-table-th4">2</td>
                        <td class="count-table-th4">3</td>
                        <td class="count-table-th4">4</td>
                        <td class="count-table-th4">5</td>
                        <td class="count-table-th4">6</td>
                        <td class="count-table-th4">7</td>
                        <td class="count-table-th4">8</td>
                        <td class="count-table-th4">9</td>
                        <td class="count-table-th4">10</td>
                        <td class="count-table-th4">11</td>
                        <td class="count-table-th4">12</td>
                        <td class="count-table-th4">13</td>
                        <td class="count-table-th4">14</td>
                        <td class="count-table-th4">15</td>
                        <td class="count-table-th4">16</td>
                        <td class="count-table-th4">17</td>
                        <td class="count-table-th4">18</td>
                        <td class="count-table-th4">19</td>
                        <td class="count-table-th4">20</td>
                        <td class="count-table-th4">21</td>
                        <td class="count-table-th4">22</td>
                        <td class="count-table-th4">23</td>
                        <td class="count-table-th4">24</td>
                        <td class="count-table-th4">25</td>
                        <td class="count-table-th4">26</td>
                        <td class="count-table-th4">27</td>
                        <td class="count-table-th4">28</td>
                    </tr>
                    <tr class="count-table-tr">
                        <td class="count-table-td1"><p class="count-table-td1-p">实施</p></td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">3</td>
                        <td class="count-table-td">4</td>
                        <td class="count-table-td">4</td>
                        <td class="count-table-td">5</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                    </tr>
                    <tr class="count-table-tr">
                        <td class="count-table-td2"><p class="count-table-td2-p">默认班次</p></td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                    </tr>
                    <tr class="count-table-tr">
                        <td class="count-table-td3"><p class="count-table-td3-p">休</p></td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">12</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">1</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td">2</td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                        <td class="count-table-td"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'crew',
        data(){
            return{

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "crew.less";
</style>