import Main from '@/view/index'
import menu from '@/view/menu'
import projectMenu from '@/view/project/menu'

const routers = [
    {
        // 默认跳转的主页
        path: '/',
        name: 'home',
        meta: {
            title: '主页',
            hideInMenu: false,
            level:0,
            icon: '/image/index/home2.png',
            icon2: '/image/index/home.png'
        },
        components: {
            default: Main,
        },
        redirect: {name: 'index_home'},
        children:[{
            path: 'home',
            name: 'index_home',
            meta: {
                title: '首页',
                hideInMenu: false,
                level:1,
            },
            component: () => import('@/view/home/home')
        }]
    },
    {
        // 项目管理
        path: '/product',
        name: 'product',
        meta: {
            title: '项目管理',
            hideInMenu: false,
            level:0,
            icon: '/image/index/icon_xiangmu_def.png',
            icon2: '/image/index/icon_xiangmu_selected.png',
        },
        components: {
            default: Main,//一级导航
        },
        redirect: {name: 'levelMenu2_project'},
        children: [
            {
                path: 'levelMenu2_project',
                name: 'levelMenu2_project',
                meta: {
                    title: '所有项目',
                    hideInMenu: false,
                    level:1,
                    icon: '/image/bothIcon/icon-assembly.png'
                },
                component: projectMenu,//二级导航
                redirect: {name: 'levelMenu3_project'},
                children: [
                    {
                        path: 'levelMenu3_info',
                        name: 'levelMenu3_info',
                        meta: {
                            title: '意向信息',
                            hideInMenu: false,
                            num:19,
                            icon: '/image/index/idea.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project',
                        name: 'levelMenu3_project',
                        meta: {
                            title: '所有项目',
                            hideInMenu: false,
                            icon: '/image/index/icon-项目管理.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project8',
                        name: 'levelMenu3_project8',
                        meta: {
                            title: '待审批',
                            hideInMenu: false,
                            icon: '/image/index/enter.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project2',
                        name: 'levelMenu3_project2',
                        meta: {
                            title: '待洽谈',
                            hideInMenu: false,
                            icon: '/image/index/icon-待洽谈.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project9',
                        name: 'levelMenu3_project9',
                        meta: {
                            title: '待分配',
                            hideInMenu: false,
                            icon: '/image/index/waiting.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project3',
                        name: 'levelMenu3_project3',
                        meta: {
                            title: '筹备中',
                            hideInMenu: false,
                            icon: '/image/index/icon-筹备中.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project4',
                        name: 'levelMenu3_project4',
                        meta: {
                            title: '进行中',
                            hideInMenu: false,
                            icon: '/image/index/icon-进行中.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project5',
                        name: 'levelMenu3_project5',
                        meta: {
                            title: '待收尾',
                            hideInMenu: false,
                            icon: '/image/index/icon-待收尾.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project6',
                        name: 'levelMenu3_project6',
                        meta: {
                            title: '已完成',
                            hideInMenu: false,
                            icon: '/image/index/icon-项目完成.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project7',
                        name: 'levelMenu3_project7',
                        meta: {
                            title: '未完成',
                            hideInMenu: false,
                            icon: '/image/index/icon-未完成.png'
                        },
                        component: () => import('@/view/project/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_infoUp',
                        name: 'levelMenu3_infoUp',
                        meta: {
                            title: '意向提交',
                            hideInMenu: false,
                            hideInMenu2:false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/project/ideaUp/index.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project_index',
                        name: 'levelMenu3_project_index',
                        meta: {
                            title: '项目详情',
                            hideInMenu: false,
                            hideInMenu2:false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/project/index/index.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_project_distributive',
                        name: 'levelMenu3_project_distributive',
                        meta: {
                            title: '人员分配',
                            hideInMenu: false,
                            hideInMenu2:false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/project/distributive/index.vue'),//三级导航及内容
                    },
                    ]
            },
            {
                path: 'levelMenu2_projectItem',
                name: 'levelMenu2_projectItem',
                meta: {
                    title: '项目组',
                    hideInMenu: false,
                    hideInMenu2:false,
                    icon: '/image/bothIcon/icon-assembly.png'
                },
                component: () => import('@/view/project/projectItem/index.vue'),//三级导航及内容
            },
        ]
    },
    {
        // 人事管理
        path: '/hr',
        name: 'hr',
        meta: {
            title: '人事管理',
            hideInMenu: false,
            icon: '/image/index/icon_tongxun_def.png',
            icon2: '/image/index/icon_tongxun_selected.png',
        },
        components: {
            default: Main,//一级导航
        },
        redirect: {name: 'levelMenu2_hr'},
        children: [
            {
                path: 'levelMenu2_hr',
                name: 'levelMenu2_hr',
                meta: {
                    title: '二级导航',
                    hideInMenu: false,
                    level:1,
                    // icon: '/image/bothIcon/icon-assembly.png'
                },
                component: menu,//二级导航
                redirect: {name: 'levelMenu3_depart'},
                children: [
                    {
                        path: 'levelMenu3_depart',
                        name: 'levelMenu3_depart',
                        meta: {
                            title: '部门管理',
                            hideInMenu: false,
                            icon: '/image/hr/icon-部门管理.png'
                        },
                        component: () => import('@/view/hr/department/list/list.vue'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_hr',
                        name: 'levelMenu3_hr',
                        meta: {
                            title: '人员管理',
                            hideInMenu: false,
                            icon: '/image/hr/icon-内部通讯录.png'
                        },
                        component: () => import('@/view/hr/personalManage/list/list'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_external',
                        name: 'levelMenu3_external',
                        meta: {
                            title: '外部联系人',
                            hideInMenu: false,
                            icon: '/image/hr/icon-外部联系人.png'
                        },
                        component: () => import('@/view/hr/externalContact/list/list'),//三级导航及内容
                    }
                    ]
            },
        ]
    },
    // {
    //     // 考勤管理
    //     path: '/kaoqin',
    //     name: 'kaoqin',
    //     meta: {
    //         title: '考勤管理',
    //         hideInMenu: false,
    //         icon: '/image/index/icon_kaoqin_def.png',
    //         icon2: '/image/index/icon_kaoqin_selected.png',
    //     },
    //     components: {
    //         default: Main,//一级导航
    //     },
    //     redirect: {name: 'levelMenu2_kaoqin'},
    //     children: [
    //         {
    //             path: 'levelMenu2_kaoqin',
    //             name: 'levelMenu2_kaoqin',
    //             meta: {
    //                 title: '二级导航',
    //                 hideInMenu: false,
    //                 level: 1,
    //                 // icon: '/image/bothIcon/icon-assembly.png'
    //             },
    //             component: menu,//二级导航
    //             redirect: {name: 'levelMenu3_attendance'},
    //             children: [
    //                 {
    //                     path: 'levelMenu3_attendance',
    //                     name: 'levelMenu3_attendance',
    //                     meta: {
    //                         title: '考勤设置',
    //                         hideInMenu: false,
    //                         icon: '/image/attendance/icon-attendM.png'
    //                     },
    //                     component: () => import('@/view/attendManage/attendanceSet/list/list'),//三级导航及内容,
    //                     redirect: {name: 'levelMenu4_kaoqinAttend'},
    //                     children: [
    //                         {
    //                             path: 'levelMenu4_kaoqinAttend',
    //                             name: 'levelMenu4_kaoqinAttend',
    //                             meta: {
    //                                 title: '考勤组管理',
    //                                 hideInMenu: false,
    //                                 icon: '/image/attendance/icon-attendM.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendGuanli/attend'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_kaoqinDetail',
    //                             name: 'levelMenu4_kaoqinDetail',
    //                             meta: {
    //                                 title: '考勤组详情',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendDetail/attend'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_kaoqinXiugai',
    //                             name: 'levelMenu4_kaoqinXiugai',
    //                             meta: {
    //                                 title: '修改规则',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendDetail/revision'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_kaoqinPaiban',
    //                             name: 'levelMenu4_kaoqinPaiban',
    //                             meta: {
    //                                 title: '排班',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendDetail/crew'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_banci',
    //                             name: 'levelMenu4_banci',
    //                             meta: {
    //                                 title: '班次管理',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendGuanli/grades'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_jiaban',
    //                             name: 'levelMenu4_jiaban',
    //                             meta: {
    //                                 title: '加班规则',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendGuanli/overTime'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_buka',
    //                             name: 'levelMenu4_buka',
    //                             meta: {
    //                                 title: '补卡规则',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/attendManage/attendGuanli/buCard'),
    //                         },
    //
    //                     ]
    //                 },
    //                 {
    //                     path: 'levelMenu3_statistics',
    //                     name: 'levelMenu3_statistics',
    //                     meta: {
    //                         title: '考勤统计',
    //                         hideInMenu: false,
    //                         icon: '/image/attendance/icon-attend.png'
    //                     },
    //                     component: () => import('@/view/attendManage/attendanceStatistics/list/list'),//三级导航及内容
    //                 }
    //             ]
    //         },
    //     ]
    // },
    {
        // 审批
        path: '/approval',
        name: 'approval',
        meta: {
            title: '审批',
            hideInMenu: false,
            icon: '/image/index/icon_shenpi_def.png',
            icon2: '/image/index/icon_shenpi_selected.png'
        },
        components: {
            default: Main,//一级导航
        },
        redirect: {name: 'levelMenu2_approval'},
        children: [
            {
                path: 'levelMenu2_approval',
                name: 'levelMenu2_approval',
                meta: {
                    title: '二级导航',
                    hideInMenu: false,
                    level: 1,
                    icon: '/image/bothIcon/icon-assembly.png'
                },
                component: menu,//二级导航
                redirect: {name: 'levelMenu3_examine'},
                children: [
                    {
                        path: 'levelMenu3_examine',
                        name: 'levelMenu3_examine',
                        meta: {
                            title: '内部审批流程',
                            hideInMenu: false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/approval/insideApproval/list/list'),//三级导航及内容,
                    },
                    {
                        path: 'levelMenu3_serveApproval',
                        name: 'levelMenu3_serveApproval',
                        meta: {
                            title: '服务窗业务单',
                            hideInMenu: false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/approval/serveApproval/list/list'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_dataExport',
                        name: 'levelMenu3_dataExport',
                        meta: {
                            title: '数据导出',
                            hideInMenu: false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/approval/dataExport/list/list'),//三级导航及内容
                    },
                    {
                        path: 'levelMenu3_vacationManager',
                        name: 'levelMenu3_vacationManager',
                        meta: {
                            title: '假期管理',
                            hideInMenu: false,
                            icon: '/image/bothIcon/icon-assembly.png'
                        },
                        component: () => import('@/view/approval/vacationManager/list/list'),//三级导航及内容
                    }
                ]
            },
        ]
    },
    // {
    //     // 公告
    //     path: '/affiche',
    //     name: 'affiche',
    //     meta: {
    //         title: '公告',
    //         hideInMenu: false,
    //         icon: '/image/index/icon_gonggao_def.png',
    //         icon2: '/image/index/icon_gonggao_selected.png',
    //     },
    //     components: {
    //         default: Main,//一级导航
    //     },
    //     redirect: {name: 'levelMenu2_affiche'},
    //     children: [
    //         {
    //             path: 'levelMenu2_affiche',
    //             name: 'levelMenu2_affiche',
    //             meta: {
    //                 title: '二级导航',
    //                 hideInMenu: false,
    //                 level: 1,
    //                 icon: '/image/bothIcon/icon-assembly.png'
    //             },
    //             component: menu,//二级导航
    //             redirect: {name: 'levelMenu3_proclamation'},
    //             children: [
    //                 {
    //                     path: 'levelMenu3_proclamation',
    //                     name: 'levelMenu3_proclamation',
    //                     meta: {
    //                         title: '所有公告',
    //                         hideInMenu: false,
    //                         icon: '/image/bothIcon/icon-assembly.png'
    //                     },
    //                     component: () => import('@/view/affiche/allAffiche/list/list'),//三级导航及内容,
    //                     redirect: {name: 'levelMenu4_afficheDetail'},
    //                     children: [
    //                         {
    //                             path: 'levelMenu4_afficheDetail',
    //                             name: 'levelMenu4_afficheDetail',
    //                             meta: {
    //                                 title: '公告列表',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/affiche/afficheDetail/afficheDetail'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_editorAffiche',
    //                             name: 'levelMenu4_editorAffiche',
    //                             meta: {
    //                                 title: '编辑公告',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/affiche/afficheDetail/editorAffiche'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_afficheIssue',
    //                             name: 'levelMenu4_afficheIssue',
    //                             meta: {
    //                                 title: '发布新公告',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/affiche/afficheDetail/afficheIssue'),
    //                         },
    //                         {
    //                             path: 'levelMenu4_newAffiche',
    //                             name: 'levelMenu4_newAffiche',
    //                             meta: {
    //                                 title: '新员工欢迎公告',
    //                                 hideInMenu: false,
    //                                 icon: '/image/bothIcon/icon-assembly.png'
    //                             },
    //                             component: () => import('@/view/affiche/afficheDetail/newAffiche'),
    //                         },
    //                         // {
    //                         //     path: 'levelMenu4_editorAffiche',
    //                         //     name: 'levelMenu4_editorAffiche',
    //                         //     meta: {
    //                         //         title: '编辑公告',
    //                         //         hideInMenu: false,
    //                         //         icon: '/image/bothIcon/icon-assembly.png'
    //                         //     },
    //                         //     component: () => import('@/view/affiche/afficheDetail/editorAffiche'),
    //                         // }
    //                     ]
    //                 },
    //                 {
    //                     path: 'levelMenu3_welAffiche',
    //                     name: 'levelMenu3_welAffiche',
    //                     meta: {
    //                         title: '新增公告',
    //                         hideInMenu: false,
    //                         icon: '/image/bothIcon/icon-assembly.png'
    //                     },
    //                     component: () => import('@/view/affiche/welAffiche/list/list'),//三级导航及内容
    //                 }
    //             ]
    //         },
    //     ]
    // },
    {
        path: '/view/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true,
            level:0,
        },
        component: (resolve) => require(['@/view/login.vue'], resolve)
    },
];
export default routers;