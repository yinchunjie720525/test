<template>
    <div class="personal-manage">
        <!--左边部分-->
        <div class="managingPeople-left">
            <!--导航栏选择-->
            <div class="managingPeople-nav">
                <ul class="managingPeople-nav-ul">
                    <li data-id="0" class="managingPeople-nav-li" v-on:click="module_chose"
                        v-bind:class="{ active:0==current }">组织结构
                    </li>
                    <li data-id="1" class="managingPeople-nav-li" v-on:click="module_chose"
                        v-bind:class="{ active:1==current }">角色
                    </li>
                    <li data-id="2" class="managingPeople-nav-li" v-on:click="module_chose"
                        v-bind:class="{ active:2==current }">等级
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
            <!--组织结构模块-->
            <div class="tissueChange" v-if="0==current">
                <Tree :data="srhBlock"></Tree>
                <!--<Tree :data="srhBranch" :render="renderContent"></Tree>-->
            </div>
            <!--角色模块-->
            <div class="rolesChange" v-if="1==current">
                <!--新增角色组&新增角色按钮-->
                <div class="dialog-newRoles-btnOperate">
                    <button type="button" class="butRoles1" @click="newRoles = true">新增角色组</button>
                    <!--<button type="button" class="butRoles2" @click="newRole = true">新增角色</button>-->
                    <button type="button" class="butRoles2"  @click="show_people_member" data-type="4">新增角色</button>

                </div>
                <!--默认、职务、岗位列表-->
                <div class="roles-body">
                    <Tree class="tissueChange" :data="catalog"></Tree>
                </div>
            </div>
            <!--等级模块-->
            <div class="gradeChange" v-if="2==current">
                <div class="gradeOptions">
                    <button class="addGradeOptions" @click="newLevels = true">新增等级组</button>
                    <button class="editorGradeOptions" @click="show_people_member" data-type="5">编辑等级组</button>
                </div>
                <div class="grade-body">
                    <ul class="grade-body-ul">
                        <li class="grade-body-li " :class="grade_show == 1 ? 'grade-body-li-active' : ''"
                            @click="grade_show = 1">
                            <img src="/image/peopleMan/icon-par.png" class="grade-body-li-img"/> 三人禾执行组(369人)
                        </li>
                        <li class="grade-body-li" :class="grade_show == 2 ? 'grade-body-li-active' : ''"
                            @click="grade_show = 2">
                            <img src="/image/peopleMan/icon-par.png" class="grade-body-li-img"/>三人禾商务组(59人)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--组织结构右边部分-->
        <div class="managingPeople-right" v-if="0==current">
            <div class="managingPeople-right-top">
                <span class="title">三人禾集团</span>
                <span class="groups">集团群</span>
                <button class="editorBtn" @click="show_people_member" data-type="2">编辑</button>
                <span class="chaining">
                    <span href="" class="chaining-a">三人禾集团</span>
                    <img src="/image/peopleMan/icon-to.png" class="chainingImg"/>
                    <span href="" class="chaining-a">高端营销</span>
                    <img src="/image/peopleMan/icon-to.png" class="chainingImg"/>
                    <span href="" class="chaining-a">开发部</span>
                </span>
            </div>
            <!--组织结构右边列表-->
            <div class="managingPeopleGenre">
                <button class="addSubDivisions" @click="addSub = true">添加子部门</button>
                <button class="adjust" @click="draggable_show = true; draggable_true =true">调整排序</button>
                <p class="moveLocation" :class="draggable_show ? 'moveLocation_show' : ''">
                    上下移动部门调整位置
                    <span class="save" @click="draggable_true = false;draggable_show = false">保存</span>
                    <span class="revoke" @click="draggable_true =false ;draggable_show = false">撤销</span>
                </p>
                <ul class="menu-ul">
                    <draggable class="draggable-ul" v-model="genre_list" :options="{draggable:'.draggable-move'}">
                        <li :data-id="index" @click="draggable_chose_this" :key="index" class="menu-li" :class=" [draggable_true ? 'draggable-move':'',index == draggable_chose_index ? 'menu-li-active' : '']" v-for="(itemRight, index) in genre_list" >
                            <img :src="itemRight.icon" class="menuImg"/>
                            {{itemRight.name}}({{itemRight.num}})
                        </li>
                    </draggable>
                </ul>
            </div>
            <!--组织结构右边表格-->
            <div class="managingPeopleGenre-tab">
                <div class="managingPeopleGenre-title">部门人员</div>
                <div class="managingPeopleGenre-btn">
                    <button class="addMembers" @click="show_people_member" data-type="1"> 添加成员</button>
                    <button class="batchRemove" @click="del_modal = true">批量删除</button>
                </div>
                <div>
                    <Table :columns="texture" :data="texture_data" size="small" style="width: 680px; margin: 0 auto 22px; border-bottom: none">
                        <!--ref="selection"-->
                        <template slot-scope="{row, index }" slot="action">
                            <div style="color:#fff;background: #56b1fc;border-radius: 4px;display: inline-block;padding: 5px;margin-right: 10px" @click="show_edit_dialog(index)">编辑</div>
                            <div style="color:#fff;background:#ed4014;border-radius: 4px;display: inline-block;padding: 5px" @click="show_del_dialog(index)">删除</div>
                            <div class="clear"></div>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
        <!--角色右边部分-->
        <div class="roles-right" v-if="1==current">
            <div class="roles-right-nav">
                <span class="subAdmin">子管理员（4人）</span>
                <button class="roles-editor" @click="show_people_member" data-type="6">编辑</button>
            </div>
            <div class="roles-right-body">
                <div class="roles-right-body-title">子管理员</div>
                <div class="roles-right-body-btn">
                    <button class="addMembers" @click="show_people_member" data-type="3"> 添加成员</button>
                    <button class="batchRemove" @click="del_modal = true">批量删除</button>
                </div>
                <div>
                    <Table ref="selection" :columns="roles" :data="roles_data" size="small" style="width: 730px; margin: 0 auto 22px; border: none"></Table>
                </div>
            </div>
        </div>
        <!--等级右边部分-->
        <div class="staffGrade-right" v-if="2==current">
            <div class="staffGrade-right-div">
                <div class="staffGrade-title">
                    <p class="staffGrade-title-p">
                        <span class="staffGrade" :class="change_level == 1 ? 'staffGrade-active':''" @click="change_level =1">人员等级</span>
                        <span class="hierarchy" :class="change_level == 2 ? 'staffGrade-active':''" @click="change_level =2">等级制度</span>
                    </p>
                </div>
                <!--人员等级列表-->
                <div v-if="change_level == 1" class="staffGrad-change">
                    <div class="staffGrade-option">
                        <button class="setGrade" @click="setLevel = true">设置等级</button>
                        <button class="addStaff">添加人员</button>
                    </div>
                    <div style="padding-bottom: 10px">
                        <Table :columns="staffGrade" :data="staffGrade_data" size="small" style="width: 730px; margin: 0 auto 22px; border: none">
                            <!--ref="selectioStaffGrade"-->
                            <template slot-scope="{row, index }" slot="option">
                                <div style="color:#fff;background: #56b1fc;border-radius: 4px;display: inline-block;padding: 5px;margin-right: 10px" @click="show_editor_dialog(index)" class="staffGradeEditor">编辑</div>
                                <div style="color:#fff;background: #ed4014;border-radius: 4px;display: inline-block;padding: 5px" @click="level_del_dialog(index)">删除</div>
                                <div class="clear"></div>
                            </template>
                        </Table>
                    </div>
                </div>
                <!--等级制度列表-->
                <div v-if="change_level == 2" class="hierarchy-change">
                    <div class="hierarchy-option">
                        <button class="setGrade" @click="setLevel = true">设置等级</button>
                        <button class="addStaff">添加人员</button>
                        <button class="delGrade" @click="del_modal = true">删除等级</button>
                        <button class="editorStaff">等级排序编辑（上高下低）</button>
                    </div>
                    <div style="padding-bottom: 10px">
                        <Table :columns="hierarchy" :data="hierarchy_data" size="small" style="width: 730px; margin: 0 auto 22px; border: none">
                            <!--ref="selectionHierarchy"-->
                            <template slot-scope="{row, index }" slot="handle">
                                <div style="color:#fff;background: #56b1fc;border-radius: 4px;display: inline-block;padding: 5px;margin-right: 10px" @click="show_level_dialog(index)" class="hierarchyEditor">编辑</div>
                                <div style="color:#fff;background:#ed4014;border-radius: 4px;display: inline-block;padding: 5px" @click="people_del_dialog(index)">删除</div>
                                <div class="clear"></div>
                            </template>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
        <!--删除弹窗-->
        <Modal class="del-list" v-model="del_modal" @on-ok="list_del" @on-cancel="cancel">
            <p slot="header">
                <img src="/image/bothIcon/icon-sigh.png" class="del-list-icon-sigh"/>
                <span class="del-list-sigh-text">提示</span>
            </p>
            <p style="margin: 18px auto">确认删除？（删除后数据无法恢复）</p>
        </Modal>
        <!--添加子部成员-->
        <addSub :addSub='addSub' v-on:dialog_addSub="dialog_addSub_show"></addSub>
        <Drawer  v-model="peopleMembers_show.is_show" width="580px">
            <!--组织结构添加 & 编辑-->
            <addMembers :peopleMembers_show='peopleMembers_show' v-on:dialog_peopleMembers_show = "peopleMembers_show"></addMembers>
        </Drawer>
        <Drawer v-model="editorLevel_show.is_show" v-on:dialog_editorLevel_show = "editorLevel_show" width="580px">
            <!--等级编辑等级组 & 编辑等级-->
            <editorLevel :editorLevel_show="editorLevel_show" v-on:dialog_editorLevel_show = "editorLevel_show"></editorLevel>
        </Drawer>
        <!--新增角色&角色编辑-->
        <Drawer v-model="role_show.is_show" width="580px">
            <newRole :role_show='role_show' v-on:dialog_role_show="role_show"></newRole>
        </Drawer>
        <!--组织结构添加人员角色&角色添加成员-->
        <Modal v-model="addCrew_show.is_show" width="720px">
            <addCrew :addCrew_show="addCrew_show" v-on:dialog_addCrew_show = "addCrew_show"></addCrew>
        </Modal>
        <!--组织结构列表编辑-->
        <editDialog :edit_dialog="edit_dialog" v-on:dialog_edit="show_editBreach"></editDialog>
        <!--新增角色组-->
        <newRoles :newRoles='newRoles' v-on:dialog_newRoles="dialog_newRoles_show"></newRoles>
        <!--新增等级-->
        <newLevels :newLevels='newLevels' v-on:dialog_newLevels="dialog_newLevels_show"></newLevels>
        <!--设置等级-->
        <setLevel :setLevel="setLevel" v-on:dialog_setLevel="dialog_setLevel_show"></setLevel>
        <div class="clear"></div>
    </div>
