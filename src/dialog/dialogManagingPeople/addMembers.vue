<template>
        <div class="dialog-addMembers">
            <div class="dialog-addMembers-title">{{peopleMembers_show.title}}</div>
            <div class="dialog-addMembers-body">
                <div class="dialog-addMembers-message">主要展示信息</div>
                <div class="dialog-addMembers-addName">
                    <div class="dialog-addMembers-addName-left">
                        <div class="attend">
                            <div class="addName fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>姓名：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder="张三"  class="inpNamed" :value="peopleMembers_show.personal_data.name"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>部门：</span>
                            </div>
                            <div class="add-inpNamed fl">
                                <div @click="show_depart_chose" data-type="1"  style="line-height: 34px;cursor: pointer; width: 279px;text-align: left" :style="prev_name != null && prev_name != '' ? '':' color:#999999'" class="add-inpName fl">
                                    {{prev_name != null && prev_name != '' ? prev_name : '请选择上级部门'}}
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>职位：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder="执行部"  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>邮箱：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="dialog-addMembers-message">非主要信息</div>
                <div class="dialog-addMembers-addName">
                    <div class="dialog-addMembers-addName-left">
                        <div class="attend">
                            <div class="addName fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>角色：</span>
                            </div>
                            <div class="add-inpNamed fl">
                                <div class="add-inpName" style="text-align: left" @click="show_depart_chose" data-type="2">
                                    {{peopleMembers_show.personal_data.address !='' && peopleMembers_show.personal_data.address != null ? peopleMembers_show.personal_data.address :'请选择' }}
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>工号：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed" :value="peopleMembers_show.personal_data.data"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <img src="/image/peopleMan/icon-star.png" class="imgIcon"/>
                                <span>手机：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>分机号：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>办公地点：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>入职时间：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>备注：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl"><span>对外职位：</span></div>
                            <div class="add-inpNamed danxuan fl" style="border: none">
                                <RadioGroup class="xuanzhe" v-model="disabledGroup" @on-change="job">
                                    <Radio label="对内部职位同步"></Radio>
                                    <Radio label="设置专属对外职位"></Radio>
                                </RadioGroup>
                                <div class="clear"></div>
                            </div>
                            <div class="add-inpNamed newAdd fl" v-show="job_show"><!---->
                                <input type="text" class="inpNamed">
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>号码隐藏<img src="/image/peopleMan/icon-help.png" class="imgIcon"/>：</span>
                            </div>
                            <div class="add-inpNamed danxuan fl" style="border: none">
                                <RadioGroup class="xuanzhe" v-model="switchGroup">
                                    <Radio label="开"></Radio>
                                    <Radio label="关"></Radio>
                                </RadioGroup>
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>高管模式<img src="/image/peopleMan/icon-help.png" class="imgIcon"/>：</span>
                            </div>
                            <div class="add-inpNamed danxuan fl" style="border: none">
                                <RadioGroup class="xuanzhe" v-model="groups">
                                    <Radio label="开"></Radio>
                                    <Radio label="关"></Radio>
                                </RadioGroup>
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="attend">
                            <div class="addName fl">
                                <span>员工UserID<img src="/image/peopleMan/icon-help.png" class="imgIcon"/>：</span>
                            </div>
                            <div class="add-inpNamed fl"><input type="text" placeholder=""  class="inpNamed"/></div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-addMembers-operate">
                <button class="saveButton" @click="save_data">保存</button>
                <button class="saveAddButton" @click="conturn_data">保存并继续添加</button>
                <button class="cancelButton" @click="quxiao_data">取消</button>
            </div>
            <Modal v-model="depart_chose_show.is_show" footer-hide="" class="add-dialog-middle-project" width="720" >
                <!--选择部门-->
                <choseDepart v-if="depart_chose_show.type === 1 || depart_chose_show.type === '1'" :depart_chose_show="depart_chose_show"  v-on:prev_data="get_prev_name"></choseDepart>
                <!--选择人员-->
                <addCrew v-if="depart_chose_show.type === 2 || depart_chose_show.type === '2'" :depart_chose_show = "depart_chose_show" v-on:prev_data = "get_prev_name"></addCrew>
            </Modal>
        </div>
</template>

<script>
    import choseDepart from '@/dialog/dialogManagingPeople/chooseDepart'
    import addCrew from '@/dialog/dialogManagingPeople/addCrew'

    import {deepClone} from "../../assets/js/template";

    export default {
        name:'addMember',
        data() {
            return {
                chooseDepart: false,
                chooseRoless: false,
                job_show: false,
                disabledGroup: '对内部职位同步',
                switchGroup:'开',
                groups:'开',
                prev_name:'',
                depart_chose_show:{
                    is_show:false,
                    type:-1,
                    add_people:[]
                }
            }
        },
        props:{
            peopleMembers_show: {}
        },
        methods:{
            show_depart_chose:function (event) {
                let type = event.currentTarget.dataset.type;
                // 部门选择
                if(type === 1 || type === '1'){
                    console.log('')
                    this.depart_chose_show.is_show = true;
                    this.depart_chose_show.type = type;
                    console.log(this.depart_chose_show.chose_people)
                }
                //弹出添加角色
                else if( type === 2 || type ==='2'){
                    // this.depart_chose_show.chose_people = deepClone(this.edit_dialog);
                    this.depart_chose_show.is_show = true;
                    this.depart_chose_show.type = type;
                }
                console.log(123)
            },
            get_prev_name:function(msg){
                //部门选择
                let type = this.depart_chose_show.type;
                if(type === 1 || type === '1'){
                    this.prev_name = deepClone(msg)[0].name;
                }
                else if( type === 2 || type ==='2'){
                    // this.edit_dialog.edit_data= deepClone(msg);
                    this.edit_dialog= deepClone(msg);
                }
            },
            dialog_chooseDepart_show:function (msg) {
                this.chooseDepart = msg;
            },
            dialog_chooseRoless_show:function (msg) {
                this.chooseRoless = msg;
            },
            job:function () {
                this.job_show = !this.job_show;
            },
            conturn_data:function () {
                this.depart_chose_show.is_show = false
            },
            save_data:function () {
                this.depart_chose_show.is_show = false
            },
            quxiao_data:function () {
                this.depart_chose_show.is_show = false
            }
        },
        components:{
            choseDepart:choseDepart,
            addCrew:addCrew
        }
    }
</script>

<style lang="less">
    @import "./addMembers.less";
</style>