</template>

<script>
    import addSub from '@/dialog/dialogManagingPeople/addSubdivisions'
    import addMembers from '@/dialog/dialogManagingPeople/addMembers'
    import newRoles from '@/dialog/dialogHR/newRoles'
    import newRole from '@/dialog/dialogHR/newRole'
    import newLevels from '@/dialog/levelManage/newLevels'
    import editorLevel from '@/dialog/levelManage/editorLevel'
    import setLevel from '@/dialog/levelManage/setLevel'
    import editDialog from '@/dialog/department/edit'
    import addCrew from '@/dialog/dialogManagingPeople/addCrew'

    import draggable from 'vuedraggable'
    import {deepClone} from "../../../../assets/js/template";
    export default {
        name: "list",
        components: {
            editDialog:editDialog,
            addCrew:addCrew,
            editorLevel:editorLevel,
            newRole:newRole,
            addSub,
            newRoles,
            // newRole,
            newLevels,
            draggable,
            setLevel,
            addMembers
        },
        data() {
            return {
                draggable_chose_index:0,
                draggable_true:true,
                draggable_show:false,
                genre_list: [
                    {
                    name: '执行部',
                    num: 156,
                    icon: '/image/peopleMan/icon-remove.png'
                },
                    {
                    name: '执行部',
                    num: 157,
                    icon: '/image/peopleMan/icon-remove.png'
                },
                    {
                    name: '执行部',
                    num: 158,
                    icon: '/image/peopleMan/icon-remove.png'
                }],
                grade_show: 1,
                change_level: 1,
                current: 0,
                width: 0,
                sum_width: 0,
                addSub: false,
                people_dialog:{},
                peopleMembers_show:{
                    is_show: false,
                    type:1,
                    title:'',
                    personal_data:[]
                },
                editor_dialog:{},
                edit_dialog:{
                    is_edit_dialog:false,
                    type:1,
                    title:'',
                    edit_data:[]
                },
                addCrew_dialog:{},
                addCrew_show:{
                    is_show:false,
                    type:1,
                    title:'',
                    addCrew_data:[]
                },
                level_dialog:{},
                editorLevel_show:{
                    is_show: false,
                    type:1,
                    title:'',
                    editorLevel_data:[]
                },
                role_dialog:{},
                role_show:{
                    is_show: false,
                    type:1,
                    title:'',
                    role_data:[]
                },
                newRoles: false,
                // newRole: false,
                newLevels: false,
                setLevel: false,
                del_modal: false,
                // 组织结构三人禾集团一级目录
                srhBlock: [
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: true,
                        image: "/image/peopleMan/icon-logo.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（9人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-wen.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: false,
                        image: "/image/peopleMan/icon-wen.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（3人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-wen.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                ],
                // 三人禾西北分公司目录
                // 角色默认一级目录
                catalog: [
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: true,
                        image: "/image/peopleMan/icon-jia.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（9人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-people.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: false,
                        image: "/image/peopleMan/icon-people.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（369人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-people.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: false,
                        image: "/image/peopleMan/icon-people.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（369人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-people.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                    {
                        title: '三人禾集团（369人）',
                        expand: true,
                        selected: false,
                        image: "/image/peopleMan/icon-people.png",
                        render: (h, {node, data, root}) => {
                            return h('span', {
                                    'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                    on: {
                                        click: () => {
                                            this.OnSelect(node, root);
                                        }
                                    }
                                }, [
                                    h('img', {
                                        attrs: {
                                            src: data.image
                                        },
                                        style: {
                                            width: '22px',
                                            height: '22px',
                                            marginTop: '-2px'
                                            // borderRadius:'50%'
                                        }
                                    }),
                                    h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                ]
                            );
                        },
                        children: [
                            {
                                title: '三人禾集团（369人）',
                                expand: true,
                                selected: false,
                                image: "/image/peopleMan/icon-people.png",
                                render: (h, {node, data, root}) => {
                                    return h('span', {
                                            'class': node.node.selected ? 'tree-class tree-class2' : 'tree-class',
                                            on: {
                                                click: () => {
                                                    this.OnSelect(node, root);
                                                }
                                            }
                                        }, [
                                            h('img', {
                                                attrs: {
                                                    src: data.image
                                                },
                                                style: {
                                                    width: '22px',
                                                    height: '22px',
                                                    marginTop: '-2px'
                                                    // borderRadius:'50%'
                                                }
                                            }),
                                            h('span', {style: {lineHeight: '22px', display: 'inline-block'}}, data.title)
                                        ]
                                    );
                                },
                            }
                        ]
                    },
                ],
                // 角色表格表头
                roles: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '部门',
                        key: 'age'
                    },
                    {
                        title: '角色',
                        key: 'address'
                    },
                    {
                        title: '工号',
                        key: 'date'
                    }
                ],
                // 角色表格数据
                roles_data: [
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011'
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011'
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011'
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011'
                    }
                ],
                // 组织结构表格表头
                texture: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '部门',
                        key: 'age'
                    },
                    {
                        title: '角色',
                        key: 'address'
                    },
                    {
                        title: '工号',
                        key: 'date'
                    },
                    {
                        title:'操作',
                        slot:'action',
                        align: 'center'
                    }
                ],
                // 组织结构表格数据
                texture_data: [
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011',
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011',
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011',
                    },
                    {
                        name: '程嵩',
                        age: '企划部',
                        address: '子管理员',
                        date: '011',
                    }
                ],
                // 人员等级表格表头
                staffGrade: [
                    {
                        type: 'selection',
                        width: 30,
                        align: 'center'
                    },
                    {
                        title: '等级',
                        key: 'image',
                        render: (h, params) => {
                            return h('img', {
                                style: {
                                    // width: '28px',
                                    // height: '21px',
                                },
                                attrs: {
                                    src: params.row.image
                                }
                            })
                        }
                    },
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: '部门',
                        key: 'address'
                    },
                    {
                        title: '工号',
                        key: 'id'
                    },
                    {
                        title: '操作',
                        slot: 'option',
                        align: 'center'
                    }
                ],
                // 人员等级表格数据
                staffGrade_data: [
                    {
                        image: "/image/user/icon-header.png",
                        name: '高月龙',
                        address: '执行部',
                        id: '011'
                    },
                    {
                        image:"/image/user/icon-header.png",
                        name: '高月龙',
                        address: '执行部',
                        id: '011'
                    },
                    {
                        image: "/image/user/icon-header.png",
                        name: '高月龙',
                        address: '执行部',
                        id: '011'
                    }
                ],
                // 等级制度表格表头
                hierarchy: [
                    {
                        type: 'selection',
                        width: 30,
                        align: 'center'
                    },
                    {
                        title: '等级名字',
                        key: 'name'
                    },
                    {
                        title: '等级图标',
                        key: 'image',
                        render: (h, params) => {
                            return h('img', {
                                style: {
                                    width: '28px',
                                    height: '21px',
                                    margin: '0 10px'
                                },
                                attrs: {
                                    src: params.row.image
                                }
                            })
                        }
                    },
                    {
                        title: '操作',
                        slot: 'option',
                        align: 'handle'
                    }
                ],
                // 等级制度表格数据
                hierarchy_data: [
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-9.png"
                    },
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-9.png"
                    },
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-8.png"
                    }
                    ,
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-7.png"
                    }
                    ,
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-6.png"
                    }
                    ,
                    {
                        name: '堂主',
                        image: "/image/peopleMan/rank1-6.png"
                    }
                ]
            }
        },
        methods: {
            //编辑部门弹窗返回的参数
            show_editBreach:function(msg){
                this.edit_dialog = msg;
            },
            // 编辑等级组
            dialog_editorLevel_show:function (msg) {
                this.editorLevel_show = msg;
            },
            // 编辑
            show_people_member:function(event){
              let type =  event.currentTarget.dataset.type;
                console.log(type);
                console.log(event);
              // 添加人员
              if (type=== 1||type ==='1'){
                  let data = { name:'',age:'',address:'',data:''};
                  this.peopleMembers_show.people_dialog=deepClone(data);
                  this.peopleMembers_show.title = '添加人员';
                  this.peopleMembers_show.type = type;
                  this.peopleMembers_show.is_show = true;
                  console.log(type);
              }
              //组织结构编辑部门
              else if (type=== 2||type ==='2'){
                  let data = { name:'',prev_name:'',responsible:''};
                  this.edit_dialog.edit_data = deepClone(data);
                  this.edit_dialog.type = type;
                  this.edit_dialog.is_edit_dialog = true;
              }
              //添加角色成员
              else  if (type=== 3||type ==='3'){
                    this.addCrew_show.type = type;
                    this.addCrew_show.is_show = true;
                    console.log(type);
              }
              //添加角色&角色-编辑部门
              else if (type=== 4||type ==='4'){
                  this.role_show.title = '添加角色'
                  this.role_show.type = type;
                  this.role_show.is_show = true;
              }
              else if (type=== 6||type ==='6'){
                  this.role_show.title = '编辑角色'
                  this.role_show.type = type;
                  this.role_show.is_show = true;
              }
              //等级编辑
              else if (type=== 5||type ==='5'){
                  let data = { image:'',name:'',address:'',id:''};
                  this.editorLevel_show.level_dialog = deepClone(data);
                  this.editorLevel_show.title = '编辑等级组';
                  this.editorLevel_show.type = type;
                  this.editorLevel_show.is_show = true;
              }
            },
            // 组织结构列表-编辑
            show_edit_dialog:function(index){
                let data =  deepClone(this.texture_data[index]);
                this.peopleMembers_show.type = 2;
                this.peopleMembers_show.people_dialog = deepClone(data);
                this.peopleMembers_show.title = '编辑人员'
                this.peopleMembers_show.is_show = true;
                console.log(data);
            },
            // 人员等级列表-编辑
            show_editor_dialog:function(index){
                console.log(index)
                let data =  deepClone(this.staffGrade_data[index]);
                console.log(data)
                this.editorLevel_show.type = 7;
                this.editorLevel_show.level_dialog = deepClone(data);
                this.editorLevel_show.title = '编辑人员等级'
                this.editorLevel_show.is_show = true;
                console.log(data);
            },
            // 等级制度列表-编辑组
            show_level_dialog:function(index) {
                console.log(index)
                let data = deepClone(this.hierarchy_data[index]);
                this.editorLevel_show.type = 8;
                this.editorLevel_show.level_dialog= deepClone(data);
                this.editorLevel_show.title = '编辑制度等级'
                this.editorLevel_show.is_show = true;
                console.log(data);
            },
            // 组织结构列表内容删除
            show_del_dialog:function(index){
                this.texture_data.splice(index,1);
            },
            // 人员等级列表内容删除
            level_del_dialog:function(index){
                this.staffGrade_data.splice(index,1);
            },
            // 等级制度列表内弄删除
            people_del_dialog:function(index){
                this.hierarchy_data.splice(index,1);
            },
            // 组织架构下选中子部门列表
            draggable_chose_this:function(event){
                this.draggable_chose_index = event.currentTarget.dataset.id ;
            },
            // 选中等级目录
            is_grade_show: function () {
                this.grade_show = 2;
                console.log(this.grade_show);
            },
            // 组织架构等列表选中状态
            OnSelect(data, root) {
                for (let i = 0; i < root.length; i++) {
                    // this.srhBlock[i].
                    if (root[i].nodeKey == data.nodeKey) {
                        data.node.selected = true;
                    } else {
                        root[i].node.selected = false
                    }
                }
                // console.log(this.srhBlock['selected'])
            },
            // 模块切换
            module_chose: function (event) {
                this.current = event.target.dataset.id;
            },
            // 添加子部门
            dialog_addSub_show: function (msg) {
                this.addSub = msg;
            },
            // 新增角色组
            dialog_newRoles_show: function (msg) {
                this.newRoles = msg;
            },
            // 新增角色
            dialog_newRole_show: function (msg) {
                this.role_show = msg;
            },
            // 新建等级组
            dialog_newLevels_show: function (msg) {
                console.log(msg);
                this.newLevels = msg;
            },
            // 设置等级
            dialog_setLevel_show:function (msg) {
                this.setLevel = msg;
            },
            // 删除
            list_del :function() {
                // this.$Message.info('删除成功');
            },
            cancel () {
                // this.$Message.info('');
            },
        }
    }
</script>

<style lang="less">
    @import "list.less";
    .managingPeople-left .tissueChange,
    .managingPeople-left .rolesChange,
    .managingPeople-left .gradeChange {
        text-align: left;
        padding: 0 15px;
        margin-left: -10px;
    }
    .del-list{
        text-align: center;
        .ivu-modal-header{
            padding: 10px 16px 11px;
            background-color: #e7eaef;
            border-radius: 8px 8px 0px 0px;
            .del-list-sigh-text{
                font-size: 18px;
                color: #222222;
                font-weight: normal;
                padding-top: 18px;
            }
            .del-list-icon-sigh{
                margin: 0 5px 0 0;
            }
        }
        .ivu-icon ivu-icon-ios-close{
            top: -5px;
        }
        .ivu-modal-body{
            color: #222222;
            font-size: 14px;
            text-align: center;
        }
        .ivu-modal-footer{
            border: 0;
            padding: 0px 18px 12px 18px;
            text-align: center;
            .ivu-btn{
                line-height: 14px;
                padding: 8px 22px;
                background-color: #ffffff;
                border-radius: 4px;
                border: solid 1px #bababa;
                color: #bababa;
                font-size: 14px;
            }
            .ivu-btn:hover{
                border: solid 1px #ff5f5f;
                color: #ff5f5f;
            }
        }
    }
    .ivu-table-cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        box-sizing: border-box;
        padding: 5px 18px;
    }
</style>